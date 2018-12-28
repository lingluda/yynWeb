<template>
  <div>
    <div class="ti">
      <span style="color: rgb(102, 159, 199);">旅游热度</span>
      <Icon type="ios-arrow-forward"/>
      <router-link to="/coreFlow"><span style="font-size: 12px;color: rgb(102, 159, 199)">核心景区排行</span></router-link>
      <Icon type="ios-arrow-forward"/>
      <span style="font-size: 12px;color: #000">核心景区详情</span>
      <Tooltip content="仅对该区域内AAAA及AAAAA景区进行排行" placement="right" max-width="200">
        <Icon size="19"  type="ios-help-circle-outline" />
      </Tooltip>
    </div>
    <div style="padding: 20px 20px 45px 20px;background-color: #f2f2f2">
      <Table :columns="columns1" :data="data1"></Table>
      <Page :total="total" :current="current" :page-size="psize" @on-change="inits" @on-page-size-change="initz" show-sizer show-total style="float: right;margin-top: 5px"/>
    </div>

  </div>
</template>
<script>
  import http from "@/http.js";
  export default {
    data() {
      return {
        psize:10,
        current:1,
        total:'',
        columns1: [
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
                    src: params.row.imgurl
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
            title: '景区级别',
            key: 'grade_alias'
          },
          {
            title: '所在区县',
            key: 'distname'
          },
          {
            title: '所在州市',
            key: 'cityname'
          },
          {
            title: '实时游客人数',
            key: 'isclose',
            render:(h,params)=>{
              if (params.row.n>params.row.fit){
                return h('div',[
                  h('Tooltip',{
                    style:{
                      color:'red',
                    },
                    attrs:{
                      maxWidth:'200',
                      content:'现景区人数已超出景区最优承载人数',
                      placement:'top'
                    }
                  },params.row.isclose)

                ])
              }else {
                return h('div',[
                  h('span',params.row.isclose)
                ])
              }
            }
          },
          {
            title: '景区最优承载量',
            key: 'fit'
          },
          {
            title: '最大承载量',
            key: 'max_capacity',
            width:115,
            render:(h,params)=>{
              if (params.row.max_capacity==0) {
                return h('span','暂无数据')
              } else {
                return h('div',[
                  h('span',params.row.max_capacity)
                ])
              }
            }
          },
          {
            title: '营业时间',
            key: 'busi_time_alias'
          },
        ],
        data1: []
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init(){
        console.log('12222222223',this.$route.query.d1)
        console.log('12222222223',this.$route.query.d2)
        console.log('12222222223',this.$route.query.c1)
        if(this.$route.query.d1==http.getToday()&&this.$route.query.d2==http.getToday()){
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
                      src: params.row.imgurl
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
              title: '景区级别',
              key: 'grade_alias'
            },
            {
              title: '所在区县',
              key: 'distname'
            },
            {
              title: '所在州市',
              key: 'cityname'
            },
            {
              title: '实时游客人数',
              key: 'isclose',
              render:(h,params)=>{
                if (params.row.n>params.row.fit*0.8){
                  return h('div',[
                    h('Tooltip',{
                      style:{
                        color:'red',
                      },
                      attrs:{
                        maxWidth:'200',
                        content:'当前游客人数已超过该景区最优承载量的80%',
                        placement:'top'
                      }
                    },params.row.isclose)

                  ])
                }else {
                  return h('div',[
                    h('span',params.row.isclose)
                  ])
                }
              }
            },
            {
              title: '景区最优承载量',
              key: 'fit'
            },
            {
              title: '最大承载量',
              key: 'max_capacity',
              width:115,
              render:(h,params)=>{
                if (params.row.max_capacity==0) {
                  return h('span','暂无数据')
                } else {
                  return h('div',[
                    h('span',params.row.max_capacity)
                  ])
                }
              }
            },
            {
              title: '营业时间',
              key: 'busi_time_alias'
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
                      src: params.row.imgurl
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
              title: '景区级别',
              key: 'grade_alias'
            },
            {
              title: '所在区县',
              key: 'distname'
            },
            {
              title: '所在州市',
              key: 'cityname'
            },
            {
              title: '累计游客人数',
              key: 'isclose',

            },
           /* {
              title: '景区最优承载量',
              key: 'fit'
            },
            {
              title: '最大承载量',
              key: 'max_capacity',
              width:115,
              render:(h,params)=>{
                if (params.row.max_capacity==0) {
                  return h('span','暂无数据')
                } else {
                  return h('div',[
                    h('span',params.row.max_capacity)
                  ])
                }
              }
            },*/
            {
              title: '营业时间',
              key: 'busi_time_alias'
            },
          ]
        }
        http.post('bi/get_key_scenic_tourist_datespan',{pindex:this.current,size:this.psize,startTime:this.$route.query.d1,endTime:this.$route.query.d2,city_id:this.$route.query.c1}).then(resp=>{
          this.data1=resp.data.hits
          this.total=parseInt(resp.data.total)
          for (var i=0;i<this.data1.length;i++){
            if (this.data1[i].fit_capacity==0){
              this.data1[i].fit='暂无数据'
            }else {
              this.data1[i].fit=this.data1[i].fit_capacity
            }
            this.data1[i].px = this.data1[i].grade +'A'
            if (this.data1[i].n==-1){
              this.data1[i].isclose ='已闭园'
            } else {
              this.data1[i].isclose =this.data1[i].n
            }
          }
          for (var i=0;i<this.data1.length;i++){
            this.data1[i].pers = this.data1[i].n/this.data1[i].fit_capacity
          }
          for (var i=0;i<this.data1.length;i++){
            this.data1[i].imgurl = this.data1[i].image.thumb_url
          }
          console.log(this.data1)

        })
      },
      inits(val){
        this.current=val
        this.init()
      },
      initz(val){
        this.psize=val
        this.init()
      }
    },
  }
</script>
<style scoped>

</style>
