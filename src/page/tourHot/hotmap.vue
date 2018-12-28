<template>
  <div>
    <div class="tit">
      <span style="color: rgb(102, 159, 199);">旅游热度</span>
      <Icon type="ios-arrow-forward"/>
      <span style="font-size: 12px;color: #000">景区客流热力</span>
    </div>
    <div class="tabpane_content">
      <card>
        <div style="margin-bottom: 20px">
          <div class="tabpane_content_title">
            <div>
              <span style="font-weight: bold;color: #000000">景区客流热力分布图</span>
            </div>
          </div>
          <Select style="width: 120px" v-model="city11" @on-change="sinic">
            <Option v-for="item in cityData" :value="item.id" :key="item.id">{{item.name}}</Option>
          </Select>
          <Select style="width: 120px" v-model="senic_id" @on-change="searchformi">
            <Option v-for="item in senicData" :value="item.id" :key="item.id">{{item.name}}</Option>
          </Select>
          <DatePicker type="date" v-model="date11" @on-change="searchformi" placeholder="自选时间" style="width: 120px"
                      :options="disoptionsdate"></DatePicker>
          <!--   <Select style="width: 150px">
               <Option value="城市">城市</Option>
             </Select>-->
          <Select style="width: 120px" v-model="power" @on-change="searchformi">
            <Option value="60">60分钟</Option>
            <Option value="30">30分钟</Option>
            <Option value="15">15分钟</Option>
          </Select>
        </div>
        <div>
          <iframe name="ifmap" :src="iframeSrc" style="width: 100%;height: 470px;border: 0px"></iframe>
        <!--  <hot_map :x2="this.hotmapx" :x3="hotmapd" :x4="this.hotmapll" style="width: 100%;height: 400px;"
                   class="heatmap">
          </hot_map>-->
          <!--      <div id="hotmap" style="width: 100%;height: 400px;" class="heatmap">
                   <div class="visualmap">
                     <div>
                       <span>颜色对应人口密度</span>
                       <span style="float:right; margin-right:10px;">人/100平方米</span>
                     </div>
                     <div class="bargrad"></div>
                     <div class="range">
                       <span>0-55</span>
                       <span>56-121</span>
                       <span>122-187</span>
                       <span>188-221</span>
                       <span>>221</span>
                     </div>
                   </div>

                 </div>-->
        </div>
        <!--<div id="timeline" style="width: 100%;height: 60px;"></div>-->
      </card>
      <card class="card_margin">
        <div style="margin-bottom: 20px">
          <div class="tabpane_content_title">
            <div>
              <span style="font-weight: bold;color: #000000">景区接待游客人数</span>

            </div>
            <div>
              <DatePicker v-model="picDate6" type="date" placeholder="Select date"
                          style="width: 120px;" :options="disoptionsdate"></DatePicker>

              <Select style="width: 120px" v-model="city11">
                <Option v-for="item in cityData" :value="item.id" :key="item.id">{{item.name}}</Option>
              </Select>
              <Select style="width: 120px" v-model="senic_id5">
                <Option v-for="item in senicData" :value="item.id" :key="item.id">{{item.name}}</Option>
              </Select>
            </div>
          </div>
          <div style="height:75px;width: 100%;border: 1px solid #dcdee2" v-if="is1==2">
            <span style="position: absolute;margin-top: 30px;margin-left: 38%;color: #000;">景区已闭园，当日峰值游客人数为<span
              style="color: rgb(0, 110, 255)">{{daymount}}</span>人</span>
          </div>
          <div class="hotmap_kljd" v-if="is1==1">
            <Row>
              <Col span="10">
                <div class="hotmap_tb1">
                  <div class="lyrd_hotmap_count_bg1"></div>
                  <div class="lyrd_hotmap_num">
                    <div class="lyrd_hotmap_desc">景区实时游客人数</div>
                    <div v-if="isshowd1==1">
                      <span class="lyrd_hotmap_today_num">{{currentTime}}</span>
                      <span class="lyrd_hotmap_today_dw">人</span>
                      <span v-if="fisshow==2">(当日峰值{{daymount}})</span>
                      <span v-if="fisshow==1" style="color: red">(当日峰值{{daymount}})</span>
                      <span>(最优承载量{{fit_capacity}})</span>
                    </div>
                    <div v-if="isshowd1==2" style="margin-top: 20px">暂无历史数据</div>
                  </div>
                </div>
              </Col>
              <Col span="7">
                <div class="hotmap_tb">
                  <div class="lyrd_hotmap_count_bg1"></div>
                  <div class="lyrd_hotmap_num">
                    <div class="lyrd_hotmap_desc">与昨日环比</div>
                    <div v-if="isshowd2==1">
                      <span class="lyrd_hotmap_today_num">{{ratio}}</span>
                      <span class="lyrd_hotmap_today_dw">%</span>
                      <span v-if="showud1==1">(<Icon :style={color:color2} type="md-arrow-down" size="22"/>)</span>
                      <span v-if="showud1!=1">(<Icon :style={color:color1} type="md-arrow-up" size="22"/>)</span>
                    </div>
                    <div v-if="isshowd2==2" style="margin-top: 20px">暂无历史数据</div>
                  </div>
                </div>
              </Col>
              <Col span="7">
                <div class="hotmap_tb">
                  <div class="lyrd_hotmap_count_bg2"></div>
                  <div class="lyrd_hotmap_num">
                    <div class="lyrd_hotmap_desc">与上月同比</div>
                    <div v-if="isshowd3==1">
                      <span class="lyrd_hotmap_today_num">{{link}}</span>
                      <span class="lyrd_hotmap_today_dw">%</span>
                      <span v-if="showud2==1">(<Icon :style={color:color2} type="md-arrow-down" size="22"/>)</span>
                      <span v-if="showud2!=1">(<Icon :style={color:color1} type="md-arrow-up" size="22"/>)</span>
                    </div>
                    <div v-if="isshowd3==2" style="margin-top: 20px">暂无历史数据</div>
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

            </div>
          </div>
          <div>
            <Select style="width: 120px" v-model="city11">
              <Option v-for="item in cityData" :value="item.id" :key="item.id">{{item.name}}</Option>
            </Select>
            <DatePicker v-model="da1" type="date" placeholder="Select date"
                        style="width: 130px;" @on-change="picd" :options="disoptionsdate"></DatePicker>
            <Select style="width: 120px" v-model="power1" @on-change="picd">
              <Option value="60">60分钟</Option>
              <Option value="30">30分钟</Option>
            </Select>
          </div>
          <div style="margin-top: 10px">
            <Select style="width: 120px" v-model="modelsenic">
              <Option v-for="item in senicData" :value="item.id" :key="item.id">{{item.name}}</Option>
            </Select>
            <DatePicker v-model="da2" type="date" placeholder="Select date"
                        style="width: 130px;" @on-change="picd" :options="disoptionsdate"></DatePicker>
            <span style="margin-left: 5px">选择对比日期</span>
          </div>
          <div class="hotmap_klqs">
            <div id="mybar" style="height:480px;width: 100%;"></div>
            <span style="position: absolute;margin-left: 76px;margin-top: -24px">景区开放时间为：{{openTime}}</span>

          </div>
        </div>
      </card>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .mapContainer {
    position: relative;
  }

  .mapContainer .heatmap {
    width: 100%;
    height: 600px
  }

  .mapContainer .visualmap {
    width: 350px;
    height: 70px;
    background-color: rgba(0, 0, 0, 0.45);
    position: absolute;
    right: 10px;
    bottom: 10px;
    z-index: 1;
  }

  .mapContainer .visualmap div {
    color: #fff;
    margin-top: 10px;
    margin-left: 10px;
  }

  .mapContainer .visualmap .range {
    margin-top: 5px;
  }

  .mapContainer .visualmap .range span {
    margin-left: 15px;
    margin-right: 5px;
  }

  .mapContainer .visualmap .bargrad {
    background: -webkit-linear-gradient(left, red, orange, yellow, green, blue);
    background: -o-linear-gradient(left, red, orange, yellow, green, blue);
    background: -moz-linear-gradient(left, red, orange, yellow, green, blue);
    background: linear-gradient(to left, red, orange, yellow, #4cff2f, #47fff4, blue);
    height: 10px;
    border-radius: 5px;
    position: relative;
    margin: 5px 10px 0px 10px;
    z-index: 2;
    background-color: #fff;
  }

  .tit {
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

  .lyrd_hotmap_desc1 {
    font-size: 14px;
    font-weight: 600;
    color: #000;
    line-height: 18px;
    vertical-align: top;
  }

  .hotmap_tb {
    margin: 55px 0px 55px 40px;
    padding: 10px 0px 0px 25px;
    border-left: 1px solid #dcdee2;
    display: flex;
  }

  .hotmap_tb1 {
    margin: 55px 0px 55px 40px;
    padding: 10px 0px 0px 25px;
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
  // import AMap from "AMap";
  import hottk from '../../components/map/hotMap'
  import Bus from '@/Bus.js'
  var map;
  var heatmap;
  var testData;
  export default {
    components: {
      "hot_map": hottk
    },
    data() {
      return {
        iframeSrc:'',
        openTime: '',
        is1: 2,
        isshowd1: 1,
        isshowd2: 1,
        isshowd3: 1,
        initMapData: [],
        senic_id: 'e4fc748a-a60c-4716-687b-01254d621833',
        senic_id5: 'e4fc748a-a60c-4716-687b-01254d621833',
        senicData: [],
        showud1: 2,
        showud2: 1,
        color1: '#ffbb00',
        color2: 'green',
        playState: false,
        centerx: [],
        mapx: [],
        da1: http.getToday(),
        da2: http.getYesterDay(),
        modelcity: '',
        modelsenic: 'e4fc748a-a60c-4716-687b-01254d621833',
        power: '60',
        power1: '60',
        city11: '',
        date11: http.getToday(),
        dataIndex: 0,
        x: 0,
        x1:0,
        x2:0,
        timelines: [],
        lineDatax: [],
        lineDatay1: [],
        lineDatayn1: '',
        lineDatay2: [],
        lineDatayn2: '',
        today: http.getToday(),
        piccity: '',
        mapData: [],
        single: true,
        cityData: [],
        link: '',
        picDate6: http.getToday(),
        ratio: '',
        daymount: '',
        fit_capacity: '',
        fisshow:'',
        currentTime: '',
        touristc: '',
        hotmapx: [],
        hotmapd: [],
        hotmapl: [],
        hotmapll: [],
        disoptionsdate: {
          disabledDate(date) {
            return date < new Date(2018, 7, 1) || date > new Date()
          }
        }
      };
    },
    mounted() {
      this.init();
      http.post('bi/write_run_log',{obj:' 景区客流热力',msg:window.performance.timing.domInteractive - window.performance.timing.domLoading}).then(resp=>{
      })
    },
    methods: {
      init() {

        http.post('bi/get_all_city', {}).then(resp => {
          this.cityData = resp.data.hits;
          this.modelcity = resp.data.hits[0].id
          this.city11 = resp.data.hits[0].id
         // this.iframeSrc ='#hotmaps?city_id='+this.city11
          this.buszz.$emit('city_id',this.city11)
          this.iframeSrc = '/as/#/hotmaps?city_id='+this.city11+'&date='+http.gmt2str(this.date11)+'&scenic='+this.senic_id+'&min='+this.power

          this.piccity = resp.data.hits[0].id
          http.post('bi/get_scenic_by_city', {city_id: this.city11}).then(resp => {
            this.senicData = resp.data.hits
            this.senic_id = this.senicData[0].id
          })
        })
        http.post('bi/get_scenic_tourist_compare_by_date', {
          startTime: http.gmt2str(this.da1),
          startTime1: http.gmt2str(this.da2),

          scenic: this.modelsenic,
          min: this.power1
        }).then(resp => {
          this.openTime = resp.data.scenicObj.busi_time_alias

          if (resp.data.hits.cprlist.length > 0) {
            this.lineDatayn1 = resp.data.hits.cprdate;
            for (var i = 0; i < resp.data.hits.cprlist.length; i++) {
              if (parseInt(resp.data.hits.cprlist[i].n) != -1) {
                this.lineDatay1.push(parseInt(resp.data.hits.cprlist[i].n))
              }
            }
          }
          if (resp.data.hits.curlist.length > 0) {
            this.lineDatayn2 = resp.data.hits.curdate;
            for (var i = 0; i < resp.data.hits.curlist.length; i++) {
              this.lineDatax.push(resp.data.hits.curlist[i].time)
              if (parseInt(resp.data.hits.curlist[i].n) != -1) {
                this.lineDatay2.push(parseInt(resp.data.hits.curlist[i].n))

              }
            }
          }
          this.initline();
        })
        this.hotmapl = []
        http.post('bi/get_scenic_tourist_heat_dist', {
          date: http.gmt2str(this.date11),
          scenic: this.senic_id,
          min: this.power
        }).then(resp => {
          this.hotmapx = [resp.data.hits[0].points[0].lng, resp.data.hits[0].points[0].lat]
          this.hotmapd = resp.data.hits;
          for (var i = 0; i < resp.data.hits.length; i++) {
            this.hotmapl.push(resp.data.hits[i].time)
          }
          this.hotmapll = this.hotmapl
        })
      },
      searchformi() {
        console.log(this.x2)
        if (this.x2==0){
          document.getElementsByName("ifmap")[0].src='/as/#/hotmap1?city_id='+this.city11+'&date='+http.gmt2str(this.date11)+'&scenic='+this.senic_id+'&min='+this.power

          this.x2 =1
          console.log(document.getElementsByName("ifmap"))
          return false
        }
        console.log(this.x2)
        if (this.x2==1){
          document.getElementsByName("ifmap")[0].src='/as/#/hotmaps?city_id='+this.city11+'&date='+http.gmt2str(this.date11)+'&scenic='+this.senic_id+'&min='+this.power

          this.x2 =0
          console.log(document.getElementsByName("ifmap"))
          return false
        }
      },
      picd() {
        this.lineDatay1 = []
        this.lineDatay2 = []
        this.lineDatax = []
        this.lineDatayn1=''
        this.lineDatayn2=''
        http.post('bi/get_scenic_tourist_compare_by_date', {
          startTime: http.gmt2str(this.da1),
          startTime1: http.gmt2str(this.da2),
          scenic: this.modelsenic,
          min: this.power1
        }).then(resp => {
          this.openTime = resp.data.scenicObj.busi_time_alias
          if (resp.data.hits.cprlist.length > 0) {
            this.lineDatayn1 = resp.data.hits.cprdate;
            for (var i = 0; i < resp.data.hits.cprlist.length; i++) {
              if (parseInt(resp.data.hits.cprlist[i].n) != -1) {
                this.lineDatay1.push(parseInt(resp.data.hits.cprlist[i].n))
              }
            }
          }
          if (resp.data.hits.curlist.length > 0) {
            this.lineDatayn2 = resp.data.hits.curdate;
            for (var i = 0; i < resp.data.hits.curlist.length; i++) {
              this.lineDatax.push(resp.data.hits.curlist[i].time)
              if (parseInt(resp.data.hits.curlist[i].n) != -1) {
                this.lineDatay2.push(parseInt(resp.data.hits.curlist[i].n))
              }
            }
          }
          this.initline();
        })
      },
      picds() {
        this.lineDatay1 = []
        this.lineDatay2 = []
        this.lineDatax = []
        this.lineDatayn1=''
        this.lineDatayn2=''
        http.post('bi/get_scenic_tourist_compare_by_date', {
          startTime: http.gmt2str(this.da1),
          startTime1: http.gmt2str(this.da2),
          scenic: this.modelsenic,
          min: this.power1
        }).then(resp => {
          this.openTime = resp.data.scenicObj.busi_time_alias

          if (resp.data.hits.cprlist.length > 0) {
            this.lineDatayn1 = resp.data.hits.cprdate;
            for (var i = 0; i < resp.data.hits.cprlist.length; i++) {
              if (parseInt(resp.data.hits.cprlist[i].n) != -1) {
                this.lineDatay1.push(parseInt(resp.data.hits.cprlist[i].n))
              }
            }
          }
          if (resp.data.hits.curlist.length > 0) {
            this.lineDatayn2 = resp.data.hits.curdate;
            for (var i = 0; i < resp.data.hits.curlist.length; i++) {
              this.lineDatax.push(resp.data.hits.curlist[i].time)
              if (parseInt(resp.data.hits.curlist[i].n) != -1) {
                this.lineDatay2.push(parseInt(resp.data.hits.curlist[i].n))
              }
            }
          }
          this.initline();
        })
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
              detail: {formatter: "{value}%"},
              data: [{value: 50, name: "完成率"}]
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

          tooltip: {
            trigger: "axis",
            //formatter: '{b0}<br />{a1} {c1} 人<br />{a0} {c0} 人',
            //color: 'red'
          },
          legend: {
            bottom: 2,
            left: 'center',
            data: [this.lineDatayn1, this.lineDatayn2]
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "8%",
            containLabel: true
          },
          color: ['#006EFF', '#29CC85'],
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: this.lineDatax
          },
          yAxis: {
            name: "单位：人",
            type: 'value',
            boundaryGap: [0, 0.01],
            splitLine: {
              lineStyle: {
                color: '#e8e8e8'
              }
            }
          },
          series: [
            {
              name: this.lineDatayn1,
              type: "line",
              stack: "总量1",
              data: this.lineDatay1
            },
            {
              name: this.lineDatayn2,
              type: "line",
              stack: "总量2",
              data: this.lineDatay2
            }

          ]
        };
        mybar.setOption(option);
      },
      initlines() {
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
            trigger: "axis",
            //formatter: '{b0}<br />{a1} {c1} 人<br />{a0} {c0} 人',
            //color: 'red'
          },
          legend: {
            bottom: 2,
            left: 'center',
            data: [this.lineDatayn1, this.lineDatayn2]
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "8%",
            containLabel: true
          },
          color: ['#006EFF', '#29CC85'],
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: this.lineDatax
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            splitLine: {
              lineStyle: {
                color: '#e8e8e8'
              }
            }
          },
          series: [
            {
              name: this.lineDatayn1,
              type: "line",
              stack: "总量1",
              data: this.lineDatay1
            }
          ]
        };
        mybar.setOption(option);
      },

      pic1() {
        http.post('bi/get_scenic_tourist_by_date', {
          date: http.gmt2str(this.picDate6),
          scenic: this.senic_id5
        }).then(resp => {
          if (resp.data.hits.isclose == 1) {
            this.is1 = 2
          } else {
            this.is1 = 1
          }
          if (resp.data.hits.link < 0) {
            this.link = -resp.data.hits.link;
            this.showud2 = 1
          } else {
            this.link = resp.data.hits.link;
            this.showud2 = 2
          }
          if (resp.data.hits.ratio < 0) {
            this.ratio = -resp.data.hits.ratio;
            this.showud1 = 1
          } else {
            this.ratio = resp.data.hits.ratio;
            this.showud1 = 2
          }
          this.daymount = http.qfw(resp.data.hits.his);
          this.currentTime = http.qfw(resp.data.hits.real);
          this.fit_capacity = http.qfw(resp.data.hits.fit_capacity);
          if (resp.data.hits.real>=resp.data.hits.fit_capacity) {
            this.fisshow=1
          }else {
            this.fisshow=2
          }
          this.touristc = resp.data.hits.link;
          if (this.daymount == 0) {
            this.isshowd1 = 2
          } else {
            this.isshowd1 = 1
          }
          if (resp.data.hits.prem == -1) {
            this.isshowd3 = 2
          } else {
            this.isshowd3 = 1
          }
          if (resp.data.hits.pred == -1) {
            this.isshowd2 = 2
          } else {
            this.isshowd2 = 1
          }
        })
      },
      sinic() {
        console.log(this.city11)
        let self = this
        http.post('bi/get_scenic_by_city', {city_id: self.city11}).then(resp => {
          self.senicData = resp.data.hits
          self.senic_id = self.senicData[0].id
          if (self.x1==0){
            document.getElementsByName("ifmap")[0].src='/as/#/hotmap2?city_id='+self.city11+'&date='+http.gmt2str(self.date11)+'&scenic='+self.senic_id+'&min='+self.power
            self.x1 =1
            console.log(document.getElementsByName("ifmap"))
            return false
          }
          if (self.x1==1){
            document.getElementsByName("ifmap")[0].src='/as/#/hotmap3?city_id='+self.city11+'&date='+http.gmt2str(self.date11)+'&scenic='+self.senic_id+'&min='+self.power
            self.x1 =0
            console.log(document.getElementsByName("ifmap"))
            return false
          }
        })
      },
      picsb() {
        //this.senicData=[]
        http.post('bi/get_scenic_by_city', {city_id: this.city11}).then(resp => {
          this.senicData = resp.data.hits
          this.senic_id5 = this.senicData[0].id
          this.modelsenic = this.senicData[0].id
        })
      },
      pccsscs() {
        http.post('bi/get_scenic_tourist_by_date', {
          date: http.gmt2str(this.picDate6),
          scenic: this.senic_id5
        }).then(resp => {
          if (resp.data.hits.isclose == 1) {
            this.is1 = 2
          } else {
            this.is1 = 1
          }
          if (resp.data.hits.link < 0) {
            this.link = -resp.data.hits.link;
            this.showud2 = 1
          } else {
            this.link = resp.data.hits.link;
            this.showud2 = 2
          }
          if (resp.data.hits.ratio < 0) {
            this.ratio = -resp.data.hits.ratio;
            this.showud1 = 1
          } else {
            this.ratio = resp.data.hits.ratio;
            this.showud1 = 2
          }
          this.daymount = http.qfw(resp.data.hits.his);
          this.currentTime = http.qfw(resp.data.hits.real);
          this.fit_capacity = http.qfw(resp.data.hits.fit_capacity);
          if (resp.data.hits.real>=resp.data.hits.fit_capacity) {
            this.fisshow=1
          }else {
            this.fisshow=2
          }
          this.touristc = resp.data.hits.link;
          if (this.daymount == 0) {
            this.isshowd1 = 2
          } else {
            this.isshowd1 = 1
          }
          if (resp.data.hits.prem == -1) {
            this.isshowd3 = 2
          } else {
            this.isshowd3 = 1
          }
          if (resp.data.hits.pred == -1) {
            this.isshowd2 = 2
          } else {
            this.isshowd2 = 1
          }
        })
      },
      pspsp() {
        http.get('bi/get_scenic_by_city', {city_id: this.modelcity}).then(resp => {
          this.senicData = resp.data.hits
          this.modelsenic = this.senicData[0].id
        })
      },
      ssdsadfa() {
        //this.pspsp()
        this.lineDatay1 = []
        this.lineDatax = []
        this.lineDatay2 = []
        this.lineDatayn1=''
        this.lineDatayn2=''
        http.get('bi/get_scenic_tourist_compare_by_date', {
          startTime: http.gmt2str(this.da1),
          startTime1: http.gmt2str(this.da2),
          scenic: this.modelsenic,
          min: this.power1
        }).then(resp => {
          this.openTime = resp.data.scenicObj.busi_time_alias
          console.log(resp.data.hits.curlist.length)
          if (resp.data.hits.cprlist.length > 0) {
            this.lineDatayn1 = resp.data.hits.cprdate;
            for (var i = 0; i < resp.data.hits.cprlist.length; i++) {
              if (parseInt(resp.data.hits.cprlist[i].n) != -1) {
                this.lineDatay1.push(parseInt(resp.data.hits.cprlist[i].n))
              }
            }
          }
          if (resp.data.hits.curlist.length > 0) {
            this.lineDatayn2 = resp.data.hits.curdate;
            for (var i = 0; i < resp.data.hits.curlist.length; i++) {
              this.lineDatax.push(resp.data.hits.curlist[i].time)
              if (parseInt(resp.data.hits.curlist[i].n) != -1) {
                this.lineDatay2.push(parseInt(resp.data.hits.curlist[i].n))
              }
            }
          }
          this.initline();
        })
      }
    },
    watch: {
      city11: 'picsb',
      today: 'pic1',
      picDate6: 'pic1',
      //city11:'sinic',
      senic_id: 'p1',
      senic_id5: 'pccsscs',
      //modelcity: 'pspsp',
      modelsenic: 'ssdsadfa',
    }
  };
</script>

