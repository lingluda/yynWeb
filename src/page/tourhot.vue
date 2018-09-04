<template>
  <div>
    <a style="margin-right: 10px;">
      <Icon type="md-arrow-back" size="16"/>
    </a> <span class="ti">旅游热度</span>
    <Tabs value="name1">
      <TabPane label="首页" name="name1" style="height: 500px">
        <card >
          <p class="tis">全区游客人数</p>
          <DatePicker size="small" type="daterange" placement="bottom-end" placeholder="Select date"
                      style="width: 200px"></DatePicker>
          <Select size="small" style="width: 120px">
            <Option>全省</Option>
          </Select>
          <Row style="border: 1px solid #e8eaec;margin-bottom: 20px;margin-top: 15px">
            <Col span="8" style="padding: 20px">
              <p>今日总接待游客量</p>
              <span>210,760</span><span>个</span>
            </Col>
            <!--<Col span="1"><Divider type="vertical"/></Col>-->
            <Col span="8" style="padding: 20px">
              <p>今日接待游客量同比</p>
              <span>6.2</span><span>%(<Icon type="md-arrow-round-up" style="color: red;height: 18px"/>上升百分比)</span>
            </Col>
            <Col span="8" style="padding: 20px">
              <p>今日接待游客量同比</p>
              <span>2.2</span><span>%(<Icon type="md-arrow-round-down" style="height: 18px;color: green"/>下降百分比)</span>
            </Col>
          </Row>
          <Row :gutter="16">
            <Col span="12">
              <card style="border: 1px solid #e8eaec">
                <span class="tis">各市州所占比例</span>
                <div id="mybar" style="width: 85%;height: 400px"></div>
              </card>
            </Col>
            <Col span="12">
              <card style="border: 1px solid #e8eaec">
                <span class="tis">日期区间客流 趋势分析</span><span>(人数：万)</span>
                <div id="myline" style="width: 85%;height: 400px"></div>
              </card>
            </Col>
          </Row>
        </card>
      </TabPane  >
      <TabPane label="热门目的地" name="name2">
        <card>
          <p class="tis">热门目的地网络热度TOP10</p>
          <RadioGroup type="button" size="small">
            <Radio label="large">APP访问</Radio>
            <Radio label="default">搜索引擎</Radio>
            <Radio label="small">网站报道</Radio>
          </RadioGroup>
          <div style="border: 1px solid #e8eaec;margin-top: 20px">
            <div style="margin-top: 10px;margin-right: 30px;margin-left: 30px">
            <span class="tis">一机游用户DAU</span><span>(单位：万次)</span> <DatePicker type="date" placeholder="Select date" size="small" style="width: 120px;float: right"></DatePicker>
            </div>
          <div id="simBar" style="width: 80%;height: 300px;"></div>
          </div>
        </card>
        <card>
          <div>
            <Table border :columns="columns" :data="data"></Table>
          </div>
        </card>
      </TabPane>
      <TabPane label="热门景区" name="name3">
        <card>
          <p class="tis">热门景区网络热度TOP10</p>
          <RadioGroup type="button" size="small">
            <Radio label="large">APP访问</Radio>
            <Radio label="default">搜索引擎</Radio>
            <Radio label="small">网站报道</Radio>
          </RadioGroup>
          <div style="border: 1px solid #e8eaec;margin-top: 20px">
            <div style="margin-top: 10px;margin-right: 30px;margin-left: 30px">
              <span class="tis">一机游用户DAU</span><span>(单位：万次)</span> <DatePicker type="date" placeholder="Select date" size="small" style="width: 120px;float: right"></DatePicker>
            </div>
            <div id="simBars" style="width: 80%;height: 300px;"></div>

          </div>
        </card>
        <card style="margin-top: 20px">
          <div>
            <Row :gutter="16">
              <Col span="12">
                <div style="border: 1px solid #e8eaec">
                  <div style="padding: 15px">
                  <span class="tis">景区客流TOP10</span><span>(单位：万人)</span>
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
                <div style="border: 1px solid #e8eaec">
                  <div style="padding: 15px">
                    <span class="tis">景区客流TOP10</span><span>(单位：万人)</span>
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
      <TabPane label="景区客流热力发布" name="name4">
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
              formatter: "{a} <br/>{b}: {c} ({d}%)"
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
            trigger: 'axis'
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
            }
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
            }
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
            }
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
            }
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
  .ti {
    margin-bottom: 30px;
    color: #101010;
    font-size: 15px;
    font-weight: bold;
  }

  .tis {
    margin-bottom: 20px;
    color: #101010;
    font-size: 14px;
    font-weight: bold;
  }
</style>
