window.alert("Hi Welcome here!!");
var list = document.getElementById("mylist");
window.onload = function(){
  var num = document.getElementById("num")
  var run = document.getElementById("run")
  var list = document.getElementById("mylist")
}
run.onclick = function(){
  var N = parseInt(num.value);
  list.innerHTML ="";
  var liststring = "";
  var start = (new Date()).getTime();
  for(var i = 1;i<=N;i++){
    if(i%5==0&&i%3==0){
      // list.innerHTML+="<li>"+ "fizzbuzz" +"</li>"
      // var li = document.createElement("li")
      // li.innerText = "fizzbuzz"
      // list.append(li);
      liststring+= "<li>" + "fizzbuzz" + "</li>"
    }
    else if(i%3==0){
      // list.innerHTML+="<li>"+ "fizz" +"</li>"
      // var li = document.createElement("li")
      // li.innerText = "fizz"
      // list.append(li);
      liststring+= "<li>" + "fizz" + "</li>"
    }
    else if(i%5==0){
      // list.innerHTML+="<li>"+ "buzz" +"</li>"
      // var li = document.createElement("li")
      // li.innerText = "buzz"
      // list.append(li);
      liststring+= "<li>" + "buzz" + "</li>"
    }

    else
      // list.innerHTML+="<li>"+ i +"</li>"
      // var li = document.createElement("li")
      // li.innerText = i
      // list.append(li);
      liststring+= "<li>" + i + "</li>"

  }
  list.innerHTML = liststring;
  console.log((new Date()).getTime() - start)
}
