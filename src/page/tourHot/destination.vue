<template>
  <div style="height: 100vh">
    <ButtonGroup>
      <Button style="width: 130px" @click="pic('index')">首页</Button>
      <Button type="primary" style="width: 130px" @click="pic('destination')">热门目的地</Button>
      <Button style="width: 130px" @click="pic('scenic')">热门景区</Button>
      <Button style="width: 130px" @click="pic('hotmap')">景区客流热力分布</Button>
    </ButtonGroup>
    <card class="btn">
    <p class="ti">热门目的地网络热度TOP10</p>
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
    <card class="btn">
      <p class="ti">热门路线TOP10</p>
      <Select size="small" style="width: 100px;margin-left: 700px">
        <Option>222</Option>
      </Select>
      <div id="hotline" style="width: 800px;height: 800px"></div>
    </card>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    mounted() {
      this.drawBar();
      this.drawLine();
    },
    methods: {
      pic(val) {
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
      drawLine(){
        let myLine=this.$echarts.init(document.getElementById("hotline"))
        myLine.setOption({
          title: {
            text: '世界人口总量',
            subtext: '数据来自网络'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['2011年', '2012年']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: 'category',
            data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
          },
          series: [
            {
              name: '2011年',
              type: 'bar',
              data: [18203, 23489, 29034, 104970, 131744, 630230]
            },
            {
              name: '2012年',
              type: 'bar',
              data: [19325, 23438, 31000, 121594, 134141, 681807]
            }
          ]
        })
      }
    }
  }
</script>
