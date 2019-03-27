// 

import Router from "express";


import * as address from "./address";

const addressesRouter = Router();

addressesRouter.get("/", (request, response) =>
  address.read((error, addresses) =>
    error
      ? response.status(500).send("error!")
      : response.send({ data: addresses })
  )
);

addressesRouter.get("/:id", (request, response) =>
  address.readById(request.param.id, (error, address) =>
    error
      ? response.status(500).send("error!")
      : response.send({ data: address })
  )
);

addressesRouter.post("/", (request, response) =>
  address.create(request.body, (error, newAddress) =>
    error
      ? response.status(500).send("error!")
      : response.send({ data: newAddress })
  )
);

export default addressesRouter;
