import React, { useState } from "react";
import Container from "../components/container";
import InputField from "../components/input";
import { useForm } from "react-hook-form";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import KeyIcon from "@mui/icons-material/Key";

const Landing = () => {
  const [varient, setVarient] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <h1 className=" text-center text-2xl font-semibold">Welcome Back</h1>
      <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-4">
        <div>
          <InputField
            icon={AlternateEmailIcon}
            type="text"
            placeholder="Enter your email"
            autoComplete="email"
            register={{
              ...register("email", {
                required: "Email is empty!",
                maxLength: {
                  value: 30,
                  message: "Exceeds maximum length of 20 characters!",
                },
                minLength: {
                  value: 4,
                  message: "Minimum length is 4 characters.",
                },
              }),
            }}
            error={errors.email}
          />
          <label className="text-red-500 text-xs">
            {errors.email?.message}
          </label>
        </div>

        <div>
          <InputField
            icon={KeyIcon}
            type="password"
            autoComplete="password"
            placeholder="Enter your password"
            register={{
              ...register("password", {
                required: "Password is reqiured!",
                minLength: {
                  value: 4,
                  message: "Minimum length is 4 characters.",
                },
              }),
            }}
            error={errors.password}
          />
          <label className="text-red-500 text-xs">
            {errors.password?.message}
          </label>
        </div>

        <button
          onClick={handleSubmit(onSubmit)}
          className=" text-white w-full  bg-[#3F3D56] rounded-full p-2 px-3"
        >
          Submit
        </button>
      </form>
    </Container>
  );
};

export default Landing;