var a =10;
let aa = 10;
// const myconst = [1,2];
// myconst.push(3);
// console.log(myconst);
function myfun(){
  var b=20;
  console.log(a);
  console.log(b);
  console.log(aa);
  const myconst = [4,5,6];

  let ab = "outside";
  var ac = "outside";
  if (true){
    var c =45;
    // const myconst = [8,5,6];
    let ab = "inside";
    var ac = "inside"
    console.log(myconst);
    console.log(c);
    console.log(ab);
  }
  // console.log(myconst);
  console.log(ab);
  console.log(ac);
}
myfun();

var myvar= "some value";
function redeclare (){
   myvar = myvar + " bchsbfhs";
  console.log(myvar);
}
redeclare();
