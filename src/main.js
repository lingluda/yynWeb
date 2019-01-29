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
import  '../src/assets/js/html2canvas.min.js'
import http from "./http";
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(iView);
/* eslint-disable no-new */
Vue.prototype.buszz = new Vue()
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
// 封装echarts
import myEcharts from "./libs/echarts/index.js"
Vue.prototype.echart = myEcharts;
//系统错误捕获
const errorHandler = (error, vm, info)=>{
  console.error('抛出全局异常');
  console.error(vm);
  console.error(error);
  console.error(info);
  let {
    message, // 异常信息
    name, // 异常名称
    script,  // 异常脚本url
    line,  // 异常行号
    column,  // 异常列号
    stack  // 异常堆栈信息
  } = error;
  console.log('errorerrorerrorerror:::::',error)
  console.log(window.performance)
  http.get('bi/write_js_log',{msg:error}).then(resp=>{
    console.log(window.performance)
  })
}
Vue.config.errorHandler = errorHandler;
Vue.prototype.$throw = (error)=> errorHandler(error,this);

/*window.onerror = function (msg, url, lineNo, columnNo, error) {
  var string = msg.toLowerCase();
  var substring = "script error";
  if (string.indexOf(substring) > -1){
    alert('Script Error: See Browser Console for Detail');
  } else {
    var message = [
      'Message: ' + msg,
      'URL: ' + url,
      'Line: ' + lineNo,
      'Column: ' + columnNo,
      'Error object: ' + JSON.stringify(error)
    ].join(' - ');

    alert(message);
  }

  return false;
};*/
