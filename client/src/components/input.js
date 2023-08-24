import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const InputField = ({
  icon: Icon,
  type,
  autoComplete,
  placeholder,
  register,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div
      className={`rounded-xl flex items-center gap-2 border bg-white p-2 focus:outline-none ${
        error ? "border-red-500 focus:ring-red-500" : ""
      }`}
    >
      {Icon && <Icon className=" text-[#607FE8]" />}
      <input
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`w-full bg-transparent border-none focus:outline-none`}
        {...register} // Spread the register props here
      />
      {type === "password" && (
        <button
          type="button"
          className=" text-[#607FE8]"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </button>
      )}
    </div>
  );
};

export default InputField;
