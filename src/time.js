/**
 * 时间模块
 * @module time
 * @see module:time
 * @author Hungrated <zhang295415658@qq.com>
 */

/**
 * 将一位数字转化为两位数字的字符串
 * @function convert
 * @access private
 * @param {String} _digit
 * @returns {String} 两位数字的字符串
 */
const convert = (_digit) => {
  if (_digit < 10) return '0' + _digit;
  else return _digit.toString();
};

let getYear = (_time) => {
  return _time.getFullYear();
};

let getMonth = (_time) => {
  return _time.getMonth() + 1;
};

let getDay = (_time) => {
  return _time.getDate();
};

let getHours = (_time) => {
  return _time.getHours();
};

let getMinutes = (_time) => {
  return _time.getMinutes();
};

let getSeconds = (_time) => {
  return _time.getSeconds();
};

let getMilliSeconds = (_time) => {
  return _time.getMilliseconds();
};

let formatTime = (_time = new Date(), _format = 'yyyy-mm-dd hh:mm:ss') => {
  return _format.replace(/yyyy/, getYear(_time)).replace(/mm/, convert(getMonth(_time)))
    .replace(/dd/, convert(getDay(_time))).replace(/hh/, convert(getHours(_time)))
    .replace(/mm/, convert(getMinutes(_time))).replace(/ss/, convert(getSeconds(_time)));
};

export {
  formatTime
};
