// 重载图表会有点点卡顿，待优化
import Echarts from "echarts"
import base from "./base/index.js"
import basePie from "./pie/base.js"
import baseBarX from "./bar/bar-x.js"
import baseBarY from "./bar/bar-y.js"
import baseLine from "./line/base.js"
import { deepObjectMerge } from "../func/deepObjectMerge.js"

const resizeCallbacks = [] // 需要重载图表集
const echart = (dom, option, char) => {
    setTimeout(() => {
        initChart(dom, option, char)
        window.onresize = function() {
            resizeChart()
        }
    }, 100)
}

resizeText()
window.onresize = function() {
    resizeText()
}

export default echart

// 初始化图表数据
function initChart(dom, option, char) {
    if (dom.clientHeight > 0) {
        let baseOpt = {}
        let opt = {}
        if (char == "pie") {
            baseOpt = deepObjectMerge(basePie, base)
        } else if (char == "barx") {
            baseOpt = deepObjectMerge(baseBarX, base)
        } else if (char == "bary") {
            baseOpt = deepObjectMerge(baseBarY, base)
        } else if (char == "line") {
            baseOpt = deepObjectMerge(baseLine, base)
        }
        opt = deepObjectMerge(option, baseOpt)
        let myChart = Echarts.init(dom) // 基于准备好的dom，初始化echarts实例
        myChart.setOption(opt)

        resizeCallbacks.push({
            callback: () => {
                if (myChart._dom.clientHeight > 0) {
                    myChart.resize()
                }
            }
        })
    }
}

// 重载图表
function resizeChart() {
    resizeCallbacks.forEach(item => {
        item.callback()
    })
}

// 重载文字
function resizeText() {
    var app = document.getElementsByTagName("body")
    var html_fontsize = app.clientWidth / 120
    document.getElementsByTagName("html")[0].style.fontSize =
        html_fontsize + "px"
}
