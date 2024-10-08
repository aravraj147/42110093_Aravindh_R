import { Schema, model } from 'mongoose';

const memberSchema = new Schema({
  name: String,
  role: String,
  photo: String,
  contact: String,
});

const Member = model('Member', memberSchema);

// Add a find function to get all members
export const find = async () => {
  return await Member.find();
};

export default Member;
