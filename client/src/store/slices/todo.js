import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo(state, action) {},
    setTodo(state, action) {
      return action.payload;
    },
    removeTodo(state, action) {},
    editTodo(state, action) {},
    completeTodo(state, action) {},
  },
});
export default TodoSlice.reducer;
export const { addTodo, setTodo, removeTodo, editTodo, completeTodo } =
  TodoSlice.actions;
