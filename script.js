let tasks = [];

const savedTasks = localStorage.getItem("tasks");
if (savedTasks !== null) {
  tasks = JSON.parse(savedTasks);
}

const taskNameInput = document.getElementById("taskName");
const taskCategoryInput = document.getElementById("taskCategory");
const taskDeadlineInput = document.getElementById("taskDeadline");
const taskStatusInput = document.getElementById("taskStatus");
const addTaskBtn = document.getElementById("addTaskBtn");

const filterStatusSelect = document.getElementById("filterStatus");
const filterCategorySelect = document.getElementById("filterCategory");
const taskListBody = document.getElementById("taskListBody");

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function checkOverdueTasks() {
  const now = new Date();
  const year = now.getFullYear();
  let month = String(now.getMonth() + 1);
  let day = String(now.getDate());

  if (month.length < 2) {
    month = "0" + month;
  }
  if (day.length < 2) {
    day = "0" + day;
  }

  const today = year + "-" + month + "-" + day;

  for (const task of tasks) {
    if (task.status !== "Completed" && task.deadline < today) {
      task.status = "Overdue";
    }
  }

  saveTasks();
}

function addTask() {
  const name = taskNameInput.value.trim();
  const category = taskCategoryInput.value;
  const deadline = taskDeadlineInput.value;
  const status = taskStatusInput.value;

  if (name === "" || deadline === "") {
    alert("Please enter both a task name and a deadline.");
    return;
  }

  const newTask = {
    id: Date.now(),
    name: name,
    category: category,
    deadline: deadline,
    status: status
  };

  tasks.push(newTask);
  checkOverdueTasks();
  saveTasks();
  renderTasks();

  taskNameInput.value = "";
  taskDeadlineInput.value = "";
}

function updateTaskStatus(taskId, newStatus) {
  const foundTask = tasks.find(function (task) {
    return task.id === taskId;
  });

  if (foundTask) {
    foundTask.status = newStatus;
  }

  checkOverdueTasks();
  saveTasks();
  renderTasks();
}