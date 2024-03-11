import React from "react";
import { InputProps } from "./Input.props";

const Input: React.FC<InputProps> = (inputProps) => {
  const { label } = inputProps;
  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-brand-blue font-bold " htmlFor={label}>
          {label}
        </label>
      )}

      <input
        id={label ?? ""}
        className="border-1  mt-2 p-2 rounded-xl "
        {...inputProps}
      />
    </div>
  );
};

export default Input;
