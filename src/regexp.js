/**
 * 字符串正则匹配模块
 * @module Regexp
 * @see module:Regexp
 * @author Hungrated zhang295415658@qq.com
 */

let addCommaFormat = (_num) => {
  return num.toString().replace(/\d(?=(\d{3})+$)/g, '$&,');
};

export {
  addCommaFormat
};
