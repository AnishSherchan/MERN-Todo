import React from "react";

const Button = ({ type, title, handleClick }) => {
  let buttonStyle;
  switch (type) {
    case "primary":
      buttonStyle = "bg-primaryButton text-white";
      break;
    case "secondary":
      buttonStyle = "bg-white text-primaryButton border font-semibold";
      break;
    default:
      buttonStyle = "bg-primaryButton text-white";
      break;
  }
  return (
    <button
      onClick={handleClick}
      className={` w-full rounded-full font-medium shadow-lg p-2 px-3 ${buttonStyle}`}
    >
      {title}
    </button>
  );
};

export default Button;
