import { Todos } from "../main";

const todoInput = document.getElementById("todoInput") as HTMLInputElement;
const todoList = document.getElementById("todo-list") as HTMLDivElement;
const render = new Todos();

todoList.addEventListener("click", async (e) => {
  const target = e.target as HTMLElement;
  const todoItem = target.closest(".todo") as HTMLDivElement;
  console.log(todoItem);

  const todoInputValue = todoInput.value;
  const id = parseInt(todoItem.getAttribute("data-id")!);
  if (todoItem) {
    if (target.classList.contains("update")) {
      if (todoInputValue === "") return;

      // const title = todoItem.querySelector(".title") as HTMLHeadingElement;
      const title = todoItem.children[1] as HTMLHeadingElement;
      // console.log(title);

      if (title) {
        title.innerText = todoInputValue;
      }
      await render.updateTodo(id, todoInputValue);
    }
  }
  if (target.classList.contains("delete")) {
    const todoItem = target.closest(".todo") as HTMLDivElement;
    todoItem.remove();
  }
});
