<template>
  <div >
    <div class="ti">
      <span style="color: rgb(102, 159, 199);">旅游热度</span>
      <Icon type="ios-arrow-forward" />
      <span style="font-size: 12px;color: #000">热度排行</span>
    </div>
    <div class="tabpane_content">
      <card>
        <div style="height: 40px">
          <span style="font-weight: bold;color: #000000">景区指数排行</span>
        <div style="float: right">
          <RadioGroup v-model="select07" type="button" @on-change="slelect7">
            <Radio label="1">近7日</Radio>
            <Radio label="2">近30日</Radio>
          </RadioGroup>
          <DatePicker v-model="indexDate1" placement="bottom-end" format="yyyy-MM-dd" type="date" placeholder="请选择日期" style="width:120px" ></DatePicker>
          <span>-</span>
          <DatePicker v-model="indexDate2" placement="bottom-end" format="yyyy-MM-dd" type="date" placeholder="请选择日期" style="width:120px" ></DatePicker>
        </div>
        </div>

        <Row :gutter="16">
          <Col :span="8">
            <div style="border: solid 1px #dcdee2;height: 240px">
              <div id="qsnet">
                <div style="margin: 10px 0 0 5px;">
                <span style="color: #000">景区影响力指数</span>
                <Tooltip content="去除常驻人口游客数量的计算" placement="right" max-width="200">
                  <Icon size="19"  type="ios-help-circle-outline" />
                </Tooltip>
                </div>
                <ul >
                  <li class="qsnet_li"  v-for="(items,index) in influence">
                    <Row class="qsnet_row">
                      <Col span="2" style="line-height: 20px;margin: 0 -6px 2px 4px">
                        <i class="qsnet_idx">{{index+1}}</i>
                        <!--<span class="qsnet_sp">111</span>-->
                      </Col>
                      <Col v-if="items.names==''" span="5" class="qsnet_num">{{items.name.substring(0,4)}}</Col>
                      <Col v-if="items.names!=''" span="5" class="qsnet_num">
                        <Tooltip placement="top" max-width="200" :content=items.name>
                        {{items.name.substring(0,4)}}
                        </Tooltip>
                      </Col>

                      <Col span="14" style="margin: 5px 0 0 0">  <pers-st :pers=items.score*10 ></pers-st></Col>

                      <Col span="3" class="qsnet_num">{{items.score}}分</Col>
                    </Row>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col :span="8" >
            <div style="border: solid 1px #dcdee2;height: 240px">
              <div id="qsnet">
                <div style="margin: 10px 0 0 5px;">
                  <span style="color: #000">景区传播力指数</span>
                  <Tooltip content="去除常驻人口游客数量的计算" placement="right" max-width="200">
                    <Icon size="19"  type="ios-help-circle-outline" />
                  </Tooltip>
                </div>
                <ul >
                  <li class="qsnet_li"  v-for="(items,index) in transmission">
                    <Row class="qsnet_row">
                      <Col span="2" style="line-height: 20px;margin: 0 -6px 2px 4px">
                        <i class="qsnet_idx">{{index+1}}</i>
                        <!--<span class="qsnet_sp">111</span>-->
                      </Col>
                      <Col v-if="items.names==''" span="5" class="qsnet_num">{{items.name.substring(0,4)}}</Col>
                      <Col v-if="items.names!=''" span="5" class="qsnet_num">
                        <Tooltip placement="top" max-width="200" :content=items.name>
                          {{items.name.substring(0,4)}}
                        </Tooltip>
                      </Col>
                      <Col span="14" style="margin: 5px 0 0 0">  <pers-st :pers=items.score*10 ></pers-st></Col>

                      <Col span="3" class="qsnet_num">{{items.score}}分</Col>
                    </Row>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col :span="8" >
            <div style="border: solid 1px #dcdee2;height: 240px">
              <div id="qsnet">
                <div style="margin: 10px 0 0 5px;">
                  <span style="color: #000">景区美誉度指数</span>
                  <Tooltip content="去除常驻人口游客数量的计算" placement="right" max-width="200">
                    <Icon size="19"  type="ios-help-circle-outline" />
                  </Tooltip>
                </div>
                <ul >
                  <li class="qsnet_li"  v-for="(items,index) in reputation">
                    <Row class="qsnet_row">
                      <Col span="2" style="line-height: 20px;margin: 0 -6px 2px 4px">
                        <i class="qsnet_idx">{{index+1}}</i>
                        <!--<span class="qsnet_sp">111</span>-->
                      </Col>
                      <Col v-if="items.names==''" span="5" class="qsnet_num">{{items.name.substring(0,4)}}</Col>
                      <Col v-if="items.names!=''" span="5" class="qsnet_num">
                        <Tooltip placement="top" max-width="200" :content=items.name>
                          {{items.name.substring(0,4)}}
                        </Tooltip>
                      </Col>
                      <Col span="14" style="margin: 5px 0 0 0">  <pers-st :pers=items.score*10 ></pers-st></Col>

                      <Col span="3" class="qsnet_num">{{items.score}}分</Col>
                    </Row>
                  </li>
                </ul>
              </div>
            </div>
          </Col>


        </Row>
      </card>
      <card style="margin: 20px 0px 20px 0px">
        <div style="margin-bottom: 20px;">
          <span style="font-weight: bold;color: #000000">热门路线</span>
          <!--<pers-st :pers="21"></pers-st>-->
          <Tooltip content="一机游app对各线路页面下单量排行" placement="right" max-width="220"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
          </Tooltip>
          <DatePicker v-model="picDate3" placement="bottom-end" type="date" placeholder="Select date" style="width: 120px;float: right" :options="disoptionsdate"></DatePicker>
        </div>
        <div>
          <!--<Table :columns="columns" :data="fdata"></Table>-->
          <table style="border: 1px solid rgb(220, 222, 226);width: 100%;text-align: left;border-collapse:collapse">
            <tr>
              <td style="width: 30%;padding: 10px;border-bottom: 1px solid rgb(206,226,225);background-color: #f6f8fa">热门线路名称</td>
              <td style="width: 40%;padding: 10px;border-bottom: 1px solid rgb(206,226,225);background-color: #f6f8fa">下单次数</td>
              <!--<td style="width: 20%;padding: 10px;border-bottom: 1px solid rgb(206,226,225);background-color: #f6f8fa">热门路线(次)</td>-->
              <td style="width: 20%;padding: 10px;border-bottom: 1px solid rgb(206,226,225);background-color: #f6f8fa;text-align: center">下单平均价格(￥)</td>
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

       <!-- <card style="margin-top: 20px">
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
                  &lt;!&ndash;<RadioGroup type="button" style="margin-left: 15px" v-model="addling">
                    <Radio label="1">增长量</Radio>
                    <Radio label="2">增长率</Radio>
                  </RadioGroup>&ndash;&gt;
                  <DatePicker type="date" v-model="picDate5" placeholder="Select date" style="width: 120px;margin-left:15px;" :options="disoptionsdate"></DatePicker>
                  <div id="max2" style="width: 100%;height: 550px;"></div>
                </div>
              </Col>
            </Row>
          </div>
        </card>-->
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
#qsnet li,
#zsnet li {
  list-style: none;
}
.qsnet_idx {
  width: 20px;
  height: 20px;
  font-style: normal;
  background: #b6b6b6;
  border-radius: 3px;
  font-size: 12px;
  padding: 2px 6px;
  color: #fff;
  margin-right: 8px;
}
.qsnet_sp {
  color: #000;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.qsnet_time {
  color: #a5a5a5;
  font-size: 14px;
  padding-left: 50px;
}
.qsnet_num {
  line-height: 20px;
}
.qsnet_li {
  line-height: 25px;
  // padding: 15px 0 5px;
  padding: 12px 0 5px 5px;
  //border-bottom: 1px solid #dcdee2;
}

// .qsnet_li:last-of-type{
//   border-bottom: none;
// }

.qsnet_row {
  color: #000;
  font-size: 14px;
}
#qsnet li:nth-child(1) i,
#zsnet li:nth-child(1) i {
  background: #ff716b;
}
#qsnet li:nth-child(2) i,
#qsnet li:nth-child(3) i,
#zsnet li:nth-child(2) i,
#zsnet li:nth-child(3) i {
  background: #ffbb00;
}

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
        select07:'',
        indexDate1:http.getYesterDay(),
        indexDate2:http.getYesterDay(),
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
        },
        influence:[],
        transmission:[],
        reputation:[]
      }
    },
    mounted() {

    },
    methods: {
      slelect7(){
        if (this.select07==1){
          this.indexDate1=http.getWeekAgo()
          this.indexDate2=http.getToday()
        }
        if (this.select07==2){
          this.indexDate1=http.getMonthAgo()
          this.indexDate2=http.getToday()
        }
      },
      initIndex(){
        http.get('bi/get_scenic_influence_datespan',{startTime:http.gmt2strm(this.indexDate1),endTime:http.gmt2strm(this.indexDate2),top:5}).then(resp=>{
          this.influence = resp.data.hits
          for (var i=0;i<this.influence.length;i++){
            if (http.StrLen(this.influence[i].name)>10){
              this.influence[i].names = this.influence[i].name
            }else {
              this.influence[i].names=''
            }
          }
          console.log(this.influence)
        })
        http.get('bi/get_scenic_transmission_datespan',{startTime:http.gmt2strm(this.indexDate1),endTime:http.gmt2strm(this.indexDate2),top:5}).then(resp=>{
          this.transmission = resp.data.hits
          for (var i=0;i<this.transmission.length;i++){
            if (http.StrLen(this.transmission[i].name)>10){
              this.transmission[i].names = this.transmission[i].name
            }else {
              this.transmission[i].names=''
            }
          }
          console.log(this.transmission)
        })
        http.get('bi/get_scenic_reputation_datespan',{startTime:http.gmt2strm(this.indexDate1),endTime:http.gmt2strm(this.indexDate2),top:5}).then(resp=>{
          this.reputation = resp.data.hits
          for (var i=0;i<this.reputation.length;i++){
            if (http.StrLen(this.reputation[i].name)>10){
              this.reputation[i].names = this.reputation[i].name
            }else {
              this.reputation[i].names=''
            }
          }
          console.log(this.reputation)
        })
      },
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
            top:'1%',
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
            //formatter: '{b0}<br />{a0} {c0} 万<br />{a1} {c1} 万 <br />{a2} {c2}'+ this.unitD
            formatter: '{b0}<br />{a0} {c0} 万<br />{a1} {c1} 万'
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
            this.fdata[i].tpers=this.fdata[i].order/(this.fdata[0].order*0.7)*100
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
      indexDate1:'initIndex',
      indexDate2:'initIndex',
    }
  }
</script>

