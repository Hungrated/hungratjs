/**
 * 数组操作模块
 * @module List
 * @see module:List
 * @alias Array
 * @author Hungrated zhang295415658@qq.com
 */

const parseList = (_str) => {
  return _str.split(',');
};

// 判断一个元素是否在数组里，不在则更新数组
const updateIfNotExist = (_arr, _unit, _cb) => {
  if (_arr.indexOf(_unit) === -1) {
    _arr.push(_unit);
    _cb(true);
  } else if (_arr.indexOf(_unit) > -1) {
    _cb(false);
  }
};

// 计算数组和(仅数字数组)
const sum = (_arr) => {
  return _arr.reduce((acc, cur) => (acc + cur), 0);
};

// 数字数组排序
const sortNumbers = (_arr) => {
  return _arr.sort((a, b) => a - b);
};

// 数字数组排序(倒序)
const sortNumbersReverse = (_arr) => {
  return _arr.sort((a, b) => a - b).reverse();
};

// 数组去重
const deduplicate = (_arr) => {
  return _arr.sort().reduce((_init, _cur) => {
    if (_init.length === 0 || _init[_init.length - 1] !== _cur) {
      _init.push(_cur);
    }
    return _init;
  }, []);
};

// 判断包含
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
