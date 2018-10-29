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
            <span class="lyrd_index_search_title">景区实时游客人数排行</span>
            <Tooltip content="此地图统计各州市AAAA及以上景区" placement="right" max-width="220">
              <Icon size="19" style="margin: 7px 0px 0px 0px" type="ios-help-circle-outline" />
            </Tooltip>
          </div>
          <div style="float: right">
            <RadioGroup type="button" @on-change="pic7">
              <Radio label="1">近7日</Radio>
              <Radio label="2">近30日</Radio>
            </RadioGroup>
            <DatePicker v-model="d11" placement="bottom-end" format="yyyy-MM-dd" type="daterange" placeholder="请选择日期" style="width:180px" @on-change="dateChange"></DatePicker>
            <Select v-model="FlowCity" style="width: 120px" @on-change="dateChange">
              <Option v-for="city in provData" :value="city.id">{{city.name}}</Option>
            </Select>
          </div>
        </div>
        <Row :gutter="20">
          <Col span="12">
            <div class="borderBlock">
              <coreFlow :mapData="mapData" v-if="FlowCity==0"></coreFlow>
              <kunming :mapData="mapData" v-if="FlowCity==385"></kunming>
              <baoshan :mapData="mapData" v-if="FlowCity==379"></baoshan>
              <chuxiong :mapData="mapData" v-if="FlowCity==380"></chuxiong>
              <dehong :mapData="mapData" v-if="FlowCity==382"></dehong>
              <dali :mapData="mapData" v-if="FlowCity==381"></dali>
              <diqing :mapData="mapData" v-if="FlowCity==383"></diqing>
              <honghe :mapData="mapData" v-if="FlowCity==384"></honghe>
              <lijiang :mapData="mapData" v-if="FlowCity==386"></lijiang>
              <lincang :mapData="mapData" v-if="FlowCity==387"></lincang>
              <nujiang :mapData="mapData" v-if="FlowCity==388"></nujiang>
              <puer :mapData="mapData" v-if="FlowCity==389"></puer>
              <qujing :mapData="mapData" v-if="FlowCity==390"></qujing>
              <wenshan :mapData="mapData" v-if="FlowCity==391"></wenshan>
              <xishuangbanna :mapData="mapData" v-if="FlowCity==392"></xishuangbanna>
              <yuxi :mapData="mapData" v-if="FlowCity==393"></yuxi>
              <zhaotong :mapData="mapData" v-if="FlowCity==394"></zhaotong>
            </div>
          <div style="margin-top: 8px">最后一次更新时间：{{lastTime}}</div>
          </Col>
          <Col span="12">
              <list :startDate="d11"  :listData="listData"></list>
            <a style="float: right;" @click="goto">查看更多 >></a>
            <!--<router-link :to="{path:'coreFlow/list',query:{sdate:d11}}"><p style="text-align: right;">查看更多 >></p></router-link>-->
          </Col>
        </Row>

      </card>

      <card style="margin-top: 20px">
        <div style="margin-bottom: 20px">
          <span style="font-weight: bold;color: #000">景区客流变化</span><span>（单位：万人）</span>
          <DatePicker type="date" v-model="picdate" placement="bottom-end" placeholder="Select date" style="width: 120px;float: right"></DatePicker>

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
  import baoshan from '../../components/ynmap/baoshan'
  import chuxiong from '../../components/ynmap/chuxiong'
  import dali from '../../components/ynmap/dali'
  import dehong from '../../components/ynmap/dehong'
  import diqing from '../../components/ynmap/diqing'
  import honghe from '../../components/ynmap/honghe'
  import kunming from '../../components/ynmap/kunming'
  import lijiang from '../../components/ynmap/lijiang'
  import lincang from '../../components/ynmap/lincang'
  import nujiang from '../../components/ynmap/nujiang'
  import puer from '../../components/ynmap/puer'
  import qujing from '../../components/ynmap/qujing'
  import wenshan from '../../components/ynmap/wenshan'
  import xishuangbanna from '../../components/ynmap/xishuangbanna'
  import yuxi from '../../components/ynmap/yuxi'
  import zhaotong from '../../components/ynmap/zhaotong'
  export default {
    components: {
      coreFlow,
      list,
      bar,
      baoshan,
      chuxiong,
      dali,
      dehong,
      diqing,
      honghe,
      kunming,
      lijiang,
      lincang,
      nujiang,
      puer,
      qujing,
      wenshan,
      xishuangbanna,
      yuxi,
      zhaotong
    },
    data(){
      return{
        lastTime:'',
        mapData:[],
        listData:[],
        d11:[http.getToday(),http.getToday()],
        FlowCity:'',
        provData:[],
        picdate:http.getYesterDay()
      }
    },
    mounted(){
      this.init()
    },
    methods:{
      init(){

        http.get('bi/get_all_city_prov',{}).then(resp=>{
          this.provData=resp.data.hits
          this.FlowCity = this.provData[0].id

          http.get('bi/get_key_scenic_tourist_datespan_withdist',{pindex:1,size:9,startTime:http.gmt2strm(this.d11[0]),endTime:http.gmt2strm(this.d11[1]),city_id:this.FlowCity}).then(res=>{
            this.mapData=res.data
            this.listData=res.data.hits
            this.lastTime = http.gmt2strms(res.data.hits[0].timestamp)
          })
        })
      },
      pic7(val){
        console.log(http.gmt2strm(this.d11[0]))
        if (val==1){
          this.d11=[http.getWeekAgo(),http.getToday()]
          this.dateChange()
        }else {
          this.d11=[http.getMonthAgo(),http.getToday()]
          this.dateChange()
        }
      },
      dateChange(){
       // this.mapData=[]
        console.log(http.gmt2strm(this.d11[0]))
        http.get('bi/get_key_scenic_tourist_datespan_withdist',{pindex:1,size:9,startTime:http.gmt2strm(this.d11[0]),endTime:http.gmt2strm(this.d11[1]),city_id:this.FlowCity}).then(res=>{
          this.mapData=res.data
          console.log('this.mapData',this.mapData)
          this.listData=res.data.hits
          this.lastTime = http.gmt2strms(res.data.hits[0].timestamp)
        })
      },
      goto(){
        this.$router.push({path:'coreFlow/list',query:{d1:http.gmt2strm(this.d11[0]),d2:http.gmt2strm(this.d11[1]),c1:this.FlowCity}})
      }
    },

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
