/**
 * 数组操作模块
 * @module List
 * @see module:List
 * @alias Array
 * @author Hungrated zhang295415658@qq.com
 */

/**
 * 将数组字符串转化为数组对象
 * @function parseList
 * @param {String} _str 表示数组的字符串 `元素间用逗号隔开`
 * @returns {Array} 转化后的数组
 */
const parseList = (_str) => {
  return _str.split(',');
};

/**
 * 不重复地向数组插入元素
 * @function updateIfNotExist
 * @param {Array} _arr 待处理数组
 * @param {String|Number|Object} _unit 要插入的项目
 * @param {Function} _cb 回调方法 `第一个参数flag：若元素已存在返回false，否则返回true`
 */
const updateIfNotExist = (_arr, _unit, _cb) => {
  if (_arr.indexOf(_unit) === -1) {
    _arr.push(_unit);
    _cb(true);
  } else if (_arr.indexOf(_unit) > -1) {
    _cb(false);
  }
};

/**
 * 计算数组和 `仅数字数组`
 * @function sum
 * @param {Array} _arr 待处理数组
 * @returns {Number} 数组所有元素的和
 */
const sum = (_arr) => {
  return _arr.reduce((acc, cur) => (acc + cur), 0);
};

/**
 * 数组排序 `仅数字数组`
 * @function sortNumbers
 * @param {Array} _arr 待处理数组
 * @returns {Array} 排序后数组
 */
const sortNumbers = (_arr) => {
  return _arr.sort((a, b) => a - b);
};

/**
 * 数组排序（倒序） `仅数字数组`
 * @function sortNumbersReverse
 * @param {Array} _arr 待处理数组
 * @returns {Array} 排序后数组
 */
const sortNumbersReverse = (_arr) => {
  return _arr.sort((a, b) => a - b).reverse();
};

/**
 * 数组去重
 * @function deduplicate
 * @param {Array} _arr 待处理数组
 * @returns {Array} 去重后的数组
 */
const deduplicate = (_arr) => {
  return _arr.sort().reduce((_init, _cur) => {
    if (_init.length === 0 || _init[_init.length - 1] !== _cur) {
      _init.push(_cur);
    }
    return _init;
  }, []);
};

/**
 * 判断数组是否包含指定元素
 * @function includes
 * @param {String|Number|Object} searchElement 要搜索的元素
 * @param {Number} fromIndex 搜索的起始位置
 * @returns {Boolean} 判断结果
 */
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function (searchElement, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }
      let o = Object(this);
      let len = o.length >>> 0;
      if (len === 0) {
        return false;
      }
      let n = fromIndex | 0;
      let k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
      while (k < len) {
        if (o[k] === searchElement) {
          return true;
        }
        k++;
      }
      return false;
    }
  });
}

export {
  parseList,
  updateIfNotExist,
  sum,
  sortNumbers,
  sortNumbersReverse,
  deduplicate
};
