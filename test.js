const test = require('./index');

const Time = test.Time;

let time = new Time();

console.log(time.now());
console.log(time.getTimeString(new Date()));
