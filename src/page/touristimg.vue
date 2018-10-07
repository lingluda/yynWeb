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
        <Select style="width: 120px" placeholder="城市" v-model="ccc" @on-change="clisk">
          <Option v-for="(item, index) in cityData" :value="item.id" :key="index">{{item.name}}</Option>
        </Select>
        <Select style="width: 120px" placeholder="区域" v-model="ccc1" @on-change="_ccc1">
          <Option v-for="(item, index) in senicData" :value="item.id" :key="index">{{item.name}}</Option>
        </Select>
        <DatePicker type="date" v-model="picDate" placeholder="自选时间" style="width: 120px" @on-change="dateChange" :options="disoptionsdate"></DatePicker>
        <Row :gutter="16" style="margin-top: 20px">
          <Col span="6">
            <div id="sex">
              <div style="height: inherit;"></div>
              <!-- <Icon type="ios-woman" size="32" color="#ff50fe" class="sex-icon"/> -->
              <!-- <Icon type="ios-man" size="32" color="#1ea9ff" class="sex-icon"/> -->
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
            <div id="age" class="tousimg_zb1"></div>
          </Col>
          <Col span="12">
            <div id="edu" class="tousimg_zb1"></div>
          </Col>
        </Row>
        <Row :gutter="16" style="margin-top: 23px;">
          <Col span="24">
            <div id="city" class="tousimg_zb"></div>
          </Col>
        </Row>
        <Row :gutter="16" style="margin-top: 23px;">
          <Col span="24">
            <div id="province" class="tousimg_zb"></div>
          </Col>
        </Row>
      </card>
      <card style="margin-top: 20px">
        <div class="card_title">
          <span style="font-weight: bold;color: #000000">人口迁移分析</span>

        </div>
        <RadioGroup type="button" @on-change="hotlinepic" v-model="trfcty">
          <Radio label="1">全部</Radio>
          <Radio label="2">飞机</Radio>
          <Radio label="3">火车</Radio>
          <Radio label="4">汽车</Radio>
        </RadioGroup>
        <DatePicker type="date" v-model="hotlineDate" placeholder="自选时间" style="width: 120px" :options="disoptionsdate"></DatePicker>
        <Select style="width: 120px" placeholder="清选择" v-model="ccti">
          <Option v-for="(item, index) in cityData1" :value="item.name" :key="index">{{item.name}}</Option>
        </Select>
        <Row :gutter="16" style="margin-top: 20px;margin-bottom: 10px">
          <Col span="12">
            <div>
              <Tabs v-model="tabname"
                    style="border-top: 1px solid #dcdee2;border-left: 1px solid #dcdee2;height: 557px">
                <TabPane label="迁入" name="in">
                  <Table height="550" :columns="columns1" :data="data3"></Table>
                </TabPane>
                <TabPane label="迁出" name="out">
                  <Table height="550" :columns="columns1" :data="data3"></Table>
                </TabPane>
              </Tabs>
            </div>
          </Col>

          <Col span="12">
            <aaamap :d2d="this.data2" :ioindex="this.ioindex" style="border: 1px solid #dcdee2;height: 557px;width: 100%"></aaamap>
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
                <DatePicker v-model="picDate3" type="date" placeholder="选择日期"
                            style="width: 150px;float: right" :options="disoptionsdate"></DatePicker>
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
                <DatePicker v-model="d11" placement="bottom-end" format="yyyy-MM" type="month" placeholder="结束月份" style="width: 100px;float: right" :options="disoptionsdate"></DatePicker>
                <span style="float: right;padding:5px 5px 0px 5px">-</span>
                <DatePicker v-model="d22" placement="bottom-end" format="yyyy-MM" type="month" placeholder="开始月份" style="width: 100px;float: right" :options="disoptionsdate"></DatePicker>
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
  }
  .tousimg_zb1 {
    width: 100%;
    height: 200px;
    border: 1px solid #dcdee2;
    padding: 0 30px 15px;
  }
  .tousimg_zb2 {
    width: 100%;
    height: 600px;
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

  #sex{
    border: 1px solid #dcdee2;
    height: 400px;
    width: 100%;
    position: relative;

    .sex-icon {
      position: absolute;
      top: 40%;
      margin-top: -16px;
    }
    .sex-icon:last-child {
      right: 0;
    }
  }
</style>

<script>
  import http from "@/http.js";
  import "@/dateFormate.js";
  import gomap from '@/components/map/echartMap'
  import * as echartsHelper from '@/helpers/echarts'

  export default {
    components:{
      "aaamap":gomap,
    },
    data() {
      return {
        ioindex:1,
        d11:http.getToday(),
        d22:'2018-01',
        trfcty:'1',
        senicData:[],
        ccti:'',
        ccc:'',
        ccc1:'',
        cccM:'',
        hotlineDate:http.getYesterDay(),
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
        osData: [],
        ageData: [],
        eduData: [],
        cliData: [],
        ddData: [],
        cityData: [],
        cityData1: [],
        proData: [],
        picDate: http.getToday(),
        picDate3: http.getYesterDay(),
        picDate4: [this.d22,this.d11],
        cpicDate: http.getToday(),
        columns1: [
          {
            title: "排名",
            type: "index",
            width: 60,
            align: "center"
          },
          {
            title: "线路",
            key: "moveline",
            width:120,
            color:"red"
          },

          {
            title: "热度",
            key: "score",
            sortable: true
          },
          {
            title: "汽车",
            key: "carx",
            sortable: true
          },
          {
            title: "火车",
            key: "trainx",
            sortable: true
          },
          {
            title: "飞机",
            key: "planex",
            sortable: true
          }
        ],
        data1: [],
        data2: [],
        data3: [],
        cashData: [],
        disoptionsdate: {
            disabledDate (date) {
                return date< new Date(2018,7,1) || date > new Date()
            }
        }
      };
    },
    mounted() {
      this.init();
    },
    methods: {
      clisk(val){
        this.provx = [];
        this.provy = [];
        this.cityx = [];
        this.cityy = [];
        this.eduData = [];
        this.ageData = [];
        this.carDatax = [];
        this.carDatay = [];
        this.mobilex = [];
        this.mobiley = [];

        if (val) {
          http.get('bi/get_scenic_by_city',{city_id:val}).then(resp=>{
            this.senicData=resp.data.hits
            this.ccc1='';
          })
        }
        http
          .get("bi/get_portrait_base_by_date", {date: http.gmt2str(this.cpicDate),city_id:val})
          .then(this.getPortraitData);
                  http
          .get("bi/get_portrait_origin_by_date", {
            date: this.cpicDate,
            type: "city",
            scenic: "",
            city_id: this.ccc
          })
          .then(resp => {
            for (var i = 0; i < resp.data.hist.length; i++) {
              this.cityx.push(resp.data.hist[i].origin_city);
              this.cityy.push(parseInt(resp.data.hist[i].origin_percent* 10000)/100);
            }
            this.initCity();
          });
        http
          .get("bi/get_portrait_origin_by_date", {
            date: this.cpicDate,
            type: "prov",
            scenic: "",
            city_id: this.ccc
          })
          .then(resp => {
            for (var i = 0; i < resp.data.hist.length; i++) {
              this.provx.push(resp.data.hist[i].origin_province);
              this.provy.push(parseInt(resp.data.hist[i].origin_percent * 10000)/100);
            }
            this.initPro();
          });
      },
      hotlinedp(){
        if (!this.ccti) {
          return
        }
        this.data2=[]
        http.get("bi/get_migrate_by_date", {
          date: http.gmt2str(this.hotlineDate),
          city_name: this.ccti,
          top: 10,
          io: this.tabname
        }).then(resp => {
          if (!resp.data || !resp.data.hits) {
            return
          }
          this.data1 = resp.data.hits;
          this.data3 = resp.data.hits;
          for (var i=0;i<resp.data.hits.length;i++){
            this.data2.push([{name:resp.data.hits[i].to},{name:resp.data.hits[i].from}])
          }
          for (var i=0;i<resp.data.hits.length;i++){
            this.data3[i].moveline=resp.data.hits[i].from+'-'+resp.data.hits[i].to
            this.data3[i].carx=parseInt(resp.data.hits[i].car*10000)/100+'%'
            this.data3[i].trainx=parseInt(resp.data.hits[i].train*10000)/100+'%'
            this.data3[i].planex=parseInt(resp.data.hits[i].plane*10000)/100+'%'
          }
        });
      },
      hotlinepic(val11) {
        if (val11==='1'){
          this.columns1=[
            {
              title: "排名",
              type: "index",
              width: 60,
              align: "center"
            },
            {
              title: "线路",
              key: "moveline",
              width:120,
            },
            {
              title: "热度",
              key: "score",
              sortable: true
            },
            {
              title: "汽车",
              key: "carx",
              sortable: true
            },
            {
              title: "火车",
              key: "trainx",
              sortable: true
            },
            {
              title: "飞机",
              key: "planex",
              sortable: true
            }
          ]
        }
        if (val11==='2'){
          this.columns1=[
            {
              title: "排名",
              type: "index",
              width: 60,
              align: "center"
            },
            {
              title: "线路",
              key: "moveline",
              width:120,
              color:"red"
            },

            {
              title: "热度",
              key: "score",
              sortable: true
            },
            {
              title: "飞机",
              key: "planex",
              sortable: true
            }
          ]
        }
        if (val11==='3'){
          this.columns1=[
            {
              title: "排名",
              type: "index",
              width: 60,
              align: "center"
            },
            {
              title: "线路",
              key: "moveline",
              width:120,
              color:"red"
            },

            {
              title: "热度",
              key: "score",
              sortable: true
            },

            {
              title: "火车",
              key: "trainx",
              sortable: true
            },

          ]
        }
        if (val11==='4'){
          this.columns1=[
            {
              title: "排名",
              type: "index",
              width: 60,
              align: "center"
            },
            {
              title: "线路",
              key: "moveline",
              width:120,
              color:"red"
            },

            {
              title: "热度",
              key: "score",
              sortable: true
            },
            {
              title: "汽车",
              key: "carx",
              sortable: true
            },

          ]
        }


      },
      init() {
        http.get('bi/get_all_city_prov', {}).then(resp => {
          this.cityData = resp.data.hits;
          if (resp.data.hits) {
            this.ccc = resp.data.hits[0].id
          }
        })
        http.get('bi/get_all_city', {}).then(resp => {
          this.cityData1 = resp.data.hits;
          if (resp.data.hits) {
            this.ccti = resp.data.hits[0].name
          }
        })
        if(this.ccc){
          http.get('bi/get_scenic_by_city',{city_id:this.ccc}).then(resp=>{
            this.senicData=resp.data.hits
            if (resp.data.hits) {
              this.ccc1 = resp.data.hits[0].id
            }
          })
        }

        this.provx = [];
        this.provy = [];
        this.cityx = [];
        this.cityy = [];
        this.eduData = [];
        this.ageData = [];
        this.carDatax = [];
        this.carDatay = [];
        this.mobilex = [];
        this.mobiley = [];

        if (this.ccc) {
          http.get('bi/get_scenic_by_city',{city_id:this.ccc}).then(resp=>{
            this.senicData=resp.data.hits
            this.ccc1='';
          })
        }
        http
          .get("bi/get_portrait_base_by_date", {date: http.gmt2str(this.cpicDate),city_id:this.ccc})
          .then(this.getPortraitData);
        http
          .get("bi/get_portrait_origin_by_date", {
            date: http.gmt2str(this.cpicDate),
            type: "city",
            scenic: "",
            city_id: this.ccc
          })
          .then(resp => {
            for (var i = 0; i < resp.data.hist.length; i++) {
              this.cityx.push(resp.data.hist[i].origin_city);
              this.cityy.push(parseInt(resp.data.hist[i].origin_percent * 10000)/100);
            }
            this.initCity();
          });
        http
          .get("bi/get_portrait_origin_by_date", {
            date: this.cpicDate,
            type: "prov",
            scenic: "",
            city_id: this.ccc
          })
          .then(resp => {
            for (var i = 0; i < resp.data.hist.length; i++) {
              this.provx.push(resp.data.hist[i].origin_province);
              this.provy.push(parseInt(resp.data.hist[i].origin_percent * 10000)/100);
            }
            this.initPro();
          });
      },
      initSex() {
        this.setPieChart({
          el: "#sex > div",
          title: '性别占比(%)',
          color: ["#1ea9ff", "#ff50fe"],
          data: this.sexData
        });
      },
      initIn() {
        this.setPieChart({
          el: "#in",
          title: '年龄占比(%)',
          data: this.ageData
        });
      },
      initOS() {
        this.setPieChart({
          el: "#os",
          title: '学历占比(%)',
          data: this.eduData
        });
      },
      initIOS() {
        this.setPieChart({
          el: "#ios",
          title: '消费能力(%)',
          data: this.inData
        });
      },
      getPortraitData(resp){
        this.sexData = resp.data.hist.gender;
        this.inData = resp.data.hist.consumpting.sort((v1, v2) => v2.value - v1.value);

        this.eduData = resp.data.hist.edu.sort((v1, v2) => v2.value - v1.value);
        this.osData = resp.data.hist.mobile;
        this.ageData = resp.data.hist.age.sort((v1, v2) => v2.value - v1.value);
        for (var i = 0; i < resp.data.hist.mobile.length; i++) {
          this.mobilex.push(resp.data.hist.mobile[i].name);
          this.mobiley.push(parseInt(resp.data.hist.mobile[i].value * 10000)/100);
        }
        for (var i = 0; i < resp.data.hist.car.length; i++) {
          this.carDatax.push(resp.data.hist.car[i].name);
          this.carDatay.push(parseInt(resp.data.hist.car[i].value * 10000)/100);
        }
        this.initSex();
        this.initOS();
        this.initIOS();
        this.initIn();
        this.initEdu();
        this.initAge();
      },
      setPieChart(oOptions){
        if(!oOptions.color){
          oOptions.color = ["#006EFF", "#29CC85", "#ffbb00", "#ff584c", "#9741d9", "#1fc0cc", "#7ff936", "#ff9c19", "#e63984", "#655ce6", "#47cc50", "#fb0b6"];
        }
        const oLabelStyle = {
          show: true,
          position: "center",
          lineHeight: 24,
          formatter: '{a|{b}}\n{b|{d}%}',
          backgroundColor: '#fff',
          width: 80,
          borderRadius: 10,
          rich: {
              a: {
                  color: '#878787',
                  fontSize: 12
              },
              b: {
                  color: '#000',
                  fontSize: 12
              }
          }
        };
        // 前三数据
        const initLen = 3
        const chartData = oOptions.data.slice(0, initLen)

        // 其他 (除前三数据的和)
        let extraValue = 0
        for (let i = initLen, len = oOptions.data.length; i < len; i++){
          if (oOptions.data[i]) {
            extraValue += oOptions.data[i].value
          }
        }
        if(extraValue) {
          chartData.push({
            name: '其他',
            value: extraValue
          })
        }

        this.$echarts.init(document.querySelector(oOptions.el)).setOption({
          color: oOptions.color,
          title: {
            text: oOptions.title,
            textStyle: {
              fontSize: 14
            },
            x: 20,
            y: 15
          },
          legend: {
            y: 340,
            x: "center",
            icon: "circle",
            data: chartData.map(item => item.name),
            itemWidth: 10,
            itemHeight: 12
          },
          series: [
            {
              type: "pie",
              radius: ["40%", "55%"],
              avoidLabelOverlap: true,
              label: {
                normal: {
                  show: true,
                  position: 'outside',
                  formatter: '{b}\n{d}%',
                },
              },
              emphasis: {
                label: oLabelStyle
              },
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
              },
              data: chartData
            }
          ]
        });
      },
      initCash() {
        let aCashData = this.cashData.sort((v1, v2) => v2.value - v1.value);
        let cashChart = this.$echarts.init(document.getElementById("cash"));
        cashChart.setOption({
          color: ["#006EFF", "#29CC85", "#ffbb00", "#ff584c", "#9741d9", "#1fc0cc"],
          tooltip: {
            position: ['10%', '34%'],
            alwaysShowContent: true,
            trigger: "item",
            formatter: "{a}<br/>{b}: {d}%",
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
            data: aCashData.map(item => item.name)
          },
          series: [
            {
              name: "消费分析",
              type: "pie",
              radius: '50%',
              //label: false,
              //labelLine: false,
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
              },
              data: aCashData
            }
          ]
        });
        //触发tooltip显示事件
        setTimeout(() => {
          cashChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: 0
          });
        }, 1000);
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
              barWidth: "30%",
              label: {
                normal: {
                  show: true,
                  position: "right",
                  formatter:'{c}%'
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
              barWidth: "30%",
              label: {
                normal: {
                  show: true,
                  position: "right",
                  formatter:'{c}%'
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
            x: 32,
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
            left: "5%",
            right: "5%",
            bottom: "20",
            containLabel: true
          },
          xAxis: {
            type: "category",
            data: this.cityx,
            axisLabel: {
              interval: 0,
              formatter: echartsHelper.labelFormatter
            },
          },
          yAxis: {
            type: "value",
            boundaryGap: [0, 0.1],
            splitLine: {
                lineStyle: {
                    color: '#e8e8e8'
                }
            }
          },

          series: [
            {
              name: "占比",
              type: "bar",
              data: this.cityy,
              barWidth: "30%",
              label: {
                normal: {
                  show: true,
                  position: "top",
                  formatter:'{c}%'
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
            x: 32,
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
            left: "5%",
            right: "5%",
            bottom: "20",
            containLabel: true
          },
          xAxis: {
            type: "category",
            data: this.provx,
            axisLabel: {
              interval: 0,
              formatter: echartsHelper.labelFormatter
            },
          },
          yAxis: {
            type: "value",
            boundaryGap: [0, 0.1],
            splitLine: {
                lineStyle: {
                    color: '#e8e8e8'
                }
            }
          },

          series: [
            {
              name: "占比",
              type: "bar",
              data: this.provy,
              barWidth: "30%",
              label: {
                normal: {
                  show: true,
                  position: "top",
                  formatter:'{c}%'
                }
              }
            }
          ],
          color: ["#006EFF"]
        });
      },
      clicktab() {
        if (!this.ccti) {
          return
        }

        if (this.tabname==='in'){
          this.ioindex=1
        }
        if (this.tabname==='out'){
          this.ioindex=0
        }
        this.data2=[]
        http.get("bi/get_migrate_by_date", {
          date: http.gmt2str(this.hotlineDate),
          city_name: this.ccti,
          top: 10,
          io: this.tabname
        }).then(resp => {
          this.data1 = resp.data.hits;
          this.data3 = resp.data.hits;
          for (var i=0;i<resp.data.hits.length;i++){
            this.data2.push([{name:resp.data.hits[i].to},{name:resp.data.hits[i].from}])
          }
          for (var i=0;i<resp.data.hits.length;i++){
            this.data3[i].moveline=resp.data.hits[i].from+'-'+resp.data.hits[i].to
            this.data3[i].carx=parseInt(resp.data.hits[i].car*10000)/100+'%'
            this.data3[i].trainx=parseInt(resp.data.hits[i].train*10000)/100+'%'
            this.data3[i].planex=parseInt(resp.data.hits[i].plane*10000)/100+'%'
          }
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
        this.cashDataX2 = [];
        this.ageData = [];
        this.carDatax = [];
        this.carDatay = [];
        this.mobilex = [];
        this.mobiley = [];
        var date = new Date(this.picDate).format("yyyy-MM-dd");
        this.cpicDate = date;
        http
          .get("bi/get_portrait_base_by_date", {date: this.cpicDate,city_id:this.ccc})
          .then(this.getPortraitData);
        http
          .get("bi/get_portrait_origin_by_date", {
            date: this.cpicDate,
            type: "city",
            scenic: "",
            city_id: this.ccc
          })
          .then(resp => {
            for (var i = 0; i < resp.data.hist.length; i++) {
              this.cityx.push(resp.data.hist[i].origin_city);
              this.cityy.push(parseInt(resp.data.hist[i].origin_percent* 10000)/100);
            }
            this.initCity();
          });
        http
          .get("bi/get_portrait_origin_by_date", {
            date: this.cpicDate,
            type: "prov",
            scenic: "",
            city_id: this.ccc
          })
          .then(resp => {
            for (var i = 0; i < resp.data.hist.length; i++) {
              this.provx.push(resp.data.hist[i].origin_province);
              this.provy.push(parseInt(resp.data.hist[i].origin_percent * 10000)/100);
            }
            this.initPro();
          });
      },
      dateChange3(){
        http
          .get("bi/get_consume_by_date", {date: http.gmt2str(this.picDate3), city_id:this.ccc})
          .then(resp => {
            this.vagprice = http.qfw(resp.data.hist.avg_amount);
            this.middle = http.qfw(resp.data.hist.median_amount);
          });
      },
      dateChange4(){
        http
          .get("bi/get_consume_type_by_mon", {
            startTime: http.gmt2str(this.picDate4[0]),
            endTime: http.gmt2str(this.picDate4[1]),
            city_id:this.ccc
          })
          .then(resp => {
            //循环控制趟数
            this.cashData = resp.data.hits;
           /* var s = 0;
            var s1 = 0;
            //为什么 isSort = true，不能写在循环外面
            //因为 交换位置 isSort = false.  isSort的值永远是false 。我们要检测的是某一趟是否交换位置
            for (var i = 0; i < this.cashData.length - 1; i++) {
              var isSort = true; //假设排序ok
              //控制两两比较的次数       1--6      2--5   4 3 2 1
              for (var j = 0; j < this.cashData.length - 1 - i; j++) {
                //两两比较   从小到大排序

                //如果交换位置，说明没有排序好，如果不交换位置，说明排序好
                if (this.cashData[j].total < this.cashData[j + 1].total) {
                  isSort = false;  //没有排序好呢
                  //交换位置
                  var tmp = this.cashData[j];
                  this.cashData[j] = this.cashData[j + 1];
                  this.cashData[j + 1] = tmp;
                }

                s++; //记录内循环的次数
              }
              s1++;  //记录外循环的次数

              if(isSort) {
                //如果排序好了
                break;
              }
            }
            console.log('this.cashData：：',this.cashData)
            for (var i = 0; i < resp.data.hits.length; i++) {
              this.cashDataX.push(resp.data.hits[i].name);
            }*/
            this.initCash();
          });
      },
      _ccc1(){
        if (this.ccc1==''||this.ccc1=="undefined"||this.ccc1==null){
          console.log(this.ccc1)
        }
        else {
          this.cccM=this.ccc1
          this.provx = [];
          this.provy = [];
          this.cityx = [];
          this.cityy = [];
          this.eduData = [];
          this.ageData = [];
          this.carDatax = [];
          this.carDatay = [];
          this.mobilex = [];
          this.mobiley = [];

          http
            .get("bi/get_portrait_base_by_date", {date: http.gmt2str(this.cpicDate),city_id:this.ccc,scenic:this.ccc1})
            .then(this.getPortraitData);
                  http
          .get("bi/get_portrait_origin_by_date", {
            date: this.cpicDate,
            type: "city",
            scenic: "",
            city_id: this.ccc
          })
          .then(resp => {
            for (var i = 0; i < resp.data.hist.length; i++) {
              this.cityx.push(resp.data.hist[i].origin_city);
              this.cityy.push(parseInt(resp.data.hist[i].origin_percent* 10000)/100);
            }
            this.initCity();
          });
        http
          .get("bi/get_portrait_origin_by_date", {
            date: this.cpicDate,
            type: "prov",
            scenic: "",
            city_id: this.ccc
          })
          .then(resp => {
            for (var i = 0; i < resp.data.hist.length; i++) {
              this.provx.push(resp.data.hist[i].origin_province);
              this.provy.push(parseInt(resp.data.hist[i].origin_percent * 10000)/100);
            }
            this.initPro();
          });
        }
      },
      _ccti(){
        if (!this.ccti) {
          return
        }
        this.data2=[]
        http.get("bi/get_migrate_by_date", {
          date: http.gmt2str(this.hotlineDate),
          city_name: this.ccti,
          top: 10,
          io: this.tabname
        }).then(resp => {
          this.data1 = resp.data.hits;
          this.data3 = resp.data.hits;
          for (var i=0;i<resp.data.hits.length;i++){
            this.data2.push([{name:resp.data.hits[i].to},{name:resp.data.hits[i].from}])
          }
          for (var i=0;i<resp.data.hits.length;i++){
            this.data3[i].moveline=resp.data.hits[i].from+'-'+resp.data.hits[i].to
            this.data3[i].carx=parseInt(resp.data.hits[i].car*10000)/100+'%'
            this.data3[i].trainx=parseInt(resp.data.hits[i].train*10000)/100+'%'
            this.data3[i].planex=parseInt(resp.data.hits[i].plane*10000)/100+'%'
          }
        });
      },
      _d11(){
        this.picDate4[0]=this.d22;
        this.picDate4[1]=this.d11;
        http
          .get("bi/get_consume_type_by_mon", {
            startTime: http.gmt2str(this.picDate4[0]),
            endTime: http.gmt2str(this.picDate4[1]),
            city_id:this.ccc
          })
          .then(resp => {
            this.cashData = resp.data.hits;
           /* var s = 0;
            var s1 = 0;
            //为什么 isSort = true，不能写在循环外面
            //因为 交换位置 isSort = false.  isSort的值永远是false 。我们要检测的是某一趟是否交换位置
            for (var i = 0; i < this.cashData.length - 1; i++) {
              var isSort = true; //假设排序ok
              //控制两两比较的次数       1--6      2--5   4 3 2 1
              for (var j = 0; j < this.cashData.length - 1 - i; j++) {
                //两两比较   从小到大排序

                //如果交换位置，说明没有排序好，如果不交换位置，说明排序好
                if (this.cashData[j].total < this.cashData[j + 1].total) {
                  isSort = false;  //没有排序好呢
                  //交换位置
                  var tmp = this.cashData[j];
                  this.cashData[j] = this.cashData[j + 1];
                  this.cashData[j + 1] = tmp;
                }

                s++; //记录内循环的次数
              }
              s1++;  //记录外循环的次数

              if(isSort) {
                //如果排序好了
                break;
              }
            }
            console.log('this.cashData：：',this.cashData)
            for (var i = 0; i < resp.data.hits.length; i++) {
              this.cashDataX.push(resp.data.hits[i].name);
            }*/
            this.initCash();
          });
      }
    },
    watch: {
      picDate3: "dateChange3",
      picDate4: "dateChange4",
      tabname: "clicktab",
      hotlineDate:'hotlinedp',
      ccti:'_ccti',
      d11:'_d11'
    }
  };
</script>
