
window.onload = function () {
  var mydiv = document.getElementById('mydiv');
  console.log(mydiv);
  let one = document.getElementById('one');
  let two = document.getElementById('two');
  let three = document.getElementById('three');

  // mydiv.onclick = function(){
  // 	console.log('Div has been clicked');
  // }

  // mydiv.addEventListener('click' , function(){
  //   console.log('clicked');
  // })
  
  
  // mydiv.addEventListener('mouseover' , function(){
  //   console.log('mouseover');
  // })
  // mydiv.addEventListener('mouseup' , function(){
  //   console.log('mouseup');
  // })

  // mydiv.addEventListener('mousedown' , function(){
  //   console.log('mousedown');
  // })

  function clicked(){
  	console.log(event.target.id);
  }

  one.addEventListener('click' , () => {
  	console.log('one clicked');
  }, true);
  two.addEventListener('click' , () => {
  	console.log('two clicked');
  }, true);
  three.addEventListener('click' , () => {
  	console.log('three clicked');
  }, true);
};
