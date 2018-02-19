const utils = require('./lib/entry');

let test = (body) => {
  console.log(
    '\n\n\n' +
    '-------------------------------------------------------------------\n' +
    ' * Test Result:\n\n'
  );

  body();

  console.log(
    '\n\n\n' +
    ' * Test End.\n' +
    '===================================================================\n'
  );
};

test(() => {
  /*
   * test code here
   */

  // // time.js
  // console.log(utils.Time.formatTime());
  // console.log(utils.Time.formatTimeDifference(1518334829701, 1518333473303));
  // console.log(utils.Time.formatTimeDifferenceTillNow(1518333473303));
  //
  // // regexp.js
  // console.log(utils.RegExp.testType('13456789000', 'phone'));
  //
  // // uuid.js
  // console.log(utils.Uid.generate(), utils.Uid.generate(), utils.Uid.generate());
  // console.log(utils.Uid.generateDigit(), utils.Uid.generateDigit(), utils.Uid.generateDigit());
  //
  // // string.js
  // let temp = '   testString   ';
  // console.log(temp.trimSpace());
  // console.log(temp.capitalize());
  // console.log('  temp   temp  ; temp ; \n ; \t temp  '.wordCount());
  // console.log('sliceLeft'.sliceLeft(5).capitalize().wordCount());
  // console.log('sliceRight'.sliceRight(5));
  // console.log('<script lang="javascript">alert(1);</script>'.htmlEncode());
  // console.log('Pumas are large and cat-like animals.'.wordCount());
  // console.log('Pumas are large and cat-like animals.'.includes('Puma'));
  // console.log('Pumas are large and cat-like animals.'.includes('Puma', 3));
  // console.log('Pumas are large and cat-like animals.'.wordIncludes('Puma'));
  // console.log('Pumas are large and cat-like animals.'.wordIncludes('Pumas'));
  // console.log('Pumas are large and cat-like animals.'.wordIncludes('Pumas', 2));

  // number.js
  // console.log((12323456675463).addCommaFormat());
  // console.log((12323456675463).toMegaBytes() + ' MB');
  // console.log((12323456675463).toGigaBytes() + ' GB');

});
