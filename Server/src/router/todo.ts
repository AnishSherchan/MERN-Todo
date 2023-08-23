import express from "express";
import {
  createNewTodo,
  getUserTodo,
  deleteUserTodo,
  updateUserTodo,
} from "../controller/todo";

export default (router: express.Router) => {
  router.post("/todo/create", createNewTodo);
  router.get("/todo", getUserTodo);
  router.delete("/todo/delete", deleteUserTodo);
  router.put("/todo/update", updateUserTodo);
};
