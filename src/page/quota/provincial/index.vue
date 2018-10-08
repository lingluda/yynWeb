<template>
    <div style="height:100%;">
        <div class="tits">云南省2018年1-8月旅游行业关键指标
            <Tooltip content="云南全省旅游行业运行关键指标，数据来源：省旅游行业快报" placement="right" max-width="200">
                <Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline"/>
            </Tooltip>
        </div>
        <div class="quota_bg">
            <card>
                <Row>
                    <Col span="8">
                    <div class="lyrd_index_count_content lyrd_index_count_content_line">
                        <div class="icon-qsly-jdrs"></div>
                        <div class="lyrd_index_count_num">
                            <div>
                                <span class="lyrd_index_today_visit">全省旅游接待人数</span>
                            </div>
                            <div>
                                <span class="lyrd_index_today_num">47,187</span>
                                <span class="lyrd_index_today_dw">万人次</span>
                            </div>
                        </div>
                    </div>
                    </Col>
                    <Col span="8">
                    <div class="lyrd_index_count_content lyrd_index_count_content_line">
                        <div class="icon-gnly-jdrs"></div>
                        <div class="lyrd_index_count_num">
                            <div>
                                <span class="lyrd_index_today_visit">国内旅游接待人数</span>
                            </div>
                            <div>
                                <span class="lyrd_index_today_num">46,701</span>
                                <span class="lyrd_index_today_dw">万人次</span>
                            </div>
                        </div>
                    </div>
                    </Col>
                    <Col span="8">
                    <div class="lyrd_index_count_content">
                        <div class="icon-hwly-jdrs"></div>
                        <div class="lyrd_index_count_num">
                            <div>
                                <span class="lyrd_index_today_visit">海外旅游接待人数</span>
                            </div>
                            <div>
                                <span class="lyrd_index_today_num">486</span>
                                <span class="lyrd_index_today_dw">万人次</span>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
            </card>

            <card>
                <Row>
                    <Col span="8">
                    <div class="lyrd_index_count_content lyrd_index_count_content_line">
                        <div class="icon-qsly-yzsr"></div>
                        <div class="lyrd_index_count_num">
                            <div>
                                <span class="lyrd_index_today_visit">全省旅游业总收入</span>
                            </div>
                            <div>
                                <span class="lyrd_index_today_num">59,076,450</span>
                                <span class="lyrd_index_today_dw">万元</span>
                            </div>
                        </div>
                    </div>
                    </Col>
                    <Col span="8">
                    <div class="lyrd_index_count_content lyrd_index_count_content_line">
                        <div class="icon-gnly-sr"></div>
                        <div class="lyrd_index_count_num">
                            <div>
                                <span class="lyrd_index_today_visit">国内旅游收入</span>
                            </div>
                            <div>
                                <span class="lyrd_index_today_num">57,307,819</span>
                                <span class="lyrd_index_today_dw">万元</span>
                            </div>
                        </div>
                    </div>
                    </Col>
                    <Col span="8">
                    <div class="lyrd_index_count_content">
                        <div class="icon-lywh-sr"></div>
                        <div class="lyrd_index_count_num">
                            <div>
                                <span class="lyrd_index_today_visit">旅游外汇收入</span>
                            </div>
                            <div>
                                <span class="lyrd_index_today_num">1,525,282</span>
                                <span class="lyrd_index_today_dw">万元</span>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
            </card>


            <card>
                <div class="lyrd_index_search">
                    <div class="lyrd_index_search_left">
                        <span class="lyrd_index_search_title">旅客客流旅客客流</span>
                    </div>
                </div>
                <Row :gutter="20">
                    <Col span="12">
                    <div class="borderBlock">
                        <tourNum></tourNum>
                    </div>
                    </Col>
                    <Col span="12">
                    <div class="borderBlock">
                        <tourEnter></tourEnter>
                    </div>
                    </Col>
                </Row>
                <br>
                <Row :gutter="20">
                    <Col span="12">
                    <div class="borderBlock">
                        <tourOverseas></tourOverseas> 
                    </div>
                    </Col>
                    <Col span="12">
                    <div class="borderBlock">
                        <tourProp></tourProp>
                    </div>
                    </Col>
                </Row>
            </card>
            <card>
                <div class="lyrd_index_search">
                    <div class="lyrd_index_search_left">
                        <span class="lyrd_index_search_title">旅游收入</span>
                    </div>
                </div>
                <Row :gutter="20">
                    <Col span="12">
                    <div class="borderBlock">
                        <tourIncomeTotal></tourIncomeTotal>
                    </div>
                    </Col>
                    <Col span="12">
                    <div class="borderBlock">
                        <tourIncomeOversea></tourIncomeOversea>
                    </div>
                    </Col>
                </Row>
                <br>
                <Row :gutter="20">
                    <Col span="12">
                    <div class="borderBlock">
                        <tourIncomeNight></tourIncomeNight>
                    </div>
                    </Col>
                    <Col span="12">
                    <div class="borderBlock">
                        <tourIncomeOne></tourIncomeOne>
                    </div>
                    </Col>
                </Row>
            </card>
        </div>
    </div>
</template>

<script>
// 旅游人次
import tourNum from "./tourNum.vue"
// 旅游人数占比
import tourProp from "./tourProp.vue"
// 旅游收入--国内一日游收入
import tourIncomeTotal from "./tourIncomeTotal.vue"
// 旅游收入--国内过夜旅游收入
import tourIncomeOversea from "./tourIncomeOversea.vue"
import tourIncomeNight from "./tourIncomeNight.vue"
import tourIncomeOne from "./tourIncomeOne.vue"
// 口岸入境一日游
import tourEnter from "./tourEnter.vue"
// 海外游客旅游天数
import tourOverseas from "./tourOverseas.vue"

export default {
    components: {
        tourNum,
        tourProp,
        tourIncomeTotal,
        tourIncomeOversea,
        tourIncomeNight,
        tourIncomeOne,
        tourEnter,
        tourOverseas
    },
    data() {
        return {
            // 旅游人次下拉框数据
            tourNum: [
                {
                    value: "New York",
                    label: "海外旅游",
                }
            ],

            // 旅游人数占下拉框数据
            tourProoDate: "2018-01",
            tourProp: [
                {
                    value: "New York",
                    label: "海外旅游",
                }
            ],

            // 旅游收入下拉框数据
            tourIncome: [
                {
                    value: "New York",
                    label: "海外旅游",
                }
            ],

            // 口岸入境一日游
            tourEnter: [
                {
                    value: "New York",
                    label: "人数",
                }
            ]
        }
    },
    methods: {
        handleChange() {},
        form1change() {}
    }
}
</script>


<style lang="less" scoped>
// 标题
.tits {
    line-height: 60px;
    font-size: 16px;
    padding-left: 20px;
    font-weight: 600;
    color: #000;
    background: #fff;
    border-bottom: 1px solid #e2e4e6;
}

// 灰色背景
.quota_bg {
    padding: 20px;
    background: rgb(242, 242, 242);
    min-height: calc(100% - 60px - 1px);
}

.lyrd_index_count_content {
    display: flex;
    justify-content: flex-start;
    margin: 10px 0 5px 25px;
    padding: 10px 0 10px 0;
}

.lyrd_index_count_bg1 {
    width: 70px;
    height: 70px;
    border-radius: 100%;
    background: #f2f2f2;
    background-image: url(../../../assets/imgs/index_today.png);
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 20px;
}

.lyrd_index_today_visit {
    font-size: 16px;
    color: #272727;
    font-weight: 600;
}

.lyrd_index_today_num {
    font-size: 32px;
    font-weight: 600;
    color: #000;
}

.lyrd_index_count_content_line {
    border-right: 1px solid #dcdee2;
}

.ivu-card {
    margin-top: 20px;
}

.lyrd_index_search {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    // line-height: 70px;
}

.lyrd_index_search_title {
    font-size: 14px;
    font-weight: 700;
    padding-right: 8px;
    color: #000;
    vertical-align: middle;
    vertical-align: -webkit-baseline-middle;
}

.borderBlock {
    padding: 10px;
    border: 1px solid #dcdee2;
}

// 图标
.icon-gnly-sr {
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background: #f2f2f2;
  background-image: url(../../../assets/imgs/gnly_sr.png);
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 20px;
}

.icon-qsly-jdrs {
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background: #f2f2f2;
  background-image: url(../../../assets/imgs/qsly_jdrs.png);
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 20px;
}

.icon-qsly-yzsr {
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background: #f2f2f2;
  background-image: url(../../../assets/imgs/qsly_yzsr.png);
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 20px;
}

.icon-hwly-jdrs {
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background: #f2f2f2;
  background-image: url(../../../assets/imgs/hwly_jdrs.png);
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 20px;
}

.icon-lywh-sr {
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background: #f2f2f2;
  background-image: url(../../../assets/imgs/lywh_sr.png);
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 20px;
}

.icon-gnly-jdrs {
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background: #f2f2f2;
  background-image: url(../../../assets/imgs/gnly_jdrs.png);
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 20px;
}
</style>

