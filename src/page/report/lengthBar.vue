<template>
  <div id="lengthbar" style="width: 100%;height: 200px;"></div>
</template>

<script>
  export default {
    name: "lengthBar",
     props:{
       avg_proc:Number,
       max_proc:Number,
       min_proc:Number,
    },
    mounted() {
      let lbar = this.$echarts.init(document.getElementById('lengthbar'))
      lbar.setOption({
        animation: false,
        title: {
          text: '已关闭投诉处理时长',
          textStyle:{
            fontSize: 12
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        color:["#006EFF", "#29CC85", "#ffbb00", "#ff584c"],
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
            type: 'bar',
            data: [this.min_proc,this.max_proc,this.avg_proc]
          }
        ]
      })
        }
  }
</script>

<style scoped>

</style>
