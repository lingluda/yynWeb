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
            <DatePicker type="date" v-model="picdate1" placeholder="自选时间" style="width: 120px"
                        :options="disoptionsdate" @on-change="pic1"></DatePicker>
            <Select style="width: 120px" v-model="p11" @on-change="ppp1">
              <Option v-for="item in cityData" :value="item.id" :key="item.id">{{item.name}}</Option>
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
                    <span class="lyrd_index_today_visit">当日新增投诉量</span>
                  </div>

                  <div v-if="isshow1==1">
                    <span class="lyrd_index_today_num">{{add}}</span>
                    <span class="lyrd_index_today_dw">件</span>
                  </div>
                  <div v-if="isshow1==2" style="margin-top: 20px">暂无历史数据</div>
                </div>
              </div>
            </Col>
            <Col span="8">
              <div class="lyrd_index_count_content lyrd_index_count_content_line">
                <div class="lyrd_index_count_bg2"></div>
                <div class="lyrd_index_count_num">
                  <div>
                    <span class="lyrd_index_today_visit">与昨日环比</span>

                  </div>
                  <div v-if="pred>=0">
                    <span v-if="ratio<0" class="lyrd_index_today_num">{{-ratio}} <span style="color: #006eff;">%</span></span>
                    <span v-if="ratio>=0" class="lyrd_index_today_num">{{ratio}} <span style="color: #006eff;">%</span></span>
                    <span v-if="ratio<0">(<Icon style="color: green" type="md-arrow-down" size="22"/>)</span>
                    <span v-if="ratio>0">(<Icon style="color: #ffbb00" type="md-arrow-up" size="22"/>)</span>
                  </div>
                  <div v-if="pred<0" style="margin-top: 20px">暂无历史数据</div>
                </div>
              </div>
            </Col>
            <Col span="8">
              <div class="lyrd_index_count_content">
                <div class="lyrd_index_count_bg3"></div>
                <div class="lyrd_index_count_num">
                  <div>
                    <span class="lyrd_index_today_visit">与上月同比</span>
                  </div>
                  <div v-if="prem>=0">

                    <span v-if="link<0" class="lyrd_index_today_num">{{-link}} <span style="color: #006eff;">%</span></span>
                    <span v-if="link>=0" class="lyrd_index_today_num">{{link}} <span style="color: #006eff;">%</span></span>
                    <span v-if="link<0">(<Icon style="color: green" type="md-arrow-down" size="22"/>)</span>
                    <span v-if="link>0">(<Icon style="color: #ffbb00" type="md-arrow-up" size="22"/>)</span>
                  </div>
                  <div v-if="prem<0" style="margin-top: 20px">暂无历史数据</div>
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
            <Button label="7" style="border-radius: 0px" @click="change7">近7天</Button>
            <DatePicker type="month" placement="bottom-end" v-model="picdate2" placeholder="自选时间" style="width: 120px"
                        :options="disoptionsdates" @on-change="pic2"></DatePicker>
            <Select style="width: 120px" v-model="p11" @on-change="ppp2">
              <Option v-for="item in cityData" :value="item.id" :key="item.id">{{item.name}}</Option>
            </Select>
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
                    <div style="color:#000;font-size:16px">平台累计处理中投诉量</div>
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
          <span style="font-weight: bold;color: #000000">投诉量趋势分析</span>

          <Select style="width: 120px;float: right" v-model="p11" @on-change="ppp3">
            <Option v-for="item in cityData" :value="item.id" :key="item.id">{{item.name}}</Option>
          </Select>
          <DatePicker v-model="picdate3" placement="bottom-end" format="yyyy-MM-dd" type="daterange" placeholder="自选时间"
                      style="width:220px;float: right" @on-change="_dd2" :options="disoptionsdate"></DatePicker>
          <Button @click="dateChoice11(2)" style="float: right">近30日</Button>

          <Button @click="dateChoice11(1)" style="float: right">近7日</Button>

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
        isshow1:1,
        isshow2:1,
        isshow3:1,
        dateChoice1: '1',
        titleDate: '',
        dd1: http.getToday(),
        dd2: '2018-01',
        showud1: 1,
        showud2: 2,
        color1: '#ffbb00',
        color2: 'green',
        pic7: '',
        cityData: [],
        linex: [],
        liney: [],
        p11: '',
        p12: '',
        p13: '',
        picTo: '1',
        picdate1: http.getYesterDay(),
        picdate2: http.getMonthAgo(),
        picdate3: [http.getWeekAgo(), http.getYesterDay()],
        add: "",
        link: "",
        ratio: "",
        close: "",
        unclose: "",
        close1: "",
        unclose1: "",
        pred: "",
        prem: "",
        timeX: [],
        timeY: [],
        procX1: [],
        procX2: [],
        procX3: [],
        procY1: [],
        procY2: [],
        disoptionsdate: {
          disabledDate(date) {
            return date < new Date(2018, 7, 1) || date > new Date()
          }
        },
        disoptionsdates: {
          disabledDate(date) {
            return date < new Date(2018, 7, 1) || date > new Date(http.get2MonthAgo())
          }
        }
      };
    },
    mounted() {
      this.init();
      //http.post('bi/write_run_log',{obj:'游客体验',msg:window.performance.timing.domInteractive - window.performance.timing.domLoading}).then(resp=>{
      //})
    },
    methods: {
      dateChoice11(val) {
        if (val == 1) {
          this.picdate3 = [http.getWeekAgo(), http.getYesterDay()]
          this._dd2()
        } else {
          this.picdate3 = [http.getMonthAgo(), http.getYesterDay()]
          this._dd2()
        }
      },
      change7() {
        this.picdate2 = ''
        this.procX1 = []
        this.procX2 = []
        this.procX3 = []
        this.procY1 = []
        this.timeX = []
        //this.titleDate = '近7天'
        http.post('bi/get_complaint_by_date', {date: http.getYesterDay(),city_id:this.p11}).then(resp => {
          this.close1 = http.qfw(resp.data.hits.closed);
          this.unclose1 = http.qfw(resp.data.hits.unclosed);
          this.timeX.push(parseInt(resp.data.hits.min_proc * 100) / 100);
          this.timeX.push(parseInt(resp.data.hits.max_proc * 100) / 100);
          this.timeX.push(parseInt(resp.data.hits.avg_proc * 100) / 100);

          for (var i = 0; i < resp.data.hits.proc_stat.length; i++) {
            this.procX1.push(parseInt(resp.data.hits.proc_stat[i].avg * 100) / 100);
            this.procX2.push(parseInt(resp.data.hits.proc_stat[i].max * 100) / 100);
            this.procX3.push(parseInt(resp.data.hits.proc_stat[i].min * 100) / 100);
            this.procY1.push(resp.data.hits.proc_stat[i].name);
          }
          this.closeComplaint();
        })
      },
      init() {
        http.post('bi/get_all_city_prov', {}).then(resp => {
          this.cityData = resp.data.hits;
          this.p11 = resp.data.hits[0].id
          this.p12 = resp.data.hits[0].id
          this.p13 = resp.data.hits[0].id
        })
        this._dd2()
        this.pic2()
        this.pic1()
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
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: "category",
            data: this.linex
          },
          yAxis: {
            name:'单位：件',
            type: "value",
            splitLine: {
              lineStyle: {
                color: "#e5e5e5",
                type: "dotted"
              }
            }
          },
          grid: {
            top: 50,
            width: "95%",
            bottom: "10%",
            left: 30,
            containLabel: true
          },
          color: ['#006EFF', '#29CC85'],
          series: [
            {
              data: this.liney,
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
              fontSize: 12,
              fontWeight: 'unset'
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
            data: ['最小时长', '最大时长', '平均时长'],
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
            data: this.timeX,
            itemStyle: {
              normal: {
                color: function (params) {
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
            trigger: "axis"
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
              name: "单位(小时)",
              splitLine: {
                lineStyle: {
                  color: "#e5e5e5",
                  type: "dotted"
                }
              }
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
                  color: function (params) {
                    var colorList = ["#006EFF", "#006EFF", "#006EFF", "#006EFF"];
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
                  color: function (params) {
                    var colorList = ["#29cc85", "#29cc85", "#29cc85", "#29cc85"];
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
                  color: function (params) {
                    var colorList = ["#ffbb00", "#ffbb00", "#ffbb00", "#ffbb00"];
                    return colorList[params.dataIndex];
                  }
                }
              }
            }
          ]
        };
        complaint2.setOption(option2);
      },
      pic1() {
        http.post("bi/get_complaint_by_date", {date: http.gmt2str(this.picdate1), city_id: this.p11})
          .then(resp => {
              this.add = http.qfw(resp.data.hits.total);
              this.close = http.qfw(resp.data.hits.closed);
              this.unclose = http.qfw(resp.data.hits.unclosed);
              this.link = resp.data.hits.link;
              this.ratio = resp.data.hits.ratio;
              this.pred = resp.data.hits.pred;
              this.prem = resp.data.hits.prem;

          });
      },
      pic2() {
        if (this.picdate2==''||this.picdate2==undefined){
          this.change7()
          console.log('this.change7()')
        } else {
        this.procX1 = [];
        this.procX2 = [];
        this.procX3 = [];
        this.procY1 = [];
        this.timeX = [];
        //this.titleDate = this.picdate2.getMonth() + 1 + '月'
        http.post("bi/get_complaint_by_mon", {date: http.gmt2strm(this.picdate2),city_id:this.p11})
          .then(resp => {
            this.close1 = http.qfw(resp.data.hits.closed);
            this.unclose1 = http.qfw(resp.data.hits.unclosed);
            this.timeX.push(parseInt(resp.data.hits.min_proc * 100) / 100);
            this.timeX.push(parseInt(resp.data.hits.max_proc * 100) / 100);
            this.timeX.push(parseInt(resp.data.hits.avg_proc * 100) / 100);

            for (var i = 0; i < resp.data.hits.proc_stat.length; i++) {
              this.procX1.push(parseInt(resp.data.hits.proc_stat[i].avg * 100) / 100);
              this.procX2.push(parseInt(resp.data.hits.proc_stat[i].max * 100) / 100);
              this.procX3.push(parseInt(resp.data.hits.proc_stat[i].min * 100) / 100);
              this.procY1.push(resp.data.hits.proc_stat[i].name);
            }
            this.closeComplaint();
          });
      }
      },
      pic3() {
        this.linex = []
        this.liney = []
        http
        //get_complaint_trend_by_monspan
          .get("bi/get_complaint_trend_by_timespan", {
            startTime: http.gmt2str(this.picdate3[0]),
            endTime: http.gmt2str(this.picdate3[1])
          })
          .then(resp => {
            for (var i = 0; i < resp.data.hits.length; i++) {
              this.linex.push(resp.data.hits[i].date)
              this.liney.push(resp.data.hits[i].open)
            }
            this.initLine();
          });
      },
      ppp1(){
        this.ppp()
        this.pic2()
        this._dd2()
      },
      ppp2(){
        this.ppp()
        this.pic2()
        this._dd2()
      },
      ppp3(){
        this.ppp()
        this.pic2()
        this._dd2()
      },
      ppp() {
        http.post("bi/get_complaint_by_date", {date: http.gmt2str(this.picdate1), city_id: this.p11})
          .then(resp => {
              this.add = http.qfw(resp.data.hits.total);
              this.close = http.qfw(resp.data.hits.closed);
              this.unclose = http.qfw(resp.data.hits.unclosed);
            this.link = resp.data.hits.link;
            this.ratio = -resp.data.hits.ratio;
            this.pred = resp.data.hits.pred;
            this.prem = resp.data.hits.prem;
          });
      },
      ptt() {
        if (this.picTo == 1) {
          this.picdate1 = http.getToday()
        }
        if (this.picTo == 2) {
          this.picdate1 = http.getYesterDay()
        }
      },
      _dd2() {
        this.linex = []
        this.liney = []
        http.post("bi/get_complaint_trend_by_timespan", {
            startTime: http.gmt2str(this.picdate3[0]),
            endTime: http.gmt2str(this.picdate3[1]),
            city_id: this.p11
          })
          .then(resp => {
            for (var i = 0; i < resp.data.hits.length; i++) {
              this.linex.push(resp.data.hits[i].date)
              this.liney.push(resp.data.hits[i].open)
            }
            this.initLine();
          });
      }
    },
    watch: {
      picTo: 'ptt',
    }
  };
</script>
