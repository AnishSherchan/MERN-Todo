import express from "express";
import { createTodo, getTodo } from "../db/todo";

export const getUserTodo = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { user_id } = req.body;
    if (!user_id) {
      res.sendStatus(400);
    }
    const todos = await getTodo(user_id);
    return res.status(200).json(todos).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const createNewTodo = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { title, status, user } = req.body;

    if (!title || status === undefined || !user) {
      return res.sendStatus(400);
    }

    const todo = await createTodo({
      title,
      status,
      user,
    });

    return res.status(200).json(todo).end();
  } catch (error) {
    console.error("Error:", error); // Add this line for debugging
    return res.sendStatus(400);
  }
};
