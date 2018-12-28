<template>
  <div>{{ccc}}
  <div id="main" style="height: 400px;width: 100%;"></div>
  </div>
</template>

<script>
  export default {
    name: "exp",
    props: {
      wjj:String,
      ccc: Array,
      issend:Number,
    },
    data(){
      return{
        picBase64Info:''
      }
    },
    mounted() {
      let xbar = this.$echarts.init(document.getElementById('main'))
      xbar.setOption({
        animation: false,
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          bottom:'1%',
          icon: "circle",
          data: ["最大等待时间", "平均处理时间", "最小等待时间"]
        },
        color: [
          "#006EFF",
          "#29CC85",
          "#ffbb00",],
        xAxis: {
          type: 'category',
          data: this.ccc.map(i=>{return i.name})
        },
        yAxis: {
          type: 'value'
        },
        series: [

          {
            name:'平均处理时间',
            data: this.ccc.map(i=>{return i.avg.toFixed(2)}),
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle:{
                  color:'#000'
                }
              }
            },
          },
          {
            name:'最大等待时间',
            data: this.ccc.map(i=>{return i.max.toFixed(2)}),
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle:{
                  color:'#000'
                }
              }
            },
          },
          {
            name:'最小等待时间',
            data: this.ccc.map(i=>{return i.min.toFixed(2)}),
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle:{
                  color:'#000'
                }
              }
            },
          },
        ]
      })
      this.picBase64Info = xbar.getDataURL();
    },
    methods:{

      send(){
        if (this.issend==1) {

          $.ajax({
            type : "POST",
            url : "bi/uploadimg", //?folder=" + folder + "&imgtype=" + imgtype,
            data : {
              "folder" : this.wjj,
              "imgtype" : 'img_comp_pic_2',
              "data" : this.picBase64Info
            },
            cache : false,
            async : true,
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
