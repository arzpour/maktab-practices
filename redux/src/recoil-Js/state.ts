import { atom, selector } from "recoil";
import { ITodos } from "../types/todo.type";

export const todoList = atom<ITodos[]>({
  key: "todoList",
  default: [],
});

export const todoFilter = atom<string>({
  key: "todoFilter",
  default: "All",
});

export const filteredTodoList = selector({
  key: "filteredTodoList",
  get: ({ get }) => {
    const list = get(todoList);
    const filter = get(todoFilter);

    console.log(list);

    switch (filter) {
      case "Completed":
        return list.filter((el) => el.completed);
      case "Inprogress":
        return list.filter((el) => !el.completed);
      default:
        list;
        break;
    }
  },
});
