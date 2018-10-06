<template>
    <div id="chartTourIncomeA" style="height:400px;"></div>
</template>

<script>
export default {
    mounted(){
        //等容器渲染完成之后再加载图表，不然无法获取到准确的宽高度
        setTimeout(() => {
            this.$echarts.init(document.querySelector("#chartTourIncomeA")).setOption({
                color: ['#1aaba8', '#a9a9a9'],
                title:{
                    text: "{a|旅游业总收入} {b|（单位：万元）}",
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
                        min: -10,
                        max: 60
                    }
                ],
                legend: [
                    {
                        y: 'bottom',
                        itemGap: 30,
                        data: [
                            { name: '旅游业总收入', icon: 'circle' },
                            '旅游业总收入年同比'
                        ]
                    }
                ],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
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
                        name: '旅游业总收入',
                        barWidth: 30,
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                color: '#000'
                            }
                        },
                        data: [555, 813, 718, 692, 721, 700, 806, 899]
                    }, {
                        type: 'line',
                        name: '旅游业总收入年同比',
                        yAxisIndex: 1,
                        symbolSize: 6,
                        data: [2.37, 44.92, 33.1, 38.73, 21.37, 21.38, 15.88, 10.58]
                    }
                ]
            });
        }, 0);
    }
}
</script>