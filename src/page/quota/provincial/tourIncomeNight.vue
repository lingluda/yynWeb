<template>
    <div id="tourIncomeNight" style="height:400px;"></div>
</template>

<script>
export default {
    mounted(){
        //等容器渲染完成之后再加载图表，不然无法获取到准确的宽高度
        setTimeout(() => {
            this.$echarts.init(document.querySelector("#tourIncomeNight")).setOption({
                color: ['#63cd8d', '#a9a9a9'],
                title:{
                    text: "{a|国内过夜旅游收入} {b|（单位：亿元）}",
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
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'],
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
                        min: -10,
                        max: 60
                    }
                ],

                tooltip: {
                    trigger: 'axis'
                },
                grid:{
                    containLabel: true,
                    left: 20,
                    right: 20,
                    top: 80
                },
                series: [
                    {
                        type: 'bar',
                        name: '国内过夜旅游收入',
                        barWidth: 30,
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                color: '#000'
                            }
                        },
                        data: [408, 573, 528, 525, 536, 518, 620, 689,580,672]
                    }, {
                        type: 'line',
                        name: '年同比增长率',
                        yAxisIndex: 1,
                        symbolSize: 6,
                        data: [3.98, 39.22, 29.62, 40.74, 21.02, 18.51, 13.68, 6.87,19.51,11.75]
                    }
                ]
            });
        }, 0);
    }
}
</script>
