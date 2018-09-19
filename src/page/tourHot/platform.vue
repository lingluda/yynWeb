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
            <DatePicker size="small" type="date" placeholder="Select date" style="width: 200px;float: right"></DatePicker>
          </div>
          <Row :gutter="16">
            <Col span="12">
              <div style="border: 1px solid #dcdee2;height:120px;padding: 20px">
                <Row>
                  <Col span="12">
                    <div style="margin-bottom: 20px;width: 50%">
                      <span style="font-weight: bold;color: #000000">新增用户量</span>
                      <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
                      </Tooltip>
                    </div>
                  </Col>
                  <Col span="12">
                    <span style="background-color: aliceblue">&nbsp;&nbsp;与上月同比&nbsp;&nbsp;5%&nbsp;&nbsp;</span>
                  </Col>
                  <Col span="12">
                    <span style="font-size: 28px;color: blue;background-color: aliceblue">5000人</span>
                  </Col>
                  <Col span="12">
                    <span style="background-color: aliceblue">&nbsp;&nbsp;与上月同比&nbsp;&nbsp;5%&nbsp;&nbsp;</span>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span="12">
              <div style="border: 1px solid #dcdee2;height:120px;padding: 20px">
                <Row>
                  <Col span="12">
                <div style="margin-bottom: 20px;width: 50%">
                  <span style="font-weight: bold;color: #000000">新增用户量</span>
                  <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
                  </Tooltip>
                </div>
                  </Col>
                  <Col span="12">
                    <span style="font-size: 28px;color: blue;background-color: aliceblue">5000人</span>
                    <span style="background-color: aliceblue">&nbsp;&nbsp;与上月同比&nbsp;&nbsp;5%&nbsp;&nbsp;</span>
                  </Col>
                  <Col span="12">
                    <span style="font-size: 28px;color: blue;">5000人</span>
                  </Col>
                  <Col span="12">
                <span style="background-color: aliceblue">&nbsp;&nbsp;与上月同比&nbsp;&nbsp;5%&nbsp;&nbsp;</span>
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
  export default {
    data(){
      return{

      }
    },
    mounted(){
      this.initTrend()
    },
    methods:{
      pic(val){
        this.$router.push(val)
      }, initTrend(){
        let trend = this.$echarts.init(document.getElementById("trend"))
        trend.setOption({
          xAxis: {
            type: 'category',
            boundaryGap:false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月']
          },
          yAxis: {
            type: 'value'
          },
          tooltip:{
            trigger:'axis'
          },
          grid:{
            left:'5%',
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
            data: [820, 932, 901, 934, 1290, 1330],
            type: 'line'
          },
            {
              name:'新增用户量',
              data: [810, 232, 911, 1234, 1120, 1370],
              type: 'line'
            }
          ]
        })
      }

    }
  }
</script>
