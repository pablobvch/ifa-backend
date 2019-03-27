// @flow

import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import addressesRouter from "./address/addressesRouter";
import usersRouter from "./user/usersRouter";

import dbConfig from "../config/dbConfig";

import type { $Application } from "express";

dotenv.config();

const PORT = 8080;

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig[process.env.NODE_ENV].mongoDbUri);

const app: $Application = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use("/addresses", addressesRouter);
app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
