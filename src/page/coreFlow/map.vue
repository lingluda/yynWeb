<template>
    <!-- <div id="chartFlowMap" style="height:563px;"></div> -->
    <div id="main" style="width:100%;height:580px;"></div>
</template>
 
<script>
import http from "@/http.js";
import "echarts/map/js/echarts.js";
import "echarts/map/js/yunnan.js";
export default {
  props:{
    mapData:Array,
  },
  methods: {
    randomValue() {
      return Math.round(Math.random() * 100000);
    },
    txMap() {
        let aMapData = this.mapData.hits.map(item => {
          let position = '';
          //对两个重叠的景点做特殊处理
          if(item.scenic == 'e96f0b71-ede7-4735-7c87-eb0e0b92f946'){
            //世界园艺博览园
            position = 'top'
          }else if(item.scenic == 'e108aa08-f5f6-4d87-5c98-501b2983c615') {
            //昆明石林
            position = 'bottom'
          }else{
            position = 'right'
          }
          return {
            name: item.name,
            coord: item.coord,
            value: item.n,
            label:{
              normal:{
                position : position
              }
            }
          };
        })
        let aMapData2 =  this.mapData.dist.map(item => {return { name: item.name,value:item.value}});
        console.log('aMapData2',aMapData2)
        console.log('aMapData1',aMapData)
        var option = {
          visualMap: {
            min: 0,
            max: aMapData2[0].value,
            text: ["高", "低"],
            realtime: true,
            calculable: true,
            inRange: {
              color: ["#a7cdff", "#3d91ff", "#0059e0", "#001780"]
            }
          },
          series: [
            {
              type: "map",
              roam: false,
              map: "云南",
              layoutCenter: ["50%", "50%"],
              layoutSize: "100%",
              itemStyle: {
                normal: {
                  borderColor: "rgba(100,149,237,1)",
                  color: "#1b1b1b",
                  borderWidth: 0.5
                }
              },
              hoverable: false,
              data: aMapData2,
              markPoint: {
                symbol: "emptyCircle",
                symbolSize: 8, //function (v){ return 10 + v/1000 },
                label: {
                  normal: {
                    color: "#fff",
                    backgroundColor: 'grey',
                    formatter: "{b}",
                    show: true,
                    fontSize: 12,
                    padding:4
                  }
                },
                itemStyle: {
                  normal: {
                    color: "yellow",
                    shadowBlur: 10,
                    shadowColor: "yellow"
                  }
                },
                data: aMapData
              }
            }
          ]
        };
        var chart = this.$echarts.init(document.getElementById("main"));
        chart.setOption(option);
    }
  },
  mounted() {

  },
  watch:{
    mapData:'txMap'
  }
};
</script>
