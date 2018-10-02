<template>
  <div>
    <div class="ti">
      <span >旅游热度</span>
    </div>
    <Tabs value="scenic" @on-click="pic">
      <TabPane label="首页" name="index">
      </TabPane  >
      <TabPane label="热门目的地" name="destination">
      </TabPane>
      <TabPane label="热门景区" name="scenic">
        <card>
          <div style="margin-bottom: 20px">
            <span style="font-weight: bold;color: #000000">热门景区网络热度TOP10</span>
            <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
            </Tooltip>
          </div>
          <RadioGroup type="button" v-model="chanclick" size="small">
            <Radio label="app">APP访问</Radio>
            <Radio label="search">搜索引擎</Radio>
            <Radio label="website">网站报道</Radio>
          </RadioGroup>
          <div style="border: 1px solid #e8eaec;margin-top: 20px">
            <div style="margin-bottom: 20px">
              <span style="font-weight: bold;color: #000000">一机游用户DAU (单位：万次)</span>
              <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
              </Tooltip>
            </div>
            <div id="simBars" style="width: 100%;height: 300px;"></div>

          </div>
        </card>
        <card style="margin-top: 20px">
          <div>
            <Row :gutter="16">
              <Col span="12">
                <div style="border: 1px solid #dcdee2">
                  <div style="margin-bottom: 20px">
                    <span style="font-weight: bold;color: #000000">景区客流TOP10 (单位：万人)</span>
                    <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
                    </Tooltip>
                  </div>
                  <RadioGroup type="button" size="small" style="margin-left: 15px">
                    <Radio label="large">当日</Radio>
                    <Radio label="default">当月</Radio>
                    <Radio label="small">当年</Radio>
                  </RadioGroup>
                  <DatePicker size="small" type="date" placeholder="Select date" style="width: 120px"></DatePicker>
                  <div id="max1" style="width: 80%;height: 600px;"></div>
                </div>
              </Col>

              <Col span="12">
                <div style="border: 1px solid #dcdee2">
                  <div style="margin-bottom: 20px">
                    <span style="font-weight: bold;color: #000000">景区客流TOP10 (单位：万人)</span>
                    <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
                    </Tooltip>
                  </div>
                  <RadioGroup type="button" size="small" style="margin-left: 15px">
                    <Radio label="large">增量</Radio>
                    <Radio label="default">增长量</Radio>
                  </RadioGroup>
                  <DatePicker size="small" type="date" placeholder="Select date" style="width: 120px"></DatePicker>
                  <div id="max2" style="width: 80%;height: 600px;"></div>
                </div>
              </Col>
            </Row>
          </div>
        </card>
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
  export default {
    name: "tourhot",
    data() {
      return {
        barDatax1:[],
        barDatay1:[],
        chanclick:'app',
        columns: [
          {
            title: '热门路线',
            key: 'name',
          },
          {
            title: '购买次数',
            key: 'num',
          },{
            title: '热门路线DAU量(次)',
            key: 'dau',
          },
          {
            title: '价格(元)',
            key: 'unit',
          }
        ],
        data:[
          {
            name:'西双',
            num:25,
            dau:39,
            unit:344,
          }
        ],
        max1his:[],
        max1n:[],
        max1y:[],
        max2his:[],
        max2n:[],
        max2y:[],
        max2name:[],
      }
    },
    mounted() {
      this.initMax2()
      this.initSimBars()
      this.init()
    },
    methods: {
      init(){
        http.get('bi/get_hot_scenic_vist_qty_by_date',{chan:this.chanclick,date:'2018-09-01',top:10}).then(resp=>{
          console.log(resp.data.hits)
          for (var i=0;i<resp.data.hits.length;i++) {
            this.barDatax1.push(resp.data.hits[i].name)
            this.barDatay1.push(parseInt(resp.data.hits[i].dau))
          }
          this.initSimBars()
        })
        http.get('bi/get_scenic_tourist_top_by_date',{date:'2018-09-17',top:10}).then(resp=>{
          for (var i=0;i<resp.data.hits.length;i++) {
            this.max1his.push(resp.data.hits[i].his)
            this.max1n.push(resp.data.hits[i].n)
            this.max1y.push(resp.data.hits[i].city)
          }
          this.initMax1()
        })
        http.get('bi/get_scenic_tourist_ince_by_date',{date:'2018-09-16',top:10}).then(resp=>{
          console.log('top',resp.data.hits)
          for (var i=0;i<resp.data.hits.length;i++) {
            this.max2his.push(resp.data.hits[i].ince)
            this.max2n.push(resp.data.hits[i].n)
            this.max2y.push(resp.data.hits[i].pre)
            this.max2name.push(resp.data.hits[i].city)
          }
          this.initMax2()
        })
      },
      initMax1(){
        let max1 = this.$echarts.init(document.getElementById("max1"),'macarons')
        max1.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            backgroundColor:'#323232'
          },
          legend: {
            bottom: 10,
            left: 'center',
            icon:'circle',
            data: ['峰值','景区历史游客峰值']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '7%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLine:{
              lineStyle:{
                color:'#888888',
                width:2
              }
            }
          },
          yAxis: {
            type: 'category',
            data: this.max1y,
            axisLine:{
              lineStyle:{
                color:'#888888',
                width:2
              }
            }
          },
          series: [
            {
              name: '峰值',
              type: 'bar',
              data: this.max1n,
              barWidth:'50%'
            },
            {
              name: '景区历史游客峰值',
              type: 'line',
              data: this.max1his,
              barWidth:'50%'
            }
          ],
          color: ['#006EFF','orange']
        })
      },
      initMax2(){
        let max1 = this.$echarts.init(document.getElementById("max2"),'macarons')
        max1.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            backgroundColor:'#323232'
          },
          legend: {
            bottom: 10,
            left: 'center',
            icon:'circle',
            data: ['当日景区客流','昨日景区客流','客流变化量']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '7%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLine:{
              lineStyle:{
                color:'#888888',
                width:2
              }
            }
          },
          yAxis: {
            type: 'category',
            data: this.max2name,
            axisLine:{
              lineStyle:{
                color:'#888888',
                width:2
              }
            }
          },
          series: [
            {
              name: '当日景区客流',
              type: 'bar',
              data: this.max2n
            },
            {
              name: '昨日景区客流',
              type: 'bar',
              data: this.max2y
            },
            {
              name: '客流变化量',
              type: 'line',
              data: this.max2his
            }
          ],
          color:['#006EFF','#29CC85','red']
        })
      },
      initSimBars(){
        let simbars = this.$echarts.init(document.getElementById("simBars"),'macarons')
        simbars.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            backgroundColor:'#323232'
          },
          xAxis: {
            type: 'category',
            data: this.barDatax1,
            axisLine:{
              lineStyle:{
                color:'#888888',
                width:2
              }
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
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
          series: [{
            data: this.barDatay,
            type: 'bar',
            barWidth:'50%'
          }],
          color:['#006EFF'],
        })
      },
      pic(val){
        this.$router.push(val)
      },
      chanchange(){
        this.barDatax1=[]
        this.barDatay1=[]
        http.get('bi/get_hot_scenic_vist_qty_by_date',{chan:this.chanclick,date:'2018-09-01',top:10}).then(resp=>{
          console.log(resp.data.hits)
          for (var i=0;i<resp.data.hits.length;i++) {
            this.barDatax1.push(resp.data.hits[i].name)
            this.barDatay1.push(parseInt(resp.data.hits[i].dau))
          }
          this.initSimBars()
        })
      }
    },
    watch:{
      chanclick:'chanchange'
    }
  }
</script>

<style scoped>

</style>
