/**
 * 字符串正则匹配模块
 * @module RegExp
 * @see module:RegExp
 * @author Hungrated zhang295415658@qq.com
 */

'use strict';

/**
 * 获取正则表达式模板
 * @function getRegExpString
 * @param {String} _type 类型
 * 可选值有 `number`数字 `char`字母 `numChar`数字与字母 `numCharUnderline`数字、字母与下划线 `email`邮箱地址 `domain`域名
 * `url`url `phone`手机号码 `tel`电话号码 `idCard`身份证号码 `password`密码 `date`日期格式 `month`月份 `day`日期
 * `zhCn`中文字符 `blankLine`空行 `blankChar`空字符 `qq`QQ号码 `zipCode`邮政编码 `ip`IP地址
 * @returns {String} 类型对应的正则表达式字符串
 */
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
      return '[a-zA-z]+://[^\\s]*';
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

/**
 * 获取正则表达式对象
 * @function getRegExp
 * @param {String|Object} _regexp 正则表达式字符串或对象
 * @param {String} [_attr] 修饰符
 * @returns {Object} 正则表达式对象
 */
let getRegExp = (_regexp, _attr) => {
  if (typeof _regexp === 'string') {
    return new RegExp(_regexp, _attr);
  } else if (typeof _regexp === 'object') {
    return _regexp;
  } else {
    return new RegExp('');
  }
};

/**
 * 判断字符串是否属于某一类型模式
 * @function testType
 * @see module:RegExp~getRegExp
 * @see module:RegExp~getRegExpString
 * @param {String} _str 待匹配字符串
 * @param {String} _type 匹配类型
 * @returns {Boolean} 是否匹配的结果
 */
let testType = (_str, _type) => {
  return getRegExp(getRegExpString(_type)).test(_str);
};

export {
  testType
};
