<template>
  <div>
    <div class="ti">
     <span >旅游热度</span>
    </div>
    <Tabs value="index" @on-click="click">
      <TabPane label="首页" name="index" class="lyrd_sy_content">
          <div class="lyrd_sy_ykrs">
              <div class="lyrd_index_search">
                <div class="lyrd_index_search_left">
                  <span class="lyrd_index_search_title">游客人数</span><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
                </div>
                <div class="lyrd_index_search_right">
                  <RadioGroup v-model="dateChoice" type="button">
                      <Radio label="today">今日</Radio>
                      <Radio label="yesterday">昨日</Radio>
                  </RadioGroup>
                  <DatePicker :value="value1" format="yyyy-MM-dd" type="date" placeholder="请选择日期" style="width:150px"></DatePicker>
                  <Select v-model="model1" style="width:200px;margin-left:15px">
                      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                </div>
              </div>
              <div class="lyrd_index_count">
                 <Row>
                    <Col span="10">
                      <div class="lyrd_index_count_content lyrd_index_count_content_line">
                        <div class="lyrd_index_count_bg1"></div>
                        <div class="lyrd_index_count_num">
                            <div>
                              <span class="lyrd_index_today_visit">今日总接待游客量</span>
                              <Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
                            </div>
                            <div>
                              <span class="lyrd_index_today_num">210760</span>
                              <span class="lyrd_index_today_dw">人次</span>
                            </div>
                        </div>
                      </div>
                    </Col>
                    <Col span="7">
                      <div class="lyrd_index_count_content lyrd_index_count_content_line">
                        <div class="lyrd_index_count_bg2"></div>
                        <div class="lyrd_index_count_num">
                            <div>
                              <span class="lyrd_index_today_visit">与昨日环比</span>
                              <Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
                            </div>
                            <div>
                              <span class="lyrd_index_today_num">6.2</span>
                              <span class="lyrd_index_today_dw">%</span>
                            </div>
                        </div>
                      </div>
                    </Col>
                    <Col span="7">
                      <div class="lyrd_index_count_content">
                        <div class="lyrd_index_count_bg3"></div>
                        <div class="lyrd_index_count_num">
                            <div>
                              <span class="lyrd_index_today_visit">与上月同比</span>
                              <Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
                            </div>
                            <div>
                              <span class="lyrd_index_today_num">0.9</span>
                              <span class="lyrd_index_today_dw">%</span>
                            </div>
                        </div>
                      </div>
                    </Col>
                </Row>
              </div>

              <div class="lyrd_index_jryk">
                <div class="lyrd_index_jryk_title">
                  <span class="lyrd_index_search_title">今日游客各州市所占比例</span><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
                </div>
                <div>
                  <div id="mybar" style="height:200px;min-width: 400px;"></div>
                  <!-- <div>ssssss</div> -->
                </div>
              </div>
          </div>
          <!-- 客流统计开始 -->
            <div class="lyrd_index_kltj">
               <div class="lyrd_index_search">
                  <div class="lyrd_index_search_left">
                    <span class="lyrd_index_search_title">客流统计</span><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
                  </div>
                  <div class="lyrd_index_search_right">
                    <RadioGroup v-model="dateChoice" type="button">
                        <Radio label="today">最近7天</Radio>
                        <Radio label="yesterday">最近30天</Radio>
                    </RadioGroup>
                    <DatePicker :value="value1" format="yyyy-MM-dd" type="daterange" placeholder="请选择日期" style="width:200px"></DatePicker>
                    <Select v-model="model1" style="width:200px;margin-left:15px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                  </div>
              </div>
              <div class="lyrd_index_kltj_chart">
                  <div class="lyrd_index_kltj_chart_left">
                      <div class="lyrd_index_kltj_chart_bg"></div>
                      <div class="lyrd_index_kltj_chart_num">
                         <div>
                            <span class="lyrd_index_today_visit">累积游客接待量</span>
                            <Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
                          </div>
                          <div>
                            <span class="lyrd_index_today_num">230012</span>
                            <span class="lyrd_index_today_dw">人次</span>
                          </div>
                      </div>

                  </div>
                  <div class="lyrd_index_kltj_chart_right">
                      <div id="table1" style="height:300px;min-width: 400px;"></div>
                  </div>
              </div>
            </div>
            <!-- 客流统计结束 -->
      </TabPane  >
      <TabPane label="热度排行" name="destination" >
      </TabPane>
      <TabPane label="景区客流热力" name="hotmap">
      </TabPane>
      <TabPane label="平台运营" name="platform">
      </TabPane>
    </Tabs>
  </div>
</template>


<style lang="less" scoped>
.ti {
  color: #000;
  font-size: 16px;
  font-weight: 700;
  line-height: 52px;
  padding-left: 20px;
  height: 45px;
}
.tis {
  margin-bottom: 20px;
  color: #000;
  font-size: 14px;
  font-weight: 700;
}
.lyrd_sy_content {
  background: #f2f2f2;
  padding: 16px 20px;
}
.lyrd_sy_ykrs {
  width: 100%;
  background: #fff;
  padding-bottom: 1px;
}
.lyrd_index_search {
  display: flex;
  justify-content: space-between;
  line-height: 70px;
  padding: 0 20px;
}
.lyrd_index_search_title {
  font-size: 14px;
  font-weight: 700;
  padding-right: 8px;
  color: #000;
}
.lyrd_index_count {
  margin: 0 20px;
  height: 172px;
  border: 1px solid #dcdee2;
}
.lyrd_index_count_content {
  display: flex;
  justify-content: flex-start;
  margin: 40px 0 40px 25px;
  padding: 10px 0 10px 0;
}
.lyrd_index_count_content_line {
  border-right: 1px solid #dcdee2;
}
.lyrd_index_count_bg1 {
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background: #f2f2f2;
  background-image: url(../../assets/imgs/index_today.png);
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 20px;
}
.lyrd_index_count_bg2 {
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background: #f2f2f2;
  background-image: url(../../assets/imgs/index_yeaster.png);
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 20px;
}
.lyrd_index_count_bg3 {
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background: #f2f2f2;
  background-image: url(../../assets/imgs/index_tb.png);
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 20px;
}
.lyrd_index_today_num {
  font-size: 32px;
  font-weight: 600;
  color: #006eff;
}
.lyrd_index_today_dw {
  color: #006eff;
  font-size: 16px;
}
.lyrd_index_today_visit {
  font-size: 16px;
  color: #272727;
  font-weight: 600;
}
.lyrd_index_jryk {
  margin: 25px 20px;
  border: 1px solid #dcdee2;
  height: 300px;
}
.lyrd_index_jryk_title {
  line-height: 60px;
  font-size: 14px;
  font-weight: 700;
  padding-right: 8px;
  color: #000;
  margin-left: 20px;
}
.lyrd_index_kltj {
  background: #fff;
  margin-top: 25px;
}
.lyrd_index_kltj_chart {
  padding: 0 20px;
  height: 280px;
  width: 100%;
  display: flex;
}
.lyrd_index_kltj_chart_left {
  width: 35%;
  margin-right: 25px;
  border: 1px solid #dcdee2;
  display: flex;
  align-items: center;
  padding-left: 25px;
}
.lyrd_index_kltj_chart_right {
  width: 65%;
  border: 1px solid #dcdee2;
}
.lyrd_index_kltj_chart_bg {
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background: #f2f2f2;
  background-image: url(../../assets/imgs/index_jdzl.png);
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 20px;
}
</style>
<script>
import http from "@/http.js";
import "../../dateFormate.js";
import city from "@/components/select/city.vue";
export default {
  comments: {
    city_select: city
  },
  data() {
    return {
      model1: "",
      value1: "",
      dateChoice: "today",
      cityList: [
        {
          value: "New York",
          label: "New York"
        },
        {
          value: "London",
          label: "London"
        },
        {
          value: "Sydney",
          label: "Sydney"
        },
        {
          value: "Ottawa",
          label: "Ottawa"
        },
        {
          value: "Paris",
          label: "Paris"
        },
        {
          value: "Canberra",
          label: "Canberra"
        }
      ]
    };
  },
  mounted() {
    this.chartLine();
    this.initBar();
  },
  methods: {
    click(val) {
      this.$router.push(val);
    },
    initBar() {
      var mybar = this.$echarts.init(document.getElementById("mybar"));
      var opt = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
          x:'right'
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
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
            label: {
              show: false
            },
            labelLine: {
              normal: {
                show: false
              }
            }
          }
        ]
      };

      mybar.setOption(opt);
    },
    chartLine() {
      var myChart = this.$echarts.init(document.getElementById("table1"));
      var option = {
        title: {
          text: "客流趋势分析"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: []
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: "{value}"
            }
          }
        ],
        series: [
          {
            name: "最高气温",
            type: "line",
            data: [11, 11, 15, 13, 12, 13, 10]
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>


