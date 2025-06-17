import React, { useContext, useState } from 'react';
import { FaCheckCircle, FaTrashAlt, FaEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { dummyTasks } from '../assets/contect'; 
import axios from 'axios'
import { AppContext } from '../contexts/AppContext';
import { useNavigate } from 'react-router-dom';
const AddNew = () => {
  const navigate = useNavigate();
  const { serverUrl ,tasks,deleteELe,updateComp} = useContext(AppContext);
    const [task, setTask] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  // Limit date to today and tomorrow
  const getToday = () => {
    return new Date().toISOString().split('T')[0];
  };

  const getTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const handleSubmit =async (e) => {
   try{
     e.preventDefault();

    if (!task || !date || !time) {
      toast.error("Please fill in all fields");
      return;
    }

    const newTask = {
      task,
      date,
      time,
      completed: false,
      
    };
    const res = await axios.post(`${serverUrl}/api/task/add-task`, 
  newTask, 
  { withCredentials: true }
);

    if(res){
      toast.success("Task added successfully!");
    }

    setTask('');
    setTime('');
    setDate('');

   }
   catch(error){
    toast.error("Error in task ..")

   }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">➕ Add New Task</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-4 max-w-xl mx-auto"
      >
        {/* Task Input */}
        <div className="flex flex-col">
          <label htmlFor="task" className="text-sm font-medium text-gray-600 mb-1">
            Task
          </label>
          <input
            type="text"
            id="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter your task..."
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Date Input (Only today and tomorrow allowed) */}
        <div className="flex flex-col">
          <label htmlFor="date" className="text-sm font-medium text-gray-600 mb-1">
            Date (Today or Tomorrow)
          </label>
          <input
            type="date"
            id="date"
            value={date}
            min={getToday()}
            max={getTomorrow()}
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Time Input */}
        <div className="flex flex-col">
          <label htmlFor="time" className="text-sm font-medium text-gray-600 mb-1">
            Time
          </label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-400 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Add Task
        </button>
      </form>
        <div className="w-full p-6 bg-gradient-to-b from-gray-100 to-gray-200 mt-4 rounded-2xl mb-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              📝 Tasks
            </h1>
      
            {tasks?.length === 0 ? (
              <p className="text-center text-gray-600 text-lg">No tasks available.</p>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {tasks.map((task) => (
                  <div
                    key={task._id}
                    className="flex justify-between items-center bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
                  >
                    <div className="flex items-start gap-3">
                      <FaCheckCircle
                        className={`text-2xl mt-1 ${
                          task.completed ? 'text-green-500' : 'text-gray-300'
                        }`} onClick={()=>updateComp(task._id)}
                      />
                      <div>
                        <h2
                          className={`text-lg font-semibold ${
                            task.completed ? 'line-through text-gray-400' : 'text-gray-800'
                          }`}
                        >
                          {task.task}
                        </h2>
                        <p className="text-sm text-gray-500">
                          {new Date(task.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </div>
      
                    <div className="flex gap-3 text-gray-600 text-lg">
                      <FaEdit className="hover:text-blue-500 cursor-pointer"  onClick={() => navigate(`/to-do-list/update/${task._id}`)} />
                      <FaTrashAlt className="hover:text-red-500 cursor-pointer" onClick={()=>deleteELe(task._id)} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
    </div>
  );
};

export default AddNew;
