<template>
    <div style="height:100%;">
        <div class="tits">昆明市关键指标</div>
        <div class="quota_bg">
            <Row :gutter="20">
                <Col span="12">
                <card>
                    <div class="lyrd_index_count_content">
                        <div class="icon-jnlj-lyrs"></div>
                        <div class="lyrd_index_count_num">
                            <div>
                                <span class="lyrd_index_today_visit">今年累计旅游人数</span>
                            </div>
                            <div>
                                <span class="lyrd_index_today_num">9994.11</span>
                                <span class="lyrd_index_today_dw">万人次(与上年同比
                                    <span :style={color:color1}><Icon type="md-arrow-up" size="22" />21.18%</span>)
                                </span>
                            </div>
                        </div>
                    </div>
                </card>
                </Col>

                <Col span="12">
                <card>
                    <div class="lyrd_index_count_content">
                        <div class="icon-jnlj-lysr"></div>
                        <div class="lyrd_index_count_num">
                            <div>
                                <span class="lyrd_index_today_visit">今年累计旅游收入</span>
                            </div>
                            <div>
                                <span class="lyrd_index_today_num">14066284.58</span>
                                <span class="lyrd_index_today_dw">万元(与上年同比
                                    <span :style={color:color1}><Icon type="md-arrow-up" size="22" />27.34%</span>)
                                </span>
                            </div>
                        </div>
                    </div>
                </card>
                </Col>
            </Row>
            </card>

            <!-- 旅游人次月报、旅游收入 -->
            <Row :gutter="20">
                <Col span="12">
                <card>
                    <div class="lyrd_index_search">
                        <div class="lyrd_index_search_left">
                            <span class="lyrd_index_search_title">旅游人次月报</span>
                        </div>
                    </div>
                    <cityTourNum></cityTourNum>
                </card>
                </Col>
                <Col span="12">
                <card>
                    <div class="lyrd_index_search">
                        <div class="lyrd_index_search_left">
                            <span class="lyrd_index_search_title">旅游收入</span>
                        </div>
                    </div>
                    <cityTourIncome></cityTourIncome>
                </card>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
// 旅游人次
import cityTourNum from "./cityTourNum.vue"
// 旅游人数占比
import cityTourIncome from "./cityTourIncome.vue"

export default {
    components: {
        cityTourNum,
        cityTourIncome
    },
    data() {
        return {
            color1: "#ff0000",
            color2: "green",
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
    padding: 20px;
    border: 1px solid #dcdee2;
}

// 图标
.icon-jnlj-lyrs {
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background: #f2f2f2;
  background-image: url(../../../assets/imgs/jnlj_lyrs.png);
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 20px;
}

.icon-jnlj-lysr {
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background: #f2f2f2;
  background-image: url(../../../assets/imgs/jnlj_lysr.png);
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 20px;
}
</style>

