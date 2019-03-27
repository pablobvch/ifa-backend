// @flow

import userModel from "./model/user";

import type { User as UserEntity } from "../../entities/user";

type UserIdType = $PropertyType<UserEntity, "id">;

const readById = (id: UserIdType, callback: Function) =>
  userModel.findById(id, (error, user) =>
    error ? callback(error) : callback(null, user)
  );

const read = (callback: Function) =>
  userModel.find((error, users) =>
    error ? callback(error) : callback(null, users)
  );

const create = (user: UserEntity, callback: Function) =>
  userModel.create(user, (error, newUser) =>
    error ? callback(error) : callback(null, newUser)
  );

export { create, read, readById };
