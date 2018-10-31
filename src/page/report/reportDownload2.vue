<template>
  <div style="background:#f2f2f2;">
    <div class="tits">
      <router-link to="report">报表下载</router-link>
      <span style="font-size: 14px">> 预览</span></div>
    <card style="margin: 20px">
      <div style="text-align: center;font-size: 32px;font-weight: bold">数据报表</div>
      <div style="font-size: 28px">一、该报表时间段</div>
      <div>（{{d11[0]}}至{{d11[1]}}）</div>
      <div style="font-size: 28px">二、报表区域：{{FlowCityName}}</div>
      <div style="font-size: 28px">三、报表数据</div>
      <div style="font-size: 28px">3.1 旅游热度概况</div>

      <div v-if="c.indexOf('1')>-1">(1) 游客人数
        <div>{{FlowCityName}} 总接待游客量为 {{tourPeople.total}} 人次，（如选择日，则有以下内容：与昨日环比 {{tourPeople.ratio}}），与上月同比 {{tourPeople.link}}。</div>
      </div>

      <div v-if="c.indexOf('2')>-1">(2) {{FlowCityName}}游客占比
        <div> {{FlowCityName}}接待游客占比量前5分别为：</div>
        <div>（排名第一 {{areaPeople[0].name}}）接待人数约 {{areaPeople[0].value}}人，占比总量 {{areaPeople[0].proportion}}%;</div>
        <div>（排名第二 {{areaPeople[1].name}}）接待人数约 {{areaPeople[1].value}}人，占比总量 {{areaPeople[1].proportion}}%;</div>
        <div>（排名第三 {{areaPeople[2].name}}）接待人数约 {{areaPeople[2].value}}人，占比总量 {{areaPeople[2].proportion}}%;</div>
        <div>（排名第四 {{areaPeople[3].name}}）接待人数约 {{areaPeople[3].value}}人，占比总量 {{areaPeople[3].proportion}}%;</div>
        <div>（排名第五 {{areaPeople[4].name}}）接待人数约 {{areaPeople[4].value}}人，占比总量 {{areaPeople[4].proportion}}%;</div>
        <div style="width: 400px;height: 500px;">
          <repotMap :issend="issend" :wjj="wjj" :mapdata="this.areaPeople1" style="width: 100%;height: 500px;"></repotMap>
        </div>
      </div>

      <div v-if="c.indexOf('3')>-1">(3) 游客趋势
        <div>
          {{trendPeople[0].date}} 日客流量最大，为 {{trendPeople[0].value}}人；{{trendPeople[trendPeople.length-1].date}} 日客流量最小，为 {{trendPeople[trendPeople.length-1].value}}人。
        </div>
        <indexLine :issend="issend" :wjj="wjj" :trendPeople1="trendPeople1"></indexLine>
      </div>


      <div style="font-size: 28px">3.2 核心景区排行</div>
      <div v-if="c1.length>0">
        <div>{{FlowCityName}} 累计游客人数排行前五分别为：</div>
        <div> {{coreSenic[0].name}}，接待游客人 {{coreSenic[0].cur}}人次；</div>
        <div> {{coreSenic[1].name}}，接待游客人 {{coreSenic[1].cur}}人次；</div>
        <div> {{coreSenic[2].name}}，接待游客人 {{coreSenic[2].cur}}人次；</div>
        <div> {{coreSenic[3].name}}，接待游客人 {{coreSenic[3].cur}}人次；</div>
        <div> {{coreSenic[4].name}}，接待游客人 {{coreSenic[4].cur}}人次；</div>
        <Table :columns="columns1" :data="coreSenic"></Table>
      </div>
      <div style="font-size: 28px">3.3 景区指数排行</div>
      <div v-if="c2.indexOf('6')>-1">
        <div>景区影响力指数最大的为 {{influence[0].name}} ，指数值为 {{influence[0].avg}}；</div>
        <div>景区美誉度指数最大的为 {{reputation[0].name}} ，指数值为 {{reputation[0].avg}}；</div>
        <div>景区传播力指数最大的为 {{transmission[0].name}}，指数值为 {{transmission[0].avg}}；</div>
        <Row v-if="rank.length!==0">
          <Col :span="8"><tstable :rank="influence"></tstable></Col>
          <Col :span="8"><tstable :rank="transmission"></tstable></Col>
          <Col :span="8"><tstable :rank="reputation"></tstable></Col>
        </Row>
      </div>

      <div style="font-size: 28px">3.4 游客画像</div>

      <div v-if="c3.indexOf('7')>-1">(1) 基本画像
        <div>{{FlowCityName}} 来访游客中:</div>
        <div> 男士 占比{{parseInt(imggender[0].value*10000)/100}}%，女士 占比{{parseInt(imggender[1].value*10000)/100}}%；</div>
        <div> {{imgage[0].name}}年龄段的游客最多，占比{{parseInt(imgage[0].value*10000)/100}}%；</div>
        <div> {{imgedu[0].name}}学历 的游客最多，占比{{parseInt(imgedu[0].value*10000)/100}}%；</div>
        <div>消费能力为 {{imgcash[0].name}} 的游客最多，占比{{parseInt(imgcash[0].value*10000)/100}}%；</div>
        <div>有{{parseInt(imgcar[0].value*10000)/100}}%的游客 有车，{{parseInt(imgcar[1].value*10000)/100}}%的游客 无车；</div>
        <div>
          {{parseInt(imgmobile[1].value*10000)/100}}%的游客手机终端类型为IOS，{{parseInt(imgmobile[0].value*10000)/100}}%的游客手机终端类型为Android；
        </div>
        <div>{{cfcity[0].name}}来源游客量最大，占比总游客的{{parseInt(cfcity[0].origin_percent*10000)/100}}%；</div>
        <div>{{cfprov[0].name}}来源游客量最大，占比总游客的{{parseInt(cfprov[0].origin_percent*10000)/100}}%。</div>
        <Row :gutter="16">
          <Col :span="6"><ImgBar :issend="issend" :wjj="wjj" :main="bar1" :sx="imggender"></ImgBar></Col>
          <Col :span="6"><ImgBar :issend="issend" :wjj="wjj" :main="bar2" :sx="imgage"></ImgBar></Col>
          <Col :span="6"><ImgBar :issend="issend" :wjj="wjj" :main="bar3" :sx="imgedu"></ImgBar></Col>
          <Col :span="6"><ImgBar :issend="issend" :wjj="wjj" :main="bar4" :sx="imgcash"></ImgBar></Col>
        </Row>
      </div>

       <div v-if="c3.indexOf('8')>-1">(2) 人口迁徙
       <div>由 （区域） 迁入 （游客已选区域） 的游客量最多， {{inMove[0].line}} 热度最大，热度值为 {{inMove[0].n}}，游客中飞机出游的占比 {{parseInt(inMove[0].plane*10000)/100}}%，火车出游的占比{{parseInt(inMove[0].train*10000)/100}}%，汽车出游的占比{{parseInt(inMove[0].car*10000)/100}}%；</div>
       <div>  由 （游客已选区域） 迁出 （区域） 的游客量最多， {{outMove[0].line}} 热度最大，热度值为{{outMove[0].n}}，游客中飞机出游的占比{{parseInt(outMove[0].plane*10000)/100}}%，火车出游的占比{{parseInt(outMove[0].train*10000)/100}}%，汽车出游的占比{{parseInt(outMove[0].car*10000)/100}}%。
       </div>
         <Table :columns="intable" :data="inMove"></Table>
         <Table :columns="outtable" :data="outMove"></Table>
     </div>

      <div v-if="c3.indexOf('9')>-1">(3) 一机游用户消费
        <div>
          一机游用户平均消费金额为{{avg.avg_amount}}元，</div><div v-if="rank.length!=0">用户在{{rank[0].name}}消费金额最高，为{{rank[0].avg}}元；</div><div>用户消费中，景区门票消费占比{{cate[1].value*100}}%，酒店消费占比{{cate[2].value*100}}%，机票消费占比{{cate[0].value*100}}%。
        </div>
        <Row style="margin-top: 20px">
          <Col :span="8">人均消费
            <div style="margin-top: 40px"><item :useravg="useravg" :avg="avg.avg_amount" :unit="avgunit"></item></div>
          </Col>
          <Col :span="8" >
            游客消费地排行
            <tstable v-if="ranks.length!=0" :rank="ranks" style="margin-top: 40px"></tstable></Col>
          <Col :span="8"><exp_pie :wjj="wjj" :issend="issend" :cate="cate"></exp_pie></Col>
        </Row>
      </div>

      <!--  <div v-if="c3.indexOf('10')>-1">(3) 游客线下消费
         <div>一机游用户平均消费金额为 元，用户在 （消费地） 消费金额最高，为 元；用户消费中，景区门票消费占比 %，酒店消费占比 %，机票消费占比 %。</div>
       </div>-->

        <div style="font-size: 28px">3.5 游客体验</div>
         <div v-if="c4.indexOf('11')>-1">(1) 累计新增投诉量
           <div>累计新增投诉量为{{ctotal}}件，与上月同比{{clink}} % 。与昨日环比{{cratio}} %</div>
         </div>
         <div v-if="c4.indexOf('12')>-1">(2) 投诉时长分析
           <div> （已选时间段） 平台累计已处理投诉量{{ctotal}}件，累计处理中投诉量{{ctotal}}件；已关闭投诉中，平均处理时长为{{cavg}}小时，最大处理时长为{{cmax}}小时，最小处理时长为{{cmin}}小时。</div>
         </div>
        <Row>
            <Col :span="12">
              <item :useravg="cTitle" :avg="closed" :unit="cType">
                 
              </item>
              <item :useravg="cTitle2" :avg="unclosed" :unit="cType">
                  
              </item>
            </Col>
            <Col :span="12">
              <lengthBar :avg_proc="cavg" :max_proc="cmax" :min_proc="cmin"></lengthBar>
            </Col>
          </Row>
         <div v-if="c4.indexOf('13')>-1">(3) 投诉对象及处理情况分析
           <div>游客发起投诉后等待处理的平均时长为{{ccc[0].avg}}小时，最大时长为{{ccc[0].max}}小时，最小时长为{{ccc[0].min}}小时；</div>
           <div>平台投诉处理的平均时长为{{ccc[1].avg}}小时，最大时长为{{ccc[1].avg}} 小时，最小时长为{{ccc[1].avg}} 小时；</div>
           <div>游客投诉申诉后等待处理的平均时长为{{ccc[2].avg}}小时，最大时长为{{ccc[2].avg}} 小时，最小时长为{{ccc[2].avg}} 小时。</div>
         <exp :ccc="ccc"></exp>
         </div>
      <Button @click="send" :disabled='issend==1'>下载</Button>
    </card>
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
  import tstable from './tstable'
  import TableRenderHeader from "iview/src/components/table/header";

  export default {
    name: "reportDownload",
    components: {
      TableRenderHeader,
      repotMap,
      indexLine,
      ImgBar,
      item,
      exp,
      lengthBar,
      exp_pie,
      tstable,
    },
    data() {
      return {
        intable:[
          {
            title:'线路',
            key:'line',
          },
          {
            title:'热度',
            key:'n',
          },
          {
            title:'汽车',
            key:'car',
          },
          {
            title:'火车',
            key:'train',
          },
          {
            title:'飞机',
            key:'plane',
          }
        ],
        outtable:[
          {
            title:'线路',
            key:'line',
          },
          {
            title:'热度',
            key:'n',
          },
          {
            title:'汽车',
            key:'car',
          },
          {
            title:'火车',
            key:'train',
          },
          {
            title:'飞机',
            key:'plane',
          }
        ],
        d11: [this.$route.query.s1, this.$route.query.s2],
        c: this.$route.query.c,
        c1: this.$route.query.c1,
        c2: this.$route.query.c2,
        c3: this.$route.query.c3,
        c4: this.$route.query.c4,
        FlowCity: this.$route.query.city,
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
          /*{
            title: '实时游客人数',
            key: 'isclose',
            render:(h,params)=>{
              if (params.row.n>params.row.fit){
                return h('div',[
                  h('Tooltip',{
                    style:{
                      color:'red',
                    },
                    attrs:{
                      maxWidth:'200',
                      content:'现景区人数已超出景区最优承载人数',
                      placement:'top'
                    }
                  },params.row.isclose)

                ])
              }else {
                return h('div',[
                  h('span',params.row.isclose)
                ])
              }
            }
          },*/
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
        //data1: []
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
        closed:'',
        unclosed:'',
        cTitle:'',
        cTitle2:'',
        cType:'件',
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
    mounted() {
      this.init()
    },
    methods: {
      send(){
        this.issend=1
        this.wjj=http.gmt2strmst(new Date())
        setTimeout(() => {
        window.open('https://tglpt.ybsjyyn.com/as/bi/downrep?startTime='+http.gmt2strm(this.d11[0])+'&endtime='+http.gmt2strm(this.d11[1])+'&folder='+this.wjj)
        }, 4000);
      },
      init() {
        http.get('bi/get_cityname_by_id',{city_id:this.FlowCity}).then(resp=>{
          if (resp.data.hits!=''){
            this.FlowCityName=resp.data.hits
          }

          //人口迁徙
          http.get('bi/get_migrate_by_date', {
            date: http.gmt2strm(this.d11[0]),
            city_name: this.FlowCityName,
            top:10,
            io:'in',
          }).then(resp => {
            if (resp.data.hits.length!=0){
            this.inMove =resp.data.hits.sort((v1,v2)=>v2.n-v1.n)
            for (var i=0;this.inMove.length;i++){
              this.inMove[i].line=this.inMove[i].from+'-'+this.inMove[i].to
            }
            }

              })

          //人口迁徙
          http.get('bi/get_migrate_by_date', {
            date: http.gmt2strm(this.d11[0]),
            city_name: this.FlowCityName,
            top:10,
            io:'out',
          }).then(resp => {
            if (resp.data.hits.length!=0){
            this.outMove =resp.data.hits.sort((v1,v2)=>v2.n-v1.n)
            for (var i=0;this.outMove.length;i++){
              this.outMove[i].line=this.outMove[i].from+'-'+this.outMove[i].to
            }
            }
          })
        })



        //游客人数
        http.get('bi/get_tourism_qty_by_datespan', {
          startTime: http.gmt2strm(this.d11[0]),
          endTime: http.gmt2strm(this.d11[1]),
          city_id: this.FlowCity
        }).then(resp => {
          this.tourPeople = resp.data.hits
        })

        //区域游客占比
        http.get('bi/get_tourism_dist_by_datespan', {
          startTime: http.gmt2strm(this.d11[0]),
          endTime: http.gmt2strm(this.d11[1]),
          city_id: this.FlowCity
        }).then(resp => {
          this.areaPeople = resp.data.hits
          this.areaPeople1 = resp.data.hits.map(item => {
            return {name: item.name, value: item.proportion}
          })
        })

        //游客趋势
        http.get('bi/get_tourism_trend_by_timespan', {
          startTime: http.gmt2strm(this.d11[0]),
          endTime: http.gmt2strm(this.d11[1]),
          city_id: this.FlowCity
        }).then(resp => {
          //console.log('asdasdasdasdasdas',resp.data.hits.list)
          this.trendPeople1 = resp.data.hits.list.sort((v1, v2) => v2.timestamp - v1.timestamp);;
          this.trendPeople = resp.data.hits.list.sort((v1, v2) => v2.value - v1.value);
        })

        //核心景区排行
        http.get('bi/get_key_scenic_tourist_datespan_withdist', {
          startTime: http.gmt2strm(this.d11[0]),
          endTime: http.gmt2strm(this.d11[1]),
          city_id: this.FlowCity
        }).then(resp => {
          this.coreSenic = resp.data.hits
        })

        //景区指数排行
         http.get('bi/get_scenic_influence_datespan', {
           startTime: http.gmt2strm(this.d11[0]),
           endTime: http.gmt2strm(this.d11[1]),
           top:5
         }).then(resp => {
           this.influence = resp.data.hits.map(i=>{return{name:i.name,pers:i.score/10,avg:i.score+'分'}})
         })

        http.get('bi/get_scenic_transmission_datespan', {
          startTime: http.gmt2strm(this.d11[0]),
          endTime: http.gmt2strm(this.d11[1]),
          top:5
        }).then(resp => {
          this.transmission = resp.data.hits.map(i=>{return{name:i.name,pers:i.score/10,avg:i.score+'分'}})
        })
        http.get('bi/get_scenic_reputation_datespan', {
          startTime: http.gmt2strm(this.d11[0]),
          endTime: http.gmt2strm(this.d11[1]),
          top:5
        }).then(resp => {
          this.reputation = resp.data.hits.map(i=>{return{name:i.name,pers:i.score/10,avg:i.score+'分'}})
        })
        //基本画像
        http.get('bi/get_portrait_base_by_datespan', {
          startTime: http.gmt2strm(this.d11[0]),
          endTime: http.gmt2strm(this.d11[1]),
          city_id: this.FlowCity
        }).then(resp => {
         // console.log(resp.data.hits.age);
          this.imggender = resp.data.hits.gender
          this.imgage = resp.data.hits.age.sort((v1, v2) => v2.value - v1.value)
          this.imgage = this.getTop3(this.imgage);
          this.imgcar = resp.data.hits.car
          this.imgcash = resp.data.hits.consumpting.sort((v1, v2) => v2.value - v1.value)
          this.imgcash = this.getTop3(this.imgcash);
          this.imgedu = resp.data.hits.edu.sort((v1, v2) => v2.value - v1.value)
          this.imgedu = this.getTop3(this.imgedu);
          this.imgmobile = resp.data.hits.mobile
        })
           http.get('bi/get_portrait_origin_by_datespan', {
             startTime: http.gmt2strm(this.d11[0]),
             endTime: http.gmt2strm(this.d11[1]),
             type:'city',
           }).then(resp => {
             this.cfcity =resp.data.hits.sort((v1,v2)=>v2.origin_percent - v1.origin_percent)
           })
        http.get('bi/get_portrait_origin_by_datespan', {
          startTime: http.gmt2strm(this.d11[0]),
          endTime: http.gmt2strm(this.d11[1]),
          type:'prov',
        }).then(resp => {
          this.cfprov =resp.data.hits.sort((v1,v2)=>v2.origin_percent - v1.origin_percent)
        })
        /*  http.get('bi/get_portrait_origin_by_datespan', {
            startTime: http.gmt2strm(this.d11[0]),
            endTime: http.gmt2strm(this.d11[1]),
            type:prov,
            city_id: this.FlowCity
          }).then(resp => {
            console.log(resp)

          })*/

        //人口迁徙


        //一机游用户消费
        http.get('bi/get_consume_by_datespan', {
          startTime: http.gmt2strm(this.d11[0]),
          endTime: http.gmt2strm(this.d11[1]),
          city_id: this.FlowCity
        }).then(resp => {
          this.avg = resp.data.hits.avg
          this.cate = resp.data.hits.cate
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



        /*    //线下消费
            http.get('bi/get_key_scenic_tourist_datespan_withdist', {
            startTime: http.gmt2strm(this.d11[0]),
            endTime: http.gmt2strm(this.d11[1]),
            city_id: this.FlowCity
          }).then(resp => {
            console.log(resp)
          })*/

        //游客体验-累计新增投诉量
        http.get('bi/get_complaint_by_date', {
          startTime: http.gmt2strm(this.d11[0]),
          city_id: this.FlowCity
        }).then(resp => {
          this.ctotal = resp.data.hits.total
          this.clink = resp.data.hits.link
          this.cratio = resp.data.hits.ratio
          this.cavg = resp.data.hits.avg_proc
          this.cmax = resp.data.hits.max_proc
          this.cmin = resp.data.hits.min_proc
          this.ccc = resp.data.hits.proc_stat
          this.closed = resp.data.hits.closed
          this.unclosed = resp.data.hits.unclosed
          this.cTitle = http.getToday().substring(5,7) + '月累计已处理投诉量'
          this.cTitle2 = http.getToday().substring(5,7)  + '月累计处理中投诉量'
        })
        http.get('bi/get_complaint_trend_by_timespan', {
          startTime: http.gmt2strm(this.d11[0]),
          endTime: http.gmt2strm(this.d11[1]),
          city_id: this.FlowCity
        }).then(resp => {

        })


        //投诉时长分析
         http.get('bi/get_key_scenic_tourist_datespan_withdist', {
          startTime: http.gmt2strm(this.d11[0]),
          endTime: http.gmt2strm(this.d11[1]),
          city_id: this.FlowCity
        }).then(resp => {
          console.log(resp)
        })

        //投诉对象及处理情况分析
          http.get('bi/get_key_scenic_tourist_datespan_withdist', {
            startTime: http.gmt2strm(this.d11[0]),
            endTime: http.gmt2strm(this.d11[1]),
            city_id: this.FlowCity
          }).then(resp => {
            console.log(resp)
          })
  
      },
      getTop3(allDate){
         const initLen = 3
          const chartData =  allDate.slice(0, initLen)
          let extraValue = 0
          for (let i = initLen, len = allDate.length; i < len; i++){
            if (allDate[i]) {
              extraValue += allDate[i].value
            }
          }
          if(extraValue) {
            chartData.push({
              name: '其他',
              value: extraValue
            })
          }
          return chartData;
      }
    }
  }
</script>

<style scoped>
  .tits {
    line-height: 60px;
    font-size: 16px;
    padding-left: 20px;
    font-weight: 600;
    color: #000;
    background: #fff;
    border-bottom: 1px solid #e2e4e6;
  }

</style>
