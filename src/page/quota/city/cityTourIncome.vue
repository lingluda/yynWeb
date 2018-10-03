<template>
    <div id="chartTouristIncome" style="height:400px;"></div>
</template>

<script>
export default {
    mounted(){
        //等容器渲染完成之后再加载图表，不然无法获取到准确的宽高度
        setTimeout(() => {
            this.$echarts.init(document.querySelector("#chartTouristIncome")).setOption({
                color: ['#8a83eb', '#645be6', '#d6d6d6', '#a9a9a9'],
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
                        name: '收入：万元',
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
                        min: -10
                    }
                ],
                grid: {
                    containLabel: true,
                    left: 20,
                    right: 20
                },
                legend: [
                    {
                        y: 'bottom',
                        data: [
                            { name: '国内旅游收入', icon: 'circle' },
                            '国内旅游年同比',
                            { name: '海外旅游外汇收入', icon: 'circle' },
                            '海外旅游年同比'
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
                        name: '海外旅游外汇收入',
                        stack: '总量',
                        barWidth: 30,
                        data: [2653.93, 2804.11, 4053.86, 4148.82, 4267.04, 4921.57, 4311.02, 4879.29]
                    }, {
                        type: 'bar',
                        name: '国内旅游收入',
                        stack: '总量',
                        data: [1352521.91, 1900152.22, 1720425.59, 1506320.26, 1368423.99, 1580902.27, 2030784.28, 2390486.52]
                    }, {
                        type: 'line',
                        name: '国内旅游年同比',
                        yAxisIndex: 1,
                        symbolSize: 6,
                        data: [-9.74, 80.44, 42.52, 31.18, 30.12, 34.93, 21.3, 16.95]
                    }, {
                        type: 'line',
                        name: '海外旅游年同比',
                        yAxisIndex: 1,
                        symbolSize: 6,
                        data: [8.25, 4.89, 8.09, 7.08, 6.48, 13.65, 12.38, 10.36]
                    }
                ]
            });
        }, 0);
    }
}
</script>