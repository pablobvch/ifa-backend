// @flow

import Router from "express";

import type { $Request, $Response, $Router } from "express";

import * as organization from "./organization";

const organizationsRouter: $Router = Router();

organizationsRouter.get("/", (request: $Request, response: $Response) =>
  organization.read((error, organizations) =>
    error
      ? response.status(500).send("error!")
      : response.send({ data: organizations })
  )
);

organizationsRouter.get("/:id", (request: $Request, response: $Response) =>
  organization.readById(request.param.id, (error, organization) =>
    error
      ? response.status(500).send("error!")
      : response.send({ data: organization })
  )
);

organizationsRouter.post("/", (request: $Request, response: $Response) =>
  organization.create(request.body, (error, newOrganization) =>
    error
      ? response.status(500).send("error!")
      : response.send({ data: newOrganization })
  )
);

export default organizationsRouter;
