//This lables the inputs and buttons I put in HTML
var num1Input = document.getElementById("input");
var num2Input = document.getElementById("input2");
var button = document.getElementById("button");
var dropdown = document.getElementById("select");
var num5Input = document.getElementById("answer");
var answer;

button.addEventListener("click", calcfunction)
//This code below tells the computer the value of the 2 inputs 
function calcfunction() {
    var num1 = parseInt(num1Input.value);
    var num2 = parseInt(num2Input.value);
//The code below shows the different functions you can choose in a calculator there is multiplication, division, adding, subtracting, squareroot and exponents
    if (dropdown.value == "*") {
        answer = num1 * num2;
        num5Input.innerHTML = answer;
    }
    else if (dropdown.value == "/") {
        answer = num1 / num2;
        num5Input.innerHTML = answer;
    }
    else if (dropdown.value == "+") {
        answer = num1 + num2;
        num5Input.innerHTML = answer;
    }
    else if (dropdown.value == "-") {
        answer = num1 - num2;
        num5Input.innerHTML = answer;
    }
    else if (dropdown.value == "^") {
        answer = Math.pow(num1, num2);
        num5Input.innerHTML = answer;
    }
    else if (dropdown.value == "√x") {
        answer = Math.sqrt(num1, num2);
        num5Input.innerHTML = answer;
    }
}
    