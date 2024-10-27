const button = document.querySelector("#add-button");
const list_container = document.querySelector("#list-container");
const input_box = document.querySelector("#input-box");

button.onclick = addTask;

function addTask() {
    if(input_box.value === '') {
        alert("You must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        list_container.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.append(span);
    }
    input_box.value = '';
    saveData();
}

list_container.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", list_container.innerHTML);
}

function showTask() {
    list_container.innerHTML = localStorage.getItem("data");
}
showTask();