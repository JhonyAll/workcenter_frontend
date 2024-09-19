import { useState } from "react";

type propsButton = {
  text: string;
  bgColor: string;
  hoverBgColor: string;
  darkBgColor: string;
  hoverDarkBgColor: string;
  textColor: string;
  buttonSubmit: boolean;
};

const ButtonComponent = ({
  text,
  bgColor,
  darkBgColor,
  textColor,
  hoverBgColor,
  hoverDarkBgColor,
  buttonSubmit,
}: propsButton) => {
  return (
    <button
      type={buttonSubmit ? "submit" : "button"}
      className={`${
        bgColor + textColor
      } font-bold select-none w-full h-14 rounded hover:${hoverBgColor} dark:${darkBgColor} dark:hover:${hoverDarkBgColor}`}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
