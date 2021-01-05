/*
 * @Description:
 * @Author: liudehua
 * @Date: 2021-01-04 11:06:26
 * @LastEditTime: 2021-01-04 17:25:30
 * @LastEditors: liudehua
 */
//时间戳转换为自己想要的格式
// 用法  new Date(dateValue).format('yyyy-MM-dd hh:mm:ss')
declare global {
  interface Date {
    _format(format: string): string;
  }
}
Date.prototype._format = function(format: string): string {
  const date: any = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'h+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds(),
    'q+': Math.floor((this.getMonth() + 3) / 3),
    'S+': this.getMilliseconds()
  };
  if (/(y+)/i.test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (const k in date) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? date[k] : ('00' + date[k]).substr(('' + date[k]).length)
      );
    }
  }
  return format;
};

export default (value: number | string, type = 'yyyy-MM-dd') => {
  if (value) {
    // 兼容Safari Safari内核无法识别 -new Date()
    let newVal: number | string = '';
    if (typeof value != 'number') {
      newVal = value.replace(/-/g, '/');
    } else {
      newVal = value;
    }
    return new Date(newVal)._format(type);
  } else {
    return '-';
  }
};
