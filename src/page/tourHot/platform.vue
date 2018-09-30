<template>
  <div>
    <div class="ti">
      <span>平台运营</span>
    </div>

     <div class="tabpane_content">
        <card>
          <div style="margin-bottom: 20px">
            <span style="font-weight: bold;color: #000000">{{(this.picDate).toString().substring(8,10)}}日平台运营数据</span>

            <DatePicker v-model="picDate" type="date" placeholder="Select date"
                        style="width: 120px;float: right"></DatePicker>
          </div>
          <Row :gutter="16">
            <Col span="12">
              <div style="border: 1px solid #dcdee2;height:120px;padding: 20px">
                <Row>
                  <Col span="4" style="height: 100%;">
                    <div>
                      <img src="../../assets/imgs/plat.png" style="width:62px;height: 62px;"/>
                    </div>
                  </Col>
                  <Col span="10">
                    <div style="margin-bottom: 10px;width: 50%;">
                      <span style="font-weight: bold;color: #000000">新增用户量</span>

                    </div>
                    <span style="font-size: 32px;color: #006eff;font-weight: 600">{{addData.total}}</span>
                    <span style="color: #006eff">人</span>
                  </Col>
                  <Col span="10">
                    <div style="background-color: #f6f8fa;padding-top: 2px">
                    <span >&nbsp;&nbsp;与昨日环比&nbsp;&nbsp;&nbsp;&nbsp; </span> <span :style="{color:color1}"><Icon v-if="is1==1" type="ios-arrow-round-up" size="22" style="margin-bottom: 4px"/><Icon v-if="is1!=1" type="ios-arrow-round-down" size="22" style="margin-bottom: 4px"/>{{fratio}}%&nbsp;&nbsp;</span>
                    </div>
                    <div style="background-color: #f6f8fa;margin-top: 10px;padding-top: 2px">
                    <span >&nbsp;&nbsp;与上月同比&nbsp;&nbsp;&nbsp;&nbsp; </span> <span :style="{color:color2}"><Icon v-if="is2==1" type="ios-arrow-round-up" size="22" style="margin-bottom: 4px"/><Icon v-if="is2!=1" type="ios-arrow-round-down" size="22" style="margin-bottom: 4px"/>{{flink}}%&nbsp;&nbsp;</span>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span="12">
              <div style="border: 1px solid #dcdee2;height:120px;padding: 20px">
                <Row>
                  <Col span="4" style="height: 100%;">
                    <div>
                      <img src="../../assets/imgs/plat1.png" style="width:62px;height: 62px;"/>
                    </div>
                  </Col>
                  <Col span="10">
                    <div style="margin-bottom: 10px;width: 50%;">
                      <span style="font-weight: bold;color: #000000">活跃用户数</span>

                    </div>
                    <span style="font-size: 32px;color: #006eff;font-weight: 600">{{aduData.total}}</span>
                    <span style="color: #006eff">人</span>
                  </Col>
                  <Col span="10">
                    <div style="background-color: #f6f8fa;padding-top: 2px">
                    <span>&nbsp;&nbsp;与昨日环比&nbsp;&nbsp;&nbsp;&nbsp; </span> <span :style="{color:color3}"><Icon v-if="is3==1" type="ios-arrow-round-up" size="22" style="margin-bottom: 4px"/><Icon v-if="is3!=1" type="ios-arrow-round-down" size="22" style="margin-bottom: 4px"/>{{ratio}}%&nbsp;&nbsp;</span>
                    </div>

                    <div style="background-color: #f6f8fa;margin-top: 10px;padding-top: 2px">
                    <span>&nbsp;&nbsp;与上月同比&nbsp;&nbsp;&nbsp;&nbsp; </span> <span :style="{color:color4}"><Icon v-if="is4==1" type="ios-arrow-round-up" size="22" style="margin-bottom: 4px"/><Icon v-if="is4!=1" type="ios-arrow-round-down" size="22" style="margin-bottom: 4px"/>{{link}}%&nbsp;&nbsp;</span>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </card>
        <card style="margin-top: 20px">
          <div style="margin-bottom: 20px">
            <span style="font-weight: bold;color: #000000">用户趋势分析</span>

            <DatePicker type="daterange"  v-model="picMonth" @on-change="change1" placeholder="自选时间"
                        style="width: 180px;float: right"></DatePicker>
            <Button style="border-radius: 0px;float: right;height: 32px;" @click="choose7">近7天</Button>
           <!-- <DatePicker v-model="dd1" placement="bottom-end" format="yyyy-MM" type="month" placeholder="Select date" style="width: 85px;float: right"></DatePicker>
            <span style="float: right;padding:5px 5px 0px 5px">-</span>
            <DatePicker v-model="dd2" placement="bottom-end" format="yyyy-MM" type="month" placeholder="Select date" style="width: 85px;float: right"></DatePicker>
-->
          </div>
          <div id="trend" style="border: 1px solid #dcdee2;height: 400px;width: 100%"></div>
        </card>
     </div>

  </div>
</template>
<style lang="less" scoped>
  .tabpane_content {
    padding: 20px;
    background: #f2f2f2;
  }
  .ti{
    color: #000;
    font-size: 16px;
    font-weight: 700;
    line-height: 60px;
    padding-left: 20px;
    height: 60px;
  }
</style>

<script>
  import http from '@/http.js'

  export default {
    data() {
      return {
        dd1:http.getToday(),
        dd2:'2018-01',
        fratio:'',
        flink:'',
        ratio:'',
        link:'',
        is1:'',
        is2:'',
        is3:'',
        is4:'',
        color1:'',
        color2:'',
        color3:'',
        color4:'',
        picMonth: [http.getMonthAgo(), http.getToday()],
        picDate: http.getYesterDay(),
        addData: '',
        aduData: '',
        lineDatax1: [],
        lineDatax2: [],
        lineDatay: [],
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      choose7(){
        this.picMonth=[http.getWeekAgo(), http.getToday()]
        this.lineDatax1 = []
        this.lineDatax2 = []
        this.lineDatay = []
        http.get('bi/get_ops_trend_date', {startTime: http.getWeekAgo(), endTime: http.getToday(), type: 'd'}).then(resp => {
          for (var i = 0; i < resp.data.hits.length; i++) {
            this.lineDatax1.push(resp.data.hits[i].dau)
            this.lineDatax2.push(resp.data.hits[i].incr_num)
            this.lineDatay.push(resp.data.hits[i].date)
          }
          this.initTrend()
        })
      },
      init() {
        this.lineDatax1 = []
        this.lineDatax2 = []
        this.lineDatay = []
        http.get('bi/get_ops_trend_date', {startTime: http.getMonthAgo(), endTime: http.getToday(), type: 'd'}).then(resp => {
          for (var i = 0; i < resp.data.hits.length; i++) {
            this.lineDatax1.push(resp.data.hits[i].dau)
            this.lineDatax2.push(resp.data.hits[i].incr_num)
            this.lineDatay.push(resp.data.hits[i].date)
          }
          this.initTrend()
        })
      },
      pic(val) {
        this.$router.push(val)
      },
      initTrend() {
        let trend = this.$echarts.init(document.getElementById("trend"))
        trend.setOption({
          xAxis: {
            type: 'category',
            data: this.lineDatay
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            splitLine: {
              lineStyle: {
                color: '#e8e8e8'
              }
            }
          },
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '6%',
            right: '6%',
            bottom: '15%',
          },
          legend: {
            bottom: 10,
            data: ['活跃用户数', '新增用户量']
          },
          color: ['blue', 'red'],
          series: [{
            name: '活跃用户数',
            data: this.lineDatax1,
            type: 'line'
          },
            {
              name: '新增用户量',
              data: this.lineDatax2,
              type: 'line'
            }
          ]
        })
      },
      change1(val1) {
        this.lineDatax1 = []
        this.lineDatax2 = []
        this.lineDatay = []
        http.get('bi/get_ops_trend_date', {startTime: val1[0], endTime: val1[1], type: 'd'}).then(resp => {
          for (var i = 0; i < resp.data.hits.length; i++) {
            this.lineDatax1.push(resp.data.hits[i].dau)
            this.lineDatax2.push(resp.data.hits[i].incr_num)
            this.lineDatay.push(resp.data.hits[i].date)
          }
          this.initTrend()
        })
      },
      wp1(){
        http.get('bi/get_ops_qty_by_date', {date: http.gmt2str(this.picDate)}).then(resp => {
          this.addData = resp.data.hits[0]
          this.aduData = resp.data.hits[1]
          if (Number(resp.data.hits[0].link)>=0){
            this.flink=resp.data.hits[0].link
            this.color1='#ffbb00'
            this.is1=1
          } else {
            this.flink=-resp.data.hits[0].link
            this.color1='green'
            this.is1=2
          }
          if (Number(resp.data.hits[0].ratio)>=0){
            this.fratio=resp.data.hits[0].ratio
            this.color2='#ffbb00'
            this.is2=1
          } else {
            this.fratio=-resp.data.hits[0].ratio
            this.color2='green'
            this.is2=2
          }

          if (Number(resp.data.hits[1].link)>=0){
            this.link=resp.data.hits[1].link
            this.color3='#ffbb00'
            this.is3=1
          } else {
            this.link=-resp.data.hits[1].link
            this.color3='green'
            this.is3=2
          }
          if (Number(resp.data.hits[1].ratio)>=0){
            this.ratio=resp.data.hits[1].ratio
            this.color4='#ffbb00'
            this.is4=1
          } else {
            this.ratio=-resp.data.hits[1].ratio
            this.color4='green'
            this.is4=2
          }
        })
      },
      _dd1(){
        this.picMonth=[this.dd2,this.dd1]
        this.lineDatax1 = []
        this.lineDatax2 = []
        this.lineDatay = []
        http.get('bi/get_ops_trend_date', {startTime: http.gmt2str(this.dd2), endTime: http.gmt2str(this.dd1), type: 'd'}).then(resp => {
          for (var i = 0; i < resp.data.hits.length; i++) {
            this.lineDatax1.push(resp.data.hits[i].mau)
            this.lineDatax2.push(resp.data.hits[i].incr_num)
            this.lineDatay.push(resp.data.hits[i].date)
          }
          this.initTrend()
        })
      }
    },
    watch:{
      picDate:'wp1',
      dd1:'_dd1'
    }
  }
</script>
