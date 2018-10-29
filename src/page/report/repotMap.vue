<template>
  <div id="mains" style="width:100%;height:580px;"></div>
</template>

<script>
  import "echarts/map/js/yunnan.js";
  import http from "../../http";
  var myData = [
    {name: '昌宁县', value: [99.4973450000001, 25.123843]}
  ]
  export default {
    name: "repotMap",
    props:{
      issend:Number,
      mapdata:Array,
    },
    data() {
      return {
        picBase64Info:'',
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        let map = this.$echarts.init(document.getElementById('mains'))
        map.setOption({
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
        this.picBase64Info = map.getDataURL();
        console.log('picBase64Info:::',picBase64Info)
      },
      send(){
        if (this.issend==1) {
          console.log('send')
          http.post('downrep',{}).then(resp=>{
            console.log('send1111asd1ada1112send')
          })
        }

      }
    },
  watch:{
    issend:'send'
  }
  }
</script>

<style scoped>

</style>
