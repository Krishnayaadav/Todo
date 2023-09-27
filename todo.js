function addTask() {
    var taskInput = document.getElementById("task");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var newTask = document.createElement("li");
        newTask.innerHTML = taskText + ' <button onclick="removeTask(this)">Remove</button>';
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}

function removeTask(element) {
    element.parentElement.remove();
}
