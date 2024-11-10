import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import TodoForm from "../Form";
import { todoActions } from "../../redux/features/todoSlice";
import getTodoRes from "../../apis/todo.api";
import { ITodos } from "../../types/todo.type";
import { getTodoActions } from "../../redux/features/getTodoSlice";

const Todo: React.FC = () => {
  const todos = useAppSelector((state) => state.todoList.todo);
  const getTodos = useAppSelector((state) => state.todoList.getTodo);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getTodoRes());
  }, [dispatch]);

  return (
    <div className="mt-10">
      <TodoForm />

      {getTodos.list.todos?.slice(0, 3).map((el: ITodos) => (
        <div
          key={el.id}
          className="flex gap-4 justify-between items-center shadow-md p-4 w-96 mt-5 bg-gray-50 rounded-md"
        >
          <span>{el.todo}</span>
          <button
            className="rounder py-1.5 text-sm bg-red-600 rounded px-4 text-white"
            onClick={() => {
              dispatch(getTodoActions.removeTodo(el.id!));
            }}
          >
            delete
          </button>
        </div>
      ))}

      {todos.list.map((el) => {
        return (
          <div
            key={el.id}
            className="flex gap-4 justify-between items-center shadow-md p-4 w-96 mt-5 bg-gray-50 rounded-md"
          >
            <span>{el.todo}</span>
            <button
              className="rounder py-1.5 text-sm bg-red-600 rounded px-4 text-white"
              onClick={() => {
                dispatch(todoActions.removeTodo(el.id!));
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
