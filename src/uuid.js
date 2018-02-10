/**
 * 全局唯一标识码模块
 * @module Uuid
 * @see module:Time
 * @author Hungrated zhang295415658@qq.com
 */

const generate = () => {
  return (((1 + Math.random()) * 0x1000000) | 0).toString(16).substring(1);
};

export {
  generate
};
