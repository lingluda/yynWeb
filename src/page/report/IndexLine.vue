<template>
  <div id="myChart" style="height: 400px;width: 100%"></div>
</template>

<script>
  export default {
    name: "IndexLine",
      mounted(){
        this.init()
      },
    methods:{
      init(){
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }]
        });

      }
    }
  }
</script>

<style scoped>

</style>
