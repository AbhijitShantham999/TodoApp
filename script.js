const todoList = document.querySelector("#todo-list");
const input = document.querySelector("#input");
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function () {
  // if input is empty

  if (input.value.trim() === "") {
    alert("Write something");
  } else {
    const editBtn = document.createElement("button");
    editBtn.className = "edit";
    editBtn.textContent = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.textContent = "Delete";

    const todoTextSpan = document.createElement("span");
    todoTextSpan.className = "todo_text";
    todoTextSpan.innerHTML = input.value.trim();

    const li = document.createElement("li");
    li.className = "todo-item";

    li.appendChild(todoTextSpan);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);

    editBtn.addEventListener("click", function (e) {
      editTask(todoTextSpan,li);
    });

    deleteBtn.addEventListener("click", function (e) {
      deleteTask(li);
    });
    saveData();
  }
  input.value = "";
});

//function to delete
const deleteTask = (li) => {
  li.remove();
  saveData();
};

const editTask = (todoTextSpan, li) => {

  li.prependChild(document.createElement("input"));

  console.log(todoTextSpan.innerHTML);
};

//save to Local Storage

const saveData = () => {
  localStorage.setItem("Tasks", todoList.innerHTML);
};

const getData = () => {
  todoList.innerHTML = localStorage.getItem("Tasks");
  document.querySelectorAll(".delete").forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", function () {
      deleteBtn.parentElement.remove();
      saveData();
    });
  });
};
getData();
