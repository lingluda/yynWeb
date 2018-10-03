<template>
    <div id="chartTouristTimes" style="height:400px;"></div>
</template>

<script>
export default {
    mounted(){
        //等容器渲染完成之后再加载图表，不然无法获取到准确的宽高度
        setTimeout(() => {
            this.$echarts.init(document.querySelector("#chartTouristTimes")).setOption({
                color: ['#3c6ffe', '#a9a9a9'],
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
                        name: '人数：万人次',
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
                        name: '年同比',
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
                        max: 60
                    }
                ],
                legend: [
                    {
                        y: 'bottom',
                        itemGap: 30,
                        data: [
                            { name: '人次', icon: 'circle' },
                            '年同比'
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
                series: [
                    {
                        type: 'bar',
                        name: '人次',
                        barWidth: 30,
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                color: '#000'
                            }
                        },
                        data: [4507.53, 6910.59, 5776.43, 5202.57, 5612.86, 5586.99, 6162.39, 6942.44]
                    }, {
                        type: 'line',
                        name: '年同比',
                        yAxisIndex: 1,
                        symbolSize: 6,
                        data: [-0.84, 48.6, 34.14, 32.23, 20.64, 29.13, 17.72, 16.15]
                    }
                ]
            });
        }, 0);
    }
}
</script>