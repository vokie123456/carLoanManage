/*  说明：
 *  插件文件：utils.js
 *  作者：林祺泰  QQ：514917919
 * */
import {Loading} from 'element-ui'
// 启动loading
export function openLoading() {
  let options = {
    lock: true,
    text: '加载中',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  }
  return Loading.service(options);
}
// 关闭loading
export function closeLoading(obj) {
  obj.close();
}
// 限制文本个数
export function getLimiteText(value) {
  let len = 24
  if (value.length > len) {
    return value.substr(0, len) + '···'
  } else {
    return value
  }
}
export function sexFilter(row) {
  let sex = '';
  switch (row.sex) {
    case 1:
      sex = '男';
      break;
    case 2:
      sex = '女';
      break;
  }
  return sex;
}
// export const TypeList = [{
//   value: '',
//   label: '无'
// }, {
//   value: '1',
//   label: '店老板'
// }, {
//   value: '2',
//   label: '管理员'
// }, {
//   value: '3',
//   label: '收银员'
// }]
export function roleFilter(row) {
  let type = '';
  switch (row.type) {
    case 1:
      type = '店老板';
      break;
    case 2:
      type = '管理员';
      break;
    case 3:
      type = '收银员';
      break;
  }
  return type;
}
export const currency = (v) => {
  var regStrs = [
    ['^0(\\d+)$', '$1'], // 禁止录入整数部分两位以上，但首位为0
    ['[^\\d\\.]+$', ''], // 禁止录入任何非数字和点
    ['\\.(\\d?)\\.+', '.$1'], // 禁止录入两个以上的点
    ['^(\\d+\\.\\d{2}).+', '$1'] // 禁止录入小数点后两位以上
  ]
  let i
  for (i = 0; i < regStrs.length; i++) {
    let reg = new RegExp(regStrs[i][0])
    v = v.replace(reg, regStrs[i][1])
  }
  return v
}

export default {
  install: function (Vue, options) {
    // 如果数据是空，就用isNull代替
    Vue.filter('isNull', function (value) {
      if (value === null || value === '') {
        return '---'
      } else {
        return value
      }
    })
    // 获取完整的时间（年月日）
    Vue.prototype.getFullDate = (t) => {
      var time = new Date(t)
      var y = time.getFullYear()
      var m = time.getMonth() + 1
      var d = time.getDate()
      return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d)
    }
    // 启动loading
    Vue.prototype.openLoading = () => {
      return this.$loading({
        lock: true,
        text: '加载中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
    }
    // 关闭loading
    Vue.prototype.closeLoading = (obj) => {
      obj.close();
    }
  }
}
