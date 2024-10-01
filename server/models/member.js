import { Schema, model } from 'mongoose';

const memberSchema = new Schema({
  name: String,
  role: String,
  photo: String,
  contact: String,
});

export default model('Member', memberSchema);
