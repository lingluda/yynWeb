<template>
  <div>
    <div class="ti">
      <span >旅游热度</span>
    </div>
    <Tabs value="platform" @on-click="pic">
      <TabPane label="首页" name="index">
      </TabPane  >
      <TabPane label="热门排行" name="destination">
      </TabPane>

      <TabPane label="景区客流热力" name="hotmap">
      </TabPane>
      <TabPane label="平台运营" name="platform">
        <card>
          <div style="margin-bottom: 20px">
            <span style="font-weight: bold;color: #000000">平台近日运营数据</span>
            <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
            </Tooltip>
            <DatePicker size="small" v-model="picDate" type="date" placeholder="Select date" style="width: 200px;float: right"></DatePicker>
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
                      <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
                      </Tooltip>
                    </div>
                    <p style="font-size: 28px;color: blue">{{addData.total}}人</p>
                  </Col>
                  <Col span="10">
                    <p style="background-color: #f6f8fa;padding: 5px">&nbsp;&nbsp;与昨日环比&nbsp;&nbsp;&nbsp;&nbsp;{{addData.link}}%&nbsp;&nbsp;</p>
                    <p style="background-color: #f6f8fa;margin-top: 10px;padding: 5px">&nbsp;&nbsp;与上月同比&nbsp;&nbsp;&nbsp;&nbsp;{{addData.ratio}}%&nbsp;&nbsp;</p>
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
                      <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
                      </Tooltip>
                    </div>
                    <p style="font-size: 28px;color: blue">{{aduData.total}}人</p>
                  </Col>
                  <Col span="10">
                    <p style="background-color: #f6f8fa;padding: 5px">&nbsp;&nbsp;与昨日环比&nbsp;&nbsp;&nbsp;&nbsp;{{addData.link}}%&nbsp;&nbsp;</p>
                    <p style="background-color: #f6f8fa;margin-top: 10px;padding: 5px">&nbsp;&nbsp;与上月同比&nbsp;&nbsp;&nbsp;&nbsp;{{aduData.ratio}}%&nbsp;&nbsp;</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </card>
        <card style="margin-top: 20px">
          <div style="margin-bottom: 20px">
            <span style="font-weight: bold;color: #000000">用户趋势分析</span>
            <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
            </Tooltip>
            <DatePicker size="small" type="date" placeholder="Select date" style="width: 200px;float: right"></DatePicker>
          </div>
          <div id="trend" style="border: 1px solid #dcdee2;height: 400px;width: 100%"></div>
        </card>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  import http from '@/http.js'
  export default {
    data(){
      return{
        picDate:'2018-08-03',
        addData:'',
        aduData:'',
        lineDatax1:[],
        lineDatax2:[],
        lineDatay:[],
      }
    },
    mounted(){
      this.init()
    },
    methods:{
      init(){
        http.get('bi/get_ops_qty_by_date',{date:'2018-08-03'}).then(resp=>{
          console.log(resp.data.hits)
          this.addData = resp.data.hits[0]
          this.aduData = resp.data.hits[1]
        })
        http.get('bi/get_ops_trend_date',{startTime:'2018-07',endTime:'2018-09',type:'m'}).then(resp=>{
          console.log('get_ops_trend_date',resp.data.hits)
          for (var i=0;i<resp.data.hits.length;i++){
            this.lineDatax1.push(resp.data.hits[i].mau)
            this.lineDatax2.push(resp.data.hits[i].incr_num)
            this.lineDatay.push(resp.data.hits[i].date)
          }
          this.initTrend()
        })
      },
      pic(val){
        this.$router.push(val)
      },
      initTrend(){
        let trend = this.$echarts.init(document.getElementById("trend"))
        trend.setOption({
          xAxis: {
            type: 'category',
            boundaryGap:false,
            data: this.lineDatay
          },
          yAxis: {
            type: 'value'
          },
          tooltip:{
            trigger:'axis'
          },
          grid:{
            left:'6%',
            right:'6%',
            bottom:'15%',
          },
          legend: {
            bottom:10,
            data:['活跃用户数', '新增用户量']
          },
          color:['blue','red'],
          series: [{
            name:'活跃用户数',
            data: this.lineDatax1,
            type: 'line'
          },
            {
              name:'新增用户量',
              data: this.lineDatax2,
              type: 'line'
            }
          ]
        })
      }

    }
  }
</script>
