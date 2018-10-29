<template>
  <div id="mains" style="width:100%;height:580px;"></div>
</template>

<script>
  import "echarts/map/js/yunnan.js";

  var myData = [
    {name: '昌宁县', value: [99.4973450000001, 25.123843]}
  ]
  export default {
    name: "repotMap",
    data() {
      return {}
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        let map = this.$echarts.init(document.getElementById('mains'))
        map.setOption({
          visualMap: {
            min: 0,
            max: 2000,
            text:['High','Low'],
            realtime: false,
            calculable: true,
            inRange: {
              color: ['#e0ffff', '#006edd']
            }
          },
          series : [
            {
              name: '浏览量',
              type: 'map',
              roam: true,

              //coordinateSystem: 'geo',
              //geoIndex: 0,
              map: '云南',
              roam: true,
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    color: 'rgba(0,0,0,0.4)'
                  },
                  formatter: '{b}\n{c}',
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
              data:[
                {name: '昆明市', value:200},
              ]
            }
          ]
          })
      }
    }

  }
</script>

<style scoped>

</style>
