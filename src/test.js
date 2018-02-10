import { time } from './time';

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
    '===================================================================\n\n'
  );
};

test(() => {
  console.log(time);
});
