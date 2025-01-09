import React, { useRef, useState } from "react";
import { IFileInput } from "../types/main.d";

const FileInput: React.FC<IFileInput> = ({ placeholder, onChange }) => {
  const [value, setValue] = useState<string>("");
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setValue(e.dataTransfer.files[0].name);
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setValue(e.target.files[0].name);
      if (onChange) {
        onChange(e.target.files[0].name);
      }
    }
  };

  const clickHandler = () => {
    inputRef.current?.click();
  };

  return (
    <div>
      <input
        type="file"
        className="hidden"
        ref={inputRef}
        onChange={onChangeHandler}
      />
      <div
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={clickHandler}
        className={`flex gap-3 items-center justify-center border-2 border-dashed ${
          dragActive ? " border-blue-500" : "border-gray-400"
        } mt-20 py-9 px-5 cursor-pointer`}
      >
        <img
          className="w-9"
          src="/images/icons8-upload-64 (1).png"
          alt="upload"
        />
        {value ? (
          <div className="text-base text-Gray_L">{value}</div>
        ) : (
          <p className="text-base text-Gray_L font-medium">{placeholder}</p>
        )}
      </div>
      <p className="text-base text-Gray_L mt-4">
        Attach file. File size of your documents should not exceed 10MB
      </p>
    </div>
  );
};
export default FileInput;
