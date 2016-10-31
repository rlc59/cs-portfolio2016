// Creates Variables and saves DOM Elements
var newBGColor = document.getElementById("newBGColor");
var colorChangeBUtton = document.getElementById("colorChangeBUtton");

/* EventListener for Button.
    Sets the body's background color to the user provided value */
    
colorChangeBUtton.addEventListener("click",function(){ 
document.body.style.backgroundColor = newBGColor. value; 
})