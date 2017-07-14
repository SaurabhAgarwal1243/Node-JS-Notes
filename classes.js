function person(firstname,lastname){
  //like private variables
  var firstinitial = firstname.charAt(0);
  var lastinitial = lastname.charAt(0);
  //like public variables
  this.firstname = name;
  this.lastname = lastname;
  //like public functions
  this.getname = function() {
    return firstname + ' ' + lastname;
  }
  // like private functions
  var getInitials = function(){
    return firstinitial + '.' + lastinitial + '.';
  }
  this.getfullname = function(){
    return this.getname() + '(' + getInitials() + ')';
  }
}
var p =new person("saurabh","agarwal");
console.log(p);
