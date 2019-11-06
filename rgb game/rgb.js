var colorSquare = 6;
var colors = generateRandomcolor(colorSquare);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var displayMessage=document.querySelector("#message");
var resetbtn = document.querySelector('#resetbtn');
var easybtn = document.querySelector('#easybtn');
var hardbtn = document.querySelector('#hardbtn');
var pickedcolor = pickColor();
colorDisplay.textContent=pickedcolor;

for (var i=0;i<squares.length;i++){
	squares[i].style.background=colors[i];


 squares[i].addEventListener("click",function (){
   var clickedColor = this.style.backgroundColor;
   if (clickedColor===pickedcolor) {
   displayMessage.textContent="right";
   changeColors(clickedColor); 
   resetbtn.textContent="PLAY AGAIN?";
 }
 else{
 	displayMessage.textContent="wrong";
 	this.style.background="#232323";
 }
});
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}


function changeColors (color){
	for (var i=0; i<squares.length;i++){
		squares[i].style.background=color;
	}
}

function generateRandomcolor(num){
	var arr = []
	for (var i=0; i<num;i++){
    arr.push(randomcolor());
	}
	return arr;
}

function randomcolor (){
var r = Math.floor(Math.random()*256);
var g = Math.floor(Math.random()*256);
var b = Math.floor(Math.random()*256);
return "rgb("+r+", "+g+", "+b+")";
}

resetbtn.addEventListener("click",function(){
  resetbtn.textContent="NEW COLORS";
  erase();
  colors = generateRandomcolor(colorSquare);
  pickedcolor = pickColor();
  colorDisplay.textContent=pickedcolor;
  for (var i=0;i<squares.length;i++){
  	squares[i].style.background=colors[i];
  }

})

easybtn.addEventListener("click",function(){
 easybtn.classList.add("selected");
 hardbtn.classList.remove("selected");
  erase();
 colorSquare=3;
 colors = generateRandomcolor(colorSquare);
 pickedcolor = pickColor();
 colorDisplay.textContent=pickedcolor;

 for (var i=0;i<squares.length;i++){
 	if (colors[i]) {
 		squares[i].style.background=colors[i];
 	}
 	else{
 		squares[i].style.display="none";
 	}
 }

});
hardbtn.addEventListener("click",function(){
 easybtn.classList.remove("selected");
hardbtn.classList.add("selected");
 erase();
 colorSquare=6;
 colors = generateRandomcolor(colorSquare);
 pickedcolor = pickColor();
 colorDisplay.textContent=pickedcolor;

 for (var i=0;i<squares.length;i++){

 		squares[i].style.background=colors[i];
        squares[i].style.display="block";
 }
	
})
function erase (){
	displayMessage.textContent="";
	return erase;
}





