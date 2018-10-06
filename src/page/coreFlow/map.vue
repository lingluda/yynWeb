<template>
    <!-- <div id="chartFlowMap" style="height:563px;"></div> -->
    <div id="main" style="width:100%;height:563px;"></div>
</template>
 
<script>
import http from "@/http.js";
import "echarts/map/js/echarts.js";
import "echarts/map/js/yunnan.js";
export default {
  methods: {
    randomValue() {
      return Math.round(Math.random() * 100000);
    },
    txMap() {
      var option = {
        visualMap: {
          min: 0,
          max: 100000,
          text: ["高", "低"],
          realtime: false,
          calculable: true,
          inRange: {
            color: ['#a7cdff','#3d91ff','#0059e0','#001780']
          }
        },
        series: [
          {
            type: "map",
            roam: true,
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
            data: [
              { name: "昆明市", value: this.randomValue()},
              { name: "保山市", value: this.randomValue() },
              { name: "昆明市", value: this.randomValue() },
              { name: "保山市", value: this.randomValue() },
              { name: "昭通市", value: this.randomValue() },
              { name: "玉溪市", value: this.randomValue() },
              { name: "丽江市", value: this.randomValue() },
              { name: "普洱市", value: this.randomValue() },
              { name: "临沧市", value: this.randomValue() },
              { name: "曲靖市", value: this.randomValue() },
              { name: "大理白族自治州", value: this.randomValue() },
              { name: "迪庆藏族自治州", value: this.randomValue() },
              { name: "怒江傈僳族自治州", value: this.randomValue() },
              { name: "楚雄彝族自治州", value: this.randomValue() },
              { name: "德宏傣族景颇族自治州", value: this.randomValue() },
              { name: "西双版纳傣族自治州", value: this.randomValue() },
              { name: "红河哈尼族彝族自治州", value: this.randomValue() },
              { name: "文山壮族苗族自治州", value: this.randomValue() }
            ],
            markPoint: {
              symbol: "emptyCircle",
              symbolSize: 8, //function (v){ return 10 + v/1000 },
              label: {
                normal: {
                  color: "#fff",
                  formatter: "{b}:{c}",
                  position: "right",
                  show: true,
                  fontSize: 9
                }
              },
              itemStyle: {
                normal: {
                  color: "yellow",
                  shadowBlur: 10,
                  shadowColor: "yellow"
                }
              },
              data: [
                { name: "玉龙雪山", value: 8639, coord: [100.21975, 27.12773] },
                {
                  name: "世界园艺博览园",
                  value: 4005,
                  coord: [102.76152, 25.07456]
                },
                { name: "腾冲热海", value: 1552, coord: [98.44069, 24.94773] },
                {
                  name: "大理三塔景区",
                  value: 2244,
                  coord: [100.14331, 25.70453]
                },
                {
                  name: "云南民族村",
                  value: 4940,
                  coord: [102.66128, 24.96618]
                },
                {
                  name: "中科院植物园",
                  value: 2624,
                  coord: [101.25762, 21.92424]
                },
                {
                  name: "丽江古城",
                  value: 52602,
                  coord: [100.23673, 26.87076]
                },
                {
                  name: "香格里拉普达措",
                  value: 3004,
                  coord: [99.90801, 27.80178]
                },
                { name: "昆明石林", value: 1995, coord: [103.32617, 24.81676] }
              ]
            }
          }
        ]
      };
      var chart = this.$echarts.init(document.getElementById("main"));
      chart.setOption(option);
    }
  },
  mounted() {
    this.txMap();
  }
};
</script>