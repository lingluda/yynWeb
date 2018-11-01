<template>
  <div>
  <div id="main" style="height: 400px;width: 100%;"></div>
  </div>
</template>

<script>
  export default {
    name: "exp",
    props: {
      ccc: Array,
    },
    data(){
      return{
      }
    },
    mounted() {
      let bar = this.$echarts.init(document.getElementById('main'))
      bar.setOption({
        animation: false,
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        color: [
          "#006EFF",
          "#29CC85",
          "#ffbb00",],
        xAxis: {
          type: 'category',
          data: this.ccc.map(i=>{return i.name})
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name:'最大等待时间',
          data: [parseInt(this.ccc[0].max*100)/100,parseInt(this.ccc[1].max*100)/100,parseInt(this.ccc[2].max*100)/100],
          type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle:{
                  color:'#000'
                }
              }
            },
        },
          {
            name:'平均处理时间',
            data:[parseInt(this.ccc[0].avg*100)/100,parseInt(this.ccc[1].avg*100)/100,parseInt(this.ccc[2].avg*100)/100,],
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle:{
                  color:'#000'
                }
              }
            },
          },
          {
            name:'最小等待时间',
            data: [parseInt(this.ccc[0].min*100)/100,parseInt(this.ccc[1].min*100)/100,parseInt(this.ccc[2].min*100)/100,],
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle:{
                  color:'#000'
                }
              }
            },
          },
        ]
      })
    }
  }
</script>

<style scoped>

</style>
