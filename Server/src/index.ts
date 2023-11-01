import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";
require("dotenv").config();

const app = express();
const allowedOrigins = [
  "http://localhost:3000",
  "https://mern-todo-hazel.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true, // enable set cookie
  })
);

app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());

const server = http.createServer(app);

server.listen(5000, () => {
  console.log("Server Started 🎉");
});

mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on("error", (error: Error) => {
  console.log(error);
});
mongoose.connection.on("connected", () => {
  console.log("MongoDb connect");
});
app.use(router());
// ?Example Route
// app.get("/", (req: express.Request, res: express.Response) => {
//   const hi = { user: "hi" };
//   res.json(hi);
// });
