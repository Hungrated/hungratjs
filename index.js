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

  // time.js
  console.log(utils.Time.formatTime());
  console.log(utils.Time.formatTimeDifference(1518334829701, 1518333473303));
  console.log(utils.Time.formatTimeDifferenceTillNow(1518333473303));

  // regexp.js
  console.log(utils.Regexp.testType('13456789000', 'phone'));

  // uuid.js
  console.log(utils.Uuid.generate(), utils.Uuid.generate(), utils.Uuid.generate());
});
