const todoList = [];

const todoListElement = document.querySelector("#myUL");

document.querySelector("#add_button").addEventListener("click", addTodo);
document.querySelector("#overlap-group").addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    addTodo()
  }
});

function addTodo() {
    const todoText = document.querySelector("#overlap-group").value;
  
    if (todoText == "") {
      alert("You did not enter any item");
    } else {
      const todoObject = {
        id: todoList.length,
        todoText: todoText,
        isDone: false,
      };

      todoList.unshift(todoObject);
      displayTodos();
      window.location.href = "list.html";
    }
  }

  function doneTodo(todoId) {
    const selectedTodoIndex = todoList.findIndex((item) => item.id == todoId);
  
    todoList[selectedTodoIndex].isDone
      ? (todoList[selectedTodoIndex].isDone = false)
      : (todoList[selectedTodoIndex].isDone = true);
    displayTodos();
  }
