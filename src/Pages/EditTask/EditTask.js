import React, { useEffect } from "react";
import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../../components/Loading/Loading";
import { toast } from "react-toastify";
import { BsPencilSquare } from "react-icons/bs";

const EditTask = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [newTask, setNewTask] = useState();
  const [date, setDate] = useState(new Date());
  const formattedDate = format(date, "PP");

  // data fetching for single id

  useEffect(() => {
    const url = `https://todojobtask.herokuapp.com/task/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNewTask(data));
  }, [id]);

  // data update to api
  const handleUpdateItem = (event) => {
    // event.preventDefault()
    // send data to the server
    const updatedTask = {
      task: newTask,
      date: formattedDate,
    };
    const url = `https://todojobtask.herokuapp.com/task/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    })
      .then((res) => res.json())
    // event.target.reset();
    setNewTask("");
    toast(`Add Date successfully`);
    navigate('/')
  };

  // if data miss and can not get data
  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center  min-h-[350px]">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
        <div
          className=" max-w-lg mx-auto shadow-3xl py-2.5 px-4 mb-4 text-second rounded-md flex items-center
        justify-between  mt-4"
        >
          <div className="div">
            <h3>{newTask?.task}</h3>
            <span className="text-xs font-medium text-primary">
              {formattedDate}
            </span>
          </div>
          <div className=" flex items-center ">
            <button onClick={() => handleUpdateItem(id)}>
              <BsPencilSquare className="text-primary text-xl mx-2 hover:text-blue-500 transition-colors duration-500" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTask;
