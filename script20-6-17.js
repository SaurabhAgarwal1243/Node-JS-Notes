console.log("hello");

var integer = 10;
var myfloat = 10.2;
var mystring = "this is a string";
var mybool = false;

var myobj = {
  key1 : "value1",
  key2 : 10,
  key3 : true
};

var myarr = ["bhsbvhsbv" ,12, {a:10}, true];

console.log(integer);
console.log(mystring.concat("it is another string"));
console.log(mystring.includes("his"));
console.log(mystring.replace("s","k"));
console.log(mystring.charAt(6));
console.log(mystring.lastIndexOf("s",4));
console.log(" efdudsbf ".trim() + "vshdbvj");
console.log(mystring.substring(2,6));
console.log(mystring.substr(5,1));



function findallindexesof(str , char){
  var arr = [];
  var k= -2;
  var j = str;
  for(var i=0; i<str.length;i++){
    if(str.charAt(i)== char){
      arr[k++]=i;
    }
  }
  return arr;
}
var arr1 = findallindexesof(mystring,"s");
console.log(arr1);

var arr2 = [1,2,3,"addfa"];
var arr3 = [1,2,3,4,5,6,7,8,9];
var arr4 = [1,2,3,4,5,6,7,8,9,10,11];

console.log(arr2);
console.log([1,2]==[1,2]);
console.log(arr3.slice(3,7));
console.log(arr3.splice(4,2));
console.log(arr3.splice(4,2, 10,11,12));
console.log(arr3.indexOf(3));
console.log(arr3.concat(23,24));
console.log(arr4.concat(arr2));
console.log(arr4.concat([arr3,arr2]));
console.log(arr4.join("-"));
console.log(arr4.join([1,2]));

var arr5 = [1,"a", true ,{a:10},[3,4]];
obj1 = {a:10,b:20,c:30}
console.log("--------------Normal for loop");
for (var i=0;i<arr5.length;i++){
  console.log(arr5[i]);
}
console.log("-------------- for of loop");
for (var i of arr5){
  console.log(i);
}
console.log("--------------for in loop");
for (var i in arr5){
  console.log(i);
}
console.log("--------------for in loop for objects");
for(var i in obj1){
  console.log(i + ":" + obj1[i]);
}
console.log("----------forEach");
arr4.forEach(function (item,index,arr)
{
  console.log(index + ":" + item);
  console.log(arr);
});
console.log("--------map");
var l = arr4.map(function(item, index,array)
{
  console.log(item);
  return (Math.sqrt);
});
console.log(arr4);
console.log(l);

console.log("--------reduce");
var r = arr4.reduce(function (acc,item, index,arr)
{
  // console.log("acc =" + acc);
  // console.log("item =" + item);
  // console.log("index =" + index);
  // return 0;
  return acc * item;

},10);
console.log(r);

var min = arr4.reduce(function(acc,item,index,arr)
{
  return Math.min(acc,item);
}, Number.MAX_SAFE_INTEGER);
console.log(min);

console.log("---------filter");

var f = arr4.filter(function(item,index,array)
{
  return item%2;
});
console.log(f);

var onlynums = arr5.filter((i)=> typeof i == "string");
console.log(onlynums);
