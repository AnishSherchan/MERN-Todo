import express from "express";
import { createNewTodo, getUserTodo } from "../controller/todo";

export default (router: express.Router) => {
  router.post("/todo/create", createNewTodo);
  router.get("/todo", getUserTodo);
};
