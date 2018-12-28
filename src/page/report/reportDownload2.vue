<template>
  <div style="background:#f2f2f2;">
    <div v-if="htmlData.length!=0" v-html="htmlData" class="htmlContent"></div>
    <!--<iframe name="if" :src="downLoadUrl" width="100%" height="0px" style="dispaly:none"></iframe>-->
  <Button type="primary" style="margin: 0  0 20px 70%" @click="download">下载</Button>
  </div>
</template>

<script>
  import http from "../../http";

  export default {
    name: "reportDownload",

    data() {
      return {
        htmlData:'',
        downLoadUrl: '#/reportDownload?s1=' + this.$route.query.s1 + '&s2=' + this.$route.query.s2 +
          '&c=' + this.$route.query.c + '&c1=' + this.$route.query.c1 +
          '&c2=' + this.$route.query.c2 + '&c3=' + this.$route.query.c3 +
          '&c4=' + this.$route.query.c4 + '&city=' + this.$route.query.city +
          '&senic=' + this.$route.query.senic + '&download='+this.$route.query.download+'&wjj='+this.wjj,
    }
    },
    mounted() {
      this.init()
    },
    methods: {
      init(){
        // window.open(this.downLoadUrl,'if')

          let opts = []
          if (this.$route.query.c.length > 0) {
            opts.push(100)
          }
          if (this.$route.query.c1.length > 0) {
            opts.push(200)
          }
          if (this.$route.query.c2.length > 0) {
            opts.push(300)
          }
          if (this.$route.query.c3.length > 0) {
            opts.push(400)
          }
          if (this.$route.query.c4.length > 0) {
            opts.push(500)
          }
          opts.push(this.$route.query.c)
          opts.push(this.$route.query.c1)
          opts.push(this.$route.query.c3)
          opts.push(this.$route.query.c4)
          let tt = opts.join(',')
          http.get('bi/downrep',{startTime:this.$route.query.s1,endTime:this.$route.query.s2,city_id:this.$route.query.city,folder:this.$route.query.wjj,opts:tt,dv:'gethtml'}).then(resp=>{
            this.htmlData=resp.data.hits
          })
      },
      download(){

        let opts = []
        if (this.$route.query.c.length > 0) {
          opts.push(100)
        }
        if (this.$route.query.c1.length > 0) {
          opts.push(200)
        }
        if (this.$route.query.c2.length > 0) {
          opts.push(300)
        }
        if (this.$route.query.c3.length > 0) {
          opts.push(400)
        }
        if (this.$route.query.c4.length > 0) {
          opts.push(500)
        }
        opts.push(this.$route.query.c)
        opts.push(this.$route.query.c1)
        opts.push(this.$route.query.c3)
        opts.push(this.$route.query.c4)
        let tt = opts.join(',')
        window.open('https://tglpt.ybsjyyn.com/as/bi/downrep?startTime=' + this.$route.query.s1 + '&endTime=' + this.$route.query.s2 + '&folder='+ this.$route.query.wjj +'&city_id='+this.$route.query.city  + '&opts=' + tt)
        return 'success'
      }
    }
  }
</script>

<style scoped>
  .htmlContent{width:600px; margin: 0 auto;}
  .htmlContent a {color:unset !important;}

</style>
