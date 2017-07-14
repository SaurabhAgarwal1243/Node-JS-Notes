var click = document.getElementsByClassName('click');
var name = document.getElementsByClassName('name');
var price = document.getElementsByClassName('Price');

var products = [];

click.onclick = clickFunction;

function clickFunction() {
	localStorage.setItem("products", JSON.stringify(name,price));
}
