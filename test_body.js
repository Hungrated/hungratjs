const utils = require('./dist/js-common-tools');
const Time = utils.Time;
const RegEx = utils.RegEx;
const Uid = utils.Uid;
const Ajax = utils.Ajax;
const Task = utils.Task;

/* test start */
let htmlLog = function (_str) {
  document.write(`<p>${_str}</p>`);
};

let test = function (body) {
  let logPromise = new Promise(function (resolve, reject) {
    resolve();
  });
  logPromise.then(function () {
    htmlLog(
      '<br>' +
      '-------------------------------------------------------------------<br>' +
      '<strong>* Test Result:</strong><br><br>'
    );
  }).then(function () {
    body();
  }).then(function () {
    htmlLog(
      '<br><br>' +
      '<strong>* Test End.</strong><br>' +
      '===================================================================<br>'
    );
  });
};

test(function () {
  /*
   * test code here
   */

  // // time.js
  // htmlLog(Time.formatTime());
  // htmlLog(Time.formatTimeDifference(1518334829701, 1518333473303));
  // htmlLog(Time.formatTimeDifferenceTillNow(1518333473303));

  // // regexp.js
  // htmlLog(RegEx.testType('13456789000', 'phone'));
  // console.log(RegEx.testType('13456789000', 'phone'));

  // // uuid.js
  // htmlLog(Uid.generate(), Uid.generate(), Uid.generate());
  // htmlLog(Uid.generateDigit(), Uid.generateDigit(), Uid.generateDigit());

  // // string.js
  // let temp = '   testString   ';
  // htmlLog(temp.trimSpace());
  // htmlLog(temp.capitalize());
  // htmlLog('  temp   temp  ; temp ; \n ; \t temp  '.wordCount());
  // htmlLog('sliceLeft'.sliceLeft(5).capitalize().wordCount());
  // htmlLog('sliceRight'.sliceRight(5));
  // htmlLog('Pumas are large and cat-like animals.'.wordCount());
  // htmlLog('Pumas are large and cat-like animals.'.includes('Puma'));
  // htmlLog('Pumas are large and cat-like animals.'.includes('Puma', 3));
  // htmlLog('Pumas are large and cat-like animals.'.wordIncludes('Puma'));
  // htmlLog('Pumas are large and cat-like animals.'.wordIncludes('Pumas'));
  // htmlLog('Pumas are large and cat-like animals.'.wordIncludes('Pumas', 2));
  //
  // number.js
  // htmlLog((12323456675463).addCommaFormat());
  // htmlLog((12323456675463).toMegaBytes() + ' MB');
  // htmlLog((12323456675463).toGigaBytes() + ' GB');

  // ajax.js
  // Ajax.get('http://localhost:9000/get', function (data) {
  //   htmlLog(data);
  //   Ajax.postJSON('http://localhost:9000/post', {
  //     a: 'a',
  //     b: 'b'
  //   }, function (data) {
  //     htmlLog(JSON.stringify(data));
  //   });
  // });

  // task.js
  // let task = new Task();
  //
  // task.add(function (next, args) {
  //   htmlLog('task 1 executed');
  //   let objA = {
  //     a: 'a'
  //   };
  //   console.log('client: ', args());
  //   next(objA, 0, 1);
  // });
  //
  // task.add(function (next, args) {
  //   console.log('client: ', args(2));
  //   htmlLog('task 2 executed');
  //   next();
  // });
  //
  // task.add(function (next, args) {
  //   console.log('client: ', args());
  //   if (args().length) {
  //     htmlLog('task 3 will not be executed');
  //   } else {
  //     next();
  //   }
  // });
  //
  // task.add(function (next, args) {
  //   console.log('client: ', args(1));
  //   htmlLog('task 4 executed');
  // });
  //
  // task.add(function () {
  //   htmlLog('task 5 will not be executed');
  // });
  // task.execute(0).clear();

  // list.js
  // let arr1 = [1, 2, 3];
  // htmlLog(arr1.toString());
  // htmlLog(List.parseList(arr1.toString()));

  // let arr2 = [1, 2, 3, 3, 3, 3, 4, 7, 6, 8, 5, 5, 0, 9];
  // htmlLog(arr2.toString());
  // htmlLog(List.sum(arr2));
  // htmlLog(List.sortNumbers(arr2));
  // htmlLog(List.sortNumbersReverse(arr2));
  // htmlLog(List.deduplicate(arr2));

  // let arr3 = ['a', 'b', 'c'];
  // htmlLog(arr3.toString());
  // List.updateIfNotExist(arr3, 'd', function (flag) {
  //   htmlLog('first update: ' + flag);
  //   htmlLog(arr3.toString());
  // });
  // List.updateIfNotExist(arr3, 'd', function (flag) {
  //   htmlLog('second update: ' + flag);
  //   htmlLog(arr3.toString());
  // });
  // List.updateIfNotExist(arr3, 'e', function (flag) {
  //   htmlLog('third update: ' + flag);
  //   htmlLog(arr3.toString());
  // });
});
