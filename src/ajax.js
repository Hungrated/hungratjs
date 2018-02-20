/**
 * AJAx方法模块
 * `封装原生ajax方法`
 * @module Ajax
 * @see module:Ajax
 * @author Hungrated zhang295415658@qq.com
 */

/* eslint-disable no-undef */

/**
 * 根据数据生成查询字符串
 * @function createQueryString
 * @param {Object} _data 数据对象
 * @returns {String} 查询字符串
 */
const createQueryString = (_data) => {
  let queryString = '';
  for (let p in _data) {
    queryString = queryString + `&${encodeURIComponent(p)}=${encodeURIComponent(data[p])}`;
  }
  return queryString.substring(1);
};

/**
 * 原生AJAX方法
 * @function ajax
 * @param {Object} _reqObj 数据对象
 * @param {Object} _contentType 数据类型
 */
const ajax = (_reqObj, _contentType) => {
  let xhr = null;
  window.XMLHttpRequest
    ? (xhr = new XMLHttpRequest())
    : (xhr = new ActiveXObject('Microsoft.XMLHTTP'));
  let method = _reqObj.method || 'get';
  let url = _reqObj.url;
  let async = _reqObj.async || true;
  let data = JSON.stringify(_reqObj.data);
  let success = _reqObj.success;

  // get
  if (method.toLowerCase() === 'get') {
    xhr.open(method, url, async);
    xhr.send(null);
  }

  // post
  if (method.toLowerCase() === 'post' && data) {
    xhr.open(method, url, async);
    xhr.responseType = 'json';
    xhr.setRequestHeader('content-type', _contentType || 'application/json');
    console.log(data, _contentType);
    xhr.send(data);
  }

  // success
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status >= 200 && xhr.status < 300) {
      success(JSON.parse(xhr.response));
    }
  };
};

/**
 * AJAX的get方法
 * @function get
 * @param {String} _url 目标地址
 * @param {Object} _data 数据对象
 * @param {Function} _sucCb 成功回调方法
 * @returns {String} 查询字符串
 */
const get = (_url, _data, _sucCb) => {
  if (typeof _data === 'object') {
    _url = _url + '?' + createQueryString(_data) + `&t=${Math.random().toString().substring(2)}`;
  } else {
    _url = _url + `?t=${Math.random().toString().substring(2)}`;
    _sucCb = _data;
  }
  ajax({
    method: 'GET',
    url: _url,
    async: true,
    success: _sucCb
  });
};

/**
 * AJAX的post方法
 * @function post
 * @param {String} _url 目标地址
 * @param {Object} _data 数据对象
 * @param {Object} _contentType 数据类型
 * @param {Function} _sucCb 成功回调方法
 */
const post = (_url, _data, _contentType, _sucCb) => {
  ajax({
    method: 'POST',
    url: _url,
    async: true,
    data: _data,
    success: _sucCb
  }, _contentType);
};

/**
 * 针对JSON数据类型对AJAX的post方法进行封装
 * @function postJSON
 * @param {String} _url 目标地址
 * @param {Object} _data 数据对象
 * @param {Function} _sucCb 成功回调方法
 */
const postJSON = (_url, _data, _sucCb) => {
  post(_url, _data, 'application/json', _sucCb);
};

// const postFormData = (_url, _formData, _sucCb) => {
//   post(_url, _formData, 'multipart/form-data', _sucCb);
// };

// const jsonp = (_url, _data, _callback, _sucCb) => {
//   let url = _url;
//   let data = _data;
//   let oBody = document.getElementsByTagName('body')[0];
//   let oScript = document.createElement('script');
//   let callbackName = 'cb' + (~~(Math.random() * 0xffffff)).toString(16);
//   window[callbackName] = (_result) => _sucCb(_result);
//   data[_callback] = callbackName;
//   oScript.setAttribute('src', url + '?' + createQueryString(data));
//   oBody.append(oScript);
// };

export {
  ajax,
  get,
  postJSON
};
