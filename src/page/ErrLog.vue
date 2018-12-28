<template>
  <div style="height:100%">
    <div class="ti">
      <span style="color: rgb(102, 159, 199);">系统日志</span>
      <Icon type="ios-arrow-forward"/>
      <span style="font-size: 12px;color: #000">异常日志</span>
    </div>
    <div style="padding: 20px 20px 60px 20px ;background-color: #f2f2f2 ">
      <div style="margin-bottom: 10px">
        <span style="font-weight: bold;color: #000;">异常日志列表</span>
        <DatePicker type="datetimerange" size="small" v-model="sDate" @on-change="datechange" placement="bottom-end" style="width: 280px;float: right"></DatePicker>
      </div>
      <Table :columns="errColumn" :data="errData"></Table>
      <Page :total="total" :current="1" show-total style="float: right;margin-top: 10px;" @on-change="pagechange"/>
    </div>
    </div>
</template>

<script>
    import http from "../http";
    export default {
        name: "ErrLog",
      data(){
          return{
            total:'',
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
        this.get_log_err(this.sDate[0],this.sDate[1],1,10)
      },
      methods:{
          //4.10.3查询异常日志
        get_log_err(st,et,p,s){
            http.post('bi/get_log_err',{startTime:http.gmt2strms(st),endTime:http.gmt2strms(et),pindex:p,size:s}).then(resp=>{
              this.errData=resp.data.hits
              this.total=resp.data.total
              for (var i=0;i<this.errData.length;i++){
                this.errData[i].time = http.gmt2strms(this.errData[i].addTime)
              }
            })
          },
        pagechange(page){
          this.get_log_err(this.sDate[0],this.sDate[1],page,10)
        },
        datechange(date){
          this.get_log_err(date[0],date[1],1,10)
        }
      },

    }
</script>

<style scoped>

</style>
