<template>
  <div>
    <div class="ti">
     <span >游客画像</span>
    </div>
    <card>
      <p class="tis">基本属性分析</p>
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
      <DatePicker size="small" type="date" placeholder="自选时间" style="width: 120px"></DatePicker>
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
          <div id="age" style="width: 100%;height: 320px;border: 1px solid #dcdee2"></div>
        </Col>
        <Col span="8">
          <div id="edu" style="width: 100%;height: 320px;border: 1px solid #dcdee2"></div>
        </Col>
      </Row>
      <Row :gutter="16" style="margin-top: 20px">
        <Col span="8">
          <div id="in" style="width: 100%;height: 320px;border: 1px solid #dcdee2"></div>
        </Col>
        <Col span="8">
          <div id="client" style="width: 100%;height: 320px;border: 1px solid #dcdee2"></div>
        </Col>
        <Col span="8">
          <div id="os" style="width: 100%;height: 320px;border: 1px solid #dcdee2"></div>
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
      <p class="tis">人口迁移分析</p>
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
            <Tabs value="name1" style="border-top: 1px solid #dcdee2;border-left: 1px solid #dcdee2;border-right: 1px solid #dcdee2">
              <TabPane label="迁入" name="name1">
                <Table  height="449" :columns="columns1" :data="data1"></Table>
              </TabPane>
              <TabPane label="迁出" name="name2">
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
    <p class="tis">消费维度分析</p>
    <RadioGroup type="button" size="small">
      <Radio label="all">当日</Radio>
      <Radio label="default">当月</Radio>
    </RadioGroup>
      <DatePicker size="small" type="date" placeholder="自选时间" style="width: 120px"></DatePicker>
      <Row :gutter="16" style="margin-top: 20px;margin-bottom: 40px">
        <Col span="8">
          <div style="height: 400px;border: 1px solid #dcdee2">
            <div style="margin-top: 40px;margin-left: 20px">
            <p style="font-weight: bold">平台活跃用户数</p>
            <span style="font-size: 32px">210000</span>个
            </div>
            <Divider></Divider>
            <div style="margin-left: 20px">
            <p style="font-weight: bold">用户平均消费金额</p>
            <span style="font-size: 32px">2350</span>元
            </div>
            <Divider></Divider>
            <div style="margin-left: 20px">
            <p style="font-weight: bold">中位点用户消费金额</p>
            <span style="font-size: 32px">2000</span>元
            </div>
          </div>
        </Col>
        <Col span="16">
          <div id="cash" style="border: 1px solid #dcdee2;height:400px;width:100%;float: left"></div>
        </Col>
      </Row>
    </card>
  </div>
</template>
<script>
  import AMap from 'AMap'
  export default {
    data() {
      return {
        columns1: [
          {
            title:'排名',
            type: 'index',
            width: 60,
            align: 'center'
          },
          {
            title: '路线',
            key: 'line'
          },
          {
            title: '热度',
            key: 'hot'
          },
          {
            title: '汽车',
            key: 'card'
          },
          {
            title: '火车',
            key: 'train'
          },
          {
            title: '飞机',
            key: 'air'
          },
        ],
        data1: [
          {
            line: '深圳-昆明',
            hot: 18.8,
            card: '38%',
            train: '62%',
            air:'0%'
          },
          {
            line: '深圳-昆明',
            hot: 18.8,
            card: '38%',
            train: '62%',
            air:'0%'
          },
          {
            line: '深圳-昆明',
            hot: 18.8,
            card: '38%',
            train: '62%',
            air:'0%'
          },
          {
            line: '深圳-昆明',
            hot: 18.8,
            card: '38%',
            train: '62%',
            air:'0%'
          },
          {
            line: '深圳-昆明',
            hot: 18.8,
            card: '38%',
            train: '62%',
            air:'0%'
          },
          {
            line: '深圳-昆明',
            hot: 18.8,
            card: '38%',
            train: '62%',
            air:'0%'
          },
          {
            line: '深圳-昆明',
            hot: 18.8,
            card: '38%',
            train: '62%',
            air:'0%'
          },
          {
            line: '深圳-昆明',
            hot: 18.8,
            card: '38%',
            train: '62%',
            air:'0%'
          },
          {
            line: '深圳-昆明',
            hot: 18.8,
            card: '38%',
            train: '62%',
            air:'0%'
          },
          {
            line: '深圳-昆明',
            hot: 18.8,
            card: '38%',
            train: '62%',
            air:'0%'
          },
        ]
      }
    },
    mounted() {
      this.initSex()
      this.initAge()
      this.initIn()
      this.initOS()
      this.initEdu()
      this.initClient()
      this.initIndu()
      this.initCity()
      this.initPro()
      this.initCash()
      this.initMap()
    },
    methods: {
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

        /*var map = new AMap.Map('moveMap', {
          resizeEnable: true,
          center: [108.397428, 26.90923],
          zoom: 5
        });
        var lineArr = [
          ['102.83322', '24.88339746520424'],
          ['114.05956000000003', '22.54666503349262']
        ];
        var polyline = new AMap.Polyline({
          path: lineArr,            // 设置线覆盖物路径
          strokeColor: '#3366FF',   // 线颜色
          strokeOpacity: 1,         // 线透明度
          strokeWeight: 2,          // 线宽
          strokeStyle: 'solid',     // 线样式
          strokeDasharray: [10, 5], // 补充线样式
          geodesic: true            // 绘制大地线
        });
        polyline.setMap(map);

        var lineArr1 = [
          ['102.83322', '24.88339746520424'],
          ['114.30524999999997', '30.594828718750055']
        ];
        var polyline1 = new AMap.Polyline({
          path: lineArr1,            // 设置线覆盖物路径
          strokeColor: '#3366FF',   // 线颜色
          strokeOpacity: 1,         // 线透明度
          strokeWeight: 2,          // 线宽
          strokeStyle: 'solid',     // 线样式
          strokeDasharray: [10, 5], // 补充线样式
          geodesic: true            // 绘制大地线
        });
        polyline1.setMap(map);*/
      },
      initSex() {
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
            data: ['男',  '女']
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
              data: [
                {value: 335, name: '男'},
                {value: 310, name: '女'},
              ]
            }
          ]
        })
      },
      initIn() {
        let Sin = this.$echarts.init(document.getElementById("in"))
        Sin.setOption({
          title : {
            text: '收入占比(%)',
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
            data: ['低收入', '中收入', '高收入']
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
              color: ['#006EFF','#29CC85','#ffbb00'],
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {value: 335, name: '低收入'},
                {value: 310, name: '中收入'},
                {value: 310, name: '高收入'},
              ]
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
            data: ['安卓',  'IOS']
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
              data: [
                {value: 335, name: '安卓'},
                {value: 310, name: 'IOS'},
              ]
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
            right:24,
            top:120,
            bottom:12,
            data: ['安卓',  'IOS1',  'IOS2',  'IOS3',  'IOS4']
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
              data: [
                {value: 335, name: '安卓'},
                {value: 310, name: 'IOS1'},
                {value: 310, name: 'IOS2'},
                {value: 310, name: 'IOS3'},
                {value: 310, name: 'IOS4'},
              ]
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
            data: ['>55','45-54','35-44','25-34','19-24','0-18']
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
            data: ['博士','硕士','本科','专科','高中']
          },

          series: [
            {
              name: '2011年',
              type: 'bar',
              data: [34.12, 29, 12, 21, 12],
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
