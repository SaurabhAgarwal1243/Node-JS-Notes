var oneobj = {
  key : 'value'
}
var otherobj = Object.create(oneobj);
otherobj.otherkey = 12345;

var anotherobj = Object.create(otherobj);
anotherobj.somebool = false;
function aFun(){
  console.log(this.somebool);
}
anotherobj.somefun = afun;
