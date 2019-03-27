// @flow

import Router from "express";

import type { $Request, $Response, $Router } from "express";

import * as user from "./user";

const usersRouter: $Router = Router();

usersRouter.get("/", (request: $Request, response: $Response) =>
  user.read((error, users) =>
    error ? response.status(500).send("error!") : response.send({ data: users })
  )
);

usersRouter.get("/:id", (request: $Request, response: $Response) =>
  user.readById(request.param.id, (error, user) =>
    error ? response.status(500).send("error!") : response.send({ data: user })
  )
);

usersRouter.post("/", (request: $Request, response: $Response) =>
  user.create(request.body, (error, newUser) =>
    error
      ? response.status(500).send("error!")
      : response.send({ data: newUser })
  )
);

export default usersRouter;
