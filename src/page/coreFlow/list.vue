<template>
  <div class="flowList" style="height:569px">
    <Row style="height: 35px;margin-top: -6px">
      <Col :span="12" style="font-weight: bold">景区名称</Col>
      <Col :span="6" style="font-weight: bold">实时客流人数</Col>
      <Col :span="6" style="font-weight: bold">景区最大承载量</Col>
    </Row>
    <Row v-for="item in listData">
      <Col :span="2">
        <!-- <div class="flowImg"></div> -->

        <img style="width: 38px;height: 37px;border: 0px" :src="item.tx"/>

      </Col>
      <Col :span="12">{{item.name}}</Col>
      <Col :span="6" style="color: red" v-if="item.isclose>item.fit_capacity*0.8"><span class="flowNum">{{item.isclose}}</span></Col>
      <Col :span="6" v-if="item.isclose<item.fit_capacity*0.8"><span class="flowNum">{{item.isclose}}</span></Col>
      <Col :span="4"><span class="flowNum">{{item.fit_capacity}}</span></Col>
    </Row>
    <router-link to="coreFlow/list"><p style="text-align: right;margin-top:-1px">查看更多 >></p></router-link>
  </div>
</template>
<script>
  import http from "@/http.js"

  export default {
    data() {
      return {
        listData: [],
        cc: '#000'
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        http.get('bi/get_scenic_tourist_key_by_date', {}).then(resp => {
          this.listData = resp.data.hits;
          for (var i = 0; i < this.listData.length; i++) {
            if (this.listData[i].n === -1) {
              this.listData[i].isclose = '已闭园'
            } else {
              this.listData[i].isclose = this.listData[i].n
            }
          }

          for (var i = 0; i < this.listData.length; i++) {
            this.listData[i].tx = this.listData[i].image.thumb_url
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .flowList {
    padding: 0px 10px 40px 0px;

    .flowImg {
      width: 38px;
      height: 37px;
      background: url("../../assets/imgs/flowImg.png") no-repeat;
      background-size: 100%;
    }

    .flowNum {

      font-size: 16px;
      margin-left: -10px;
    }

    .ivu-row {
      margin: 10px 0;
      //padding-bottom: 10px;
      line-height: 24px;
      text-align: left;
      border-bottom: 1px solid #e5e5e5;
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
