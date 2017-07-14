var obj = Object.create(Object.prototype, {
  key: {
    writable: true,
    configurable: true,
    value: 'some value'
  },
  anotherkey:{
    configurable: true,
    get: function(){
      return "you can't change this"
    }
    set: function(){
      console.log("Why are you even trying")
    }
  }
});

var o = {p:1, q:2}

Object.defineProperty(o , 'z', {
  writable:false;
  configurable:false;
})
