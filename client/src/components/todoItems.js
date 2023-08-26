import React, { useState, useEffect } from "react";

import SimpleModal from "./SimpleModal";
import NoData from "./NoData";
import NavItems from "./NavItems";
import useFetch from "../utils/api";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { pink } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const TodoItems = () => {
  const { data, loading, error, fetchData } = useFetch();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const [Tododata, setData] = useState(null);
  //   const data = useSelector((state) => {
  //     return state.todo;
  //   });
  //   const completedTodoList = data?.filter((item) => item?.completed === true);
  //   const pendingTodoList = data?.filter((item) => item?.completed === false);
  let todoToRender = [];
  const completedTodoList = data?.filter((item) => item?.status === true);
  const pendingTodoList = data?.filter((item) => item?.status === false);
  if (selectedFilter === "all") {
    todoToRender = data;
  } else if (selectedFilter === "completed") {
    todoToRender = completedTodoList;
  } else {
    todoToRender = pendingTodoList;
  }

  //   const removeTodo = (datas) => {
  //     const todoIndex = data.findIndex((item) => item.todo === datas);
  //     dispatch(removeaTodo(todoIndex));
  //   };
  const handelEdit = (data) => {
    setIsOpen(true);
    setData(data);
  };
  //   const completedTodo = (datas) => {
  //     const {
  //       item: { todo: task, completed: status },
  //     } = datas;
  //     const todoIndex = data.findIndex((item) => item.todo === task);
  //     const UpdateData = {
  //       index: todoIndex,
  //       status: !status, // Inverting the status value using the NOT operator (!)
  //     };
  //     // console.log(UpdateData);
  //     dispatch(completeTodo(UpdateData));
  //   };

  useEffect(() => {
    fetchData("/todo");
  }, []);
  return (
    <div>
      {data?.length > 0 && (
        <NavItems
          setIsOpen={setIsOpen}
          setSelectedFilter={setSelectedFilter}
          selectedFilter={selectedFilter}
        />
      )}
      {loading ? (
        <Box sx={{ width: "100%", height: "100%" }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      ) : data?.length > 0 ? (
        todoToRender.length > 0 ? (
          todoToRender.map((item, index) => (
            <div
              className="flex justify-between flex-wrap bg-[#E7EAFB] p-4 rounded-3xl md:bg-transparent md:p-0 md:rounded-none mt-4"
              key={index}
            >
              <div className="flex gap-3">
                <button
                //   onClick={() => {
                //     completedTodo({ index, item });
                //   }}
                >
                  {item.completed ? (
                    <CheckCircleOutlineIcon color="success" />
                  ) : (
                    <CheckCircleIcon color="success" />
                  )}
                  {/* <Icon icon="system-uicons:circle" width="23" />
                  <Icon icon="fluent-mdl2:completed" color="green" width="20" /> */}
                </button>
                <p
                  className={`${
                    item.completed ? "line-through opacity-60" : ""
                  }`}
                >
                  {item.title}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <CheckCircleOutlineIcon color="success" />

                <button
                //   onClick={() => {
                //     removeTodo(item.todo);
                //   }}
                >
                  <DeleteForeverIcon sx={{ color: pink[500] }} />
                </button>
                <button onClick={() => handelEdit({ todo: item.title, index })}>
                  {/* <Icon icon="fluent:edit-20-regular" color="blue" width="20" /> */}
                  <EditNoteIcon color="secondary" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <NoData title="No todos!" image="/undraw_taking_notes_re_bnaf.svg" />
        )
      ) : (
        <NoData
          image="/undraw_mornings_re_cofi.svg"
          title="What kind of day shall we have today."
          button={true}
        />
      )}
      <SimpleModal
        isOpen={isOpen}
        closeModal={() => {
          setIsOpen(false);
          setData(null);
        }}
        modalData={Tododata}
        setData={setData}
      />
    </div>
  );
};

export default TodoItems;
