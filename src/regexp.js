/**
 * 字符串正则匹配模块
 * @module Regexp
 * @see module:Regexp
 * @author Hungrated zhang295415658@qq.com
 */

/**
 * 数字千分位格式化
 * @function addCommaFormat
 * @param {Number} _num 数字
 * @returns {String} 千分位格式化后的数字
 */
let addCommaFormat = (_num) => {
  return _num.toString().replace(/\d(?=(\d{3})+$)/g, '$&,');
};

export {
  addCommaFormat
};
