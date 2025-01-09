import React, { useState } from "react";
import { IInput } from "../types/main.d";

const Input: React.FC<IInput> = ({
  type,
  placeholder,
  validators,
  className,
  onChange,
  required,
}) => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (validators) {
      for (let validatorInput of validators) {
        if (!validatorInput.validator(event.target.value)) {
          setError(validatorInput.errorMessage);
          return;
        }
      }
    }
    setError("");
    if (onChange) {
      if (type === "checkbox") {
        onChange(event.target.checked);
      } else if (type === "number") {
        onChange(parseInt(event.target.value));
      } else {
        onChange(event.target.value);
      }
    }
  };

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChangeHandler}
        value={value}
        required={required}
        className={`mt-8 w-full px-5 py-4 border-b-2 outline-none ${className}`}
      />
      <p className={`text-red-500 text-sm mt-3 ${!error ? "hidden" : ""}`}>
        {error}
      </p>
      {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}
    </div>
  );
};
export default Input;
