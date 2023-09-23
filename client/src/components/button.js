import React from "react";

const Button = ({ type, title, handleClick, disable, icon: Icon }) => {
  let buttonStyle;
  switch (type) {
    case "primary":
      buttonStyle = "bg-primaryButton text-white";
      break;
    case "secondary":
      buttonStyle = "bg-white text-primaryButton border font-semibold";
      break;
    case "button":
      buttonStyle = " bg-transparent shadow-none";
      break;
    default:
      buttonStyle = "bg-primaryButton text-white";
      break;
  }
  return (
    <button
      onClick={handleClick}
      disabled={disable}
      className={` w-full rounded-full font-medium shadow-lg p-2 px-3 ${buttonStyle}`}
    >
      {title ? title : <Icon />}
    </button>
  );
};

export default Button;
