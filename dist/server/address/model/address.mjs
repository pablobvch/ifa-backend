// 

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const addressSchema = new Schema({
  name: { type: String, required: true }
});

const Address = mongoose.model("Address", addressSchema);

export default Address;
