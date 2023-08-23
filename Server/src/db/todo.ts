import mongoose from "mongoose";
import { UserModal } from "./users";

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: Boolean, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModal",
    required: true,
  },
});
export const TodoModal = mongoose.model("Todo", todoSchema);

export const getTodo = (user_id: String) => {
  UserModal.find({ user_id });
};

export const createTodo = (values: Record<string, any>) =>
  new TodoModal(values).save().then((todo) => todo.toObject());
