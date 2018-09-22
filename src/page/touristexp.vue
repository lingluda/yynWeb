<template>
  <div style="background:#f2f2f2;">
    <div class="tits">游客体验</div>
    <div style="margin:20px;">
    <card>
      <div style="display:flex;justify-content: space-between;">
        <div class="card_title">
          <span style="font-weight: bold;color: #000000">投诉分析</span>
        </div>
        <div>
          <RadioGroup type="button" v-model="picTo" @on-change="picToC">
            <Radio label="1">今日</Radio>
            <Radio label="2">昨日</Radio>
          </RadioGroup>
          <DatePicker type="date" v-model="picdate1" placeholder="自选时间" style="width: 120px"></DatePicker>
          <Select style="width: 120px">
            <Option>全省</Option>
          </Select>
        </div>
      </div>
        <div class="lyrd_index_count">
          <Row>
            <Col span="8">
              <div class="lyrd_index_count_content lyrd_index_count_content_line">
                <div class="lyrd_index_count_bg1"></div>
                <div class="lyrd_index_count_num">
                    <div>
                      <span class="lyrd_index_today_visit">日新增投诉量</span>
                    </div>
                    <div>
                      <span class="lyrd_index_today_num">{{add}}</span>
                      <span class="lyrd_index_today_dw">件</span>
                      <span>(新关闭{{close}}，未关闭{{unclose}})</span>
                    </div>
                </div>
              </div>
            </Col>
            <Col span="8">
              <div class="lyrd_index_count_content lyrd_index_count_content_line">
                <div class="lyrd_index_count_bg2"></div>
                <div class="lyrd_index_count_num">
                    <div>
                      <span class="lyrd_index_today_visit">日新增投诉量同比</span>

                    </div>
                    <div>
                      <span class="lyrd_index_today_num">{{link}}</span>
                      <span class="lyrd_index_today_dw">(上升百分比)</span>
                    </div>
                </div>
              </div>
            </Col>
            <Col span="8">
              <div class="lyrd_index_count_content">
                <div class="lyrd_index_count_bg3"></div>
                <div class="lyrd_index_count_num">
                    <div>
                      <span class="lyrd_index_today_visit">日新增投诉量环比</span>
                    </div>
                    <div>
                      <span class="lyrd_index_today_num">{{ratio}}</span>
                      <span class="lyrd_index_today_dw">(下降百分比)</span>
                    </div>
                </div>
              </div>
            </Col>
        </Row>
      </div>
    </card>

      <card style="margin-top: 20px">
        <div style="display:flex;justify-content: space-between;">
          <div class="card_title">
            <span style="font-weight: bold;color: #000000">投诉时长分析</span>
          </div>
          <div>
            <RadioGroup type="button" >
              <Radio label="default" style="border-radius: 0px">近7天</Radio>
            </RadioGroup>
            <DatePicker type="month" v-model="picdate2" placeholder="自选时间" style="width: 120px"></DatePicker>
          </div>
        </div>
        <div style="height:300px">
          <Row :gutter="16" style="padding: 0 30px 0 8px;display:flex;height:100%">
            <Col span="10" style="border: 1px solid #dcdee2;margin-right:20px;height:100%;padding:0 30px">
              <div style="padding:20px 0;height:50%;border-bottom:1px solid #dcdee2">
                <div style="margin-top:40px;display:flex">
                  <img src="../assets/imgs/exp5.png" style="margin-right:20px;width:60px;height:60px"/>
                  <div>
                    <div style="color:#000;font-size:16px">平台累计已处理投诉量</div>
                    <div style="color:#006eff"><span style="font-size: 32px;font-weight:600">{{close1}}</span>件</div>
                  </div>
                </div>
              </div>
              <div style="padding:20px 0;height:50%;">
                <div style="margin-top:25px;display:flex">
                  <img src="../assets/imgs/exp4.png" style="margin-right:20px;width:60px;height:60px"/>
                  <div>
                    <div style="color:#000;font-size:16px">平台累计未处理投诉量</div>
                    <div style="color:#006eff"><span style="font-size: 32px;font-weight:600">{{unclose1}}</span>件</div>
                  </div>
                </div>
              </div>
            </Col>
            <Col span="14" style="border: 1px solid #dcdee2;height:100%">
              <div style="padding-bottom: 20px;padding: 20px">
                <span style="font-weight: bold;color: #000000">已关闭投诉处理时长</span>
              </div>
              <div id="closeComplaint" style="height:400px;width:100%"></div>
            </Col>
          </Row>
        </div>
        <!-- 关闭投诉各阶段处理时长 -->
          <div style="border:1px solid #dcdee2;margin-top:30px;height:400px">
              <div id="closeComplaint2" style="height:400px;width:100%"></div>
          </div>
      </card>
    <card class="card_margin">
      <div style="margin-bottom: 20px;">
        <span style="font-weight: bold;color: #000000">月投诉量趋势分析</span>
        <DatePicker v-model="picdate3" type="daterange" placeholder="Select date" style="width: 200px;float: right"></DatePicker>
      </div>
      <div id="myline" style="height: 400px;border: 1px solid #dcdee2;"></div>
    </card>
    </div>
  </div>
</template>
<style lang="less" scoped>
.tits {
  line-height: 60px;
  font-size: 16px;
  padding-left: 20px;
  font-weight: 600;
  color: #000;
  background: #fff;
  border-bottom: 1px solid #e2e4e6;
}
.card_title {
  line-height: 30px;
  height: 40px;
  font-size: 15px;
}
.card_margin {
  margin-top: 20px;
}
.lyrd_index_count {
  margin: 10px 0;
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
  background-image: url(../assets/imgs/exp1.png);
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 20px;
}
.lyrd_index_count_bg2 {
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background: #f2f2f2;
  background-image: url(../assets/imgs/exp2.png);
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 20px;
}
.lyrd_index_count_bg3 {
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background: #f2f2f2;
  background-image: url(../assets/imgs/exp3.png);
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
</style>

<script>
import http from "@/http.js";
export default {
  data() {
    return {
      picTo:'1',
      picdate1:'',
      picdate2:'2018-08-03',
      picdate3:'2018-08-03',
      add: "",
      link: "",
      ratio: "",
      close: "",
      unclose: "",
      close1: "",
      unclose1: "",
      timeX: [],
      timeY: [],
      procX1: [],
      procX2: [],
      procX3: [],
      procY1: [],
      procY2: []
    };
  },
  mounted() {
    this.init();
    this.initLine();

  },
  methods: {
    init() {
      this.picdate1 = http.getToday()
    },
    initComplain() {
      let complain = this.$echarts.init(document.getElementById("complain"));
      complain.setOption({
        color: ["#006EFF", "#29CC85", "#ffbb00"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: ["平均时长", "最大时长", "最小时长"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: this.timeX,
            type: "bar",
            barWidth: "50%"
          }
        ]
      });
    },
    initProcess() {
      let process = this.$echarts.init(document.getElementById("process"));
      process.setOption({
        color: ["#006EFF", "#29CC85", "#ffbb00"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        legend: {
          icon: "circle",
          data: ["平均时长", "最大时长", "最小时长"]
        },
        xAxis: {
          type: "category",
          data: this.procY1
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: this.procX1,
            name: "平均时长",
            type: "bar"
          },
          {
            data: this.procX2,
            name: "最大时长",
            type: "bar"
          },
          {
            data: this.procX3,
            name: "最小时长",
            type: "bar"
          }
        ]
      });
    },
    initLine() {
      let myline = this.$echarts.init(document.getElementById("myline"));
      myline.setOption({
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        grid: {
          top: 50,
          width: "98%",
          bottom: "10%",
          left: 10,
          containLabel: true
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      });
    },
    closeComplaint() {
      let complaint = this.$echarts.init(
        document.getElementById("closeComplaint")
      );
      let complaint2 = this.$echarts.init(
        document.getElementById("closeComplaint2")
      );
      var option = {
        tooltip: {},
        title: {
          text: "单位(小时)",
          textStyle: {
            fontSize: 14
          },
          x: "15",
          y: "15"
        },
        grid: {
          top: 50,
          width: "80%",
          bottom: "45%",
          left: 10,
          containLabel: true
        },
        xAxis: {
          type: "value",
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: "category",
          data: ['最小时长','最大时长','平均时长'],
          splitLine: {
            show: false
          }
        },
        series: {
          type: "bar",
          stack: "chart",
          z: 3,
          label: {
            normal: {
              position: "right",
              show: true
            }
          },
          data:this.timeX,
          itemStyle: {
            normal: {
              color: function(params) {
                var colorList = ["#ffbb00", "#29cc85", "#006EFF"];
                return colorList[params.dataIndex];
              }
            }
          }
        }
      };
      complaint.setOption(option);
      var option2 = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        legend: {
          data: ["平均时长", "最大时长", "最小时长"],
          bottom: 10,
          icon: "circle",
          itemWidth: 10,
          itemHeight: 12
        },
        grid: {
          top: '15%',
          width: "95%",
          bottom: "10%",
          left: 30,
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: this.procY1,
            axisPointer: {
              type: "shadow"
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "单位(小时)"
          }
        ],
        series: [
          {
            name: "平均时长",
            type: "bar",
            data: this.procX1,
            label: {
              normal: {
                position: "top",
                show: true
              }
            },
            barWidth: "15%",
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = ["#006EFF", "#006EFF", "#006EFF"];
                  return colorList[params.dataIndex];
                }
              }
            }
          },
          {
            name: "最大时长",
            type: "bar",
            data: this.procX2,
            label: {
              normal: {
                position: "top",
                show: true
              }
            },
            barWidth: "15%",
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = ["#29cc85", "#29cc85", "#29cc85"];
                  return colorList[params.dataIndex];
                }
              }
            }
          },
          {
            name: "最小时长",
            type: "bar",
            data: this.procX3,
            label: {
              normal: {
                position: "top",
                show: true
              }
            },
            barWidth: "15%",
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = ["#ffbb00", "#ffbb00", "#ffbb00"];
                  return colorList[params.dataIndex];
                }
              }
            }
          }
        ]
      };
      complaint2.setOption(option2);
    },
    pic1(){
      http
        .get("bi/get_complaint_by_date", { date: http.gmt2str(this.picdate1) })
        .then(resp => {
          this.add = resp.data.hits.total;
          this.close = resp.data.hits.closed;
          this.unclose = resp.data.hits.unclosed;
          this.link = resp.data.hits.link;
          this.ratio = resp.data.hits.ratio;
        });
    },
    pic2(){
      this.procX1=[];
      this.procX2=[];
      this.procX3=[];
      this.procY1=[];
      this.timeX=[];
      http
        .get("bi/get_complaint_by_mon", { date: http.gmt2strm(this.picdate2) })
        .then(resp => {
          console.log("游客体验：：", resp.data.hits);
          this.close1=resp.data.hits.closed;
          this.unclose1=resp.data.hits.unclosed;
          this.timeX.push(parseInt(resp.data.hits.avg_proc));
          this.timeX.push(parseInt(resp.data.hits.max_proc));
          this.timeX.push(parseInt(resp.data.hits.min_proc));

          for (var i = 0; i < resp.data.hits.proc_stat.length; i++) {
            this.procX1.push(parseInt(resp.data.hits.proc_stat[i].avg));
            this.procX2.push(parseInt(resp.data.hits.proc_stat[i].max));
            this.procX3.push(parseInt(resp.data.hits.proc_stat[i].min));
            this.procY1.push(resp.data.hits.proc_stat[i].name);
          }
          console.log(this.procX1)
          console.log(this.procX2)
          console.log(this.procX3)
          console.log(this.procY1)
          this.closeComplaint();
        });
    },
    pic3(){
      http
        .get("bi/get_complaint_trend_by_monspan", { date: "2018-08-03" })
        .then(resp => {
          console.log("游客体验：：", resp.data.hits);

        });
    },
    picToC(va22){
      if (va22==1){
        this.picdate1 = http.getToday()
      }
      if (va22==2){
        this.picdate1 = http.getYesterDay()
      }
    }
  },
  watch:{
    picdate1:'pic1',
    picdate2:'pic2',
    picdate3:'pic3',
  }
};
</script>
