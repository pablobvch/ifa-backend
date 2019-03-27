// @flow

import organizationModel from "./model/organization";

import type { Organization as OrganizationEntity } from "../../entities/organization";

type OrganizationIdType = $PropertyType<OrganizationEntity, "id">;

const readById = (id: OrganizationIdType, callback: Function) =>
  organizationModel.findById(id, (error, user) =>
    error ? callback(error) : callback(null, user)
  );

const read = (callback: Function) =>
  organizationModel.find((error, users) =>
    error ? callback(error) : callback(null, users)
  );

const create = (user: OrganizationEntity, callback: Function) =>
  organizationModel.create(user, (error, newUser) =>
    error ? callback(error) : callback(null, newUser)
  );

export { create, read, readById };
