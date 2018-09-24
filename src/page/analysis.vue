<template>
  <div style="background:#f2f2f2;">
  <div class="tits">舆情分析</div>
    <div  style="margin:20px;">
    <card>
      <div class="card_title">
        <span style="font-weight: bold;color: #000000">舆情总体指标</span>
      </div>
      <Row style="width: 100%;height: 350px;border: 1px solid #dcdee2">
        <div style="display:flex;justify-content: space-between;padding:20px">
        <div class="card_title">
          <span style="font-weight: bold;color: #000000">云南省舆情正负面情绪分析</span>
        </div>
        <div>
          <Select style="width: 120px" v-model="city1">
            <Option v-for="item in cityData" :value="item.id">{{item.name}}</Option>
          </Select>
           <DatePicker type="date" v-model="date1" placeholder="自选时间" style="width: 120px"></DatePicker>
        </div>
      </div>
        <Col span="8" style="padding:0 80px">
          <div id="health" style="width: 100%;height: 235px"></div>
        </Col>
        <Col span="8" style="padding:0 50px">
          <div id="unhealth" style="width: 100%;height: 235px"></div>
        </Col>
      </Row>

    </card>
      <Row :gutter="16" style="margin-top: 20px;">
        <Col span="12" style="height: 865px">
          <card style="height:100%">
            <div style="line-height:40px;height:50px">
              <span style="font-weight: bold;color: #000000">全省网络热词TOP10</span>
              <Tooltip content="与全省相关网络热词排行" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
              </Tooltip>
            </div>
            <div>
              <Row style="line-height:40px;background:#f6f8fa;color:#000;font-size:14px">
                <Col span="16" style="padding-left:50px">热词</Col>
                <Col span="4">搜索量</Col>
                <Col span="4">报道量</Col>
              </Row>
            </div>
            <div id="qsnet">
              <ul>
                <li class="qsnet_li">
                  <Row class="qsnet_row">
                    <Col span="16">
                      <i class="qsnet_idx">1</i>
                      <span class="qsnet_sp">吴小辉一审被判18年</span>
                      <p class="qsnet_time">2018-05-10</p>
                    </Col>
                    <Col span="4" class="qsnet_num">59.5W</Col>
                    <Col span="4" class="qsnet_num">23.1W</Col>
                  </Row>
                </li>
                <li class="qsnet_li">
                  <Row class="qsnet_row">
                    <Col span="16">
                      <i class="qsnet_idx">2</i>
                      <span class="qsnet_sp">吴小辉一审被判18年</span>
                      <p class="qsnet_time">2018-05-10</p>
                    </Col>
                    <Col span="4" class="qsnet_num">59.5W</Col>
                    <Col span="4" class="qsnet_num">23.1W</Col>
                  </Row>
                </li>
                <li class="qsnet_li">
                  <Row class="qsnet_row">
                    <Col span="16">
                      <i class="qsnet_idx">3</i>
                      <span class="qsnet_sp">吴小辉一审被判18年</span>
                      <p class="qsnet_time">2018-05-10</p>
                    </Col>
                    <Col span="4" class="qsnet_num">59.5W</Col>
                    <Col span="4" class="qsnet_num">23.1W</Col>
                  </Row>
                </li>
                <li class="qsnet_li">
                  <Row class="qsnet_row">
                    <Col span="16">
                      <i class="qsnet_idx">4</i>
                      <span class="qsnet_sp">吴小辉一审被判18年</span>
                      <p class="qsnet_time">2018-05-10</p>
                    </Col>
                    <Col span="4" class="qsnet_num">59.5W</Col>
                    <Col span="4" class="qsnet_num">23.1W</Col>
                  </Row>
                </li>
                <li class="qsnet_li">
                  <Row class="qsnet_row">
                    <Col span="16">
                      <i class="qsnet_idx">5</i>
                      <span class="qsnet_sp">吴小辉一审被判18年</span>
                      <p class="qsnet_time">2018-05-10</p>
                    </Col>
                    <Col span="4" class="qsnet_num">59.5W</Col>
                    <Col span="4" class="qsnet_num">23.1W</Col>
                  </Row>
                </li>
                <li class="qsnet_li">
                  <Row class="qsnet_row">
                    <Col span="16">
                      <i class="qsnet_idx">6</i>
                      <span class="qsnet_sp">吴小辉一审被判18年</span>
                      <p class="qsnet_time">2018-05-10</p>
                    </Col>
                    <Col span="4" class="qsnet_num">59.5W</Col>
                    <Col span="4" class="qsnet_num">23.1W</Col>
                  </Row>
                </li>
                <li class="qsnet_li">
                  <Row class="qsnet_row">
                    <Col span="16">
                      <i class="qsnet_idx">7</i>
                      <span class="qsnet_sp">吴小辉一审被判18年</span>
                      <p class="qsnet_time">2018-05-10</p>
                    </Col>
                    <Col span="4" class="qsnet_num">59.5W</Col>
                    <Col span="4" class="qsnet_num">23.1W</Col>
                  </Row>
                </li>
                <li class="qsnet_li">
                  <Row class="qsnet_row">
                    <Col span="16">
                      <i class="qsnet_idx">8</i>
                      <span class="qsnet_sp">吴小辉一审被判18年</span>
                      <p class="qsnet_time">2018-05-10</p>
                    </Col>
                    <Col span="4" class="qsnet_num">59.5W</Col>
                    <Col span="4" class="qsnet_num">23.1W</Col>
                  </Row>
                </li>
                <li class="qsnet_li">
                  <Row class="qsnet_row">
                    <Col span="16">
                      <i class="qsnet_idx">9</i>
                      <span class="qsnet_sp">吴小辉一审被判18年</span>
                      <p class="qsnet_time">2018-05-10</p>
                    </Col>
                    <Col span="4" class="qsnet_num">59.5W</Col>
                    <Col span="4" class="qsnet_num">23.1W</Col>
                  </Row>
                </li>
                <li class="qsnet_li">
                  <Row class="qsnet_row">
                    <Col span="16">
                      <i class="qsnet_idx">10</i>
                      <span class="qsnet_sp">吴小辉一审被判18年</span>
                      <p class="qsnet_time">2018-05-10</p>
                    </Col>
                    <Col span="4" class="qsnet_num">59.5W</Col>
                    <Col span="4" class="qsnet_num">23.1W</Col>
                  </Row>
                </li>
              </ul>
            </div>
          </card>
        </Col>
        <Col span="12" style="height: 865px">
          <card style="height:100%">
           <div style="line-height:40px;height:50px">
              <span style="font-weight: bold;color: #000000">州市网络热词TOP10</span>
              <Tooltip content="与全省相关网络热词排行" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
              </Tooltip>
              <Select style="width: 150px;float:right">
                <Option v-for="item in cityData" :value="item.id">{{item.name}}</Option>
               </Select>
            </div>

            <div>
              <Row style="line-height:40px;background:#f6f8fa;color:#000;font-size:14px">
                <Col span="16" style="padding-left:50px">热词</Col>
                <Col span="4">搜索量</Col>
                <Col span="4">报道量</Col>
              </Row>
            </div>
            <div id="zsnet">
              <ul>
                <li class="qsnet_li">
                  <Row class="qsnet_row">
                    <Col span="16">
                      <i class="qsnet_idx">1</i>
                      <span class="qsnet_sp">吴小辉一审被判18年</span>
                      <p class="qsnet_time">2018-05-10</p>
                    </Col>
                    <Col span="4" class="qsnet_num">59.5W</Col>
                    <Col span="4" class="qsnet_num">23.1W</Col>
                  </Row>
                </li>
                <li class="qsnet_li">
                  <Row class="qsnet_row">
                    <Col span="16">
                      <i class="qsnet_idx">2</i>
                      <span class="qsnet_sp">吴小辉一审被判18年</span>
                      <p class="qsnet_time">2018-05-10</p>
                    </Col>
                    <Col span="4" class="qsnet_num">59.5W</Col>
                    <Col span="4" class="qsnet_num">23.1W</Col>
                  </Row>
                </li>
                <li class="qsnet_li">
                  <Row class="qsnet_row">
                    <Col span="16">
                      <i class="qsnet_idx">3</i>
                      <span class="qsnet_sp">吴小辉一审被判18年</span>
                      <p class="qsnet_time">2018-05-10</p>
                    </Col>
                    <Col span="4" class="qsnet_num">59.5W</Col>
                    <Col span="4" class="qsnet_num">23.1W</Col>
                  </Row>
                </li>
                <li class="qsnet_li">
                  <Row class="qsnet_row">
                    <Col span="16">
                      <i class="qsnet_idx">4</i>
                      <span class="qsnet_sp">吴小辉一审被判18年</span>
                      <p class="qsnet_time">2018-05-10</p>
                    </Col>
                    <Col span="4" class="qsnet_num">59.5W</Col>
                    <Col span="4" class="qsnet_num">23.1W</Col>
                  </Row>
                </li>
                <li class="qsnet_li">
                  <Row class="qsnet_row">
                    <Col span="16">
                      <i class="qsnet_idx">5</i>
                      <span class="qsnet_sp">吴小辉一审被判18年</span>
                      <p class="qsnet_time">2018-05-10</p>
                    </Col>
                    <Col span="4" class="qsnet_num">59.5W</Col>
                    <Col span="4" class="qsnet_num">23.1W</Col>
                  </Row>
                </li>
                <li class="qsnet_li">
                  <Row class="qsnet_row">
                    <Col span="16">
                      <i class="qsnet_idx">6</i>
                      <span class="qsnet_sp">吴小辉一审被判18年</span>
                      <p class="qsnet_time">2018-05-10</p>
                    </Col>
                    <Col span="4" class="qsnet_num">59.5W</Col>
                    <Col span="4" class="qsnet_num">23.1W</Col>
                  </Row>
                </li>
                <li class="qsnet_li">
                  <Row class="qsnet_row">
                    <Col span="16">
                      <i class="qsnet_idx">7</i>
                      <span class="qsnet_sp">吴小辉一审被判18年</span>
                      <p class="qsnet_time">2018-05-10</p>
                    </Col>
                    <Col span="4" class="qsnet_num">59.5W</Col>
                    <Col span="4" class="qsnet_num">23.1W</Col>
                  </Row>
                </li>
                <li class="qsnet_li">
                  <Row class="qsnet_row">
                    <Col span="16">
                      <i class="qsnet_idx">8</i>
                      <span class="qsnet_sp">吴小辉一审被判18年</span>
                      <p class="qsnet_time">2018-05-10</p>
                    </Col>
                    <Col span="4" class="qsnet_num">59.5W</Col>
                    <Col span="4" class="qsnet_num">23.1W</Col>
                  </Row>
                </li>
                <li class="qsnet_li">
                  <Row class="qsnet_row">
                    <Col span="16">
                      <i class="qsnet_idx">9</i>
                      <span class="qsnet_sp">吴小辉一审被判18年</span>
                      <p class="qsnet_time">2018-05-10</p>
                    </Col>
                    <Col span="4" class="qsnet_num">59.5W</Col>
                    <Col span="4" class="qsnet_num">23.1W</Col>
                  </Row>
                </li>
                <li class="qsnet_li">
                  <Row class="qsnet_row">
                    <Col span="16">
                      <i class="qsnet_idx">10</i>
                      <span class="qsnet_sp">吴小辉一审被判18年</span>
                      <p class="qsnet_time">2018-05-10</p>
                    </Col>
                    <Col span="4" class="qsnet_num">59.5W</Col>
                    <Col span="4" class="qsnet_num">23.1W</Col>
                  </Row>
                </li>
              </ul>
            </div>
          </card>
        </Col>
      </Row>
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
#qsnet li,
#zsnet li {
  list-style: none;
}
.qsnet_idx {
  width: 20px;
  height: 20px;
  font-style: normal;
  background: #b6b6b6;
  border-radius: 3px;
  font-size: 12px;
  padding: 2px 6px;
  color: #fff;
  margin-right: 30px;
}
.qsnet_sp {
  color: #000;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.qsnet_time {
  color: #a5a5a5;
  font-size: 14px;
  padding-left: 50px;
}
.qsnet_num {
  line-height: 53px;
}
.qsnet_li {
  line-height: 25px;
  padding: 15px 0 5px;
  border-bottom: 1px solid #dcdee2;
}
.qsnet_row {
  color: #000;
  font-size: 14px;
}
#qsnet li:nth-child(1) i,
#zsnet li:nth-child(1) i {
  background: #ff716b;
}
#qsnet li:nth-child(2) i,
#qsnet li:nth-child(3) i,
#zsnet li:nth-child(2) i,
#zsnet li:nth-child(3) i {
  background: #ffbb00;
}
</style>

<script>
  import http from "@/http.js";
export default {
  data() {
    return {
      pien:[],
      pie1:[],
      pie2:[],
      cityData:[],
      city1:'0',
      date1:'',
      columns1: [
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ]
    };
  },
  mounted() {
    this.init();

    this.initHealth1();
    this.initUNHealth1();
  },
  methods: {
    init() {
      this.date1 = http.getToday()
      http.get('bi/get_all_city_prov', {}).then(resp => {
        this.cityData = resp.data.hits;
      })
    },
    initHealth() {
      let health = this.$echarts.init(document.getElementById("health"));
      health.setOption({
        title: {
          text: "媒体情绪",
          x: "center",
          textStyle: {
            fontSize: 16,
            color: "#333"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}: {c} ({d}%)",
          backgroundColor: "#323232"
        },
        legend: {
          //orient: 'vertical',
          bottom: 0,
          left: "center",
          icon: "circle",
          data: this.pien
        },
        series: [
          {
            name: "",
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
                  fontSize: "15",
                  fontWeight: "bold",
                  color: "#000000"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.pie1,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{b} : {c} \n ({d}%)"
                },
                labelLine: {
                  show: true
                }
              }
            }
          }
        ],
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
        ]
      });
    },
    initUNHealth() {
      let unhealth = this.$echarts.init(document.getElementById("unhealth"));
      unhealth.setOption({
        title: {
          text: "一机游情绪",
          x: "center",
          textStyle: {
            fontSize: 16,
            color: "#333"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}: {c} ({d}%)",
          backgroundColor: "#323232"
        },
        legend: {
          //orient: 'vertical',
          bottom: 0,
          left: "center",
          icon: "circle",
          data: this.pien
        },
        series: [
          {
            name: "",
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
                  fontSize: "15",
                  fontWeight: "bold",
                  color: "#000000"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.pie1,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{b} : {c} \n ({d}%)"
                },
                labelLine: {
                  show: true
                }
              }
            }
          }
        ],
        color: [
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
        ]
      });
    },
    initHealth1() {
      let health1 = this.$echarts.init(document.getElementById("health1"));
      health1.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{b}: {c} ({d}%)",
          backgroundColor: "#323232"
        },
        legend: {
          //orient: 'vertical',
          bottom: 0,
          icon: "circle",
          left: "center",
          data: ["媒体正面情绪", "媒体中面情绪", "媒体负面情绪"]
        },
        series: [
          {
            name: "",
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
                  fontSize: "15",
                  fontWeight: "bold",
                  color: "#000000"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "媒体正面情绪" },
              { value: 310, name: "媒体中面情绪" },
              { value: 234, name: "媒体负面情绪" }
            ],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{b} : {c} \n ({d}%)"
                },
                labelLine: {
                  show: true
                }
              }
            }
          }
        ],
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
        ]
      });
    },
    initUNHealth1() {
      let unhealth1 = this.$echarts.init(document.getElementById("unhealth1"));
      unhealth1.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{b}: {c} ({d}%)",
          backgroundColor: "#323232"
        },
        legend: {
          //orient: 'vertical',
          bottom: 0,
          icon: "circle",
          left: "center",
          data: ["媒体正面情绪", "媒体中面情绪", "媒体负面情绪"]
        },
        series: [
          {
            name: "",
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
                  fontSize: "15",
                  fontWeight: "bold",
                  color: "#000000"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "媒体正面情绪" },
              { value: 310, name: "媒体中面情绪" },
              { value: 234, name: "媒体负面情绪" }
            ],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{b} : {c} \n ({d}%)"
                },
                labelLine: {
                  show: true
                }
              }
            }
          }
        ],
        color: [
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
        ]
      });
    },
    pic1(){
      this.pien=[]
      this.pie1=[]
      this.pie2=[]
      http.get('bi/get_pom_by_date',{date:'2018-08-28',area_code:530600}).then(resp=>{
        console.log('玉琴：：：',resp.data.hits)
        this.pie1=resp.data.hits;
        for (var i=0;i<resp.data.hits.length;i++) {
          this.pien.push(resp.data.hits.name)
        }
        this.initHealth();
        this.initUNHealth();
      })
    }
  },
  watch:{
    date1:'pic1'
  }
};
</script>
