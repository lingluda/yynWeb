<template>
  <div style="height: 100vh">
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
                </div>
              </div>
              <Select style="width: 120px" v-model="city11">
                <Option v-for="item in cityData" :value="item.id">{{item.name}}</Option>
              </Select>
              <Select style="width: 120px" v-model="senic_id">
                <Option v-for="item in senicData" :value="item.id">{{item.name}}</Option>
              </Select>
              <DatePicker type="date" v-model="date11" placeholder="自选时间" style="width: 120px"></DatePicker>
              <!--   <Select style="width: 150px">
                   <Option value="城市">城市</Option>
                 </Select>-->
              <Select style="width: 120px" v-model="power">
                <Option value="60">60分钟</Option>
              </Select>
            </div>
            <div class="mapContainer">

            <div id="hotmap" style="width: 100%;height: 400px;" class="heatmap">
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

            </div>
            </div>
            <div id="timeline" style="width: 100%;height: 60px;"></div>
          </card>
          <card class="card_margin">
            <div style="margin-bottom: 20px">
              <div class="tabpane_content_title">
                <div>
                  <span style="font-weight: bold;color: #000000">景区接待客流数</span>

                </div>
                <div>
                  <DatePicker v-model="picDate6" type="date" placeholder="Select date"
                              style="width: 120px;"></DatePicker>

                  <Select style="width: 120px" v-model="piccity">
                    <Option v-for="item in cityData" :value="item.id">{{item.name}}</Option>
                  </Select>
                  <Select style="width: 120px" v-model="senic_id5">
                    <Option v-for="item in senicData" :value="item.id">{{item.name}}</Option>
                  </Select>
                </div>
              </div>
              <div class="hotmap_kljd">
                <Row>
                  <Col span="10">
                    <div style="margin-top: 20px;margin-left: 80px">
                      <img src="../../assets/imgs/tkhot.png"/>
                    </div>
                    <div style="position: absolute;   top: 75px;   left: 130px; text-align: center">
                      <span style=" font-size: 16px;  font-weight: bold">客流量</span>
                      <p style="font-size: 12px">(单位：人)</p>
                    </div>
                    <div>

                    </div>
                    <div style="position: absolute;  top: 17px;  left: 180px;  font-size: 12px;">
                      <span>日峰值：</span>
                      <span style="font-weight: bold">{{daymount}}</span>
                    </div>

                    <div style="position: absolute;  top: 37px;  left: 180px;  font-size: 12px">
                      <span>当前实时客流人数：</span>
                      <span style="font-weight: bold">{{currentTime}}</span>
                    </div>
                  </Col>
                  <Col span="7">
                    <div class="hotmap_tb">
                      <div class="lyrd_hotmap_count_bg1"></div>
                      <div class="lyrd_hotmap_num">
                        <div class="lyrd_hotmap_desc">与昨日环比</div>
                        <div>
                          <span class="lyrd_hotmap_today_num">{{ratio}}</span>
                          <span class="lyrd_hotmap_today_dw">%</span>
                          <span v-if="showud1==1">(<Icon :style={color:color2} type="md-arrow-down" size="22"/>)</span>
                          <span v-if="showud1!=1">(<Icon :style={color:color1} type="md-arrow-up" size="22"/>)</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col span="7">
                    <div class="hotmap_tb">
                      <div class="lyrd_hotmap_count_bg2"></div>
                      <div class="lyrd_hotmap_num">
                        <div class="lyrd_hotmap_desc">与上月同比</div>
                        <div>
                          <span class="lyrd_hotmap_today_num">{{link}}</span>
                          <span class="lyrd_hotmap_today_dw">%</span>
                          <span v-if="showud1==1">(<Icon :style={color:color2} type="md-arrow-down" size="22"/>)</span>
                          <span v-if="showud1!=1">(<Icon :style={color:color1} type="md-arrow-up" size="22"/>)</span>
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

                </div>
              </div>
              <div>
                <Select style="width: 120px" v-model="modelcity">
                  <Option v-for="item in cityData" :value="item.id">{{item.name}}</Option>
                </Select>
                <DatePicker v-model="da1" type="daterange" show-week-numbers  placeholder="Select date"
                            style="width: 180px;"></DatePicker>
                <Select style="width: 120px" v-model="power1">
                  <Option value="60">60分钟</Option>
                </Select>
              </div>
              <div style="margin-top: 10px">
                <Select style="width: 120px" v-model="modelsenic">
                  <Option v-for="item in senicData" :value="item.id">{{item.name}}</Option>
                </Select>
                <DatePicker v-model="da2" type="daterange" show-week-numbers  placeholder="Select date"
                            style="width: 180px;"></DatePicker>
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
  .mapContainer {position:relative;}
  .mapContainer .heatmap {width:100%;height:600px}
  .mapContainer .visualmap {width:350px; height:70px; background-color:rgba(0,0,0,0.45); position: absolute; right:10px; bottom:10px; z-index:1;}
  .mapContainer .visualmap div {color:#fff; margin-top:10px; margin-left:10px;}
  .mapContainer .visualmap .range {margin-top:5px;}
  .mapContainer .visualmap .range span {margin-left:15px; margin-right:5px;}
  .mapContainer .visualmap .bargrad {
    background: -webkit-linear-gradient(left,red,orange,yellow,green,blue);
    background: -o-linear-gradient(left,red,orange,yellow,green,blue);
    background: -moz-linear-gradient(left,red,orange,yellow,green,blue);
    background: linear-gradient(to left, red,orange,yellow,#4cff2f,#47fff4,blue);
    height:10px; border-radius:5px;position:relative; margin:5px 10px 0px 10px; z-index:2;
    background-color:#fff;}
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
  // import AMap from "AMap";

  var map;
  var heatmap;
  var testData;
  export default {
    data() {
      return {
        senic_id:'80ace0e1-ae1f-4c6f-5f59-813ef365bd6b',
        senic_id5:'80ace0e1-ae1f-4c6f-5f59-813ef365bd6b',
        senicData:[],
        showud1:2,
        showud2:1,
        color1:'red',
        color2:'green',
        playState:false,
        centerx:[],
        mapx:[],
        da1:[http.getWeekAgo(),http.getToday()],
        da2:[http.getWeekAgo(),http.getToday()],
        modelcity:'379',
        modelsenic:'80ace0e1-ae1f-4c6f-5f59-813ef365bd6b',
        power:'60',
        power1:'60',
        city11:'379',
        date11:http.getToday(),
        dataIndex:0,
        x: 0,
        timelines: [],
        lineDatax: [],
        lineDatay1: [],
        lineDatayn1: '',
        lineDatay2: [],
        lineDatayn2: '',
        today: http.getToday(),
        piccity: '379',
        mapData: [],
        single: true,
        cityData: [],
        link: '',
        picDate6: http.getToday(),
        ratio: '',
        daymount: '',
        currentTime: '',
        touristc: '',
      };
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        http.get('bi/get_scenic_by_city',{city_id:this.city11}).then(resp=>{
          console.log(resp.data.hits)
          this.senicData=resp.data.hits
        })
        http.get("bi/get_scenic_tourist_heat_dist", {
          date: http.gmt2str(this.date11),
          scenic: this.senic_id,
          min: this.power
        }).then(resp => {

          this.centerx = [resp.data.hits[0].points[0].lng,resp.data.hits[0].points[0].lat]
          console.log('this.centerx:11111:',resp.data.hits[0].points[0].lng)
          console.log('this.centerx:11111:',resp.data.hits[0].points[0].lat)
          console.log('this.centerx::',this.centerx[0])
          console.log('this.centerx::',this.centerx[1])
          for (var i = 0; i < resp.data.hits.length; i++) {
            this.timelines.push(resp.data.hits[i].time)
          }
          this.initMap(resp.data.hits[0].points);
          this.initTimeline();
        });
        http.get('bi/get_all_city', {}).then(resp => {
          this.cityData = resp.data.hits;
          console.log('this.cityData',this.cityData)
        })
        http.get('bi/get_scenic_tourist_compare_by_date', {
          startTime: http.gmt2str(this.da1[0]),
          startTime1: http.gmt2str(this.da2[0]),
          endTime: http.gmt2str(this.da1[1]),
          endTime1: http.gmt2str(this.da2[1]),
          scenic: this.modelsenic,
          min: this.power1
        }).then(resp => {
          this.lineDatayn1 = resp.data.hits.cprdate;
          console.log('lineDatayn1', this.lineDatayn1)
          for (var i = 0; i < resp.data.hits.cprlist.length; i++) {
            this.lineDatay1.push(parseInt(resp.data.hits.cprlist[i].n))
          }
          this.lineDatayn2 = resp.data.hits.curdate;
          console.log('lineDatayn2', this.lineDatayn2)
          console.log('resp.data.hits.curlist', resp.data.hits.curlist)
          for (var i = 0; i < resp.data.hits.curlist.length; i++) {
            this.lineDatax.push(resp.data.hits.curlist[i].time)
            this.lineDatay2.push(parseInt(resp.data.hits.curlist[i].n))
          }
          console.log('lineDatax', this.lineDatax)
          this.initline();
        })
      },
      initMap: function (fffx) {
        map = new qq.maps.Map(document.getElementById("hotmap"), {
          zoom: 15,
          center: new qq.maps.LatLng(this.centerx[1], this.centerx[0]),
          mapTypeControlOptions: {
            //设置控件的地图类型ID，ROADMAP显示普通街道地图，SATELLITE显示卫星图像，HYBRID显示卫星图像上的主要街道透明层
            mapTypeIds: [
              qq.maps.MapTypeId.ROADMAP,
              qq.maps.MapTypeId.SATELLITE,
              qq.maps.MapTypeId.HYBRID
            ],
            //设置控件位置相对上方中间位置对齐
            position: qq.maps.ControlPosition.TOP_LEFT
          },
          zoomControl: false, //启用缩放控件
          panControl: false,

        });

        //地图异步加载，在idle或者tilesloaded后初始化
        qq.maps.event.addListenerOnce(map, "idle", function () {
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
              data: fffx
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
            type: "value"
          },
          series: [
            {
              name: this.lineDatayn2,
              type: "line",
              stack: "总量",
              data: this.lineDatay2
            },
            {
              name: this.lineDatayn1,
              type: "line",
              stack: "总量",
              data: this.lineDatay1
            }
          ]
        };
        mybar.setOption(option);
      },
      pic1() {
        console.log('get_scenic_tourist_by_date', this.dataIndex)
        http.get('bi/get_scenic_tourist_by_date', {
          date: http.gmt2str(this.picDate6),
          scenic: this.senic_id5
        }).then(resp => {
          if (resp.data.hits.link<0){
            this.link = -resp.data.hits.link;
            this.showud1=1
          } else {
            this.link = resp.data.hits.link;
            this.showud1=2
          }
         if (resp.data.hits.ratio<0){
           this.ratio = -resp.data.hits.ratio;
           this.showud1=1
         } else {
           this.ratio = resp.data.hits.ratio;
           this.showud1=2
         }
          this.daymount = resp.data.hits.his;
          this.currentTime = resp.data.hits.total;
          this.touristc = resp.data.hits.link;
        })
      },
      initTimeline() {
        let self = this
        let timeline = this.$echarts.init(document.getElementById("timeline"))
        timeline.setOption({
          timeline: {   // 时间轴样式
            axisType: 'category',
            data: this.timelines,
            /*playInterval: 5000,
            bottom: '0',
            symbolSize: 5,
            autoPlay: false,
            currentIndex: this.x,
            //loop: true,
            x: 100,

            realtime: true,
            lineStyle: {
              color: '#466872',
              width: 4,
            },
            label: {
              color: '#5cc5da',
              fontSize: 14,
            },

          },*/
            playInterval: 5000,
            bottom: '0',
            symbolSize: 15,
            autoPlay: true,
            currentIndex: this.x,
            loop: true,
            realtime: true,
            width: '95%',
            x: '20px',
            controlPosition: 'right',
            lineStyle: {
              color: '#e5e5e5',
              width: 5,
            },
            label: {
              normal: {
                color: '#adadad',
              },
              fontSize: 12,
              emphasis: {
                color: '#0c70f9',
              },
            },
            checkpointStyle: {
              color: '#0c70f9',
              borderColor: '#0c70f9'
            },
            controlStyle: {
              normal: {color: '#0c70f9'},
              emphasis: {color: '#0c70f9'},
              textStyle: {
                color: '#0c70f9'
              },
            },
          }
        });
        timeline.on('timelinechanged', function (d) {
          self.dataIndex = parseInt(d.currentIndex);
        })
        timeline.on('timelineplaychanged',function(d){
          self.playState = d.playState;
        })

      },
      x1() {
        console.log(this.x)
      },
      dataChange1() {
        http.get("bi/get_scenic_tourist_heat_dist", {
          date: http.gmt2str(this.date11),
          scenic: this.senic_id,
          min: this.power
        }).then(resp => {
          this.initMap(resp.data.hits[this.dataIndex].points);
        });
      },
      play(){
        if (this.playState==true) {
          console.log('timelineplaychanged1111',this.playState)
          http.get("bi/get_scenic_tourist_heat_dist", {
            date: this.date11,
            scenic: this.senic_id,
            min: this.power
          }).then(resp => {
            this.initMap(resp.data.hits[this.dataIndex].points);
          });
        }
        if (this.playState==false) {
          console.log('timelineplaychanged1111',this.dataIndex)
        }

      },
      sinic(){

        console.log(this.city11)
        http.get('bi/get_scenic_by_city',{city_id:this.city11}).then(resp=>{
          console.log(resp.data.hits)
          this.senicData=resp.data.hits
          this.senic_id=this.senicData[0].id
        })
      },
      hmi(){
        this.timelines=[]
        http.get("bi/get_scenic_tourist_heat_dist", {
          date: http.gmt2str(this.date11),
          scenic: this.senic_id,
          min: this.power
        }).then(resp => {

          this.centerx = [resp.data.hits[0].points[0].lng,resp.data.hits[0].points[0].lat]
          console.log('this.centerx:11111:',resp.data.hits[0].points[0].lng)
          console.log('this.centerx:11111:',resp.data.hits[0].points[0].lat)
          console.log('this.centerx::',this.centerx[0])
          console.log('this.centerx::',this.centerx[1])
          for (var i = 0; i < resp.data.hits.length; i++) {
            this.timelines.push(resp.data.hits[i].time)
          }
          this.initMap(resp.data.hits[0].points);
          this.initTimeline();
        });
      },
      datechange1(){
        this.timelines=[]
        http.get("bi/get_scenic_tourist_heat_dist", {
          date: http.gmt2str(this.date11),
          scenic: this.senic_id,
          min: this.power
        }).then(resp => {

          this.centerx = [resp.data.hits[0].points[0].lng,resp.data.hits[0].points[0].lat]
          console.log('this.centerx:11111:',resp.data.hits[0].points[0].lng)
          console.log('this.centerx:11111:',resp.data.hits[0].points[0].lat)
          console.log('this.centerx::',this.centerx[0])
          console.log('this.centerx::',this.centerx[1])
          for (var i = 0; i < resp.data.hits.length; i++) {
            this.timelines.push(resp.data.hits[i].time)
          }
          this.initMap(resp.data.hits[0].points);
          this.initTimeline();
        });
      },
      picsb(){
        http.get('bi/get_scenic_by_city',{city_id:this.piccity}).then(resp=>{
          console.log(resp.data.hits)
          this.senicData=resp.data.hits
          this.senic_id5=this.senicData[0].id
        })
      },
      pccsscs(){
        http.get('bi/get_scenic_tourist_by_date', {
          date: http.gmt2str(this.picDate6),
          scenic: this.senic_id5
        }).then(resp => {
          if (resp.data.hits.link<0){
            this.link = -resp.data.hits.link;
            this.showud1=1
          } else {
            this.link = resp.data.hits.link;
            this.showud1=2
          }
          if (resp.data.hits.ratio<0){
            this.ratio = -resp.data.hits.ratio;
            this.showud1=1
          } else {
            this.ratio = resp.data.hits.ratio;
            this.showud1=2
          }
          this.daymount = resp.data.hits.his;
          this.currentTime = resp.data.hits.total;
          this.touristc = resp.data.hits.link;
        })
      },
      pspsp(){
        http.get('bi/get_scenic_by_city',{city_id:this.modelcity}).then(resp=>{
          console.log(resp.data.hits)
          this.senicData=resp.data.hits
          this.modelsenic=this.senicData[0].id
        })
      },
      ssdsadfa(){
        console.log('modelsenic:::',this.modelsenic)
        this.lineDatay1=[]
        this.lineDatax=[]
        this.lineDatay2=[]
        http.get('bi/get_scenic_tourist_compare_by_date', {
          startTime: http.gmt2str(this.da1[0]),
          startTime1: http.gmt2str(this.da2[0]),
          endTime: http.gmt2str(this.da1[1]),
          endTime1: http.gmt2str(this.da2[1]),
          scenic: this.modelsenic,
          min: this.power1
        }).then(resp => {
          this.lineDatayn1 = resp.data.hits.cprdate;
          console.log('lineDatayn1', this.lineDatayn1)
          for (var i = 0; i < resp.data.hits.cprlist.length; i++) {
            this.lineDatay1.push(parseInt(resp.data.hits.cprlist[i].n))
          }
          this.lineDatayn2 = resp.data.hits.curdate;
          console.log('lineDatayn2', this.lineDatayn2)
          console.log('resp.data.hits.curlist', resp.data.hits.curlist)
          for (var i = 0; i < resp.data.hits.curlist.length; i++) {
            this.lineDatax.push(resp.data.hits.curlist[i].time)
            this.lineDatay2.push(parseInt(resp.data.hits.curlist[i].n))
          }
          console.log('lineDatax', this.lineDatax)
          this.initline();
        })
      }
    },
    watch: {
      piccity: 'picsb',
      today: 'pic1',
      picDate6: 'pic1',
      x: 'x1',
      dataIndex: 'dataChange1',
      playState:'play',
      city11:'sinic',
      senic_id:'hmi',
      date11:'datechange1',
      senic_id5:'pccsscs',
      modelcity:'pspsp',
      modelsenic:'ssdsadfa'
    }
  };
</script>

