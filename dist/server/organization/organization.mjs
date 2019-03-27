// 

import organizationModel from "./model/organization";



const readById = (id, callback) =>
  organizationModel.findById(id, (error, user) =>
    error ? callback(error) : callback(null, user)
  );

const read = (callback) =>
  organizationModel.find((error, users) =>
    error ? callback(error) : callback(null, users)
  );

const create = (user, callback) =>
  organizationModel.create(user, (error, newUser) =>
    error ? callback(error) : callback(null, newUser)
  );

export { create, read, readById };
