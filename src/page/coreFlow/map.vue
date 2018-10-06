<template>
    <div id="chartFlowMap" style="height:650px;"></div>
</template>

<script>
import http from "@/http.js";
import "echarts/map/js/yunnan.js";
import "../../assets/js/yunnan.js";
export default {
    mounted(){

        // http.get("bi/get_scenic_tourist_key_by_date", {}).then(resp => {
            let hit = [{"city":"386","poi":[100.21975,27.12773],"scenic":"8370283b-75a4-42e4-6d01-7d390675c598","n":11265,"district":"3073","name":"玉龙雪山","timestamp":"2018-10-05T11:50:00.000+0800"},{"city":"385","poi":[103.325644,24.815183],"scenic":"e108aa08-f5f6-4d87-5c98-501b2983c615","n":11891,"district":"3063","name":"昆明石林","timestamp":"2018-10-05T11:50:00.000+0800"},{"city":"381","poi":[100.14331,25.70453],"scenic":"1515c165-f551-4411-4a36-fff88e641872","n":5902,"district":"3023","name":"大理三塔景区","timestamp":"2018-10-05T11:50:00.000+0800"},{"city":"385","poi":[102.66128,24.96618],"scenic":"e4fc748a-a60c-4716-687b-01254d621833","n":9362,"district":"3066","name":"云南民族村","timestamp":"2018-10-05T11:50:00.000+0800"},{"city":"379","poi":[98.44069,24.94773],"scenic":"80ace0e1-ae1f-4c6f-5f59-813ef365bd6b","n":4227,"district":"3011","name":"腾冲热海","timestamp":"2018-10-05T11:50:00.000+0800"},{"city":"385","poi":[102.762047,25.075153],"scenic":"e96f0b71-ede7-4735-7c87-eb0e0b92f946","n":4789,"district":"3062","name":"世界园艺博览园","timestamp":"2018-10-05T11:50:00.000+0800"},{"city":"383","poi":[99.90801,27.80178],"scenic":"d7608c1e-73f9-4267-7c3c-4bae7e3fb59d","n":9246,"district":"3041","name":"香格里拉普达措","timestamp":"2018-10-05T11:50:00.000+0800"},{"city":"386","poi":[100.23673,26.87076],"scenic":"fd6cebb5-a78e-4c24-5263-414eae31c2dd","n":58122,"district":"3069","name":"丽江古城","timestamp":"2018-10-05T11:50:00.000+0800"},{"city":"392","poi":[101.25762,21.92424],"scenic":"5e665f24-a103-4ac1-5dd2-21f2c71a84aa","n":5313,"district":"3115","name":"中科院植物园","timestamp":"2018-10-05T11:50:00.000+0800"}];
            let aMapData = hit.map(item => {return {name: item.name, value: item.poi.concat(item.n)}});
            // let aMapData = resp.data.hits.map(item => {return {name: item.name, value: item.poi.concat(item.n)}});
            this.$echarts.init(document.querySelector("#chartFlowMap")).setOption({
                tooltip: {
                    formatter(params){
                        return params.data.name + '：' + params.data.value[2];
                    },
                },
                geo: {
                    map: '云南',
                    itemStyle: {
                        areaColor: '#b0dff5',
                        borderColor: '#fff'
                    },
                    emphasis: {
                        label: {
                            color: '#fff'
                        },
                        itemStyle: {
                            areaColor: '#3190ce'
                        }
                    }
                },
                series : [
                    {
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: aMapData,
                        symbolSize: 10,
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                color: '#333',
                                formatter: '{b}',
                                position: 'right',
                                show: true,
                                fontSize:9
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'yellow',
                                shadowBlur: 10,
                                shadowColor: 'yellow'
                            }
                        },
                        zlevel: 1
                    }
                ]
            },true);
        // });
    }
}
</script>
