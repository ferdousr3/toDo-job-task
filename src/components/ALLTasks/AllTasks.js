import axios from "axios";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsCheck2Circle } from "react-icons/bs";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import DeleteConfirmModal from "../Modal/DeleteConfirmModal";
import TaskCard from "../TaskCard/TaskCard";

const AllTasks = () => {
  const [user] = useAuthState(auth);
  const [deletingTask, setDeletingTask] = useState(null);
  const headers = {
    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  };

  const getData = () => {
    return axios.get(
      `https://todojobtask.herokuapp.com/singleTask?email=${user.email}`,
      {
        headers: headers,
      }
    );
  };
  const { data, refetch, isLoading, isError, error } = useQuery(
    "task",
    getData,
    {
      refetchInterval: 4000,
    }
  );
  // if data miss and can not get data
  if (isLoading) {
    return <Loading />;
  }

  // error messages

  if (isError) {
    return <h1>{error.messages}</h1>;
  }

  return (
    <>
      {/* task Heading */}
      <div className="shadow-3xl py-2.5 px-4 mb-10 text-second rounded-md max-w-lg mx-auto ">
        {/* completed task heading */}
        <div className="flex items-center">
          <BsCheck2Circle className="text-xl text-primary mr-4" />
          <h1 className=" text-base  font-normal ">
            All Completed Task ({data?.data?.length})
          </h1>
        </div>
      </div>
      {/* task card */}
      {data?.data?.map((task) => (
        <TaskCard
          key={task?._id}
          task={task}
          refetch={refetch}
          setDeletingTask={setDeletingTask}
        />
      ))}
      {/* task delete confirm modal */}
      {deletingTask && (
        <DeleteConfirmModal
          setDeletingTask={setDeletingTask}
          refetch={refetch}
          deletingTask={deletingTask}
        />
      )}
    </>
  );
};

export default AllTasks;
