"use client";

import { useState } from "react";

type propsInput = {
  name: string;
  text: string;
  bgColor: string;
  typeInput: "text" | "password";
};

const InputComponent = ({ name, text, bgColor, typeInput }: propsInput) => {
  const [inputValue, setInputValue] = useState("");

  const [isInputFocus, setIsInputFocus] = useState(false);

  const handleBlur = () => {
    if (inputValue === "") {
      setIsInputFocus(false);
    }
  };

  return (
    <label htmlFor={name} className="w-full h-full">
      <input
        className={`${bgColor} text-base font-sans w-full h-full pl-2 pt-2 rounded border-solid border border-slate-700 hover:bg-gray-100 focus:hover:bg-gray-50 focus:outline-none focus:border-purple-300 focus:shadow-as focus:shadow-purple-700 dark:border-purple-200 dark:focus:shadow-purple-200`}
        type={typeInput}
        name={name}
        id={name}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setIsInputFocus(true)}
        onBlur={handleBlur}
      />
      <span
        className={`select-none absolute left-0 translate-y-[-50%] transition-all ease-in-out ${
          isInputFocus
            ? "font-bold text-sm mt-3 ml-2 top-0"
            : "font-semibold text-base ml-2 top-2/4"
        } `}
      >
        {text}
      </span>
    </label>
  );
};

export default InputComponent;
