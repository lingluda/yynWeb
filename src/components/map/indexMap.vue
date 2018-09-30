<template>
  <div>
  <div id="main" style="width:100%;height:100%;">
  </div>
  </div>
</template>

<script>
  import echarts from "echarts"
  import "echarts/map/js/yunnan.js";
  import "../../assets/js/yunnan.js";
    export default {
      name: "indexMap",
      props:{
        mapdata:Array
      },
      data(){
          return{

          }
      },
      mounted(){
      },
      methods:{
          initMap(){
            let map = this.$echarts.init(document.getElementById("main"))
            map.setOption({
              tooltip: {

                    formatter: '{b}\n{c}人',

              },
              visualMap: {
                min: 0,
                max: 200000,

                text:['高','低'],
                realtime: false,
                calculable: true,
                inRange: {
                  color: ['#92cde8', '#3190ce']
                }
              },
              /*geo: {
                  //map: 'china',
                  map: '云南',
                  roam: true,
                  label: {
                      normal: {
                          show: true,
                          textStyle: {
                              color: 'rgba(0,0,0,0.4)'
                          },
                          borderWidth:0
                      }
                  },
                  itemStyle: {
                      normal:{
                          borderColor: 'rgba(0, 0, 0, 0.2)'
                      },
                      emphasis:{
                          areaColor: null,
                          shadowOffsetX: 0,
                          shadowOffsetY: 0,
                          shadowBlur: 20,
                          borderWidth: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              },*/
              series : [
                {
                  name: '浏览量',
                  type: 'map',
                  roam: false,
                  //coordinateSystem: 'geo',
                  //geoIndex: 0,
                  map: '云南',
                  label: {
                    normal: {
                      show: true,
                      textStyle: {
                        color: 'rgba(0,0,0,0.4)'
                      },
                      formatter: '{b}\n{c}人',
                      borderWidth:0
                    }
                  },
                  itemStyle: {
                    normal:{
                      borderColor: 'rgba(0, 0, 0, 0.2)'
                    },
                    emphasis:{
                      areaColor: null,
                      shadowOffsetX: 0,
                      shadowOffsetY: 0,
                      shadowBlur: 20,
                      borderWidth: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  },
                  data:this.mapdata
                }
              ]
            })
          }
      },
      watch:{
        mapdata:'initMap'
      }
    }
</script>

<style scoped>

</style>
