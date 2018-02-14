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

if (!String.prototype.sliceLeft) {
  Object.defineProperty(String.prototype, 'sliceLeft',
    {
      value (n) {
        return this.slice(0, n);
      },
      enumerable: false
    });
}

if (!String.prototype.sliceRight) {
  Object.defineProperty(String.prototype, 'sliceRight',
    {
      value (n) {
        return this.slice(this.length - n);
      },
      enumerable: false
    });
}

if (!String.prototype.htmlEncode) {
  Object.defineProperty(String.prototype, 'htmlEncode',
    {
      value () {
        let res = this;
        const q1 = [/x26/g, /x3C/g, /x3E/g, /x20/g];
        const q2 = ['&', '<', '>', ' '];
        for (let i = 0; i < q1.length; i++) {
          res = res.replace(q1[i], q2[i]);
        }
        return res;
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
