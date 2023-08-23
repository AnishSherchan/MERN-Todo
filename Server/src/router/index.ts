import express from "express";
import authentication from "./authentication";
import todo from "./todo";
const router = express.Router();

export default (): express.Router => {
  authentication(router);
  todo(router);
  return router;
};
