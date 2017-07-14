// function myfun(){
//   console.log('myfun');
//   done();
//   console.log('done called');
// }
//
// console.log('1');
//
// myfun(function (){
//   console.log('done running');
// })
//
// console.log('2');

function sayhello(){
  console.log('hello');
}

var timeoutId = setTimeout(sayhello, 8000);
var intervalId = setInterval(sayhello, 1000);

function createSecondlooper(n){
}
