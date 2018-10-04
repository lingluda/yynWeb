import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    userLevel:'provincial' // 用户城市级别：省级:'provincial' ； 市级:'city'
  },
  mutations:{
      setUserLevel:function(state,param){
        state.userLevel = param.level
      }
  }
})
