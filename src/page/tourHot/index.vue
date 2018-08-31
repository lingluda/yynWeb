<template>

  <div style="height: 100vh">
    <ButtonGroup>
      <Button type="primary" style="width: 130px" @click="pic('index')">首页</Button>
      <Button style="width: 130px" @click="pic('destination')">热门目的地</Button>
      <Button style="width: 130px" @click="pic('scenic')">热门景区</Button>
      <Button style="width: 130px" @click="pic('hotmap')">景区客流热力分布</Button>
    </ButtonGroup>
    <Card class="btn">
    <Row>
      <Col span="12">
        <p class="ti">全省游客人数</p>
              <DatePicker type="date" placeholder="2018-08-31" style="width: 120px"></DatePicker>
              <Select style="width:80px;margin-left: 50%">
                <Option value="2">2</Option>
                <Option value="1">1</Option>
                <Option value="3">4</Option>
              </Select>
        <div class="ti">
          <p >今年总接待游客量:<span style="font-size: 48px;color: rgb(0, 118, 255);">1211212人</span></p>
        </div>
        <p style="margin-left: 30%">个市州所占比例</p>
        <div id="chart" class="content"></div>
      </Col>
      <Col span="1">
        <Divider type="vertical" style="height:90vh"/>
      </Col>
      <Col span="11">
        <div style="width: 400px;height: 200px;">
          <Row style="margin-top: 50px">
            <Col span="12">
              <p style="margin-left: 25%;margin-bottom: 10px">同比</p>
              <i-circle :percent="100" :stroke-width="1">
                <span class="demo-Circle-inner" style="font-size:24px">80%</span>
              </i-circle>
            </Col>
            <Col span="12">
              <p style="margin-left: 25%;margin-bottom: 10px">环比</p>
              <i-circle :percent="100" :stroke-width="1">
                <span class="demo-Circle-inner" style="font-size:24px">80%</span>
              </i-circle>
            </Col>
          </Row>
        </div>
        <p style="margin-left: 25%">日期区间客流趋势分析</p>
        <div id="line" class="content"></div>
      </Col>
    </Row>
   </Card>
  </div>

</template>
<script>
  export default {
    data() {
      return {};
    },
    mounted() {
      this.drawPie();
      this.drawLine();
    },
    methods: {
      pic(val) {
        this.$router.push(val)
      },
      drawPie() {
        let myPie = this.$echarts.init(document.getElementById("chart"));
        myPie.setOption({
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          /* legend: {
             orient: "vertical",
             x: "left",
             data: ["红河", "西双版纳", "怒江", "视频广告", "搜索引擎"]
           },*/
          series: [
            {
              name: "访问来源",
              type: "pie",
              //radius: ["50%", "70%"],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: true,
                  position: "inner"
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: "30",
                    fontWeight: "bold"
                  }
                }
              },
              labelLine: {
                normal: {
                  show: true
                }
              },
              data: [
                {value: 135, name: "怒江"},
                {value: 135, name: "西双版纳"},
                {value: 135, name: "曲靖"},
                {value: 135, name: "丽江"},
                {value: 135, name: "玉溪"},
                {value: 135, name: "昆明"},
                {value: 135, name: "普洱1"},
                {value: 135, name: "普洱2"},
                {value: 135, name: "普洱3"},
                {value: 135, name: "普洱4"},
                {value: 135, name: "普洱5"}
              ]
            }
          ]
        });
      },
      drawLine() {
        let myLine = this.$echarts.init(document.getElementById("line"));
        myLine.setOption({
          xAxis: {
            type: 'category',
            data: ['08-31', '08-31', '08-31', '08-31', '08-31', '08-31', '08-31']
          },
          yAxis: {
            name: '人数：万',
            type: 'value'
          },
          series: [{
            data: [1, 2, 4, 3, 1, 5, 9],
            type: 'line'
          }]
        })
      }
    }
  };
</script>
<style>
  .ti {
    margin-bottom: 20px;
    color: #101010;
    font-size: 14px;
    font-weight: bold;
  }
  .tis {
    text-align: center;
    margin-bottom: 20px;
    color: #101010;
    font-size: 14px;
    font-weight: bold;
  }
  .btn{
    margin-top: 20px;
  }
  .content{
    width:85%;
    height:400px;
  }

</style>


