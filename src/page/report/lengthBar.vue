<template>
  <div>{{cavg}}
  <div id="lengthb" style="width: 100%;height: 200px;"></div>
  </div>
</template>

<script>
  export default {
    name: "lengthBar",
     props:{
       wjj: String,
       cavg: Array,
       issend: Number,
    },
    data(){
      return{
        picBase64Info:''
      }
    },
    mounted() {
      let Fbar = this.$echarts.init(document.getElementById('lengthb'))
      Fbar.setOption({
        animation: false,
        title: {
          text: '已关闭投诉处理时长',
          textStyle:{
            fontSize: 12
          }
        },

        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        color:["#006EFF", "#29CC85", "#ffbb00", "#ff584c"],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          name:'单位(小时)',
          type: 'category',
          data: ['平均时长', '最大时长', '最小时长'],
        },
        series: [
          {
            type: 'bar',
             //data: [6,85,0],
            //data: [parseInt(this.cavg[2]*100)/100,parseInt(this.cavg[1]*100)/100,parseInt(this.cavg[0]*100)/100],
            data: this.cavg,

          }
        ]
      })
      this.picBase64Info = lbar.getDataURL();
        },
    methods:{

      send(){
        if (this.issend==1) {

          $.ajax({
            type : "POST",
            url : "bi/uploadimg", //?folder=" + folder + "&imgtype=" + imgtype,
            data : {
              "folder" : this.wjj,
              "imgtype" : 'img_comp_pic_1',
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
