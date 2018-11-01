<template>
  <div style="background:#f2f2f2;">
    <div class="tits">游客画像</div>
    <div style="margin:20px;">
      <card>
        <div class="card_title">
          <span style="font-weight: bold;color: #000000">基本属性分析</span>
          <Tooltip content="消费能力-腾讯数据统计的用户消费指数" placement="right" max-width="200">
            <Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline"/>
          </Tooltip>
        </div>
        <Select style="width: 120px" placeholder="城市" v-model="ccc" @on-change="clisk">
          <Option v-for="(item, index) in cityData" :value="item.id" :key="index">{{item.name}}</Option>
        </Select>
        <Select style="width: 120px" placeholder="景区" v-model="ccc1" @on-change="_ccc1">
          <Option value="" v-if="senicData.length==0" disabled>请先选择州市</Option>
          <Option v-for="(item, index) in senicData" :value="item.id" :key="index">{{item.name}}</Option>
        </Select>
        <RadioGroup type="button" @on-change="slelecti7">
          <Radio label="1">近7日</Radio>
          <Radio label="2">近30日</Radio>
        </RadioGroup>
        <DatePicker type="daterange" v-model="cpicDate" placeholder="自选时间" style="width: 180px" @on-change="dateChange" :options="disoptionsdate"></DatePicker>
        <Row :gutter="16" style="margin-top: 20px">
          <Col span="6">
            <div id="sex">
              <div style="height: inherit;"></div>
              <!-- <Icon type="ios-woman" size="32" color="#ff50fe" class="sex-icon"/> -->
              <!-- <Icon type="ios-man" size="32" color="#1ea9ff" class="sex-icon"/> -->
            </div>
          </Col>
          <Col span="6">
            <div id="in" class="tousimg_zb"></div>
          </Col>
          <Col span="6">
            <div id="os" class="tousimg_zb"></div>
          </Col>
          <Col span="6">
            <div id="ios" class="tousimg_zb"></div>
          </Col>
        </Row>

        <Row :gutter="16" style="margin-top: 23px">
          <Col span="12">
            <div id="age" class="tousimg_zb1"></div>
          </Col>
          <Col span="12">
            <div id="edu" class="tousimg_zb1"></div>
          </Col>
        </Row>
        <Row :gutter="16" style="margin-top: 23px;">
          <Col span="24">
            <div id="city" class="tousimg_zb"></div>
          </Col>
        </Row>
        <Row :gutter="16" style="margin-top: 23px;">
          <Col span="24">
            <div id="province" class="tousimg_zb"></div>
          </Col>
        </Row>
      </card>
      <card style="margin-top: 20px">
        <div class="card_title">
          <span style="font-weight: bold;color: #000000">人口迁移分析</span>

        </div>
        <RadioGroup type="button" @on-change="hotlinepic" v-model="trfcty">
          <Radio label="1">全部</Radio>
          <Radio label="2">飞机</Radio>
          <Radio label="3">火车</Radio>
          <Radio label="4">汽车</Radio>
        </RadioGroup>
        <DatePicker type="date" v-model="hotlineDate" placeholder="自选时间" style="width: 120px" :options="disoptionsdate"></DatePicker>
        <Select style="width: 120px" placeholder="清选择" v-model="ccti">
          <Option v-for="(item, index) in cityData1" :value="item.name" :key="index">{{item.name}}</Option>
        </Select>
        <Row :gutter="16" style="margin-top: 20px;margin-bottom: 10px">
          <Col span="12">
            <div>
              <Tabs v-model="tabname"
                    style="border-top: 1px solid #dcdee2;border-left: 1px solid #dcdee2;height: 557px">
                <TabPane label="迁入" name="in">
                  <Table height="550" :columns="columns1" :data="data3"></Table>
                </TabPane>
                <TabPane label="迁出" name="out">
                  <Table height="550" :columns="columns1" :data="data3"></Table>
                </TabPane>
              </Tabs>
            </div>
          </Col>

          <Col span="12">
            <aaamap :d2d="this.data2" :ioindex="this.ioindex" style="border: 1px solid #dcdee2;height: 557px;width: 100%"></aaamap>
          </Col>
        </Row>
      </card>
      <card style="margin-top: 20px">
        <div style="height: 40px">
          <span style="font-weight: bold;color: #000000">一机游用户消费维度分析</span>
          <Tooltip content="根据游云南app中用户的消费进行计算分析" placement="right" max-width="200">
            <Icon size="19" type="ios-help-circle-outline" />
          </Tooltip>
          <div style="float: right">
            <RadioGroup type="button" @on-change="cashdatechange1">
              <Radio label="1">近7日</Radio>
              <Radio label="2">近30日</Radio>
            </RadioGroup>
            <DatePicker v-model="cashdate1" type="daterange" placement="bottom-end" format="yyyy-MM-dd"  placeholder="请选择日期" style="width:180px" ></DatePicker>
          </div>
        </div>
        <Row :gutter="16">
          <Col :span="8">
            <div style="border: 1px solid #dcdee2;height: 300px">
              <div style="margin: 20px">
              <span style="color: #000">人均消费</span>

              </div>
              <Row style="margin: 90px 0 0 50px">
                <Col :span="8">
                  <img src="../assets/imgs/cash1.png" style="margin-right:20px;width:60px;height:60px"/>
                </Col>
                <Col :span="16" style="margin-left: -10px">
                  <div style="margin-bottom: 3px;color: #000">用户平均消费金额</div>
                  <div style="color:#006eff"><span style="font-size: 32px;font-weight:600">{{cashmax1vag}}</span> <span>元</span></div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col :span="8">
            <div style="border: 1px solid #dcdee2;height: 300px">
              <div style="margin: 20px">
                <span style="color: #000">游客消费地排行</span>

              </div>
              <div id="qsnet">
                <ul>
                  <li class="qsnet_li" v-for="(item,index) in cashmax1rank">
                    <Row class="qsnet_row">
                      <Col span="2" style="line-height: 20px;margin: 0 -6px 2px 4px">
                        <i class="qsnet_idx">{{index + 1}}</i>
                        <!--<span class="qsnet_sp">111</span>-->
                      </Col>
                      <Col span="5" class="qsnet_num">{{item.name}}</Col>
                      <Col span="9" style="margin: 5px 0 0 0">  <pers-st :pers='item.pers' ></pers-st></Col>

                      <Col span="8" class="qsnet_num">人均消费{{item.avg}}元</Col>
                    </Row>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col :span="8">
            <div style="border: 1px solid #dcdee2;height: 300px">
              <div style="margin: 20px">
                <span style="color: #000">消费类型占比</span>

                <div id="cash" style="height:250px;width:100%;"></div>
              </div>
            </div>
          </Col>
        </Row>
      </card>
      <card style="margin-top: 20px">
        <div style="height: 40px">
          <span style="font-weight: bold;color: #000000">线下用户消费维度分析</span>

          <div style="float: right">
            <RadioGroup type="button" @on-change="cashdatechange2">
              <Radio label="1">近7日</Radio>
              <Radio label="2">近30日</Radio>
            </RadioGroup>
            <DatePicker v-model="cashdate2" type="daterange" placement="bottom-end" format="yyyy-MM-dd"  placeholder="请选择日期" style="width:180px" ></DatePicker>
          </div>
        </div>
        <Row :gutter="16">
          <Col :span="8">
            <div style="border: 1px solid #dcdee2;height: 300px">
              <div style="margin: 20px">
                <span style="color: #000">人均消费</span>
                <Tooltip content="根据线下商家的诚信码支付数据计算" placement="right" max-width="200">
                  <Icon size="19" type="ios-help-circle-outline" />
                </Tooltip>
              </div>
              <Row style="margin: 90px 0 0 50px">
                <Col :span="8">
                  <img src="../assets/imgs/cash1.png" style="margin-right:20px;width:60px;height:60px"/>
                </Col>
                <Col :span="16" style="margin-left: -10px">
                  <div style="margin-bottom: 3px;color: #000">用户平均消费金额</div>
                  <div style="color:#006eff"><span style="font-size: 32px;font-weight:600">{{cashmax2vag}}</span> <span>元</span></div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col :span="8">
            <div style="border: 1px solid #dcdee2;height: 300px">
              <div style="margin: 20px">
                <span style="color: #000">游客消费地排行</span>

              </div>
              <div id="qsnet">
                <ul>
                  <li class="qsnet_li" v-for="(item,index) in cashmax2rank">
                    <Row class="qsnet_row">
                      <Col span="2" style="line-height: 20px;margin: 0 -6px 2px 4px">
                        <i class="qsnet_idx">{{index + 1}}</i>
                        <!--<span class="qsnet_sp">111</span>-->
                      </Col>
                      <Col span="5" class="qsnet_num">{{item.name}}</Col>
                      <Col span="9" style="margin: 5px 0 0 0">  <pers-st :pers='item.pers' ></pers-st></Col>

                      <Col span="8" class="qsnet_num">人均消费{{item.avg}}元</Col>
                    </Row>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col :span="8">
            <div style="border: 1px solid #dcdee2;height: 300px">
              <div style="margin: 20px">
                <span style="color: #000">消费类型占比</span>

                <div id="cash1" style="height:250px;width:100%;"></div>
              </div>
            </div>
          </Col>
        </Row>
      </card>
     <!-- <card style="margin-top: 20px">
        <div style="height: 40px">
          <span style="font-weight: bold;color: #000000">游客线下消费分析</span>
          <Tooltip content="根据游云南app中用户的消费进行计算分析" placement="right" max-width="200">
            <Icon size="19" type="ios-help-circle-outline" />
          </Tooltip>
          <div style="float: right">
            <RadioGroup type="button">
              <Radio label="1">近7日</Radio>
              <Radio label="2">近30日</Radio>
            </RadioGroup>
            <DatePicker v-model="cashdate3" placement="bottom-end" format="yyyy-MM-dd" type="date" placeholder="请选择日期" style="width:120px" ></DatePicker>
            <span>-</span>
            <DatePicker v-model="cashdate4" placement="bottom-end" format="yyyy-MM-dd" type="date" placeholder="请选择日期" style="width:120px" ></DatePicker>
          </div>
        </div>
        <Row :gutter="16">
          <Col :span="8">
            <div style="border: 1px solid #dcdee2;height: 300px">
              <div style="margin: 20px">
                <span style="color: #000">人均消费</span>
                <Tooltip content="根据游云南app中用户的消费进行计算分析" placement="right" max-width="200">
                  <Icon size="19" type="ios-help-circle-outline" />
                </Tooltip>
              </div>
              <Row style="margin: 90px 0 0 50px">
                <Col :span="8">
                  <img src="../assets/imgs/cash1.png" style="margin-right:20px;width:60px;height:60px"/>

                </Col>
                <Col :span="16" style="margin-left: -10px">
                  <div style="margin-bottom: 3px;color: #000">用户平均消费金额</div>
                  <div style="color:#006eff"><span style="font-size: 32px;font-weight:600">321,221</span> <span>元</span></div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col :span="8">
            <div style="border: 1px solid #dcdee2;height: 300px">
              <div style="margin: 20px">
                <span style="color: #000">游客消费地排行</span>
                <Tooltip content="根据游云南app中用户的消费进行计算分析" placement="right" max-width="200">
                  <Icon size="19" type="ios-help-circle-outline" />
                </Tooltip>
              </div>
              <div id="qsnet">
                <ul>
                  <li class="qsnet_li" v-for="(item,index) in 10" :key="index" v-if="index < 5">
                    <Row class="qsnet_row">
                      <Col span="2" style="line-height: 20px;margin: 0 -6px 2px 4px">
                        <i class="qsnet_idx">{{index + 1}}</i>
                        &lt;!&ndash;<span class="qsnet_sp">111</span>&ndash;&gt;
                      </Col>
                      <Col span="5" class="qsnet_num">玉龙玉龙龙龙</Col>
                      <Col span="10" style="margin: 5px 0 0 0">  <pers-st :pers=100 ></pers-st></Col>

                      <Col span="7" class="qsnet_num">人均消费200元</Col>
                    </Row>
                  </li>
                </ul>
            </div>
            </div>
          </Col>
          <Col :span="8">
            <div style="border: 1px solid #dcdee2;height: 300px">
              <div style="margin: 20px">
                <span style="color: #000">消费类型占比</span>
                <Tooltip content="根据游云南app中用户的消费进行计算分析" placement="right" max-width="200">
                  <Icon size="19" type="ios-help-circle-outline" />
                </Tooltip>
              </div>
            </div>
          </Col>
        </Row>
      </card>-->
    </div>
  </div>
</template>
<style lang="less" scoped>
  .tits {
    line-height: 60px;
    font-size: 16px;
    padding-left: 20px;
    font-weight: 600;
    color: #000;
    background: #fff;
    border-bottom: 1px solid #e2e4e6;
  }

  .ivu-table-wrapper {
    border: unset;
  }

  div.ivu-table:after {
    background-color: unset !important;
  }

  .card_title {
    line-height: 30px;
    height: 40px;
    font-size: 15px;
  }

  .tousimg_zb {
    width: 100%;
    height: 400px;
    border: 1px solid #dcdee2;
  }
  .tousimg_zb1 {
    width: 100%;
    height: 200px;
    border: 1px solid #dcdee2;
    padding: 0 30px 15px;
  }
  .tousimg_zb2 {
    width: 100%;
    height: 600px;
    border: 1px solid #dcdee2;
    padding: 0 30px 15px;
  }
  .ivu-col-span-6,
  .ivu-col-span-12 {
    padding-left: 8px !important;
    padding-right: 15px !important;
  }

  .ivu-tabs-nav {
    width: 100% !important;
  }

  #sex{
    border: 1px solid #dcdee2;
    height: 400px;
    width: 100%;
    position: relative;

    .sex-icon {
      position: absolute;
      top: 40%;
      margin-top: -16px;
    }
    .sex-icon:last-child {
      right: 0;
    }
  }
  #qsnet li,
  #zsnet li {
    list-style: none;
  }
  .qsnet_idx {
    width: 20px;
    height: 20px;
    font-style: normal;
    background: #b6b6b6;
    border-radius: 3px;
    font-size: 12px;
    padding: 2px 6px;
    color: #fff;
    margin-right: 8px;
  }
  .qsnet_sp {
    color: #000;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .qsnet_time {
    color: #a5a5a5;
    font-size: 14px;
    padding-left: 50px;
  }
  .qsnet_num {
    line-height: 20px;
  }
  .qsnet_li {
    line-height: 25px;
    // padding: 15px 0 5px;
    padding: 12px 0 5px 5px;
    //border-bottom: 1px solid #dcdee2;
  }

  // .qsnet_li:last-of-type{
  //   border-bottom: none;
  // }

  .qsnet_row {
    color: #000;
    font-size: 14px;
  }
  #qsnet li:nth-child(1) i,
  #zsnet li:nth-child(1) i {
    background: #ff716b;
  }
  #qsnet li:nth-child(2) i,
  #qsnet li:nth-child(3) i,
  #zsnet li:nth-child(2) i,
  #zsnet li:nth-child(3) i {
    background: #ffbb00;
  }
</style>

<script>
  import http from "@/http.js";
  import "@/dateFormate.js";
  import pers_st from './analysisform'
  import gomap from '@/components/map/echartMap'
  import * as echartsHelper from '@/helpers/echarts'

  export default {
    components:{
      "aaamap":gomap,
      "pers-st":pers_st
    },
    data() {
      return {
        cashmax1vag:'',
        cashmax1rank:[],
        cashmax2vag:'',
        cashmax2rank:[],
        cashdate1:[http.getYesterDay(),http.getToday()],
        cashdate2:[http.getYesterDay(),http.getToday()],
        ioindex:1,
        d11:http.getMonthAgo(),
        d22:'2018-01',
        trfcty:'1',
        senicData:[],
        ccti:'',
        ccc:'',
        ccc1:'',
        cccM:'',
        hotlineDate:http.getYesterDay(),
        provx: [],
        provy: [],
        cityx: [],
        cityy: [],
        mobilex: [],
        mobiley: [],
        carDatax: [],
        carDatay: [],
        vagprice: "",
        middle: "",
        tabname: "in",
        sexData: [],
        inData: [],
        osData: [],
        ageData: [],
        eduData: [],
        cliData: [],
        ddData: [],
        cityData: [],
        cityData1: [],
        proData: [],
        cpicDate: [http.getToday(),http.getToday()],
        picDate3: http.getYesterDay(),
        picDate4: [this.d22,this.d11],
        //cpicDate: http.getToday(),
        columns1: [
          {
            title: "排名",
            type: "index",
            width: 60,
            align: "center"
          },
          {
            title: "线路",
            key: "moveline",
            width:120,
            color:"red"
          },

          {
            title: "热度",
            key: "score",
            sortable: true
          },
          {
            title: "汽车",
            key: "carx",
            sortable: true
          },
          {
            title: "火车",
            key: "trainx",
            sortable: true
          },
          {
            title: "飞机",
            key: "planex",
            sortable: true
          }
        ],
        data1: [],
        data2: [],
        data3: [],
        cashData: [],
        disoptionsdate: {
            disabledDate (date) {
                return date< new Date(2018,7,1) || date > new Date()
            }
        }
      };
    },
    mounted() {
      this.init();
    },
    methods: {
      slelecti7(val){
        if (val==1){
          this.cpicDate=[http.getWeekAgo(),http.getYesterDay()]
          this.dateChange()
        } else {
          this.cpicDate=[http.getMonthAgo(),http.getYesterDay()]
          this.dateChange()
        }
      },
      cashdatechange1(val){
        if (val==1){
          this.cashdate1=[http.getWeekAgo(),http.getToday()]
        }else {
          this.cashdate1=[http.getMonthAgo(),http.getToday()]
        }
      },
      cashmax1(){
        http.get('bi/get_consume_by_datespan',{startTime:http.gmt2strm(this.cashdate1[0]),endTime:http.gmt2strm(this.cashdate1[1])}).then(resp=>{
          this.cashmax1vag = http.qfw(resp.data.hits.avg.avg_amount)
          let cashmax1ranks = resp.data.hits.rank
          let cashDatas = resp.data.hits.cate;
          this.cashData=[]
          for (var i=0;i<cashDatas.length;i++){
            if (cashDatas[i].value!=0){
              this.cashData.push(cashDatas[i])
            }
          }
          let totalavg=0
          for (var i=0;i<cashmax1ranks.length;i++) {
            totalavg +=cashmax1ranks[i].avg
          }
          console.log('totalavg',totalavg)
          for (var i=0;i<cashmax1ranks.length;i++) {
            cashmax1ranks[i].pers = cashmax1ranks[i].avg/totalavg*300
          }
          this.cashmax1rank = cashmax1ranks.sort((v1, v2) => v2.avg - v1.avg);
          this.initCash();
        })
      },
      cashdatechange2(val){
        if (val==1){
          this.cashdate2=[http.getWeekAgo(),http.getToday()]
        }else {
          this.cashdate2=[http.getMonthAgo(),http.getToday()]
        }
      },
      cashmax2(){
        http.get('bi/get_consume_by_datespan',{startTime:http.gmt2strm(this.cashdate2[0]),endTime:http.gmt2strm(this.cashdate2[1])}).then(resp=>{
          this.cashmax2vag = http.qfw(resp.data.hits.avg.avg_amount)
          let cashmax1ranks = resp.data.hits.rank
          let cashDatas = resp.data.hits.cate;
          this.cashData1=[]
          for (var i=0;i<cashDatas.length;i++){
            if (cashDatas[i].value!=0){
              this.cashData1.push(cashDatas[i])
            }
          }
          let totalavg=0
          for (var i=0;i<cashmax1ranks.length;i++) {
            totalavg +=cashmax1ranks[i].avg
          }
          console.log('totalavg',totalavg)
          for (var i=0;i<cashmax1ranks.length;i++) {
            cashmax1ranks[i].pers = cashmax1ranks[i].avg/totalavg*300
          }
          this.cashmax2rank = cashmax1ranks.sort((v1, v2) => v2.avg - v1.avg);
          this.initCash1();
        })
      },
      clisk(val){
        this.provx = [];
        this.provy = [];
        this.cityx = [];
        this.cityy = [];
        this.eduData = [];
        this.ageData = [];
        this.carDatax = [];
        this.carDatay = [];
        this.mobilex = [];
        this.mobiley = [];
        this.ccc1='';
        this.senicData=[];
        if (val) {
          http.get('bi/get_scenic_by_city',{city_id:val}).then(resp=>{
            this.senicData=resp.data.hits
            this.ccc1='';
          })
        }
        http
          .get("bi/get_portrait_base_by_datespan", {startTime:http.gmt2str(this.cpicDate[0]),
            endTime:http.gmt2str(this.cpicDate[1]),city_id:val})
          .then(this.getPortraitData);
                  http
          .get("bi/get_portrait_origin_by_datespan", {
            //date: this.cpicDate,
            startTime:http.gmt2str(this.cpicDate[0]),
            endTime:http.gmt2str(this.cpicDate[1]),
            type: "city",
            scenic: "",
            city_id: this.ccc
          })
          .then(resp => {
            for (var i = 0; i < resp.data.hits.length; i++) {
              this.cityx.push(resp.data.hits[i].name);
              this.cityy.push(parseInt(resp.data.hits[i].origin_percent* 10000)/100);
            }
            this.initCity();
          });
        http
          .get("bi/get_portrait_origin_by_datespan", {
            ///date: this.cpicDate,
            startTime:http.gmt2str(this.cpicDate[0]),
            endTime:http.gmt2str(this.cpicDate[1]),
            type: "prov",
            scenic: "",
            city_id: this.ccc
          })
          .then(resp => {
            for (var i = 0; i < resp.data.hits.length; i++) {
              this.provx.push(resp.data.hits[i].name);
              this.provy.push(parseInt(resp.data.hits[i].origin_percent * 10000)/100);
            }
            this.initPro();
          });
      },
      hotlinedp(){
        if (!this.ccti) {
          return
        }
        this.data2=[]
        http.get("bi/get_migrate_by_date", {
          date: http.gmt2str(this.hotlineDate),
          city_name: this.ccti,
          top: 10,
          io: this.tabname
        }).then(resp => {
          if (!resp.data || !resp.data.hits) {
            return
          }
          this.data1 = resp.data.hits;
          this.data3 = resp.data.hits;
          for (var i=0;i<resp.data.hits.length;i++){
            this.data2.push([{name:resp.data.hits[i].to},{name:resp.data.hits[i].from}])
          }
          for (var i=0;i<resp.data.hits.length;i++){
            this.data3[i].moveline=resp.data.hits[i].from+'-'+resp.data.hits[i].to
            this.data3[i].carx=parseInt(resp.data.hits[i].car*10000)/100+'%'
            this.data3[i].trainx=parseInt(resp.data.hits[i].train*10000)/100+'%'
            this.data3[i].planex=parseInt(resp.data.hits[i].plane*10000)/100+'%'
          }
        });
      },
      hotlinepic(val11) {
        if (val11==='1'){
          this.columns1=[
            {
              title: "排名",
              type: "index",
              width: 60,
              align: "center"
            },
            {
              title: "线路",
              key: "moveline",
              width:120,
            },
            {
              title: "热度",
              key: "score",
              sortable: true
            },
            {
              title: "汽车",
              key: "carx",
              sortable: true
            },
            {
              title: "火车",
              key: "trainx",
              sortable: true
            },
            {
              title: "飞机",
              key: "planex",
              sortable: true
            }
          ]
        }
        if (val11==='2'){
          this.columns1=[
            {
              title: "排名",
              type: "index",
              width: 60,
              align: "center"
            },
            {
              title: "线路",
              key: "moveline",
              width:120,
              color:"red"
            },

            {
              title: "热度",
              key: "score",
              sortable: true
            },
            {
              title: "飞机",
              key: "planex",
              sortable: true
            }
          ]
        }
        if (val11==='3'){
          this.columns1=[
            {
              title: "排名",
              type: "index",
              width: 60,
              align: "center"
            },
            {
              title: "线路",
              key: "moveline",
              width:120,
              color:"red"
            },

            {
              title: "热度",
              key: "score",
              sortable: true
            },

            {
              title: "火车",
              key: "trainx",
              sortable: true
            },

          ]
        }
        if (val11==='4'){
          this.columns1=[
            {
              title: "排名",
              type: "index",
              width: 60,
              align: "center"
            },
            {
              title: "线路",
              key: "moveline",
              width:120,
              color:"red"
            },

            {
              title: "热度",
              key: "score",
              sortable: true
            },
            {
              title: "汽车",
              key: "carx",
              sortable: true
            },

          ]
        }
      },
      init() {
        http.get('bi/get_all_city_prov', {}).then(resp => {
          this.cityData = resp.data.hits;
          if (resp.data.hits) {
            this.ccc = resp.data.hits[0].id
            http.get('bi/get_scenic_by_city',{city_id:this.ccc}).then(resp=>{
              this.senicData=resp.data.hits
              if (resp.data.hits) {
                this.provy = [];
                this.cityx = [];

              }
            })
          }
        })
        http.get('bi/get_all_city', {}).then(resp => {
          this.cityData1 = resp.data.hits;
          if (resp.data.hits) {
            this.ccti = resp.data.hits[0].name
          }
        })
        this.provx = [];
        this.cityy = [];
        this.eduData = [];
        this.ageData = [];
        this.carDatax = [];
        this.carDatay = [];
        this.mobilex = [];
        this.mobiley = [];

        if (this.ccc) {
          http.get('bi/get_scenic_by_city',{city_id:this.ccc}).then(resp=>{
            this.senicData=resp.data.hits
            this.ccc1='';
          })
        }
        http
          .get("bi/get_portrait_base_by_datespan", {startTime:http.gmt2str(this.cpicDate[0]),
            endTime:http.gmt2str(this.cpicDate[1]),city_id:this.ccc})
          .then(this.getPortraitData);
        http
          .get("bi/get_portrait_origin_by_datespan", {
            //date: http.gmt2str(this.cpicDate),
            startTime:http.gmt2str(this.cpicDate[0]),
            endTime:http.gmt2str(this.cpicDate[1]),
            type: "city",
            scenic: "",
            city_id: this.ccc
          })
          .then(resp => {
            for (var i = 0; i < resp.data.hits.length; i++) {
              this.cityx.push(resp.data.hits[i].name);
              this.cityy.push(parseInt(resp.data.hits[i].origin_percent * 10000)/100);
            }
            this.initCity();
          });
        http
          .get("bi/get_portrait_origin_by_datespan", {
            //date: this.cpicDate,
            startTime:http.gmt2str(this.cpicDate[0]),
            endTime:http.gmt2str(this.cpicDate[1]),
            type: "prov",
            scenic: "",
            city_id: this.ccc
          })
          .then(resp => {
            for (var i = 0; i < resp.data.hits.length; i++) {
              this.provx.push(resp.data.hits[i].name);
              this.provy.push(parseInt(resp.data.hits[i].origin_percent * 10000)/100);
            }
            this.initPro();
          });
      },
      initSex() {
        this.setPieChart({
          el: "#sex > div",
          title: '性别占比(%)',
          color: ["#1ea9ff", "#ff50fe"],
          data: this.sexData
        });
      },
      initIn() {
        this.setPieChart({
          el: "#in",
          title: '年龄占比(%)',
          data: this.ageData
        });
      },
      initOS() {
        this.setPieChart({
          el: "#os",
          title: '学历占比(%)',
          data: this.eduData
        });
      },
      initIOS() {
        this.setPieChart({
          el: "#ios",
          title: '消费能力(%)',
          data: this.inData
        });
      },
      getPortraitData(resp){
        this.sexData = resp.data.hits.gender;
        this.inData = resp.data.hits.consumpting.sort((v1, v2) => v2.value - v1.value);
        this.eduData = resp.data.hits.edu.sort((v1, v2) => v2.value - v1.value);
        this.osData = resp.data.hits.mobile;
        this.ageData = resp.data.hits.age.sort((v1, v2) => v2.value - v1.value);
        for (var i = 0; i < resp.data.hits.mobile.length; i++) {
          this.mobilex.push(resp.data.hits.mobile[i].name);
          this.mobiley.push(parseInt(resp.data.hits.mobile[i].value * 10000)/100);
        }
        for (var i = 0; i < resp.data.hits.car.length; i++) {
          this.carDatax.push(resp.data.hits.car[i].name);
          this.carDatay.push(parseInt(resp.data.hits.car[i].value * 10000)/100);
        }
        this.initSex();
        this.initOS();
        this.initIOS();
        this.initIn();
        this.initEdu();
        this.initAge();
      },
      setPieChart(oOptions){
        if(!oOptions.color){
          oOptions.color = ["#006EFF", "#29CC85", "#ffbb00", "#ff584c", "#9741d9", "#1fc0cc", "#7ff936", "#ff9c19", "#e63984", "#655ce6", "#47cc50", "#fb0b6"];
        }
        const oLabelStyle = {
          show: true,
          position: "center",
          lineHeight: 24,
          formatter: '{a|{b}}\n{b|{d}%}',
          backgroundColor: '#fff',
          width: 80,
          borderRadius: 10,
          rich: {
              a: {
                  color: '#878787',
                  fontSize: 12
              },
              b: {
                  color: '#000',
                  fontSize: 12
              }
          }
        };
        // 前三数据
        const initLen = 3
        const chartData = oOptions.data.slice(0, initLen)

        // 其他 (除前三数据的和)
        let extraValue = 0
        for (let i = initLen, len = oOptions.data.length; i < len; i++){
          if (oOptions.data[i]) {
            extraValue += oOptions.data[i].value
          }
        }
        if(extraValue) {
          chartData.push({
            name: '其他',
            value: extraValue
          })
        }

        this.$echarts.init(document.querySelector(oOptions.el)).setOption({
          color: oOptions.color,
          title: {
            text: oOptions.title,
            textStyle: {
              fontSize: 14
            },
            x: 20,
            y: 15
          },
          legend: {
            y: 340,
            x: "center",
            icon: "circle",
            data: chartData.map(item => item.name),
            itemWidth: 10,
            itemHeight: 12
          },
          series: [
            {
              type: "pie",
              radius: ["40%", "55%"],
              avoidLabelOverlap: true,
              labelLine:{
                show:true,
                length:5,
                length2:4
              },
              label: {
                normal: {
                  show: true,
                  position: 'outside',
                  formatter: '{b}\n{d}%',
                },
              },
              emphasis: {
                label: oLabelStyle
              },
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
              },
              data: chartData
            }
          ]
        });
      },
      initCash() {
        let aCashData = this.cashData.sort((v1, v2) => v2.value - v1.value);
        let cashChart = this.$echarts.init(document.getElementById("cash"));
        cashChart.setOption({
          color: ["#006EFF", "#29CC85", "#ffbb00", "#ff584c", "#9741d9", "#1fc0cc"],
          legend: {
            //orient: "vertical",
            //right: 40,
            //top: 120,
            bottom: 5,
            icon: "circle",
            data: aCashData.map(item => item.name)
          },
          series: [
            {
              name: "消费分析",
              type: "pie",
              radius: '70%',
              label: {
                normal: {
                  show: true,
                  position: 'inner',
                  formatter: '{b}\n{d}%',
                },
              },
              labelLine: false,
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
              },
              data: aCashData
            }
          ]
        });
        //触发tooltip显示事件
        setTimeout(() => {
          cashChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: 0
          });
        }, 1000);
      },
      initCash1() {
        let aCashData = this.cashData1.sort((v1, v2) => v2.value - v1.value);
        let cashChart = this.$echarts.init(document.getElementById("cash1"));
        cashChart.setOption({
          color: ["#006EFF", "#29CC85", "#ffbb00", "#ff584c", "#9741d9", "#1fc0cc"],
          legend: {
            //orient: "vertical",
            //right: 40,
            //top: 120,
            bottom: 5,
            icon: "circle",
            data: aCashData.map(item => item.name)
          },
          series: [
            {
              name: "消费分析",
              type: "pie",
              radius: '70%',
              label: {
                normal: {
                  show: true,
                  position: 'inner',
                  formatter: '{b}\n{d}%',
                },
              },
              labelLine: false,
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
              },
              data: aCashData
            }
          ]
        });
        //触发tooltip显示事件
        setTimeout(() => {
          cashChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: 0
          });
        }, 1000);
      },
      initAge() {
        let age = this.$echarts.init(document.getElementById("age"));
        age.setOption({
          title: {
            text: "有车情况",
            textStyle: {
              fontSize: 16
            },
            x: "0",
            y: 20
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            },
            backgroundColor: "#323232"
          },

          grid: {
            left: "1%",
            right: "10%",
            bottom: "4%",
            containLabel: true
          },
          xAxis: {
            type: "value",

            boundaryGap: [0, 0.1]
          },
          yAxis: {
            type: "category",
            data: this.carDatax
          },

          series: [
            {
              name: "占比",
              type: "bar",
              data: this.carDatay,
              barWidth: "30%",
              label: {
                normal: {
                  show: true,
                  position: "right",
                  formatter:'{c}%'
                }
              }
            }
          ],
          color: ["#006EFF"]
        });
      },
      initEdu() {
        let edu = this.$echarts.init(document.getElementById("edu"));
        edu.setOption({
          title: {
            text: "终端类型",
            textStyle: {
              fontSize: 16
            },
            x: "0",
            y: 20
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            },
            backgroundColor: "#323232"
          },

          grid: {
            left: "1%",
            right: "10%",
            bottom: "4%",
            containLabel: true
          },
          xAxis: {
            type: "value",

            boundaryGap: [0, 0.1]
          },
          yAxis: {
            type: "category",
            data: this.mobilex
          },

          series: [
            {
              name: "占比",
              type: "bar",
              data: this.mobiley,
              barWidth: "30%",
              label: {
                normal: {
                  show: true,
                  position: "right",
                  formatter:'{c}%'
                }
              }
            }
          ],
          color: ["#006EFF"]
        });
      },
      initCity() {
        let city = this.$echarts.init(document.getElementById("city"));
        city.setOption({
          title: {
            text: "来源城市",
            textStyle: {
              fontSize: 16
            },
            x: 32,
            y: 20
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            },
            backgroundColor: "#323232"
          },

          grid: {
            left: "5%",
            right: "5%",
            bottom: "20",
            containLabel: true
          },
          xAxis: {
            type: "category",
            data: this.cityx,
            axisLabel: {
              interval: 0,
              formatter:echartsHelper.labelFormatter
            },
          },
          yAxis: {
            type: "value",
            boundaryGap: [0, 0.1],
            splitLine: {
                lineStyle: {
                    color: '#e8e8e8'
                }
            }
          },

          series: [
            {
              name: "占比",
              type: "bar",
              data: this.cityy,
              barWidth: "30%",
              label: {
                normal: {
                  show: true,
                  position: "top",
                  formatter:'{c}%'
                }
              }
            }
          ],
          color: ["#006EFF"]
        });
      },
      initPro() {
        let pro = this.$echarts.init(document.getElementById("province"));
        pro.setOption({
          title: {
            text: "来源省份",
            textStyle: {
              fontSize: 16
            },
            x: 32,
            y: 20
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            },
            backgroundColor: "#323232"
          },

          grid: {
            left: "5%",
            right: "5%",
            bottom: "20",
            containLabel: true
          },
          xAxis: {
            type: "category",
            data: this.provx,
            axisLabel: {
              interval: 0,
              formatter:echartsHelper.labelFormatter
            },
          },
          yAxis: {
            type: "value",
            boundaryGap: [0, 0.1],
            splitLine: {
                lineStyle: {
                    color: '#e8e8e8'
                }
            }
          },

          series: [
            {
              name: "占比",
              type: "bar",
              data: this.provy,
              barWidth: "30%",
              label: {
                normal: {
                  show: true,
                  position: "top",
                  formatter:'{c}%'
                }
              }
            }
          ],
          color: ["#006EFF"]
        });
      },
      clicktab() {
        if (this.tabname==='in'){
          this.ioindex=1
        }
        if (this.tabname==='out'){
          this.ioindex=0
        }
        this.data2=[]
        http.get("bi/get_migrate_by_date", {
          date: http.gmt2str(this.hotlineDate),
          city_name: this.ccti,
          top: 10,
          io: this.tabname
        }).then(resp => {
          this.data1 = resp.data.hits;
          this.data3 = resp.data.hits;
          for (var i=0;i<resp.data.hits.length;i++){
            this.data2.push([{name:resp.data.hits[i].to},{name:resp.data.hits[i].from}])
          }
          for (var i=0;i<resp.data.hits.length;i++){
            this.data3[i].moveline=resp.data.hits[i].from+'-'+resp.data.hits[i].to
            this.data3[i].carx=parseInt(resp.data.hits[i].car*10000)/100+'%'
            this.data3[i].trainx=parseInt(resp.data.hits[i].train*10000)/100+'%'
            this.data3[i].planex=parseInt(resp.data.hits[i].plane*10000)/100+'%'
          }
        });
      },
      dateChange() {
        this.provx = [];
        this.provy = [];
        this.cityx = [];
        this.cityy = [];
        this.eduData = [];
        this.eduDatax = [];
        this.eduDatay = [];
        this.cashDataX = [];
        this.cashDataX2 = [];
        this.ageData = [];
        this.carDatax = [];
        this.carDatay = [];
        this.mobilex = [];
        this.mobiley = [];
        //var date = new Date(this.picDate).format("yyyy-MM-dd");
        //this.cpicDate = date;
        http
          .get("bi/get_portrait_base_by_datespan", {startTime:http.gmt2str(this.cpicDate[0]),
            endTime:http.gmt2str(this.cpicDate[1]),city_id:this.ccc})
          .then(this.getPortraitData);
        http
          .get("bi/get_portrait_origin_by_datespan", {
            //date: this.cpicDate,
            startTime:http.gmt2str(this.cpicDate[0]),
            endTime:http.gmt2str(this.cpicDate[1]),
            type: "city",
            scenic: "",
            city_id: this.ccc
          })
          .then(resp => {
            for (var i = 0; i < resp.data.hits.length; i++) {
              this.cityx.push(resp.data.hits[i].name);
              this.cityy.push(parseInt(resp.data.hits[i].origin_percent* 10000)/100);
            }
            this.initCity();
          });
        http
          .get("bi/get_portrait_origin_by_datespan", {
            //date: this.cpicDate,
            startTime:http.gmt2str(this.cpicDate[0]),
            endTime:http.gmt2str(this.cpicDate[1]),
            type: "prov",
            scenic: "",
            city_id: this.ccc
          })
          .then(resp => {
            for (var i = 0; i < resp.data.hits.length; i++) {
              this.provx.push(resp.data.hits[i].name);
              this.provy.push(parseInt(resp.data.hits[i].origin_percent * 10000)/100);
            }
            this.initPro();
          });
      },
      dateChange3(){
        http
          .get("bi/get_consume_by_date", {date: http.gmt2str(this.picDate3), city_id:this.ccc})
          .then(resp => {
            this.vagprice = http.qfw(resp.data.hits.avg_amount);
            this.middle = http.qfw(resp.data.hits.median_amount);
          });
      },
      dateChange4(){
        http
          .get("bi/get_consume_type_by_mon", {
            startTime: http.gmt2str(this.picDate4[0]),
            endTime: http.gmt2str(this.picDate4[1]),
            city_id:this.ccc
          })
          .then(resp => {
            //循环控制趟数
            this.cashData = resp.data.hits;
            this.initCash();
          });
      },
      _ccc1(){
        if (this.ccc1==''||this.ccc1=="undefined"||this.ccc1==null){
        }
        else {
          this.cccM=this.ccc1
          this.provx = [];
          this.provy = [];
          this.cityx = [];
          this.cityy = [];
          this.eduData = [];
          this.ageData = [];
          this.carDatax = [];
          this.carDatay = [];
          this.mobilex = [];
          this.mobiley = [];

          http
            .get("bi/get_portrait_base_by_datespan", {startTime:http.gmt2str(this.cpicDate[0]),
              endTime:http.gmt2str(this.cpicDate[1]),city_id:this.ccc,scenic:this.ccc1})
            .then(this.getPortraitData);
        }
      },
      _ccti(){
        this.data2=[]
        http.get("bi/get_migrate_by_date", {
          date: http.gmt2str(this.hotlineDate),
          city_name: this.ccti,
          top: 10,
          io: this.tabname
        }).then(resp => {
          this.data1 = resp.data.hits;
          this.data3 = resp.data.hits;
          for (var i=0;i<resp.data.hits.length;i++){
            this.data2.push([{name:resp.data.hits[i].to},{name:resp.data.hits[i].from}])
          }
          for (var i=0;i<resp.data.hits.length;i++){
            this.data3[i].moveline=resp.data.hits[i].from+'-'+resp.data.hits[i].to
            this.data3[i].carx=parseInt(resp.data.hits[i].car*10000)/100+'%'
            this.data3[i].trainx=parseInt(resp.data.hits[i].train*10000)/100+'%'
            this.data3[i].planex=parseInt(resp.data.hits[i].plane*10000)/100+'%'
          }
        });
      },
      _d11(){
        this.picDate4[0]=this.d22;
        this.picDate4[1]=this.d11;
        http
          .get("bi/get_consume_type_by_mon", {
            startTime: http.gmt2str(this.d11),
            endTime: http.gmt2str(this.d11),
            city_id:this.ccc
          })
          .then(resp => {
            this.cashData = resp.data.hits;
           /* var s = 0;
            var s1 = 0;
            //为什么 isSort = true，不能写在循环外面
            //因为 交换位置 isSort = false.  isSort的值永远是false 。我们要检测的是某一趟是否交换位置
            for (var i = 0; i < this.cashData.length - 1; i++) {
              var isSort = true; //假设排序ok
              //控制两两比较的次数       1--6      2--5   4 3 2 1
              for (var j = 0; j < this.cashData.length - 1 - i; j++) {
                //两两比较   从小到大排序

                //如果交换位置，说明没有排序好，如果不交换位置，说明排序好
                if (this.cashData[j].total < this.cashData[j + 1].total) {
                  isSort = false;  //没有排序好呢
                  //交换位置
                  var tmp = this.cashData[j];
                  this.cashData[j] = this.cashData[j + 1];
                  this.cashData[j + 1] = tmp;
                }

                s++; //记录内循环的次数
              }
              s1++;  //记录外循环的次数

              if(isSort) {
                //如果排序好了
                break;
              }
            }
            console.log('this.cashData：：',this.cashData)
            for (var i = 0; i < resp.data.hits.length; i++) {
              this.cashDataX.push(resp.data.hits[i].name);
            }*/
            this.initCash();
          });
      }
    },
    watch: {
      cashdate1:'cashmax1',
      cashdate2:'cashmax2',
      cashdate3:'',
      cashdate4:'',
      picDate3: "dateChange3",
      picDate4: "dateChange4",
      tabname: "clicktab",
      hotlineDate:'hotlinedp',
      ccti:'_ccti',
      d11:'_d11'
    }
  };
</script>
