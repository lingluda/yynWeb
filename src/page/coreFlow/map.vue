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
      http.get("bi/get_scenic_tourist_key_by_date", {}).then(resp => {
        let aMapData = resp.data.hits.map(item => {
          return { name: item.name, coord: item.coord,value:item.n };
        });
        // let aMapData2 = [{"city":"385","scenic":"e4fc748a-a60c-4716-687b-01254d621833","n":7787,"coord":[102.66128,24.96618],"district":"3066","name":"云南民族村","timestamp":"2018-10-06T11:55:00.000+0800"},{"city":"386","scenic":"fd6cebb5-a78e-4c24-5263-414eae31c2dd","n":50578,"coord":[100.23673,26.87076],"district":"3069","name":"丽江古城","timestamp":"2018-10-06T11:55:00.000+0800"},{"city":"385","scenic":"e108aa08-f5f6-4d87-5c98-501b2983c615","n":9650,"coord":[103.325644,24.815183],"district":"3063","name":"昆明石林","timestamp":"2018-10-06T11:55:00.000+0800"},{"city":"386","scenic":"8370283b-75a4-42e4-6d01-7d390675c598","n":9066,"coord":[100.21975,27.12773],"district":"3073","name":"玉龙雪山","timestamp":"2018-10-06T11:55:00.000+0800"},{"city":"383","scenic":"d7608c1e-73f9-4267-7c3c-4bae7e3fb59d","n":5289,"coord":[99.90801,27.80178],"district":"3041","name":"香格里拉普达措","timestamp":"2018-10-06T11:55:00.000+0800"},{"city":"385","scenic":"e96f0b71-ede7-4735-7c87-eb0e0b92f946","n":4593,"coord":[102.762047,25.075153],"district":"3062","name":"世界园艺博览园","timestamp":"2018-10-06T11:55:00.000+0800"},{"city":"381","scenic":"1515c165-f551-4411-4a36-fff88e641872","n":3783,"coord":[100.14331,25.70453],"district":"3023","name":"大理三塔景区","timestamp":"2018-10-06T11:55:00.000+0800"},{"city":"392","scenic":"5e665f24-a103-4ac1-5dd2-21f2c71a84aa","n":3457,"coord":[101.25762,21.92424],"district":"3115","name":"中科院植物园","timestamp":"2018-10-06T11:55:00.000+0800"},{"city":"379","scenic":"80ace0e1-ae1f-4c6f-5f59-813ef365bd6b","n":3046,"coord":[98.44069,24.94773],"district":"3011","name":"腾冲热海","timestamp":"2018-10-06T11:55:00.000+0800"}];
        //  let aMapData = aMapData2.map(item => {
        //   return { name: item.name, coord: item.coord,value:item.n };
        // });
        var option = {
          visualMap: {
            min: 0,
            max: 100000,
            text: ["高", "低"],
            realtime: false,
            calculable: true,
            inRange: {
              color: ["#a7cdff", "#3d91ff", "#0059e0", "#001780"]
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
                { name: "昆明市", value: this.randomValue() },
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
                    fontSize: 8
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
      });
    }
  },
  mounted() {
    this.txMap();
  }
};
</script>