import React from "react";
import { useContext } from "react";
import { FaClock } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { FaBowlingBall } from "react-icons/fa";
import { ImMeter2 } from "react-icons/im";
import { AppContext } from "../contexts/AppContext";


const CountTask = () => {
  const {tasks} = useContext(AppContext)

    console.log(tasks)
const completedTasks = tasks.filter((task) => task.completed);
const todayDate = new Date().toISOString().split("T")[0]; // e.g., "2025-06-17"
const todayTask = tasks.filter((task) => task.date === todayDate);

  return (
    <div className="p-2 lg:px-16 lg:p-4 flex flex-wrap gap-[20px] justify-evenly items-center shadow-lg rounded-lg shadow-gray-300 mb-8">
      <div className="bg-blue-300 w-[130px] h-[80px] lg:w-[160px] lg:h-[120px]  rounded-lg shadow-lg shadow-black flex p-3 gap-6 lg:gap-8">
        <div className="flex flex-col justify-between items-start ">
        <div className="bg-gray-200 p-2 lg:p-4 rounded-full">
            <FaClock className="text-blue-300 lg:text-xl"  />
        </div>
          <p className="font-semibold text-[12px] lg:text-[20px]">Today</p>
        </div>
        <div className="flex items-end justify-end pr-5 w-full">
          <p className="font-bold  text-xl">{
            todayTask.length
            }</p>
        </div>
      </div>
      <div className="bg-yellow-300 w-[130px] h-[80px] lg:w-[160px] lg:h-[120px]  rounded-lg shadow-lg shadow-black flex p-3 gap-6 lg:gap-8">
        <div className="flex flex-col justify-between items-start ">
        <div className="bg-gray-200 p-2 lg:p-4 rounded-full">
            <FaFireAlt  className="text-yellow-300 lg:text-xl"  />
        </div>
          <p className="font-semibold text-[12px] lg:text-[20px]">Scheduled</p>
        </div>
        <div className="flex items-end justify-end pr-5 w-full">
          <p className="font-bold  text-xl">{
          tasks.length-completedTasks.length
        }</p>
        </div>
      </div>
      <div className="bg-green-300 w-[130px] h-[80px] lg:w-[160px] lg:h-[120px]  rounded-lg shadow-lg shadow-black flex p-3 gap-6 lg:gap-8">
        <div className="flex flex-col justify-between items-start ">
        <div className="bg-gray-200 p-2 lg:p-4 rounded-full">
            <FaBowlingBall className="text-green-300 lg:text-xl"  />
        </div>
          <p className="font-semibold text-[12px] lg:text-[20px]">All</p>
        </div>
        <div className="flex items-end justify-end pr-5 w-full">
          <p className="font-bold  text-xl">{tasks.length}</p>
        </div>
      </div>
      <div className="bg-red-300 w-[130px] h-[80px] lg:w-[160px] lg:h-[120px]  rounded-lg shadow-lg shadow-black flex p-3 gap-6 lg:gap-8">
        <div className="flex flex-col justify-between items-start ">
        <div className="bg-gray-200 p-2 lg:p-4 rounded-full">
            <ImMeter2 className="text-red-300 lg:text-xl"  />
        </div>
          <p className="font-semibold text-[12px] lg:text-[20px]">Overdue</p>
        </div>
        <div className="flex items-end justify-end pr-5 w-full">
          <p className="font-bold  text-xl">{tasks.length > 3 ? tasks.length-3:0}</p>
        </div>
      </div>
      
    </div>
  );
};

export default CountTask;
