import React, { useState, useEffect } from "react";

import SimpleModal from "./SimpleModal";
import NoData from "./NoData";
import NavItems from "./NavItems";
import useFetch from "../utils/api";
// Icons
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import DoneIcon from "@mui/icons-material/Done";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

import { setTodo } from "../store/slices/todo";
import { useDispatch } from "react-redux";

const TodoItems = () => {
  const dispatch = useDispatch();
  const { data, loading, fetchData } = useFetch();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const [Tododata, setData] = useState(null);
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

  const handelEdit = (data) => {
    setIsOpen(true);
    setData(data);
  };

  const getData = async () => {
    const data = await fetchData("/todo");
    dispatch(setTodo(data));
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
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
                <button>
                  {item.completed ? (
                    <DoneIcon color="success" />
                  ) : (
                    <PanoramaFishEyeIcon className=" text-yellow-400" />
                  )}
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
                <DoneIcon color="success" />

                <button>
                  <DeleteOutlineRoundedIcon className=" text-red-400" />
                </button>
                <button onClick={() => handelEdit({ todo: item.title, index })}>
                  {/* <Icon icon="fluent:edit-20-regular" color="blue" width="20" /> */}
                  <CreateOutlinedIcon className=" text-blue-500" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <NoData title="No todo!" image="/undraw_taking_notes_re_bnaf.svg" />
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
      />
    </div>
  );
};

export default TodoItems;
