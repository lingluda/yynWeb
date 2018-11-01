<template>
  <div>{{ccc}}
  <div id="main" style="height: 400px;width: 100%;"></div>
  </div>
</template>

<script>
  export default {
    name: "exp",
    props: {
      ccc: Array,
    },
    mounted() {
      let bar = this.$echarts.init(document.getElementById('main'))
      bar.setOption({
        animation: false,
        xAxis: {
          type: 'category',
          data: this.ccc.map(item => {
            return item.name
          })
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.ccc.map(i=>{return i[0].max,i[0].avg,i[0].min}),
            type: 'bar'
          },
          {
            data: this.ccc.map(i=>{return i[1].max,i[1].avg,i[1].min}),
            type: 'bar'
          },
          {
            data: this.ccc.map(i=>{return i[2].max,i[2].avg,i[2].min}),
            type: 'bar'
          }
        ]
      })
    }
  }
</script>

<style scoped>

</style>
