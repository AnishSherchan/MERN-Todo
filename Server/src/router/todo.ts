import express from "express";
import { createNewTodo } from "../controller/todo";

export default (router: express.Router) => {
  router.post("/todo/create", createNewTodo);
};
