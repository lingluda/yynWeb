<template>
    <div id="tourIncomeOversea" style="height:400px;"></div>
</template>

<script>
export default {
    mounted(){
        //等容器渲染完成之后再加载图表，不然无法获取到准确的宽高度
        setTimeout(() => {
            this.$echarts.init(document.querySelector("#tourIncomeOversea")).setOption({
                color: ['#63cd8d', '#a9a9a9'],
                title:{
                    text: "{a|旅游外汇收入} {b|（单位：万元）}",
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
                    }
                ],
                legend: [
                    {
                        y: 'bottom',
                        itemGap: 30,
                        data: [
                            { name: '旅游外汇收入', icon: 'circle' },
                            '旅游外汇收入年同比'
                        ]
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
                        name: '旅游外汇收入',
                        barWidth: 30,
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                color: '#000'
                            }
                        },
                        data: [15, 21, 21, 23, 25, 26, 21, 21]
                    }, {
                        type: 'line',
                        name: '旅游外汇收入年同比',
                        yAxisIndex: 1,
                        symbolSize: 6,
                        data: [12.99, 16.93, 6.34, 3.86, 7.98, 2.92, -0.39, -3.04]
                    }
                ]
            });
        }, 0);
    }
}
</script>
