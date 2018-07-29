var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
console.log(color1.value);
var body=document.querySelector("body");
var h3 = document.querySelector('h3');
	// color1.value=body.style.background;
// console.log(body.style.background);
// h3.textContent = 
function setGradient(){	
body.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";
// console.log(body.style.background+"here");
h3.textContent=body.style.background;
}

color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);
		
	console.log(h3.style.color);

function get(o){
	var linear = window.getComputedStyle(document.body,null).getPropertyValue('background-image');

}