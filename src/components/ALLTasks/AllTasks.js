import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteConfirmModal from '../DeleteConfirmModal/DeleteConfirmModal';
import Loading from '../Loading/Loading';
import TaskCard from '../TaskCard/TaskCard';

const AllTasks = () => {
  const [deletingTask, setDeletingTask] = useState(null);
    const {
      data: task,
      refetch,
      isLoading,
    } = useQuery("users", () =>
      fetch("https://todojobtask.herokuapp.com/tasks", {
        method: "GET",
        // headers: {
        //   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        // },
      }).then((res) => res.json())
    );

    

    // const {
    //   data: task,
    //   refetch,
    // } = useQuery("products", () =>
    //   fetch("https://auto-parts0.herokuapp.com/products", {
    //     headers: {
    //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //     },
    //   }).then((res) => res.json())
    // );
    

    if (isLoading ) {
      return <Loading />;
    }
  return (
    <>
      {/* task Heading */}
      <div className="shadow-3xl py-2.5 px-4 mb-10 text-second rounded-md max-w-lg mx-auto ">
        <h1 className=" text-base  font-normal ">
          All Completed Task ({task.length})
        </h1>
      </div>
      {task.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          refetch={refetch}
          setDeletingTask={setDeletingTask}
        />
      ))}
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