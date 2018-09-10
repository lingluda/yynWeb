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
          <p class="tis">热门目的地网络热度TOP10</p>
          <RadioGroup type="button" size="small">
            <Radio label="large">APP访问</Radio>
            <Radio label="default">搜索引擎</Radio>
            <Radio label="small">网站报道</Radio>
          </RadioGroup>
          <div style="border: 1px solid #dcdee2;margin-top: 20px">
            <div style="margin-top: 10px;margin-right: 30px;margin-left: 30px">
              <span class="tis">一机游用户DAU</span><span>(单位：万次)</span> <DatePicker type="date" placeholder="自选时间" size="small" style="width: 120px;float: right"></DatePicker>
            </div>
            <div id="simBar" style="width: 100%;height: 300px;"></div>
          </div>
        </card>
        <card style="margin-top: 20px">
          <div>
            <Table border :columns="columns" :data="data"></Table>
          </div>
        </card>
      </TabPane>
      <TabPane label="热门景区" name="scenic">
      </TabPane>
      <TabPane label="景区客流热力发布" name="hotmap">
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  export default {
    name: "tourhot",
    data() {
      return {
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
        ]
      }
    },
    mounted() {
      this.initSimBar()
      this.initSimBars()
    },
    methods: {
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
            data: ['云南', '曲靖', '红河', '玉溪', '大理', '丽江', '昭通','西双版纳','昆明'],
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
            data: [4, 3, 3, 2, 2, 2, 2,2,1],
            type: 'bar',
            barWidth:'50%'
          }]
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
            data: ['云南', '曲靖', '红河', '玉溪', '大理', '丽江', '昭通','西双版纳','昆明']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [4, 3, 3, 2, 2, 2, 2,2,1],
            type: 'bar'
          }]
        })
      },
      pic(val){
        this.$router.push(val)
      }
    }
  }
</script>

<style scoped>

</style>
