function Shape(edges , faces){
  this.edges = edges;
  this.faces = faces;
}
Shape.prototype.getedgesfacessum = function (){
  return this.edges + this.faces;
}

var cube = new Shape(20,12);
var square = new Shape(5,4);


var triangle = Object.create(Shape)
