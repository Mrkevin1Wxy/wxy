//截取地址栏传递的id参数

function getSearch(name) {
  var search = location.search;
  var arr = decodeURI(search).slice(1).split('&');
  var obj = {};
  arr.forEach(function (v, i) {
    var key = v.split('=')[0];
    var value = v.split('=')[1];
    obj[key] = value;
  })
  return obj[name];
}