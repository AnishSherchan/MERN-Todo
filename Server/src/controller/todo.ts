import express from "express";
import { createTodo } from "../db/todo";

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
