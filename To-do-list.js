function addTask() {
    let taskInput = document.getElementById("task-input");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    li.textContent = taskText;

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function () {
        li.remove();
    };

    li.appendChild(removeButton);
    document.getElementById("task-list").appendChild(li);
    taskInput.value = "";
}