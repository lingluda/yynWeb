<template>
  <div>
    <div class="ti">
      <span>旅游热度</span>
    </div>
    <Tabs value="platform" @on-click="pic">
      <TabPane label="首页" name="index"></TabPane>
      <TabPane label="热门排行" name="destination"></TabPane>
      <TabPane label="景区客流热力" name="hotmap"></TabPane>
      <TabPane label="平台运营" name="platform" class="tabpane_content">
        <card>
          <div style="margin-bottom: 20px">
            <span style="font-weight: bold;color: #000000">平台近日运营数据</span>

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
                    <p style="font-size: 28px;color: blue">{{addData.total}}人</p>
                  </Col>
                  <Col span="10">
                    <div style="background-color: #f6f8fa;padding-top: 2px">
                    <span >&nbsp;&nbsp;与昨日环比&nbsp;&nbsp;&nbsp;&nbsp; </span> <span :style="{color:color1}"><Icon v-if="is1==1" type="ios-arrow-round-up" size="22" style="margin-bottom: 4px"/><Icon v-if="is1!=1" type="ios-arrow-round-down" size="22" style="margin-bottom: 4px"/>{{addData.link}}%&nbsp;&nbsp;</span>
                    </div>
                    <div style="background-color: #f6f8fa;margin-top: 10px;padding-top: 2px">
                    <span >&nbsp;&nbsp;与上月同比&nbsp;&nbsp;&nbsp;&nbsp; </span> <span :style="{color:color2}"><Icon v-if="is2==1" type="ios-arrow-round-up" size="22" style="margin-bottom: 4px"/><Icon v-if="is2!=1" type="ios-arrow-round-down" size="22" style="margin-bottom: 4px"/>{{addData.ratio}}%&nbsp;&nbsp;</span>
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
                    <p style="font-size: 28px;color: blue">{{aduData.total}}人</p>
                  </Col>
                  <Col span="10">
                    <div style="background-color: #f6f8fa;padding-top: 2px">
                    <span>&nbsp;&nbsp;与昨日环比&nbsp;&nbsp;&nbsp;&nbsp; </span> <span :style="{color:color3}"><Icon v-if="is3==1" type="ios-arrow-round-up" size="22" style="margin-bottom: 4px"/><Icon v-if="is3!=1" type="ios-arrow-round-down" size="22" style="margin-bottom: 4px"/>{{aduData.link}}%&nbsp;&nbsp;</span>
                    </div>

                    <div style="background-color: #f6f8fa;margin-top: 10px;padding-top: 2px">
                    <span>&nbsp;&nbsp;与上月同比&nbsp;&nbsp;&nbsp;&nbsp; </span> <span :style="{color:color4}"><Icon v-if="is4==1" type="ios-arrow-round-up" size="22" style="margin-bottom: 4px"/><Icon v-if="is4!=1" type="ios-arrow-round-down" size="22" style="margin-bottom: 4px"/>{{aduData.ratio}}%&nbsp;&nbsp;</span>
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

            <DatePicker type="daterange" format="yyyy-MM" v-model="picMonth" @on-change="change1" placeholder="自选时间"
                        style="width: 140px;float: right"></DatePicker>
          </div>
          <div id="trend" style="border: 1px solid #dcdee2;height: 400px;width: 100%"></div>
        </card>
      </TabPane>
    </Tabs>
  </div>
</template>
<style lang="less" scoped>
  .tabpane_content {
    padding: 20px;
    background: #f2f2f2;
  }
</style>

<script>
  import http from '@/http.js'

  export default {
    data() {
      return {
        is1:'',
        is2:'',
        is3:'',
        is4:'',
        color1:'',
        color2:'',
        color3:'',
        color4:'',
        picMonth: ['2018-07', '2018-09'],
        picDate: '2018-08-03',
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
      init() {

        http.get('bi/get_ops_trend_date', {startTime: '2018-07', endTime: '2018-09', type: 'm'}).then(resp => {
          for (var i = 0; i < resp.data.hits.length; i++) {
            this.lineDatax1.push(resp.data.hits[i].mau)
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
            boundaryGap: false,
            data: this.lineDatay
          },
          yAxis: {
            type: 'value'
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
        http.get('bi/get_ops_trend_date', {startTime: val1[0], endTime: val1[1], type: 'm'}).then(resp => {
          console.log('get_ops_trend_date', resp.data.hits)
          for (var i = 0; i < resp.data.hits.length; i++) {
            this.lineDatax1.push(resp.data.hits[i].mau)
            this.lineDatax2.push(resp.data.hits[i].incr_num)
            this.lineDatay.push(resp.data.hits[i].date)
          }
          this.initTrend()
        })
      },
      wp1(){
        http.get('bi/get_ops_qty_by_date', {date: http.gmt2str(this.picDate)}).then(resp => {
          console.log(resp.data.hits)
          this.addData = resp.data.hits[0]
          this.aduData = resp.data.hits[1]
          console.log(this.addData.link)
          console.log(this.aduData.link)
          if (Number(this.addData.link)>=0){
            this.color1='red'
            this.is1=1
          } else {
            this.color1='green'
            this.is1=2
          }
          if (Number(this.addData.ratio)>=0){
            this.color2='red'
            this.is2=1
          } else {
            this.color2='green'
            this.is2=2
          }
          if (Number(this.aduData.link)>=0){
            this.color3='red'
            this.is3=1
          } else {
            this.color3='green'
            this.is3=2
          }
          if (Number(this.aduData.ratio)>=0){
            this.color4='red'
            this.is4=1
          } else {
            this.color4='green'
            this.is4=2
          }
          console.log('this.color1',this.color1)
        })
      }
    },
    watch:{
      picDate:'wp1'
    }
  }
</script>
