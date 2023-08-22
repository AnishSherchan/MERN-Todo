import express from "express";
import { registerUser, userLogin } from "../controller/authentication";

export default (router: express.Router) => {
  router.post("/auth/register", registerUser);
  router.post("/auth/login", userLogin);
};
