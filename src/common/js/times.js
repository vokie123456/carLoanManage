export function format(t) {
  if (t) {
    t = parseInt(t)
    var time = new Date(t)
    var y = time.getFullYear()
    var m = time.getMonth() + 1
    var d = time.getDate()
    var h = time.getHours()
    var mm = time.getMinutes()
    var s = time.getSeconds()
    return (
      y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d) + ' ' + (h < 10 ? '0' + h : h) + ':' +
      (mm < 10 ? '0' + mm : mm) + ':' +
      (s < 10 ? '0' + s : s)
    )
  } else {
    return '--'
  }
}
// 获取完整的时间（年月日）
export function getDate(t) {
  var time = new Date(t)
  var y = time.getFullYear()
  var m = time.getMonth() + 1
  var d = time.getDate()
  return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d)
}
// 获取完整的时间（年月日）
export function getDateHM(t) {
  var time = new Date(t)
  var y = time.getFullYear()
  var m = time.getMonth() + 1
  var d = time.getDate()
  var h = time.getHours()
  var mm = time.getMinutes()
  return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d) + ' ' + (h < 10 ? '0' + h : h) + ':' +
    (mm < 10 ? '0' + mm : mm)
}
// 获取完整的时间
export function getDateTime(t) {
  var time = new Date(t)
  var y = time.getFullYear()
  var m = time.getMonth() + 1
  var d = time.getDate()
  var h = time.getHours()
  var mm = time.getMinutes()
  var s = time.getSeconds()
  return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d) + ' ' + (h < 10 ? '0' + h : h) + ':' +
    (mm < 10 ? '0' + mm : mm) + ':' +
    (s < 10 ? '0' + s : s)
}

// 获取时间戳
export function getTime(t) {
  var time = new Date(t)
  return time.getTime()
}
// 获取昨天时间
export function getYesterday() {
  var day1 = new Date();
  day1.setTime(day1.getTime() - 24 * 60 * 60 * 1000);
  var s1 = day1.getFullYear() + "-" + (day1.getMonth() + 1) + "-" + day1.getDate();
  return s1;
}
