<template>
    <div class="flowList">
        <Row v-for="(item,index) in 9" :key="index" v-if="index < 9">
            <Col :span="2">
            <div class="flowImg"></div>
            </Col>
            <Col :span="12">云南民族村</Col>
            <Col :span="10">客流人数：<span class="flowNum">89123</span></Col>
        </Row>
    </div>
</template>


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
      font-weight: bold;
      color: #000;
    }

    .ivu-col.ivu-col-span-12 {
      padding-left: 20px;
    }

    .ivu-col.ivu-col-span-10 {
      color: #888;
      text-align: right;
    }
  }
}
</style>
