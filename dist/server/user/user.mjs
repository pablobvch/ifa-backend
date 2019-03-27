// 

import userModel from "./model/user";



const readById = (id, callback) =>
  userModel.findById(id, (error, user) =>
    error ? callback(error) : callback(null, user)
  );

const read = (callback) =>
  userModel.find((error, users) =>
    error ? callback(error) : callback(null, users)
  );

const create = (user, callback) =>
  userModel.create(user, (error, newUser) =>
    error ? callback(error) : callback(null, newUser)
  );

export { create, read, readById };
