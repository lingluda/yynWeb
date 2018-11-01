<template>
  <div>
  <div id="pie" style="width: 100%;height: 300px;"></div>
  </div>
</template>
<script>
  import http from "../../http";
  export default {
    name:'exp_pie',
    props:{
      wjj:String,
      issend:Number,
      cate:Array
    },
    data () {
      return {
        picBase64Info:''
      }
    },
    mounted(){
      let pie=this.$echarts.init(document.getElementById('pie'))
      pie.setOption({
        animation: false,
        title : {
          text: '消费类型占比',
          x:'left',
          textStyle:{
            //color:'#000',
            fontSize:15,
            fontWeight:'normal'
          }

        },
        color:["#006EFF", "#29CC85", "#ffbb00", "#ff584c", "#9741d9", "#1fc0cc", "#7ff936", "#ff9c19", "#e63984", "#655ce6", "#47cc50", "#fb0b6"],
        tooltip : {
          trigger: 'item',
          formatter: " {b} :<br/> {c} ({d}%)"
        },
        legend: {
          // top:'1%',
          bottom:'1%',
          left: 'center',
          icon: "circle",
          data: this.cate.map(i=>{return i.name})
        },
        series : [
          {
            type: 'pie',
            data:this.cate,
            label: {
              normal: {
                show: true,
                position: 'inner',
                formatter: '{b}\n{d}%',
              }
            },
            labelLine: false,
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 1
            },
          }
        ],

      })
      this.picBase64Info = pie.getDataURL();
    },
    methods:{

      send(){
        if (this.issend==1) {
        $.ajax({
          type : "POST",
          url : "bi/uploadimg", //?folder=" + folder + "&imgtype=" + imgtype,
          data : {
            "folder" : this.wjj,
            "imgtype" : 'img_port_ cons_yjy',
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
