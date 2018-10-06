<template>
    <div id="chartTouristMonthly" style="height:400px;"></div>
</template>

<script>
export default {
    mounted(){
        //等容器渲染完成之后再加载图表，不然无法获取到准确的宽高度
        setTimeout(() => {
            this.$echarts.init(document.querySelector("#chartTouristMonthly")).setOption({
                color: ['#76b1ff', '#3c6ffe', '#d6d6d6', '#a9a9a9'],
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
                        inside:true,
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
                        }
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
                            {name: '海外旅游人数', icon: 'circle'},
                            '海外旅游年同比',
                            { name: '国内旅游人数', icon: 'circle' },
                            '国内旅游年同比'
                        ]
                    }
                ],
                tooltip: {
                    trigger: 'axis',
                    // axisPointer: {
                    //     type: 'cross',
                    //     crossStyle: {
                    //         color: '#999'
                    //     }
                    // }
                },
                series: [
                    {
                        type: 'bar',
                        name: '国内旅游人数',
                        stack: '总量',
                        data: [1119.27, 1627.9, 1203.97, 986.98, 1058.88, 1178.47, 1333.4, 1485.25]
                    }, {
                        type: 'bar',
                        name: '海外旅游人数',
                        stack: '总量',
                        barWidth: '30',
                        data: [5.77, 6.333, 10.09, 10.95, 10.97, 11.45, 10.89, 11.68]
                    }, {
                        type: 'line',
                        name: '国内旅游年同比',
                        yAxisIndex: 1,
                        symbolSize: 6,
                        data: [-9.22, 77.51, 36.05, 28.39, 20.96, 27.34, 9.55, 4.16]
                    }, {
                        type: 'line',
                        name: '海外旅游年同比',
                        yAxisIndex: 1,
                        symbolSize: 6,
                        data: [6.87, 3.97, 6.54, 6.7, 5.65, 13.16, 7.21, 6.98]
                    }
                ]
            });
        }, 0);
    }
}
</script>
