// Variables globales
let tasks = [];
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Chargement des tâches depuis localStorage
function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        try {
            tasks = JSON.parse(savedTasks);
        } catch (e) {
            console.error("Erreur lors du chargement des tâches:", e);
            tasks = [];
        }
    }
}

// Sauvegarde des tâches dans localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Affichage des tâches
function displayTasks() {
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'task-item';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.dataset.index = index;
        checkbox.addEventListener('change', toggleTask);
        
        const span = document.createElement('span');
        span.className = task.completed ? 'task-text completed' : 'task-text';
        span.textContent = task.text;
        
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'Supprimer';
        deleteButton.dataset.index = index;
        deleteButton.addEventListener('click', deleteTask);
        
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

// Ajout d'une tâche
function addTask() {
    const text = taskInput.value.trim();
    if (text !== '') {
        tasks.push({
            text: text,
            completed: false
        });
        taskInput.value = '';
        saveTasks();
        displayTasks();
    }
}

// Basculer l'état d'une tâche
function toggleTask(event) {
    const index = parseInt(event.target.dataset.index);
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    displayTasks();
}

// Supprimer une tâche
function deleteTask(event) {
    const index = parseInt(event.target.dataset.index);
    tasks.splice(index, 1);
    saveTasks();
    displayTasks();
}

// Initialisation
function init() {
    loadTasks();
    displayTasks();
    
    // Événements
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
}

// Démarrer l'application
document.addEventListener('DOMContentLoaded', init);