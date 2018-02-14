/**
 * 数字方法扩展模块
 * `加入部分新特性方法以兼容旧设备`
 * @module Number
 * @see module:Number
 * @author Hungrated zhang295415658@qq.com
 */

'use strict';

/**
 * 数字千分位格式化
 * @function addCommaFormat
 * @returns {String} 千分位格式化后的数字
 */
if (!Number.prototype.addCommaFormat) {
  Object.defineProperty(Number.prototype, 'addCommaFormat', {
    value () {
      return this.toString().replace(/\d(?=(\d{3})+$)/g, '$&,');
    },
    enumerable: false
  });
}
