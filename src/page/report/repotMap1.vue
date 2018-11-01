<template>
  <div>{{mapdata}}
  <div id="ffff" style="width:100%;height:580px;"></div>
  </div>
</template>

<script>
  import "echarts/map/js/yunnan.js";

  export default {
    name: "repotMap",
    props:{
      mapdata:Array,
    },
    data() {
      return {
        picBase64Info:'',
      }
    },
    created(){

    },
    mounted() {
      let map = this.$echarts.init(document.getElementById('ffff'))
      map.setOption({
        animation: false,
        title:{
          text:'单位（%）',
          textStyle:{
            fontSize:12
          }
        },
        visualMap: {
          show:false,
          min: 0,
          max: 100,
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
            //coordinateSystem: 'geo',
            //geoIndex: 0,
            map: '云南',
            roam: false,
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
            data:this.mapdata
          }
        ]
      })
    },
    methods: {

    },

  }
</script>

<style scoped>

</style>
