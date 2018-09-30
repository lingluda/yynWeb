<template>
  <!-- <div>
     <Row>
      <navbar ></navbar>
     </Row>
       <Row>
       <Col span="4">
       <sidebar/>
       </Col>
       <Col span="20">
       <div style="padding:20px">
       <router-view/>
       </div>
       </Col>
     </Row>
  </div> -->
  <Layout>
  <!--<Header style="background: rgb(38, 38, 38);padding: unset;height: 50px">
      <Row type="flex" justify="center" align="middle" style="height: 50px">
        <Col span="19">
        <div style="display: flex;">
          <img src="../../assets/logo.png" width="28" height="28" style="padding: 5px;margin-top: 18px;margin-left: 8px"/>
          <Divider type="vertical" style="height: 50px;background-color: #000000"></Divider>
          <span class="indextitle">一机游大数据趋势分析平台</span>
        </div>
        </Col>
        <Col span="5">
        <div style="display: flex;justify-content: flex-end">
          <span class="indexright">
            <Icon type="md-person" size="21" /> 管理员,您好</span>
          <span class="indexright">
            <Icon type="ios-mail-outline" size="30" /> 3封未读</span>
          <span class="indexright" @click="selected('login')">
            <Icon type="md-log-out" size="21" /> </span>
        </div>
        </Col>
      </Row>
    </Header>-->
    <Layout>
      <Sider hide-trigger style="display: flex;height: calc(100vh-50px);background-color: rgb(51, 51, 51)">
        <span class="sidebars" @click="selected('index')"><a v-if="'index'===selecteds">旅游热度</a><span v-if="'index'!=selecteds">旅游热度</span>
          <Icon type="ios-arrow-forward" size="20" style="margin-left: 60px;" /></span>
        <span class="sidebars1" @click="selected('touristimg')"><a v-if="'touristimg'===selecteds">游客画像</a><span v-if="'touristimg'!=selecteds">游客画像</span>
          <Icon type="ios-arrow-forward" size="20" style="margin-left: 60px;" /></span>
        <span class="sidebars1" @click="selected('touristexp')"><a v-if="'touristexp'===selecteds">游客体验</a><span v-if="'touristexp'!=selecteds">游客体验</span>
          <Icon type="ios-arrow-forward" size="20" style="margin-left: 60px;" /></span>
        <span class="sidebars1" @click="selected('analysis')"><a v-if="'analysis'===selecteds">舆情分析</a><span v-if="'analysis'!=selecteds">舆情分析</span>
          <Icon type="ios-arrow-forward" size="20" style="margin-left: 60px;" /></span>
        <span class="sidebars1" @click="selected('analysisform')"><a v-if="'analysisform'===selecteds">分析报表</a><span v-if="'analysisform'!=selecteds">分析报表</span>
          <Icon type="ios-arrow-forward" size="20" style="margin-left: 60px;" /></span>
        <span class="sidebars1" @click="selected('quota')"><a v-if="'quota'===selecteds">关键指标</a><span v-if="'quota'!=selecteds">关键指标</span>
          <Icon type="ios-arrow-forward" size="20" style="margin-left: 60px;" /></span>


      </Sider>-->
      <Content style="width:100%;height: 100vh;">
        <router-view></router-view>
      </Content>
      <!-- <Footer><router-link to="tobaccobase">aaqa</router-link></Footer> -->
    </Layout>
  </Layout>
</template>
<script>
import sidebar from "../base/sidebar.vue";
import navbar from "../base/navbar.vue";

export default {
  components: {
    sidebar,
    navbar
  },
  data() {
    return {
      selecteds: "index"
    };
  },
  mounted() {},
  methods: {
    selected(val) {
      this.selecteds = val;
      this.$router.push(val);
    }
  }
};
</script>
<style scoped>
.indextitle {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
}

.indexright {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;
  font-size: 14px;
  color: rgb(255, 255, 255);
}

.sidebars {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  margin-top: 40px;
  font-size: 14px;
  color: rgb(255, 255, 255);
}

.sidebars1 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  margin-top: 20px;
  font-size: 14px;
  color: rgb(255, 255, 255);
}
</style>
