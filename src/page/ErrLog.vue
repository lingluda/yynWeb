<template>
  <div style="height:100%">
    <div class="ti">
      <span style="color: rgb(102, 159, 199);">系统日志</span>
      <Icon type="ios-arrow-forward"/>
      <span style="font-size: 12px;color: #000">异常日志</span>
    </div>
    <div style="padding: 20px;background-color: #f2f2f2 ">
      <div style="margin-bottom: 10px">
        <span style="font-weight: bold;color: #000;">异常日志列表</span>
        <DatePicker type="datetimerange" size="small" v-model="sDate"  placement="bottom-end" style="width: 280px;float: right"></DatePicker>
      </div>
      <Table :columns="errColumn" :data="errData"></Table>
    </div>
    </div>
</template>

<script>
    import http from "../http";
    export default {
        name: "ErrLog",
      data(){
          return{
            sDate:[http.getTodays(),http.gmt2strms(new Date())],
            errColumn:[
              {
                title:'错误类型',
                key:'errSrc',
                width:90
              },
              {
                title:'内容',
                key:'errMsg',
              },
              {
                title:'时间',
                key:'time',
                width:160
              },
            ],
            errData:[]
          }
      },
      mounted(){
      },
      methods:{
          init(){
            http.get('bi/get_log_err',{startTime:http.gmt2strms(this.sDate[0]),endTime:http.gmt2strms(this.sDate[1])}).then(resp=>{
              this.errData=resp.data.hits
              for (var i=0;i<this.errData.length;i++){
                this.errData[i].time = http.gmt2strms(this.errData[i].addTime)
              }
            })
          }
      },
      watch:{
        sDate:'init'
      }
    }
</script>

<style scoped>

</style>
