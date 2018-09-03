<template>
  <div>
    <p class="ti"><a>
      <Icon type="md-arrow-back" size="16" style="margin-right: 10px;"/>
    </a>游客画像
    </p>
    <card>
      <p class="tis">基本属性分析</p>
      <RadioGroup type="button" size="small">
        <Radio label="large">Large</Radio>
        <Radio label="default">Default</Radio>
        <Radio label="small">small</Radio>
      </RadioGroup>
      <Select size="small" style="width: 120px" placeholder="清选择">
        <Option>城市</Option>
      </Select>
      <Select size="small" style="width: 120px" placeholder="清选择">
        <Option>区域</Option>
      </Select>
      <DatePicker size="small" type="date" placeholder="自选时间" style="width: 120px"></DatePicker>
      <Row :gutter="16">
        <Col span="8">
            <div style="display: flex;border: 1px solid #dcdee2;height: 320px;">
            <div style="width: 32px;height: 320px;">
              <Icon type="ios-woman" size="32" color="green"/>
            </div>
            <div id="sex" style="width: 256px;height: 320px;"></div>
            <div style="width: 32px;height: 320px;">
              <Icon type="ios-man" size="32" color="yellow"/>
            </div>
            </div>
        </Col>
        <Col span="8">
          <div id="age" style="width: 100%;height: 320px;border: 1px solid #dcdee2"></div>
        </Col>
        <Col span="8">
          <div id="edu" style="width: 100%;height: 320px;border: 1px solid #dcdee2"></div>
        </Col>
        <Col span="8">
          <div id="in" style="width: 100%;height: 320px;border: 1px solid #dcdee2"></div>
        </Col>
        <Col span="8">
          <div id="client" style="width: 100%;height: 320px;border: 1px solid #dcdee2"></div>
        </Col>
        <Col span="8">
          <div id="os" style="width: 100%;height: 320px;border: 1px solid #dcdee2"></div>
        </Col>
        <Col span="8">
          <div id="industry" style="width: 100%;height: 320px;border: 1px solid #dcdee2"></div>
        </Col>
        <Col span="8">
          <div id="city" style="width: 100%;height: 320px;border: 1px solid #dcdee2"></div>
        </Col>
        <Col span="8">
          <div id="province" style="width: 100%;height: 320px;border: 1px solid #dcdee2"></div>
        </Col>

      </Row>
    </card>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    mounted() {
      this.initSex()
      this.initAge()
    },
    methods: {
      initSex() {
        let sex = this.$echarts.init(document.getElementById("sex"))
        sex.setOption({
          title : {
            text: '同名数量统计',
            textStyle:{
              fontSize:14,
            },
            x:'left'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            bottom:10,
            x: 'center',
            data: ['男',  '女']
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
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
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              color: ['#1ea9ff','#ff50fe',],
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {value: 335, name: '男'},
                {value: 310, name: '女'},
              ]
            }
          ]
        })
      },
      initAge(){
        let age = this.$echarts.init(document.getElementById("age"),)
        age.setOption({
          title: {
            text: '年龄占比',
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },

          grid: {
            left: '1%',
            right: '8%',
            bottom: '4%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.1]
          },
          yAxis: {
            type: 'category',
            data: ['>55','45-54','35-44','25-34','19-24','0-18']
          },

          series: [
            {
              name: '2011年',
              type: 'bar',
              data: [34.12, 29, 12, 21, 12,32],
              barWidth:20,
              label: {
                normal: {
                  show: true,
                  position: 'right'
                }
              },
            }
          ],
          color:['#006EFF'],
        })
      }
    }
  }
</script>
