<template>
  <div>
  <div id="myChart" style="height: 400px;width: 100%"></div>
  </div>
</template>

<script>
  import http from "../../http";
  export default {
    name: "IndexLine",
    props:{
      wjj:String,
      issend:Number,
      trendPeople1:Array,
    },
      mounted(){
        this.init()
      },
    methods:{
      init(){
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          animation: false,
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.trendPeople1.map(item=>{return item.date})
          },
          yAxis: {
            type: 'value'
          },
          lineStyle: {
            color: "#006EFF"
          },
          series: [{
            data:  this.trendPeople1.map(item=>{return item.value}),
            type: 'line',
            avoidLabelOverlap: true,
            label: {
              normal: {
                show: true,
                position: 'top',
                rotate:15
              }
            },
          }]
        });
        this.picBase64Info = myChart.getDataURL();
      },
      send(){
        if (this.issend==1) {
        $.ajax({
          type : "POST",
          url : "bi/uploadimg", //?folder=" + folder + "&imgtype=" + imgtype,
          data : {
            "folder" : this.wjj,
            "imgtype" : 'img_visitor_trend',
            "data" : this.picBase64Info
          },
          cache : false,
          async : false,
          dataType : "json",
          success : function(data) {},

        });
      }
      }
    },
    watch:{
      issend:'send'
    }
  }
</script>

<style scoped>

</style>
