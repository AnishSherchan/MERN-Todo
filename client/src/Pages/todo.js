import React, { useEffect } from "react";
import Container from "../components/container";
import useFetch from "../utils/api";

const Todo = () => {
  const { data, loading, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData("/todo");
  }, []);
  return (
    <Container>
      <h1>Todo List</h1>
      {data?.map((todo, index) => (
        <div key={index}>
          <p>{todo.title}</p>
        </div>
      ))}
    </Container>
  );
};

export default Todo;
