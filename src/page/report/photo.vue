<template>
   <div style="height: 0px">
      <div  id="reportmap" style="width:100%;height:580px;"></div>
      <div  id="indexline" style="width:100%;height:580px;"></div>
      <div >
      <div id="b1" style="width:100%;height:580px;"></div>
      <div id="b2" style="width:100%;height:580px;"></div>
      <div id="b3" style="width:100%;height:580px;"></div>
      <div id="b4" style="width:100%;height:580px;"></div>
      </div>
      <Row>
        <Col :span="8"><tstable :rank="influence"></tstable></Col>
        <Col :span="8"><tstable :rank="transmission"></tstable></Col>
        <Col :span="8"><tstable :rank="reputation"></tstable></Col>
      </Row>
      <Row style="margin-top: 20px">
        <Col :span="8">人均消费
          <div style="margin-top: 40px"><item :useravg="useravg" :avg="avg.avg_amount" :unit="avgunit"></item></div>
        </Col>
        <Col :span="8">
          游客消费地排行
          <tstable  :rank="ranks" style="margin-top: 40px"></tstable></Col>
        <Col :span="8"><div id="cashbar" style="width: 100%;height: 400px"></div></Col>
      </Row>
      </div>
</template>

<script>
  import http from "../../http";
  import repotMap from './repotMap'
  import indexLine from './IndexLine'
  import item from './item'
  import ImgBar from './ImgBar'
  import exp from './exp'
  import lengthBar from './lengthBar'
  import exp_pie from './exp_pie'
  export default {
    name: "photo",
    components:{
      repotMap,
      indexLine,
      ImgBar,
      item,
      exp,
      lengthBar,
      exp_pie,
    },
    data(){
      return{
        reportDate:[http.getYesterDay(),http.getToday()],
        showchech:1,
        FlowCityName: '全省',
        //游客人数
        tourPeople: '',
        //区域游客占比
        areaPeople: [],
        areaPeople1: [],
        //游客趋势
        trendPeople: [],
        trendPeople1: [],
        //核心景区排行
        coreSenic: [],
        columns1: [
          {
            title: '景区名称',
            key: 'name',
            render: (h, params) => {
              return h('div', [
                h('img', {
                  style: {
                    height: '30px',
                    width: '30px',
                  },
                  attrs: {
                    src: params.row.image.thumb_url
                  }
                }),
                h('span',{
                  style:{
                    position:'absolute',
                    marginTop:'9px',
                    marginLeft:'5px'
                  }
                }, params.row.name)
              ]);
            }
          },
          {
            title: '景区级别',
            key: 'grade_alias'
          },
          {
            title: '所在区县',
            key: 'distname'
          },
          {
            title: '所在州市',
            key: 'cityname'
          },

          {
            title: '景区最优承载量',
            key: 'fit_capacity'
          },
          {
            title: '最大承载量',
            key: 'max_capacity',
            width:115,
            render:(h,params)=>{
              if (params.row.max_capacity==0) {
                return h('span','暂无数据')
              } else {
                return h('div',[
                  h('span',params.row.max_capacity)
                ])
              }
            }
          },
          {
            title: '营业时间',
            key: 'busi_time_alias'
          },
        ],
        //景区指数排行
        influence: [],
        transmission: [],
        reputation: [],
        //基本画像
        imggender: [],
        imgage: [],
        imgcar: [],
        imgcash: [],
        imgedu: [],
        imgmobile: [],
        cfcity:[],
        cfprov:[],
        //人口迁徙
        inMove:[],
        outMove:[],
        //一机游用户消费
        avg: '',
        cate: [],
        rank: [],
        ranks: [],
        //线下消费
        //游客体验-累计新增投诉量
        clink:'',
        cratio:'',
        ctotal:'',
        cavg:'',
        cmax:'',
        cmin:'',
        ccc:[],
        //区域游客占比
        //投诉时长分析
        bar1:'base_1',
        bar2:'base_2',
        bar3:'base_3',
        bar4:'base_4',
        useravg:'用户平均消费金额',
        avgunit:'元',
        issend:0,
        wjj:'',
      }

    },
    mounted(){
      this.indexMap()
    },
    methods:{
      indexMap(){
        http.get('bi/get_tourism_dist_by_date',{date:'2018-9-16'}).then(resp=>{
          this.pieData2map=resp.data.hits.map(item=>{return{name:item.name,value:item.proportion}})
          console.log(this.pieData2map)
        })
        this.indexMaps()
        this.indexLine()
        this.initImg()
        this.cash()
        this.onecash()
      },
      onecash(){
        //一机游用户消费
        http.get('bi/get_consume_by_datespan', {
          startTime: http.gmt2strm(this.reportDate[0]),
          endTime: http.gmt2strm(this.reportDate[1]),
          city_id: this.city
        }).then(resp => {
          this.avg = resp.data.hits.avg
          this.cate = resp.data.hits.cate
          this.initPie('cashbar','消费类型占比',resp.data.hits.cate)
          this.rank = resp.data.hits.rank
          if (this.rank.length!=0){
            this.rank = resp.data.hits.rank.sort((v1, v2) => v2.avg - v1.avg)
            let tt= 0
            for (var i=0;i<this.rank.length;i++){
              tt +=this.rank[i].avg
            }
            this.ranks = this.rank.map(item =>{return{name:item.name,total:tt,pers:item.avg/tt,avg:'人均消费'+item.avg+'元'}})
          }
        })
      },
      cash(){
        //景区指数排行
        http.get('bi/get_scenic_influence_datespan', {
          startTime: http.gmt2strm(this.reportDate[0]),
          endTime: http.gmt2strm(this.reportDate[1]),
          top:5
        }).then(resp => {
          this.influence = resp.data.hits.map(i=>{return{name:i.name,pers:i.score/10,avg:i.score+'分'}})
        })

        http.get('bi/get_scenic_transmission_datespan', {
          startTime: http.gmt2strm(this.reportDate[0]),
          endTime: http.gmt2strm(this.reportDate[1]),
          top:5
        }).then(resp => {
          this.transmission = resp.data.hits.map(i=>{return{name:i.name,pers:i.score/10,avg:i.score+'分'}})
        })
        http.get('bi/get_scenic_reputation_datespan', {
          startTime: http.gmt2strm(this.reportDate[0]),
          endTime: http.gmt2strm(this.reportDate[1]),
          top:5
        }).then(resp => {
          this.reputation = resp.data.hits.map(i=>{return{name:i.name,pers:i.score/10,avg:i.score+'分'}})
        })

      },
      initPie(id,title,data){
        let pie=this.$echarts.init(document.getElementById(id))
        pie.setOption({
          animation: false,
          title : {
            text: title,
            x:'left',
            textStyle:{
              fontSize:14
            }

          },
          color:["#006EFF", "#29CC85", "#ffbb00", "#ff584c", "#9741d9", "#1fc0cc", "#7ff936", "#ff9c19", "#e63984", "#655ce6", "#47cc50", "#fb0b6"],
          tooltip : {
            trigger: 'item',
            formatter: " {b} :<br/> {c} ({d}%)"
          },
          legend: {
            // top:'1%',
            bottom:'1%',
            left: 'center',
            icon: "circle",
            data: data.map(i=>{return i.name})
          },
          series : [
            {
              type: 'pie',
              data: data,
              label: {
                normal: {
                  show: true,
                  position: 'outside',
                  formatter: '{b}\n{d}%',
                }
              },
            }
          ],

        })
      },
      indexMaps(){
        //区域游客占比
        http.get('bi/get_tourism_dist_by_datespan', {
          startTime: http.gmt2strm(this.reportDate[0]),
          endTime: http.gmt2strm(this.reportDate[1]),
          city_id: this.city
        }).then(resp => {
          this.areaPeople = resp.data.hits
          this.areaPeople1 = resp.data.hits.map(item => {
            return {name: item.name, value: item.proportion}
          })
          let map = this.$echarts.init(document.getElementById('reportmap'))
          map.setOption({
            animation: false,
            title:{
              text:'单位（%）',
              textStyle:{
                fontSize:12
              }
            },
            visualMap: {
              show:false,
              min: 0,
              max: 100,
              text:['High','Low'],
              realtime: false,
              calculable: true,
              inRange: {
                color: ['#e0ffff', '#006edd']
              }
            },
            series : [
              {
                name: '浏览量',
                type: 'map',
                //coordinateSystem: 'geo',
                //geoIndex: 0,
                map: '云南',
                roam: false,
                label: {
                  normal: {
                    show: true,
                    textStyle: {
                      color: 'rgba(0,0,0,0.4)'
                    },
                    formatter: '{b}\n{c}',
                    borderWidth:0
                  }
                },
                itemStyle: {
                  normal:{
                    borderColor: 'rgba(0, 0, 0, 0.2)'
                  },
                  emphasis:{
                    areaColor: null,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                },
                data:this.areaPeople1
              }
            ]
          })
        })
      },
      indexLine(){
        http.get('bi/get_tourism_trend_by_timespan', {
          startTime: http.gmt2strm(this.reportDate[0]),
          endTime: http.gmt2strm(this.reportDate[1]),
          city_id: this.city
        }).then(resp => {
          this.trendPeople1 = resp.data.hits.list
          let myChart = this.$echarts.init(document.getElementById('indexline'))
          // 绘制图表
          myChart.setOption({
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: this.trendPeople1.map(item => {
                return item.date
              })
            },
            yAxis: {
              type: 'value'
            },
            lineStyle: {
              color: "#006EFF"
            },
            series: [{
              data: this.trendPeople1.map(item => {
                return item.value
              }),
              type: 'line',
              avoidLabelOverlap: true,
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  rotate: 15
                }
              },
            }]
          });
        })
      },
      initImg(){
        http.get('bi/get_portrait_base_by_datespan', {
          startTime: http.gmt2strm(this.reportDate[0]),
          endTime: http.gmt2strm(this.reportDate[1]),
          city_id: this.city
        }).then(resp => {
          this.initImgBar('b1',resp.data.hits.gender)
          this.initImgBar('b2',resp.data.hits.age.sort((v1, v2) => v2.value - v1.value))
          this.initImgBar('b3',resp.data.hits.consumpting.sort((v1, v2) => v2.value - v1.value))
          this.initImgBar('b4',resp.data.hits.edu.sort((v1, v2) => v2.value - v1.value))
        })
      },
      initImgBar(b1,data){
        let bar = this.$echarts.init(document.getElementById(b1))
        bar.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          color:["#006EFF", "#29CC85", "#ffbb00", "#ff584c", "#9741d9", "#1fc0cc", "#7ff936", "#ff9c19", "#e63984", "#655ce6", "#47cc50", "#fb0b6"],
          legend: {
            bottom:'1%',
            x: 'center',
            icon: "circle",
            data: data.map(item=>{return item.name})
          },
          series: [
            {
              name:'访问来源',
              type:'pie',
              radius: ['40%', '55%'],
              label: {
                normal: {
                  show: true,
                  position: 'outside',
                  formatter: '{b}\n{d}%',
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              avoidLabelOverlap: true,
              labelLine:{
                show:true,
                length:5,
                length2:4
              },
              data: data
            }
          ]
        })
      },
    }
  }
</script>

<style scoped>

</style>
