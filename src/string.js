/**
 * 字符串方法补充模块 `兼容IE9以上`
 * @module String
 * @see module:String
 * @author Hungrated zhang295415658@qq.com
 */

'use strict';

if (!String.prototype.trimLeftSpace) {
  Object.defineProperty(String.prototype, 'trimLeftSpace',
    {
      value () {
        return this.replace(/(^\s*)/g, '');
      },
      enumerable: false
    });
}

if (!String.prototype.trimRightSpace) {
  Object.defineProperty(String.prototype, 'trimRightSpace',
    {
      value () {
        return this.replace(/(\s*$)/g, '');
      },
      enumerable: false
    });
}

if (!String.prototype.trimSpace) {
  Object.defineProperty(String.prototype, 'trimSpace',
    {
      value () {
        return this.replace(/(^\s*)|(\s*$)/g, '');
      },
      enumerable: false
    });
}

if (!String.prototype.reverse) {
  Object.defineProperty(String.prototype, 'reverse',
    {
      value () {
        return this.split('').reverse().join('');
      },
      enumerable: false
    });
}

if (!String.prototype.capitalize) {
  Object.defineProperty(String.prototype, 'capitalize',
    {
      value () {
        let _temp = this.trimSpace();
        return _temp.slice(0, 1).toUpperCase() + _temp.slice(1);
      },
      enumerable: false
    });
}

if (!String.prototype.wordCount) {
  Object.defineProperty(String.prototype, 'wordCount',
    {
      value () {
        return this.split(' ').length;
      },
      enumerable: false
    });
}

if (!String.prototype.htmlEntities) { // needs improving
  Object.defineProperty(String.prototype, 'htmlEntities',
    {
      value () {
        return String(this).replace(/>/g, '&gt;').replace(/</g, '&lt;');
      },
      enumerable: false
    });
}
