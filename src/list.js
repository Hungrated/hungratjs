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
function updateVegetablesCollection (veggies, veggie) {
  if (veggies.indexOf(veggie) === -1) {
    veggies.push(veggie);
    console.log('New veggies collection is : ' + veggies);
  } else if (veggies.indexOf(veggie) > -1) {
    console.log(veggie + ' already exists in the veggies collection.');
  }
}

// 计算数组和
var total = [ 0, 1, 2, 3 ].reduce(
  ( acc, cur ) => acc + cur,
  0
);

  // 二维数组转化为一维
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  ( acc, cur ) => acc.concat(cur),
  []
);

// 数字数组排序
function sortNumbers(arr) {
  return arr.sort((a, b) => a - b);
}

function sortNumbersReverse(arr) {
  return arr.sort((a, b) => a - b).reverse();
}

// 数组去重
let arr = [1,2,1,2,3,5,4,5,3,4,4,4,4];
let result = arr.sort().reduce((init, current)=>{
  if(init.length===0 || init[init.length-1]!==current){
    init.push(current);
  }
  return init;
}, []);

if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function(searchElement, fromIndex) {
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
  parseList
};
