// 

import addressModel from "./model/address";



const readById = (id, callback) =>
  addressModel.findById(id, (error, user) =>
    error ? callback(error) : callback(null, user)
  );

const read = (callback) =>
  addressModel.find((error, users) =>
    error ? callback(error) : callback(null, users)
  );

const create = (user, callback) =>
  addressModel.create(user, (error, newUser) =>
    error ? callback(error) : callback(null, newUser)
  );

export { create, read, readById };
