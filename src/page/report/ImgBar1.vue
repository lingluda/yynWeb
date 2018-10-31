<template>
  <div>{{sx}}
  <div :id="main" style="width: 100%;height: 350px"></div>
  </div>
</template>

<script>
  import http from "../../http";
  export default {
    name: "ImgBar",
    props:{
      sx:Array,
      main:String,
    },
    data(){
      return{
        picBase64Info:''
      }
    },
    mounted(){
      let bar = this.$echarts.init(document.getElementById(this.main))
      bar.setOption({
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        color:["#006EFF", "#29CC85", "#ffbb00", "#ff584c", "#9741d9", "#1fc0cc", "#7ff936", "#ff9c19", "#e63984", "#655ce6", "#47cc50", "#fb0b6"],
        legend: {
          bottom:'1%',
          x: 'center',
          icon: "circle",
          data: this.sx.map(item=>{return item.name})
        },
        series: [
          {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],
            label: {
              normal: {
                show: true,
                position: 'outside',
                formatter: '{b}\n{d}%',
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            avoidLabelOverlap: true,
            labelLine:{
              show:true,
              length:5,
              length2:4
            },
            data: this.sx
          }
        ]
      })

    },

  }
</script>

<style scoped>

</style>
