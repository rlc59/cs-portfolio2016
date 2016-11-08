var todoinput = document.getElementById("inputbar");
var todooptions = document.getElementById("options");
var todosubmit = document.getElementById("submit");
var remove = document.getElementById("remove");
var todo = document.getElementById("todo");

todosubmit.addEventListener("click", todofunction);
function todofunction() {
    var task = "<div>" + todoinput.value + "</div>";
    todo.innerHTML = todo.innerHTML + task;
}

todo.addEventListener("click",removefunction);

function removefunction;
