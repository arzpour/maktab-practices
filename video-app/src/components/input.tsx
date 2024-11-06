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
      <div className="mt-3">
        <label className="text-gray-700 text-sm font-medium pb-2 block">
          {label}
        </label>
        <input
          className="border border-gray-600 outline-none px-2 py-1 rounded bg-inherit w-full"
          {...props}
        />
      </div>
      {error && (
        <p className="text-red-600 mt-2 text-xs font-medium">{error}</p>
      )}
    </>
  );
};
