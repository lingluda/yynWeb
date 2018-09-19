import axios from 'axios';
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

function addresstolatlag(address) {
  var url = 'http://api.map.baidu.com/geocoder/v2/?address='+address+'&output=json&ak=PPmicK2C744fFQt2QtIOmpZ9Cqwu2DhR';
  var result ='';
  if (result = file_get_contents(url)) {
    return result;
  }
}
