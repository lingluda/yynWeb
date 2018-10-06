<template>
    <div class="flowList">
        <Row v-for="item in listData">
            <Col :span="2">
              <!-- <div class="flowImg"></div> -->
            <div style="width: 38px;height: 37px;">
              <img :src="item.tx"/>
            </div>
            </Col>
            <Col :span="12">{{item.name}}</Col>
            <Col :span="10">客流人数：<span class="flowNum">{{item.n}}</span></Col>
        </Row>
    </div>
</template>
<script>
  import http from "@/http.js"
  export default {
    data(){
      return{
        listData:[]
      }
    },
    mounted(){
      // this.init()
    },
    methods:{
      init(){
        http.get('bi/get_scenic_tourist_key_by_date',{}).then(resp=>{
            this.listData=resp.data.hits;
            for(var i=0;i<this.listData.length;i++){
              this.listData[i].tx = require('../../assets/imgs/'+this.listData[i].scenic+".png");
            }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
.flowList {
  padding: 0 10px;

  .flowImg {
    width: 38px;
    height: 37px;
    background: url("../../assets/imgs/flowImg.png") no-repeat;
    background-size: 100%;
  }

  .flowNum {
    color: #006eff;
    font-weight: bold;
    font-size: 16px;
  }

  .ivu-row {
    margin: 10px 0;
    padding-bottom: 10px;
    line-height: 38px;
    text-align: left;
    border-bottom: 1px dashed #e5e5e5;

    .ivu-col.ivu-col-span-2 {
    }

    .ivu-col.ivu-col-span-12 {
      padding-left: 20px;
      color: #000;
    }

    .ivu-col.ivu-col-span-10 {
      color: #888;
      text-align: right;
    }
  }
}
</style>
