<template>
  <div>
    <div class="ti">
      <span >旅游热度</span>
    </div>
    <div>
    <Tabs value="destination" @on-click="pic">
      <TabPane label="首页" name="index">
      </TabPane  >
      <TabPane label="热度排行" name="destination"  class="tabpane_content">
        <card>
          <div style="margin-bottom: 20px">
            <span style="font-weight: bold;color: #000000">热门目的地网络热度TOP10</span>

          </div>
          <div style="border: 1px solid #dcdee2;margin-top: 20px">
            <div class="tabpane_content_title">
              <div style="padding-left:60px">
                <span style="color: #000;font-size:16px;">一机游今日搜索各目的地方访问用户数据 </span>
                <span style="color: #a5a5a5;font-size:14px;">(单位：万次)</span>
              </div>
              <DatePicker v-model="picDate1" type="date" placeholder="Select date" style="width: 150px;float: right"></DatePicker>
            </div>
            <div id="simBar" style="width: 100%;height: 285px;top:-35px"></div>
          </div>
        </card>
        <card style="margin-top: 20px">
          <div style="margin-bottom: 20px;">
            <span style="font-weight: bold;color: #000000">热门景区网络热度TOP10</span>
          </div>

          <div style="border: 1px solid #dcdee2;margin-top: 20px">
            <div class="tabpane_content_title">
               <div style="padding-left:60px">
                 <span style="color: #000;font-size:16px;">一机游今日搜索各目的地方访问用户数据 </span>
                  <span style="color: #a5a5a5;font-size:14px;">(单位：万次)</span>
                </div>
              <DatePicker  v-model="picDate2" type="date" placeholder="Select date" style="width:150px;float: right"></DatePicker>
            </div>
            <div id="simBars" style="width: 100%;height: 300px;top:-30px"></div>
          </div>
        </card>
        <card style="margin-top: 20px">
          <div style="margin-bottom: 20px;">
            <span style="font-weight: bold;color: #000000">热门路线TOP10</span>
            <Tooltip content="一机游app对各线路页面访问量排行" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
            </Tooltip>
            <DatePicker v-model="picDate3" type="date" placeholder="Select date" style="width: 150px;float: right"></DatePicker>
          </div>
          <div>
            <Table :columns="columns" :data="fdata"></Table>
          </div>
        </card>
        <card style="margin-top: 20px">
          <div>
            <Row :gutter="16">
              <Col span="12">
                <div style="border: 1px solid #dcdee2">
                  <div style="padding: 20px">
                    <span style="font-weight: bold;color: #000000">景区客流TOP10</span>
                    <span style="color:#a5a5a5"> (单位：万人)</span>
                  </div>
                  <DatePicker type="date" v-model="picDate4" placeholder="Select date" style="width: 120px;margin-left:15px;"></DatePicker>
                  <div id="max1" style="width: 100%;height: 550px;top:-40px"></div>
                </div>
              </Col>
              <Col span="12">
                <div style="border: 1px solid #dcdee2">
                  <div style="padding: 20px">
                    <span style="font-weight: bold;color: #000000">景区客流变化TOP10</span>
                    <span style="color:#a5a5a5"> (单位：万人)</span>
                  </div>
                  <RadioGroup type="button" style="margin-left: 15px">
                    <Radio label="large">增量</Radio>
                    <Radio label="default">增长量</Radio>
                  </RadioGroup>
                  <DatePicker type="date" v-model="picDate5" placeholder="Select date" style="width: 120px"></DatePicker>
                  <div id="max2" style="width: 100%;height: 550px;top:-40px"></div>
                </div>
              </Col>
            </Row>
          </div>
        </card>
      </TabPane>

      <TabPane label="景区客流热力" name="hotmap">
      </TabPane>
      <TabPane label="平台运营" name="platform">
      </TabPane>
    </Tabs>
    </div>
  </div>
</template>
<style lang="less" scoped>
.ti {
  color: #000;
  font-size: 16px;
  font-weight: 700;
  line-height: 52px;
  padding-left: 20px;
  height: 45px;
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
  export default {
    name: "tourhot",
    data() {
      return {
        picDate1:'2018-09-01',
        picDate2:'2018-09-01',
        picDate3:'2018-08-22',
        picDate4:'2018-09-17',
        picDate5:'2018-09-17',
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
                  h('Progress', {
                    props: {
                      type: 'person',
                      percent: params.row.order,
                      status:'active',
                      'hide-info':'true'
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
      }
    },
    mounted() {
    },
    methods: {
      initSimBar(){
        let simbar = this.$echarts.init(document.getElementById("simBar"),'macarons')
        simbar.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            backgroundColor:'#323232'
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
            containLabel: true
          },
          yAxis: {
            type: 'value',
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
                color: function (params) {
                  // build a color map as your need.
                  var colorList = [
                    '#ff9b33', '#ff9b33', '#ff9b33', '#006EFF', '#006EFF',
                    '#006EFF', '#006EFF', '#006EFF', '#006EFF', '#006EFF',
                    '#006EFF', '#006EFF', '#006EFF', '#006EFF', '#006EFF'
                  ];
                  return colorList[params.dataIndex]
                },
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
            backgroundColor:'#323232'
          },
          legend: {
            bottom: 10,
            left: 'center',
            icon:'circle',
            data: ['峰值','景区历史游客峰值']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '7%',
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
       /*     show:true,
            axisLine: {show:false},
            axisTick: {show:false},
            splitLine:{show:false},*/
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
                    formatter: '{c}'
                  },
                  color: function (params) {
                    // build a color map as your need.
                    var colorList = [
                      '#006EFF', '#006EFF', '#006EFF', '#006EFF', '#006EFF',
                      '#006EFF', '#006EFF', '#ff9b33', '#ff9b33', '#ff9b33',
                      '#006EFF', '#006EFF', '#006EFF', '#006EFF', '#006EFF'
                    ];
                    return colorList[params.dataIndex]
                  },

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
                  color: 'red',
                }
              }
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
            backgroundColor:'#323232'
          },
          legend: {
            bottom: 10,
            left: 'center',
            icon:'circle',
            data: ['今日景区客流','昨日景区客流','客流变化量']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '7%',
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
              name: '今日景区客流',
              type: 'bar',
              data: this.max2n
            },
            {
              name: '昨日景区客流',
              type: 'bar',
              data: this.max2y
            },
            {
              name: '客流变化量',
              type: 'line',
              data: this.max2his
            }

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
            backgroundColor:'#323232'
          },
          xAxis: {
            type: 'category',
            data: this.barDatax1,
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
            containLabel: true
          },
          yAxis: {
            type: 'value',
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
                color: function (params) {
                  // build a color map as your need.
                  var colorList = [
                    '#ff9b33', '#ff9b33', '#ff9b33', '#006EFF', '#006EFF',
                    '#006EFF', '#006EFF', '#006EFF', '#006EFF', '#006EFF',
                    '#006EFF', '#006EFF', '#006EFF', '#006EFF', '#006EFF'
                  ];
                  return colorList[params.dataIndex]
                },

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
          console.log('sb',resp.data.hits)
          for (var i=0;i<resp.data.hits.length;i++) {
            this.barDatax.push(resp.data.hits[i].name)
            this.barDatay.push(parseInt(resp.data.hits[i].dau)/10000)
          }
          this.initSimBar()
        })
      },
      chanchange1(){
        this.barDatax1=[]
        this.barDatay1=[]
        http.get('bi/get_hot_scenic_vist_qty_by_date',{chan:this.chanclick,date:'2018-09-01',top:10}).then(resp=>{
          console.log(resp.data.hits)
          for (var i=0;i<resp.data.hits.length;i++) {
            this.barDatax1.push(resp.data.hits[i].name)
            this.barDatay1.push(parseInt(resp.data.hits[i].dau)/10000)
          }
          this.initSimBars1()
        })
      },
      click1(){
        this.barDatax=[]
        this.barDatay=[]
        console.log(http.gmt2str(this.picDate1))
        http.get('bi/get_hot_desc_vist_qty_by_date',{chan:'app',date:http.gmt2str(this.picDate1),top:10}).then(resp=>{
          for (var i=0;i<resp.data.hits.length;i++) {
            this.barDatax.push(resp.data.hits[i].name)
            this.barDatay.push(parseInt(resp.data.hits[i].dau)/10000)
          }
          this.initSimBar()
        })
      },
      click2(){
        this.barDatax1=[]
        this.barDatay1=[]
        http.get('bi/get_hot_scenic_vist_qty_by_date',{chan:'app',date:http.gmt2str(this.picDate2),top:10}).then(resp=>{
          console.log(resp.data.hits)
          for (var i=0;i<resp.data.hits.length;i++) {
            this.barDatax1.push(resp.data.hits[i].name)
            this.barDatay1.push(parseInt(resp.data.hits[i].dau)/10000)
          }
          this.initSimBars1()
        })
      },
      click3(){
        http.get('bi/get_hot_line_by_date',{date:http.gmt2str(this.picDate3),top:10}).then(resp=>{
          console.log(resp.data.hits)
          this.fdata = resp.data.hits;
        })
      },
      click4(){
        this.max1his=[]
        this.max1n=[]
        this.max1y=[]
        http.get('bi/get_scenic_tourist_top_by_date',{date:http.gmt2str(this.picDate4),top:10}).then(resp=>{
          for (var i=0;i<resp.data.hits.length;i++) {
            this.max1his.push(resp.data.hits[i].his)
            this.max1n.push(resp.data.hits[i].n)
            this.max1y.push(resp.data.hits[i].city)
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
          console.log('top',resp.data.hits)
          for (var i=0;i<resp.data.hits.length;i++) {
            this.max2his.push(resp.data.hits[i].ince)
            this.max2n.push(resp.data.hits[i].n)
            this.max2y.push(resp.data.hits[i].pre)
            this.max2name.push(resp.data.hits[i].city)
          }
          this.initMax2()
        })
      },
    },
    watch:{
      chan:'clickchange',
      chanclick:'chanchange1',
      picDate1:'click1',
      picDate2:'click2',
      picDate3:'click3',
      picDate4:'click4',
      picDate5:'click5',
    }
  }
</script>

