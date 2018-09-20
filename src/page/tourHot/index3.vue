<template>
  <div>
    <div class="ti">
     <span >旅游热度</span>
    </div>
    <Tabs value="index" @on-click="click">
      <TabPane label="首页" name="index">
          <Row :gutter="16">
            <Col span="12">
              <card>
                <div style="margin-bottom: 20px">
                  <span style="font-weight: bold;color: #000000">游客人数</span>
                    <Tooltip content="游客人数" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
                    </Tooltip>
                </div>

                <DatePicker size="small" v-model="date"  type="date" placeholder="自选时间"
                            style="width: 150px;"></DatePicker>

                <Select size="small" v-model="city" clearable style="width: 150px" >
                  <Option v-for="item in cityData" :value="item.id">{{item.name}}</Option>
                </Select>

                <!--<city_select></city_select>-->
                <Row style="border: 1px solid #dcdee2;margin-bottom: 20px;margin-top: 20px">
                  <Col span="12" style="padding: 20px">
                    <div style="margin-bottom: 20px">
                      <span style="font-weight: bold;color: #000000">今日总接待游客量</span>
                      <Tooltip content="今日总接待游客量" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
                      </Tooltip>
                    </div>
                    <span style="font-size: 28px">{{total}}</span><span>  人次</span>
                  </Col>
                  <Col span="12" style="padding: 20px">
                    <div style="width: 180px; padding:5px;background-color: azure">
                    <span style="margin-left: 8px">与昨日环比&nbsp;&nbsp;&nbsp;</span>
                    <span>  <Icon type="md-arrow-round-up" style="color: red;height: 18px"/>{{ratio}}%</span>
                    </div>

                    <div style="width: 180px; padding:5px;background-color: azure;margin-top: 20px">
                    <span style="margin-left: 8px">与上月同比&nbsp;&nbsp;&nbsp;</span>
                    <span>  <Icon type="md-arrow-round-up" style="color: red;height: 18px"/>{{ratio}}%</span>
                    </div>
                  </Col>
                </Row>
                <div style="border: 1px solid #dcdee2">
                  <div style="padding: 20px">
                    <span style="font-weight: bold;color: #000000">各州市占比</span>
                    <Tooltip content="各州市占比" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
                    </Tooltip>
                  </div>
                <div id="mybar" style="width: 100%;height: 400px;"></div>
                </div>
              </card>

            </Col>
            <Col span="12">
              <card>
                <div style="margin-bottom: 20px">
                  <span style="font-weight: bold;color: #000000">客流统计</span>
                  <Tooltip content="客流统计" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
                  </Tooltip>
                </div>
                <DatePicker size="small" v-model="date1" :options="options2" type="daterange" placeholder="自选时间"
                            style="width: 200px;"></DatePicker>

                <Select size="small" v-model="city1" clearable style="width: 150px" >
                  <Option v-for="item in cityData" :value="item.id">{{item.name}}</Option>
                </Select>

                <Row style="border: 1px solid #dcdee2;margin-bottom: 20px;margin-top: 20px">
                  <Col span="12" style="padding: 20px">
                    <div style="margin-bottom: 20px">
                      <span style="font-weight: bold;color: #000000">累计游客接待量</span>
                      <Tooltip content="累计游客接待量" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
                      </Tooltip>
                    </div>
                    <span style="font-size: 28px">{{totalP}}</span><span>  人次</span>
                  </Col>
              </Row>
              <div style="border: 1px solid #dcdee2">
                <div style="padding: 20px">
                  <span style="font-weight: bold;color: #000000">日期区间客流 趋势分析 (人数：万)</span>
                  <Tooltip content="日期区间客流 趋势分析 (人数：万)" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
                  </Tooltip>
                </div>
                <div id="myline" style="width: 100%;height: 400px"></div>
              </div>
              </card>
            </Col>
          </Row>
      </TabPane  >
      <TabPane label="热门目的地" name="destination" >
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
    comments:{
      'city_select':city,
    },
    data() {
      return {
        totalP:'',
        lineDatax:[],
        lineDatay:[],
        date: '2018-09-16',
        cdate: '',
        date1: ['2018-09-14','2018-09-16'],
        cityData:[],
        city:'',
        city1:'',
        start:'',
        end:'',
        pieData:[],
        total:'',
        ratio:'',
        link:'',
        options2: {
          shortcuts: [
            {
              text: '最近7天',
              value () {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                return [start, end];
              },
              onClick:(picker)=>{
                console.log('日期：：：',picker)
              }
            },
            {
              text: '最近30天',
              value () {
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
      getCity(){
        http.get('bi/get_all_city',{}).then(resp=>{
          this.cityData = resp.data.hits;
        })
      },
      initBar() {
        let mybar = this.$echarts.init(document.getElementById("mybar"),'macarons')
        mybar.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            backgroundColor:'#323232'
          },

          series: [
            {
              name:'今日接待',
              type:'pie',
              radius: ['0%', '60%'],
              avoidLabelOverlap: false,
              data:this.pieData,
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    formatter: '{b} : {c} \n ({d}%)'
                  },
                  labelLine: {
                    show: true
                  }
                }
              }
            }
          ],
          color: ['#006EFF','#29CC85','#ffbb00','#ff584c','#9741d9','#1fc0cc','#7ff936','#ff9c19','#e63984','#655ce6','#47cc50','#fb0b6']
        })
      },
      initLine(){
        let myline = this.$echarts.init(document.getElementById("myline"),'macarons')
        myline.setOption({
          tooltip: {
            trigger: 'axis',
            backgroundColor:'#323232'
          },
          xAxis: {
            type: 'category',
            data: this.lineDatax,
            axisLine:{
              lineStyle:{
                color:'#888888',
                width:2
              }
            }
          },
          yAxis: {
            type: 'value',
            axisLine:{
              lineStyle:{
                color:'#888888',
                width:2
              }
            }
          },
          lineStyle:{
            color:'#006EFF',

          },
          itemStyle : {
            normal : {
              color:'#00FF00'
            }
          },
          series: [{
            data: this.lineDatay,
            type: 'line'
          }]
        })
      },
      click(val){
        this.$router.push(val)
      },
      form1change(){
         var datea = new Date(this.date).format(
          "yyyy-MM-dd"
        )
        console.log('当前时间：',datea)
        this.cdate = datea
        console.log('this.date::',this.date)
        http.get('bi/get_tourism_dist_by_date',{date:this.cdate,city_id:this.city}).then(resp=>{
          this.pieData = resp.data.hits;
          console.log(this.pieData)
          this.initBar()
        })
        http.get('bi/get_tourism_qty_by_date',{date:this.cdate,city_id:this.city}).then(resp=>{
          console.log('qq1qqq',resp.data.hits.total)
          this.link = resp.data.hits.link;
          this.ratio = resp.data.hits.ratio;
          this.total = resp.data.hits.total;
        })
      },
      form1change1(){
        this.totalP=''
        this.lineDatax=[]
        this.lineDatay=[]
        var date = new Date(this.date1[0]).format(
          "yyyy-MM-dd"
        )
        this.start=date;
        var dateq = new Date(this.date1[1]).format(
          "yyyy-MM-dd"
        )
        this.end=dateq;
        console.log(1111111111111111111111)
        http.get('bi/get_tourism_trend_by_timespan',{startTime:this.start,endTime:this.end,city_id:this.city1}).then(resp=>{
          console.log(resp.data)
          this.totalP = resp.data.hits.total;
          for(var i=0;i<resp.data.hits.list.length;i++){
            this.lineDatax.push(resp.data.hits.list[i].date)
            this.lineDatay.push(resp.data.hits.list[i].value)
          }
          console.log(this.lineDatax)
          console.log(this.lineDatay)
          this.initLine()
        })
      },
    },

    watch:{
      date:'form1change',
      city:'form1change',
      date1:'form1change1',
      city1:'form1change1',
    }
  }
</script>

<style>
  .ti {
    margin-bottom: 10px;
    color: #000000;
    font-size: 15px;
    font-weight: bold;
  }

  .tis {
    margin-bottom: 20px;
    color: #000000;
    font-size: 14px;
    font-weight: bold;
  }
</style>
