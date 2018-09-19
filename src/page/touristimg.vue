<template>
  <div>
    <div class="ti">
     <span >游客画像</span>
    </div>
    <card>
      <div style="margin-bottom: 20px">
        <span style="font-weight: bold;color: #000000">基本属性分析</span>
        <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
        </Tooltip>
      </div>
      <RadioGroup type="button" size="small">
        <Radio label="large">全省</Radio>
        <Radio label="default">州市/景区</Radio>
      </RadioGroup>
      <Select size="small" style="width: 120px" placeholder="清选择">
        <Option>城市</Option>
      </Select>
      <Select size="small" style="width: 120px" placeholder="清选择">
        <Option>区域</Option>
      </Select>
      <DatePicker size="small" type="date" v-model="picDate" placeholder="自选时间" style="width: 120px"></DatePicker>
      <Row :gutter="16" style="margin-top: 20px">
        <Col span="8">
            <div style="display: flex;border: 1px solid #dcdee2;height: 320px;width: 100%">
            <div style="width: 15%;height: 320px;display: flex">
              <Icon type="ios-woman" size="32" color="#ff50fe" style="display: flex;align-items: center;margin-left: 60%"/>
            </div>
            <div id="sex" style="width: 70%;height: 320px;"></div>
            <div style="width: 15%;height: 320px;display: flex">
              <Icon type="ios-man" size="32" color="#1ea9ff" style="display: flex;align-items: center;"/>
            </div>
            </div>
        </Col>
        <Col span="8">
          <div id="in" style="width: 100%;height: 320px;border: 1px solid #dcdee2"></div>
        </Col>
        <Col span="8">
          <div id="os" style="width: 100%;height: 320px;border: 1px solid #dcdee2"></div>
        </Col>
      </Row>
      <Row :gutter="16" style="margin-top: 20px">
        <Col span="8">
          <div id="age" style="width: 100%;height: 320px;border: 1px solid #dcdee2"></div>
        </Col>
        <Col span="8">
          <div id="edu" style="width: 100%;height: 320px;border: 1px solid #dcdee2"></div>
        </Col>
        <Col span="8">
          <div id="client" style="width: 100%;height: 320px;border: 1px solid #dcdee2"></div>
        </Col>
      </Row>
      <Row :gutter="16" style="margin-top: 20px;margin-bottom: 40px">
        <Col span="8">
          <div id="industry" style="width: 100%;height: 320px;border: 1px solid #dcdee2"></div>
        </Col>
        <Col span="8">
          <div id="city" style="width: 100%;height: 320px;border: 1px solid #dcdee2"></div>
        </Col>
        <Col span="8">
          <div id="province" style="width: 100%;height: 320px;border: 1px solid #dcdee2"></div>
        </Col>
      </Row>
    </card>
    <card style="margin-top: 20px">
      <div style="margin-bottom: 20px">
        <span style="font-weight: bold;color: #000000">人口迁移分析</span>
        <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
        </Tooltip>
      </div>
      <RadioGroup type="button" size="small">
        <Radio label="all">全部</Radio>
        <Radio label="default">飞机</Radio>
        <Radio label="small">火车</Radio>
        <Radio label="car">汽车</Radio>
      </RadioGroup>
      <DatePicker size="small" type="date" placeholder="自选时间" style="width: 120px"></DatePicker>
      <Select size="small" style="width: 120px" placeholder="清选择">
        <Option>昆明</Option>
      </Select>
      <Row :gutter="16" style="margin-top: 20px;margin-bottom: 40px">
        <Col span="10">
          <div>
            <Tabs v-model="tabname" style="border-top: 1px solid #dcdee2;border-left: 1px solid #dcdee2;border-right: 1px solid #dcdee2">
              <TabPane label="迁入" name="in">
                <Table  height="449" :columns="columns1" :data="data1"></Table>
              </TabPane>
              <TabPane label="迁出" name="out">
                <Table  height="449" :columns="columns1" :data="data1"></Table>
              </TabPane>
            </Tabs>
          </div>
        </Col>
        <Col span="14">
          <div id="moveMap" style="border: 1px solid #dcdee2;height: 500px"></div>
        </Col>
      </Row>
    </card>
    <card style="margin-top: 20px">
      <div style="margin-bottom: 20px">
        <span style="font-weight: bold;color: #000000">消费维度分析</span>
        <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
        </Tooltip>
      </div>
    <RadioGroup type="button" size="small">
      <Radio label="all">当日</Radio>
      <Radio label="default">当月</Radio>
    </RadioGroup>
      <DatePicker size="small" type="date" placeholder="自选时间" style="width: 120px"></DatePicker>
      <Row :gutter="16" style="margin-top: 20px;margin-bottom: 40px">
        <Col span="12">
          <div style="height: 300px;border: 1px solid #dcdee2">
            <div style="margin-left: 20px;margin-top: 20px">
            <p style="font-weight: bold">用户平均消费金额</p>
            <span style="font-size: 32px">{{vagprice}}</span>元
            </div>
            <Divider></Divider>
            <div style="margin-left: 20px">
            <p style="font-weight: bold">中位点用户消费金额</p>
            <span style="font-size: 32px">{{middle}}</span>元
            </div>
          </div>
        </Col>
        <Col span="12">
          <div id="cash" style="border: 1px solid #dcdee2;height:300px;width:100%"></div>
        </Col>
      </Row>
    </card>
  </div>
</template>
<script>
  import http from '@/http.js'
  import '@/dateFormate.js'
  export default {
    data() {
      return {
        vagprice:'',
        middle:'',
        tabname:'in',
        sexData:[],
        inData:[],
        osData:[],
        ageDatax:[],
        ageDatay:[],
        eduDatax:[],
        eduDatay:[],
        cliData:[],
        ddData:[],
        cityData:[],
        proData:[],
        picDate:'',
        columns1: [
          {
            title:'排名',
            type: 'index',
            width: 60,
            align: 'center'
          },
          {
            title: '起始站',
            key: 'from',
            width: 80
          },
          {
            title: '终点站',
            key: 'to',
            width: 80
          },
          {
            title: '热度',
            key: 'n'
          },
          {
            title: '汽车',
            key: 'car'
          },
          {
            title: '火车',
            key: 'train'
          },
          {
            title: '飞机',
            key: 'plane'
          },
        ],
        data1: [],
        cashData:[],
        cashDataX:[],

      }
    },
    mounted() {
      this.init()
      this.initClient()
      this.initIndu()
      this.initCity()
      this.initPro()

      this.initMap()
    },
    methods: {
      init(){
        var date = new Date().format(
          "yyyy-MM-dd"
        )
        this.picDate = date;
        http.get('api/get_portrait_base_by_date',{date:'2018-09-14'}).then(resp=>{
          this.sexData =resp.data.hist.gender;
          this.inData =resp.data.hist.consumpting;
          for (var i=0;i<resp.data.hist.edu.length;i++){
            this.eduDatax.push(resp.data.hist.edu[i].name)
            this.eduDatay.push(resp.data.hist.edu[i].value)
          }
          this.osData =resp.data.hist.mobile;
          for (var i=0;i<resp.data.hist.age.length;i++){
            this.ageDatax.push(resp.data.hist.age[i].name)
            this.ageDatay.push(resp.data.hist.age[i].value)
          }
          this.carData =resp.data.hist.car;
          this.initSex();
          this.initOS();
          this.initIn();
          this.initEdu();
          this.initAge();
          http.get('api/get_portrait_origin_by_date',{date:'2018-09-14',type:'city',scenic:'',city_id:''}).then(resp=>{
            console.log('city',resp)
          })
          http.get('api/get_migrate_by_date',{date:'2018-08-25',city_name:'大理',top:10,io:this.tabname}).then(resp=>{
            this.data1 = resp.data.hits;
          })
          http.get('api/get_consume_by_date',{date:'2018-08-01',city_id:392}).then(resp=>{
            this.vagprice = resp.data.hist.avg_amount;
              this.middle= resp.data.hist.median_amount;
          })
          http.get('api/get_consume_type_by_mon',{startTime:'2018-07',endTime:'2018-09'}).then(resp=>{
            console.log('get_consume_type_by_mon',resp.data.hits)
            this.cashData=resp.data.hits;
            for (var i=0;i<resp.data.hits.length;i++) {
              this.cashDataX.push(resp.data.hits[i].name)
            }
            console.log('this.cashData',this.cashData)
            console.log('this.cashData',this.cashDataX)
            this.initCash()
          })
        })

      },
      initMap(){
        var center = new qq.maps.LatLng(26.90923, 108.397428);
        var map = new qq.maps.Map(document.getElementById('moveMap'),{
          center: center,
          zoom: 5
        });
        var path1=[
          new qq.maps.LatLng(24.87966,102.83322),
          new qq.maps.LatLng(22.54666503349262, 114.05956000000003)
        ];
        var polyline = new qq.maps.Polyline({
          path: path1,
          strokeColor: '#0ef94a',
          strokeWeight: 2,
          editable:false,
          map: map
        });
      },
      initSex() {
        console.log('123122222222222',this.sexData)
        let sex = this.$echarts.init(document.getElementById("sex"))
        sex.setOption({
          title : {
            text: '性别占比(%)',
            textStyle:{
              fontSize:14,
            },
            x:'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            axisPointer: {
              type: 'shadow'
            },
            backgroundColor:'#323232'

          },
          legend: {
            bottom:10,
            x: 'center',
            icon:'circle',
            data: ['女士','男士']
          },
          series: [
            {
              name: '性别占比',
              type: 'pie',
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
              color: ['#1ea9ff','#ff50fe',],
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: this.sexData
            }
          ]
        })
      },
      initIn() {
        let Sin = this.$echarts.init(document.getElementById("in"))
        Sin.setOption({
          title : {
            text: '消费占比(%)',
            textStyle:{
              fontSize:14,
            },
            x:'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            axisPointer: {
              type: 'shadow'
            },
            backgroundColor:'#323232'

          },
          legend: {
            bottom:3,
            x: 'center',
            icon:'circle',
            data: ['低消费', '较低消费', '中消费','较高消费','高消费']
          },
          series: [
            {
              name: '收入占比',
              type: 'pie',
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
              color: ['#006EFF','#29CC85','#ffbb00','#ff584c','#9741d9','#1fc0cc','#7ff936','#ff9c19','#e63984','#655ce6','#47cc50','#fb0b6'],
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: this.inData
            }
          ]
        })
      },
      initOS() {
        let os = this.$echarts.init(document.getElementById("os"))
        os.setOption({
          title : {
            text: '操作系统(%)',
            textStyle:{
              fontSize:14,
            },
            x:'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            axisPointer: {
              type: 'shadow'
            },
            backgroundColor:'#323232'

          },
          legend: {
            bottom:10,
            x: 'center',
            icon:'circle',
            data: ['Android',  'IOS']
          },
          series: [
            {
              name: '操作系统',
              type: 'pie',
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
              color: ['#006EFF','#29CC85'],
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: this.osData
            }
          ]
        })
      },
      initCash() {
        let cash = this.$echarts.init(document.getElementById("cash"))
        cash.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            axisPointer: {
              type: 'shadow'
            },
            backgroundColor:'#323232'

          },
          legend: {
            orient:'vertical',
            right:40,
            top:120,
            bottom:12,
            icon:'circle',
            data: this.cashDataX
          },
          series: [
            {
              name: '消费分析',
              type: 'pie',
              //radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'left'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              color: ['#006EFF','#29CC85','#ffbb00','#ff584c','#9741d9','#1fc0cc'],
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: this.cashData
            }
          ]
        })
      },
      initAge(){
        let age = this.$echarts.init(document.getElementById("age"),)
        age.setOption({
          title: {
            text: '年龄占比(%)',
            textStyle:{
              fontSize:14,
            },
            x:'center'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            backgroundColor:'#323232'
          },

          grid: {
            left: '1%',
            right: '10%',
            bottom: '4%',
            containLabel: true
          },
          xAxis: {
            type: 'value',

            boundaryGap: [0, 0.1]
          },
          yAxis: {
            type: 'category',
            data: this.ageDatax
          },

          series: [
            {
              name: '2011年',
              type: 'bar',
              data: this.ageDatay,
              barWidth:'50%',
              label: {
                normal: {
                  show: true,
                  position: 'right'
                }
              },
            }
          ],
          color:['#006EFF'],
        })
      },
      initEdu(){
        let edu = this.$echarts.init(document.getElementById("edu"),)
        edu.setOption({
          title: {
            text: '学历占比(%)',
            textStyle:{
              fontSize:14,
            },
            x:'center'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            backgroundColor:'#323232'
          },

          grid: {
            left: '1%',
            right: '10%',
            bottom: '4%',
            containLabel: true
          },
          xAxis: {
            type: 'value',

            boundaryGap: [0, 0.1]
          },
          yAxis: {
            type: 'category',
            data: this.eduDatax
          },

          series: [
            {
              name: '2011年',
              type: 'bar',
              data: this.eduDatay,
              barWidth:'50%',
              label: {
                normal: {
                  show: true,
                  position: 'right'
                }
              },
            }
          ],
          color:['#006EFF'],
        })
      },
      initClient(){
        let client = this.$echarts.init(document.getElementById("client"),)
        client.setOption({
          title: {
            text: '终端类型(%)',
            textStyle:{
              fontSize:14,
            },
            x:'center'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            backgroundColor:'#323232'
          },

          grid: {
            left: '1%',
            right: '10%',
            bottom: '4%',
            containLabel: true
          },
          xAxis: {
            type: 'value',

            boundaryGap: [0, 0.1]
          },
          yAxis: {
            type: 'category',
            data: ['其他','三星','HTC','小米','华为','苹果']
          },

          series: [
            {
              name: '2011年',
              type: 'bar',
              data: [34.12, 29, 12, 21, 12,32],
              barWidth:'50%',
              label: {
                normal: {
                  show: true,
                  position: 'right'
                }
              },
            }
          ],
          color:['#006EFF'],
        })
      },
      initIndu(){
        let indu = this.$echarts.init(document.getElementById("industry"),)
        indu.setOption({
          title: {
            text: '工作行业(%)',
            textStyle:{
              fontSize:14,
            },
            x:'center'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            backgroundColor:'#323232'
          },

          grid: {
            left: '1%',
            right: '10%',
            bottom: '4%',
            containLabel: true
          },
          xAxis: {
            type: 'value',

            boundaryGap: [0, 0.1]
          },
          yAxis: {
            type: 'category',
            data: ['教育','金融','服务','外包','自媒体','房地产']
          },

          series: [
            {
              name: '2011年',
              type: 'bar',
              data: [34.12, 29, 12, 21, 12,32],
              barWidth:'50%',
              label: {
                normal: {
                  show: true,
                  position: 'right'
                }
              },
            }
          ],
          color:['#006EFF'],
        })
      },
      initCity(){
        let city = this.$echarts.init(document.getElementById("city"),)
        city.setOption({
          title: {
            text: '来源城市(%)',
            textStyle:{
              fontSize:14,
            },
            x:'center'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            backgroundColor:'#323232'
          },

          grid: {
            left: '1%',
            right: '10%',
            bottom: '4%',
            containLabel: true
          },
          xAxis: {
            type: 'value',

            boundaryGap: [0, 0.1]
          },
          yAxis: {
            type: 'category',
            data: ['成都','武汉','北京','丽江','云南','普洱']
          },

          series: [
            {
              name: '2011年',
              type: 'bar',
              data: [34.12, 29, 12, 21, 12,32],
              barWidth:'50%',
              label: {
                normal: {
                  show: true,
                  position: 'right'
                }
              },
            }
          ],
          color:['#006EFF'],
        })
      },
      initPro(){
        let pro = this.$echarts.init(document.getElementById("province"),)
        pro.setOption({
          title: {
            text: '来源省份(%)',
            textStyle:{
              fontSize:14,
            },
            x:'center'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            backgroundColor:'#323232'
          },

          grid: {
            left: '1%',
            right: '10%',
            bottom: '4%',
            containLabel: true
          },
          xAxis: {
            type: 'value',

            boundaryGap: [0, 0.1]
          },
          yAxis: {
            type: 'category',
            data: ['广西','广东','福建','山西','云南','新疆']
          },

          series: [
            {
              name: '2011年',
              type: 'bar',
              data: [34.12, 29, 12, 21, 12,32],
              barWidth:'50%',
              label: {
                normal: {
                  show: true,
                  position: 'right'
                }
              },
            }
          ],
          color:['#006EFF'],
        })
      },
      clicktab(){
        http.get('api/get_migrate_by_date',{date:'2018-08-25',city_name:'大理',top:10,io:this.tabname}).then(resp=>{
          this.data1 = resp.data.hits;
          console.log('this.data1',this.data1)
        })
      }
    },
    watch:{
      picDate:'dateChange',
      tabname:'clicktab'
    }
  }
</script>
<style scoped>
  .ivu-table-wrapper{
    border: unset;
  }
  div.ivu-table:after {
    background-color:unset !important;
  }
</style>
