import React from "react";
import TodoItems from "./todoItems";

const TodoContainer = () => {
  return (
    <div className=" flex flex-wrap flex-col gap-5 min-h-[400px]">
      <h1 className=" text-center font-semibold text-xl">Your Things</h1>
      <TodoItems />
    </div>
  );
};

export default TodoContainer;
