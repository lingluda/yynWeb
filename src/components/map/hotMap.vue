<template>
  <div>
  <div id="map-canvas" style="width: 100%;height: 400px;" class="heatmap">
    <div class="visualmap">
      <div>
        <span>颜色对应人口密度</span>
        <span style="float:right; margin-right:10px;">人/100平方米</span>
      </div>
      <div class="bargrad"></div>
      <div class="range">
        <span>0-55</span>
        <span>56-121</span>
        <span>122-187</span>
        <span>188-221</span>
        <span>>221</span>
      </div>
    </div>
  </div>
    <div id="main" style="width: 100%; height: 70px; border: 1px solid #ccc;"></div>
  </div>
</template>

<script>
    import http from '@/http.js'
    var heatmap;
    export default {
        name: "hotMap",
      props:{
        x2:String,
        x3:Date,
        x4:String,
      },
      data(){
          return{
            centerx:[],
            timelines:[],
            arrIndex:'',
            testData:[]
          }
      },
      mounted(){
      },
      methods:{
          init(){
            this.timelines=[]
            http.get('bi/get_scenic_tourist_heat_dist',{date:http.gmt2str(this.x3),scenic:this.x2,min:this.x4}).then(resp=>{
              this.centerx = [resp.data.hits[0].points[0].lng,resp.data.hits[0].points[0].lat]
              this.testData=resp.data.hits;
              for (var i = 0; i < resp.data.hits.length; i++) {
                this.timelines.push(resp.data.hits[i].time)
              }
              this.initMap()
            })
          },
          initMap(){
            var map = new qq.maps.Map(document.getElementById("map-canvas"), {
              zoom: 14,
              mapTypeControlOptions: {
                //设置控件的地图类型ID，ROADMAP显示普通街道地图，SATELLITE显示卫星图像，HYBRID显示卫星图像上的主要街道透明层
                mapTypeIds: [
                  qq.maps.MapTypeId.ROADMAP,
                  qq.maps.MapTypeId.SATELLITE,
                  qq.maps.MapTypeId.HYBRID
                ],
                //设置控件位置相对上方中间位置对齐
                position: qq.maps.ControlPosition.TOP_LEFT
              },
              zoomControl: false, //启用缩放控件
              panControl: false,
              center: new qq.maps.LatLng(this.centerx[1], this.centerx[0])
            });
            //地图异步加载，在idle或者tilesloaded后初始化
            let self1 = this
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
                //绘制热力图
                heatmap.setData({max: 100, data: self1.testData[0].points});
              } else {
                alert("您的浏览器不支持canvas，无法绘制热力图！！")
              }
            });
            let chart = this.$echarts.init(document.getElementById("main"));
            chart.setOption({
              timeline: {   // 时间轴样式
                axisType: 'category',
                data: this.timelines,
                playInterval: 1000,
                bottom: '0',
                symbolSize: 15,
                autoPlay: true,
                //currentIndex: this.timelines,
                loop: true,
                realtime: true,
                width: '95%',
                x: '20px',
                controlPosition: 'right',
                lineStyle: {
                  color: '#e5e5e5',
                  width: 5,
                },
                label: {
                  normal: {
                    color: '#adadad',
                  },
                  fontSize: 12,
                  emphasis: {
                    color: '#0c70f9',
                  },
                },
                checkpointStyle: {
                  color: '#0c70f9',
                  borderColor: '#0c70f9'
                },
                controlStyle: {
                  normal: {color: '#0c70f9'},
                  emphasis: {color: '#0c70f9'},
                  textStyle: {
                    color: '#0c70f9'
                  },
                },
              }
            },true);
            let self = this
            chart.on('timelinechanged', function (timeLineIndex) {
              // 设置 每个series里的xAxis里的值
              self.arrIndex = parseInt(timeLineIndex.currentIndex);
              heatmap.setData({max: 100, data: self.testData[self.arrIndex].points});
            });
          },
      },
      watch:{
          x2:'init',
          x3:'init',
          x4:'init'
      }
    }
</script>

<style lang="less" scoped>
  .mapContainer {position:relative;}
  .mapContainer .heatmap {width:100%;height:600px}
  .mapContainer .visualmap {width:350px; height:70px; background-color:rgba(0,0,0,0.45); position: absolute; right:10px; bottom:10px; z-index:1;}
  .mapContainer .visualmap div {color:#fff; margin-top:10px; margin-left:10px;}
  .mapContainer .visualmap .range {margin-top:5px;}
  .mapContainer .visualmap .range span {margin-left:15px; margin-right:5px;}
  .mapContainer .visualmap .bargrad {
    background: -webkit-linear-gradient(left,red,orange,yellow,green,blue);
    background: -o-linear-gradient(left,red,orange,yellow,green,blue);
    background: -moz-linear-gradient(left,red,orange,yellow,green,blue);
    background: linear-gradient(to left, red,orange,yellow,#4cff2f,#47fff4,blue);
    height:10px; border-radius:5px;position:relative; margin:5px 10px 0px 10px; z-index:2;
    background-color:#fff;}
  </style>
