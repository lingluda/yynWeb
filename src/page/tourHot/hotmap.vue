<template>
  <div>
    <a style="margin-right: 10px;">
      <Icon type="md-arrow-back" size="16"/>
    </a> <span class="ti">旅游热度</span>
    <Tabs value="">
      <TabPane label="首页" name="name1">
      </TabPane >
      <TabPane label="热门目的地" name="name2">
      </TabPane>
      <TabPane label="热门景区" name="name3">
      </TabPane>
      <TabPane label="景区客流热力发布" name="hotmap">
        <card>
          <div></div>
        </card>
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
      this.initBar()
      this.initLine()
      this.initSimBar()
      this.initSimBars()
      this.initMax1()
      this.initMax2()
    },
    methods: {
      initBar() {
        let mybar = this.$echarts.init(document.getElementById("mybar"),'macarons')
        mybar.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            backgroundColor:'#323232'
          },
          legend: {
            //orient: 'vertical',
            bottom: 10,
            left: 'center',
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
          },
          series: [
            {
              name:'今日接待',
              type:'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
              ]
            }
          ]
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
            data: ['09-01', '09-02', '09-03', '09-04', '09-05', '09-06', '09-07']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [1, 2, 3, 4, 5, 1, 9],
            type: 'line'
          }]
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
            data: ['峰值']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '7%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: 'category',
            data: ['大理','大理','大理','大理','野象谷','西双版纳','西双版纳','西双版纳','玉龙雪山','玉龙雪山']
          },
          series: [
            {
              name: '峰值',
              type: 'bar',
              data: [1, 2, 3, 4, 5,6,7,8,9,10]
            }
          ]
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
            data: ['今日景区客流','昨日景区客流']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '7%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: 'category',
            data: ['大理','大理','大理','大理','野象谷','西双版纳','西双版纳','西双版纳','玉龙雪山','玉龙雪山']
          },
          series: [
            {
              name: '今日景区客流',
              type: 'bar',
              data: [1, 2, 3, 4, 5,6,7,8,9,10]
            },
            {
              name: '昨日景区客流',
              type: 'bar',
              data: [1, 2, 3, 4, 5,6,7,8,9,10]
            },
          ]
        })
      }
    }
  }
</script>

<style scoped>

</style>
