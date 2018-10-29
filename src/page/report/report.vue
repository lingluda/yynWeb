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
              @click.prevent.native="handleCheckAll3">游客画像</Checkbox>
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

      <div style="margin: 20px 0 0 40%">
        <Button @click="goto">预览</Button>
        <Button>下载</Button>
      </div>
    </card>
  </div>
</template>

<script>
  import http from '@/http.js'
  export default {
    name: "reportDownload",
    data(){
      return{
        city:'',
        senic:'',
        cityData:[],
        senicData:[],
        reportDate:[http.getYesterDay(),http.getToday()],
        indeterminate: false,
        checkAll: true,
        checkAllGroup: ['1','2','3'],
        isshow:2,

        indeterminate1: false,
        checkAll1: true,
        checkAllGroup1: ['4','5' ],
        isshow1:2,

        indeterminate2: false,
        checkAll2: true,
        checkAllGroup2: ['6'],
        isshow2:2,

        indeterminate3: false,
        checkAll3: true,
        checkAllGroup3: ['7','8','9','10' ],
        isshow3:2,

        indeterminate4: false,
        checkAll4: true,
        checkAllGroup4: ['11','12','13'],
        isshow4:2,
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
          console.log('sas',http.getcn(0))
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
        if (this.indeterminate) {
          this.checkAll = false;
        } else {
          this.checkAll = !this.checkAll;
        }
        this.indeterminate = false;

        if (this.checkAll) {
          this.checkAllGroup = ['1', '2', '3'];
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
        if (this.indeterminate3) {
          this.checkAll3 = false;
        } else {
          this.checkAll3 = !this.checkAll3;
        }
        this.indeterminate3 = false;

        if (this.checkAll3) {
          this.checkAllGroup3 = ['7', '8','9','10' ];
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
