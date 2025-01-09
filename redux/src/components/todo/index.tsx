import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import TodoForm from "../Form";
import getTodoRes from "../../apis/todo.api";
import { ITodos } from "../../types/todo.type";
import { getTodoActions } from "../../redux/features/getTodoSlice";
import { useRecoilState } from "recoil";
import { todoList } from "../../recoil-Js/state";

const Todo: React.FC = () => {
  const todos = useAppSelector((state) => state.todoList.todo);
  const getTodos = useAppSelector((state) => state.todoList.getTodo);
  console.log(getTodos);

  const dispatch = useAppDispatch();

  const [todosList, setTodosList] = useRecoilState(todoList);

  const newList = getTodos.list.todos;

  setTodosList(newList || []);
  console.log(todosList);

  const toggleComplete = (id: number) => {
    setTodosList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  React.useEffect(() => {
    dispatch(getTodoRes());
  }, [dispatch]);

  return (
    <div className="mt-10">
      <TodoForm />

      <p>Inprogress Todos</p>
      {getTodos.list.todos
        ?.slice(0, 3)
        .filter((el) => el.completed)
        .map((el: ITodos) => (
          <div
            key={el.id}
            className="flex flex-col gap-4 justify-between shadow-md p-4 w-96 my-5 bg-gray-50 rounded-md"
          >
            <span>{el.todo}</span>
            <div className="flex gap-4">
              <button
                className="rounder w-full py-1.5 text-sm bg-orange-500 rounded px-4 text-white"
                onClick={() => toggleComplete(el.id!)}
              >
                Inprogress
              </button>
              <button
                className="rounder w-full py-1.5 text-sm bg-red-600 rounded px-4 text-white"
                onClick={() => {
                  dispatch(getTodoActions.removeTodo(el.id!));
                }}
              >
                delete
              </button>
            </div>
          </div>
        ))}

      <p>Completed Todos</p>

      {getTodos.list.todos
        ?.slice(0, 3)
        .filter((el) => !el.completed)
        .map((el: ITodos) => (
          <div
            key={el.id}
            className="flex flex-col gap-4 justify-between shadow-md p-4 w-96 my-5 bg-gray-50 rounded-md"
          >
            <span>{el.todo}</span>
            <div className="flex gap-4">
              <button
                className="rounder w-full py-1.5 text-sm bg-green-600 rounded px-4 text-white"
                onClick={() => toggleComplete(el.id!)}
              >
                Completed
              </button>
              <button
                className="rounder w-full py-1.5 text-sm bg-red-600 rounded px-4 text-white"
                onClick={() => {
                  dispatch(getTodoActions.removeTodo(el.id!));
                }}
              >
                delete
              </button>
            </div>
          </div>
        ))}

      {todos.list.map((el) => {
        return (
          <div
            key={el.id}
            className="flex gap-4 justify-between items-center shadow-md p-4 w-96 my-5 bg-gray-50 rounded-md"
          >
            <span>{el.todo}</span>

            <div className="flex gap-4">
              <button
                className="rounder w-full py-1.5 text-sm bg-orange-500 rounded px-4 text-white"
                onClick={() => toggleComplete(el.id!)}
              >
                Inprogress
              </button>
              <button
                className="rounder w-full py-1.5 text-sm bg-red-600 rounded px-4 text-white"
                onClick={() => {
                  dispatch(getTodoActions.removeTodo(el.id!));
                }}
              >
                delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
