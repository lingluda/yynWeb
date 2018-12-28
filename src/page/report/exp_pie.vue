<template>
  <div>
  <div :id="id" style="width: 100%;height: 230px;"></div>
  </div>
</template>
<script>
  export default {
    name:'exp_pie',
    props:{
      cate:Array,
      id:String,
    },

    mounted(){
      setTimeout(() => {
        let pie=this.$echarts.init(document.getElementById(this.id))
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
            bottom:'5',
            left: 'center',
            icon: "circle",
            data: this.cate.map(i=>{return i.name})
          },
          series : [
            {
              type: 'pie',
              radius: ['0%', '50%'],
              data: this.cate,
              label: {
                normal: {
                  show: true,
                  position: 'outside',
                  formatter: '{b}\n{d}%',
                }
              },
              labelLine: {
                show:true,
                length:3,
                length2:3
              },
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
              },
            }
          ],

        })
      },500)

    },
  }
</script>
