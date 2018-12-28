import axios from 'axios'
import { Message } from 'iview'
import iView from 'iview'
axios.interceptors.response.use(
  response => {
    if (response.status === 200 && response.data.errcode !== 0) {
      const code = response.data.errcode
      const msg = response.data.errmsg || '接口返回错误'
      // Message.error(msg)
      if (response.config.url.indexOf('write_js_log')>-1){
        return false
      }
      axios.get('bi/write_js_log?uri='+response.config.url+'&msg='+msg)
   /*   console.error(`cgi: ${response.config.url}`, {
        code,
        msg
      })*/
      throw new Error(msg)
    }
    return response
  },
  error => {
    //console.error(error)
    return Promise.reject(error)
  }
)

let http = {}
http.posts = function (url, data) {
  //if (document.cookie.length>0){
    return axios.post(url,data)
 /* }else {
    window.href('https://tglpt.ybsjyyn.com/login')
  }*/

}
http.post = function (url, data) {
  iView.LoadingBar.start()
  if (Object.keys(data).length == 0) {
    data = { 1: 1 }
  }
  //if (document.cookie.length>0){
  iView.LoadingBar.finish()
  return axios.post(url + '?' + encodeUrl(data))

}
/* else {
    window.open('https://tglpt.ybsjyyn.com/login','_self')
  }
}*/
http.get = function (url, data) {
  if (JSON.stringify(data) == '{}') {
    data = { 1: 1 }
  }
 // if (document.cookie.length>0){
  return axios.get(url + '?' + encodeUrl(data)+'&r='+Math.random())
/*}
  else {
    window.open('https://tglpt.ybsjyyn.com/login','_self')
  }*/
}
http.getcn = function(id){
    var cc =''
  console.log(this)
    let self =this
    axios.get('bi/get_cityname_by_id?city_id='+id).then(function (res) {
      console.log(1)
      console.log(self)
      self.cc= res.data.hits
    })
  return cc
  console.log(2)
}
http.getcs = function(id){
  var scenicname=''
  axios.get('bi/get_scenicname_by_id?scenic='+id).then(res=>{
    scenicname=res.data.hits
  })
  return scenicname
}
http.if7s = function (){
  var data = new Date()
  var hour = data.getHours()
  var minutes = data.getMinutes()
  if (hour*60+minutes>=420){
    data.setDate(data.getDate()-1)
  }else {
    data.setDate(data.getDate()-2)
  }
  return data
}
http.if7 = function () {
  var data = new Date()
  var hour = data.getHours()
  var minutes = data.getMinutes()
  if (hour*60+minutes>=420){
    data.setDate(data.getDate()-1)
  }else {
    data.setDate(data.getDate()-2)
  }
  var day = data.getDate()
  var year = data.getUTCFullYear()
  var month = data.getMonth() + 1
  if (month < 10) {
    var currentMonth = '0' + month
  } else {
    currentMonth = month.toString()
  }
  if (day < 10) {
    var currentDay = '0' + day
  } else {
    currentDay = day.toString()
  }
  return year + '-' + currentMonth + '-' + currentDay
}
http.if10 = function () {
  var data = new Date()
  var hour = data.getHours()
  var minutes = data.getMinutes()
  if (hour*60+minutes>=630){
    data.setDate(data.getDate()-1)
  }else {
    data.setDate(data.getDate()-2)
  }
  var day = data.getDate()
  var year = data.getUTCFullYear()
  var month = data.getMonth() + 1
  if (month < 10) {
    var currentMonth = '0' + month
  } else {
    currentMonth = month.toString()
  }
  if (day < 10) {
    var currentDay = '0' + day
  } else {
    currentDay = day.toString()
  }
  return year + '-' + currentMonth + '-' + currentDay
}
http.getMonday = function () {
  var data = new Date()
  data.setDate(data.getDate()-data.getDay()+1)
  var day = data.getDate()
  var year = data.getUTCFullYear()
  var month = data.getMonth() + 1

  if (month < 10) {
    var currentMonth = '0' + month
  } else {
    currentMonth = month.toString()
  }
  if (day < 10) {
    var currentDay = '0' + day
  } else {
    currentDay = day.toString()
  }
  return year + '-' + currentMonth + '-' + currentDay
}
http.getLastMonday = function () {
  var data = new Date()
  data.setDate(data.getDate()-data.getDay()-6)
  var year = data.getUTCFullYear()
  var month = data.getMonth() + 1
  var day = data.getDate()
  if (month < 10) {
    var currentMonth = '0' + month
  } else {
    currentMonth = month.toString()
  }
  if (day < 10) {
    var currentDay = '0' + day
  } else {
    currentDay = day.toString()
  }
  return year + '-' + currentMonth + '-' + currentDay
}
http.getLastSunday = function () {
  var data = new Date()
  data.setDate(data.getDate()-data.getDay())
  var year = data.getUTCFullYear()
  var month = data.getMonth() + 1
  var day = data.getDate()
  if (month < 10) {
    var currentMonth = '0' + month
  } else {
    currentMonth = month.toString()
  }
  if (day < 10) {
    var currentDay = '0' + day
  } else {
    currentDay = day.toString()
  }
  return year + '-' + currentMonth + '-' + currentDay
}
http.getMonthFirstday = function () {
  var data = new Date()
  var year = data.getUTCFullYear()
  var month = data.getMonth() + 1
  if (month < 10) {
    var currentMonth = '0' + month
  } else {
    currentMonth = month.toString()
  }
  return year + '-' + currentMonth + '-01'
}
http.getLstMonthFirstday = function () {
  var data = new Date()
  var year = data.getUTCFullYear()
  var month = data.getMonth()
  if(month==0)
  {
    month=12;
    year=year-1;
  }
  if (month < 10) {
    var currentMonth = '0' + month
  } else {
    currentMonth = month.toString()
  }
  return year + '-' + currentMonth + '-01'
}
http.getLstMonthEndday = function () {
  var data = new Date()
  var year = data.getUTCFullYear()
  var month = data.getMonth()
  if(month==0)
  {
    month=12;
    year=year-1;
  }
  if (month < 10) {
    month = "0" + month;
  }
  var myDate = new Date(year, month, 0);
  return year + "-" + month + "-" + myDate.getDate();//上个月的最后一天
}
http.getToday = function () {
  var data = new Date()
  var year = data.getUTCFullYear()
  var month = data.getMonth() + 1
  var day = data.getDate()
  if (month < 10) {
    var currentMonth = '0' + month
  } else {
    currentMonth = month.toString()
  }
  if (day < 10) {
    var currentDay = '0' + day
  } else {
    currentDay = day.toString()
  }
  return year + '-' + currentMonth + '-' + currentDay
}
http.getTodays = function () {
  var data = new Date()
  var year = data.getUTCFullYear()
  var month = data.getMonth() + 1
  var day = data.getDate()
  var currentData = data.toLocaleDateString()
  if (month < 10) {
    var currentMonth = '0' + month
  } else {
    currentMonth = month.toString()
  }
  if (day < 10) {
    var currentDay = '0' + day
  } else {
    currentDay = day.toString()
  }
  return year + '-' + currentMonth + '-' + currentDay + ' 00:00:00'
}
http.getYesterDay = function () {
  var data = new Date()
  data.setDate(data.getDate() - 1)
  var year = data.getUTCFullYear()
  var month = data.getMonth() + 1
  var day = data.getDate()
  var currentData = data.toLocaleDateString()
  if (month < 10) {
    var currentMonth = '0' + month
  } else {
    currentMonth = month.toString()
  }
  if (day < 10) {
    var currentDay = '0' + day
  } else {
    currentDay = day.toString()
  }
  return year + '-' + currentMonth + '-' + currentDay
}
http.getWeekAgo = function () {
  var data = new Date()
  data.setDate(data.getDate() - 7)
  var year = data.getUTCFullYear()
  var month = data.getMonth() + 1
  var day = data.getDate()
  if (month < 10) {
    var currentMonth = '0' + month
  } else {
    currentMonth = month.toString()
  }
  if (day < 10) {
    var currentDay = '0' + day
  } else {
    currentDay = day.toString()
  }
  return year + '-' + currentMonth + '-' + currentDay
}
http.getMonthAgo = function () {
  var data = new Date()
  var year = data.getUTCFullYear()
  var month = data.getMonth()
  var day = data.getDate()
  if (month < 10) {
    var currentMonth = '0' + month
  } else {
    currentMonth = month.toString()
  }
  if (day < 10) {
    var currentDay = '0' + day
  } else {
    currentDay = day.toString()
  }
  return year + '-' + currentMonth + '-' + currentDay
}
http.get2MonthAgo = function () {
  var data = new Date()
  var year = data.getUTCFullYear()
  var month = data.getMonth()
  var day = data.getDate()
  if (month < 10) {
    var currentMonth = '0' + month
  } else {
    currentMonth = month.toString()
  }
  if (day < 10) {
    var currentDay = '0' + day
  } else {
    currentDay = day.toString()
  }
  return year + '-' + currentMonth + '-' + '01'
}
http.gmt2str = function (time) {
  let date = new Date(time)
  var YY = date.getMonth() + 1
  if (YY < 10) {
    var MM = '0' + YY
  } else {
    MM = YY.toString()
  }
  if (date.getDate() < 10) {
    var DD = '0' + date.getDate()
  } else {
    DD = date.getDate().toString()
  }
  let Str = date.getFullYear() + '-' + MM + '-' + DD
  return Str
}
http.gmt2strm = function (time) {
  let date = new Date(time)
  var YY = date.getMonth() + 1
  if (YY < 10) {
    var MM = '0' + YY
  } else {
    MM = YY.toString()
  }
  if (date.getDate() < 10) {
    var DD = '0' + date.getDate()
  } else {
    DD = date.getDate().toString()
  }
  let Str = date.getFullYear() + '-' + MM +'-'+ DD
  return Str
}
http.gmt2strmst = function (time) {
  let date = new Date(time)
  var YY = date.getMonth() + 1
  if (YY < 10) {
    var MM = '0' + YY
  } else {
    MM = YY.toString()
  }
  if (date.getDate() < 10) {
    var DD = '0' + date.getDate()
  } else {
    DD = date.getDate().toString()
  }
  if (date.getHours() < 10) {
    var HH = '0' + date.getHours()
  } else {
    HH = date.getHours().toString()
  }
  if (date.getMinutes() < 10) {
    var aa = '0' + date.getMinutes()
  } else {
    aa = date.getMinutes().toString()
  }
  if (date.getSeconds() < 10) {
    var ss = '0' + date.getSeconds()
  } else {
    ss = date.getSeconds().toString()
  }
  let Str = date.getFullYear()+MM+DD+HH+aa+ss
  return Str
}
http.gmt2strms = function (time) {
  let date = new Date(time)
  var YY = date.getMonth() + 1
  if (YY < 10) {
    var MM = '0' + YY
  } else {
    MM = YY.toString()
  }
  if (date.getDate() < 10) {
    var DD = '0' + date.getDate()
  } else {
    DD = date.getDate().toString()
  }
  if (date.getHours() < 10) {
    var HH = '0' + date.getHours()
  } else {
    HH = date.getHours().toString()
  }
  if (date.getMinutes() < 10) {
    var aa = '0' + date.getMinutes()
  } else {
    aa = date.getMinutes().toString()
  }
  if (date.getSeconds() < 10) {
    var ss = '0' + date.getSeconds()
  } else {
    ss = date.getSeconds().toString()
  }
  let Str = date.getFullYear() + '-' + MM +'-'+  DD+' '+HH+':'+aa+':'+ss
  return Str
}
http.addr2lnglat = function (addr) {
  /*  $.getJSON("../assets/data/citylnglat.txt",function (data) {
      console.log(data)
  }) */
  var reader = new FileReader() // 这里是核心！！！读取操作就是由它完成的。
  reader.readAsText('../assets/data/citylnglat.txt')
  reader.onload = function () {
    console.log(this.result) // 当读取完成之后会回调这个函数，然后此时文件的内容存储到了result中。直接操作即可。
  }
  return result
}
http.getParams = function(prm){
  var args = getUrlAllParams();
  //如果要查找参数key:
  if (args[prm] != undefined) {
    //如果要查找参数key:
    return args[prm];
  } else {
    return "";
  }
}
http.qfw = function (num) {
  var reg = /\d{1,3}(?=(\d{3})+$)/g
  return (num + '').replace(reg, '$&,')
}
http.StrLen= function (str) {
  var len = 0;
  for (var i=0; i<str.length; i++) {
    if (str.charCodeAt(i)>127 || str.charCodeAt(i)==94) {
      len += 2;
    } else {
      len ++;
    }
  }
  return len
}
function encodeUrl (obj) {
  let url = ''
  ;(function (obj) {
    let kvArr = Object.entries(obj)
    kvArr.forEach(v => {
      if (Object.prototype.toString.call(v[1]) == '[object Object]') {
        // noinspection JSAnnotator
        arguments.callee(v[1])
      } else {
        url += v.join('=') + '&'
      }
    })
  })(obj)
  return url.substring(0, url.length - 1)
}
function getUrlAllParams() {
  var args = new Object();
  var query = window.location.href; //获取查询串
  console.log(window.location.href)
  console.log(window.location.search)
  query=query.substring(query.lastIndexOf('?')+1)
  var pairs = query.split("&"); //在逗号处断开
  for (var i = 0; i < pairs.length; i++) {
    var pos = pairs[i].indexOf('='); //查找name=value
    if (pos == -1) continue; //如果没有找到就跳过
    var argname = pairs[i].substring(0, pos); //提取name
    var value = pairs[i].substring(pos + 1); //提取value
    args[argname] = unescape(value); //存为属性
  }
  return args;
}
export default http
