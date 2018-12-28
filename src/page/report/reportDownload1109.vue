<template>
  <div style="background:#f2f2f2;">
    <div class="tits">
      <router-link to="report">报表下载{{download}}</router-link>
      <span style="font-size: 14px">> 预览</span></div>
    <card >
      <div style="text-align: center;font-size: 32px;font-weight: bold">数据报表</div>
      <div style="font-size: 28px">一、该报表时间段</div>
      <div>（{{d11[0]}}至{{d11[1]}}）</div>
      <div style="font-size: 28px">二、报表区域：{{FlowCityName}}</div>
      <div style="font-size: 28px">三、报表数据</div>
      <div style="font-size: 28px">3.1 旅游热度概况</div>

      <div>(1) 游客人数
        <div>{{FlowCityName}} 总接待游客量为 {{tourPeople.total}} 人次，与昨日环比 {{tourPeople.ratio}}，与上月同比 {{tourPeople.link}}。
        </div>
      </div>

      <div>(2) {{FlowCityName}}游客占比
        <div> {{FlowCityName}}接待游客占比量前5分别为：</div>
        <div>（排名第一 {{areaPeople[0].name}}）接待人数约 {{areaPeople[0].value}}人，占比总量 {{areaPeople[0].proportion}}%;</div>
        <div>（排名第二 {{areaPeople[1].name}}）接待人数约 {{areaPeople[1].value}}人，占比总量 {{areaPeople[1].proportion}}%;</div>
        <div>（排名第三 {{areaPeople[2].name}}）接待人数约 {{areaPeople[2].value}}人，占比总量 {{areaPeople[2].proportion}}%;</div>
        <div>（排名第四 {{areaPeople[3].name}}）接待人数约 {{areaPeople[3].value}}人，占比总量 {{areaPeople[3].proportion}}%;</div>
        <div>（排名第五 {{areaPeople[4].name}}）接待人数约 {{areaPeople[4].value}}人，占比总量 {{areaPeople[4].proportion}}%;</div>
        <div id="img_visitor_dist" style="width: 400px;height: 500px;">
          <repotMap :issend="issend" :wjj="wjj" :mapdata="this.areaPeople1"
                    style="width: 100%;height: 500px;"></repotMap>
        </div>
      </div>

      <div>(3) 游客趋势
        <div>
          {{trendPeople[0].date}} 日客流量最大，为 {{trendPeople[0].value}}人；{{trendPeople[trendPeople.length-1].date}} 日客流量最小，为
          {{trendPeople[trendPeople.length-1].value}}人。
        </div>
        <indexLine id="img_visitor_trend" :issend="issend" :wjj="wjj" :trendPeople1="trendPeople1"></indexLine>
      </div>


      <div style="font-size: 28px">3.2 核心景区排行</div>
      <div>
        <div>{{FlowCityName}} 累计游客人数排行前五分别为：</div>
        <div> {{coreSenic[0].name}}，接待游客人 {{coreSenic[0].cur}}人次；</div>
        <div> {{coreSenic[1].name}}，接待游客人 {{coreSenic[1].cur}}人次；</div>
        <div> {{coreSenic[2].name}}，接待游客人 {{coreSenic[2].cur}}人次；</div>
        <div> {{coreSenic[3].name}}，接待游客人 {{coreSenic[3].cur}}人次；</div>
        <div> {{coreSenic[4].name}}，接待游客人 {{coreSenic[4].cur}}人次；</div>
        <Table :columns="columns1" stripe size="small" :data="coreSenic"></Table>
      </div>
      <div style="font-size: 28px">3.3 景区指数排行</div>
      <div>
        <div>景区影响力指数最大的为 {{influence[0].name}} ，指数值为 {{influence[0].avg}}；</div>
        <div>景区美誉度指数最大的为 {{reputation[0].name}} ，指数值为 {{reputation[0].avg}}；</div>
        <div>景区传播力指数最大的为 {{transmission[0].name}}，指数值为 {{transmission[0].avg}}；</div>
       <Row id="img_idx_1">
         <Col :span="8">
           <tstable :rank="influence"></tstable>
         </Col>
         <Col :span="8">
           <tstable :rank="transmission"></tstable>
         </Col>
         <Col :span="8">
           <tstable :rank="reputation"></tstable>
         </Col>
       </Row>
        <!--<div v-if="rank.length!=0">
          <div id="img_idx_1">(1)影响力指数
            <tstable :rank="influence"></tstable>
          </div>
          <div id="img_idx_3">(2)美誉度指数

          </div>
          <div id="img_idx_2">(3)传播力指数

          </div>
        </div>-->
      </div>

      <div style="font-size: 28px">3.4 游客画像</div>

      <div>(1) 基本画像
        <div>{{FlowCityName}} 来访游客中:</div>
        <div> 男士 占比{{parseInt(imggender[0].value*10000)/100}}%，女士 占比{{parseInt(imggender[1].value*10000)/100}}%；</div>
        <div> {{imgage[0].name}}年龄段的游客最多，占比{{parseInt(imgage[0].value*10000)/100}}%；</div>
        <div> {{imgedu[0].name}}学历 的游客最多，占比{{parseInt(imgedu[0].value*10000)/100}}%；</div>
        <div>消费能力为 {{imgcash[0].name}} 的游客最多，占比{{parseInt(imgcash[0].value*10000)/100}}%；</div>
        <div>有{{parseInt(imgcar[0].value*10000)/100}}%的游客 有车，{{parseInt(imgcar[1].value*10000)/100}}%的游客 无车；</div>
        <div>
          {{parseInt(imgmobile[1].value*10000)/100}}%的游客手机终端类型为IOS，{{parseInt(imgmobile[0].value*10000)/100}}%的游客手机终端类型为Android；
        </div>
        <div>{{cfcity[0].name}}来源游客量最大，占比总游客的{{parseInt(cfcity[0].origin_percent*10000)/100}}%；</div>
        <div>{{cfprov[0].name}}来源游客量最大，占比总游客的{{parseInt(cfprov[0].origin_percent*10000)/100}}%。</div>
        <Row id="img_port_base_1">
          <Col :span="6">
            <ImgBar :issend="issend" :wjj="wjj" :main="bar1" :sx="imggender" :t="t1"></ImgBar>
          </Col>
          <Col :span="6" id="img_port_base_2">
            <ImgBar :issend="issend" :wjj="wjj" :main="bar2" :sx="imgage" :t="t2"></ImgBar>
          </Col>
          <Col :span="6" id="img_port_base_3">
            <ImgBar :issend="issend" :wjj="wjj" :main="bar3" :sx="imgedu" :t="t3"></ImgBar>
          </Col>
          <Col :span="6" id="img_port_base_4">
            <ImgBar :issend="issend" :wjj="wjj" :main="bar4" :sx="imgcash" :t="t4"></ImgBar>
          </Col>
        </Row>
      </div>

      <div>(2) 人口迁徙
        <div>由 {{inMove[0].from}} 迁入 {{inMove[0].to}} 的游客量最多， {{inMove[0].line}} 热度最大，热度值为
          {{inMove[0].score}}，游客中飞机出游的占比
          {{parseInt(inMove[0].plane*10000)/100}}%，火车出游的占比{{parseInt(inMove[0].train*10000)/100}}%，汽车出游的占比{{parseInt(inMove[0].car*10000)/100}}%；
        </div>
        <div> 由 {{outMove[0].from}} 迁出 {{outMove[0].to}} 的游客量最多， {{outMove[0].line}}
          热度最大，热度值为{{outMove[0].score}}，游客中飞机出游的占比{{parseInt(outMove[0].plane*10000)/100}}%，火车出游的占比{{parseInt(outMove[0].train*10000)/100}}%，汽车出游的占比{{parseInt(outMove[0].car*10000)/100}}%。
        </div>
        <div>1.迁入</div>
        <Table stripe size="small" :columns="intable" :data="inMove"></Table>
        <div>2.迁出</div>
        <Table stripe size="small" :columns="outtable" :data="outMove"></Table>
      </div>

      <div>(3) 游云南App用户消费
        <div>
          游云南App用户平均消费金额为{{avg.avg_amount}}元，
        </div>
        <div v-if="rank.length!=0">用户在{{rank[0].name}}消费金额最高，为{{rank[0].avg}}元；</div>
        <div>
          用户消费中，景区门票消费占比{{parseInt(cate[1].value*10000)/100}}%，酒店消费占比{{parseInt(cate[2].value*10000)/100}}%，机票消费占比{{parseInt(cate[0].value*10000)/100}}%。
        </div>
        <Row id="img_port_yjy_1">
            <Col :span="6">人均消费
              <div style="margin-top: 40px"><item :useravg="useravg" :avg="avg.avg_amount" :unit="avgunit"></item></div>
            </Col>
          <Col :span="10" >
            游客消费地排行
            <tstable1 v-if="rankk.length!=0" :rank="rankk" style="margin-top: 40px"></tstable1>
          </Col>
          <Col :span="8">
            <exp_pie :id="pieid1" :pic="pic1" :wjj="wjj" :issend="issend" :cate="cate"></exp_pie>
          </Col>
        </Row>
      </div>

      <div>(3) 游客线下消费
        <div>
          游云南App用户平均消费金额为{{avgs.avg_amount}}元，
        </div>
        <div v-if="ranks.length!=0">用户在{{ranks[0].name}}消费金额最高，为{{ranks[0].avg}}元；</div>
        <div v-for="(i,index) in cates" :key="index">用户消费中，
          {{i.name}}消费占比{{parseInt(i.value*10000)/100}}%，
        </div>
        <Row id="img_port_off_1">
           <Col :span="6">人均消费
              <div style="margin-top: 40px"><item :useravg="useravg" :avg="avg.avg_amount" :unit="avgunit"></item></div>
            </Col>
          <Col :span="10" >
            游客消费地排行
            <tstable1 v-if="rankks.length!=0" :rank="rankks" style="margin-top: 40px"></tstable1>
          </Col>
          <Col :span="8">
            <exp_pie :id="pieid2" :pic="pic2" :wjj="wjj" :issend="issend" :cate="cates"></exp_pie>
          </Col>
        </Row>
      </div>

      <div style="font-size: 28px">3.5 游客体验</div>
      <div>(1) 累计新增投诉量
        <div>累计新增投诉量为{{ctotal}}件，与上月同比{{clink}} % 。与昨日环比{{cratio}} %</div>
      </div>
      <div>(2) 投诉时长分析
        <div> {{d11[0]}}至{{d11[1]}}
          平台累计已处理投诉量{{closed}}件，累计处理中投诉量{{unclosed}}件；已关闭投诉中，平均处理时长为{{parseInt(cavg[0]*100)/100}}小时，最大处理时长为{{parseInt(cavg[1]*100)/100}}小时，最小处理时长为{{parseInt(cavg[2]*100)/100}}小时。
        </div>

        <Row id="img_comp_pic_1">
            <Col :span="6">
              <item :useravg="cTitle1" :avg="closed" :unit="cunit"></item>
              <item :useravg="cTitle2" :avg="unclosed" :unit="cunit"></item>
            </Col>
          <Col :span="18">
            <!--<lengthBar :cavg="cavg" :issend="issend" :wjj="wjj"></lengthBar>-->
            <div id="lengthbs" style="width: 100%;height: 200px;"></div>
          </Col>
        </Row>
      </div>
      <div>(3) 投诉对象及处理情况分析
        <div>
          游客发起投诉后等待处理的平均时长为{{parseInt(ccc[0].avg*100)/100}}小时，最大时长为{{parseInt(ccc[0].max*100)/100}}小时，最小时长为{{parseInt(ccc[0].min*100)/100}}小时；
        </div>
        <div>平台投诉处理的平均时长为{{parseInt(ccc[1].avg*100)/100}}小时，最大时长为{{parseInt(ccc[1].max*100)/100}}
          小时，最小时长为{{parseInt(ccc[1].min*100)/100}} 小时；
        </div>
        <div>游客投诉申诉后等待处理的平均时长为{{parseInt(ccc[2].avg*100)/100}}小时，最大时长为{{parseInt(ccc[2].max*100)/100}}
          小时，最小时长为{{parseInt(ccc[2].min*100)/100}} 小时。
        </div>
        <exp id="img_comp_pic_2" :ccc="ccc" :issend="issend" :wjj="wjj"></exp>
      </div>
      <Button @click="send" type="primary" style="float: right;margin-top: 12px" :disabled='issends==1'>下载</Button>

    </card>
  </div>
</template>

<script>
  import http from "../../http";
  import repotMap from './repotMap'
  import indexLine from './IndexLine'
  import item from './item'
  import ImgBar from './ImgBar'
  import exp from './exp'
  import lengthBar from './lengthBar'
  import exp_pie from './exp_pie'
  import tstable from './tstable'
  import tstable1 from './tstable1'
  import TableRenderHeader from "iview/src/components/table/header";
  import html2canvas from 'html2canvas'

  export default {
    name: "reportDownload",
    components: {
      TableRenderHeader,
      repotMap,
      indexLine,
      ImgBar,
      item,
      exp,
      lengthBar,
      exp_pie,
      tstable,
      tstable1,
    },
    data() {
      return {
        htmldata:'',
        intable: [
          {
            title: '线路',
            key: 'line',
          },
          {
            title: '热度',
            key: 'score',
          },
          {
            title: '汽车',
            key: 'car',
            render: (h, p) => {
              return h('div', parseInt(p.row.car * 10000) / 100 + '%')
            }
          },
          {
            title: '火车',
            key: 'train',
            render: (h, p) => {
              return h('div', parseInt(p.row.train * 10000) / 100 + '%')
            }
          },
          {
            title: '飞机',
            key: 'plane',
            render: (h, p) => {
              return h('div', parseInt(p.row.plane * 10000) / 100 + '%')
            }
          }
        ],
        outtable: [
          {
            title: '线路',
            key: 'line',
          },
          {
            title: '热度',
            key: 'score',
          },
          {
            title: '汽车',
            key: 'car',
            render: (h, p) => {
              return h('div', parseInt(p.row.car * 10000) / 100 + '%')
            }
          },
          {
            title: '火车',
            key: 'train',
            render: (h, p) => {
              return h('div', parseInt(p.row.train * 10000) / 100 + '%')
            }
          },
          {
            title: '飞机',
            key: 'plane',
            render: (h, p) => {
              return h('div', parseInt(p.row.plane * 10000) / 100 + '%')
            }
          }
        ],
        d11: [this.$route.query.s1, this.$route.query.s2],
        c: this.$route.query.c,
        c1: this.$route.query.c1,
        c2: this.$route.query.c2,
        c3: this.$route.query.c3,
        c4: this.$route.query.c4,
        download: this.$route.query.download,
        FlowCity: this.$route.query.city,
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
                h('span', {
                  style: {
                    position: 'absolute',
                    marginTop: '9px',
                    marginLeft: '5px'
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
            title: '累计接待量',
            key: 'cur'
          },
          {
            title: '最优承载量',
            key: 'fit_capacity'
          },
          {
            title: '最大承载量',
            key: 'max_capacity',
            render: (h, params) => {
              if (params.row.max_capacity == 0) {
                return h('span', '暂无历史数据')
              } else {
                return h('div', [
                  h('span', params.row.max_capacity)
                ])
              }
            }
          },
          {
            title: '营业时间',
            key: 'busi_time_alias',
            width: 135,
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
        cfcity: [],
        cfprov: [],
        //人口迁徙
        inMove: [],
        outMove: [],
        //游云南App用户消费
        pieid1: 'pie1',
        pic1: 'img_port_yjy_2',
        avg: '',
        cate: [],
        rank: [],
        rankk: [],
        //线下消费
        pieid2: 'pie2',
        pic2: 'img_port_off_2',
        avgs: '',
        cates: [],
        ranks: [],
        rankks: [],
        //游客体验-累计新增投诉量
        clink: '',
        cratio: '',
        ctotal: '',
        cavg: [],
        cmax: '',
        cmin: '',
        ccc: [],
        closed: '',
        unclosed: '',
        cTitle1: '',
        cTitle2: '',
        cunit: '件',
        //区域游客占比
        //投诉时长分析
        bar1: 'base_1',
        bar2: 'base_2',
        bar3: 'base_3',
        bar4: 'base_4',
        t1: '性别占比（%）',
        t2: '年龄占比（%）',
        t3: '学历占比（%）',
        t4: '消费能力（%）',
        useravg: '用户平均消费金额',
        avgunit: '元',
        issend: 0,
        issends: 0,
        wjj: http.gmt2strmst(new Date()),
        div1: 'img_idx_1',
        div2: 'img_idx_2',
        div3: 'img_idx_3',
        fff: [],
      }
    },
    mounted() {
      this.init()
      if (this.download == 1) {
        console.log('this.download',this.fff.length >= 8)
        setTimeout(() => {
          this.send()
        }, 1500);
        this.download = 0
      }
    },
    methods: {
      send() {
        this.fff=[]
        this.getdiv('img_idx_1', 'img_idx_1')
       /* this.getdiv('img_idx_2', 'img_idx_2')
        this.getdiv('img_idx_3', 'img_idx_3')*/
        this.getdiv('img_visitor_dist', 'img_visitor_dist')
        this.getdiv('img_visitor_trend', 'img_visitor_trend')
        this.getdiv('img_port_base_1', 'img_port_base_1')
   /*     this.getdiv('img_port_base_2', 'img_port_base_2')
        this.getdiv('img_port_base_3', 'img_port_base_3')
        this.getdiv('img_port_base_4', 'img_port_base_4')*/
        this.getdiv('img_port_yjy_1', 'img_port_yjy_1')
        // this.getdiv('img_port_yjy_2', 'img_port_yjy_2')
        this.getdiv('img_port_off_1', 'img_port_off_1')
        // this.getdiv('img_port_off_2', 'img_port_off_2')
        this.getdiv('img_comp_pic_1', 'img_comp_pic_1')
        this.getdiv('img_comp_pic_2', 'img_comp_pic_2')
      },
      uploadpic() {
        let opts = []
        if (this.c.length > 0) {
          opts.push(100)
        }
        if (this.c1.length > 0) {
          opts.push(200)
        }
        if (this.c2.length > 0) {
          opts.push(300)
        }
        if (this.c3.length > 0) {
          opts.push(400)
        }
        if (this.c4.length > 0) {
          opts.push(500)
        }
        opts.push(this.c)
        opts.push(this.c1)
        opts.push(this.c3)
        opts.push(this.c4)
        let tt = opts.join(',')
        window.open('https://tglpt.ybsjyyn.com/as/bi/downrep?startTime=' + http.gmt2strm(this.d11[0]) + '&endtime=' + http.gmt2strm(this.d11[1]) + '&folder=' + this.wjj + '&opts=' + tt)
        return 'success'
      },
      init() {
        http.post('bi/get_cityname_by_id', {city_id: this.FlowCity}).then(resp => {
          if (resp.data.hits != '') {
            this.FlowCityName = resp.data.hits
          }

          //人口迁徙
          http.post('bi/get_migrate_by_date', {
            date: http.gmt2strm(this.d11[0]),
            city_name: this.FlowCityName,
            top: 10,
            io: 'in',
          }).then(resp => {
            if (resp.data.hits.length != 0) {
              this.inMove = resp.data.hits.sort((v1, v2) => v2.n - v1.n)
              for (var i = 0; this.inMove.length; i++) {
                this.inMove[i].line = this.inMove[i].from + '-' + this.inMove[i].to
              }
            }

          })

          //人口迁徙
          http.post('bi/get_migrate_by_date', {
            date: http.gmt2strm(this.d11[0]),
            city_name: this.FlowCityName,
            top: 10,
            io: 'out',
          }).then(resp => {
            if (resp.data.hits.length != 0) {
              this.outMove = resp.data.hits.sort((v1, v2) => v2.n - v1.n)
              for (var i = 0; this.outMove.length; i++) {
                this.outMove[i].line = this.outMove[i].from + '-' + this.outMove[i].to
              }
            }
          })
        })


        //游客人数
        http.post('bi/get_tourism_qty_by_datespan', {
          startTime: http.gmt2strm(this.d11[0]),
          endTime: http.gmt2strm(this.d11[1]),
          city_id: this.FlowCity
        }).then(resp => {
          this.tourPeople = resp.data.hits
        })

        //区域游客占比
        http.post('bi/get_tourism_dist_by_datespan', {
          startTime: http.gmt2strm(this.d11[0]),
          endTime: http.gmt2strm(this.d11[1]),
          city_id: this.FlowCity
        }).then(resp => {
          this.areaPeople = resp.data.hits
          this.areaPeople1 = resp.data.hits.map(item => {
            return {name: item.name, value: item.proportion}
          })
        })

        //游客趋势
        http.post('bi/get_tourism_trend_by_timespan', {
          startTime: http.gmt2strm(this.d11[0]),
          endTime: http.gmt2strm(this.d11[1]),
          city_id: this.FlowCity
        }).then(resp => {
          //console.log('asdasdasdasdasdas',resp.data.hits.list)
          this.trendPeople1 = resp.data.hits.list.sort((v1, v2) => v2.timestamp - v1.timestamp);

          this.trendPeople = resp.data.hits.list.sort((v1, v2) => v2.value - v1.value);
        })

        //核心景区排行
        http.post('bi/get_key_scenic_tourist_datespan_withdist', {
          startTime: http.gmt2strm(this.d11[0]),
          endTime: http.gmt2strm(this.d11[1]),
          city_id: this.FlowCity
        }).then(resp => {
          this.coreSenic = resp.data.hits
        })

        //景区指数排行
        http.post('bi/get_scenic_influence_datespan', {
          startTime: http.gmt2strm(this.d11[0]),
          endTime: http.gmt2strm(this.d11[1]),
          top: 5
        }).then(resp => {
          this.influence = resp.data.hits.map(i => {
            return {name: i.name, pers: i.score / 10, avg: i.score + '分'}
          })
        })

        http.post('bi/get_scenic_transmission_datespan', {
          startTime: http.gmt2strm(this.d11[0]),
          endTime: http.gmt2strm(this.d11[1]),
          top: 5
        }).then(resp => {
          this.transmission = resp.data.hits.map(i => {
            return {name: i.name, pers: i.score / 10, avg: i.score + '分'}
          })
        })
        http.post('bi/get_scenic_reputation_datespan', {
          startTime: http.gmt2strm(this.d11[0]),
          endTime: http.gmt2strm(this.d11[1]),
          top: 5
        }).then(resp => {
          this.reputation = resp.data.hits.map(i => {
            return {name: i.name, pers: i.score / 10, avg: i.score + '分'}
          })
        })
        //基本画像
        http.post('bi/get_portrait_base_by_datespan', {
          startTime: http.gmt2strm(this.d11[0]),
          endTime: http.gmt2strm(this.d11[1]),
          city_id: this.FlowCity
        }).then(resp => {
          // console.log(resp.data.hits.age);
          this.imggender = resp.data.hits.gender
          this.imgage = resp.data.hits.age.sort((v1, v2) => v2.value - v1.value)
          this.imgage = this.getTop3(this.imgage);
          this.imgcar = resp.data.hits.car
          this.imgcash = resp.data.hits.consumpting.sort((v1, v2) => v2.value - v1.value)
          this.imgcash = this.getTop3(this.imgcash);
          this.imgedu = resp.data.hits.edu.sort((v1, v2) => v2.value - v1.value)
          this.imgedu = this.getTop3(this.imgedu);
          this.imgmobile = resp.data.hits.mobile
        })
        http.post('bi/get_portrait_origin_by_datespan', {
          startTime: http.gmt2strm(this.d11[0]),
          endTime: http.gmt2strm(this.d11[1]),
          type: 'city',
        }).then(resp => {
          this.cfcity = resp.data.hits.sort((v1, v2) => v2.origin_percent - v1.origin_percent)
        })
        http.post('bi/get_portrait_origin_by_datespan', {
          startTime: http.gmt2strm(this.d11[0]),
          endTime: http.gmt2strm(this.d11[1]),
          type: 'prov',
        }).then(resp => {
          this.cfprov = resp.data.hits.sort((v1, v2) => v2.origin_percent - v1.origin_percent)
        })
        /*  http.post('bi/get_portrait_origin_by_datespan', {
            startTime: http.gmt2strm(this.d11[0]),
            endTime: http.gmt2strm(this.d11[1]),
            type:prov,
            city_id: this.FlowCity
          }).then(resp => {
            console.log(resp)

          })*/

        //人口迁徙


        //游云南App用户消费
        http.post('bi/get_consume_by_datespan', {
          startTime: http.gmt2strm(this.d11[0]),
          endTime: http.gmt2strm(this.d11[1]),
          //city_id: this.FlowCity
        }).then(resp => {
          this.avg = resp.data.hits.avg
          this.cate = resp.data.hits.cate
          this.rank = resp.data.hits.rank
          if (this.rank.length != 0) {
            this.rank = resp.data.hits.rank.sort((v1, v2) => v2.avg - v1.avg)
            let tt = 0
            for (var i = 0; i < this.rank.length; i++) {
              tt += this.rank[i].avg
            }
            this.rankk = this.rank.map(item => {
              return {name: item.name, total: tt, pers: item.avg / tt * 3, avg: '人均' + item.avg + '元'}
            })
          }
        })


        //线下消费
        http.post('bi/get_offline_consume_by_datespan', {
          startTime: http.gmt2strm(this.d11[0]),
          endTime: http.gmt2strm(this.d11[1]),
          //city_id: this.FlowCity
        }).then(resp => {
          this.avgs = resp.data.hits.avg
          this.cates = resp.data.hits.cate
          /*    if (resp.data.hits.cate.length!=0){
              for (var i=0;i<resp.data.hits.cate.length;i++){
                if (resp.data.hits.cate[i].value!=0){
                  this.cates.push(resp.data.hits.cate[i])
                }
              }
              }*/
          this.ranks = resp.data.hits.rank
          if (this.ranks.length != 0) {
            this.ranks = resp.data.hits.rank.sort((v1, v2) => v2.avg - v1.avg)
            let tt = 0
            for (var i = 0; i < this.ranks.length; i++) {
              tt += this.ranks[i].avg
            }
            this.rankks = this.ranks.map(item => {
              return {name: item.name, total: tt, pers: item.avg / tt * 3, avg: '人均' + item.avg + '元'}
            })
          }
        })


        //游客体验-累计新增投诉量
        http.post('bi/get_complaint_by_mon', {
          date: http.gmt2strm(this.d11[0]).substring(0, 7),
          city_id: this.FlowCity
        }).then(resp => {
          this.ctotal = resp.data.hits.total
          this.clink = resp.data.hits.link
          this.cratio = resp.data.hits.ratio
          setTimeout(() => {
            this.cavg=[]
            this.cavg.push(resp.data.hits.avg_proc.toFixed(2))
            this.cavg.push(resp.data.hits.max_proc.toFixed(2))
            this.cavg.push(resp.data.hits.min_proc.toFixed(2))
            let Fbar = this.$echarts.init(document.getElementById('lengthbs'))
            Fbar.setOption({
              animation: false,
              title: {
                text: '已关闭投诉处理时长',
                textStyle:{
                  fontSize: 12
                }
              },

              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow'
                }
              },
              color:["#006EFF", "#29CC85", "#ffbb00", "#ff584c"],
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
              },
              yAxis: {
                name:'单位(小时)',
                type: 'category',
                data: ['平均时长', '最大时长', '最小时长'],
              },
              series: [
                {
                  type: 'bar',
                  //data: [6,85,0],
                  //data: [parseInt(this.cavg[2]*100)/100,parseInt(this.cavg[1]*100)/100,parseInt(this.cavg[0]*100)/100],
                  data: this.cavg,
                  label: {
                    normal: {
                      show: true,
                      position: 'right',
                      textStyle:{
                        color:'#000'
                      }
                    }
                  },
                }
              ]
            })
          }, 1000)
          this.cmax = resp.data.hits.max_proc
          this.cmin = resp.data.hits.min_proc
          this.ccc = resp.data.hits.proc_stat
          console.log('this.ccc.map(i=>{return i.max})', this.ccc.map(i => {
            return i.max
          }))
          console.log('this.ccc.map(i=>{return i.max})', this.ccc.map(i => {
            return i.avg
          }))
          console.log('this.ccc.map(i=>{return i.max})', this.ccc.map(i => {
            return i.min
          }))
          console.log('this.ccc.map(i=>{return i.max})', this.ccc.map(i => {
            return i.name
          }))
          this.closed = resp.data.hits.closed.toString()
          this.unclosed = resp.data.hits.unclosed.toString()
          this.cTitle1 = http.getToday().substring(5, 7) + '月累计已处理投诉量'
          this.cTitle2 = http.getToday().substring(5, 7) + '月累计处理中投诉量'

        })
        http.post('bi/get_complaint_trend_by_timespan', {
          startTime: http.gmt2strm(this.d11[0]),
          endTime: http.gmt2strm(this.d11[1]),
          city_id: this.FlowCity
        }).then(resp => {

        })


        //投诉时长分析
        /* http.post('bi/get_key_scenic_tourist_datespan_withdist', {
          startTime: http.gmt2strm(this.d11[0]),
          endTime: http.gmt2strm(this.d11[1]),
          city_id: this.FlowCity
        }).then(resp => {
          console.log(resp)
        })*/

        //投诉对象及处理情况分析
        /*  http.post('bi/get_key_scenic_tourist_datespan_withdist', {
            startTime: http.gmt2strm(this.d11[0]),
            endTime: http.gmt2strm(this.d11[1]),
            city_id: this.FlowCity
          }).then(resp => {
            console.log(resp)
          })
  */
      },
      getTop3(allDate) {
        const initLen = 3
        const chartData = allDate.slice(0, initLen)
        let extraValue = 0
        for (let i = initLen, len = allDate.length; i < len; i++) {
          if (allDate[i]) {
            extraValue += allDate[i].value
          }
        }
        if (extraValue) {
          chartData.push({
            name: '其他',
            value: extraValue
          })
        }
        return chartData;
      },
      getdiv(f, n) {
        let s = this
        html2canvas(document.getElementById(f.toString())).then(canvas => {
          $.ajax({
            type: "POST",
            url: "bi/uploadimg", //?folder=" + folder + "&imgtype=" + imgtype,
            data: {
              "folder": s.wjj,
              "imgtype": n,
              "data": canvas.toDataURL("image/png")
            },
            cache: false,
            async: false,
            dataType: "text",
            success: function (data) {
              console.log('asdadsfa', JSON.parse(data))
              s.fff.push(JSON.parse(data).errcode)
              console.log(s.fff)
            },
          });
          /*    var data= {
                  "folder": this.wjj,
                    "imgtype": n,
                    "data": canvas.toDataURL("image/png")
                }
                console.log(111111)
             http.posts('bi/uploadimg',data).then(resp=>{
               console.log(111111)
               console.log(resp)
               console.log(111111)

             })*/
        })
        return s.fff
      },
      sss() {
        let opts = this.c.concat(this.c1).concat(this.c2).concat(this.c3).concat(this.c4)
        console.log()
        console.log('this.fff', this.fff.length)
        console.log('this.opt', opts)
        console.log('this.optl', opts.length)
        if (this.fff.length >= 8) {
          this.uploadpic()

        }
      }
    },
    watch: {
      fff: 'sss'
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

  .panel div {
    line-height: 30px;
    margin: 10px;
  }
</style>
