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
                //国内旅游游客流量
                title:{
                    text: "{a|国内旅游游客流量} {b|（单位：万人）}",
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
                    trigger: 'axis'
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
                                color: '#000',
                                formatter : function (str) {
                                    var strNum = str.value
                                    if(strNum.length <= 3) {
                                        return strNum;
                                    }
                                    if(!/^(\+|-)?(\d+)(\.\d+)?$/.test(strNum)) {
                                        return strNum;
                                    }
                                    var a = RegExp.$1,
                                        b = RegExp.$2,
                                        c = RegExp.$3;
                                    var re = new RegExp();
                                    re.compile("(\\d)(\\d{3})(,|$)");
                                    while(re.test(b)) {
                                        b = b.replace(re, "$1,$2$3");
                                    }
                                    return a + "" + b + "" + c;
                                }
                            }
                        },
                        data: [4507, 6910, 5776, 5202, 5612, 5586, 6162, 6942]
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
