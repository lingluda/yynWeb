<template>
  <div >
    <div class="ti">
      <span style="color: rgb(102, 159, 199);">旅游热度</span>
      <Icon type="ios-arrow-forward" />
      <span style="font-size: 12px;color: #000">热度排行</span>
    </div>
    <div class="tabpane_content">
        <card  class="lyrd_sy_ykrs">
          <div style="margin-bottom: 20px">
            <span style="font-weight: bold;color: #000000">热门目的地网络热度</span>

          </div>
          <div style="border: 1px solid #dcdee2;margin-top: 20px">
            <div class="tabpane_content_title">
              <div>
                <span style="color: #000;font-size:14px;font-weight: bold">一机游当日搜索各目的地访问用户数据 </span>
                <span style="color: #a5a5a5;font-size:12px;">(单位：万人)</span>
              </div>
              <DatePicker v-model="picDate1" placement="bottom-end" type="date" placeholder="Select date" style="width: 120px;float: right" :options="disoptionsdate"></DatePicker>
            </div>
            <div id="simBar" style="width: 100%;height: 285px;"></div>
          </div>
        </card>
        <card style="margin-top: 20px">
          <div style="margin-bottom: 20px;">
            <span style="font-weight: bold;color: #000000">热门景区网络热度</span>
          </div>

          <div style="border: 1px solid #dcdee2;margin-top: 20px">
            <div class="tabpane_content_title">
               <div >
                 <span style="color: #000;font-weight:bold;font-size:14px;">一机游当日搜索各景区访问用户数据 </span>
                  <span style="color: #a5a5a5;font-size:12px;">(单位：万人)</span>
                </div>
              <DatePicker  placement="bottom-end" v-model="picDate2" type="date" placeholder="Select date" style="width:120px;float: right" :options="disoptionsdate"></DatePicker>
            </div>
            <div id="simBars" style="width: 100%;height: 300px;"></div>
          </div>
        </card>
        <card style="margin-top: 20px">
              <div style="margin-bottom: 20px;">
                <span style="font-weight: bold;color: #000000">热门路线</span>
                <!--<pers-st :pers="21"></pers-st>-->
                <Tooltip content="一机游app对各线路页面访问量排行" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
                </Tooltip>
                <DatePicker v-model="picDate3" placement="bottom-end" type="date" placeholder="Select date" style="width: 120px;float: right" :options="disoptionsdate"></DatePicker>
              </div>
              <div>
                <!--<Table :columns="columns" :data="fdata"></Table>-->
                <table style="border: 1px solid rgb(220, 222, 226);width: 100%;text-align: left;border-collapse:collapse">
                  <tr>
                    <td style="width: 20%;padding: 10px;border-bottom: 1px solid rgb(206,226,225);background-color: #f6f8fa">热门线路下单量（次）</td>
                    <td style="width: 40%;padding: 10px;border-bottom: 1px solid rgb(206,226,225);background-color: #f6f8fa"></td>
                    <!--<td style="width: 20%;padding: 10px;border-bottom: 1px solid rgb(206,226,225);background-color: #f6f8fa">热门路线(次)</td>-->
                    <td style="width: 20%;padding: 10px;border-bottom: 1px solid rgb(206,226,225);background-color: #f6f8fa;text-align: center">下单平均价格(元)</td>
                  </tr>
                  <tr v-for="item in fdata">
                    <td style="border-bottom: 1px dashed rgb(206,226,225);font-size: 12px">{{item.name}}</td>
                    <td style="border-bottom: 1px dashed rgb(206,226,225)"> <pers-st :pers=item.tpers :persn=item.order></pers-st></td>
                    <!--<td style="font-weight: bold;border-bottom: 1px dashed rgb(206,226,225)">{{item.dau}}</td>-->
                    <td style="font-weight: bold;border-bottom: 1px dashed rgb(206,226,225);text-align: center">{{item.price}}</td>
                  </tr>
                </table>
              </div>
            </card>
        <card style="margin-top: 20px">
          <div>
            <Row :gutter="16">
              <Col span="12">
                <div style="border: 1px solid #dcdee2">
                  <div style="padding: 20px">
                    <span style="font-weight: bold;color: #000000">景区客流</span>
                    <span style="color:#a5a5a5"> (单位：万人)</span>
                  </div>
                  <DatePicker type="date" v-model="picDate4" placeholder="Select date" style="width: 120px;margin-left:15px;" :options="disoptionsdate"></DatePicker>
                  <div id="max1" style="width: 100%;height: 550px;"></div>
                </div>
              </Col>
              <Col span="12">
                <div style="border: 1px solid #dcdee2">
                  <div style="padding: 20px">
                    <span style="font-weight: bold;color: #000000">景区客流变化</span>
                    <span style="color:#a5a5a5"> (单位：万人)</span>
                  </div>
                  <!--<RadioGroup type="button" style="margin-left: 15px" v-model="addling">
                    <Radio label="1">增长量</Radio>
                    <Radio label="2">增长率</Radio>
                  </RadioGroup>-->
                  <DatePicker type="date" v-model="picDate5" placeholder="Select date" style="width: 120px;margin-left:15px;" :options="disoptionsdate"></DatePicker>
                  <div id="max2" style="width: 100%;height: 550px;"></div>
                </div>
              </Col>
            </Row>
          </div>
        </card>
    </div>
  </div>
</template>
<style lang="less" scoped>
table{
  td{
    padding: 10px;
  }
}

.ti {
  margin-bottom: unset !important;
  color: #000;
  font-size: 16px;
  font-weight: 600;
  line-height: 60px;
  padding-left: 20px;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #e2e4e6;
}
  .ivu-card-body {
    padding: 20px;
    background: #f2f2f2;
  }
  .tabpane_content {
  padding: 20px;
  background: #f2f2f2;
}
.tabpane_content_title{padding: 20px 20px 0px;font-size:15px;display:flex;justify-content: space-between}
</style>
<script>
  import http from '@/http.js'
  import '@/dateFormate'
  import pers_st from '../analysisform'
  import * as echartsHelper from '@/helpers/echarts'

  export default {
    components:{
      "pers-st":pers_st
    },
    name: "tourhot",
    data() {
      return {
        unitD:'',
        addling:'1',
        picDate1:http.getYesterDay(),
        picDate2:http.getYesterDay(),
        picDate3:http.getYesterDay(),
        picDate4:http.getToday(),
        picDate5:http.getToday(),
        chan:'app',
        barDatax:[],
        barDatay:[],
        barDatax1:[],
        barDatay1:[],
        chanclick:'app',
        columns: [
          {
            title: '热门路线',
            key: 'name',
          },
          {
            title: '购买次数',
            key: 'order',
            render: (h, params) => {
                return h('div', [
                  h('pers-st', {
                    props: {
                      pers:params.row.order,
                    }
                  }),
                  h('span',params.row.order)
                ]);
              }

          },{
            title: '热门路线访问量(次)',
            key: 'dau',
          },
          {
            title: '购买平均价格(元)',
            key: 'price',
          }
        ],
        fdata:[],
        max1his:[],
        max1n:[],
        max1y:[],
        max2his:[],
        max2n:[],
        max2y:[],
        max2name:[],
        disoptionsdate: {
            disabledDate (date) {
                return date< new Date(2018,7,1) || date > new Date()
            }
        }
      }
    },
    mounted() {

    },
    methods: {
      initSimBar(){
        this.unitD='万'
        let simbar = this.$echarts.init(document.getElementById("simBar"),'macarons')
        simbar.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            backgroundColor:'#323232',
            formatter: '{b}<br />{c} 万'
          },
          color:['#006EFF'],
          xAxis: {
            type: 'category',
            data: this.barDatax,
            axisLine:{
              lineStyle:{
                color:'#888888',
        width:2
      }
      },
          },
          grid: {
            left: '3%',
            right: '5%',
            bottom: '3%',
            top:'3%',
            containLabel: true
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, 0.1],
            axisLine:{
              lineStyle:{
                color:'#888888',
                width:2
              }
            }
          },
          series: [{
            data: this.barDatay,
            type: 'bar',
            barWidth:'25%',
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: 'top',
                  formatter: '{c}'
                },
              /*  color: function (params) {
                  var colorList = [
                    '#ff9b33', '#ff9b33', '#ff9b33', '#006EFF', '#006EFF',
                    '#006EFF', '#006EFF', '#006EFF', '#006EFF', '#006EFF',
                    '#006EFF', '#006EFF', '#006EFF', '#006EFF', '#006EFF'
                  ];
                  return colorList[params.dataIndex]
                },*/
              }
            }
          }]
        })
      },
      initMax1(){
        let max1 = this.$echarts.init(document.getElementById("max1"),'macarons')
        max1.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            backgroundColor:'#323232',
            formatter: '{b0}<br />{a0} {c0} 万<br />{a1} {c1} 万'
          },
          legend: {
            bottom: 10,
            left: 'center',
            icon:'circle',
            data: [
              {
                name : "峰值"
              },
              {
                name : "景区历史游客峰值",
                icon:'line'
              }
            ]
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '7%',
            top:'3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLine:{
              lineStyle:{
                color:'#888888',
                width:2
              }
            }
          },
          yAxis: {
            type: 'category',
            data: this.max1y,
            axisLine:{
              lineStyle:{
                color:'#888888',
                width:2
              }
            }
          },
          series: [
            {
              name: '峰值',
              type: 'bar',
              data: this.max1n,
              barWidth:'50%',
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: 'right',
                    formatter: '{c} 万',
                    color:"#000"
                  },
               /*   color: function (params) {
                    // build a color map as your need.
                    var colorList = [
                      '#006EFF', '#006EFF', '#006EFF', '#006EFF', '#006EFF',
                      '#006EFF', '#006EFF', '#ff9b33', '#ff9b33', '#ff9b33',
                      '#006EFF', '#006EFF', '#006EFF', '#006EFF', '#006EFF'
                    ];
                    return colorList[params.dataIndex]
                  },*/

                }
              }
            },
            {
              name: '景区历史游客峰值',
              type: 'line',
              data: this.max1his,
              barWidth:'50%',
              itemStyle: {
                normal: {
                  color: '#bababa',
                  label: {
                    show: false,
                    position: 'right',
                    formatter: '{c} 万'
                  },
                }
              },
              smooth:false
            }
          ],
          color: ['#006EFF','orange']
        })
      },
      initMax2(){
        let max1 = this.$echarts.init(document.getElementById("max2"),'macarons')
        max1.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            backgroundColor:'#323232',
            formatter: '{b0}<br />{a0} {c0} 万<br />{a1} {c1} 万 <br />{a2} {c2}'+ this.unitD
          },
          legend: {
            bottom: 10,
            left: 'center',
            icon:'circle',
            data: [{
              name: "当日景区客流"
            },{
              name : "昨日景区客流"
            }
            // ,{
            //   name : "客流变化量",
            //   icon:"line"
            // }
            ]
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '7%',
            top:'3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLine:{
              lineStyle:{
                color:'#888888',
                width:2
              }
            }
          },
          yAxis: {
            type: 'category',
            data: this.max2name,
            axisLine:{
              lineStyle:{
                color:'#888888',
                width:2
              }
            }
          },
          series: [
            {
              name: '当日景区客流',
              type: 'bar',
              data: this.max2n,
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: 'right',
                    formatter: '{c} 万',
                    color:"#000"
                  },
                }
              }
            },
            {
              name: '昨日景区客流',
              type: 'bar',
              data: this.max2y,
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: 'right',
                    formatter: '{c} 万',
                    color:"#000"
                  },
                }
              }
            },
            // {
            //   name: '客流变化量',
            //   type: 'line',
            //   data: this.max2his,
            //   itemStyle: {
            //     normal: {
            //       color:"#bababa",
            //       label: {
            //         show: false,
            //         position: 'right',
            //         formatter: '{c}'
            //       },
            //     }
            //   },
            //   smooth:false
            // }

          ],
          color:['#006EFF','#29CC85','red']
        })
      },
      initSimBars1(){
        let simbars = this.$echarts.init(document.getElementById("simBars"),'macarons')
        simbars.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            backgroundColor:'#323232',
            formatter: '{b}<br />{c} 万'
          },
          xAxis: {
            type: 'category',
            data: this.barDatax1,
            axisLabel: {
              interval: 0,
              formatter: echartsHelper.labelFormatter
            },

            axisLine:{
              lineStyle:{
                color:'#888888',
                width:2
              }
            }
          },

          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top:'3%',
            containLabel: true
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, 0.1],
            axisLine:{
              lineStyle:{
                color:'#888888',
                width:2
              }
            }
          },
          series: [{
            data: this.barDatay1,
            type: 'bar',
            barWidth:'25%',
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: 'top',
                  formatter: '{c}'
                },
               /* color: function (params) {
                  // build a color map as your need.
                  var colorList = [
                    '#ff9b33', '#ff9b33', '#ff9b33', '#006EFF', '#006EFF',
                    '#006EFF', '#006EFF', '#006EFF', '#006EFF', '#006EFF',
                    '#006EFF', '#006EFF', '#006EFF', '#006EFF', '#006EFF'
                  ];
                  return colorList[params.dataIndex]
                },*/

              }
            }
          }],
          color:['#006EFF'],
        })
      },
      pic(val){
        this.$router.push(val)
      },
      clickchange(){
        this.barDatax=[]
        this.barDatay=[]
        var date = new Date().format(
          "yyyy-MM-dd"
        )
        http.get('bi/get_hot_desc_vist_qty_by_date',{chan:this.chan,date:'2018-09-01',top:10}).then(resp=>{
          for (var i=0;i<resp.data.hits.length;i++) {
            this.barDatax.push(resp.data.hits[i].name)
            this.barDatay.push(parseInt(resp.data.hits[i].dau/100)/100)
          }
          this.initSimBar()
        })
      },
      chanchange1(){
        this.barDatax1=[]
        this.barDatay1=[]
        http.get('bi/get_hot_scenic_vist_qty_by_date',{chan:this.chanclick,date:'2018-09-01',top:10}).then(resp=>{
          for (var i=0;i<resp.data.hits.length;i++) {
            this.barDatax1.push(resp.data.hits[i].name)
            this.barDatay1.push(parseInt(resp.data.hits[i].dau/100)/100)
          }
          this.initSimBars1()
        })
      },
      click1(){
        this.barDatax=[]
        this.barDatay=[]
        http.get('bi/get_hot_desc_vist_qty_by_date',{chan:'app',date:http.gmt2str(this.picDate1),top:10}).then(resp=>{
          for (var i=0;i<resp.data.hits.length;i++) {
            this.barDatax.push(resp.data.hits[i].name)
            this.barDatay.push(parseInt(resp.data.hits[i].dau/100)/100)
          }
          this.initSimBar()
        })
      },
      click2(){
        this.barDatax1=[]
        this.barDatay1=[]
        http.get('bi/get_hot_scenic_vist_qty_by_date',{chan:'app',date:http.gmt2str(this.picDate2),top:10}).then(resp=>{
          for (var i=0;i<resp.data.hits.length;i++) {
            this.barDatax1.push(resp.data.hits[i].name)
            this.barDatay1.push(parseInt(resp.data.hits[i].dau/100)/100)
          }
          this.initSimBars1()
        })
      },
      click3(){
        http.get('bi/get_hot_line_by_date',{date:http.gmt2str(this.picDate3),top:10}).then(resp=>{
          this.fdata = resp.data.hits;
          for (var i=0;i<resp.data.hits.length;i++){
            this.fdata[i].tpers=this.fdata[i].order/(this.fdata[0].order*1.3)*100
          }
        })
      },
      click4(){
        this.max1his=[]
        this.max1n=[]
        this.max1y=[]
        http.get('bi/get_scenic_tourist_top_by_date',{date:http.gmt2str(this.picDate4),top:10}).then(resp=>{
          let max1data=resp.data.hits.sort((v1, v2) => v1.n - v2.n);
          for (var i=0;i<resp.data.hits.length;i++) {
            this.max1his.push(parseInt(max1data[i].his/100)/100)
            this.max1n.push(parseInt(max1data[i].n/100)/100)
            this.max1y.push(max1data[i].name)
          }
          this.initMax1()
        })
      },
      click5(){
        this.max2n=[]
        this.max2y=[]
        this.max2name=[]
        this.max2his=[]
        http.get('bi/get_scenic_tourist_ince_by_date',{date:http.gmt2str(this.picDate5),top:10}).then(resp=>{
          let max2data = resp.data.hits.sort((v1,v2)=> v1.n - v2.n)
          for (var i=0;i<resp.data.hits.length;i++) {
            this.max2his.push(parseInt(max2data[i].ince/100)/100)
            this.max2n.push(parseInt(max2data[i].n/100)/100)
            this.max2y.push(parseInt(max2data[i].pre/100)/100)
            this.max2name.push(max2data[i].name)
          }
          this.initMax2()
        })
      },
      addliang(){
        if (this.addling==1) {
          this.unitD='万'
          this.max2n=[]
          this.max2y=[]
          this.max2name=[]
          this.max2his=[]
          console.log(this.unitD)
          http.get('bi/get_scenic_tourist_ince_by_date',{date:http.gmt2str(this.picDate5),top:10}).then(resp=>{
            let max2data = resp.data.hits.sort((v1,v2)=> v1.n - v2.n)
            for (var i=0;i<resp.data.hits.length;i++) {
              this.max2his.push(parseInt(max2data[i].ince/100)/100)
              this.max2n.push(parseInt(max2data[i].n/100)/100)
              this.max2y.push(parseInt(max2data[i].pre/100)/100)
              this.max2name.push(max2data[i].name)
            }
            this.initMax2()
          })
        }
        if (this.addling==2){
          this.unitD='%'
          this.max2n=[]
          this.max2y=[]
          this.max2name=[]
          this.max2his=[]
          console.log(this.unitD)
          http.get('bi/get_scenic_tourist_ince_by_date',{date:http.gmt2str(this.picDate5),top:10}).then(resp=>{
            let max2data = resp.data.hits.sort((v1,v2)=> v1.n - v2.n)
            for (var i=0;i<resp.data.hits.length;i++) {
              this.max2his.push(max2data[i].rate)
              this.max2n.push(parseInt(max2data[i].n/100)/100)
              this.max2y.push(parseInt(max2data[i].pre/100)/100)
              this.max2name.push(max2data[i].name)
            }
            this.initMax2()
          })
        }
      }
    },
    watch:{
      chan:'clickchange',
      chanclick:'chanchange1',
      picDate1:'click1',
      picDate2:'click2',
      picDate3:'click3',
      picDate4:'click4',
      picDate5:'click5',
      addling:'addliang',
    }
  }
</script>

