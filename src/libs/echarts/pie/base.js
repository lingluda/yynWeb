const basePie = {
    tooltip: {
        trigger: "item",
        formatter: "{b} : {c}"
    },
    legend: {
        data: [
            "直接访问",
            "邮件营销",
            "联盟广告",
            "视频广告",
            "搜索引擎"
        ],
        bottom: 5,
        icon: 'circle',
        orient: 'horizontal',
    },
    series: [
        {
            name: "访问来源",
            type: "pie",
            radius: ['45%', '65%'],
            center: ["50%", "40%"],
            data: [
                { value: 335, name: "直接访问" },
                { value: 310, name: "邮件营销" },
                { value: 234, name: "联盟广告" },
                { value: 135, name: "视频广告" },
                { value: 1548, name: "搜索引擎" }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                }
            },
            label : {
                show : false
            },
            labelLine : {
                show : false
            },
            minAngle : 10
        }
    ]
}

export default basePie