import React from "react";

export interface IInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  error?: string;
}

export const InputForm: React.FC<IInput> = ({ label, error, ...props }) => {
  return (
    <>
      <div className="flex gap-4 items-center mt-9">
        <label className="text-gray-700 font-medium">{label}</label>
        <input
          className="border-b border-gray-600 outline-none px-2 py-1 rounded bg-inherit"
          {...props}
        />
      </div>
      {error && <p className="text-red-600 mt-2 text-sm font-medium">{error}</p>}
    </>
  );
};
