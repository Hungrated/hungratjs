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
  })
    .then(function () {
      body();
    })
    .then(function () {
      htmlLog(
        '<br><br>' +
        '<strong> * Test End.</strong><br>' +
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
  //
  // // regexp.js
  // htmlLog(RegEx.testType('13456789000', 'phone'));
  // console.log(RegEx.testType('13456789000', 'phone'));
  //
  // // uuid.js
  // htmlLog(Uid.generate(), Uid.generate(), Uid.generate());
  // htmlLog(Uid.generateDigit(), Uid.generateDigit(), Uid.generateDigit());
  //
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

  new Task()
    .add(function (next) {
      htmlLog('task 1 executed');
      let objA = {
        a: 'a'
      };
      next(objA, 0, 1, 2);
    })
    .add(function (next, args) {
      console.log('client: ', args[0], args[1], args[2], args[3]);
      htmlLog('task 2 executed');
      next();
    })
    .add(function () {
      htmlLog('task 3 executed');
    })
    .add(function () {
      htmlLog('task 4 executed');
    })
    .execute();
});
