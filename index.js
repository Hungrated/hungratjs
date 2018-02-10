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
  console.log(utils.Time.formatTime(), utils.Time.formatTimeDifference(31536000535));
});
