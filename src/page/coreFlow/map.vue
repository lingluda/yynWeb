<template>
    <div>
    <div id="main" style="width:100%;height:550px;"></div>
    </div>
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
        var option = {
          tooltip: {
            formatter: '{b}\n{c}人',
          },
          visualMap: {
            min: 0,
            max: aMapData2[0].value,
            text: ["高", "低"],
            realtime: true,
            calculable: true,
            inRange: {
              color: ["#8dc5ff", "#479eff", "#094ce0", "#011180"]
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
                borderRadius: 100,
                normal: {
                  borderColor: "#fff",
                  color: "#1b1b1b",
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
                    backgroundColor: '#6e6c6e',
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
