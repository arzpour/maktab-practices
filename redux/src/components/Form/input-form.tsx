import React from "react";
export interface IInputForm {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | undefined;
}
const InputForm: React.FC<IInputForm> = ({ value, label, onChange }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-800 font-medium mb-1">{label}</label>
      <input
        className="border border-gray-300 rounded-md shadow-sm bg-slate-100 px-2 py-1 focus:outline-none"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputForm;
