<template>
  <div>
    <div class="ti">
      <span style="color: rgb(102, 159, 199);">旅游热度</span>
      <Icon type="ios-arrow-forward" />
      <span style="font-size: 12px;">旅游热度概况</span>
    </div>

      <div label="首页" name="index" class="lyrd_sy_content">
        <card class="lyrd_sy_ykrs">
          <div class="lyrd_index_search">
            <div class="lyrd_index_search_left">
              <span class="lyrd_index_search_title">游客人数</span>
              <Tooltip content="去除常驻人口游客数量的计算" placement="right" max-width="200">
                <Icon size="19" style="margin: 7px 0px 0px -8px" type="ios-help-circle-outline" />
              </Tooltip>
            </div>
            <div class="lyrd_index_search_right">
              <RadioGroup v-model="dateChoice1" type="button">
                <Radio label="1">今日</Radio>
                <Radio label="2">昨日</Radio>
              </RadioGroup>
              <DatePicker v-model="datefff" :options="disoptionsdate" format="yyyy-MM-dd" type="date" placeholder="请选择日期" style="width:120px" @on-change="handleChange"></DatePicker>
              <Select v-model="city" style="width:120px;" @on-change="form1change3">
                <Option v-for="item in cityData" :value="item.id">{{item.name}}</Option>
              </Select>
              <Select v-model="citysenic1" style="width:120px;" placeholder="景区" @on-change="form1change">
                <Option value="" v-if="senicData.length==0" disabled>请先选择州市</Option>
                <Option v-for="item in senicData" :value="item.id">{{item.name}}</Option>
              </Select>
            </div>
          </div>
          <div class="lyrd_index_count">
            <Row>
              <Col span="10">
              <div class="lyrd_index_count_content lyrd_index_count_content_line">
                <div class="lyrd_index_count_bg1"></div>
                <div class="lyrd_index_count_num" >
                  <div>
                    <span class="lyrd_index_today_visit">总接待游客量</span>
                    <!--{{(this.datefff).toString().substring(8,10)}}日-->
                  </div>
                  <div v-if="isshow1==1">
                    <span class="lyrd_index_today_num">{{total.toString().substring(0,total.toString().length-3)}}</span>
                    <span class="lyrd_index_today_dw">人次</span>
                  </div>
                  <div v-if="isshow1==2" style="margin-top: 20px">暂无数据</div>
                </div>

              </div>
              </Col>
              <Col span="7">
              <div class="lyrd_index_count_content lyrd_index_count_content_line">
                <div class="lyrd_index_count_bg2"></div>
                <div class="lyrd_index_count_num">
                  <div>
                    <span class="lyrd_index_today_visit">与昨日环比</span>

                  </div>
                  <div v-if="isshow2==1">
                    <span class="lyrd_index_today_num">{{ratio}}</span>
                    <span class="lyrd_index_today_dw">%</span>
                    <span v-if="showud1==1">(
                      <Icon :style={color:color2} type="md-arrow-down" size="22" />)</span>
                    <span v-if="showud1!=1">(
                      <Icon :style={color:color1} type="md-arrow-up" size="22" />)</span>
                  </div>
                  <div v-if="isshow2==2" style="margin-top: 20px">暂无数据</div>
                </div>
              </div>
              </Col>
              <Col span="7">
              <div class="lyrd_index_count_content">
                <div class="lyrd_index_count_bg3"></div>
                <div class="lyrd_index_count_num">
                  <div>
                    <span class="lyrd_index_today_visit">与上月同比</span>

                  </div>
                  <div v-if="isshow3==1">
                    <span class="lyrd_index_today_num">{{link}}</span>
                    <span class="lyrd_index_today_dw">%</span>
                    <span v-if="showud2==1">(
                      <Icon :style={color:color1} type="md-arrow-up" size="22" />)</span>
                    <span v-if="showud2!=1">(
                      <Icon :style={color:color2} type="md-arrow-down" size="22" />)</span>
                  </div>
                  <div v-if="isshow3==2" style="margin-top: 20px">暂无数据</div>
                </div>
              </div>
              </Col>
            </Row>
          </div>
          <div v-show="citysenic1===''">
          <div class="lyrd_index_jryk"  v-if="isshowmap!=0">
            <div class="lyrd_index_jryk_title">
              <span class="lyrd_index_search_title">{{btitle}}游客所占比例</span>
              <!--{{(this.datefff).toString().substring(8,10)}}日-->
            </div>
            <div>
              <div id="mybar" style="height:220px;min-width: 400px;"></div>
            </div>
          </div>
          <div class="lyrd_index_jryk1" v-if="isshowmap==0">
            <div class="lyrd_index_jryk_title">
              <span class="lyrd_index_search_title">{{btitle}}游客所占比例</span>
              <!--{{(this.datefff).toString().substring(8,10)}}日-->
            </div>
            <Row >
              <Col span="12">
                <x_map :mapdata="this.pieData2map" style="width: 100%;height: 500px;"></x_map>
              </Col>
              <Col span="12" style="display: flex;justify-items: center;padding: 20px;">
                <ul class="ul">
                  <li v-for="item in pieData1">{{item.name}}</li>
                </ul>
              </Col>
            </Row>

          </div>
          </div>
        </card>

        <!-- 客流统计开始 -->
        <card class="lyrd_index_kltj">
          <div class="lyrd_index_search">
            <div class="lyrd_index_search_left">
              <span class="lyrd_index_search_title">客流统计</span>

            </div>
            <div class="lyrd_index_search_right">
              <RadioGroup v-model="dateChoice2" type="button">
                <Radio label="3">最近7天</Radio>
                <Radio label="4">最近30天</Radio>
              </RadioGroup>
              <DatePicker v-model="date1" format="yyyy-MM-dd" type="daterange" placeholder="请选择日期" placement="bottom-end" style="width:220px" @on-change="form1change1"></DatePicker>
              <Select v-model="city1" style="width:120px;" @on-change="form1change12">
                <Option v-for="item in cityData" :value="item.id">{{item.name}}</Option>
              </Select>
              <Select v-model="citysenic2" style="width:120px;" placeholder="景区" @on-change="form1change1">
                <Option value="" v-if="senicData2.length==0" disabled>请先选择州市</Option>
                <Option v-for="item in senicData2" :value="item.id">{{item.name}}</Option>
              </Select>
            </div>
          </div>
          <div class="lyrd_index_kltj_chart">
            <div class="lyrd_index_kltj_chart_left">
              <div class="lyrd_index_kltj_chart_bg"></div>
              <div class="lyrd_index_kltj_chart_num">
                <div>
                  <span class="lyrd_index_today_visit">累积游客接待量</span>

                </div>
                <div>
                  <span class="lyrd_index_today_num">{{totalP.toString().substring(0,totalP.toString().length-3)}}</span>
                  <span class="lyrd_index_today_dw">人次</span>
                </div>
              </div>

            </div>
            <div class="lyrd_index_kltj_chart_right">
              <!-- <div >
                <span style="color: #000;font-weight:bold;font-size:14px;padding: 20px">客流趋势分析 </span>
                <span style="color: #a5a5a5;font-size:12px;">(人次：万)</span>
              </div> -->
              <div id="myline" style="width:100%;height:280px;min-width: 400px;"></div>
            </div>
          </div>
        </card>
        <!-- 客流统计结束 -->
      </div>


  </div>
</template>
<script>
import http from "@/http.js";
import "../../dateFormate.js";
import indexMap from '../../components/map/indexMap'
export default {
  components:{
    "x_map":indexMap
  },
  data() {
    return {
      isshowmap1:1,
      disoptionsdate: {
        disabledDate (date) {
          return date< new Date(2018,7,1) || date > new Date()
        }
      },
      isshow1:1,
      isshow2:1,
      isshow3:1,
      isshowmap:'',
      btitle: "各市州",
      showud1: 1,
      showud2: 2,
      color1: "#ffbb00",
      color2: "green",
      dateChoice1: "1",
      dateChoice2: "3",
      totalP: "",
      lineDatax: [],
      lineDatay: [],
      datefff: http.getToday(),
      cdate: "",
      date1: [http.getWeekAgo(), http.getToday()],
      cityData: [],
      senicData: [],
      senicData2: [],
      citysenic1:'',
      citysenic2:'',
      city: "",
      city1: "",
      start: "",
      end: "",
      pieData: [],
      pieData1: [
        {
          name: "",
          value: ""
        },
      ],
      pieData2map: [
        {
          name: "",
          value: ""
        },
      ],
      total: "",
      ratio: "",
      link: "",
      options2: {
        shortcuts: [
          {
            text: "最近7天",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              return [start, end];
            },
            onClick: picker => {}
          },
          {
            text: "最近30天",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              return [start, end];
            }
          }
        ]
      }
    };
  },
  mounted() {
    setTimeout(() => {
      this.initLine();
    }, 50);
    this.getCity();
    this.form1change1()
    //this.init()
  },
  methods: {
    getCity() {
      http.get("bi/get_all_city_prov", {}).then(resp => {
        this.cityData = resp.data.hits;
        this.city = resp.data.hits[0].id;
        this.city1 = resp.data.hits[0].id;
        http.get('bi/get_scenic_by_city', {city_id: this.city}).then(resp => {
          if (resp.data.errcode === 0) {
            this.senicData = resp.data.hits
            this.senicData2 = resp.data.hits
          }
        })
      });

      this.datefff = http.getToday();
      this.pieData1 = [];
      this.pieData2map = [];
      http
        .get("bi/get_tourism_dist_by_date", {
          date: http.gmt2str(this.datefff),
          city_id: this.city
        })
        .then(resp => {
          this.pieData = resp.data.hits;
          for (var i = 0; i < resp.data.hits.length; i++) {
            this.pieData1.push({
              name:
                resp.data.hits[i].name +
                " " +
                resp.data.hits[i].proportion +
                "%",
              value: resp.data.hits[i].value
            });
          }
          this.pieData2map = [];
          for (var i = 0; i < resp.data.hits.length; i++) {
            this.pieData2map.push({
              name:resp.data.hits[i].name,
              value: resp.data.hits[i].proportion
            });
          }
          this.initBar();
        });
      http
        .get("bi/get_tourism_qty_by_date", {
          date: http.gmt2str(this.datefff),
          city_id: this.city
        })
        .then(resp => {
          this.total = resp.data.hits.total.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
          if (this.total=='0.00'){
            this.isshow1=2
          }else {
            this.isshow1=1
          }
          if (resp.data.hits.pred==-1){
            this.isshow2=2
          }else {
            this.isshow2=1
          }

          if (resp.data.hits.ratio===0){
            this.isshow2=2
          }else {
            this.isshow2=1
          }
          if (resp.data.hits.pred==-1){
            this.isshow3=2
          } else {
            this.isshow3=1
          }
          if (resp.data.hits.link===-100||resp.data.hits.link===0){
            this.isshow3=2
          } else {
            this.isshow3=1
          }
          if (resp.data.hits.ratio < 0) {
            this.ratio = -resp.data.hits.ratio;
            this.showud1 = 1;
          } else {
            this.ratio = resp.data.hits.ratio;
            this.showud1 = 2;
          }
          if (resp.data.hits.link < 0) {
            this.link = -resp.data.hits.link;
            this.showud2 = 2;
          } else {
            this.link = resp.data.hits.link;
            this.showud2 = 1;
          }
        });
    },
    initBar() {
      let apieData1 = this.pieData1.sort((v1, v2) => v2.value - v1.value);
      let mybar = this.$echarts.init(
        document.getElementById("mybar"),
        "macarons"
      );
      mybar.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{b} ",
          backgroundColor: "#323232"
        },
        grid:{

        },
        legend: {
          top:"22%",
          right: "20%",
          y: "26%",
          icon: "circle",
          orient: "horizontal",
          width:"40%",
          // right: 10,
          // top: 20,
          // bottom: 20,
          data: apieData1.map(item => item.name)
        },
        series: [
          {
            name: "今日接待",
            type: "pie",
            center: ["25%", "50%"],
            radius: "80%",
            avoidLabelOverlap: false,
            data: apieData1,
            itemStyle: {
              normal: {
                borderColor: "#FFFFFF",
                borderWidth: 1.5,
                label: {
                  show: false,
                  formatter: "{b} : {c} \n ({d}%)"
                },
                labelLine: {
                  show: false
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
          "#47cc50"
        ]
      });
    },
    initLine() {
      let myline = this.$echarts.init(
        document.getElementById("myline"),
        "macarons"
      );
      myline.setOption({
        title: {
          show: true,
          text: "客流趋势分析",
          textStyle: {
            fontSize: 14,
            color: "black"
          },
          x: "2%",
          top: 20
        },
        grid: {
          top: "30%",
          left:"5%",
          right:"5%",
          width:'90%'
        },
        tooltip: {
          trigger: "axis",
          backgroundColor: "#323232",
          formatter: "{b} : {c} 万"
        },
        xAxis: {
          type: "category",
          data: this.lineDatax,
          axisLine: {
            lineStyle: {
              color: "#888888",
              width: 2
            }
          }
        },
        yAxis: {
          name: "万人",
          nameTextStyle: {
            color: '#999'
          },
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#888888",
              width: 2
            }
          }
        },
        lineStyle: {
          color: "#006EFF"
        },
        itemStyle: {
          normal: {
            color: "#00FF00"
          }
        },
        series: [
          {
            data: this.lineDatay,
            type: "line",
            smooth: false,
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#006eff" // 0% 处的颜色
                  },
                  {
                    offset: 0.7,
                    color: "rgba(255, 255, 255, 0.5)" // 100% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(255, 255, 255, 0.0)" // 100% 处的颜色
                  }
                ],
                globalCoord: false // 缺省为 false
              }
            }
          }
        ]
      });
    },
    click(val) {
      this.$router.push(val);
    },
    form1change3(){
      this.citysenic1=''
      this.form1change()
    },
    form1change() {
      if (this.citysenic1=='') {
        this.isshowmap1 = 1
        console.log('this.isshowmap', this.isshowmap)
        this.isshowmap1 = 1
        if (this.city == 0 || this.city == "undefied" || this.city == null) {
          this.btitle = "各市州";
          this.isshowmap = 0
        } else {
          this.btitle = "各景区";
          this.isshowmap = 1
        }
        this.pieData1 = [];
        http.get('bi/get_scenic_by_city', {city_id: this.city}).then(resp => {
          if (resp.data.errcode === 0) {
            this.senicData = resp.data.hits
          }
          this.citysenic1 = ''
          console.log(this.citysenic1 === '')
          this.isshowmap1 = 1
          console.log('ssssssssss', this.isshowmap1)
        })
        http
          .get("bi/get_tourism_dist_by_date", {
            date: http.gmt2str(this.datefff),
            city_id: this.city
          })
          .then(resp => {
            this.pieData = resp.data.hits;
            for (var i = 0; i < resp.data.hits.length; i++) {
              this.pieData1.push({
                name:
                  resp.data.hits[i].name +
                  " " +
                  resp.data.hits[i].proportion +
                  "%",
                value: resp.data.hits[i].value
              });
            }
            this.pieData2map = [];
            for (var i = 0; i < resp.data.hits.length; i++) {
              this.pieData2map.push({
                name: resp.data.hits[i].name,
                value: resp.data.hits[i].proportion
              });
            }
            this.initBar();
          });
        http
          .get("bi/get_tourism_qty_by_date", {
            date: http.gmt2str(this.datefff),
            city_id: this.city,
            scenic: this.citysenic1
          })
          .then(resp => {
            this.total = resp.data.hits.total.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
            if (this.total == '0.00') {
              this.isshow1 = 2
            } else {
              this.isshow1 = 1
            }
            if (resp.data.hits.pred == -1) {
              this.isshow3 = 2
            } else {
              this.isshow3 = 1
            }
            if (resp.data.hits.prem == -1) {
              this.isshow2 = 2
            } else {
              this.isshow2 = 1
            }
            if (resp.data.hits.ratio === 0) {
              this.isshow2 = 2
            } else {
              this.isshow2 = 1
            }
            if (resp.data.hits.link === -100 || resp.data.hits.link === 0) {
              this.isshow3 = 2
            } else {
              this.isshow3 = 1
            }
            if (resp.data.hits.ratio < 0) {
              this.ratio = -resp.data.hits.ratio;
              this.showud1 = 1;
            } else {
              this.ratio = resp.data.hits.ratio;
              this.showud1 = 2;
            }
            if (resp.data.hits.link < 0) {
              this.link = -resp.data.hits.link;
              this.showud2 = 2;
            } else {
              this.link = resp.data.hits.link;
              this.showud2 = 1;
            }
          });
      }else {
        this.isshowmap1=2
        http
          .get("bi/get_tourism_qty_by_date", {
            date: http.gmt2str(this.datefff),
            city_id: this.city,
            scenic: this.citysenic1
          })
          .then(resp => {
            this.total = resp.data.hits.total.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
            if (this.total == '0.00') {
              this.isshow1 = 2
            } else {
              this.isshow1 = 1
            }
            if (resp.data.hits.pred == -1) {
              this.isshow3 = 2
            } else {
              this.isshow3 = 1
            }
            if (resp.data.hits.prem == -1) {
              this.isshow2 = 2
            } else {
              this.isshow2 = 1
            }
            if (resp.data.hits.ratio === 0) {
              this.isshow2 = 2
            } else {
              this.isshow2 = 1
            }
            if (resp.data.hits.link === -100 || resp.data.hits.link === 0) {
              this.isshow3 = 2
            } else {
              this.isshow3 = 1
            }
            if (resp.data.hits.ratio < 0) {
              this.ratio = -resp.data.hits.ratio;
              this.showud1 = 1;
            } else {
              this.ratio = resp.data.hits.ratio;
              this.showud1 = 2;
            }
            if (resp.data.hits.link < 0) {
              this.link = -resp.data.hits.link;
              this.showud2 = 2;
            } else {
              this.link = resp.data.hits.link;
              this.showud2 = 1;
            }
          });
      }
    },
    form1change12(){
      http.get('bi/get_scenic_by_city',{city_id:this.city1}).then(resp=>{
        this.senicData2=resp.data.hits
        this.citysenic2=''
      })
      this.form1change1()
    },
    form1change1() {
      this.totalP = "";
      this.lineDatax = [];
      this.lineDatay = [];

      http
        .get("bi/get_tourism_trend_by_timespan", {
          startTime: http.gmt2str(this.date1[0]),
          endTime: http.gmt2str(this.date1[1]),
          city_id: this.city1,
          scenic: this.citysenic2
        })
        .then(resp => {
          this.totalP = resp.data.hits.total.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');//使用正则替换，每隔三个数加一个',';
          for (var i = 0; i < resp.data.hits.list.length; i++) {
            this.lineDatax.push(resp.data.hits.list[i].date);
            this.lineDatay.push(parseInt(resp.data.hits.list[i].value/100) / 100);
          }
          this.initLine();
        });
    },
    form1change2() {
      this.totalP = "";
      this.lineDatax = [];
      this.lineDatay = [];
      http
        .get("bi/get_tourism_trend_by_timespan", {
          startTime: http.gmt2str(this.date1[0]),
          endTime: http.gmt2str(this.date1[1]),
          city_id: this.city1,
          scenic: this.citysenic2
        })
        .then(resp => {
          this.totalP = resp.data.hits.total.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');//使用正则替换，每隔三个数加一个',';
          for (var i = 0; i < resp.data.hits.list.length; i++) {
            this.lineDatax.push(resp.data.hits.list[i].date);
            his.lineDatay.push(parseInt(resp.data.hits.list[i].value/100) / 100);
          }
          this.initLine();
        });
    },
    p2() {
      if (this.dateChoice2 == 3) {
        this.date1 = [http.getWeekAgo(), http.getToday()];
        this.form1change1()
      }
      if (this.dateChoice2 == 4) {
        this.date1 = [http.getMonthAgo(), http.getToday()];
        this.form1change1()
      }
    },
    p1() {
      if (this.dateChoice1 == 1) {
        this.datefff = http.getToday();
        this.pieData1 = [];
        this.pieData2map = [];
        http
          .get("bi/get_tourism_dist_by_date", {
            date: http.gmt2str(this.datefff),
            city_id: this.city
          })
          .then(resp => {
            this.pieData = resp.data.hits;
            for (var i = 0; i < resp.data.hits.length; i++) {
              this.pieData1.push({
                name:
                  resp.data.hits[i].name +
                  " " +
                  resp.data.hits[i].proportion +
                  "%",
                value: resp.data.hits[i].value
              });
            }
            this.pieData2map = [];
            for (var i = 0; i < resp.data.hits.length; i++) {
              this.pieData2map.push({
                name: resp.data.hits[i].name,
                value: resp.data.hits[i].proportion
              });
            }
            this.initBar();
          });
        http
          .get("bi/get_tourism_qty_by_date", {
            date: http.gmt2str(this.datefff),
            city_id: this.city
          })
          .then(resp => {
            this.total = resp.data.hits.total.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
            if (this.total=='0.00'){
              this.isshow1=2
            }else {
              this.isshow1=1
            }
            if (resp.data.hits.pred==-1){
              this.isshow3=2
            } else {
              this.isshow3=1
            }
            if (resp.data.hits.prem==-1){
              this.isshow2=2
            } else {
              this.isshow2=1
            }
            if (resp.data.hits.ratio===0){
              this.isshow2=2
            }else {
              this.isshow2=1
            }
            if (resp.data.hits.link===-100||resp.data.hits.link===0){
              this.isshow3=2
            } else {
              this.isshow3=1
            }
            if (resp.data.hits.ratio < 0) {
              this.ratio = -resp.data.hits.ratio;
              this.showud1 = 1;
            } else {
              this.ratio = resp.data.hits.ratio;
              this.showud1 = 2;
            }
            if (resp.data.hits.link < 0) {
              this.link = -resp.data.hits.link;
              this.showud2 = 2;
            } else {
              this.link = resp.data.hits.link;
              this.showud2 = 1;
            }
          });
      }
      if (this.dateChoice1 == 2) {
        this.datefff = http.getYesterDay();
        this.pieData1 = [];
        this.pieData2map = [];
        http
          .get("bi/get_tourism_dist_by_date", {
            date: http.gmt2str(this.datefff),
            city_id: this.city
          })
          .then(resp => {
            this.pieData = resp.data.hits;
            for (var i = 0; i < resp.data.hits.length; i++) {
              this.pieData1.push({
                name:
                  resp.data.hits[i].name +
                  " " +
                  resp.data.hits[i].proportion +
                  "%",
                value: resp.data.hits[i].value
              });
            }
            this.pieData2map = [];
            for (var i = 0; i < resp.data.hits.length; i++) {
              this.pieData2map.push({
                name: resp.data.hits[i].name,
                value: resp.data.hits[i].proportion
              });
            }
            this.initBar();
          });
        http
          .get("bi/get_tourism_qty_by_date", {
            date: http.gmt2str(this.datefff),
            city_id: this.city
          })
          .then(resp => {
            this.total = resp.data.hits.total.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
            if (this.total=='0.00'){
              this.isshow1=2
            }else {
              this.isshow1=1
            }
            if (resp.data.hits.pred==-1){
              this.isshow3=2
            } else {
              this.isshow3=1
            }
            if (resp.data.hits.prem==-1){
              this.isshow2=2
            } else {
              this.isshow2=1
            }
            if (resp.data.hits.ratio===0){
              this.isshow2=2
            }else {
              this.isshow2=1
            }
            if (resp.data.hits.link===-100||resp.data.hits.link===0){
              this.isshow3=2
            } else {
              this.isshow3=1
            }
            if (resp.data.hits.ratio < 0) {
              this.ratio = -resp.data.hits.ratio;
              this.showud1 = 1;
            } else {
              this.ratio = resp.data.hits.ratio;
              this.showud1 = 2;
            }
            if (resp.data.hits.link < 0) {
              this.link = -resp.data.hits.link;
              this.showud2 = 2;
            } else {
              this.link = resp.data.hits.link;
              this.showud2 = 1;
            }
          });
      }
    },
    handleChange(date) {
      if (date == http.getToday()) {
        this.dateChoice1 == 1;
      }
      if (date == http.getYesterDay()) {
        this.dateChoice1 == 2;
      }
      this.datefff = date;
      this.pieData1 = [];
      this.pieData2map = [];
      http
        .get("bi/get_tourism_dist_by_date", {
          date: http.gmt2str(this.datefff),
          city_id: this.city
        })
        .then(resp => {
          this.pieData = resp.data.hits;
          for (var i = 0; i < resp.data.hits.length; i++) {
            this.pieData1.push({
              name:
                resp.data.hits[i].name +
                " " +
                resp.data.hits[i].proportion +
                "%",
              value: resp.data.hits[i].value
            });
          }
          this.pieData2map = [];
          for (var i = 0; i < resp.data.hits.length; i++) {
            this.pieData2map.push({
              name: resp.data.hits[i].name,
              value: resp.data.hits[i].proportion
            });
          }
          this.initBar();
        });
      http
        .get("bi/get_tourism_qty_by_date", {
          date: http.gmt2str(this.datefff),
          city_id: this.city
        })
        .then(resp => {
          this.total = resp.data.hits.total.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
          if (this.total=='0.00'){
            this.isshow1=2
          }else {
            this.isshow1=1
          }
          if (resp.data.hits.pred==-1){
            this.isshow3=2
          } else {
            this.isshow3=1
          }
          if (resp.data.hits.prem==-1){
            this.isshow2=2
          } else {
            this.isshow2=1
          }
          if (resp.data.hits.ratio===0){
            this.isshow2=2
          }else {
            this.isshow2=1
          }
          if (resp.data.hits.link===-100||resp.data.hits.link===0){
            this.isshow3=2
          } else {
            this.isshow3=1
          }
          if (resp.data.hits.ratio < 0) {
            this.ratio = -resp.data.hits.ratio;
            this.showud1 = 1;
          } else {
            this.ratio = resp.data.hits.ratio;
            this.showud1 = 2;
          }
          if (resp.data.hits.link < 0) {
            this.link = -resp.data.hits.link;
            this.showud2 = 2;
          } else {
            this.link = resp.data.hits.link;
            this.showud2 = 1;
          }
        });
    },
    citp(){
      if (this.city == 0 || this.city == "undefied" || this.city == null) {
        this.btitle = "各市州";
        this.isshowmap=0
      } else {
        this.btitle = "各景区";
        this.isshowmap=1
      }
    }
  },

  watch: {
     city: 'citp',
    //date1: "form1change1",
    // city1: 'form1change1',
    dateChoice1: "p1",
    dateChoice2: "p2"
  }
};
</script>
<style lang="less" scoped>
  .ul{
    list-style: none outside none; margin:0; padding: 0;margin-top: 120px;
  }
  .ul li{ float:left;   width: 140px;  padding: 10px; border-bottom: 1px solid #dbdbdb   }
  .ti {
    margin-bottom: unset !important;
  color: #000;
  font-size: 16px;
  font-weight: 600;
  line-height: 60px;
  padding-left: 20px;
  height: 60px;
  background-color: #fff;
    border-bottom: 1px solid #e2e4e6;
}

.tis {
  margin-bottom: 20px;
  color: #000;
  font-size: 14px;
  font-weight: 700;
}

.lyrd_sy_content {
  background: #f2f2f2;
  padding: 20px;
}

.lyrd_sy_ykrs {
  width: 100%;
  background: #fff;
  padding-bottom: 1px;
}

.lyrd_index_search {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  // line-height: 70px;
  padding: 0 20px;
}

.lyrd_index_search_title {
  font-size: 14px;
  font-weight: 700;
  padding-right: 8px;
  color: #000;
  vertical-align: middle;
  vertical-align: -webkit-baseline-middle;
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
.lyrd_index_jryk1 {
  margin: 25px 20px;
  border: 1px solid #dcdee2;
  height: 564.4px;
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



