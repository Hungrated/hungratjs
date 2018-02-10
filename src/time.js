/**
 * 时间模块
 * @module time
 * @see module:time
 * @author Hungrated <zhang295415658@qq.com>
 */

/**
 * 将100以下的正数标准化为两位数字字符串
 * @function convert
 * @param {Number} _digit 数字
 * @returns {String} 两位数字字符串
 */
const convert = (_digit) => {
  if (_digit >= 0 && _digit < 10) return '0' + _digit;
  else return _digit.toString();
};

/**
 * 获取时间的年份
 * @function getYear
 * @param {Date} _time 时间对象
 * @returns {Number} 年份
 */
let getYear = (_time) => {
  return _time.getFullYear();
};

/**
 * 获取时间的月份
 * @function getMonth
 * @param {Date} _time 时间对象
 * @returns {Number} 月份
 */
let getMonth = (_time) => {
  return _time.getMonth() + 1;
};

/**
 * 获取时间的日期
 * @function getDay
 * @param {Date} _time 时间对象
 * @returns {Number} 日期
 */
let getDay = (_time) => {
  return _time.getDate();
};

/**
 * 获取时间的小时数
 * @function getHours
 * @param {Date} _time 时间对象
 * @returns {Number} 小时数
 */
let getHours = (_time) => {
  return _time.getHours();
};

/**
 * 获取时间的分钟数
 * @function getMinutes
 * @param {Date} _time 时间对象
 * @returns {Number} 分钟数
 */
let getMinutes = (_time) => {
  return _time.getMinutes();
};

/**
 * 获取时间的秒钟数
 * @function getSeconds
 * @param {Date} _time 时间对象
 * @returns {Number} 秒钟数
 */
let getSeconds = (_time) => {
  return _time.getSeconds();
};

/**
 * 获取时间的毫秒数
 * @function getMilliSeconds
 * @param {Date} _time 时间对象
 * @returns {Number} 毫秒数
 */
let getMilliSeconds = (_time) => {
  return _time.getMilliseconds();
};

/**
 * 格式化时间
 * @function format
 * @param {Date} [_time=new Date()] 时间对象
 * @param {String} [_format=`yyyy-mm-dd hh:mm:ss`] 要转化的格式
 * @returns {String} 格式化后的时间字符串
 */
let formatTime = (_time = new Date(), _format = `yyyy-mm-dd hh:mm:ss:ms`) => {
  return _format.replace(/yyyy/, getYear(_time)).replace(/mm/, convert(getMonth(_time)))
    .replace(/dd/, convert(getDay(_time))).replace(/hh/, convert(getHours(_time)))
    .replace(/mm/, convert(getMinutes(_time))).replace(/ss/, convert(getSeconds(_time)))
    .replace(/ms/, convert(getMilliSeconds(_time)));
};

export {
  formatTime
};
