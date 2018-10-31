<template>
  <div>{{trendPeople1}}
  <div id="myChart" style="height: 400px;width: 100%"></div>
  </div>
</template>

<script>
  import http from "../../http";
  export default {
    name: "IndexLine",
    props:{
      trendPeople1:Array,
    },
      mounted(){
        this.init()
      },
    methods: {
      init() {
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.trendPeople1.map(item => {
              return item.date
            })
          },
          yAxis: {
            type: 'value'
          },
          lineStyle: {
            color: "#006EFF"
          },
          series: [{
            data: this.trendPeople1.map(item => {
              return item.value
            }),
            type: 'line',
            avoidLabelOverlap: true,
            label: {
              normal: {
                show: true,
                position: 'top',
                rotate: 15
              }
            },
          }]
        });
      },
    }
  }
</script>

<style scoped>

</style>
