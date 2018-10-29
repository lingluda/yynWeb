<template>
  <div>
    <repotMap></repotMap>
    <indexLine></indexLine>
    <Row :gutter="16">
      <Col :span="6"><ImgBar :main="bar1"></ImgBar></Col>
      <Col :span="6"><ImgBar :main="bar2"></ImgBar></Col>
      <Col :span="6"><ImgBar :main="bar3"></ImgBar></Col>
      <Col :span="6"><ImgBar :main="bar4"></ImgBar></Col>
    </Row>
    <Row>
      <Col :span="12">
        <div style="margin-top: 20px"><item></item></div>
        <div style="margin-top: 20px"><item></item></div>
      </Col>
      <Col :span="12"><lengthBar></lengthBar></Col>
    </Row>
    <Row>
      <Col :span="12">
        <div style="margin-top: 20px"><item></item></div>
        <div style="margin-top: 20px"><item></item></div>
      </Col>
      <Col :span="12"><exp_pie></exp_pie></Col>
    </Row>
    <exp></exp>
    <div style="width: 100%;height: 400px">
    </div>
  </div>
</template>

<script>
  import http from "../../http";
  import repotMap from './repotMap'
  import indexLine from './IndexLine'
  import item from './item'
  import ImgBar from './ImgBar'
  import exp from './exp'
  import lengthBar from './lengthBar'
  import exp_pie from './exp_pie'
  export default {
    name: "photo",
    components:{
      repotMap,
      indexLine,
      ImgBar,
      item,
      exp,
      lengthBar,
      exp_pie,
    },
    data(){
      return{
        bar1:'bar1',
        bar2:'bar2',
        bar3:'bar3',
        bar4:'bar4',
      }

    },
    mounted(){
      this.indexMap()
    },
    methods:{
      indexMap(){
        http.get('bi/get_tourism_dist_by_date',{date:'2018-9-16'}).then(resp=>{
          this.pieData2map=resp.data.hits.map(item=>{return{name:item.name,value:item.proportion}})
          console.log(this.pieData2map)
        })
      }
    }
  }
</script>

<style scoped>

</style>
