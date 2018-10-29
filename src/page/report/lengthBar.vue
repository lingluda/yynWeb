<template>
  <div id="lengthbar" style="width: 100%;height: 200px;"></div>
</template>

<script>
  export default {
    name: "lengthBar",
    mounted() {
      let lbar = this.$echarts.init(document.getElementById('lengthbar'))
      lbar.setOption({
        title: {
          text: '世界人口总量',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
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
          name:'单位(小时)',
          type: 'category',
          data: ['最小时长', '最大时长', '平均时长'],
        },
        series: [
          {
            name: '最小时长',
            type: 'bar',
            data: [18203]
          },
          {
            name: '最大时长',
            type: 'bar',
            data: [19325]
          }
          ,
          {
            name: '平均时长',
            type: 'bar',
            data: [19325]
          }
        ]
      })
        }
  }
</script>

<style scoped>

</style>
