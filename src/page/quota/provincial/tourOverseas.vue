<template>
    <div id="chartTourOverseas" style="height:400px;"></div>
</template>

<script>
export default {
    mounted(){
        //等容器渲染完成之后再加载图表，不然无法获取到准确的宽高度
        setTimeout(() => {
            this.$echarts.init(document.querySelector("#chartTourOverseas")).setOption({
                color: ['#645be6', '#a9a9a9'],
                title:{
                    text: "{a|海外游客旅游天数} {b|（单位：万人天）}",
                    textStyle: {
                        rich: {
                            a: {
                                fontWeight : 'bold',
                                fontSize: 14
                            },
                            b: {
                                fontSize: 12,
                                color: '#a5a5a5'
                            }
                        }
                    }
                },
                xAxis: {
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月'],
                    axisLabel: {
                        interval: 0,
                        color: '#999'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#e8e8e8'
                        }
                    },
                    axisTick: {
                        inside: true,
                        lineStyle: {
                            color: '#e8e8e8'
                        }
                    },
                    axisPointer: {
                        type: 'shadow',
                        label: {
                            backgroundColor: '#333'
                        }
                    }
                },
                yAxis: [
                    {
                        name: '',
                        nameGap: 20,
                        nameTextStyle: {
                            color: '#999'
                        },
                        axisLabel: {
                            color: '#999'
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            lineStyle: {
                                color: '#e8e8e8',
                                type: 'dashed'
                            }
                        }
                    }, {
                        name: '',
                        nameGap: 20,
                        nameTextStyle: {
                            color: '#999'
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        },
                        axisLabel: {
                            color: '#999',
                            formatter: '{value}%'
                        },
                        min: -10
                    }
                ],
                legend: [
                    {
                        y: 'bottom',
                        itemGap: 30,
                        data: [
                            { name: '天数', icon: 'circle' },
                            '年同比'
                        ]
                    }
                ],
                tooltip: {
                    trigger: 'axis'
                },
                grid:{
                    containLabel: true,
                    left: 20,
                    right: 20
                },
                series: [
                    {
                        type: 'bar',
                        name: '天数',
                        barWidth: 30,
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                color: '#000'
                            }
                        },
                        data: [82, 119, 119, 133, 149, 155, 124, 122]
                    }, {
                        type: 'line',
                        name: '年同比',
                        yAxisIndex: 1,
                        symbolSize: 6,
                        data: [11.41, 15.55, 4.04, 2.19, 6.56, 2.81, -0.22, -2.25]
                    }
                ]
            });
        }, 0);
    }
}
</script>
