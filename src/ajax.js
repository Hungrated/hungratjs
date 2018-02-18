/* eslint-disable no-undef */
function ajax (_reqObj) {
  let xhr = null;
  window.XMLHttpRequest
    ? (xhr = new XMLHttpRequest())
    : (xhr = new ActiveXObject('Microsoft.XMLHTTP'));
  let method = _reqObj.method || 'get';
  let url = _reqObj.url;
  let async = _reqObj.async || true;
  let data = _reqObj.data;
  let fn = _reqObj.fn;

  // 第一种情况：如果是用get方法，并且data是存在的，就执行：
  if (method === 'get' && data) {
    xhr.open(method, url + '?' + data + '&' + Math.random(), async);
  }

  // 第二种情况：如果是用post方法，并且data是存在的，就执行：
  if (method === 'post' && data) {
    xhr.open(method, url, async);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(data);
  } else {
    xhr.send();
  }

  // 数据传输成功之后
  xhr.onReadyStateChange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        fn(xhr.responseText);
      } else {
        alert('error');
      }
    }
  };
}
