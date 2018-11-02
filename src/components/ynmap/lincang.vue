<template>
  <div>
    <div id="main" style="width:100%;height:580px;"></div>
  </div>
</template>

<script>
  import "echarts/map/js/lincang.js";
  export default {
    props:{
      mapData:Array,
    },
    name: "",
    data() {
      return {}
    },
    mounted() {
    },
    methods: {
      initMap() {
        let myData = this.mapData.hits.slice(0, 3).map(item => {
          return {name: item.name, coord: item.coord,value:item.cur}
        });   let map = this.$echarts.init(document.getElementById("main"))
        map.setOption({
          geo: {
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              },
            } ,
          },series: [
            {
              type: "map",
              map: '临沧市',
              roam: false,
              layoutCenter: ["50%", "50%"],
              layoutSize: "100%",
              itemStyle: {
                normal: {
                  borderColor:'rgba(100,149,237,1)',
                  color:'#a7cdff',
                  borderWidth:0.5,
                  areaStyle:{color: '#1b1b1b' }
                }
              },
              hoverable: false,
              markPoint: {
                symbol: "circle",
                symbolSize: 8, //function (v){ return 10 + v/1000 },
                label: {
                  position:"right",
                  color: "#fff",
                  backgroundColor: 'grey',
                  formatter: "{b}",
                  show: true,
                  fontSize: 12,
                  padding:4
                },
                emphasis:{
                  label: {
                    position: "right",
                    color: "#fff",
                    backgroundColor: 'grey',
                    formatter: "{b}：{@coord}人",
                    show: true,
                    fontSize: 12,
                    padding: 4
                  },
                },
                itemStyle: {
                  normal: {
                    color: "yellow",
                    shadowBlur: 10,
                    shadowColor: "yellow"
                  }
                },
                data: myData
              }
            }
          ],
        })
      }
    },
    watch:{
      mapData:'initMap'
    }
  }

</script>

<style scoped>

</style>
