<template>
  <div>
    <div class="ti">
      <a style="margin-right: 10px;">
        <Icon type="md-arrow-back" size="16"/>
      </a> <span >旅游热度</span>
    </div>
    <Tabs value="hotmap" @on-click="pic">
      <TabPane label="首页" name="index">
      </TabPane >
      <TabPane label="热门目的地" name="destination">
      </TabPane>
      <TabPane label="热门景区" name="scenic">
      </TabPane>
      <TabPane label="景区客流热力发布" name="hotmap">
        <card>
          <div>
          <p class="tis">景区客流热力分布图</p>
          <Select style="width: 120px">
            <Option>城市</Option>
          </Select>
          <Select style="width: 120px">
            <Option>城市</Option>
          </Select>
          <DatePicker type="data" placeholder="自选时间" style="width: 120px"></DatePicker>
          <Select style="width: 120px">
            <Option>城市</Option>
          </Select>
          </div>
          <div id="hotmap" style="width: 100%;height: 400px;"></div>
        </card>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import http from '@/http.js'
  export default {
    data() {
      return {

      }
    },
    mounted() {
      this.initMap()
    },
    methods: {
      initMap(){
        let hotmap = this.$echarts.init(document.getElementById("hotmap"))
        http.get('/data/asset/data/hangzhou-tracks.json',{}).then(resp =>{
          console.log(resp)
        })
        hotmap.setOption({

        })
      },
      pic(val){
        this.$router.push(val)
      }
    }
  }
</script>

<style scoped>

</style>
