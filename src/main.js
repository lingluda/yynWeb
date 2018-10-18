// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from  '../src/store/index.js'
import iView from 'iview';
import echarts from 'echarts'
import 'iview/dist/styles/iview.css';
import "babel-polyfill"
import macarons from 'echarts/theme/macarons'
import  '../src/assets/js/iframeResizer.contentWindow.js'
import http from "./http";
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(iView);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
//系统错误捕获
const errorHandler = (error, vm)=>{
  console.error('抛出全局异常');
  console.error(vm);
  console.error(error);
  http.get('write_js_log',{msg:error}).then(resp=>{
    console.log(resp)
  })
}
Vue.config.errorHandler = errorHandler;
Vue.prototype.$throw = (error)=> errorHandler(error,this);
