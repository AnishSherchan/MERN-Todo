import mongoose from "mongoose";

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

export const getTodo = (user_id: String) => TodoModal.find({ user: user_id });
export const createTodo = (values: Record<string, any>) =>
  new TodoModal(values).save().then((todo) => todo.toObject());
export const deleteTodo = (id: String) =>
  TodoModal.findByIdAndDelete({ _id: id });
export const updateTodo = (id: String, values: Record<string, any>) => {
  return TodoModal.findByIdAndUpdate(id, values);
};
