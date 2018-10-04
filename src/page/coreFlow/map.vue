<template>
    <div id="chartFlowMap" style="height:563px;"></div>
</template>

<script>
import http from "@/http.js";
import "echarts/map/js/yunnan.js";
import "../../assets/js/yunnan.js";
export default {
    mounted(){

        http.get("bi/get_scenic_tourist_key_by_date", {}).then(resp => {
            let aMapData = resp.data.hits.map(item => {return {name: item.name, value: item.poi.concat(item.n)}});
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
                                color: '#000',
                                formatter: '{b}',
                                position: 'right',
                                show: true
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
            });
        });
    }
}
</script>
