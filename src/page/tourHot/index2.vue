<template>
  <div style="height: 100vh">
    <div class="ti">
      <span>旅游热度</span>
    </div>
    <Tabs value="index" @on-click="click">
      <TabPane label="首页" name="index" class="lyrd_sy_content">
        <card class="lyrd_sy_ykrs">
          <div class="lyrd_index_search">
            <div class="lyrd_index_search_left">
              <span class="lyrd_index_search_title">游客人数</span>
              <Tooltip content="去除常驻人口游客数量的计算" placement="right" max-width="200">
                <Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline"/>
              </Tooltip>
            </div>
            <div class="lyrd_index_search_right">
              <RadioGroup v-model="dateChoice1" type="button">
                <Radio label="1">今日</Radio>
                <Radio label="2">昨日</Radio>
              </RadioGroup>
              <DatePicker v-model="datefff" format="yyyy-MM-dd" type="date" placeholder="请选择日期" style="width:120px" @on-change="handleChange"></DatePicker>
              <Select v-model="city" clearable style="width:120px;margin-left:15px">
                <Option v-for="item in cityData" :value="item.id">{{item.name}}</Option>
              </Select>
            </div>
          </div>
          <div class="lyrd_index_count">
            <Row>
              <Col span="10">
                <div class="lyrd_index_count_content lyrd_index_count_content_line">
                  <div class="lyrd_index_count_bg1"></div>
                  <div class="lyrd_index_count_num">
                    <div>
                      <span class="lyrd_index_today_visit">今日总接待游客量</span>

                    </div>
                    <div>
                      <span class="lyrd_index_today_num">{{total}}</span>
                      <span class="lyrd_index_today_dw">人次</span>
                    </div>
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
                    <div>
                      <span class="lyrd_index_today_num">{{ratio}}</span>
                      <span class="lyrd_index_today_dw">%</span>
                      <span v-if="showud1==1">(<Icon :style={color:color2} type="md-arrow-down" size="22"/>)</span>
                      <span v-if="showud1!=1">(<Icon :style={color:color1} type="md-arrow-up" size="22"/>)</span>
                    </div>
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
                    <div>
                      <span class="lyrd_index_today_num">{{link}}</span>
                      <span class="lyrd_index_today_dw">%</span>
                      <span v-if="showud2==1">(<Icon :style={color:color1} type="md-arrow-up" size="22"/>)</span>
                      <span v-if="showud2!=1">(<Icon :style={color:color2} type="md-arrow-down" size="22"/>)</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div class="lyrd_index_jryk">
            <div class="lyrd_index_jryk_title">
              <span class="lyrd_index_search_title">今日游客各州市所占比例</span>

            </div>
            <div>
              <div id="mybar" style="height:200px;min-width: 400px;"></div>
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
              <DatePicker v-model="date1" format="yyyy-MM-dd" type="daterange" placeholder="请选择日期"
                          style="width:180px"></DatePicker>
              <Select v-model="city1" clearable style="width:120px;margin-left:15px">
                <Option v-for="item in cityData" :value="item.id">{{item.name}}</Option>
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
                  <span class="lyrd_index_today_num">{{totalP}}</span>
                  <span class="lyrd_index_today_dw">人次</span>
                </div>
              </div>

            </div>
            <div class="lyrd_index_kltj_chart_right">
              <div >
                <span style="color: #000;font-weight:bold;font-size:14px;padding: 20px">客流趋势分析 </span>
                <span style="color: #a5a5a5;font-size:12px;">(人次：万)</span>
              </div>
              <div id="myline" style="height:300px;min-width: 400px;margin-top: -20px"></div>
            </div>
          </div>
        </card>
        <!-- 客流统计结束 -->
      </TabPane>
      <TabPane label="热度排行" name="destination">
      </TabPane>
      <TabPane label="景区客流热力" name="hotmap">
      </TabPane>
      <TabPane label="平台运营" name="platform">
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  import http from '@/http.js'
  import '../../dateFormate.js'
  import city from '@/components/select/city.vue'

  export default {
    data() {
      return {
        showud1:1,
        showud2:2,
        color1:'red',
        color2:'green',
        dateChoice1: '1',
        dateChoice2: '3',
        totalP: '',
        lineDatax: [],
        lineDatay: [],
        datefff: http.getToday(),
        cdate: '',
        date1: [http.getWeekAgo(),http.getToday()],
        cityData: [],
        city: '0',
        city1: '0',
        start: '',
        end: '',
        pieData: [],
        pieData1: [{
          name:'',
          value:''
        }],
        total: '',
        ratio: '',
        link: '',
        options2: {
          shortcuts: [
            {
              text: '最近7天',
              value() {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                return [start, end];
              },
              onClick: (picker) => {
                console.log('日期：：：', picker)
              }
            },
            {
              text: '最近30天',
              value() {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                return [start, end];
              }
            }
          ]
        }
      }
    },
    mounted() {
      this.initLine()
      this.getCity()
      //this.init()
    },
    methods: {
      getCity() {
        http.get('bi/get_all_city_prov', {}).then(resp => {
          this.cityData = resp.data.hits;
        })
      },
      initBar() {
        let mybar = this.$echarts.init(document.getElementById("mybar"), 'macarons')
        mybar.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{b} ",
            backgroundColor: '#323232'
          },
          legend: {
            x: '50%',
            y: '30%',
            icon: 'circle',
            orient: 'horizontal',
            right: 10,
            top: 20,
            bottom: 20,
            data: this.pieData1
          },
          series: [
            {
              name: '今日接待',
              type: 'pie',
              center: ['30%', '50%'],
              radius: ['0%', '100%'],
              avoidLabelOverlap: false,
              data: this.pieData1,
              itemStyle: {
                normal: {
                  label: {
                    show: false,
                    formatter: '{b} : {c} \n ({d}%)'
                  },
                  labelLine: {
                    show: false
                  }
                }
              }
            }
          ],
          color: ['#006EFF', '#29CC85', '#ffbb00', '#ff584c', '#9741d9', '#1fc0cc', '#7ff936', '#ff9c19', '#e63984', '#655ce6', '#47cc50', '#fb0b6']
        })
      },
      initLine() {
        let myline = this.$echarts.init(document.getElementById("myline"), 'macarons')
        myline.setOption({
          title: {
            show:false,
            text: '客流趋势分析（人次：万）',
            textStyle: {
              fontSize: 14,
              color: 'black'
            },
            x: 'left'
          },
          tooltip: {
            trigger: 'axis',
            backgroundColor: '#323232'
          },
          xAxis: {
            type: 'category',
            data: this.lineDatax,
            axisLine: {
              lineStyle: {
                color: '#888888',
                width: 2
              }
            }
          },
          yAxis: {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#888888',
                width: 2
              }
            }
          },
          lineStyle: {
            color: '#006EFF',

          },
          itemStyle: {
            normal: {
              color: '#00FF00'
            }
          },
          series: [{
            data: this.lineDatay,
            type: 'line'
          }]
        })
      },
      click(val) {
        this.$router.push(val)
      },
      form1change() {
        this.pieData1=[]
        http.get('bi/get_tourism_dist_by_date', {date: http.gmt2str(this.datefff), city_id: this.city}).then(resp => {
          //this.pieData = resp.data.hits;
          console.log(this.pieData)
          for (var i=0;i<resp.data.hits.length;i++){
            this.pieData1.push({name:resp.data.hits[i].name +' '+ resp.data.hits[i].proportion+'%',value:resp.data.hits[i].value})
          }
          console.log('this.pieData1::',this.pieData1)
          this.initBar()
        })
        http.get('bi/get_tourism_qty_by_date', {date: http.gmt2str(this.datefff), city_id: this.city}).then(resp => {
          console.log('qq1qqq', resp.data.hits.total)
          this.total = resp.data.hits.total;

          if (resp.data.hits.ratio<0){
            this.ratio =-resp.data.hits.ratio;
            this.showud1=1
          }else {
            this.ratio = resp.data.hits.ratio;
            this.showud1=2
          }
          if (resp.data.hits.link<0){
            this.link = -resp.data.hits.link;
            this.showud2=2
          } else {
            this.link = resp.data.hits.link;
            this.showud2=1
          }
        })
      },
      form1change1() {
        this.totalP = ''
        this.lineDatax = []
        this.lineDatay = []
        http.get('bi/get_tourism_trend_by_timespan', {
          startTime: http.gmt2str(this.date1[0]),
          endTime: http.gmt2str(this.date1[1]),
          city_id: this.city1
        }).then(resp => {
          console.log(resp.data)
          this.totalP = resp.data.hits.total;
          for (var i = 0; i < resp.data.hits.list.length; i++) {
            this.lineDatax.push(resp.data.hits.list[i].date)
            this.lineDatay.push(resp.data.hits.list[i].value / 10000)
          }
          console.log(this.lineDatax)
          console.log(this.lineDatay)
          this.initLine()
        })
      },
      p2(){
        if (this.dateChoice2==3) {
          console.log(111111111)
          this.totalP = ''
          this.lineDatax = []
          this.lineDatay = []
          http.get('bi/get_tourism_trend_by_timespan', {
            startTime:http.getWeekAgo(),
            endTime:http.getToday(),
            city_id: this.city1
          }).then(resp => {
            console.log(resp.data)
            this.totalP = resp.data.hits.total;
            for (var i = 0; i < resp.data.hits.list.length; i++) {
              this.lineDatax.push(resp.data.hits.list[i].date)
              this.lineDatay.push(resp.data.hits.list[i].value / 10000)
            }
            console.log(this.lineDatax)
            console.log(this.lineDatay)
            this.initLine()
          })
        }
        if (this.dateChoice2==4) {
          console.log('this.dateChoice1::::::',this.dateChoice1)
          this.totalP = ''
          this.lineDatax = []
          this.lineDatay = []
          http.get('bi/get_tourism_trend_by_timespan', {
            startTime: http.getMonthAgo(),
            endTime: http.getToday(),
            city_id: this.city1
          }).then(resp => {
            console.log(resp.data)
            this.totalP = resp.data.hits.total;
            for (var i = 0; i < resp.data.hits.list.length; i++) {
              this.lineDatax.push(resp.data.hits.list[i].date)
              this.lineDatay.push(resp.data.hits.list[i].value / 10000)
            }
            console.log(this.lineDatax)
            console.log(this.lineDatay)
            this.initLine()
          })
        }
      },
      p1(){
        if (this.dateChoice1==1) {
          this.pieData1=[]
          http.get('bi/get_tourism_dist_by_date', {date: http.getToday(), city_id: this.city}).then(resp => {
            //this.pieData = resp.data.hits;
            console.log(this.pieData)
            for (var i=0;i<resp.data.hits.length;i++){
              this.pieData1.push({name:resp.data.hits[i].name+resp.data.hits[i].proportion+'%',value:resp.data.hits[i].value})
            }
            console.log('this.pieData1::',this.pieData1)
            this.initBar()
          })
          http.get('bi/get_tourism_qty_by_date', {date: http.getToday(), city_id: this.city}).then(resp => {
            console.log('qq1qqq', resp.data.hits.total)
            this.total = resp.data.hits.total;

            if (resp.data.hits.ratio<0){
              this.ratio =-resp.data.hits.ratio;
              this.showud1=1
            }else {
              this.ratio = resp.data.hits.ratio;
              this.showud1=2
            }
            if (resp.data.hits.link<0){
              this.link = -resp.data.hits.link;
              this.showud2=2
            } else {
              this.link = resp.data.hits.link;
              this.showud2=1
            }
          })
        }
        if (this.dateChoice1==2) {
          this.pieData1=[]
          http.get('bi/get_tourism_dist_by_date', {date: http.getYesterDay(), city_id: this.city}).then(resp => {
            //this.pieData = resp.data.hits;
            console.log(this.pieData)
            for (var i=0;i<resp.data.hits.length;i++){
              this.pieData1.push({name:resp.data.hits[i].name+resp.data.hits[i].proportion+'%',value:resp.data.hits[i].value})
            }
            console.log('this.pieData1::',this.pieData1)
            this.initBar()
          })
          http.get('bi/get_tourism_qty_by_date', {date: http.getYesterDay(), city_id: this.city}).then(resp => {
            console.log('qq1qqq', resp.data.hits.total)
            this.total = resp.data.hits.total;

            if (resp.data.hits.ratio<0){
              this.ratio =-resp.data.hits.ratio;
              this.showud1=1
            }else {
              this.ratio = resp.data.hits.ratio;
              this.showud1=2
            }
            if (resp.data.hits.link<0){
              this.link = -resp.data.hits.link;
              this.showud2=2
            } else {
              this.link = resp.data.hits.link;
              this.showud2=1
            }
          })
        }
      },
      handleChange(date){
        this.datefff = date;
        console.log("date:::"+date)
      }
    },

    watch: {
      datefff: 'form1change',
      city: 'form1change',
      date1: 'form1change1',
      city1: 'form1change1',
      dateChoice1:'p1',
      dateChoice2:'p2',
    }
  }
</script>
<style lang="less" scoped>
  .ti {
    color: #000;
    font-size: 16px;
    font-weight: 700;
    line-height: 52px;
    padding-left: 20px;
    height: 45px;
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
    display: flex;
    justify-content: space-between;
    line-height: 70px;
    padding: 0 20px;
  }

  .lyrd_index_search_title {
    font-size: 14px;
    font-weight: 700;
    padding-right: 8px;
    color: #000;
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



