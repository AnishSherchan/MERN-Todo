import express from "express";
import { createUser, getUserByEmail } from "../db/users";
import { random, authentication } from "../helpers";

export const registerUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { email, password, username } = req.body;
    if (!email || !password || !username) {
      return res.sendStatus(400);
    }
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.sendStatus(400);
    }
    const salt = random();
    const user = await createUser({
      email,
      username,
      auth: {
        salt,
        password: authentication(salt, password),
      },
    });

    // Creating token in first register session
    const user_token = await getUserByEmail(email).select(
      "+auth.password +auth.salt +auth.token"
    );
    user_token.auth.token = authentication(salt, user._id.toString());
    await user_token.save();
    return res.status(200).json(user_token).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const userLogin = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.sendStatus(400);
    }
    const user = await getUserByEmail(email).select(
      "+auth.password +auth.salt +auth.token"
    );
    if (!user) {
      return res.sendStatus(400);
    }
    const expectedHash = authentication(user.auth.salt, password);
    if (expectedHash !== user.auth.password) {
      return res.sendStatus(403);
    }
    // ? Technique for regenerating new token each time user logins
    // const salt = random();
    // user.auth.token = authentication(salt, user._id.toString());
    // await user.save();
    // res.cookie("KeyTodo", user.auth.token);
    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
