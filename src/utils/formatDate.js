function formatDate(value) {
  let date = new Date(value);
  let y = date.getFullYear();
  let MM = date.getMonth() + 1;
  MM = MM < 10 ? "0" + MM : MM;
  let d = date.getDate();
  d = d < 10 ? "0" + d : d;
  let h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  let m = date.getMinutes();
  m = m < 10 ? ('0' + m) : m;
  return y + "-" + MM + "-" + d + " " + h + " : " + m;
}

function formatDate2(value) {
  let date = new Date(value);
  let y = date.getFullYear();
  let MM = date.getMonth() + 1;
  MM = MM < 10 ? "0" + MM : MM;
  let d = date.getDate();
  d = d < 10 ? "0" + d : d;
  return y + "-" + MM + "-" + d;
}

function formatDate3(value) {
  let date = new Date(value);
  let y = date.getFullYear();
  let MM = date.getMonth() + 1;
  MM = MM < 10 ? "0" + MM : MM;
  let d = date.getDate();
  d = d < 10 ? "0" + d : d;
  return y + "/" + MM + "/" + d;
}

function formatTime(value) {
  let date = new Date(value);
  // let y = date.getFullYear();
  // let MM = date.getMonth() + 1;
  // MM = MM < 10 ? ('0' + MM) : MM;
  // let d = date.getDate();
  // d = d < 10 ? ('0' + d) : d;
  let h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  let m = date.getMinutes();
  m = m < 10 ? ('0' + m) : m;
  let s = date.getSeconds();
  s = s < 10 ? ('0' + s) : s;
  // alert(h + ':' + m + ':' + s)
  return h + ' : ' + m + ' : ' + s;

}

function translateTime(value) {
  let date = new Date(value);
  let y = date.getFullYear();
  let MM = date.getMonth() + 1;
  MM = MM < 10 ? "0" + MM : MM;
  let d = date.getDate();
  d = d < 10 ? "0" + d : d;
  let h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  let m = date.getMinutes();
  m = m < 10 ? ('0' + m) : m;
  // let s = date.getSeconds();
  // s = s < 10 ? ('0' + s) : s;
  // alert(h + ':' + m + ':' + s)
  return y + "年" + MM + "月" + d + "日 " + h + ':' + m;

}

function translateTime1(value) {
  let date = new Date(value);
  let y = date.getFullYear();
  let MM = date.getMonth() + 1;
  MM = MM < 10 ? "0" + MM : MM;
  let d = date.getDate();
  d = d < 10 ? "0" + d : d;
  return y + "年" + MM + "月" + d + "日 ";

}

// 获取年数
function getYears(year) {
  // var date = formatDate3(year);
  year = new Date(year);
  debugger
  let d = new Date();
  let age =
    d.getFullYear() -
    year.getFullYear() -
    (d.getMonth() < year.getMonth() ||
      (d.getMonth() == year.getMonth() &&
        d.getDate() < year.getDate()) ?
      1 :
      0);
  return age;
}

var tool = {
  formatDate: formatDate,
  formatDate2: formatDate2,
  formatTime: formatTime,
  translateTime: translateTime,
  translateTime1: translateTime1,
  getYears: getYears
}

export default tool
