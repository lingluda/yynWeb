<template>
  <div>
    <div class="ti">
     <span >旅游热度</span>
    </div>
    <Tabs value="index" @on-click="click">
      <TabPane label="首页" name="index">

        <card>
          <div style="display: flex">
            <div style="margin-bottom: 20px;width: 200px">
              <span style="font-weight: bold;color: #000000">游客人数</span>
              <Tooltip content="这是怎么个一回事啊，我航线知道" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
              </Tooltip>
            </div>
            <div style="justify-content: flex-end">
            <DatePicker size="small" v-model="date" type="date" placeholder="自选时间" @on-change="change1"
                        style="width: 150px;"></DatePicker>
            <Select size="small" v-model="city" clearable style="width: 150px" @on-change="change3">
              <Option v-for="item in cityData" :value="item.code" :key="item.id">{{item.name}}</Option>
            </Select>
            </div>
          </div>
          <div style="width: 100%;height: 200px;border: 1px solid yellow">
                <Row style="padding: 40px;">
                  <Col span="8" style="border-right: 1px solid yellow">
                    <Icon type="md-desktop" size="60"/>
                    <span>12121</span>
                    <span>asdfasdf</span>
                  </Col>
                </Row>
          </div>
        </card>
      </TabPane  >
      <TabPane label="热门排行" name="destination" >
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
  import city from '@/components/select/city.vue'
  export default {
    comments:{
      'city_select':city,
    },
    data() {
      return {
        date: '',
        cityData:[],
        city:'',
        pieData:[],
      }
    },
    mounted() {
      this.initBar()
      this.initLine()
      this.getCity()
      this.init()
    },
    methods: {
      init(){
        console.log(1111111111111111111)
        console.log('当前时间：',http.getCurrentDate())
      },
      change1(val){
        this.date = val;
        http.post('bi/get_tourism_dist_by_date',{date:this.date,city:this.city}).then(resp=>{
          this.pieData = resp.data.hits;
          console.log(this.pieData)
          this.initBar()
        })
        http.post('bi/get_tourism_qty_by_date',{date:this.date,city:this.city}).then(resp=>{
          console.log('qq1qqq',resp)
        })
      },
      change3(val){
        this.city = val;
        http.post('bi/get_tourism_dist_by_date',{date:this.date,city:this.city}).then(resp=>{
          console.log(resp)
          this.pieData = resp.hits;
        })
        http.post('bi/get_tourism_qty_by_date',{date:this.date,city:this.city}).then(resp=>{
          console.log('qq1qqq',resp)
        })
      },
      getCity(){
        http.post('bi/get_all_city_prov',{}).then(resp=>{
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
            data: ['09-01', '09-02', '09-03', '09-04', '09-05', '09-06', '09-07'],
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
            data: [1, 2, 3, 4, 5, 1, 9],
            type: 'line'
          }]
        })
      },
      click(val){
        this.$router.push(val)
      }
    },
    watch:{

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
