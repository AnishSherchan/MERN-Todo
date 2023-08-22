import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  auth: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    token: { type: String, select: false },
  },
});

export const UserModal = mongoose.model("Users", UserSchema);

export const getUserByEmail = (email: String) => {
  return UserModal.findOne({ email });
};
export const createUser = (values: Record<string, any>) =>
  new UserModal(values).save().then((user) => user.toObject());
