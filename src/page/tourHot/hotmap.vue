<template>
  <div>
    <div class="tit">旅游热度</div>
    <div>
    <Tabs value="hotmap" @on-click="pic">
      <TabPane label="首页" name="index"></TabPane>
      <TabPane label="热门排行" name="destination"></TabPane>
      <TabPane label="景区客流热力" name="hotmap" class="tabpane_content">
        <card>
          <div style="margin-bottom: 20px">
            <div class="tabpane_content_title">
              <div>
                <span style="font-weight: bold;color: #000000">景区客流热力分布图</span>
                <Tooltip content="景区客流热力分布图" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" /></Tooltip>
              </div>
            </div>
          <Select style="width: 150px">
            <Option value="城市">城市</Option>
          </Select>
          <Select style="width: 150px">
            <Option value="城市">城市</Option>
          </Select>
            <DatePicker type="date" placeholder="自选时间" style="width: 150px"></DatePicker>
          <Select style="width: 150px">
            <Option value="城市">城市</Option>
          </Select>
            <Select style="width: 150px">
              <Option value="刻度">刻度</Option>
            </Select>
          </div>
          <div id="hotmap" style="width: 100%;height: 400px;" class="heatmap"></div>
        </card>
        <card class="card_margin">
          <div style="margin-bottom: 20px">
            <div class="tabpane_content_title">
              <div>
                <span style="font-weight: bold;color: #000000">景区接待客流数</span>
                <Tooltip content="景区接待客流数" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" /></Tooltip>
              </div>
              <div>
                 <Select style="width: 150px">
                  <Option value="昆明">昆明</Option>
                </Select>
                 <Select style="width: 150px">
                  <Option value="XXX景区">XXX景区</Option>
                </Select>
              </div>
            </div>
            <div class="hotmap_kljd">
               <Row>
                    <Col span="10">
                      <div>
                        sssssssss
                      </div>
                    </Col>
                    <Col span="7">
                      <div class="hotmap_tb">
                          <div class="lyrd_hotmap_count_bg1"></div>
                          <div class="lyrd_hotmap_num">
                            <div class="lyrd_hotmap_desc">与昨日同比</div>
                            <div>
                              <span class="lyrd_hotmap_today_num">6.2</span>
                              <span class="lyrd_hotmap_today_dw">%</span>
                            </div>
                          </div>
                      </div>
                    </Col>
                    <Col span="7">
                    <div class="hotmap_tb">
                          <div class="lyrd_hotmap_count_bg2"></div>
                          <div class="lyrd_hotmap_num">
                            <div class="lyrd_hotmap_desc">与昨日同比</div>
                            <div>
                              <span class="lyrd_hotmap_today_num">6.2</span>
                              <span class="lyrd_hotmap_today_dw">%</span>
                            </div>
                          </div>
                      </div>
                    </Col>
                </Row>
            </div>
          </div>
        </card>
        <card class="card_margin">
          <div style="margin-bottom: 20px">
            <div class="tabpane_content_title">
              <div>
                <span style="font-weight: bold;color: #000000">区域人数变化趋势</span>
                <Tooltip content="区域人数变化趋势" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" /></Tooltip>
              </div>
            </div>
            <div>
                <Select style="width: 150px">
                  <Option value="昆明">昆明</Option>
                </Select>
                <DatePicker type="daterange" show-week-numbers placement="bottom-end" placeholder="Select date" style="width: 200px;"></DatePicker>
                <Select style="width: 150px">
                  <Option value="粒度60分钟">粒度60分钟</Option>
                </Select>
            </div>
            <div style="margin:15px 154px ;">
              <DatePicker type="daterange" show-week-numbers placement="bottom-end" placeholder="Select date" style="width: 200px;"></DatePicker>
              <Checkbox v-model="single">选择对比日期</Checkbox>
            </div>
            <div class="hotmap_klqs">
               <div id="mybar" style="height:480px;width: 92%;"></div>
            </div>
          </div>
        </card>
      </TabPane>
      <TabPane label="平台运营" name="platform">
      </TabPane>
    </Tabs>
    </div>
  </div>
</template>
<style lang="less" scoped>
.tit {
  color: #000;
  font-size: 16px;
  font-weight: 700;
  line-height: 52px;
  padding-left: 20px;
  height: 45px;
  background: #fff;
}
.tabpane_content {
  padding: 20px;
  background: #f2f2f2;
}
.tabpane_content_title {
  line-height: 32px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
}
.card_margin {
  margin-top: 20px;
}
.lyrd_hotmap_count_bg1 {
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background: #f2f2f2;
  background-image: url(../../assets/imgs/index_yeaster.png);
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 20px;
}
.lyrd_hotmap_count_bg2 {
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background: #f2f2f2;
  background-image: url(../../assets/imgs/index_tb.png);
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 20px;
}
.lyrd_hotmap_today_num {
  font-size: 32px;
  color: #006eff;
  line-height: 55px;
}
.lyrd_hotmap_today_dw {
  color: #006eff;
  font-size: 16px;
  line-height: 55px;
}
.lyrd_hotmap_desc {
  font-size: 14px;
  font-weight: 600;
  color: #000;
  line-height: 25px;
}
.hotmap_tb {
  margin: 55px 0px 55px 40px;
  padding: 10px 0px 0px 25px;
  border-left: 1px solid #dcdee2;
  display: flex;
}
.hotmap_kljd {
  border: 1px solid #dcdee2;
  margin-top: 10px;
  height: 195px;
}
.hotmap_klqs {
  border: 1px solid #dcdee2;
  margin-top: 10px;
  height: 500px;
}
</style>


<script>
import http from "@/http.js";
import AMap from "AMap";
var map;
var heatmap;
var testData;
export default {
  data() {
    return {
      mapData: [],
      single: true
    };
  },
  mounted() {
    // this.initGauge();
    this.init();
    this.initline();
  },
  methods: {
    init() {
      http
        .get("bi/get_scenic_tourist_heat_dist", {
          date: "2018-09-01",
          scenic: "9df331f4-5ef7-497c-7042-ae6c1e12342c",
          min: 60
        })
        .then(resp => {
          console.log("地图：：", resp.data.hits);
          this.initMap(resp.data.hits[0].points);
        });
    },
    initMap: function(x) {
      map = new qq.maps.Map(document.getElementById("hotmap"), {
        zoom: 16,
        center: new qq.maps.LatLng(x[0].lat, x[0].lng)
      });

      //地图异步加载，在idle或者tilesloaded后初始化
      qq.maps.event.addListenerOnce(map, "idle", function() {
        if (QQMapPlugin.isSupportCanvas) {
          heatmap = new QQMapPlugin.HeatmapOverlay(map, {
            //点半径，设置为1即可
            radius: 1,
            //热力图最大透明度
            maxOpacity: 0.8,
            //是否在每一屏都开启重新计算，如果为true则每一屏都会有一个红点
            useLocalExtrema: true,
            //设置大小字段
            valueField: "count"
          });

          testData = {
            max: 100,
            data: x
          };
          //绘制热力图
          heatmap.setData(testData);
        } else {
          alert("您的浏览器不支持canvas，无法绘制热力图！！");
        }
      });
    },

    initGauge() {
      let gauge = this.$echarts.init(document.getElementById("gauge"));
      gauge.setOption({
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
          feature: {
            restore: {},
            saveAsImage: {}
          }
        },
        series: [
          {
            name: "业务指标",
            type: "gauge",
            detail: { formatter: "{value}%" },
            data: [{ value: 50, name: "完成率" }]
          }
        ]
      });
    },
    pic(val) {
      this.$router.push(val);
    },
    initline() {
      var mybar = this.$echarts.init(document.getElementById("mybar"));
      var option = {
        title: {
          text: "人数",
          textStyle: {
            fontSize: 12,
            color: "#999"
          },
          padding: [20, 0, 3, 80]
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "联盟广告"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          }
        ]
      };

      mybar.setOption(option);
    }
  }
};
</script>

