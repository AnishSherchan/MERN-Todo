import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload)
    },
    setTodo(state, action) {
      return action.payload;
    },
    removeTodo(state, action) {
      console.log(action.payload);
      const { _id: id } = action.payload;
      const index = state.findIndex((item) => item._id === id);
      state.splice(index, 1);
    },
    editTodo(state, action) {
      const { title, id } = action.payload;
      const editedTodo = state.map((item) =>
        id === item._id ? { ...item, title: title } : item
      );
      return editedTodo;
    },
    completeTodo(state, action) {
      const { status, id } = action.payload;
      const editedTodo = state.map((item) =>
        id === item._id ? { ...item, status: status } : item
      );
      return editedTodo;
    },
  },
});
export default TodoSlice.reducer;
export const { addTodo, setTodo, removeTodo, editTodo, completeTodo } =
  TodoSlice.actions;
