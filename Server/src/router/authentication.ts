import express from "express";
import { registerUser } from "../controller/authentication";

export default (router: express.Router) => {
  router.post("/auth/register", registerUser);
};
