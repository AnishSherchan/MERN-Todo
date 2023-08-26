import React, { useEffect } from "react";
import Container from "../components/container";
import useFetch from "../utils/api";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import NavBar from "../components/navBar";
import TodoContainer from "../components/todoConatiner";

const Todo = () => {
  const { data, loading, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData("/todo");
  }, []);

  return (
    <Container>
      <NavBar />
      <TodoContainer />
    </Container>
  );
};

export default Todo;
