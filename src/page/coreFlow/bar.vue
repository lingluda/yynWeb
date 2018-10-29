<template>
  <div>
    <div id="bar" style="height: 400px;width: 100%"></div>
    </div>
</template>

<script>
  import http from '@/http.js'
    export default {
      name: "bar",
      props:{
        ss:String
      },
      data(){
          return{
        }
      },
      mounted(){
      },
      methods:{
          barInit(){
            http.get('bi/get_scenic_tourist_ince_by_date',{date:http.gmt2str(this.ss),top:10}).then(resp=>{
              let max2data = resp.data.hits.sort((v1,v2)=> v2.ince - v1.ince)
              let max2n=[]
              let max2y=[]
              let max2name=[]
              let max2his=[]
              for (var i=0;i<resp.data.hits.length;i++) {
                max2his.push(parseInt(max2data[i].ince/100)/100)
                max2n.push(parseInt(max2data[i].n/100)/100)
                max2y.push(parseInt(max2data[i].pre/100)/100)
                max2name.push(max2data[i].name)
              }
              let bar =this.$echarts.init(document.getElementById("bar"))
              bar.setOption({
                legend: {
                  bottom: 12,
                  left: 'center',
                  icon:'circle',
                  data: ["当日景区客流", "昨日景区客流","客流变化量"]
                },
                color: ['#006EFF', '#29CC85'],
                tooltip : {
                  trigger: 'axis',
                  axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow',        // 默认为直线，可选为：'line' | 'shadow'
                  },
                  backgroundColor:'#323232',
                },
                grid: {
                  top:'10%',
                  left: '2%',
                  right: '4%',
                  bottom: '12%',
                  containLabel: true
                },
                xAxis : [
                  {
                    type : 'category',
                    data : max2name,
                    axisLabel: {
                      interval: 0,
                      color: '#999'
                    },
                    axisLine: {
                      lineStyle: {
                        color: '#e8e8e8'
                      }
                    },
                    axisTick: {
                      inside: true,
                      lineStyle: {
                        color: '#e8e8e8'
                      }
                    },
                    axisPointer: {
                      type: 'shadow',
                      label: {
                        backgroundColor: '#333'
                      }
                    }
                  }
                ],
                yAxis : [
                  {
                    name: '游客人数',
                    nameGap: 20,
                    nameTextStyle: {
                      color: '#999'
                    },
                    axisLabel: {
                      color: '#999'
                    },
                    axisLine: {
                      show: false
                    },
                    axisTick: {
                      show: false
                    },
                    splitLine: {
                      lineStyle: {
                        color: '#e8e8e8',
                        type: 'dashed'
                      }
                    }
                  }, {
                    name: '游客变化量',
                    nameGap: 20,
                    nameTextStyle: {
                      color: '#999'
                    },
                    axisLine: {
                      show: false
                    },
                    axisTick: {
                      show: false
                    },
                    splitLine: {
                      show: false
                    },
                    axisLabel: {
                      color: '#999',
                      formatter: '{value}'
                    },

                  }

                ],
                series : [
                  {
                    name:'当日景区客流',
                    type:'bar',
                    barWidth: '25%',
                    data:max2n,
                    yAxisIndex:0,
                    itemStyle: {
                      normal: {
                        label: {
                          show: true,
                          position: 'top',
                          formatter: '{c}',
                          color:"#000"
                        },
                      }
                    }
                  },
                  {
                    name:'昨日景区客流',
                    type:'bar',
                    barWidth: '25%',
                    data:max2y,
                    yAxisIndex:0,
                    itemStyle: {
                      normal: {
                        label: {
                          show: true,
                          position: 'top',
                          formatter: '{c}',
                          color:"#000"
                        },
                      }
                    }
                  },
                  {
                    name: '客流变化量',
                    type: 'line',
                    data: max2his,
                    yAxisIndex:1,
                    itemStyle: {
                      normal: {
                        color:"#bababa",
                        label: {
                          show: false,
                          position: 'top',
                          formatter: '{c}%'
                        },
                      }
                    },
                    smooth:false
                  }
                ]
              })
            })
          },
      },
      watch:{
        ss:'barInit'
      }
    }
</script>

<style scoped>

</style>
