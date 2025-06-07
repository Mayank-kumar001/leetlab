import React, { useEffect, useState } from "react";
import ReactCalendar from "react-calendar";
import { BellPlus, Calendar, PencilLine } from "lucide-react";
import { motion } from "motion/react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios.js"
// import 'react-calendar/dist/Calendar.css';

function CallStackPage() {




  const [showCalender, setShowCalender] = useState(false);
  const [showNotificationCalender, setShowNotificationCalender] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [notificationSelectedDate, setNotificationSelectedDate] = useState(new Date());
  const [notificationtime, setNotificationTime] = useState("6:00");
  const [notifications, setNotifications] = useState([]);
  const [task, setTask] = useState([]);

  const { handleSubmit, register, formState: { errors } } = useForm();

  useEffect(() => {
    axiosInstance.get("/task/all-tasks").then((res) => {
      console.log("hello hello", res.data.data)
      setTask(res.data.data);
    })
  }, [])

  const addTask = async (data) => {
    // data.notifications = notifications;
    data.deadline = selectedDate



    console.log(data)
    try {
      const res = await axiosInstance.post("/task/add-task", data);
      const taskId = res.data.data.id;
      const notificationRes = await axiosInstance.post(`/task/add-notification/${taskId}`, { notifications })
      axiosInstance.get("/task/all-tasks").then((res) => {
        console.log("hello hello", res.data.data)
        setTask(res.data.data);
      })

      setNotifications([])
    } catch (error) {
      // toast.error("gadbad");
      console.log(error);
    }



  }

  const markDone = async (id) => {
    try {
      await axiosInstance.get(`/task/mark-task-done/${id}`)
      toast.success("Task Completed")
      axiosInstance.get("/task/all-tasks").then((res) => {
        console.log("hello hello", res.data.data)
        setTask(res.data.data);
      })
      setNotifications([]);
    } catch (error) {

    }
  }

  return (
    <div className="text-white w-full min-h-screen flex flex-col items-center">
      <div className="mt-6 flex flex-col justify-center items-center gap-6">
        <span className="text-4xl font-bold">Tasks piling up?</span>
        <span className="text-gray-300 text-sm">
          Time to{" "}
          <span className="font-bold text-lg text-white bg-[#0a2b52] border-2  border-[#0646a5a1] px-4 py-2 rounded-2xl font-mono ">
            push()
          </span>{" "}
          your goals and{" "}
          <span className="font-bold text-lg text-white bg-[#09d12270] border-2  border-[#23a525a1] px-4 py-2 rounded-2xl font-mono">
            pop()
          </span>{" "}
          them one by one.
        </span>
      </div>

      <form on onSubmit={handleSubmit(addTask)} className="bg-[#151515] border-1 border-neutral-700 w-96 h-96 mt-6 shadow-2xl shadow-neutral-500/20 rounded-lg px-4 py-3 flex flex-col gap-5">
        <div className="px-2 border-1 border-neutral-700 rounded-lg ">
          <div className="border-b-1 border-neutral-700 flex items-baseline gap-2">
            <PencilLine color="#838a8a" size={18} />
            <textarea
              className="w-full resize-none text-sm px-4 py-2 focus:outline-0 font-medium"
              placeholder="Add Task to CallStack" {...register("task")}></textarea>
          </div>
          <div className="flex justify-between relative py-2">
            <div className="text-[#838a8a] font-medium text-sm">Deadline</div>
            <div className="flex items-center gap-3">
              <div>{`${selectedDate.getDate()}-${selectedDate.getMonth()}-${selectedDate.getFullYear()}`}</div>
              <div
                onClick={() => setShowCalender(!showCalender)}
                className="cursor-pointer">
                <Calendar color="#838a8a" size={18} />
              </div>
              {showCalender && (
                <motion.div
                  initial={{
                    opacity: "0",
                  }}
                  animate={{
                    opacity: "1",
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                  }}>
                  <ReactCalendar
                    onChange={(date) => setSelectedDate(date)}
                    value={selectedDate}
                    className={
                      "bg-[#7668681f] text-neutarl-300 text-center px-2 absolute top-[40px] right-[-8px] w-[250px] rouned-lg border-1 border-neutral-700 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                    }
                  />
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* notification tab */}

        <div className="px-2 py-2 border-1 border-neutral-700 rounded-lg">
          <div className="border-b-1 border-neutral-700 flex items-center gap-2">
            <BellPlus color="#838a8a" size={18} />
            <div className="text-sm px-4 py-2 font-medium text-[#838a8a]">
              Add Notification
            </div>
          </div>
          <div className="flex justify-between relative py-2">
            <div className="text-[#838a8a] font-medium text-sm">Date</div>
            <div className="flex items-center gap-3">
              <div>{`${notificationSelectedDate.getDate()}-${notificationSelectedDate.getMonth()}-${notificationSelectedDate.getFullYear()}`}</div>
              <div
                onClick={() => setShowNotificationCalender(!showNotificationCalender)}
                className="cursor-pointer">
                <Calendar color="#838a8a" size={18} />
              </div>
              {showNotificationCalender && (
                <motion.div
                  initial={{
                    opacity: "0",
                  }}
                  animate={{
                    opacity: "1",
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                  }}>
                  <ReactCalendar
                    onChange={(date) => setNotificationSelectedDate(date)}
                    value={notificationSelectedDate}
                    className={
                      "bg-black text-neutarl-300 text-center px-2 absolute top-[40px] right-[-8px] w-[250px] rouned-lg border-1 border-neutral-700 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                    }
                  />
                </motion.div>
              )}
            </div>
          </div>
          <div className=" flex justify-between">
            <div className="text-[#838a8a] font-medium text-sm">Time</div>
            <div>
              <TimePicker
                value={notificationtime}
                onChange={(time) => setNotificationTime(time)}
                disableClock={true}
                clearIcon={false}
                autoFocus={false}
                className="text-white"></TimePicker>
              {console.log(notificationtime)}
            </div>
          </div>
          <div className="flex justify-center">
            <button onClick={(e) => {
              e.preventDefault();
              let myDate = `${notificationSelectedDate.getDate()}-${notificationSelectedDate.getMonth()}-${notificationSelectedDate.getFullYear()}`
              // let myTime = `${notificationtime.getHours()}:${notificationtime.getHours()}`
              setNotifications(prev => [...prev, `${myDate} ${notificationtime}`])
              toast.success("Notification Scheduled");
            }} className="bg-orange-500 px-2 py-1 rounded-lg mt-2">Notify</button>
          </div>
        </div>

        <button type="submit" onClick={addTask} className="bg-orange-500 px-2 py-1 rounded-lg">Add Task</button>

      </form>

      {/* show all task */}
      <div>
        <div className="text-lg font-bold text-center mt-8 mb-4">Your Tasks</div>
        <div className="flex flex-wrap content-center justify-center gap-2">
          {task ? (
            task.filter((elem) => elem.status === "PENDING").map((elem) => (<div className="border-1 border-neutral-700 flex flex-col px-4 py-4 rounded-lg gap-4">
              <div className="font-medium">{elem.task}</div>
              <div className="text-sm text-neutral-400">Deadline : {elem.deadline.split("T")[0]}</div>
              <button className="bg-orange-500 px-2 py-1 rounded-lg cursor-pointer" onClick={() => markDone(elem.id)}>Mark as done</button>
            </div>))
          ) : (
            <div>No task Scheduled</div>
          )}
          {console.log(task)}
        </div>
      </div>
    </div>
  );
}

export default CallStackPage;
