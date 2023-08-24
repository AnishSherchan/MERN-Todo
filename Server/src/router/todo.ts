import express from "express";
import {
  createNewTodo,
  getUserTodo,
  deleteUserTodo,
  updateUserTodo,
} from "../controller/todo";
import { isAuthenticated } from "../middleware";

export default (router: express.Router) => {
  router.post("/todo/create", isAuthenticated, createNewTodo);
  router.get("/todo", isAuthenticated, getUserTodo);
  router.delete("/todo/delete", isAuthenticated, deleteUserTodo);
  router.put("/todo/update", isAuthenticated, updateUserTodo);
};
