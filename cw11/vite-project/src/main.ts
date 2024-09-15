import "./style.css";
import axios, { AxiosInstance } from "axios";
import { ITodos } from "./types/main";
import { renderTodo } from "./functions/renderFn";

export class Todos {
  private httpClient: AxiosInstance;
  private todos: ITodos[] = [];

  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://jsonplaceholder.typicode.com",
    });
  }

  async getTodos(): Promise<ITodos[]> {
    const response = await this.httpClient.get<ITodos[]>("/todos");
    for (let i = 0; i < 5 && i < response.data.length; i++) {
      renderTodo(response.data[i]);
    }
    this.todos = response.data;
    return response.data;
  }

  async createTodo(title: string): Promise<ITodos> {
    const response = await this.httpClient.post<ITodos>("/todos", {
      id: this.todos.length++,
      title,
      completed: false,
    });
    this.todos.push(response.data);
    renderTodo(response.data);
    return response.data;
  }

  async updateTodo(id: number, title: string): Promise<ITodos> {
    const response = await this.httpClient.put<ITodos>(`/todos/${id}`, {
      title,
    });
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.title = title;
      renderTodo(response.data);
    }
    return response.data;
  }

  async deleteTodo(id: number) {
    const response = await this.httpClient.delete(`/todos/${id}`);
    this.todos = this.todos.filter((t) => t.id !== id);
    renderTodo(response.data);
  }
}

const render = new Todos();
render.getTodos();
