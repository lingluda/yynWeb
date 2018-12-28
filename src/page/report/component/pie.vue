<!--
 <pie :title="'男女占比'" :id="'pie1'" :x="['男','女']" :y="[{name:'男',value:12},{name:'女',value:12}]" class="card"></pie>

-->
<template>
    <div>
      <div style="margin-left: 20px;font-size: 14px;color: #444444">{{title}}</div>
      <div :id="id" style="height: 500px;width: 100%;"></div>
    </div>
</template>

<script>
  export default {
    name: 'pie',
    props:{
      id:String,
      title:String,
      x:Array,
      y:Array,
      color:{
        type: Array,
        default:function () {
          return [
            "#006EFF",
            "#29CC85",
            "#ffbb00",
            "#ff584c",
            "#9741d9",
            "#1fc0cc",
            "#7ff936",
            "#ff9c19",
            "#e63984",
            "#655ce6",
            "#47cc50",
            "#006EFF",
            "#29CC85",
            "#ffbb00",
            "#ff584c",
            "#9741d9",
            "#1fc0cc",
            "#7ff936",
            "#ff9c19",
            "#e63984",
            "#655ce6",
            "#47cc50"
          ]
        }
      }
    },
    mounted(){
      let pie = this.$echarts.init(document.getElementById(this.id))
      pie.setOption({
        tooltip: {
          trigger: 'item',
          backgroundColor: '#323232',
          formatter: "{b}: {c} ({d}%)"
        },
        legend: {
          //orient: 'vertical',
          icon: 'circle',
          bottom: 5,
          data:this.x
        },
       color: this.color,
        series: [
          {
            //name:'访问来源',
            type:'pie',
            radius: ['0%', '60%'],
            avoidLabelOverlap: true,
            label: {
              normal: {
                show: true,
                position: 'outside',
                formatter: '{b}\n{d}%',
              },
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '12',
                  width: 80,
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data:this.y
          }
        ]
      })
    }
  }
</script>

<style scoped>

</style>
