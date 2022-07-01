import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsCheck2, BsPlus } from "react-icons/bs";
import { toast } from "react-toastify";

const Task = () => {
  const [task, setTask] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // add task to page

  const onSubmit = (data) => {
    setTask(data.task);
    reset();
  };

  // confirm task submit to database
  const onSubmits = (event) => {
    event.preventDefault();
    const newTask = {
      task: task,
      date: "20-2014",
    };
    const url = `https://todojobtask.herokuapp.com/task`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.insertedId) {
          toast.success(`${task}  add successfully`);
          setTask("");
          reset();
        } else toast.error(`${task}  add to failed`);
      });
  };

  return (
    <>
      <div className="max-w-lg mx-auto">
        {/* task Heading */}
        <div className="shadow-3xl py-2.5 px-4 mb-10 text-second rounded-md ">
          <h1 className="text-base  font-normal ">Add your Daily Task </h1>
        </div>
        {/* task add form */}
        <div className="shadow-3xl py-2 px-4 mb-10 text-second rounded-md ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center justify-between"
          >
            <input
              type="text"
              placeholder="New Task"
              className=" py-1.5 px-4 bg-[#f2f2f2] focus:outline-none rounded-md text-sm font-normal border-primary w-full max-w-xs"
              {...register("task", {
                required: {
                  value: true,
                  message: "Task is Required",
                },
                minLength: {
                  value: 3,
                  message: "Must be 3 characters or longer",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.name.message}
                </span>
              )}
              {errors.name?.type === "minLength" && (
                <span className="label-text-alt text-red-600">
                  {errors.name.message}
                </span>
              )}
              {errors.name?.type === "pattern" && (
                <span className="label-text-alt text-red-600">
                  {errors.name.message}
                </span>
              )}
            </label>
            <button type="submit">
              <BsPlus className="text-primary text-2xl hover:bg-primary hover:text-white rounded-full transition-colors duration-500" />
            </button>
          </form>
          {/* task name confirm */}
          <div className={task === "" ? "hidden" : "block"}>
            <div className="pt-4 pl-2">
              <form
                onSubmit={onSubmits}
                className="flex items-center justify-between"
              >
                {/* task*/}

                <input
                  disabled
                  type="text"
                  value={task || ""}
                  className=" py-1.5 px-4  focus:outline-none rounded-md text-sm font-normal border-primary w-full max-w-xs"
                />

                <button type="submit">
                  <BsCheck2 className="text-primary text-2xl hover:bg-primary hover:text-white rounded-full transition-colors duration-500" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
