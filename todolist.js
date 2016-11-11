/* These variables below represents the buttons in html and they will be defined */
var todoinput = document.getElementById("inputbar");
var todooptions = document.getElementById("options");
var todooptions2 = document.getElementById("options2");
var todosubmit = document.getElementById("submit");
var remove = document.getElementById("remove");
var todo = document.getElementById("todo");
var answer;

todosubmit.addEventListener("click", todofunction);
function todofunction() {
    var task = "<div>" + todoinput.value + "</div>";
    todo.innerHTML = todo.innerHTML + task;
}

todo.addEventListener("click",removefunction);
function removefunction(evt) { 
var task = evt.target;
    task.parentNode.removeChild(task);
}

todosubmit.addEventListener("click",optionfunction);
function optionfunction() {

if (todooptions.value === "blue") {
       todoinput.value = todo;
    todo.style.color = "blue";
}
else if (todooptions.value === "green") {
        todoinput.value = todo;
        todo.style.color = "green"; 
}
else if (todooptions.value === "red") {
        todoinput.value = todo;
        todo.style.color = "red"; 
}
else if (todooptions.value === "yellow") {
        todoinput.value = todo;
        todo.style.color = "yellow"; 
}
}

todosubmit.addEventListener("click",option2function);
function option2function() {

if (todooptions2.value == "underline") {
    todoinput.value = todo;
    todo.style.textDecoration = "underline";
}

if (todooptions2.value == "italic") {
    todoinput.value = todo;
    todo.style.fontStyle = "italic";
}
}