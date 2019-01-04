export default {
    tooltip: {
        trigger: "axis",
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
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
        type: "category",
        data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月","8月","9月","10月","11月","12月"],
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
        splitLine : {
            lineStyle : {
                color : "#E6E9E9"
            }
        }
    },
    series: [{
        data: [932, 820, 932, 901, 934, 1330,  901, 934, 1290, 901, 934, 1330, 1320],
        type: 'line'
    }]
}