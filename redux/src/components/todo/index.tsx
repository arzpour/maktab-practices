import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import TodoForm from "../Form";
import { todoActions } from "../../redux/features/todoSlice";

const Todo: React.FC = () => {
  const todos = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  return (
    <div className="mt-10">
      <TodoForm />
      {todos.list.map((el) => {
        return (
          <div
            key={el.id}
            className="flex gap-12 justify-between items-center shadow p-4 w-96 mt-10"
          >
            <span>{el.todo}</span>
            <button
              className="rounder py-1.5 text-sm bg-red-600 rounded px-4 text-white"
              onClick={() => {
                dispatch(todoActions.removeTodo(el.id!));
                console.log(el.id);
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
