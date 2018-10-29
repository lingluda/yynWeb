<template>
  <div id="main" style="height: 400px;width: 100%;"></div>
</template>

<script>
  export default {
    name: "exp",
    mounted(){
      let bar = this.$echarts.init(document.getElementById('main'))
      bar.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }]
      })
    }
  }
</script>

<style scoped>

</style>
