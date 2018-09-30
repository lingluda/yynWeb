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
                        },
                        min: -10
                    }
                ],
                grid: {
                    bottom: 80
                },
                legend: [
                    {
                        y: 'bottom',
                        data: [
                            { name: '国内旅游人数', icon: 'circle' },
                            '国内旅游年同比',
                            {name: '海外旅游人数', icon: 'circle'},
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
                        name: '海外旅游人数',
                        stack: '总量',
                        barWidth: '30',
                        data: [380, 210, 420, 300, 550, 390, 650, 320]
                    }, {
                        type: 'bar',
                        name: '国内旅游人数',
                        stack: '总量',
                        data: [500, 300, 200, 400, 250, 480, 350, 180]
                    }, {
                        type: 'line',
                        name: '国内旅游年同比',
                        yAxisIndex: 1,
                        symbolSize: 6,
                        data: [35, 25, 30, 23, 16, 33, 29, 12]
                    }, {
                        type: 'line',
                        name: '海外旅游年同比',
                        yAxisIndex: 1,
                        symbolSize: 6,
                        data: [10, 20, 22, 15, 8, 25, 21, 6]
                    }
                ]
            });
        }, 0);
    }
}
</script>