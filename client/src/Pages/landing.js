import React, { useState } from "react";
import Container from "../components/container";
import InputField from "../components/input";
import { useForm } from "react-hook-form";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import KeyIcon from "@mui/icons-material/Key";
import Button from "../components/button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import useFetch from "../utils/api";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const history = useNavigate();
  const [variant, setVariant] = useState("login");
  const { loading, postData } = useFetch();
  const {
    register,
    handleSubmit,
    // setValue,
    // reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (variant === "login") {
      try {
        const user = await postData("/auth/login", data);
        if (user) {
          toast.success("🦄 Welcome back!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          localStorage.setItem("token", user.auth.token);
          localStorage.setItem("id", user._id);
          history("/home");
        } else {
          throw new Error("Email or Password is invalid");
        }
      } catch (error) {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      try {
        const user = await postData("/auth/register", data);
        if (user) {
          toast.success(`User register Successful`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          history("/home");
        } else {
          throw new Error("User already exist");
        }
      } catch (error) {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
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
                required: "Email is required!",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email format",
                },
              }),
            }}
            error={errors.email}
          />
          <label className="text-red-500">{errors.email?.message}</label>
        </div>

        {variant === "register" && (
          <div>
            <InputField
              icon={AccountCircleIcon}
              type="text"
              autoComplete="username"
              placeholder="Username"
              register={{
                ...register("username", {
                  required: "Username is required!",
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
                required: "Password is required!",
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
          disable={loading}
          title={
            loading ? (
              <div className="flex items-center justify-center gap-3">
                <CircularProgress color="inherit" size="23px" /> Loading
              </div>
            ) : variant === "login" ? (
              "Login"
            ) : (
              "Register an Account"
            )
          }
          // title={<CircularProgress color="inherit" size="23px" />}
          handleClick={handleSubmit(onSubmit)}
        />
      </form>
      <div className=" -mt-4">
        <Button
          type="secondary"
          title={variant === "login" ? "Create An Account" : "Have an Account?"}
          handleClick={() => {
            setVariant((currentVariant) =>
              currentVariant === "login" ? "register" : "login"
            );
          }}
        />
      </div>
    </Container>
  );
};

export default Landing;
