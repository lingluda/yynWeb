<template>
  <Layout>
    <Header style="background-color: #262626;padding: unset;height: 50px">
      <div style="height: 100%;line-height: 50px;display: flex;justify-content: space-between">
          <div class="hmenuitem">
            <img src="../../assets/imgs/timg.png" width="50" height="50" style="margin-left: 5px"/>
            <Divider type="vertical" style="height: 28px;background-color: #000;margin-right: 15px"></Divider>
            <span style="color: white;font-size: 16px">腾讯云旅游客情分析平台</span>
          </div>
        <div class="hmenuitem">
          <span class="indexright">
            <Icon type="md-person" size="21" color="#fff"/> 管理员,您好</span>
            <span class="indexright">
            <Icon type="ios-mail-outline" size="30" color="#fff"/> 3封未读</span>
           <!-- <span class="indexright" @click="selected('login')">
            <Icon type="md-log-out" color="#fff" size="21"/> </span>-->
          </div>
      </div>
    </Header>
    <Layout>
      <Sider hide-trigger style="display: flex;min-height: calc(100vh - 50px);background-color: #333333">
      <!--  <span class="sidebars" @click="selected('quota')"><a v-if="'quota'===selecteds">关键指标</a><span
                 v-if="'quota'!=selecteds">关键指标</span>
          <Icon type="ios-arrow-forward" size="20" style="margin-left: 60px;"/></span>-->
        <span class="sidebars1" @click="selected('index')"><a v-if="'index'===selecteds">旅游热度</a><a
          v-if="'index'!=selecteds" class="aaa">旅游热度</a>
        </span>

        <span class="sidebars1" @click="selected('coreFlow')"><a v-if="'coreFlow'===selecteds">核心景区</a><a
          v-if="'coreFlow'!=selecteds" class="aaa">核心景区</a>
        </span>
<!--

        <span class="sidebars1" @click="selected('destination')"><a v-if="'destination'===selecteds">核心指数</a><span
          v-if="'destination'!=selecteds">核心指数</span>
          <Icon type="ios-arrow-forward" size="20" style="margin-left: 60px;"/></span>
-->

        <span class="sidebars1" @click="selected('hotmap')"><a v-if="'hotmap'===selecteds">景区热力</a><a
          v-if="'hotmap'!=selecteds" class="aaa">景区热力</a>
        </span>

        <span class="sidebars1" @click="selected('touristimg')"><a v-if="'touristimg'===selecteds">游客画像</a><a
          v-if="'touristimg'!=selecteds" class="aaa">游客画像</a>
        </span>

       <!-- <span class="sidebars1" @click="selected('touristexp')"><a v-if="'touristexp'===selecteds">游客体验</a><span
          v-if="'touristexp'!=selecteds">游客体验</span>
          <Icon type="ios-arrow-forward" size="20" style="margin-left: 60px;"/></span>

        <span class="sidebars1" @click="selected('analysis')"><a v-if="'analysis'===selecteds">舆情分析</a><span
          v-if="'analysis'!=selecteds">舆情分析</span>
          <Icon type="ios-arrow-forward" size="20" style="margin-left: 60px;"/></span>
-->
        <span class="sidebars1" @click="selected('report')"><a v-if="'report'===selecteds">报表下载</a><a
          v-if="'report'!=selecteds" class="aaa">报表下载</a>
        </span>

     <!--   <span class="sidebars1" @click="selected('reqlog')"><a v-if="'reqlog'===selecteds">访问日志</a><span
          v-if="'reqlog'!=selecteds">访问日志</span>
          <Icon type="ios-arrow-forward" size="20" style="margin-left: 60px;"/></span>

        <span class="sidebars1" @click="selected('errlog')"><a v-if="'errlog'===selecteds">异常日志</a><span
          v-if="'errlog'!=selecteds">异常日志</span>
          <Icon type="ios-arrow-forward" size="20" style="margin-left: 60px;"/></span>
-->

      </Sider>
      <Content style="width:100%;height: calc(100vh-64px);">
        <router-view style="min-width: 980px;"></router-view>
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
    mounted() {
    },
    methods: {
      selected(val) {
        this.selecteds = val;
        this.$router.push(val);
      }
    }
  };
</script>
<style scoped>
  .hmenuitem {
    display: flex;align-items: center;height: 100%;
  }

  .indexright {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 20px;
    font-size: 14px;
    color: #BBBBBB;
  }
  a:active {
    color: #006EFF
  }
  .sidebars1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 40px;
    margin-top: 20px;
    font-size: 13px;
    color: #BBBBBB;
  }
  .aaa{
    color: #BBBBBB;
  }
  a:hover { color: #006EFF; }

</style>
