<template>
  <div>
    <a style="margin-right: 10px;">
      <Icon type="md-arrow-back" size="16"/>
    </a> <span class="ti">旅游热度</span>
    <Tabs value="index" @on-click="click">
      <TabPane label="首页" name="index">
        <card >
          <p class="tis">全区游客人数</p>
          <DatePicker size="small" type="daterange" placement="bottom-end" placeholder="自选时间"
                      style="width: 200px"></DatePicker>
          <Select size="small" style="width: 120px">
            <Option>全省</Option>
          </Select>
          <Row style="border: 1px solid #e8eaec;margin-bottom: 20px;margin-top: 15px">
            <Col span="8" style="padding: 20px">
              <p>今日总接待游客量</p>
              <span>210,760</span><span>个</span>
            </Col>
            <!--<Col span="1"><Divider type="vertical"/></Col>-->
            <Col span="8" style="padding: 20px">
              <p>今日接待游客量同比</p>
              <span>6.2</span><span>%(<Icon type="md-arrow-round-up" style="color: red;height: 18px"/>上升百分比)</span>
            </Col>
            <Col span="8" style="padding: 20px">
              <p>今日接待游客量同比</p>
              <span>2.2</span><span>%(<Icon type="md-arrow-round-down" style="height: 18px;color: green"/>下降百分比)</span>
            </Col>
          </Row>
          <Row :gutter="16">
            <Col span="12">
              <card style="border: 1px solid #e8eaec">
                <span class="tis">各市州所占比例</span>
                <div id="mybar" style="width: 85%;height: 400px"></div>
              </card>
            </Col>
            <Col span="12">
              <card style="border: 1px solid #e8eaec">
                <span class="tis">日期区间客流 趋势分析</span><span>(人数：万)</span>
                <div id="myline" style="width: 85%;height: 400px"></div>
              </card>
            </Col>
          </Row>
        </card>
      </TabPane  >
      <TabPane label="热门目的地" name="destination" >
      </TabPane>
      <TabPane label="热门景区" name="scenic">
      </TabPane>
      <TabPane label="景区客流热力发布" name="hotmap">
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    mounted() {
      this.initBar()
      this.initLine()
    },
    methods: {
      initBar() {
        let mybar = this.$echarts.init(document.getElementById("mybar"),'macarons')
        mybar.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            backgroundColor:'#323232'
          },
          legend: {
            //orient: 'vertical',
            bottom: 10,
            left: 'center',
            data:['曲靖','丽江','昆明','重庆','柬埔寨']
          },
          series: [
            {
              name:'今日接待',
              type:'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '15',
                    fontWeight: 'bold',
                    color:'#000000'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data:[
                {value:335, name:'曲靖'},
                {value:310, name:'丽江'},
                {value:234, name:'昆明'},
                {value:135, name:'重庆'},
                {value:1548, name:'柬埔寨'}
              ],
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    formatter: '{b} : {c} \n ({d}%)'
                  },
                  labelLine: {
                    show: true
                  }
                }
              }
            }
          ],
          color: ['#006EFF','#29CC85','#ffbb00','#ff584c','#9741d9','#1fc0cc','#7ff936','#ff9c19','#e63984','#655ce6','#47cc50','#fb0b6']
        })
      },
      initLine(){
        let myline = this.$echarts.init(document.getElementById("myline"),'macarons')
        myline.setOption({
          tooltip: {
            trigger: 'axis',
            backgroundColor:'#323232'
          },
          xAxis: {
            type: 'category',
            data: ['09-01', '09-02', '09-03', '09-04', '09-05', '09-06', '09-07'],
            axisLine:{
              lineStyle:{
                color:'#888888',
                width:2
              }
            }
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
          lineStyle:{
            color:'#006EFF',

          },
          itemStyle : {
            normal : {
              color:'#00FF00'
            }
          },
          series: [{
            data: [1, 2, 3, 4, 5, 1, 9],
            type: 'line'
          }]
        })
      },
      click(val){
        this.$router.push(val)
      }
    }
  }
</script>

<style>
  .ti {
    margin-bottom: 20px;
    color: #000000;
    font-size: 15px;
    font-weight: bold;
  }

  .tis {
    margin-bottom: 20px;
    color: #000000;
    font-size: 14px;
    font-weight: bold;
  }
</style>
