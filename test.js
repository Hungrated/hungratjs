const test = require('./index');

const uid = test.uid;
const time = test.time;

let id = uid.generate();
console.log(id);

console.log(time.now());
console.log(time.getTimeString(new Date()));
