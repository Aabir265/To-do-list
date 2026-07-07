const input = document.getElementById('input');
const listContainer = document.getElementById('task-list');

const Completed = document.getElementById("completed-counter");
const Uncompleted = document.getElementById("uncompleted-counter");

function updateCounters() {
    const completedTasks = listContainer.querySelectorAll(".completed").length;
    const uncompletedTasks = listContainer.querySelectorAll("li:not(.completed)").length;
    Completed.textContent = completedTasks;
    Uncompleted.textContent = uncompletedTasks;
}

function addTask() {
    const task = input.value.trim();
    if (!task) {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <label>
            <input type="checkbox">
            <span>${task}</span>
        </label>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;

    listContainer.appendChild(li);
    input.value = '';

const checkbox = li.querySelector("input");
const editBtn = li.querySelector(".edit-btn");
const taskSpan = li.querySelector("span");
const deleteBtn = li.querySelector(".delete-btn");

checkbox.addEventListener("click" , function(){
    li.classList.toggle("completed");
    updateCounters();
});

 editBtn.addEventListener("click", function () {
    const update = prompt("Edit task:", taskSpan.textContent);
    if (update !== null) {
      taskSpan.textContent = update;
      li.classList.remove("completed");
      checkbox.checked = false;
      updateCounters();
    }
  });

 deleteBtn.addEventListener("click", function () {
    if (confirm("Are you sure you want to delete this task?")) {
      li.remove();
      updateCounters();
    }
  });
  listContainer.appendChild(li);
input.value = "";
  updateCounters();
}