var list = document.getElementById("list");
var guzik = document.getElementById('addElem');


guzik.addEventListener('click', function() {
	var x = document.getElementsByTagName("li").length;
	var element = document.createElement('li');
	list.appendChild(element);
	document.getElementsByTagName("li")[x].innerHTML = "item " + x;
})







