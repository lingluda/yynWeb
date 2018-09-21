<template>
  <div>
    <div class="ti">
     <span >游客体验</span>
    </div>
    <card>
      <div style="margin-bottom: 20px">
        <span style="font-weight: bold;color: #000000">投诉分析</span>
        <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
        </Tooltip>
      </div>
      <RadioGroup type="button" size="small">
        <Radio label="all">全部</Radio>
        <Radio label="default">飞机</Radio>
      </RadioGroup>
      <DatePicker size="small" type="date" placeholder="自选时间" style="width: 120px"></DatePicker>
      <Select size="small" style="width: 120px">
        <Option>全省</Option>
      </Select>
      <div style="border: 1px solid #dcdee2;width: 100%;height: 150px;margin-bottom: 20px;margin-top: 20px">
        <Row :gutter="16" style="padding: 40px">
          <Col span="8" style="border-right: 1px solid #dcdee2">
            <Row>
              <Col span="6">
                <img src="../assets/imgs/exp1.png"/>
              </Col>
              <Col span="18">
                <div >
                  <span style="font-weight: bold;color: #000000">日新增投诉量</span>
                  <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
                  </Tooltip>
                </div>
                <span style="font-size: 28px">{{add}}</span><span>个(新关闭{{close}}，未关闭{{unclose}})</span>
              </Col>
            </Row>
          </Col>
          <Col span="8" style="border-right: 1px solid #dcdee2">
            <Row>
              <Col span="6">
                <img src="../assets/imgs/exp2.png"/>
              </Col>
              <Col span="18">
                <div>
                  <span style="font-weight: bold;color: #000000">日新增投诉量同比</span>
                  <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
                  </Tooltip>
                </div>
                <span style="font-size: 28px">{{link}}</span><span>(上升百分比)</span>
              </Col>
            </Row>
          </Col>
          <Col span="8">
            <Row>
              <Col span="6">
                <img src="../assets/imgs/exp3.png"/>
              </Col>
              <Col span="18">
                <div>
                  <span style="font-weight: bold;color: #000000">日新增投诉量环比</span>
                  <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
                  </Tooltip>
                </div>
                <span style="font-size: 28px">{{ratio}}</span><span>(下降百分比)</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Row :gutter="16" style="margin-bottom: 40px">
        <Col span="8">
          <div id="complain" style="height: 400px;border: 1px solid #dcdee2;"></div>
        </Col>
        <Col span="16">

        </Col>
      </Row>
    </card>
    <card>
      <div style="margin-bottom: 20px;">
        <span style="font-weight: bold;color: #000000">投诉时长分析</span>
        <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
        </Tooltip>
        <DatePicker size="small" v-model="picDate3" type="date" placeholder="Select date" style="width: 200px;float: right"></DatePicker>
      </div>
      <Row :gutter="16">
        <Col span="12" style="height: 200px;">
          <Row style="border:1px solid yellow;height: 100%;">
            <div style="height: 80px; padding: 20px;">
            <Col span="6" style="">
              <img src="../assets/imgs/exp4.png"/>
            </Col>
            <Col span="18">
              <div>
                <span style="font-weight: bold;color: #000000">日新增投诉量</span>
                <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
                </Tooltip>
              </div>
              <span style="font-size: 28px">{{add}}</span><span>个(新关闭{{close}}，未关闭{{unclose}})</span>
            </Col>

          </div>

            <div style="height: 80px; padding: 20px;">
              <div style="border-bottom: 1px solid red">
            <Col span="6" style="margin-top: 20px">
              <img src="../assets/imgs/exp4.png"/>
            </Col>
            <Col span="18" style="margin-top: 20px">
              <div>
                <span style="font-weight: bold;color: #000000">日新增投诉量</span>
                <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
                </Tooltip>
              </div>
              <span style="font-size: 28px">{{add}}</span><span>个(新关闭{{close}}，未关闭{{unclose}})</span>
            </Col>
              </div>
          </div>
          </Row>
        </Col>
        <Col span="12" style="height: 200px;">
          <div style="border:1px solid yellow;height: 100%"></div>
        </Col>
      </Row>
    </card>
    <card>
      <div style="margin-bottom: 20px;">
        <span style="font-weight: bold;color: #000000">热门路线TOP10</span>
        <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
        </Tooltip>
        <DatePicker size="small" v-model="picDate3" type="date" placeholder="Select date" style="width: 200px;float: right"></DatePicker>
      </div>
      <div id="process" style="height: 400px;border: 1px solid #dcdee2;"></div>
    </card>
    <card>
      <div style="margin-bottom: 20px;">
        <span style="font-weight: bold;color: #000000">热门路线TOP10</span>
        <Tooltip content="Hereisthe111111111111111prompt text" placement="right" max-width="200"><Icon size="19" style="margin-bottom: 1px" type="ios-help-circle-outline" />
        </Tooltip>
        <DatePicker size="small" v-model="picDate3" type="date" placeholder="Select date" style="width: 200px;float: right"></DatePicker>
      </div>
      <div id="myline" style="height: 400px;border: 1px solid #dcdee2;"></div>
    </card>
  </div>
</template>
<script>
  import http from '@/http.js'
  export default {
    data(){
      return{
        add:'',
        link:'',
        ratio:'',
        close:'',
        unclose:'',
        timeX:[],
        timeY:[],
        procX1:[],
        procX2:[],
        procX3:[],
        procY1:[],
        procY2:[],
      }
    },
    mounted(){
      this.init()
      this.initLine()
    },
    methods:{
      init(){
        http.get('bi/get_complaint_by_date',{date:'2018-08-03'}).then(resp=>{
          console.log('游客体验：：',resp.data.hits)
          this.add=resp.data.hits.total;
          this.close=resp.data.hits.closed;
          this.unclose=resp.data.hits.unclosed;
          this.link=resp.data.hits.link;
          this.ratio=resp.data.hits.ratio;
          this.timeX.push(parseInt(resp.data.hits.avg_proc));
          this.timeX.push(parseInt(resp.data.hits.max_proc));
          this.timeX.push(parseInt(resp.data.hits.min_proc));
          this.initComplain()
          for (var i=0;i<resp.data.hits.proc_stat.length;i++){
            this.procX1.push(parseInt(resp.data.hits.proc_stat[i].avg))
            this.procX2.push(parseInt(resp.data.hits.proc_stat[i].max))
            this.procX3.push(parseInt(resp.data.hits.proc_stat[i].min))
            this.procY1.push(resp.data.hits.proc_stat[i].name)
          }
          this.initProcess()
        })
      },
      initComplain(){
      let complain = this.$echarts.init(document.getElementById("complain"))
        complain.setOption({
          color: ['#006EFF','#29CC85','#ffbb00'],
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: ['平均时长', '最大时长', '最小时长']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: this.timeX,
            type: 'bar',
            barWidth:'50%'
          }]
        })
      },
      initProcess(){
        let process = this.$echarts.init(document.getElementById("process"))
        process.setOption({
          color: ['#006EFF','#29CC85','#ffbb00'],
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          legend:{
            icon:'circle',
            data:['平均时长', '最大时长', '最小时长']
          },
          xAxis: {
            type: 'category',
            data: this.procY1
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
            data: this.procX1,
              name:'平均时长',
            type: 'bar',
          },
            {
              data: this.procX2,
              name:'最大时长',
              type: 'bar',
            },
            {
              data: this.procX3,
              name:'最小时长',
              type: 'bar',
            },
          ]
        })
      },
      initLine(){
        let myline= this.$echarts.init(document.getElementById("myline"))
        myline.setOption({
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }]
        })
      }
    }
  }
</script>
