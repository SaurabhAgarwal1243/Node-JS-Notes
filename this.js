// this. p="hello";
// console.log(this);
// console.log(p);
// function randofun(){
//   if(true){
//
//   var  k=10;
//   }
//
// }
// randofun();

function person(name){
  this.name = name;
}
let p =new person("arnav")
console.log(p);
