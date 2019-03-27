// 

import Router from "express";


import * as user from "./user";

const usersRouter = Router();

usersRouter.get("/", (request, response) =>
  user.read((error, users) =>
    error ? response.status(500).send("error!") : response.send({ data: users })
  )
);

usersRouter.get("/:id", (request, response) =>
  user.readById(request.param.id, (error, user) =>
    error ? response.status(500).send("error!") : response.send({ data: user })
  )
);

usersRouter.post("/", (request, response) =>
  user.create(request.body, (error, newUser) =>
    error
      ? response.status(500).send("error!")
      : response.send({ data: newUser })
  )
);

export default usersRouter;
