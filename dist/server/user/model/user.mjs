// 

import mongoose from "mongoose";

import Organization from "../../organization/model/organization";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  organizationId: { type: String, required: false }
});

const User = mongoose.model("User", userSchema);

export default User;
