export default {
    color: ["#006EFF"],
    tooltip: {
        trigger: "axis",
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        show: false,
        top: "0",
        right: "0",
        textStyle: {
            color: "#fff"
        }
    },
    grid: {
        left: "2%",
        right: "2%",
        top: "5%",
        bottom: "5%",
        containLabel: true
    },
    xAxis: {
        type: "value",
        nameTextStyle: {
            color: "#888"
        },
        axisLine: {
            lineStyle: {
                color: "#E5E5E5"
            }
        },
        axisLabel: {
            color: "#888"
        },
        axisTick: {
            alignWithLabel: true
        }
    },
    yAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        nameTextStyle: {
            color: "#888"
        },
        axisLine: {
            lineStyle: {
                color: "#E5E5E5"
            }
        },
        axisLabel: {
            color: "#888"
        }
    },
    series: [
        {
            type: "bar",
            data: [10, 52, 200, 334, 390, 330, 220],
            barWidth: "20px",
            label : {
                show : false,
                position : "right",
                color : "#888888",
                // formatter : "{d}%"
            },
            itemStyle: {
                normal: {
                    //barBorderRadius:[15]
                }
            }
        }
    ]
}
