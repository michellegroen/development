window.onload = function(){
	console.log("onload");
};

console.log("about");

var item = document.getElementById("image");
console.log(item);
item.addEventListener("mouseover", func, false);

function func()
{   
   document.getElementById("text").setAttribute("style", "display:block;")
}

