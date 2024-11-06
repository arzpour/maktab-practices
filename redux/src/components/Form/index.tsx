import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import InputForm from "./input-form";
import { todoActions } from "../../redux/features/todoSlice";
import { useAppDispatch } from "../../redux/hooks";
import { ITodos } from "../../types/todo.type";
let idCounter = 1;

const TodoForm: React.FC<ITodos> = () => {
  const { handleSubmit, control } = useForm<ITodos>();
  const dispatch = useAppDispatch();

  const handleSubmitForm: SubmitHandler<ITodos> = (data) => {
    console.log(data);
    const uniqueTodo = { ...data, id: (idCounter += 1) };
    dispatch(todoActions.addTodo(uniqueTodo));
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="w-96 rounded-lg shadow-md p-3 space-y-5 flex flex-col"
    >
      <Controller
        name="todo"
        control={control}
        render={({ field }) => <InputForm label="title" {...field} />}
      />
      <button
        className="bg-blue-400 rounded py-1.5 font-medium text-white"
        type="submit"
      >
        submit
      </button>
    </form>
  );
};

export default TodoForm;
