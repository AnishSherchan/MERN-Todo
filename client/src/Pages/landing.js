import React, { useState } from "react";
import Container from "../components/container";
import InputField from "../components/input";
import { useForm } from "react-hook-form";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import KeyIcon from "@mui/icons-material/Key";
import Button from "../components/button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Landing = () => {
  const [varient, setVarient] = useState("login");

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
                required: "Email is reqiured!",
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
          <label className="text-red-500">{errors.email?.message}</label>
        </div>

        {varient === "register" && (
          <div>
            <InputField
              icon={AccountCircleIcon}
              type="text"
              autoComplete="username"
              placeholder="Username"
              register={{
                ...register("username", {
                  required: "Username is reqiured!",
                  minLength: {
                    value: 4,
                    message: "Minimum length is 4 characters.",
                  },
                }),
              }}
              error={errors.username}
            />
            <label className="text-red-500 ">{errors.username?.message}</label>
          </div>
        )}

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
          <label className="text-red-500 ">{errors.password?.message}</label>
        </div>

        <Button
          type="primary"
          title={varient === "login" ? "Login" : "Register an Account"}
          handleClick={handleSubmit(onSubmit)}
        />
      </form>
      <div className=" -mt-4">
        <Button
          type="secondary"
          title={varient === "login" ? "Create An Account" : "Have an Account?"}
          handleClick={() => {
            setVarient((currentVarient) =>
              currentVarient === "login" ? "register" : "login"
            );
          }}
        />
      </div>
    </Container>
  );
};

export default Landing;
