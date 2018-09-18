<template>
  <div>
    <div class="ti">
     <span >游客体验</span>
    </div>
    <card>
      <div style="margin-bottom: 20px">
        <span style="font-weight: bold;color: #000000">投诉分析</span>
        <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
        </Tooltip>
      </div>
      <RadioGroup type="button" size="small">
        <Radio label="all">全部</Radio>
        <Radio label="default">飞机</Radio>
      </RadioGroup>
      <DatePicker size="small" type="date" placeholder="自选时间" style="width: 120px"></DatePicker>
      <Select size="small" style="width: 120px">
        <Option>全省</Option>
      </Select>
      <div style="border: 1px solid #dcdee2;width: 100%;height: 150px;margin-bottom: 20px;margin-top: 20px">
        <Row style="padding: 40px">
          <Col span="8">
            <div style="margin-bottom: 20px">
              <span style="font-weight: bold;color: #000000">日新增投诉量</span>
              <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
              </Tooltip>
            </div>
            <span style="font-size: 20px">210</span><span>个(新关闭22，未关闭188)</span>
          </Col>
          <Col span="8">
            <div style="margin-bottom: 20px">
              <span style="font-weight: bold;color: #000000">日新增投诉量同比</span>
              <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
              </Tooltip>
            </div>
            <span style="font-size: 20px">6.2%</span><span>(上升百分比)</span>
          </Col>
          <Col span="8">
            <div style="margin-bottom: 20px">
              <span style="font-weight: bold;color: #000000">日新增投诉量环比</span>
              <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
              </Tooltip>
            </div>
            <span style="font-size: 20px">2.2%</span><span>(下降百分比)</span>
          </Col>
        </Row>
      </div>
      <Row :gutter="16" style="margin-bottom: 40px">
        <Col span="8">
          <div id="complain" style="height: 400px;border: 1px solid #dcdee2;"></div>
        </Col>
        <Col span="16">
          <div id="process" style="height: 400px;border: 1px solid #dcdee2;"></div>
        </Col>
      </Row>
    </card>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
    mounted(){
      this.initComplain()
      this.initProcess()
    },
    methods:{
      initComplain(){
      let complain = this.$echarts.init(document.getElementById("complain"))
        complain.setOption({
          color: ['#006EFF','#29CC85','#ffbb00'],
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: ['平均时长', '最大时长', '最小时长']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [ 4, 7, 1],
            type: 'bar',
            barWidth:'50%'
          }]
        })
      },
      initProcess(){
        let process = this.$echarts.init(document.getElementById("process"))
        process.setOption({
          color: ['#006EFF','#29CC85','#ffbb00'],
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          legend:{
            icon:'circle',
            data:['平均时长', '最大时长', '最小时长']
          },
          xAxis: {
            type: 'category',
            data: ['投诉受理', '投诉反馈', '二次处理','二次反馈','巡回法庭','处理完成']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
            data: [ 4, 4, 4,4,4,4],
              name:'平均时长',
            type: 'bar',
          },
            {
              data: [ 7, 7, 7,7,7,7],
              name:'最大时长',
              type: 'bar',
            },
            {
              data: [ 1, 1, 1,1,1,1],
              name:'最小时长',
              type: 'bar',
            },
          ]
        })
      }
    }
  }
</script>
