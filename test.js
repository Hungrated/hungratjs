const test = require('./index');

const Time = test.Time;
const Uid = test.Uid;

let time = new Time();
let uid = new Uid();

console.log(time.now());
console.log(time.getTimeString(new Date()));

console.log(uid.generate());
