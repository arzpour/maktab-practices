import { Todos } from "../main";
const todoInput = document.getElementById("todoInput") as HTMLInputElement;
const addTodo = document.getElementById("addTodo") as HTMLButtonElement;

export const createTodoRender = async (): Promise<void> => {
  const todoInputValue = todoInput.value;
  const render = new Todos();
  await render.createTodo(todoInputValue);
};

addTodo.addEventListener("click", createTodoRender);
