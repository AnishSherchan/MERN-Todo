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

//? get specific user by id
export const getUserByEmail = (email: String) => {
  return UserModal.findOne({ email });
};
export const getUserByToken = (token: String) =>
  UserModal.findOne({
    "auth.token": token,
  });
// ? Create User in the database
export const createUser = (values: Record<string, any>) =>
  new UserModal(values).save().then((user) => user.toObject());
// ? Update User data
export const updateUserById = (id: String, values: Record<string, any>) => {
  UserModal.findByIdAndUpdate(id, values);
};
