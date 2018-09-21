<template>
  <div style="background:#f2f2f2;">
    <div class="tits">游客画像</div>
    <div style="margin:20px;">
      <card>
        <div class="card_title">
          <span style="font-weight: bold;color: #000000">基本属性分析</span>
          <Tooltip content="消费能力-腾讯数据统计的用户消费指数" placement="right" max-width="200">
            <Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline"/>
          </Tooltip>
        </div>
        <Select style="width: 120px" placeholder="城市">
          <Option v-for="item in cityData" :value="item.id">{{item.name}}</Option>
        </Select>
        <Select style="width: 120px" placeholder="区域">
          <Option>区域</Option>
        </Select>
        <DatePicker type="date" v-model="picDate" placeholder="自选时间" style="width: 120px"></DatePicker>
        <Row :gutter="16" style="margin-top: 20px">
          <Col span="6">
            <div style="display: flex;border: 1px solid #dcdee2;height: 400px;width: 100%">
              <div style="width: 10%;height: 400px;display: flex">
                <Icon type="ios-woman" size="32" color="#ff50fe"
                      style="display: flex;align-items: center;margin-left: 60%"/>
              </div>
              <div id="sex" style="width: 80%;height: 400px;"></div>
              <div style="width: 10%;height: 400px;display: flex">
                <Icon type="ios-man" size="32" color="#1ea9ff" style="display: flex;align-items: center;"/>
              </div>
            </div>
          </Col>
          <Col span="6">
            <div id="in" class="tousimg_zb"></div>
          </Col>
          <Col span="6">
            <div id="os" class="tousimg_zb"></div>
          </Col>
          <Col span="6">
            <div id="ios" class="tousimg_zb"></div>
          </Col>
        </Row>

        <Row :gutter="16" style="margin-top: 23px">
          <Col span="12">
            <div id="age" class="tousimg_zb"></div>
          </Col>
          <Col span="12">
            <div id="edu" class="tousimg_zb"></div>
          </Col>

        </Row>
        <Row :gutter="16" style="margin-top: 23px;">
          <Col span="12">
            <div id="city" class="tousimg_zb"></div>
          </Col>
          <Col span="12">
            <div id="province" class="tousimg_zb"></div>
          </Col>
        </Row>
      </card>
      <card style="margin-top: 20px">
        <div class="card_title">
          <span style="font-weight: bold;color: #000000">人口迁移分析</span>

        </div>
        <RadioGroup type="button" @on-change="hotlinepic">
          <Radio label="all">全部</Radio>
          <Radio label="default">飞机</Radio>
          <Radio label="small">火车</Radio>
          <Radio label="car">汽车</Radio>
        </RadioGroup>
        <DatePicker type="date" v-model="hotlineDate" placeholder="自选时间" style="width: 120px"></DatePicker>
        <Select style="width: 120px" placeholder="清选择">
          <Option v-for="item in cityData" :value="item.id">{{item.name}}</Option>
        </Select>
        <Row :gutter="16" style="margin-top: 20px;margin-bottom: 10px">
          <Col span="10">
            <div>
              <Tabs v-model="tabname"
                    style="border-top: 1px solid #dcdee2;border-left: 1px solid #dcdee2;height: 557px">
                <TabPane label="迁入" name="in">
                  <Table height="550" :columns="columns1" :data="data1"></Table>
                </TabPane>
                <TabPane label="迁出" name="out">
                  <Table height="550" :columns="columns1" :data="data1"></Table>
                </TabPane>
              </Tabs>
            </div>
          </Col>
          <Col span="14">
            <div id="moveMap" style="border: 1px solid #dcdee2;height: 557px"></div>
          </Col>
        </Row>
      </card>
      <card style="margin-top: 20px">
        <div class="card_title">
          <span style="font-weight: bold;color: #000000">一机游用户消费维度分析</span>
        </div>
        <div style="height:350px">
          <Row :gutter="16" style="padding: 0 30px 0 8px;display:flex;height:100%">
            <Col span="10" style="border: 1px solid #dcdee2;margin-right:20px;height:100%;padding:0 30px">
              <div style="padding:20px 0;height:50%;border-bottom:1px solid #dcdee2">
                <DatePicker v-model="picDate3" type="date" placeholder="Select date"
                            style="width: 150px;float: right"></DatePicker>
                <div style="margin-top:40px;display:flex">
                  <img src="../assets/imgs/cash1.png" style="margin-right:20px;width:60px;height:60px"/>
                  <div>
                    <div style="color:#000;font-size:16px">用户平均消费金额</div>
                    <div style="color:#006eff"><span style="font-size: 32px;font-weight:600">{{vagprice}}</span>元</div>
                  </div>
                </div>
              </div>
              <div style="padding:20px 0;height:50%;">
                <div style="margin-top:25px;display:flex">
                  <img src="../assets/imgs/cash2.png" style="margin-right:20px;width:60px;height:60px"/>
                  <div>
                    <div style="color:#000;font-size:16px">中位点用户消费金额</div>
                    <div style="color:#006eff"><span style="font-size: 32px;font-weight:600">{{middle}}</span>元</div>
                  </div>
                </div>
              </div>
            </Col>
            <Col span="14" style="border: 1px solid #dcdee2;height:100%">
              <div style="padding-bottom: 20px;padding: 20px">
                <span style="font-weight: bold;color: #000000">消费类型占比</span>
                <DatePicker v-model="picDate4" type="daterange" placeholder="Select date" style="width: 150px;float: right"></DatePicker>
              </div>
              <div id="cash" style="height:300px;width:100%"></div>
            </Col>
          </Row>
        </div>
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

  .ivu-table-wrapper {
    border: unset;
  }

  div.ivu-table:after {
    background-color: unset !important;
  }

  .card_title {
    line-height: 30px;
    height: 40px;
    font-size: 15px;
  }

  .tousimg_zb {
    width: 100%;
    height: 400px;
    border: 1px solid #dcdee2;
    padding: 0 30px 15px;
  }

  .ivu-col-span-6,
  .ivu-col-span-12 {
    padding-left: 8px !important;
    padding-right: 15px !important;
  }

  .ivu-tabs-nav {
    width: 100% !important;
  }
</style>

<script>
  import http from "@/http.js";
  import "@/dateFormate.js";

  export default {
    data() {
      return {
        hotlineDate:'2018-08-25',
        provx: [],
        provy: [],
        cityx: [],
        cityy: [],
        mobilex: [],
        mobiley: [],
        carDatax: [],
        carDatay: [],
        vagprice: "",
        middle: "",
        tabname: "in",
        sexData: [],
        inData: [],
        inDatax: [],
        osData: [],
        ageData: [],
        ageDatax: [],
        ageDatay: [],
        eduData: [],
        eduDatax: [],
        eduDatay: [],
        cliData: [],
        ddData: [],
        cityData: [],
        proData: [],
        picDate: "2018-09-14",
        picDate3: "2018-08-01",
        picDate4: ["2018-09-14","2018-09-14"],
        cpicDate: "",
        columns1: [
          {
            title: "排名",
            type: "index",
            width: 60,
            align: "center"
          },
          {
            title: "起始站",
            key: "from",
            width: 80
          },
          {
            title: "终点站",
            key: "to",
            width: 80
          },
          {
            title: "热度",
            key: "n"
          },
          {
            title: "汽车",
            key: "car"
          },
          {
            title: "火车",
            key: "train"
          },
          {
            title: "飞机",
            key: "plane"
          }
        ],
        data1: [],
        cashData: [],
        cashDataX: []
      };
    },
    mounted() {
      this.initMap();
      this.init();
    },
    methods: {
      hotlinedp(){
        console.log(http.gmt2str(this.hotlineDate))
        http.get("bi/get_migrate_by_date", {
          date: http.gmt2str(this.hotlineDate),
          city_name: "大理",
          top: 10,
          io: this.tabname
        }).then(resp => {
          this.data1 = resp.data.hits;
          console.log("this.data1", this.data1);
        });
      },
      hotlinepic(val11) {
        console.log(val11)
      },
      init() {
        http.get('bi/get_all_city', {}).then(resp => {
          this.cityData = resp.data.hits;
        })
      },
      initMap() {
        var center = new qq.maps.LatLng(26.90923, 108.397428);
        var map = new qq.maps.Map(document.getElementById("moveMap"), {
          center: center,
          zoom: 5
        });
        var path1 = [
          new qq.maps.LatLng(24.87966, 102.83322),
          new qq.maps.LatLng(22.54666503349262, 114.05956000000003)
        ];
        var polyline = new qq.maps.Polyline({
          path: path1,
          strokeColor: "#0ef94a",
          strokeWeight: 2,
          editable: false,
          map: map
        });
      },
      initSex() {
        console.log("123122222222222", this.sexData);
        let sex = this.$echarts.init(document.getElementById("sex"));
        sex.setOption({
          title: {
            text: "性别占比(%)",
            textStyle: {
              fontSize: 14
            },
            x: "15",
            y: "15"
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            axisPointer: {
              type: "shadow"
            },
            backgroundColor: "#323232"
          },
          legend: {
            bottom: 10,
            x: "center",
            icon: "circle",
            data: ["女士", "男士"],
            itemWidth: 10,
            itemHeight: 12
          },
          series: [
            {
              name: "性别占比",
              type: "pie",
              radius: ["50%", "70%"],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: "center"
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: "30",
                    fontWeight: "bold"
                  }
                }
              },
              color: ["#1ea9ff", "#ff50fe"],
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: this.sexData
            }
          ]
        });
      },
      initIn() {
        let Sin = this.$echarts.init(document.getElementById("in"));
        Sin.setOption({
          title: {
            text: "年龄占比(%)",
            textStyle: {
              fontSize: 14
            },
            x: "15",
            y: "15"
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            axisPointer: {
              type: "shadow"
            },
            backgroundColor: "#323232"
          },
          legend: {
            bottom: 3,
            x: "center",
            icon: "circle",
            data: this.ageDatax,
            itemGap: 20,
            itemWidth: 10,
            itemHeight: 12
          },
          series: [
            {
              name: "年龄占比",
              type: "pie",
              radius: ["50%", "70%"],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: "center"
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: "30",
                    fontWeight: "bold"
                  }
                }
              },
              color: [
                "#006EFF",
                "#29CC85",
                "#ffbb00",
                "#ff584c",
                "#9741d9",
                "#1fc0cc",
                "#7ff936",
                "#ff9c19",
                "#e63984",
                "#655ce6",
                "#47cc50",
                "#fb0b6"
              ],
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: this.ageData
            }
          ]
        });
      },
      initOS() {
        let os = this.$echarts.init(document.getElementById("os"));
        os.setOption({
          title: {
            text: "学历占比(%)",
            textStyle: {
              fontSize: 14
            },
            x: "15",
            y: "15"
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            axisPointer: {
              type: "shadow"
            },
            backgroundColor: "#323232"
          },
          legend: {
            bottom: 10,
            x: "center",
            icon: "circle",
            data: this.eduDatax,
            itemWidth: 10,
            itemHeight: 12
          },
          series: [
            {
              name: "学历占比",
              type: "pie",
              radius: ["50%", "70%"],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: "center"
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: "30",
                    fontWeight: "bold"
                  }
                }
              },
              color: [
                "#006EFF",
                "#29CC85",
                "#ffbb00",
                "#ff584c",
                "#9741d9",
                "#1fc0cc",
                "#7ff936",
                "#ff9c19",
                "#e63984",
                "#655ce6",
                "#47cc50",
                "#fb0b6"
              ],
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: this.eduData
            }
          ]
        });
      },
      initIOS() {
        let ios = this.$echarts.init(document.getElementById("ios"));
        ios.setOption({
          title: {
            text: "消费能力(%)",
            textStyle: {
              fontSize: 14
            },
            x: "15",
            y: "15"
          },
          color: [
            "#006EFF",
            "#29CC85",
            "#ffbb00",
            "#ff584c",
            "#9741d9",
            "#1fc0cc",
            "#7ff936",
            "#ff9c19",
            "#e63984",
            "#655ce6",
            "#47cc50",
            "#fb0b6"
          ],
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            axisPointer: {
              type: "shadow"
            },
            backgroundColor: "#323232"
          },
          legend: {
            bottom: 10,
            x: "center",
            icon: "circle",
            data: this.inDatax,
            itemWidth: 10,
            itemHeight: 12
          },
          series: [
            {
              name: "消费能力",
              type: "pie",
              radius: ["50%", "70%"],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: "center"
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: "30",
                    fontWeight: "bold"
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: this.inData
            }
          ]
        });
      },
      initCash() {
        let cash = this.$echarts.init(document.getElementById("cash"));
        cash.setOption({
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            axisPointer: {
              type: "shadow"
            },
            backgroundColor: "#323232"
          },
          legend: {
            orient: "vertical",
            right: 40,
            top: 120,
            bottom: 12,
            icon: "circle",
            data: this.cashDataX
          },
          series: [
            {
              name: "消费分析",
              type: "pie",
              //radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: "left"
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: "30",
                    fontWeight: "bold"
                  }
                }
              },
              color: [
                "#006EFF",
                "#29CC85",
                "#ffbb00",
                "#ff584c",
                "#9741d9",
                "#1fc0cc"
              ],
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: this.cashData
            }
          ]
        });
      },
      initAge() {
        let age = this.$echarts.init(document.getElementById("age"));
        age.setOption({
          title: {
            text: "有车情况",
            textStyle: {
              fontSize: 16
            },
            x: "0",
            y: 20
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            },
            backgroundColor: "#323232"
          },

          grid: {
            left: "1%",
            right: "10%",
            bottom: "4%",
            containLabel: true
          },
          xAxis: {
            type: "value",

            boundaryGap: [0, 0.1]
          },
          yAxis: {
            type: "category",
            data: this.carDatax
          },

          series: [
            {
              name: "占比",
              type: "bar",
              data: this.carDatay,
              barWidth: "15%",
              label: {
                normal: {
                  show: true,
                  position: "right"
                }
              }
            }
          ],
          color: ["#006EFF"]
        });
      },
      initEdu() {
        let edu = this.$echarts.init(document.getElementById("edu"));
        edu.setOption({
          title: {
            text: "终端类型",
            textStyle: {
              fontSize: 16
            },
            x: "0",
            y: 20
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            },
            backgroundColor: "#323232"
          },

          grid: {
            left: "1%",
            right: "10%",
            bottom: "4%",
            containLabel: true
          },
          xAxis: {
            type: "value",

            boundaryGap: [0, 0.1]
          },
          yAxis: {
            type: "category",
            data: this.mobilex
          },

          series: [
            {
              name: "占比",
              type: "bar",
              data: this.mobiley,
              barWidth: "15%",
              label: {
                normal: {
                  show: true,
                  position: "right"
                }
              }
            }
          ],
          color: ["#006EFF"]
        });
      },
      initCity() {
        let city = this.$echarts.init(document.getElementById("city"));
        city.setOption({
          title: {
            text: "来源城市",
            textStyle: {
              fontSize: 16
            },
            x: "0",
            y: 20
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            },
            backgroundColor: "#323232"
          },

          grid: {
            left: "1%",
            right: "10%",
            bottom: "4%",
            containLabel: true
          },
          xAxis: {
            type: "value",

            boundaryGap: [0, 0.1]
          },
          yAxis: {
            type: "category",
            data: this.cityx
          },

          series: [
            {
              name: "占比",
              type: "bar",
              data: this.cityy,
              barWidth: "15%",
              label: {
                normal: {
                  show: true,
                  position: "right"
                }
              }
            }
          ],
          color: ["#006EFF"]
        });
      },
      initPro() {
        let pro = this.$echarts.init(document.getElementById("province"));
        pro.setOption({
          title: {
            text: "来源省份",
            textStyle: {
              fontSize: 16
            },
            x: "0",
            y: 20
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            },
            backgroundColor: "#323232"
          },

          grid: {
            left: "1%",
            right: "10%",
            bottom: "4%",
            containLabel: true
          },
          xAxis: {
            type: "value",

            boundaryGap: [0, 0.1]
          },
          yAxis: {
            type: "category",
            data: this.provx
          },

          series: [
            {
              name: "占比",
              type: "bar",
              data: this.provy,
              barWidth: "15%",
              label: {
                normal: {
                  show: true,
                  position: "right"
                }
              }
            }
          ],
          color: ["#006EFF"]
        });
      },
      clicktab() {
        http.get("bi/get_migrate_by_date", {
          date: http.gmt2str(this.hotlineDate),
          city_name: "大理",
          top: 10,
          io: this.tabname
        }).then(resp => {
          this.data1 = resp.data.hits;
          console.log("this.data1", this.data1);
        });
      },
      dateChange() {
        this.provx = [];
        this.provy = [];
        this.cityx = [];
        this.cityy = [];
        this.eduData = [];
        this.eduDatax = [];
        this.eduDatay = [];
        this.cashDataX = [];
        this.ageData = [];
        this.ageDatax = [];
        this.ageDatay = [];
        this.inDatax = [];
        this.carDatax = [];
        this.carDatay = [];
        this.mobilex = [];
        this.mobiley = [];
        var date = new Date(this.picDate).format("yyyy-MM-dd");
        this.cpicDate = date;
        http
          .get("bi/get_portrait_base_by_date", {date: this.cpicDate})
          .then(resp => {
            this.sexData = resp.data.hist.gender;
            this.inData = resp.data.hist.consumpting;
            for (var i = 0; i < resp.data.hist.consumpting.length; i++) {
              this.inDatax.push(resp.data.hist.consumpting[i].name);
            }
            this.eduData = resp.data.hist.edu;
            for (var i = 0; i < resp.data.hist.edu.length; i++) {
              this.eduDatax.push(resp.data.hist.edu[i].name);
              this.eduDatay.push(resp.data.hist.edu[i].value * 100);
            }
            this.osData = resp.data.hist.mobile;
            console.log("resp.data.hist.age", resp.data.hist.age);
            this.ageData = resp.data.hist.age;
            for (var i = 0; i < resp.data.hist.age.length; i++) {
              this.ageDatax.push(resp.data.hist.age[i].name);
              this.ageDatay.push(resp.data.hist.age[i].value * 100);
            }
            for (var i = 0; i < resp.data.hist.mobile.length; i++) {
              this.mobilex.push(resp.data.hist.mobile[i].name);
              this.mobiley.push(resp.data.hist.mobile[i].value * 100);
            }
            for (var i = 0; i < resp.data.hist.car.length; i++) {
              this.carDatax.push(resp.data.hist.car[i].name);
              this.carDatay.push(resp.data.hist.car[i].value * 100);
            }
            this.initSex();
            this.initOS();
            this.initIOS();
            this.initIn();
            this.initEdu();
            this.initAge();
          });
        http
          .get("bi/get_portrait_origin_by_date", {
            date: this.cpicDate,
            type: "city",
            scenic: "",
            city_id: ""
          })
          .then(resp => {
            console.log("city", resp.data.hist);
            for (var i = 0; i < resp.data.hist.length; i++) {
              this.cityx.push(resp.data.hist[i].origin_city);
              this.cityy.push(resp.data.hist[i].origin_percent * 100);
            }
            this.initCity();
          });
        http
          .get("bi/get_portrait_origin_by_date", {
            date: this.cpicDate,
            type: "prov",
            scenic: "",
            city_id: ""
          })
          .then(resp => {
            console.log("city", resp.data.hist);
            for (var i = 0; i < resp.data.hist.length; i++) {
              this.provx.push(resp.data.hist[i].origin_province);
              this.provy.push(resp.data.hist[i].origin_percent * 100);
            }
            this.initPro();
          });
        http
          .get("bi/get_migrate_by_date", {
            date: "2018-08-25",
            city_name: "大理",
            top: 10,
            io: this.tabname
          })
          .then(resp => {
            this.data1 = resp.data.hits;
          });


      },
      dateChange3(){
        http
          .get("bi/get_consume_by_date", {date: http.gmt2str(this.picDate3), city_id: 392})
          .then(resp => {
            this.vagprice = resp.data.hist.avg_amount;
            this.middle = resp.data.hist.median_amount;
          });
      },
      dateChange4(){
        this.cashDataX = []
        http
          .get("bi/get_consume_type_by_mon", {
            startTime: http.gmt2str(this.picDate4[0]),
            endTime: http.gmt2str(this.picDate4[1])
          })
          .then(resp => {
            console.log("get_consume_type_by_mon", resp.data.hits);
            this.cashData = resp.data.hits;
            for (var i = 0; i < resp.data.hits.length; i++) {
              this.cashDataX.push(resp.data.hits[i].name);
            }
            console.log("this.cashData", this.cashData);
            console.log("this.cashData", this.cashDataX);
            this.initCash();
          });
      }
    },
    watch: {
      picDate: "dateChange",
      picDate3: "dateChange3",
      picDate4: "dateChange4",
      tabname: "clicktab",
      hotlineDate:'hotlinedp'
    }
  };
</script>
