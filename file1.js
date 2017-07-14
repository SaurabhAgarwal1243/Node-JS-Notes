var f2 = require('./file2');

console.log(f2)

// // var a= 10;
// this.a = 20;
// global .a = 30;
//
// console.log(a)

setTimeout(function () {
    console.log(f2)
},1000)