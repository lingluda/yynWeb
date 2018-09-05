<template>
  <div>
    <div class="ti">
      <a style="margin-right: 10px;">
        <Icon type="md-arrow-back" size="16"/>
      </a> <span >旅游热度</span>
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
          <p class="tis">景区客流热力分布图</p>
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
          <div id="hotmap" style="width: 100%;height: 400px;"></div>
          <div class="button-group">
            <input type="button" class="button" value="显示热力图" @on-click="heatmap"/>
            <input type="button" class="button" value="关闭热力图" @on-click="heatmap"/>
          </div>
        </card>
        <card style="margin-bottom: 40px;margin-top: 20px">
          <p class="tis">景区接待客流数</p>
          <RadioGroup type="button" size="small">
            <Radio label="large">Large</Radio>
            <Radio label="default">Default</Radio>
            <Radio label="small">small</Radio>
          </RadioGroup>
          <DatePicker type="date" size="small" placeholder="自选时间" style="width: 120px"></DatePicker>
          <Select size="small" style="width: 120px">
            <Option>城市</Option>
          </Select>
          <Select size="small" style="width: 120px">
            <Option>区域</Option>
          </Select>
          <div style="border: 1px solid yellow;margin-top: 20px">
          <Row style="height: 300px;margin-top: 40px">
            <Col span="8">111</Col>
            <Col span="8">111</Col>
            <Col span="8">111</Col>
          </Row>
          </div>
        </card>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import http from '@/http.js'
  import AMap from 'AMap'
  var map
  export default {
    data() {
      return {
      }
    },
    mounted() {
      this.initMap()
    },
    methods: {
      initMap:function() {
        map = new AMap.Map('hotmap', {
          resizeEnable: true,
          center: [116.418261, 39.921984],
          zoom: 11
        });
        if (!isSupportCanvas()) {
          alert('热力图仅对支持canvas的浏览器适用,您所使用的浏览器不能使用热力图功能,请换个浏览器试试~')
        }
        //详细的参数,可以查看heatmap.js的文档 http://www.patrick-wied.at/static/heatmapjs/docs.html
        //参数说明如下:
        /* visible 热力图是否显示,默认为true
         * opacity 热力图的透明度,分别对应heatmap.js的minOpacity和maxOpacity
         * radius 势力图的每个点的半径大小
         * gradient  {JSON} 热力图的渐变区间 . gradient如下所示
         *	{
         .2:'rgb(0, 255, 255)',
         .5:'rgb(0, 110, 255)',
         .8:'rgb(100, 0, 255)'
         }
         其中 key 表示插值的位置, 0-1
         value 为颜色值
         */
        var heatmap;
        map.plugin(["AMap.Heatmap"], function() {
          //初始化heatmap对象
          heatmap = new AMap.Heatmap(map, {
            radius: 25, //给定半径
            opacity: [0, 0.8],

            /*,gradient:{
             0.5: 'blue',
             0.65: 'rgb(117,211,248)',
             0.7: 'rgb(0, 255, 0)',
             0.9: '#ffea00',
             1.0: 'red'
             }*/
          });
          //设置数据集：该数据为北京部分“公园”数据
          heatmap.setDataSet({
            data: heatmapData,
            max: 100
          });
        });
        //判断浏览区是否支持canvas
        function isSupportCanvas() {
          var elem = document.createElement('canvas');
          return !!(elem.getContext && elem.getContext('2d'));
        }
      },
      pic(val){
        this.$router.push(val)
      }
      }
  }
</script>

<style scoped>

</style>
