<template>
  <div class="flowList" style="height:605px">
    <Table :columns="columns1" :data="listData" size="large" style="width: 100%"></Table>

  </div>
</template>
<script>
  import http from "@/http.js"

  export default {
    props:{
      listData:Array,
      startDate:String,

    },
    data() {
      return {
        data1: [],
        cc: '#000',
        columns1: [],
      }
    },
    mounted() {
    },
    methods: {
      init() {
          if(http.gmt2strm(this.startDate[0])==http.getToday()&&http.gmt2strm(this.startDate[1])==http.getToday()){
            this.columns1=[
              {
                title: '景区名称',
                key: 'name',
                //width:280,
                render: (h, params) => {
                  return h('div', [
                    h('img', {
                      style: {
                        height: '30px',
                        width: '30px',
                      },
                      attrs: {
                        src: params.row.image.thumb_url
                      }
                    }),
                    h('span',{
                      style:{
                        position:'absolute',
                        marginTop:'9px',
                        marginLeft:'5px'
                      }
                    }, params.row.name)
                  ]);
                }
              },
              {
                title: '实时人数',
                key: 'isclose',
                width:100,
                render:(h,params)=>{
                  if (params.row.n==-1){
                    return h('span','已闭园')
                  }
                  if (params.row.n/params.row.fit_capacity>0.8&&params.row.fit_capacity!=0){
                    return h('div',[
                      h('Tooltip',{
                        style:{
                          color:'red',
                        },
                        attrs:{
                          maxWidth:'120',
                          content:'当前游客人数已超过该景区最优承载量的80%',
                          placement:'top'
                        }
                      },params.row.n)
                    ])
                  }else {
                    return h('div',[
                      h('span',params.row.n)
                    ])
                  }
                }
              },

              {
                title: '最优承载量',
                key: 'fit_capacity',
                width:115,
                render:(h,params)=>{
                  if (params.row.fit_capacity==0) {
                    return h('span','暂无数据')
                  } else {
                    return h('div',[
                      h('span',params.row.fit_capacity)
                    ])
                  }
                }
              },
              {
                title:'当日接待量',
                key:'cur',
                width:115,

              },
            ]
          }else {
            this.columns1=[
              {
                title: '景区名称',
                key: 'name',
                render: (h, params) => {
                  return h('div', [
                    h('img', {
                      style: {
                        height: '30px',
                        width: '30px',
                      },
                      attrs: {
                        src: params.row.image.thumb_url
                      }
                    }),
                    h('span',{
                      style:{
                        position:'absolute',
                        marginTop:'9px',
                        marginLeft:'5px'
                      }
                    }, params.row.name)
                  ]);
                }
              },
              {
                title:'累计接待量',
                key:'cur'
              },

            ]
          }

      }
    },
    watch:{
      startDate:'init',
      endDate:'init',
    }
  }
</script>

<style lang="less" scoped>
  .ivu-table-body.ivu-table-overflowX{
    overflow-x:unset !important;
  }
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
