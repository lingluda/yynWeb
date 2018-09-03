<template>
  <div>
    <a style="margin-right: 10px;">
      <Icon type="md-arrow-back" size="16"/>
    </a> <span class="ti">旅游热度</span>
    <Tabs value="scenic" @on-click="pic">
      <TabPane label="首页" name="index">
      </TabPane  >
      <TabPane label="热门目的地" name="destination">
      </TabPane>
      <TabPane label="热门景区" name="scenic">
        <card>
          <p class="tis">热门景区网络热度TOP10</p>
          <RadioGroup type="button" size="small">
            <Radio label="large">APP访问</Radio>
            <Radio label="default">搜索引擎</Radio>
            <Radio label="small">网站报道</Radio>
          </RadioGroup>
          <div style="border: 1px solid #e8eaec;margin-top: 20px">
            <div style="margin-top: 10px;margin-right: 30px;margin-left: 30px">
              <span class="tis">一机游用户DAU</span><span>(单位：万次)</span> <DatePicker type="date" placeholder="自选时间" size="small" style="width: 120px;float: right"></DatePicker>
            </div>
            <div id="simBars" style="width: 800px;height: 300px;"></div>

          </div>
        </card>
        <card style="margin-top: 20px">
          <div>
            <Row :gutter="16">
              <Col span="12">
                <div style="border: 1px solid #e8eaec">
                  <div style="padding: 15px">
                    <span class="tis">景区客流TOP10</span><span>(单位：万人)</span>
                  </div>
                  <RadioGroup type="button" size="small" style="margin-left: 15px">
                    <Radio label="large">当日</Radio>
                    <Radio label="default">当月</Radio>
                    <Radio label="small">当年</Radio>
                  </RadioGroup>
                  <DatePicker size="small" type="date" placeholder="Select date" style="width: 120px"></DatePicker>
                  <div id="max1" style="width: 80%;height: 600px;"></div>
                </div>
              </Col>

              <Col span="12">
                <div style="border: 1px solid #e8eaec">
                  <div style="padding: 15px">
                    <span class="tis">景区客流TOP10</span><span>(单位：万人)</span>
                  </div>
                  <RadioGroup type="button" size="small" style="margin-left: 15px">
                    <Radio label="large">增量</Radio>
                    <Radio label="default">增长量</Radio>
                  </RadioGroup>
                  <DatePicker size="small" type="date" placeholder="Select date" style="width: 120px"></DatePicker>
                  <div id="max2" style="width: 80%;height: 600px;"></div>
                </div>
              </Col>
            </Row>
          </div>
        </card>
      </TabPane>
      <TabPane label="景区客流热力发布" name="hotmap">
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  export default {
    name: "tourhot",
    data() {
      return {
        columns: [
          {
            title: '热门路线',
            key: 'name',
          },
          {
            title: '购买次数',
            key: 'num',
          },{
            title: '热门路线DAU量(次)',
            key: 'dau',
          },
          {
            title: '价格(元)',
            key: 'unit',
          }
        ],
        data:[
          {
            name:'西双',
            num:25,
            dau:39,
            unit:344,
          }
        ]
      }
    },
    mounted() {
      this.initMax1()
      this.initMax2()
      this.initSimBars()
    },
    methods: {
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
            data: ['峰值']
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
            data: ['大理','大理','大理','大理','野象谷','西双版纳','西双版纳','西双版纳','玉龙雪山','玉龙雪山'],
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
              data: [1, 2, 3, 4, 5,6,7,8,9,10],
              barWidth:25
            }
          ],
          color: ['#006EFF',]
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
            data: ['今日景区客流','昨日景区客流']
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
            data: ['大理','大理','大理','大理','野象谷','西双版纳','西双版纳','西双版纳','玉龙雪山','玉龙雪山'],
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
              data: [1, 2, 3, 4, 5,6,7,8,9,10]
            },
            {
              name: '昨日景区客流',
              type: 'bar',
              data: [1, 2, 3, 4, 5,6,7,8,9,10]
            },
          ],
          color:['#006EFF','#29CC85']
        })
      },
      initSimBars(){
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
            data: ['云南', '曲靖', '红河', '玉溪', '大理', '丽江', '昭通','西双版纳','昆明'],
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
            data: [4, 3, 3, 2, 2, 2, 2,2,1],
            type: 'bar',
            barWidth:40
          }],
          color:['#006EFF'],
        })
      },
      pic(val){
        this.$router.push(val)
      }
    }
  }
</script>

<style scoped>

</style>
