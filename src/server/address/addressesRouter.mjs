// @flow

import Router from "express";

import type { $Request, $Response, $Router } from "express";

import * as address from "./address";

const addressesRouter: $Router = Router();

addressesRouter.get("/", (request: $Request, response: $Response) =>
  address.read((error, addresses) =>
    error
      ? response.status(500).send("error!")
      : response.send({ data: addresses })
  )
);

addressesRouter.get("/:id", (request: $Request, response: $Response) =>
  address.readById(request.param.id, (error, address) =>
    error
      ? response.status(500).send("error!")
      : response.send({ data: address })
  )
);

addressesRouter.post("/", (request: $Request, response: $Response) =>
  address.create(request.body, (error, newAddress) =>
    error
      ? response.status(500).send("error!")
      : response.send({ data: newAddress })
  )
);

export default addressesRouter;
