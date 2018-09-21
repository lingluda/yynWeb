import axios from 'axios';
import $ from 'jquery'

// import $ from 'jquery'
// axios.create({
//     baseURL: "",
//     timeout: 30000
// });

let http = {
};
http.post = function (url, data) {
    console.log(data)
    if (Object.keys(data).length == 0) {
        data = { 1: 1 }
    }
    return axios.post(url + '?' + encodeUrl(data))
}
http.get = function (url, data) {
    if (JSON.stringify(data) == '{}') {
        data = { 1: 1 }
    }
    return axios.get(url + '?' + encodeUrl(data))
}
http.getToday =function () {
  var data = new Date();
  var year = data.getUTCFullYear();
  var month = data.getMonth() + 1;
  var day = data.getDate();
  var currentData = data.toLocaleDateString();
  if (month < 10) {
    var currentMonth = '0' + month;
  } else {
    currentMonth = month.toString();
  }
  if (day < 10) {
    var currentDay = '0' + day;
  } else {
    currentDay = day.toString();
  }
  return year + '-' + currentMonth + '-' + currentDay;
}
http.getYesterDay = function (){
  var data = new Date();
  var year = data.getUTCFullYear();
  var month = data.getMonth() + 1;
  var day = data.getDate() - 1;
  var currentData = data.toLocaleDateString();
  if (month < 10) {
    var currentMonth = '0' + month;
  } else {
    currentMonth = month.toString();
  }
  if (day < 10) {
    var currentDay = '0' + day;
  } else {
    currentDay = day.toString();
  }
  return year + '-' + currentMonth + '-' + currentDay;
}
http.getWeekAgo = function () {
  var data = new Date();
  var year = data.getUTCFullYear();
  var month = data.getMonth() + 1;
  var day = data.getDate() - 7;
  var currentData = data.toLocaleDateString();
  if (month < 10) {
    var currentMonth = '0' + month;
  } else {
    currentMonth = month.toString();
  }
  if (day < 10) {
    var currentDay = '0' + day;
  } else {
    currentDay = day.toString();
  }
  return year + '-' + currentMonth + '-' + currentDay;
}
http.getMonthAgo = function () {
  var data = new Date();
  var year = data.getUTCFullYear();
  var month = data.getMonth();
  var day = data.getDate();
  var currentData = data.toLocaleDateString();
  if (month < 10) {
    var currentMonth = '0' + month;
  } else {
    currentMonth = month.toString();
  }
  if (day < 10) {
    var currentDay = '0' + day;
  } else {
    currentDay = day.toString();
  }
  return year + '-' + currentMonth + '-' + currentDay;
}
http.gmt2str = function (time) {
    let date = new Date(time);
    var YY = date.getMonth()+1;
    if (YY < 10) {
      var MM = '0' + YY;
    } else {
      MM = YY.toString();
    }
    if (date.getDate() < 10) {
      var DD = '0' + date.getDate();
    } else {
      DD = date.getDate().toString();
    }
    let Str = date.getFullYear() + '-' +
      MM + '-' + DD;
    return Str;
}
http.addr2lnglat = function (addr) {
  var url = 'http://api.map.baidu.com/geocoder?address='+addr+'&output=json&key=37492c0ee6f924cb5e934fa08c6b1676';
  $.ajax({
    url: 'http://api.map.baidu.com/geocoder?address='+addr+'&output=json&key=37492c0ee6f924cb5e934fa08c6b1676',
    type: "GET",
    dataType: "json",
    success: function (data) {
      return result = JSON.stringify(data);
    }
  })
  return result;
}
function encodeUrl(obj) {

  let url = '';
  (function (obj) {

    let kvArr = Object.entries(obj);
    kvArr.forEach(v => {
      if (Object.prototype.toString.call(v[1]) == '[object Object]') {

        // noinspection JSAnnotator
        arguments.callee(v[1]);
      } else {
        url += v.join('=') + '&'
      }
    })

  })(obj)
  return url.substring(0, url.length - 1);
}


export default http;


