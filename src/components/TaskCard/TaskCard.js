import React from 'react';
import { BsPencilSquare, BsTrash } from "react-icons/bs";

const TaskCard = ({task,refetch,setDeletingTask}) => {


  return (
    <>
      <div className="max-w-lg mx-auto">
        <div className="shadow-3xl py-2.5 px-4 mb-4 text-second rounded-md flex items-center justify-between ">
          <h1 className="text-sm font-medium">{task.task}</h1>
          <div className="flex items-center">
            {/* edit button */}
            <button type="submit">
              <BsPencilSquare className="text-primary text-xl mx-2 hover:text-blue-500 transition-colors duration-500" />
            </button>
            {/* delete button */}
            <label
              onClick={() => setDeletingTask(task)}
              htmlFor="delete-confirm-modal"
             
            >
              <BsTrash className="text-primary text-xl mx-2  hover:text-red-600 transition-colors duration-500 cursor-pointer " />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCard;