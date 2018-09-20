<template>
  <div>
    <div class="ti">
      <span >旅游热度</span>
    </div>
    <Tabs value="hotmap" @on-click="pic">
      <TabPane label="首页" name="index">
      </TabPane >
      <TabPane label="热门目的地" name="destination">
      </TabPane>
      <TabPane label="热门景区" name="scenic">
      </TabPane>
      <TabPane label="景区客流热力发布" name="hotmap">
        <card>
          <div style="margin-bottom: 20px">
            <div style="margin-bottom: 20px">
              <span style="font-weight: bold;color: #000000">景区客流热力分布图</span>
              <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
              </Tooltip>
            </div>
          <Select size="small" style="width: 120px">
            <Option>城市</Option>
          </Select>
          <Select size="small" style="width: 120px">
            <Option>城市</Option>
          </Select>
            <DatePicker type="date" size="small" placeholder="自选时间" style="width: 120px"></DatePicker>
          <Select size="small" style="width: 120px">
            <Option>城市</Option>
          </Select>
            <Select size="small" style="width: 120px">
              <Option>刻度</Option>
            </Select>
          </div>
          <div id="hotmap" style="width: 100%;height: 400px;" class="heatmap"></div>
        </card>
        <card style="margin-bottom: 40px;margin-top: 20px">
          <div style="margin-bottom: 20px">
            <span style="font-weight: bold;color: #000000">景区接待客流数</span>
            <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
            </Tooltip>
          </div>
          <RadioGroup type="button" size="small">
            <Radio label="large">当日</Radio>
            <Radio label="default">当月</Radio>
            <Radio label="small">当年</Radio>
          </RadioGroup>
          <DatePicker type="date" size="small" placeholder="自选时间" style="width: 120px"></DatePicker>
          <Select size="small" style="width: 120px">
            <Option>城市</Option>
          </Select>
          <Select size="small" style="width: 120px">
            <Option>区域</Option>
          </Select>
          <div style="border: 1px solid yellow;margin-top: 20px">
          <Row style="height: 300px;">
            <Col span="10">
              <div id="gauge" style="width: 100%;height: 300px;"></div>
            </Col>
            <Col span="7">
              <div style="margin-top: 100px">
              <p style="font-weight: bold">当前实时客流人数同比</p>
              <span style="font-weight: bold;font-size: 32px">0.9</span><span>% (上升百分百)</span>
              </div>
            </Col>

            <Col span="7">

              <p style="font-weight: bold">当前实时客流人数环比</p>
            </Col>
          </Row>
          </div>
        </card>
      </TabPane>
      <TabPane label="平台运营" name="platform">
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import http from '@/http.js'
  import AMap from 'AMap'
  var map
  var heatmap
  var testData
  export default {
    data() {
      return {
        mapData:[],
      }
    },
    mounted() {

      this.initGauge()
      this.init()
    },
    methods: {
      init(){
        http.get('bi/get_scenic_tourist_heat_dist',{date:'2018-09-01',scenic:'9df331f4-5ef7-497c-7042-ae6c1e12342c',min:60}).then(resp=>{
            console.log('地图：：',resp.data.hits)
          this.initMap(resp.data.hits[0].points)
        })
      },
      initMap:function(x) {
        map = new qq.maps.Map(document.getElementById("hotmap"), {
          zoom: 16,
          center: new qq.maps.LatLng(x[0].lat, x[0].lng)
        });

        //地图异步加载，在idle或者tilesloaded后初始化
        qq.maps.event.addListenerOnce(map, "idle", function () {
          if (QQMapPlugin.isSupportCanvas) {
            heatmap = new QQMapPlugin.HeatmapOverlay(map,
              {
                //点半径，设置为1即可
                "radius": 1,
                //热力图最大透明度
                "maxOpacity": 0.8,
                //是否在每一屏都开启重新计算，如果为true则每一屏都会有一个红点
                "useLocalExtrema": true,
                //设置大小字段
                "valueField": 'count'
              }
            );

            testData = {
              max: 100,
              data: x
            };
            //绘制热力图
            heatmap.setData(testData);
          } else {
            alert("您的浏览器不支持canvas，无法绘制热力图！！")
          }

        });


      },

      initGauge(){
        let gauge = this.$echarts.init(document.getElementById("gauge"))
        gauge.setOption({
          tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
          },
          toolbox: {
            feature: {
              restore: {},
              saveAsImage: {}
            }
          },
          series: [
            {
              name: '业务指标',
              type: 'gauge',
              detail: {formatter:'{value}%'},
              data: [{value: 50, name: '完成率'}]
            }
          ]
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
