<template>
  <div>
    <div class="ti">
      <span >旅游热度</span>
    </div>
    <Tabs value="destination" @on-click="pic">
      <TabPane label="首页" name="index">
      </TabPane  >
      <TabPane label="热门目的地" name="destination">
        <card>
          <div style="margin-bottom: 20px">
            <span style="font-weight: bold;color: #000000">热门目的地网络热度TOP10</span>
            <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
            </Tooltip>
          </div>
          <RadioGroup type="button" v-model="chan" size="small">
            <Radio label="app">APP访问</Radio>
            <Radio label="search">搜索引擎</Radio>
            <Radio label="website">网站报道</Radio>
          </RadioGroup>
          <div style="border: 1px solid #dcdee2;margin-top: 20px">
            <div style="margin-bottom: 20px">
              <span style="font-weight: bold;color: #000000">一机游用户DAU (单位：万次)</span>
              <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
              </Tooltip>
            </div>
            <div id="simBar" style="width: 100%;height: 300px;"></div>
          </div>
        </card>
        <card style="margin-top: 20px">
          <div>
            <Table border :columns="columns" :data="fdata"></Table>
          </div>
        </card>
      </TabPane>
      <TabPane label="热门景区" name="scenic">
      </TabPane>
      <TabPane label="景区客流热力发布" name="hotmap">
      </TabPane>
      <TabPane label="平台运营" name="platform">
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import http from '@/http.js'
  import '@/dateFormate'
  export default {
    name: "tourhot",
    data() {
      return {
        chan:'app',
        barDatax:[],
        barDatay:[],
        columns: [
          {
            title: '热门路线',
            key: 'name',
          },
          {
            title: '购买次数',
            key: 'order',
          },{
            title: '热门路线DAU量(次)',
            key: 'dau',
          },
          {
            title: '价格(元)',
            key: 'price',
          }
        ],
        fdata:[]
      }
    },
    mounted() {

      this.init()
    },
    methods: {
      init(){
        var date = new Date().format(
          "yyyy-MM-dd"
        )
        http.get('api/get_hot_desc_vist_qty_by_date',{chan:'app',date:'2018-09-01',top:10}).then(resp=>{
          for (var i=0;i<resp.data.hits.length;i++) {
            this.barDatax.push(resp.data.hits[i].name)
            this.barDatay.push(parseInt(resp.data.hits[i].dau))
          }
          this.initSimBar()
        })
        http.get('api/get_hot_line_by_date',{date:'2018-08-22',top:10}).then(resp=>{
          console.log(resp.data.hits)
          this.fdata = resp.data.hits;
        })
      },
      initSimBar(){
        let simbar = this.$echarts.init(document.getElementById("simBar"),'macarons')
        simbar.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            backgroundColor:'#323232'
          },
          color:['#006EFF'],
          xAxis: {
            type: 'category',
            data: this.barDatax,
            axisLine:{
              lineStyle:{
                color:'#888888',
        width:2
      }
      },
          },
          grid: {
            left: '3%',
            right: '5%',
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
          }]
        })
      },

      pic(val){
        this.$router.push(val)
      },
      clickchange(){
        this.barDatax=[]
        this.barDatay=[]
        var date = new Date().format(
          "yyyy-MM-dd"
        )
        http.get('api/get_hot_desc_vist_qty_by_date',{chan:this.chan,date:'2018-09-01',top:10}).then(resp=>{
          console.log('sb',resp.data.hits)
          for (var i=0;i<resp.data.hits.length;i++) {
            this.barDatax.push(resp.data.hits[i].name)
            this.barDatay.push(parseInt(resp.data.hits[i].dau))
          }
          this.initSimBar()
        })
      }
    },
    watch:{
      chan:'clickchange',
    }
  }
</script>

<style scoped>

</style>
