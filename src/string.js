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

if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart (targetLength, padString) {
    targetLength = targetLength >> 0; // floor if number or convert non-number to 0;
    padString = String(padString || ' ');
    if (this.length > targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); // append to original to ensure we are longer than needed
      }
      return padString.slice(0, targetLength) + String(this);
    }
  };
}

if (!String.prototype.padEnd) {
  String.prototype.padEnd = function padEnd (targetLength, padString) {
    targetLength = targetLength >> 0; // floor if number or convert non-number to 0;
    padString = String(padString || ' ');
    if (this.length > targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); // append to original to ensure we are longer than needed
      }
      return String(this) + padString.slice(0, targetLength);
    }
  };
}
