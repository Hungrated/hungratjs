/**
 * 时间模块
 * @module Time
 * @see module:Time
 * @author Hungrated zhang295415658@qq.com
 */

'use strict';
import './string';

/**
 * 将100以下的正数标准化为两位或三位数字字符串
 * @function convert
 * @param {Number} _digit 数字
 * @param {Boolean} [_two=true] 是否输出两位数
 * @returns {String} 标准化后的数字字符串
 */
const convert = (_digit, _two = true) => {
  if (_digit >= 0 && _digit < 100) {
    return _two ? _digit.toString().padStart(2, '0') : _digit.toString().padStart(3, '0');
  } else {
    return _digit.toString();
  }
};

/**
 * 将时间统一返回为Date类型 `若传入值为null则返回值也为null`
 * @function convertToDateObject
 * @param {Number|Object} [_time = new Date()] 时间
 * @returns {Object} 时间对象
 */
const convertToDateObject = (_time = new Date()) => {
  return typeof _time === 'number' ? new Date(_time) : _time;
};

/**
 * 获取时间的年份
 * @function getYear
 * @param {Object} _time 时间对象
 * @returns {Number} 年份
 */
let getYear = (_time) => {
  return _time.getFullYear();
};

/**
 * 获取时间的月份
 * @function getMonth
 * @param {Object} _time 时间对象
 * @returns {Number} 月份
 */
let getMonth = (_time) => {
  return _time.getMonth() + 1;
};

/**
 * 获取时间的日期
 * @function getDay
 * @param {Object} _time 时间对象
 * @returns {Number} 日期
 */
let getDay = (_time) => {
  return _time.getDate();
};

/**
 * 获取时间的小时数
 * @function getHours
 * @param {Object} _time 时间对象
 * @returns {Number} 小时数
 */
let getHours = (_time) => {
  return _time.getHours();
};

/**
 * 获取时间的分钟数
 * @function getMinutes
 * @param {Object} _time 时间对象
 * @returns {Number} 分钟数
 */
let getMinutes = (_time) => {
  return _time.getMinutes();
};

/**
 * 获取时间的秒钟数
 * @function getSeconds
 * @param {Object} _time 时间对象
 * @returns {Number} 秒钟数
 */
let getSeconds = (_time) => {
  return _time.getSeconds();
};

/**
 * 获取时间的毫秒数
 * @function getMilliSeconds
 * @param {Object} _time 时间对象
 * @returns {Number} 毫秒数
 */
let getMilliSeconds = (_time) => {
  return _time.getMilliseconds();
};

/**
 * 解析绝对时间的毫秒数
 * @function parseMilliSeconds
 * @param {Number} _milliSeconds 绝对毫秒数
 * @returns {Number} 毫秒数
 */
let parseMilliSeconds = (_milliSeconds) => {
  return _milliSeconds % 1000;
};

/**
 * 解析绝对时间的秒钟数
 * @function parseSeconds
 * @param {Number} _milliSeconds 绝对毫秒数
 * @returns {Number} 秒钟数
 */
let parseSeconds = (_milliSeconds) => {
  return Math.floor((_milliSeconds - parseMilliSeconds(_milliSeconds)) / 1000) % 60;
};

/**
 * 解析绝对时间的毫秒数
 * @function parseMinutes
 * @param {Number} _milliSeconds 绝对毫秒数
 * @returns {Number} 分钟数
 */
let parseMinutes = (_milliSeconds) => {
  return Math.floor((_milliSeconds - parseHours(_milliSeconds) * 3600000) / 60000);
};

/**
 * 解析绝对时间的毫秒数
 * @function parseHours
 * @param {Number} _milliSeconds 绝对毫秒数
 * @returns {Number} 小时数
 */
let parseHours = (_milliSeconds) => {
  return Math.floor(_milliSeconds / 3600000);
};

/**
 * 获取绝对时间的毫秒数（1970年1月1日至今经历的毫秒数）`默认返回当前绝对时间的毫秒数`
 * @function getAbsoluteTime
 * @param {Object} _time 时间对象
 * @returns {Number} 毫秒数
 */
let getAbsoluteTime = (_time) => {
  return !_time ? Date.now() : convertToDateObject(_time).getTime();
};

/**
 * 获取时间差毫秒数
 * @function getTimeDifference
 * @param {Object} _timeLater 较晚时间绝对毫秒数
 * @param {Object} _timeEarlier 较早时间绝对毫秒数
 * @returns {Number} 毫秒数
 */
let getTimeDifference = (_timeLater, _timeEarlier) => {
  if (!_timeEarlier) {
    return Math.abs(getAbsoluteTime() - getAbsoluteTime(_timeLater));
  } else {
    return Math.abs(getAbsoluteTime(_timeLater) - getAbsoluteTime(_timeEarlier));
  }
};

/**
 * 格式化时间
 * @function formatTime
 * @param {Object} [_time=new Date()] 时间对象
 * @param {String} [_format=`yyyy-mm-dd hh:mm:ss`] 要转化的格式
 * @returns {String} 格式化后的时间字符串
 */
let formatTime = (_time = new Date(), _format = `y-m-d h:m:s.ms`) => {
  return _format.replace(/y/, getYear(_time)).replace(/m/, convert(getMonth(_time)))
    .replace(/d/, convert(getDay(_time))).replace(/h/, convert(getHours(_time)))
    .replace(/m/, convert(getMinutes(_time))).replace(/s/, convert(getSeconds(_time)))
    .replace(/ms/, convert(getMilliSeconds(_time), false));
};

/**
 * 格式化两个时间的时间差
 * @function formatTimeDifference
 * @param {Object|Number} _timeLater 较晚时间对象
 * @param {Object|Number} _timeEarlier 较早时间对象
 * @param {String} [_format='h:m:s.ms'] 绝对毫秒数
 * @returns {String} 格式化后的时间字符串
 */
let formatTimeDifference = (_timeLater, _timeEarlier, _format = 'h:m:s.ms') => {
  let _diff = getTimeDifference(convertToDateObject(_timeLater), convertToDateObject(_timeEarlier));
  return _format.replace(/h/, convert(parseHours(_diff))).replace(/m/, convert(parseMinutes(_diff)))
    .replace(/s/, convert(parseSeconds(_diff))).replace(/ms/, convert(parseMilliSeconds(_diff), false));
};

/**
 * 格式化给定时间到当前时间的时间差
 * @function formatTimeDifferenceTillNow
 * @param {Object|Number} _time 时间对象
 * @param {String} [_format='h:m:s.ms'] 绝对毫秒数
 * @returns {String} 格式化后的时间字符串
 */
let formatTimeDifferenceTillNow = (_time, _format = 'h:m:s.ms') => {
  return formatTimeDifference(_time, null, _format);
};

export {
  formatTime,
  formatTimeDifference,
  formatTimeDifferenceTillNow
};
