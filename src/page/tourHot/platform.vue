<template>
  <div>
    <div class="ti">
      <span >旅游热度</span>
    </div>
    <Tabs value="platform" @on-click="pic">
      <TabPane label="首页" name="index">
      </TabPane  >
      <TabPane label="热门目的地" name="destination">
      </TabPane>
      <TabPane label="热门景区" name="scenic">
      </TabPane>
      <TabPane label="景区客流热力发布" name="hotmap">
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
                  <Col span="14">
                    <div style="margin-bottom: 20px;width: 50%">
                      <span style="font-weight: bold;color: #000000">新增用户量</span>
                      <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
                      </Tooltip>
                    </div>
                  </Col>
                  <Col span="10">
                    <span style="background-color: azure">&nbsp;&nbsp;与昨日环比&nbsp;&nbsp;{{addData.link}}%&nbsp;&nbsp;</span>
                  </Col>
                </Row>
                <Row>
                  <Col span="14">
                    <span style="font-size: 28px;color: blue">{{addData.total}}人</span>
                  </Col>
                  <Col span="10">
                    <span style="background-color: azure">&nbsp;&nbsp;与上月同比&nbsp;&nbsp;{{addData.ratio}}%&nbsp;&nbsp;</span>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span="12">
              <div style="border: 1px solid #dcdee2;height:120px;padding: 20px">
                <Row>
                  <Col span="14">
                <div style="margin-bottom: 20px;width: 50%">
                  <span style="font-weight: bold;color: #000000">活跃用户数</span>
                  <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
                  </Tooltip>
                </div>
                  </Col>
                  <Col span="10">
                    <span style="background-color: azure">&nbsp;&nbsp;与昨日环比&nbsp;&nbsp;{{aduData.link}}%&nbsp;&nbsp;</span>
                  </Col>
                </Row>
                <Row>
                  <Col span="14">
                    <span style="font-size: 28px;color: blue;">{{aduData.total}}人</span>
                  </Col>
                  <Col span="10">
                <span style="background-color: azure">&nbsp;&nbsp;与上月同比&nbsp;&nbsp;{{aduData.ratio}}%&nbsp;&nbsp;</span>
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
