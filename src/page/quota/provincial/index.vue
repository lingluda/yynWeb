<template>
    <div style="height:100%;">
        <div class="tits">云南省关键指标</div>
        <div class="quota_bg">
            <card>
                <Row>
                    <Col span="10">
                    <div class="lyrd_index_count_content lyrd_index_count_content_line">
                        <div class="lyrd_index_count_bg1"></div>
                        <div class="lyrd_index_count_num">
                            <div>
                                <span class="lyrd_index_today_visit">日总接待游客量</span>
                            </div>
                            <div>
                                <span class="lyrd_index_today_num">1000,00</span>
                                <span class="lyrd_index_today_dw">万人次</span>
                            </div>
                        </div>
                    </div>
                    </Col>
                    <Col span="7">
                    <div class="lyrd_index_count_content lyrd_index_count_content_line">
                        <div class="lyrd_index_count_bg1"></div>
                        <div class="lyrd_index_count_num">
                            <div>
                                <span class="lyrd_index_today_visit">日总接待游客量</span>
                            </div>
                            <div>
                                <span class="lyrd_index_today_num">1000,00</span>
                                <span class="lyrd_index_today_dw">万人次</span>
                            </div>
                        </div>
                    </div>
                    </Col>
                    <Col span="7">
                    <div class="lyrd_index_count_content">
                        <div class="lyrd_index_count_bg1"></div>
                        <div class="lyrd_index_count_num">
                            <div>
                                <span class="lyrd_index_today_visit">日总接待游客量</span>
                            </div>
                            <div>
                                <span class="lyrd_index_today_num">1000,00</span>
                                <span class="lyrd_index_today_dw">万人次</span>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
            </card>

            <card>
                <Row>
                    <Col span="10">
                    <div class="lyrd_index_count_content lyrd_index_count_content_line">
                        <div class="lyrd_index_count_bg1"></div>
                        <div class="lyrd_index_count_num">
                            <div>
                                <span class="lyrd_index_today_visit">日总接待游客量</span>
                            </div>
                            <div>
                                <span class="lyrd_index_today_num">1000,00</span>
                                <span class="lyrd_index_today_dw">万元</span>
                            </div>
                        </div>
                    </div>
                    </Col>
                    <Col span="7">
                    <div class="lyrd_index_count_content lyrd_index_count_content_line">
                        <div class="lyrd_index_count_bg1"></div>
                        <div class="lyrd_index_count_num">
                            <div>
                                <span class="lyrd_index_today_visit">日总接待游客量</span>
                            </div>
                            <div>
                                <span class="lyrd_index_today_num">1000,00</span>
                                <span class="lyrd_index_today_dw">万元</span>
                            </div>
                        </div>
                    </div>
                    </Col>
                    <Col span="7">
                    <div class="lyrd_index_count_content">
                        <div class="lyrd_index_count_bg1"></div>
                        <div class="lyrd_index_count_num">
                            <div>
                                <span class="lyrd_index_today_visit">日总接待游客量</span>
                            </div>
                            <div>
                                <span class="lyrd_index_today_num">1000,00</span>
                                <span class="lyrd_index_today_dw">万元</span>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
            </card>

            
            <Row :gutter="20">
                <!-- 旅游人次 -->
                <Col span="12">
                <card>
                    <div class="lyrd_index_search">
                        <div class="lyrd_index_search_left">
                            <span class="lyrd_index_search_title">旅游人次</span>
                        </div>
                        <div class="lyrd_index_search_right">
                            <Select style="width:120px;margin-left:15px" @on-change="form1change">
                                <Option v-for="item in selData" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>
                    </div>
                    <tourNum></tourNum>
                </card>
                </Col>
                <!-- 旅游人数占比 -->
                <Col span="12">
                <card>
                    <div class="lyrd_index_search">
                        <div class="lyrd_index_search_left">
                            <span class="lyrd_index_search_title">旅游人数占比</span>
                        </div>
                        <div class="lyrd_index_search_right">
                            <DatePicker v-model="tourProDate" format="yyyy-MM-dd" type="date" placeholder="请选择日期" style="width:120px" @on-change="handleChange"></DatePicker>
                            <Select style="width:120px;margin-left:15px" @on-change="form1change">
                                <Option v-for="item in tourPro" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>
                    </div>
                    <tourProp></tourProp>
                </card>
                </Col>
            </Row>

            <!-- 旅游收入 -->
            <card>
                <div class="lyrd_index_search">
                    <div class="lyrd_index_search_left">
                        <span class="lyrd_index_search_title">旅游收入</span>
                    </div>
                    <div class="lyrd_index_search_right">
                        <Select style="width:120px;margin-left:15px" @on-change="form1change">
                            <Option v-for="item in tourIncome" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </div>
                </div>
                <Row :gutter="20">
                    <Col span="12">
                    <div class="borderBlock">
                        <tourIncomeA></tourIncomeA>
                    </div>
                    </Col>
                    <Col span="12">
                    <div class="borderBlock">
                        <tourIncomeB></tourIncomeB>
                    </div>
                    </Col>
                </Row>
            </card>

            <!-- 口岸入境一日游、海外游客旅游天数 -->
            <Row :gutter="20">
                <Col span="12">
                <card>
                    <div class="lyrd_index_search">
                        <div class="lyrd_index_search_left">
                            <span class="lyrd_index_search_title">口岸入境一日游</span>
                        </div>
                        <div class="lyrd_index_search_right">
                            <Select style="width:120px;margin-left:15px" @on-change="form1change">
                                <Option v-for="item in tourEnter" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>
                    </div>
                    <tourEnter></tourEnter>
                </card>
                </Col>
                <Col span="12">
                <card>
                    <div class="lyrd_index_search">
                        <div class="lyrd_index_search_left">
                            <span class="lyrd_index_search_title">海外游客旅游天数</span>
                        </div>
                    </div>
                    <tourOverseas></tourOverseas>
                </card>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
// 旅游人次
import tourNum from "./tourNum.vue"
// 旅游人数占比
import tourProp from "./tourProp.vue"
// 旅游收入--国内一日游收入
import tourIncomeA from "./tourIncomeA.vue"
// 旅游收入--国内过夜旅游收入
import tourIncomeB from "./tourIncomeB.vue"
// 口岸入境一日游
import tourEnter from "./tourEnter.vue"
// 海外游客旅游天数
import tourOverseas from "./tourOverseas.vue"

export default {
    components: {
        tourNum,
        tourProp,
        tourIncomeA,
        tourIncomeB,
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
                    label: "海外旅游",x
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
    height: calc(100% - 60px - 1px);
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
    padding: 20px;
    border: 1px solid #dcdee2;
}
</style>

