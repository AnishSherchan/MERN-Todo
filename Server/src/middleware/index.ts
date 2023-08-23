import express from "express";
import { getUserByToken } from "../db/users";

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const sessionToken = req.cookies["KeyTodo"];
    if (!sessionToken) {
      return res.sendStatus(403);
    }
    const existingUser = await getUserByToken(sessionToken);
    if (!existingUser) {
      return res.sendStatus(403);
    }
    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
