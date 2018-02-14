/**
 * 字符串方法扩展模块
 * `加入部分新特性方法以兼容旧设备`
 * @module String
 * @see module:String
 * @author Hungrated zhang295415658@qq.com
 */

'use strict';

/**
 * 消除字符串左空格
 * @function trimLeftSpace
 * @returns {String} 消除空格后的字符串
 */
if (!String.prototype.trimLeftSpace) {
  Object.defineProperty(String.prototype, 'trimLeftSpace', {
    value () {
      return this.replace(/(^\s*)/g, '');
    },
    enumerable: false
  });
}

/**
 * 消除字符串右空格
 * @function trimRightSpace
 * @returns {String} 消除空格后的字符串
 */
if (!String.prototype.trimRightSpace) {
  Object.defineProperty(String.prototype, 'trimRightSpace', {
    value () {
      return this.replace(/(\s*$)/g, '');
    },
    enumerable: false
  });
}

/**
 * 消除字符串空格
 * @function trimSpace
 * @returns {String} 消除左右两端空格后的字符串
 */
if (!String.prototype.trimSpace) {
  Object.defineProperty(String.prototype, 'trimSpace', {
    value () {
      return this.replace(/(^\s*)|(\s*$)/g, '');
    },
    enumerable: false
  });
}

/**
 * 字符串首字母大写
 * @function capitalize
 * @returns {String} 首字母大写后的字符串
 */
if (!String.prototype.capitalize) {
  Object.defineProperty(String.prototype, 'capitalize', {
    value () {
      let _temp = this.trimSpace();
      return _temp.slice(0, 1).toUpperCase() + _temp.slice(1);
    },
    enumerable: false
  });
}

/**
 * 字符串单词计数
 * @function wordCount
 * @returns {Number} 字符串所含单词数
 */
if (!String.prototype.wordCount) {
  Object.defineProperty(String.prototype, 'wordCount', {
    value () {
      return this.replace(/[^A-Za-z0-9_-]+/g, ' ').trimSpace().split(' ').length;
    },
    enumerable: false
  });
}

/**
 * 截取字符串左端子串
 * @function sliceLeft
 * @param {Number} _length 子串长度
 * @returns {String} 截取的子串
 */
if (!String.prototype.sliceLeft) {
  Object.defineProperty(String.prototype, 'sliceLeft', {
    value (_length) {
      return this.slice(0, _length);
    },
    enumerable: false
  });
}

/**
 * 截取字符串右端子串
 * @function sliceRight
 * @param {Number} _length 子串长度
 * @returns {String} 截取的子串
 */
if (!String.prototype.sliceRight) {
  Object.defineProperty(String.prototype, 'sliceRight', {
    value (_length) {
      return this.slice(this.length - _length);
    },
    enumerable: false
  });
}

/**
 * HTML编码处理
 * @function htmlEncode
 * @returns {String} 处理后的字符串
 */
if (!String.prototype.htmlEncode) {
  Object.defineProperty(String.prototype, 'htmlEncode', {
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

/**
 * 搜索是否包含指定子串
 * `建议用includes代替indexOf方法，因为indexOf返回number，当找到返回位置0时若当作布尔值则判定为false，容易出错`
 * @function includes
 * @param {String} _search 要搜索的子串
 * @param {Number} [_start=0] 搜索起始字符位置 `默认为0`
 * @returns {Boolean} 搜索是否包含该子串
 */
if (!String.prototype.includes) {
  String.prototype.includes = function (_search, _start) {
    'use strict';
    if (typeof _start !== 'number') {
      _start = 0;
    }

    if (_start + _search.length > this.length) {
      return false;
    } else {
      return this.indexOf(_search, _start) !== -1;
    }
  };
}

/**
 * 搜索是否包含指定单词
 * `使用Array的includes方法`
 * @function wordIncludes
 * @param {String} _search 要搜索的单词
 * @param {Number} [_start=0] 搜索起始单词位置 `默认为0`
 * @returns {Boolean} 搜索是否包含该单词
 */
if (!String.prototype.wordIncludes) {
  Object.defineProperty(String.prototype, 'wordIncludes', {
    value (_search, _start) {
      let _wordArray = this.replace(/[^A-Za-z0-9_-]+/g, ' ').trimSpace().split(' ');
      return _wordArray.includes(_search, _start);
    },
    enumerable: false
  });
}

/**
 * 从首端填充字符串到指定长度
 * `ES8新增`
 * @function padStart
 * @param {Number} _targetLength 目标长度
 * @param {String} [_padString=' '] 填充字符串
 * @returns {String} 填充后的字符串
 */
if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart (_targetLength, _padString) {
    _targetLength = _targetLength >> 0; // floor if number or convert non-number to 0;
    _padString = String(_padString || ' ');
    if (this.length > _targetLength) {
      return String(this);
    } else {
      _targetLength = _targetLength - this.length;
      if (_targetLength > _padString.length) {
        _padString += _padString.repeat(_targetLength / _padString.length); // append to original to ensure we are longer than needed
      }
      return _padString.slice(0, _targetLength) + String(this);
    }
  };
}

/**
 * 从首端填充字符串到指定长度
 * `ES8新增`
 * @function padEnd
 * @param {Number} _targetLength 目标长度
 * @param {String} [_padString=''] 填充字符串
 * @returns {String} 填充后的字符串
 */
if (!String.prototype.padEnd) {
  String.prototype.padEnd = function padEnd (_targetLength, _padString) {
    _targetLength = _targetLength >> 0; // floor if number or convert non-number to 0;
    _padString = String(_padString || ' ');
    if (this.length > _targetLength) {
      return String(this);
    } else {
      _targetLength = _targetLength - this.length;
      if (_targetLength > _padString.length) {
        _padString += _padString.repeat(_targetLength / _padString.length); // append to original to ensure we are longer than needed
      }
      return String(this) + _padString.slice(0, _targetLength);
    }
  };
}
