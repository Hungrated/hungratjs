let num = 1234556789;
let result = num.toString().replace(/\d(?=(\d{3})+$)/g, '$&,');

console.log(result);

