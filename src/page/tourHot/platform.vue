<template>
  <div>
    <div class="ti">
      <span style="color: rgb(102, 159, 199);">旅游热度</span>
      <Icon type="ios-arrow-forward" />
      <span style="font-size: 12px;">平台运营</span>
    </div>

     <div class="tabpane_content">
        <card>
          <div style="margin-bottom: 20px">
            <span style="font-weight: bold;color: #000000">当日平台运营数据</span>
            <!--{{(this.picDate).toString().substring(8,10)}}日-->
            <DatePicker placement="bottom-end" v-model="picDate" type="date" placeholder="Select date" :options="disoptionsdate"
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
                    <div v-if="issh1==1">
                    <span style="font-size: 32px;color: #006eff;font-weight: 600">{{addtotal}}</span>
                    <span style="color: #006eff">人</span>
                    </div>
                    <div v-if="issh1==2" style="margin-top: 20px">暂无历史数据</div>
                  </Col>
                  <Col span="10">
                    <div style="background-color: #f6f8fa;padding-top: 2px">
                    <span >&nbsp;&nbsp;与昨日环比&nbsp;&nbsp;&nbsp;&nbsp; </span>
                      <span :style="{color:color2}" v-if="isshoe1==1">
                        <Icon v-if="is2==1" type="ios-arrow-round-up" size="22" style="margin-bottom: 4px"/>
                        <Icon v-if="is2!=1" type="ios-arrow-round-down" size="22" style="margin-bottom: 4px"/>{{fratio}}%&nbsp;&nbsp;</span>
                    <span v-if="isshoe1==2">暂无历史数据</span>
                    </div>
                    <div style="background-color: #f6f8fa;margin-top: 10px;padding-top: 2px">
                    <span >&nbsp;&nbsp;与上月同比&nbsp;&nbsp;&nbsp;&nbsp; </span>
                      <span :style="{color:color1}" v-if="isshoe2==1">
                        <Icon v-if="is1==1" type="ios-arrow-round-up" size="22" style="margin-bottom: 4px"/>
                        <Icon v-if="is1!=1" type="ios-arrow-round-down" size="22" style="margin-bottom: 4px"/>{{flink}}%&nbsp;&nbsp;</span>
                      <span v-if="isshoe2==2">暂无历史数据</span>
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
                    <div v-if="issh2==1">
                    <span style="font-size: 32px;color: #006eff;font-weight: 600">{{adutotal}}</span>
                    <span style="color: #006eff">人</span>
                    </div>
                    <div v-if="issh2==2" style="margin-top: 20px">暂无历史数据</div>
                  </Col>
                  <Col span="10">
                    <div style="background-color: #f6f8fa;padding-top: 2px">
                    <span>&nbsp;&nbsp;与昨日环比&nbsp;&nbsp;&nbsp;&nbsp; </span>
                      <span :style="{color:color4}" v-if="isshoe3==1">
                        <Icon v-if="is4==1" type="ios-arrow-round-up" size="22" style="margin-bottom: 4px"/>
                        <Icon v-if="is4!=1" type="ios-arrow-round-down" size="22" style="margin-bottom: 4px"/>{{ratio}}%&nbsp;&nbsp;</span>
                      <span v-if="isshoe3==2">暂无历史数据</span>
                    </div>

                    <div style="background-color: #f6f8fa;margin-top: 10px;padding-top: 2px">
                    <span>&nbsp;&nbsp;与上月同比&nbsp;&nbsp;&nbsp;&nbsp; </span>
                      <span :style="{color:color3}" v-if="isshoe4==1">
                        <Icon v-if="is3==1" type="ios-arrow-round-up" size="22" style="margin-bottom: 4px"/>
                        <Icon v-if="is3!=1" type="ios-arrow-round-down" size="22" style="margin-bottom: 4px"/>{{link}}%&nbsp;&nbsp;</span>
                      <span v-if="isshoe4==2">暂无历史数据</span>
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

            <DatePicker placement="bottom-end" type="daterange"  v-model="picMonth" @on-change="change1" placeholder="自选时间"  :options="disoptionsdate"
                        style="width: 220px;float: right"></DatePicker>
            <Button @click="choose7(2)" style="float: right">近30日</Button>

            <Button @click="choose7(1)" style="float: right">近7日</Button>



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
    margin-bottom: unset;
    color: #000;
    font-size: 16px;
    font-weight: 600;
    line-height: 60px;
    padding-left: 20px;
    height: 60px;
    background-color: #fff;
    border-bottom: 1px solid #e2e4e6;
  }
</style>

<script>
  import http from '@/http.js'

  export default {
    data() {
      return {
        isshoe1:1,
        isshoe2:1,
        isshoe3:1,
        isshoe4:1,
        issh1:1,
        issh2:1,
        addtotal:'',
        adutotal:'',
        cho7:'1',
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
        picMonth: [http.getWeekAgo(), http.getYesterDay()],
        picDate: http.getYesterDay(),
        addData: '',
        aduData: '',
        lineDatax1: [],
        lineDatax2: [],
        lineDatay: [],
        disoptionsdate: {
            disabledDate (date) {
                return date< new Date(2018,7,1) || date > new Date()
            }
        }
      }
    },
    mounted() {
      this.init()
      http.post('bi/write_run_log',{obj:'平台运营',msg:window.performance.timing.domInteractive - window.performance.timing.domLoading}).then(resp=>{
      })
    },
    methods: {
      choose7(val){
        if (val==1){
        this.picMonth=[http.getWeekAgo(), http.getYesterDay()]
        this.lineDatax1 = []
        this.lineDatax2 = []
        this.lineDatay = []
        http.post('bi/get_ops_trend_date', {startTime: http.getWeekAgo(), endTime: http.getYesterDay(), type: 'd'}).then(resp => {
          for (var i = 0; i < resp.data.hits.length; i++) {
            this.lineDatax1.push(resp.data.hits[i].dau)
            this.lineDatax2.push(resp.data.hits[i].incr_num)
            this.lineDatay.push(resp.data.hits[i].date)
          }
          this.initTrend()
        })
        }
        if (val==2){
          this.picMonth=[http.getMonthAgo(), http.getYesterDay()]
          this.lineDatax1 = []
          this.lineDatax2 = []
          this.lineDatay = []
          http.post('bi/get_ops_trend_date', {startTime: http.getMonthAgo(), endTime: http.getYesterDay(), type: 'd'}).then(resp => {
            for (var i = 0; i < resp.data.hits.length; i++) {
              this.lineDatax1.push(resp.data.hits[i].dau)
              this.lineDatax2.push(resp.data.hits[i].incr_num)
              this.lineDatay.push(resp.data.hits[i].date)
            }
            this.initTrend()
          })
        }
      },
      init() {
        this.lineDatax1 = []
        this.lineDatax2 = []
        this.lineDatay = []
        http.post('bi/get_ops_trend_date', {startTime: http.getWeekAgo(), endTime: http.getToday(), type: 'd'}).then(resp => {
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
            name:'单位：人',
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
          color: ['#006EFF', '#29CC85'],
          series: [{
            name: '活跃用户数',
            data: this.lineDatax1,
            type: 'line',
            stack: "总量1",
          },
            {
              name: '新增用户量',
              data: this.lineDatax2,
              type: 'line',
              stack: "总量2"
            }
          ]
        })
      },
      change1(val1) {
        this.lineDatax1 = []
        this.lineDatax2 = []
        this.lineDatay = []
        http.post('bi/get_ops_trend_date', {startTime: val1[0], endTime: val1[1], type: 'd'}).then(resp => {
          for (var i = 0; i < resp.data.hits.length; i++) {
            this.lineDatax1.push(resp.data.hits[i].dau)
            this.lineDatax2.push(resp.data.hits[i].incr_num)
            this.lineDatay.push(resp.data.hits[i].date)
          }
          this.initTrend()
        })
      },
      wp1(){
        http.post('bi/get_ops_qty_by_date', {date: http.gmt2str(this.picDate)}).then(resp => {
          this.addtotal=http.qfw(resp.data.hits[0].total)
          this.aduData = resp.data.hits[1]
          this.adutotal=http.qfw(resp.data.hits[1].total)
          if (resp.data.hits[0]==0){
            this.issh1=2
          } else {
            this.issh1=1
            this.addData = resp.data.hits[0]
          }
          if (this.adutotal=='0'){
            this.issh2=2
          }else {
            this.issh2=1
          }
          if (this.addtotal==0){
            this.issh1=2
          }
          if (this.aduData==0){
            this.issh2=2
          }
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
          if (resp.data.hits[0].pred==0||resp.data.hits[0].pred==-1){
            this.isshoe1=2
          }else {
            this.isshoe1=1
          }
          if (resp.data.hits[0].prem==0||resp.data.hits[0].prem==-1){
            this.isshoe2=2
          }else {
            this.isshoe2=1
          }
          if (resp.data.hits[1].pred==0||resp.data.hits[1].pred==-1){
            this.isshoe3=2
          }else {
            this.isshoe3=1
          }
          if (resp.data.hits[1].prem==0||resp.data.hits[0].prem==-1){
            this.isshoe4=2
          }else {
            this.isshoe4=1
          }
        })
      },
      _dd1(){
        this.picMonth=[this.dd2,this.dd1]
        this.lineDatax1 = []
        this.lineDatax2 = []
        this.lineDatay = []
        http.post('bi/get_ops_trend_date', {startTime: http.gmt2str(this.dd2), endTime: http.gmt2str(this.dd1), type: 'd'}).then(resp => {
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
