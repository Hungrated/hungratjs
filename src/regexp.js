/**
 * 字符串正则匹配模块
 * @module Regexp
 * @see module:Regexp
 * @author Hungrated zhang295415658@qq.com
 */

/**
 * 数字千分位格式化
 * @function addCommaFormat
 * @param {Number} _num 数字
 * @returns {String} 千分位格式化后的数字
 */
let addCommaFormat = (_num) => {
  return _num.toString().replace(/\d(?=(\d{3})+$)/g, '$&,');
};

let getRegExpString = (_type) => {
  switch (_type) {
    case 'number':
      return '^[0-9]*$';
    case 'char':
      return '^[A-Za-z]+$';
    case 'numChar':
      return '^[A-Za-z0-9]+$';
    case 'numCharUnderline':
      return '^\\w+$';
    case 'email':
      return '^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$';
    case 'domain':
      return '[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/.?';
    case 'url':
      return '[a-zA-z]+://[^\\s]* 或 ^http://([\\w-]+\\.)+[\\w-]+(/[\\w-./?%&=]*)?$';
    case 'phone':
      return '^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$';
    case 'tel':
      return '^(\\(\\d{3,4}-)|\\d{3.4}-)?\\d{7,8}$';
    case 'idCard':
      return '^\\d{15}|\\d{18}$';
    case 'password':
      return '^[a-zA-Z]\\w{5,17}$';
    case 'date':
      return '^\\d{4}-\\d{1,2}-\\d{1,2}';
    case 'month':
      return '^(0?[1-9]|1[0-2])$';
    case 'day':
      return '^((0?[1-9])|((1|2)[0-9])|30|31)$';
    case 'zhCn':
      return '[\u4e00-\u9fa5]';
    case 'blankLine':
      return '\\n\\s*\\r';
    case 'blankChar':
      return '^\\s*|\\s*';
    case 'qq':
      return '[1-9][0-9]{4,}';
    case 'zipCode':
      return '[1-9]\\d{5}(?!\\d)';
    case 'ip':
      return '\\d+\\.\\d+\\.\\d+\\.\\d+';
    default:
      return '*';
  }
};

let regExp = (_regexp, _attr) => {
  if (typeof _regexp === 'string') {
    return new RegExp(_regexp, _attr);
  } else {
    return _regexp;
  }
};

let testType = (_str, _type) => {
  return regExp(getRegExpString(_type)).test(_str);
};

export {
  testType, addCommaFormat
};
