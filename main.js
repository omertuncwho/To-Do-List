let tasks = [];

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.name;
        if (task.completed) {
            li.classList.add("completed");
        }
        li.addEventListener("click", () => toggleTask(index));
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskName = taskInput.value.trim();
    if (taskName !== "") {
        tasks.push({ name: taskName, completed: false });
        taskInput.value = "";
        renderTasks();
    }
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

renderTasks();
