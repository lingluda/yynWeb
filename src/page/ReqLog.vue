 <template>
  <div style="height:100%">
    <!-- <div class="tits">核心景区客流</div> -->
    <div class="ti">
      <span style="color: rgb(102, 159, 199);">系统日志</span>
      <Icon type="ios-arrow-forward"/>
      <span style="font-size: 12px;color: #000">访问日志</span>
    </div>

    <div style="padding: 20px;background-color: #f2f2f2 ">
      <div style="margin-bottom: 10px">
        <span style="font-weight: bold;color: #000;">访问日志列表</span>
        <DatePicker type="datetimerange" size="small" v-model="sDate"  placement="bottom-end" style="width: 280px;float: right"></DatePicker>
      </div>
    <Table :columns="reqColumn" :data="reqData"></Table>
    </div>
    </div>

</template>

<script>
  import http from "../http";
    export default {
        name: "ReqLog",
      data(){
          return{
            sDate:[http.getTodays(),http.gmt2strms(new Date())],
            reqColumn:[
              {
                title:'账号',
                key:'uid'
              },
              {
                title:'姓名',
                key:'uname'
              },
              {
                title:'访问页面',
                key:'pageName'
              },
              {
                title:'访问时间',
                key:'time'
              },
            ],
            reqData:[]
          }
      },
      mounted(){
      },
      methods:{
        init(){
          http.get('bi/get_log_req',{startTime:http.gmt2strms(this.sDate[0]),endTime:http.gmt2strms(this.sDate[1])}).then(resp=>{
            this.reqData = resp.data.hits
            for (var i=0;i<this.reqData.length;i++){
              this.reqData[i].time = http.gmt2strms(this.reqData[i].addTime)
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
