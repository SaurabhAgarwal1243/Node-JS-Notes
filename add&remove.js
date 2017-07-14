window.onload = init;

function init () {
    var button = document.getElementById("submitButton");
    button.onclick = addItem;
    var listItems = document.querySelectorAll("li");  //assigning the remove click event to all list items
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].onclick = li.parentNode.removeChild(li);
    }
}

function addItem() {
    var textInput = document.getElementById("item");  //getting text input
    var text = textInput.value;   //getting value of text input element
    var ul = document.getElementById("ul");  //getting element <ul> to add element to
    var li = document.createElement("li");  //creating li element to add
    li.innerHTML = text;    //inserting text into newly created <li> element

    if (ul.childElementCount == 0) {  //using if/else statement to add items to top of list
        ul.appendChild(li);       // will add if count of ul children is 0 otherwise add before first item
    }
    else {
        ul.insertBefore(li, ul.firstChild);
    }
}

function remove(e) {
    var li = e.target;
    var listItems = document.querySelectorAll("li");
    var ul = document.getElementById("ul");
    li.parentNode.removeChild(li);
}
