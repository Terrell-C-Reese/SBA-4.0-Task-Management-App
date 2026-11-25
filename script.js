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
function getStatusBadge(status) {
  if (status === "Completed") {
    return "bg-success";
  } else if (status === "Overdue") {
    return "bg-danger";
  } else {
    return "bg-warning text-dark";
  }
}
function renderTasks() {
  taskListBody.innerHTML = "";

  const selectedStatus = filterStatusSelect.value;
  const selectedCategory = filterCategorySelect.value;

  const filteredTasks = tasks.filter(function (task) {
    let matchesStatus = false;
    if (selectedStatus === "All" || task.status === selectedStatus) {
      matchesStatus = true;
    }

    let matchesCategory = false;
    if (selectedCategory === "All" || task.category === selectedCategory) {
      matchesCategory = true;
    }

    return matchesStatus && matchesCategory;
  });

  if (filteredTasks.length === 0) {
    taskListBody.innerHTML = `
      <tr>
        <td colspan="5" class="text-center text-muted py-4">No tasks found.</td>
      </tr>
    `;
    return;
  }

  for (const task of filteredTasks) {
    const row = document.createElement("tr");
    if (task.status === "Completed") {
      row.classList.add("task-completed");
    }
    if (task.status === "Overdue") {
      row.classList.add("task-overdue");
    }

    const nameCell = document.createElement("td");
    nameCell.className = "fw-medium task-title";
    nameCell.textContent = task.name;

    const categoryCell = document.createElement("td");
    categoryCell.innerHTML = `<span class="badge bg-secondary">${task.category}</span>`;

    const deadlineCell = document.createElement("td");
    deadlineCell.textContent = task.deadline;

    const statusCell = document.createElement("td");
    const badgeClass = getStatusBadge(task.status);
    statusCell.innerHTML = `<span class="badge ${badgeClass}">${task.status}</span>`;

    const actionCell = document.createElement("td");
    const statusSelect = document.createElement("select");
    statusSelect.className = "form-select form-select-sm w-auto";

    const options = ["In Progress", "Completed", "Overdue"];
    for (let i = 0; i < options.length; i++) {
      const option = document.createElement("option");
      option.value = options[i];
      option.textContent = options[i];
      if (task.status === options[i]) {
        option.selected = true;
      }
      statusSelect.appendChild(option);
    }

    statusSelect.addEventListener("change", function () {
      updateTaskStatus(task.id, statusSelect.value);
    });

    actionCell.appendChild(statusSelect);

    row.appendChild(nameCell);
    row.appendChild(categoryCell);
    row.appendChild(deadlineCell);
    row.appendChild(statusCell);
    row.appendChild(actionCell);

    taskListBody.appendChild(row);
  }
}

addTaskBtn.addEventListener("click", addTask);
filterStatusSelect.addEventListener("change", renderTasks);
filterCategorySelect.addEventListener("change", renderTasks);

checkOverdueTasks();
renderTasks();