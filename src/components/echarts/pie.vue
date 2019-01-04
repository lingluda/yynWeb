<!--
 <pie :title="'性别占比'" :unit="'人'" :x="['男','女']" :y="[{name:'男',value:12},{name:'女',value:12}]" class="card"></pie>

-->
<template>
  <div style="border: 1px solid #dcdee2;">
    <!--<div>
      <span style="font-size: 14px;color: #000;font-weight: bold;padding: 20px">{{title}}(%)</span>
    </div>-->
    <div ref="echart" style="height: 350px;width: 100%;"></div>
    <Spin size="large" fix v-if="y.length==0"></Spin>
  </div>
</template>

<script>
  export default {
    name: 'pie',
    props: {
      title: String,
      x: Array,
      y: Array,
      unit: String,
      color: {
        type: Array,
        default: function () {
          return [
            "#006EFF",
            "#29CC85",
            "#ffbb00",
            "#ff584c",
            "#9741d9",
            "#1fc0cc",
            "#7ff936",
            "#ff9c19",
            "#e63984",
            "#655ce6",
            "#47cc50",
            "#006EFF",
            "#29CC85",
            "#ffbb00",
            "#ff584c",
            "#9741d9",
            "#1fc0cc",
            "#7ff936",
            "#ff9c19",
            "#e63984",
            "#655ce6",
            "#47cc50"
          ]
        }
      },
      radius: {
        type: Array,
        default: function () {
          return ['40%', '60%']
        }
      }
    },
    mounted() {
      //this.init()
    },
    methods: {
      init() {
       /* let xx = []
        let yy = []
        for (var i = 0; i < this.x.length; i++) {
          xx.push(this.ps.hh(this.x[i]))
        }
        for (var i = 0; i < this.y.length; i++) {
          yy.push({name: this.ps.hh(this.y[i].name), value: this.y[i].value})
        }*/
        let dom = this.$refs.echart
        let opt = {
          title: {
            text: this.title,
            textStyle: {
              fontSize: 12
            },
            x: 80,
            y: 15
          },
          tooltip: {
            trigger: 'item',
            backgroundColor: '#323232',
            formatter: '{b}:{d}%',

          },
          legend: {
            //orient: 'vertical',
            icon: 'circle',
            bottom: 5,
            data: this.x
          },
          color: this.color,
          series: [
            {
              //name:'访问来源',
              type: 'pie',
              radius: this.radius,
              center: ["50%", "44%"],
              avoidLabelOverlap: true,
              label: {
                normal: {
                  show: true,
                  position: 'outside',
                  formatter: '{b}\n{d}%',
                  textStyle: {
                    fontSize: 10.5
                  }
                },
                itemStyle: {
                  borderColor: '#fff',
                  borderWidth: 1
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '12',
                    width: 80,
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                show: true,
                length: 7,
                length2: 8
              },
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
              },
              data: this.y
            }
          ]
        }
        this.echart(dom, opt, "pie")
      }
    },
    watch: {
      y: 'init'
    }
  }
</script>

<style scoped>

</style>
