function getcounter(initval, deltaval){
  return {
    getval(){
      return initval;
    },
    incrval (){
       initval +=deltaval;
    },
    decval (){
      initval -= deltaval;
    }
  }
}
var counter = getcounter(10,3);

counter.getval();
counter.incrval();
counter.incrval();
counter.getval();
counter.decval();
counter.getval();
