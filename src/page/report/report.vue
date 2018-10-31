<template>
  <div style="background:#f2f2f2;">
    <div class="tits">报表下载</div>
    <card style="margin: 20px">
      <div style="margin-bottom: 20px">
      <DatePicker type="daterange" v-model="reportDate" placeholder="Select date" style="width: 180px"></DatePicker>
      <RadioGroup type="button" @on-change="picDate">
        <Radio label="today">今天</Radio>
        <Radio label="yesterday">昨日</Radio>
        <Radio label="week">本周</Radio>
        <Radio label="lastw">上周</Radio>
        <Radio label="month">本月</Radio>
        <Radio label="lastm">上月</Radio>
      </RadioGroup>
        <Select v-model="city" style="width:120px;" @on-change="citychange">
          <Option v-for="item in cityData" :value="item.id">{{item.name}}</Option>
        </Select>
        <Select v-model="senic" style="width:120px;">
          <Option value="" v-if="senicData.length==0" disabled>请先选择州市</Option>
          <Option v-for="item in senicData" :value="item.id">{{item.name}}</Option>
        </Select>
      </div>
      <div style="border: 1px solid #e9e9e9;border-bottom: unset">
        <div class="v-row">模块选择</div>
        <div style="border-bottom: 1px dashed #e9e9e9;">
        <div style="padding:10px;">
          <Checkbox
            :indeterminate="indeterminate"
            :value="checkAll"
            @click.prevent.native="handleCheckAll">旅游热度情况</Checkbox>
          <Icon v-show="isshow==1" type="ios-arrow-forward" style="float: right" size="18" @click="clickShow(2)"/>
          <Icon v-show="isshow==2" type="ios-arrow-down" style="float: right" size="18" @click="clickShow(1)"/>
        </div>
          <div v-show="isshow==2">
            <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange" >
              <Checkbox label="1" style="padding: 0 0 10px 50px">游客人数</Checkbox>
              <Checkbox label="2" style="padding: 0 0 10px 50px">区域游客占比</Checkbox>
              <Checkbox label="3" style="padding: 0 0 10px 50px">游客趋势</Checkbox>
            </CheckboxGroup>
        </div>
        </div>
        <div style="border-bottom: 1px dashed #e9e9e9;">
          <div style="padding:10px;">
            <Checkbox
              :indeterminate="indeterminate1"
              :value="checkAll1"
              @click.prevent.native="handleCheckAll1">核心景区客流</Checkbox>
            <Icon v-show="isshow1==1" type="ios-arrow-forward" style="float: right" size="18" @click="clickShow1(2)"/>
            <Icon v-show="isshow1==2" type="ios-arrow-down" style="float: right" size="18" @click="clickShow1(1)"/>
          </div>
          <div v-show="isshow1==2">
            <CheckboxGroup v-model="checkAllGroup1" @on-change="checkAllGroupChange1" >
              <Checkbox label="4" style="padding: 0 0 10px 50px">5A级景区</Checkbox>
              <Checkbox label="5" style="padding: 0 0 10px 50px">4A级景区</Checkbox>
            </CheckboxGroup>
          </div>
        </div>
        <div style="border-bottom: 1px dashed #e9e9e9;">
          <CheckboxGroup v-model="checkAllGroup2">
            <Checkbox label="6" style="padding: 10px 0 10px 10px;">景区指数排行</Checkbox>
          </CheckboxGroup>
        </div>
        <div style="border-bottom: 1px dashed #e9e9e9;">
          <div style="padding:10px;">
            <Checkbox
              :indeterminate="indeterminate3"
              :value="checkAll3"
              @click.prevent.native="handleCheckAll3">核心景区客流</Checkbox>
            <Icon v-show="isshow3==1" type="ios-arrow-forward" style="float: right" size="18" @click="clickShow3(2)"/>
            <Icon v-show="isshow3==2" type="ios-arrow-down" style="float: right" size="18" @click="clickShow3(1)"/>
          </div>
          <div v-show="isshow3==2">
            <CheckboxGroup v-model="checkAllGroup3" @on-change="checkAllGroupChange3" >
              <Checkbox label="7" style="padding: 0 0 10px 50px">基本画像</Checkbox>
              <Checkbox label="8" style="padding: 0 0 10px 50px">人口迁徙</Checkbox>
              <Checkbox label="9" style="padding: 0 0 10px 50px">一机游用户消费</Checkbox>
              <Checkbox label="10" style="padding: 0 0 10px 50px">游客线下消费</Checkbox>
            </CheckboxGroup>
          </div>
        </div>

        <div style="border-bottom: 1px dashed #e9e9e9;">
          <div style="padding:10px;">
            <Checkbox
              :indeterminate="indeterminate4"
              :value="checkAll4"
              @click.prevent.native="handleCheckAll4">游客体验</Checkbox>
            <Icon v-show="isshow4==1" type="ios-arrow-forward" style="float: right" size="18" @click="clickShow4(2)"/>
            <Icon v-show="isshow4==2" type="ios-arrow-down" style="float: right" size="18" @click="clickShow4(1)"/>
          </div>
          <div v-show="isshow4==2">
            <CheckboxGroup v-model="checkAllGroup4" @on-change="checkAllGroupChange4" >
              <Checkbox label="11" style="padding: 0 0 10px 50px">累计新增投诉量</Checkbox>
              <Checkbox label="12" style="padding: 0 0 10px 50px">投诉时长分析</Checkbox>
              <Checkbox label="13" style="padding: 0 0 10px 50px">投诉对象及处理情况分析</Checkbox>
            </CheckboxGroup>
          </div>
        </div>
      </div>
      <div id="reportmap" style="width:100%;height:580px;"></div>
      <div style="margin: 20px 0 0 40%">
        <Button @click="goto">预览</Button>
        <!--<Button>下载</Button>-->
      </div>
    </card>
  </div>
</template>

<script>
  import http from '@/http.js'
  import "echarts/map/js/yunnan.js";
  import repotMap from './repotMap1'
  import indexLine from './IndexLine'
  import item from './item'
  import ImgBar from './ImgBar'
  import exp from './exp'
  import lengthBar from './lengthBar'
  import exp_pie from './exp_pie'
  import tstable from './tstable'
  export default {
    name: "report",
    components: {
      repotMap,
      indexLine,
      ImgBar,
      item,
      exp,
      lengthBar,
      exp_pie,
      tstable,
    },
    data(){
      return{
        FlowCityName: '全省',
        //游客人数
        tourPeople: '',
        //区域游客占比
        areaPeople: [],
        areaPeople1: [],
        //游客趋势
        trendPeople: [],
        trendPeople1: [],
        //核心景区排行
        coreSenic: [],
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
            title: '景区最优承载量',
            key: 'fit_capacity'
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
        //景区指数排行
        influence: [],
        transmission: [],
        reputation: [],
        //基本画像
        imggender: [],
        imgage: [],
        imgcar: [],
        imgcash: [],
        imgedu: [],
        imgmobile: [],
        cfcity:[],
        cfprov:[],
        //人口迁徙
        inMove:[],
        outMove:[],
        //一机游用户消费
        avg: '',
        cate: [],
        rank: [],
        ranks: [],
        //线下消费
        //游客体验-累计新增投诉量
        clink:'',
        cratio:'',
        ctotal:'',
        cavg:'',
        cmax:'',
        cmin:'',
        ccc:[],
        //区域游客占比
        //投诉时长分析
        bar1:'base_1',
        bar2:'base_2',
        bar3:'base_3',
        bar4:'base_4',
        useravg:'用户平均消费金额',
        avgunit:'元',
        issend:0,
        wjj:'',

        city:'',
        senic:'',
        cityData:[],
        senicData:[],
        reportDate:[http.getYesterDay(),http.getToday()],
        indeterminate: false,
        checkAll: false,
        checkAllGroup: [],
        isshow:1,

        indeterminate1: false,
        checkAll1: false,
        checkAllGroup1: [],
        isshow1:1,

        indeterminate2: false,
        checkAll2: false,
        checkAllGroup2: [],
        isshow2:1,

        indeterminate3: false,
        checkAll3: false,
        checkAllGroup3: [],
        isshow3:1,
       /* indeterminate3: false,
        checkAll3: false,
        checkAllGroup3: [],
        isshow3:2,*/

        indeterminate4: false,
        checkAll4: false,
        checkAllGroup4: [],
        isshow4:1,
      }
    },
    mounted(){
      this.getCityS()
    },
    methods:{
      getCityS(){
        http.get("bi/get_all_city_prov", {}).then(resp => {
          this.cityData = resp.data.hits;
          this.city = resp.data.hits[0].id;
          http.get('bi/get_scenic_by_city', {city_id: this.city}).then(resp => {
            if (resp.data.errcode === 0) {
              this.senicData = resp.data.hits
            }
          })
        });
        //区域游客占比
        http.get('bi/get_tourism_dist_by_datespan', {
          startTime: http.gmt2strm(this.reportDate[0]),
          endTime: http.gmt2strm(this.reportDate[1]),
          city_id: this.city
        }).then(resp => {
          this.areaPeople = resp.data.hits
          this.areaPeople1 = resp.data.hits.map(item => {
            return {name: item.name, value: item.proportion}
          })
          let map = this.$echarts.init(document.getElementById('reportmap'))
          map.setOption({
            animation: false,
            title:{
              text:'单位（%）',
              textStyle:{
                fontSize:12
              }
            },
            visualMap: {
              show:false,
              min: 0,
              max: 100,
              text:['High','Low'],
              realtime: false,
              calculable: true,
              inRange: {
                color: ['#e0ffff', '#006edd']
              }
            },
            series : [
              {
                name: '浏览量',
                type: 'map',
                //coordinateSystem: 'geo',
                //geoIndex: 0,
                map: '云南',
                roam: false,
                label: {
                  normal: {
                    show: true,
                    textStyle: {
                      color: 'rgba(0,0,0,0.4)'
                    },
                    formatter: '{b}\n{c}',
                    borderWidth:0
                  }
                },
                itemStyle: {
                  normal:{
                    borderColor: 'rgba(0, 0, 0, 0.2)'
                  },
                  emphasis:{
                    areaColor: null,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                },
                data:this.areaPeople1
              }
            ]
          })
        })
      },
      citychange(){
        this.senic=''
        http.get('bi/get_scenic_by_city', {city_id: this.city}).then(resp => {
          if (resp.data.errcode === 0) {
            this.senicData = resp.data.hits
          }
        })
      },
      picDate(val){
        if (val=='today'){
           console.log('sas',http.getMonday(0))
          this.reportDate =[http.getToday(),http.getToday()]
        };
        if (val=='yesterday'){
          this.reportDate =[http.getYesterDay(),http.getYesterDay()]
        };
        if (val=='week'){
          this.reportDate =[http.getMonday(),http.getToday()]
        };
        if (val=='lastw'){
          this.reportDate =[http.getLastMonday(),http.getLastSunday()]
        };
        if (val=='month'){
          this.reportDate =[http.getMonthFirstday(),http.getToday()]
        };
        if (val=='lastm'){
          this.reportDate =[http.getLstMonthFirstday(),http.getLstMonthEndday()]
        };
      },
      goto(){
        this.$router.push({path:'reportDownload',query:{
          s1:http.gmt2strm(this.reportDate[0]),
          s2:http.gmt2strm(this.reportDate[1]),
          c:this.checkAllGroup,
          c1:this.checkAllGroup1,
          c2:this.checkAllGroup2,
          c3:this.checkAllGroup3,
          c4:this.checkAllGroup4,
            city:this.city,
            senic:this.senic
          }})
      },

      handleCheckAll () {
        this.isshow =2
        if (this.indeterminate) {
          this.checkAll = false;
        } else {
          this.checkAll = !this.checkAll;
        }
        this.indeterminate = false;

        if (this.checkAll) {
          this.checkAllGroup = ['1', '2', '3',];
        } else {
          this.checkAllGroup = [];
        }
      },
      checkAllGroupChange (data) {
        if (data.length === 3) {
          this.indeterminate = false;
          this.checkAll = true;
        } else if (data.length > 0) {
          this.indeterminate = true;
          this.checkAll = false;
        } else {
          this.indeterminate = false;
          this.checkAll = false;
        }
      },
      clickShow(val){
        console.log(val)
        this.isshow=val
      },

      handleCheckAll1 () {
        this.isshow1=2
        if (this.indeterminate1) {
          this.checkAll1 = false;
        } else {
          this.checkAll1 = !this.checkAll1;
        }
        this.indeterminate1 = false;

        if (this.checkAll1) {
          this.checkAllGroup1 = ['4', '5', ];
        } else {
          this.checkAllGroup1 = [];
        }
      },
      checkAllGroupChange1 (data) {
        if (data.length === 3) {
          this.indeterminate1 = false;
          this.checkAll1 = true;
        } else if (data.length > 0) {
          this.indeterminate1 = true;
          this.checkAll1 = false;
        } else {
          this.indeterminate1 = false;
          this.checkAll1 = false;
        }
      },
      clickShow1(val){
        console.log(val)
        this.isshow1=val
      },

      handleCheckAll3 () {
        this.isshow3=2
        if (this.indeterminate3) {
          this.checkAll3 = false;
        } else {
          this.checkAll3 = !this.checkAll3;
        }
        this.indeterminate3 = false;

        if (this.checkAll3) {
          this.checkAllGroup3 = ['7', '8', '9','10',];
        } else {
          this.checkAllGroup3 = [];
        }
      },
      checkAllGroupChange3 (data) {
        if (data.length === 4) {
          this.indeterminate3 = false;
          this.checkAll3 = true;
        } else if (data.length > 0) {
          this.indeterminate3 = true;
          this.checkAll3 = false;
        } else {
          this.indeterminate3 = false;
          this.checkAll3 = false;
        }
      },
      clickShow3(val){
        console.log(val)
        this.isshow3=val
      },
      
      handleCheckAll4 () {
        this.isshow4=2
        if (this.indeterminate4) {
          this.checkAll4 = false;
        } else {
          this.checkAll4 = !this.checkAll4;
        }
        this.indeterminate4 = false;

        if (this.checkAll4) {
          this.checkAllGroup4 = ['11', '12','13', ];
        } else {
          this.checkAllGroup4 = [];
        }
      },
      checkAllGroupChange4 (data) {
        if (data.length === 3) {
          this.indeterminate4 = false;
          this.checkAll4 = true;
        } else if (data.length > 0) {
          this.indeterminate4 = true;
          this.checkAll4 = false;
        } else {
          this.indeterminate4 = false;
          this.checkAll4 = false;
        }
      },
      clickShow4(val){
        console.log(val)
        this.isshow4=val
      },

    }
  }
</script>

<style scoped>
  .tits {
    line-height: 60px;
    font-size: 16px;
    padding-left: 20px;
    font-weight: 600;
    color: #000;
    background: #fff;
    border-bottom: 1px solid #e2e4e6;
  }
  .v-row {
    border-bottom: 1px solid #e9e9e9;
    padding: 10px;
    background-color: rgb(246, 248, 250);;
  }
</style>
