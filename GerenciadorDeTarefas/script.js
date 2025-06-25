// script.js
let tasks = [];

function renderTasks() {
  const todoList = document.getElementById("todoList");
  const doneList = document.getElementById("doneList");
  todoList.innerHTML = "";
  doneList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.done ? "done" : "";
    li.innerHTML = `
      <span>${task.text}</span>
      <div>
        <button onclick="toggleDone(${index})">${task.done ? "Desfazer" : "Feito"}</button>
        <button onclick="editTask(${index})">Editar</button>
        <button onclick="deleteTask(${index})">Excluir</button>
      </div>
    `;
    if (task.done) {
      doneList.appendChild(li);
    } else {
      todoList.appendChild(li);
    }
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (text !== "") { 
    tasks.push({ text, done: false });
    input.value = "";
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function toggleDone(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

function editTask(index) {
  const newText = prompt("Editar tarefa:", tasks[index].text);
  if (newText !== null && newText.trim() !== "") {
    tasks[index].text = newText.trim();
    renderTasks();
  }
}

function sortTasks() {
  tasks.sort((a, b) => a.text.localeCompare(b.text));
  renderTasks();
}

// Inicializa
renderTasks();