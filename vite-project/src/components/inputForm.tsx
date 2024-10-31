import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { InputForm } from "./input";
import { TForm } from "../types/video.type";
import { videoActions } from "../redux/features/video.slice";
import { useAppDispatch } from "../redux/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { inputValidation } from "../validations/inputs.validations";

export const InputsForm: React.FC = () => {
  const { handleSubmit, control, reset } = useForm<TForm>({
    mode: "all",
    resolver: zodResolver(inputValidation),
  });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<TForm> = (data) => {
    console.log(data);
    const videoData = { ...data, id: Date.now() };
    dispatch(videoActions.addVideo(videoData));
    reset({ name: "", rating: "", genre: "" });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-10 w-1/2 lg:w-1/3">
      <h2 className="text-gray-700 font-bold text-xl pb-3">ADD VIDEO</h2>
      <Controller
        control={control}
        name="name"
        render={({ field, fieldState }) => {
          return (
            <InputForm
              type="text"
              label="Name:"
              error={fieldState.error?.message}
              {...field}
            />
          );
        }}
      />
      <Controller
        control={control}
        name="rating"
        render={({ field, fieldState }) => {
          return (
            <InputForm
              type="text"
              label="Rating:"
              error={fieldState.error?.message}
              {...field}
            />
          );
        }}
      />
      <Controller
        control={control}
        name="genre"
        render={({ field, fieldState }) => {
          return (
            <InputForm
              type="text"
              label="Genre:"
              error={fieldState.error?.message}
              {...field}
            />
          );
        }}
      />

      <button
        className="bg-gray-800 text-white mt-5 w-full font-semibold py-1.5 px-6 rounded-md"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};
