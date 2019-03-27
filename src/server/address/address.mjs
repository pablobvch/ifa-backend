// @flow

import addressModel from "./model/address";

import type { Address as AddressEntity } from "../../entities/address";

type AddressIdType = $PropertyType<AddressEntity, "id">;

const readById = (id: AddressIdType, callback: Function) =>
  addressModel.findById(id, (error, user) =>
    error ? callback(error) : callback(null, user)
  );

const read = (callback: Function) =>
  addressModel.find((error, users) =>
    error ? callback(error) : callback(null, users)
  );

const create = (user: AddressEntity, callback: Function) =>
  addressModel.create(user, (error, newUser) =>
    error ? callback(error) : callback(null, newUser)
  );

export { create, read, readById };
