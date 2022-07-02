import { format } from "date-fns";
import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { BsCheck2 } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import EditConfirmModal from "../../components/Modal/EditConfirmModal";
import PageTitle from "../../components/PageTitle/PageTitle";

const EditTask = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [newTask, setNewTask] = useState();
  const [editTask, setEditTask] = useState(null)
  const [date, setDate] = useState(new Date());
  const formattedDate = format(date, "PP");

  // data fetching for single id

  useEffect(() => {
    const url = `https://todojobtask.herokuapp.com/task/${id}`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setNewTask(data);
      });
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
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(updatedTask),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    // event.target.reset();
    setNewTask("");
    toast(`Add Date successfully`);
    navigate('/tasks')
   
  };

  // if data miss and can not get data
  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <>
    <PageTitle title='Add Date' />
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
              <BsCheck2 className="text-primary text-2xl hover:bg-primary hover:text-white rounded-full transition-colors duration-500" />
            </button>

            {/* <label
              onClick={() => setEditTask(newTask)}
              htmlFor="edit-confirm-modal"
            >
              <BsCheck2 className="text-primary text-2xl hover:bg-primary hover:text-white rounded-full transition-colors duration-500" />
            </label> */}
          </div>
        </div>
        {editTask && (
          <EditConfirmModal
            setEditTask={setEditTask}
            editTask={editTask}
            date={formattedDate}
          />
        )}
      </div>
    </>
  );
};

export default EditTask;
