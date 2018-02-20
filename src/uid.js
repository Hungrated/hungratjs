/**
 * 全局唯一标识码模块
 * @module Uid
 * @see module:Uid
 * @author Hungrated zhang295415658@qq.com
 */

'use strict';

/**
 * 生成全局唯一标识码
 * @function generate
 * @returns {String} 全局唯一标识码
 */
const generate = () => {
  return (((1 + Math.random()) * 0x1000000) | 0).toString(16).substring(1);
};

const generateDigit = () => {
  return Math.random().toString().slice(-6);
};

export {
  generate, generateDigit
};
