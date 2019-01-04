<!--
 <barx :title="'游玩天数'" :unit="'天'" :x="[1,2,3,4,5]" :y="['广西','广西','广西','广西','广西',]"></barx>

-->
<template>
    <div style="border: 1px solid #dcdee2;">
     <!-- <div>
      <span style=";font-size: 14px;color: #000;font-weight: bold;margin: 20px">{{title}}</span>
      <span style="color: #a5a5a5">(单位：{{unit}})</span>
      </div>-->
        <div ref="echart" style="height: 250px;width: 100%;"></div>
      <Spin size="large" fix v-if="y.length==0"></Spin>
    </div>
</template>

<script>
  export default {
    props:{
      title:String,
      unit:String,
      x:Array,
      y:Array,
    },
    name: 'barx',
    mounted(){
        //this.init()
    },
    methods:{
      init(){
        let dom = this.$refs.echart
        let opt = {
          title: {
            text: this.title,
            textStyle: {
              fontSize: 12
            },
            x: 30,
            y: 15
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            backgroundColor: '#323232',
            formatter: '{b} : {c} ' + this.unit,
          },
          grid: {
            left: '3%',
            right: '3%',
            top:'11%',
            bottom: '3%',
            width:'86%',
            containLabel: true
          },
          color:['#006EFF'],
          xAxis: {
            type: 'value',
            axisLabel: {
              color: '#999'
            },
            axisLine: {
              lineStyle: {
                color: '#e8e8e8'
              }
            },
            axisTick: {
              lineStyle: {
                color: '#e8e8e8'
              }
            },
            splitLine: {
              lineStyle: {
                color: '#e8e8e8',
                type: 'dashed'
              }
            }
          },
          yAxis: {
            //name:'单位：'+this.unit,
            type: 'category',
            data: this.y,
            nameTextStyle: {
              color: '#888'
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#888'
            },
            splitLine: {
              lineStyle: {
                //type : "dashed",
                color: '#E6E9E9'
              }
            }
          },
          series: [{

            data: this.x,
            type: 'bar',
            barWidth: '50%',
            barMaxWidth:'27',
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: 'right',
                  formatter: '{c}%',
                  color:"#006EFF"
                },
              }
            }
          }]
        }
        this.echart(dom, opt, "bary")
      }
    },
    watch:{
      y:'init'
    }
  }
</script>

<style scoped>

</style>
