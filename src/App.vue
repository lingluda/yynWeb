<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  .ivu-layout{background: #fff}
  .ivu-tabs-nav{margin-left: 25px;margin-bottom: 0px!important}
  .ivu-radio-group-button .ivu-radio-wrapper:first-child,.ivu-radio-group-button .ivu-radio-wrapper:last-child,.ivu-select-selection,.ivu-input{border-radius: 0}
  .ti {
    color: #000;
    font-size: 16px;
    font-weight: 700;
    line-height: 52px;
    padding-left: 20px;
    height: 45px;
  }
  .ivu-tabs-bar{margin-bottom: 0px}
  /* .ivu-card-body{padding: 16px 25px 30px;} */
  .ivu-card-body{padding: 20px 25px 30px;}
  .ivu-card{border-radius: 0}
  .ivu-table-overflowX {
    overflow-x:unset !important;
  }
  .ivu-select-item-focus{
    background: #006eff;
    color: #ffffff;
  }
  .ivu-select-selection{
    border: 1px solid #dddddd;
  }
  .ivu-select-item:hover{
    background: #f2f2f2;
  }
  .ivu-layout-sider{
   // min-height: calc(100vh - 50px);
  }
</style>
