script.js
 
 
// Liste des objectifs
 
// ajouter une tâche avec un champs de saisie et un bouton
// afficher la liste des tâches avec une case à cocher pour les marquer comme complétées
// supprimer une tâche
// sauvegarder les tâches dan sle localStorage
// recharger les tâches sauvegardée au chargement de la page
 
 
 
 
 
document.addEventListener("DOMContentLoaded", function() {
    loadTasks();
});
 
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
 
 
addTaskBtn.addEventListener("click", addTask);
 
 
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
 
 
function addTask() {
    let taskText = taskInput.value;
 
    if (taskText === "") {
        return;
    }
 
    let task = {
        id: new Date().getTime(),
        text: taskText,
        completed: false
    };
 
    saveTask(task);
    showTask(task);
 
    taskInput.value = "";
}
 
 
function showTask(task) {
    let li = document.createElement("li");
    li.setAttribute("data-id", task.id);
 
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", function() {
        toggleTask(task.id, checkbox.checked);
    });
 
    let span = document.createElement("span");
    span.textContent = task.text;
    if (task.completed) {
        span.style.textDecoration = "line-through";
    }
 
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.addEventListener("click", function() {
        removeTask(task.id);
        li.remove();
    });
 
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}
 
 
function toggleTask(taskId, isCompleted) {
    let tasks = getTasks();
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == taskId) {
            tasks[i].completed = isCompleted;
        }
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
 
function removeTask(taskId) {
    let tasks = getTasks();
    let newTasks = [];
 
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id != taskId) {
            newTasks.push(tasks[i]);
        }
    }
 
    localStorage.setItem("tasks", JSON.stringify(newTasks));
}
 
function saveTask(task) {
    let tasks = getTasks();
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
 
 
function loadTasks() {
    let tasks = getTasks();
    for (let i = 0; i < tasks.length; i++) {
        showTask(tasks[i]);
    }
}
 
 
function getTasks() {
    let tasks = localStorage.getItem("tasks");
    if (tasks) {
        return JSON.parse(tasks);
    } else {
        return [];
    }
}
 
 