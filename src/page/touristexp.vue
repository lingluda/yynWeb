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
          <RadioGroup type="button">
            <Radio label="all">全部</Radio>
            <Radio label="default">飞机</Radio>
          </RadioGroup>
          <DatePicker type="date" placeholder="自选时间" style="width: 120px"></DatePicker>
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
    <card class="card_margin">
      <div style="margin-bottom: 20px;">
        <span style="font-weight: bold;color: #000000">投诉时长分析</span>

          <DatePicker v-model="picDate3" type="date" placeholder="Select date" style="width: 200px;float: right"></DatePicker>
      </div>
      <Row :gutter="16">
        <Col span="12" style="height: 250px;">
          <Row style="border:1px solid #dcdee2;height: 100%;">
            <div style="height: 80px; padding: 20px;">
            <Col span="4" style="">
              <img src="../assets/imgs/exp4.png"/>
            </Col>
            <Col span="18">
              <div>
                <span style="font-weight: bold;color: #000000">日新增投诉量</span>

              </div>
              <span style="font-size: 28px">{{add}}</span><span>个(新关闭{{close}}，未关闭{{unclose}})</span>
            </Col>

          </div>
            <div style="height: 80px; padding: 20px;">
              <div style="border-bottom: 1px solid #dcdee2">
            <Col span="6" style="margin-top: 20px">
              <img src="../assets/imgs/exp5.png"/>
            </Col>
            <Col span="18" style="margin-top: 20px">
              <div>
                <span style="font-weight: bold;color: #000000">日新增投诉量</span>

              </div>
              <span style="font-size: 28px">{{add}}</span><span>个(新关闭{{close}}，未关闭{{unclose}})</span>
            </Col>
              </div>
          </div>
          </Row>
        </Col>
        <Col span="12" style="height: 200px;">
          <div style="border:1px solid #dcdee2;height: 100%"></div>
        </Col>
      </Row>
    </card>
    <card class="card_margin">
      <div style="margin-bottom: 20px;">
        <span style="font-weight: bold;color: #000000">热门路线TOP10</span>

        <DatePicker v-model="picDate3" type="date" placeholder="Select date" style="width: 200px;float: right"></DatePicker>
      </div>
      <div id="process" style="height: 400px;border: 1px solid #dcdee2;"></div>
    </card>
    <card>
      <div style="margin-bottom: 20px;">
        <span style="font-weight: bold;color: #000000">热门路线TOP10</span>

        <DatePicker v-model="picDate3" type="date" placeholder="Select date" style="width: 200px;float: right"></DatePicker>
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
      add: "",
      link: "",
      ratio: "",
      close: "",
      unclose: "",
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
      http
        .get("bi/get_complaint_by_date", { date: "2018-08-03" })
        .then(resp => {
          console.log("游客体验：：", resp.data.hits);
          this.add = resp.data.hits.total;
          this.close = resp.data.hits.closed;
          this.unclose = resp.data.hits.unclosed;
          this.link = resp.data.hits.link;
          this.ratio = resp.data.hits.ratio;
          this.timeX.push(parseInt(resp.data.hits.avg_proc));
          this.timeX.push(parseInt(resp.data.hits.max_proc));
          this.timeX.push(parseInt(resp.data.hits.min_proc));
          this.initComplain();
          for (var i = 0; i < resp.data.hits.proc_stat.length; i++) {
            this.procX1.push(parseInt(resp.data.hits.proc_stat[i].avg));
            this.procX2.push(parseInt(resp.data.hits.proc_stat[i].max));
            this.procX3.push(parseInt(resp.data.hits.proc_stat[i].min));
            this.procY1.push(resp.data.hits.proc_stat[i].name);
          }
          this.initProcess();
        });
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
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      });
    }
  }
};
</script>
