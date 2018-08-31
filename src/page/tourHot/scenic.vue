<template>
  <div>
    <ButtonGroup>
      <Button  style="width: 130px" @click="pic('index')">首页</Button>
      <Button style="width: 130px" @click="pic('destination')">热门目的地</Button>
      <Button type="primary" style="width: 130px" @click="pic('scenic')">热门景区</Button>
      <Button style="width: 130px" @click="pic('hotmap')">景区客流热力分布</Button>
    </ButtonGroup>
    <card class="btn">
      <p class="ti">热门景区网络热度TOP10</p>
      <ButtonGroup style="margin-left: 110px">
        <Button type="primary" size="small">APP访问</Button>
        <Button size="small">搜索引擎</Button>
        <Button size="small">网站报道</Button>
      </ButtonGroup>
      <Select size="small" style="width: 100px;margin-left: 400px">
        <Option>2018-08-30</Option>
      </Select>
      <p style="margin-left: 110px;margin-top: 30px">一机游用户访问DAU（万次）</p>
      <div id="bar" style="width: 800px;height: 300px;margin-left: 50px"></div>
    </card>
    <Row :gutter="16">
      <Col span="12">
        <card class="btn">
          <p class="ti">景区客流TOP10</p>
          <div id="ts" style="width: 100%;height: 400px"></div>
        </card>
      </Col>
      <Col span="12">
        <card class="btn">
          <p class="ti">客流变化TOP10——对比上一日客流</p>
          <div id="tsc" style="width: 100%;height: 400px"></div>
        </card>
      </Col>
    </Row>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
    mounted(){
      this.drawBar()
      this.drawBL1()
      this.drawBL2()
    },
    methods:{
      pic(val){
        this.$router.push(val)
      },
      drawBar() {
        let myBar = this.$echarts.init(document.getElementById("bar"))
        myBar.setOption({
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '直接访问',
              type: 'bar',
              barWidth: '60%',
              data: [10, 52, 200, 334, 390, 330, 220]
            }
          ]
        })
      },
      drawBL1(){
        let myscenicts = this.$echarts.init(document.getElementById("ts"))
        myscenicts.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          toolbox: {
            feature: {
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          legend: {
            data:['蒸发量','降水量','平均温度']
          },
          xAxis: [
            {
              type: 'category',
              data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '水量',
              min: 0,
              max: 250,
              interval: 50,
              axisLabel: {
                formatter: '{value} ml'
              }
            },
            {
              type: 'value',
              name: '温度',
              min: 0,
              max: 25,
              interval: 5,
              axisLabel: {
                formatter: '{value} °C'
              }
            }
          ],
          series: [
            {
              name:'蒸发量',
              type:'bar',
              data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
              name:'降水量',
              type:'bar',
              data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
              name:'平均温度',
              type:'line',
              yAxisIndex: 1,
              data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
          ]
        })
      },
      drawBL2(){
        let myscenicts = this.$echarts.init(document.getElementById("tsc"))
        myscenicts.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          toolbox: {
            feature: {
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          legend: {
            data:['蒸发量','降水量','平均温度']
          },
          xAxis: [
            {
              type: 'category',
              data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '水量',
              min: 0,
              max: 250,
              interval: 50,
              axisLabel: {
                formatter: '{value} ml'
              }
            },
            {
              type: 'value',
              name: '温度',
              min: 0,
              max: 25,
              interval: 5,
              axisLabel: {
                formatter: '{value} °C'
              }
            }
          ],
          series: [
            {
              name:'蒸发量',
              type:'bar',
              data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
              name:'降水量',
              type:'bar',
              data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
              name:'平均温度',
              type:'line',
              yAxisIndex: 1,
              data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
          ]
        })
      }
    }
  }

</script>
