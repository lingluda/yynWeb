<template>
    <div id="chartTourIncomeB" style="height:400px;"></div>
</template>

<script>
export default {
    mounted(){
        //等容器渲染完成之后再加载图表，不然无法获取到准确的宽高度
        setTimeout(() => {
            this.$echarts.init(document.querySelector("#chartTourIncomeB")).setOption({
                color: ['#63cd8d', '#a9a9a9'],
                title:{
                    text: '国内一日旅游收入',
                    textStyle: {
                        fontSize: 14
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
                    }
                ],
                legend: [
                    {
                        y: 'bottom',
                        itemGap: 30,
                        data: [
                            { name: '国内一日旅游收入', icon: 'circle' },
                            '国内一日旅游年同比'
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
                        name: '国内一日旅游收入',
                        barWidth: 30,
                        data: [1304164.57, 2180633.45, 1685101.07, 1434000.43, 1595912.04, 1557601.19, 1636164.46, 1894215.15]
                    }, {
                        type: 'line',
                        name: '国内一日旅游年同比',
                        yAxisIndex: 1,
                        symbolSize: 6,
                        data: [-3.4, 66.8, 50.57, 39.06, 25.09, 36.47, 28.11, 28.91]
                    }
                ]
            });
        }, 0);
    }
}
</script>