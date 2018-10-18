<template>
  <div style="height:100%">
    <!-- <div class="tits">核心景区客流</div> -->
    <div class="ti">
      <span style="color: rgb(102, 159, 199);">旅游热度</span>
      <Icon type="ios-arrow-forward"/>
      <span style="font-size: 12px;color: #000">核心景区排行</span>
    </div>
    <div class="coreFlow_bg">
      <card>
        <div class="lyrd_index_search">
          <div class="lyrd_index_search_left">
            <span class="lyrd_index_search_title">景区实时客流人数排行</span>
          </div>
        </div>
        <Row :gutter="20">
          <Col span="14">
            <div class="borderBlock">
              <coreFlow></coreFlow>
            </div>
          </Col>
          <Col span="10">
            <div class="borderBlock">
              <list></list>
            </div>
          </Col>
        </Row>
      </card>
      <card style="margin-top: 20px">
        <div style="margin-bottom: 20px">
          <span style="font-weight: bold;color: #000">景区客流变化</span><span>（单位：万人）</span>
          <DatePicker type="date" v-model="picdate" placeholder="Select date" style="width: 120px;float: right"></DatePicker>
        </div>
        <bar style="border: 1px solid #dcdee2" :ss="this.picdate"></bar>
      </card>
    </div>
  </div>
</template>

<script>
  import coreFlow from "./map.vue"
  import list from "./list.vue"
  import bar from "./bar.vue"
  import http from "../../http";

  export default {
    components: {
      coreFlow,
      list,
      bar
    },
    data(){
      return{
        picdate:http.getYesterDay()
      }
    }
  }
</script>


<style lang="less" scoped>
  // 标题
  .tits {
    line-height: 60px;
    font-size: 16px;
    padding-left: 20px;
    font-weight: 600;
    color: #000;
    background: #fff;
    border-bottom: 1px solid #e2e4e6;
  }

  // 灰色背景
  .coreFlow_bg {
    padding: 20px;
    background: rgb(242, 242, 242);
    min-height: calc(100% - 60px - 1px);

  }

  .lyrd_index_search {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    // line-height: 70px;
  }

  .lyrd_index_search_title {
    font-size: 14px;
    font-weight: 700;
    padding-right: 8px;
    color: #000;
    vertical-align: middle;
    vertical-align: -webkit-baseline-middle;
  }

  .lyrd_index_search_title {
    font-size: 14px;
    font-weight: 700;
    padding-right: 8px;
    color: #000;
    vertical-align: middle;
    vertical-align: -webkit-baseline-middle;
  }

  .borderBlock {
    padding: 10px 10px 0px 20px;
    border: 1px solid #dcdee2;
  }
</style>
