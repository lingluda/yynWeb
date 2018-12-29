<template>
  <div style="background:#f2f2f2;">
    <div class="tits">报表下载</div>
    <card style="margin: 20px">
      <div style="margin-bottom: 20px">
       <!-- <Button @click="picDate('today')" label="today">今天</Button>
        <Button @click="picDate('yesterday')" label="yesterday">昨日</Button>
        <Button @click="picDate('week')" label="week">本周</Button>
        <Button @click="picDate('lastw')" label="lastw">上周</Button>
        <Button @click="picDate('month')" label="month">本月</Button>
        <Button @click="picDate('lastm')" label="lastm">上月</Button>-->

        <RadioGroup v-model="buttonSize" type="button" @on-change="picDate">
          <Radio label="today">今天</Radio>
          <Radio label="yesterday">昨天</Radio>
          <Radio label="week">本周</Radio>
          <Radio label="lastw">上周</Radio>
          <Radio label="month">本月</Radio>
          <Radio label="lastm">上月</Radio>
        </RadioGroup>
        <DatePicker type="daterange" v-model="reportDate" placeholder="Select date" style="width: 180px" :clearable="isclear"></DatePicker>

        <Select v-model="city" style="width:120px;" @on-change="citychange">
          <Option v-for="item in cityData" :value="item.id" :key="item.id">{{item.name}}</Option>
        </Select>
        <Select v-model="senic" placeholder="景区" style="width:120px;">
          <Option value="" v-if="senicData.length==0" disabled>请先选择州市</Option>
          <Option v-for="item in senicData" :value="item.id" :key="item.id">{{item.name}}</Option>
        </Select>
      </div>
      <div style="border: 1px solid #e9e9e9;border-bottom: unset">
        <div class="v-row">模块选择</div>
        <div style="border-bottom: 1px dashed #e9e9e9;">
          <div style="padding:10px;">
            <Checkbox
              :indeterminate="indeterminate"
              :value="checkAll"
              @click.prevent.native="handleCheckAll">旅游热度情况
            </Checkbox>
            <Icon v-show="isshow==1" type="ios-arrow-forward" style="float: right" size="18" @click="clickShow(2)"/>
            <Icon v-show="isshow==2" type="ios-arrow-down" style="float: right" size="18" @click="clickShow(1)"/>
          </div>
          <div v-show="isshow==2">
            <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
              <Checkbox label="1" style="padding: 0 0 10px 50px">游客人数</Checkbox>
              <Checkbox v-if="senic.length==0" label="2" style="padding: 0 0 10px 50px">区域游客占比</Checkbox>
              <Checkbox label="3" style="padding: 0 0 10px 50px">游客趋势</Checkbox>
            </CheckboxGroup>
          </div>
        </div>
        <div style="border-bottom: 1px dashed #e9e9e9;" v-if="senic.length==0">
          <div style="padding:10px;">
            <Checkbox
              :indeterminate="indeterminate1"
              :value="checkAll1"
              @click.prevent.native="handleCheckAll1">核心景区客流
            </Checkbox>
            <Icon v-show="isshow1==1" type="ios-arrow-forward" style="float: right" size="18" @click="clickShow1(2)"/>
            <Icon v-show="isshow1==2" type="ios-arrow-down" style="float: right" size="18" @click="clickShow1(1)"/>
          </div>
          <div v-show="isshow1==2" v-if="senic.length==0">
            <CheckboxGroup v-model="checkAllGroup1" @on-change="checkAllGroupChange1">
              <Checkbox label="4" style="padding: 0 0 10px 50px">5A级景区</Checkbox>
              <Checkbox label="5" style="padding: 0 0 10px 50px">4A级景区</Checkbox>
            </CheckboxGroup>
          </div>
        </div>
     <!--   <div style="border-bottom: 1px dashed #e9e9e9;" v-if="senic.length==0">
          <CheckboxGroup v-model="checkAllGroup2">
            <Checkbox label="6" style="padding: 10px 0 10px 10px;">景区指数排行</Checkbox>
          </CheckboxGroup>
        </div>-->
        <div style="border-bottom: 1px dashed #e9e9e9;">
          <div style="padding:10px;">
            <Checkbox
              :indeterminate="indeterminate3"
              :value="checkAll3"
              @click.prevent.native="handleCheckAll3">游客画像
            </Checkbox>
            <Icon v-show="isshow3==1" type="ios-arrow-forward" style="float: right" size="18" @click="clickShow3(2)"/>
            <Icon v-show="isshow3==2" type="ios-arrow-down" style="float: right" size="18" @click="clickShow3(1)"/>
          </div>
          <div v-show="isshow3==2">
            <CheckboxGroup v-model="checkAllGroup3" @on-change="checkAllGroupChange3">
              <Checkbox label="7" style="padding: 0 0 10px 50px">基本画像</Checkbox>
              <Checkbox v-if="showchech==1" label="8" style="padding: 0 0 10px 50px">人口迁徙</Checkbox>
              <Tooltip v-if="senic.length==0&&showchech==2" placement="top" content="迁徙画像不支持时间段下载">
                <Checkbox disabled label="28" style="padding: 0 0 10px 50px">人口迁徙
                </Checkbox>
              </Tooltip>
             <!-- <Checkbox label="9" v-if="senic.length==0" style="padding: 0 0 10px 50px">一机游用户消费</Checkbox>
              <Checkbox label="10" v-if="senic.length==0" style="padding: 0 0 10px 50px">游客线下消费</Checkbox>-->
            </CheckboxGroup>
          </div>
        </div>

      <!--  <div style="border-bottom: 1px dashed #e9e9e9;" v-if="senic.length==0">
          <div style="padding:10px;">
            <Checkbox
              :indeterminate="indeterminate4"
              :value="checkAll4"
              @click.prevent.native="handleCheckAll4">游客体验
            </Checkbox>
            <Icon v-show="isshow4==1" type="ios-arrow-forward" style="float: right" size="18" @click="clickShow4(2)"/>
            <Icon v-show="isshow4==2" type="ios-arrow-down" style="float: right" size="18" @click="clickShow4(1)"/>
          </div>
          <div v-show="isshow4==2">
            <CheckboxGroup v-model="checkAllGroup4" @on-change="checkAllGroupChange4">
              <Checkbox label="11" style="padding: 0 0 10px 50px">累计新增投诉量</Checkbox>
              <Checkbox label="12" style="padding: 0 0 10px 50px">投诉时长分析</Checkbox>
              <Checkbox label="13" style="padding: 0 0 10px 50px">投诉对象及处理情况分析</Checkbox>
            </CheckboxGroup>
          </div>
        </div>-->
      </div>
      <div style="margin: 20px 0 0 40%">
        <Button @click="goto" :disabled='downling1==1'>预览</Button>
        <Button @click="download" :disabled='downling==1'>下载</Button>
      </div>
      <iframe name="iframedownload" :src="downLoadUrl" frameborder="0" width="100%" height="0px"
              style="dispaly:none"></iframe>
      <iframe name="iframedownload1" :src="downLoadUrl1" frameborder="0" width="100%" height="0px"
              style="dispaly:none"></iframe>
    </card>
  </div>
</template>

<script>
  import http from '@/http.js'
  import html2canvas from 'html2canvas'

  export default {
    name: "report",

    data() {
      return {
        buttonSize:'week',
        isclear:false,
        wjj: http.gmt2strmst(new Date()),
        htmldata: '',
        downling: '',
        downling1: '',
        showchech: 1,
        selectDa: 'lastw',
        city: '',
        senic: '',
        cityData: [],
        senicData: [],
        reportDate: [http.getLastMonday(), http.getLastSunday()],
        indeterminate: false,
        checkAll: false,
        checkAllGroup: [],
        isshow: 1,

        indeterminate1: false,
        checkAll1: false,
        checkAllGroup1: [],
        isshow1: 1,

        indeterminate2: false,
        checkAll2: false,
        checkAllGroup2: [],
        isshow2: 1,

        indeterminate3: false,
        checkAll3: false,
        checkAllGroup3: [],
        isshow3: 1,


        indeterminate4: false,
        checkAll4: false,
        checkAllGroup4: [],
        isshow4: 1,
        downLoadUrl: '',
        downLoadUrl1: '',
        downloads:'0'
      }
    },
    created(){
      this.bus.$on("toChangeTitle", function (id) {
        console.log('1221221ooo2121212121212:::',id)
        this.downloads=id
      })
    },
    mounted() {
      this.getCityS()
    },
    methods: {
      download() {
        this.$Loading.start();
        this.downling = 1
        this.downLoadUrl = '#/reportDownload?s1=' + http.gmt2strm(this.reportDate[0]) + '&s2=' + http.gmt2strm(this.reportDate[1]) +
          '&c=' + this.checkAllGroup + '&c1=' + this.checkAllGroup1 + '&c2=' + this.checkAllGroup2 + '&c3=' + this.checkAllGroup3 +
          '&c4=' + this.checkAllGroup4 + '&city=' + this.city + '&senic=' + this.senic + '&download=1' + '&wjj=' + this.wjj+'&r='+Math.random();
        //console.log(this.downLoadUrl)
       // document.getElementsByName('iframedownload').src=this.downLoadUrl
        window.open(this.downLoadUrl, 'iframedownload');
        setTimeout(() => {
          this.$Loading.finish();
          this.downling = 0
          this.downLoadUrl=''
        }, 10000)
      },
      getCityS() {

        http.post("bi/get_all_city_prov", {}).then(resp => {
          this.cityData = resp.data.hits;
          this.city = resp.data.hits[0].id;
          http.post('bi/get_scenic_by_city', {city_id: this.city}).then(resp => {
            if (resp.data.errcode === 0) {
              this.senicData = resp.data.hits
            }
          })
        });
      },
      citychange() {
        this.senic = ''
        http.post('bi/get_scenic_by_city', {city_id: this.city}).then(resp => {
          if (resp.data.errcode === 0) {
            this.senicData = resp.data.hits
          }
        })
      },
      wdate() {
        if (http.gmt2strm(this.reportDate[0]) == http.gmt2strm(this.reportDate[1])) {
          this.showchech = 1
        } else {
          this.showchech = 2
        }
      },
      picDate(val) {
        if (val == 'today') {
          this.reportDate = [http.getToday(), http.getToday()]
          //console.log(this.reportDate[0].substring(8,10) + '月累计已处理投诉量')
        }
        ;
        if (val == 'yesterday') {
          this.reportDate = [http.getYesterDay(), http.getYesterDay()]
        }
        ;
        if (val == 'week') {
          this.reportDate = [http.getLastSunday(), http.getToday()]
        }
        ;
        if (val == 'lastw') {
          this.reportDate = [http.getLastMonday(), http.getLastSunday()]
        }
        ;
        if (val == 'month') {
          this.reportDate = [http.getMonthFirstday(), http.getToday()]
        }
        ;
        if (val == 'lastm') {
          this.reportDate = [http.getLstMonthFirstday(), http.getLstMonthEndday()]
        }
        ;

      },
      goto() {
        setTimeout(() => {
          this.$router.push({
            path: 'reportDownload2', query: {
              s1: http.gmt2strm(this.reportDate[0]),
              s2: http.gmt2strm(this.reportDate[1]),
              c: this.checkAllGroup,
              c1: this.checkAllGroup1,
              c2: this.checkAllGroup2,
              c3: this.checkAllGroup3,
              c4: this.checkAllGroup4,
              city: this.city,
              senic: this.senic,
              wjj: this.wjj,
            }

          })
          this.$Loading.finish();
          this.downling1 = 0
        }, 10000)
        this.$Loading.start();
        this.downling1 = 1
        this.downLoadUrl1 = '#/reportDownload?s1=' + http.gmt2strm(this.reportDate[0]) + '&s2=' + http.gmt2strm(this.reportDate[1]) +
          '&c=' + this.checkAllGroup + '&c1=' + this.checkAllGroup1 + '&c2=' + this.checkAllGroup2 + '&c3=' + this.checkAllGroup3 +
          '&c4=' + this.checkAllGroup4 + '&city=' + this.city + '&senic=' + this.senic + '&download=2' + '&wjj=' + this.wjj+'&r='+Math.random();
        window.open(this.downLoadUrl1, 'iframedownload1');
      },

      handleCheckAll() {
        this.isshow = 2
        if (this.indeterminate) {
          this.checkAll = false;
        } else {
          this.checkAll = !this.checkAll;
        }
        this.indeterminate = false;
        if (this.senic.length==0) {
          if (this.checkAll) {
            this.checkAllGroup = ['1', '2', '3',];
          } else {
            this.checkAllGroup = [];
          }
        }else {
          if (this.checkAll) {
            this.checkAllGroup = ['1', '3',];
          } else {
            this.checkAllGroup = [];
          }
        }

      },
      checkAllGroupChange(data) {
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
      clickShow(val) {
        console.log(val)
        this.isshow = val
      },

      handleCheckAll1() {
        this.isshow1 = 2
        if (this.indeterminate1) {
          this.checkAll1 = false;
        } else {
          this.checkAll1 = !this.checkAll1;
        }
        this.indeterminate1 = false;

        if (this.checkAll1) {
          this.checkAllGroup1 = ['4', '5',];
        } else {
          this.checkAllGroup1 = [];
        }
      },
      checkAllGroupChange1(data) {
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
      clickShow1(val) {
        console.log(val)
        this.isshow1 = val
      },

      handleCheckAll3() {
        this.isshow3 = 2
        if (this.indeterminate3) {
          this.checkAll3 = false;
        } else {
          this.checkAll3 = !this.checkAll3;
        }
        this.indeterminate3 = false;
        if (this.senic.length==0){
          if (this.checkAll3) {
            this.checkAllGroup3 = ['7', '8', '9', '10',];
          } else {
            this.checkAllGroup3 = [];
          }
        } else {
          if (this.checkAll3) {
            this.checkAllGroup3 = ['7'];
          } else {
            this.checkAllGroup3 = [];
          }
        }

      },
      checkAllGroupChange3(data) {
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
      clickShow3(val) {
        console.log(val)
        this.isshow3 = val
      },

      handleCheckAll4() {
        this.isshow4 = 2
        if (this.indeterminate4) {
          this.checkAll4 = false;
        } else {
          this.checkAll4 = !this.checkAll4;
        }
        this.indeterminate4 = false;

        if (this.checkAll4) {
          this.checkAllGroup4 = ['11', '12', '13',];
        } else {
          this.checkAllGroup4 = [];
        }
      },
      checkAllGroupChange4(data) {
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
      clickShow4(val) {
        console.log(val)
        this.isshow4 = val
      },

    },
    watch: {
      reportDate: 'wdate',

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
