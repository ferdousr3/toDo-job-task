import React, { useState } from 'react';
import {  BsCheck2Circle } from 'react-icons/bs';
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
  } = useQuery("task", () =>
    fetch("https://todojobtask.herokuapp.com/tasks/", {
      method: "GET",
      // headers: {
      //   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      // },
    })
      .then((res) => res.json())
  );


  // if data miss and can not get data
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {/* task Heading */}
      <div className="shadow-3xl py-2.5 px-4 mb-10 text-second rounded-md max-w-lg mx-auto ">
        {/* completed task heading */}
        <div className="flex items-center">
          <BsCheck2Circle className='text-xl text-primary mr-4' />
          <h1 className=" text-base  font-normal ">
            All Completed Task ({task?.length})
          </h1>
        </div>
      </div>
      {/* task card */}
      {task?.map((task) => (
        <TaskCard
          key={task._id}
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