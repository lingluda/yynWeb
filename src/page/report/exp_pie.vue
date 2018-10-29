<template>
  <div>
  <div id="pie" style="width: 100%;height: 200px;"></div>
  </div>
</template>
<script>
  export default {
    name:'exp_pie',
    props:{
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
        title : {
          text: '消费类型占比',
          x:'left',
          textStyle:{
            fontSize:14
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
                position: 'outside',
                formatter: '{b}\n{d}%',
              }
            },
          }
        ],

      })
      this.picBase64Info = pie.getDataURL();
    },
    methods:{

      send(){
        console.log('exp_pie:::', this.picBase64Info)
      }
    },
    watch:{
      issend:'send'
    }
  }
</script>
