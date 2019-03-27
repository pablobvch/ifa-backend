// 

import Router from "express";


import * as organization from "./organization";

const organizationsRouter = Router();

organizationsRouter.get("/", (request, response) =>
  organization.read((error, organizations) =>
    error
      ? response.status(500).send("error!")
      : response.send({ data: organizations })
  )
);

organizationsRouter.get("/:id", (request, response) =>
  organization.readById(request.param.id, (error, organization) =>
    error
      ? response.status(500).send("error!")
      : response.send({ data: organization })
  )
);

organizationsRouter.post("/", (request, response) =>
  organization.create(request.body, (error, newOrganization) =>
    error
      ? response.status(500).send("error!")
      : response.send({ data: newOrganization })
  )
);

export default organizationsRouter;
