<template>
  <div>
  <div class="ti">
    <span >旅游热度</span>
  </div>
    <div>
    <card>
      <div style="margin-bottom: 20px">
        <span style="font-weight: bold;color: #000000">舆情总体指标</span>

      </div>
      <Row style="width: 100%;height: 300px;border: 1px solid #dcdee2">
        <div style="margin-bottom: 20px">
          <span style="font-weight: bold;color: #000000">云南省舆情正负面情绪分析</span>

        </div>
        <Col span="12">
          <div id="health" style="width: 100%;height: 235px"></div>
        </Col>
        <Col span="12">
          <div id="unhealth" style="width: 100%;height: 235px"></div>
        </Col>
      </Row>

    </card>
      <Row :gutter="16" style="margin-top: 20px;">
        <Col span="12" style="height: 200px">
          <card>
            <div style="margin-bottom: 20px">
              <span style="font-weight: bold;color: #000000">全省网络热词TOP10</span>
              <Tooltip content="与全省相关网络热词排行" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
              </Tooltip>
            </div>
            <Table :columns="columns1" :data="data1"></Table>
          </card>
        </Col>
        <Col span="12" style="height: 300px">
          <card>
            <div >
              <div style="margin-bottom: 20px">
                <span style="font-weight: bold;color: #000000">州市网络热词TOP10</span>
                <Tooltip content="与州市相关的网络热词排行" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
                </Tooltip>
                <Select style="width: 120px;float: right">
                  <Option>丽江市</Option>
                </Select>
              </div>

            </div>
            <Table :columns="columns1" :data="data1"></Table>
          </card>
        </Col>
      </Row>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        columns1: [
          {
            title: 'Name',
            key: 'name'
          },
          {
            title: 'Age',
            key: 'age'
          },
          {
            title: 'Address',
            key: 'address'
          }
        ],
        data1: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ]
      }
    },
    mounted(){
      this.initHealth()
      this.initUNHealth()
      this.initHealth1()
      this.initUNHealth1()
    },
    methods:{
      initHealth(){
      let health = this.$echarts.init(document.getElementById("health"))
        health.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)",
            backgroundColor:'#323232'
          },
          legend: {
            //orient: 'vertical',
            bottom:0,
            left: 'center',
            icon:'circle',
            data:['媒体正面情绪','媒体中面情绪','媒体负面情绪']
          },
          series: [
            {
              name:'',
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
                    fontSize: '15',
                    fontWeight: 'bold',
                    color:'#000000'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data:[
                {value:335, name:'媒体正面情绪'},
                {value:310, name:'媒体中面情绪'},
                {value:234, name:'媒体负面情绪'}
              ],
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
      initUNHealth(){
        let unhealth = this.$echarts.init(document.getElementById("unhealth"))
        unhealth.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)",
            backgroundColor:'#323232'
          },
          legend: {
            //orient: 'vertical',
            bottom:0,
            left: 'center',
            icon:'circle',
            data:['媒体正面情绪','媒体中面情绪','媒体负面情绪']
          },
          series: [
            {
              name:'',
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
                    fontSize: '15',
                    fontWeight: 'bold',
                    color:'#000000'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data:[
                {value:335, name:'媒体正面情绪'},
                {value:310, name:'媒体中面情绪'},
                {value:234, name:'媒体负面情绪'}
              ],
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
          color: ['#29CC85','#ffbb00','#ff584c','#9741d9','#1fc0cc','#7ff936','#ff9c19','#e63984','#655ce6','#47cc50','#fb0b6']
        })
      },
      initHealth1(){
        let health1 = this.$echarts.init(document.getElementById("health1"))
        health1.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)",
            backgroundColor:'#323232'
          },
          legend: {
            //orient: 'vertical',
            bottom:0,
            icon:'circle',
            left: 'center',
            data:['媒体正面情绪','媒体中面情绪','媒体负面情绪']
          },
          series: [
            {
              name:'',
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
                    fontSize: '15',
                    fontWeight: 'bold',
                    color:'#000000'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data:[
                {value:335, name:'媒体正面情绪'},
                {value:310, name:'媒体中面情绪'},
                {value:234, name:'媒体负面情绪'}
              ],
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
      initUNHealth1(){
        let unhealth1 = this.$echarts.init(document.getElementById("unhealth1"))
        unhealth1.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)",
            backgroundColor:'#323232'
          },
          legend: {
            //orient: 'vertical',
            bottom:0,
            icon:'circle',
            left: 'center',
            data:['媒体正面情绪','媒体中面情绪','媒体负面情绪']
          },
          series: [
            {
              name:'',
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
                    fontSize: '15',
                    fontWeight: 'bold',
                    color:'#000000'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data:[
                {value:335, name:'媒体正面情绪'},
                {value:310, name:'媒体中面情绪'},
                {value:234, name:'媒体负面情绪'}
              ],
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
          color: ['#29CC85','#ffbb00','#ff584c','#9741d9','#1fc0cc','#7ff936','#ff9c19','#e63984','#655ce6','#47cc50','#fb0b6']
        })
      },
    }
  }
</script>
