import React from 'react';
import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa';
import {dummyTasks} from '../assets/contect';
import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const Completed = () => {
  const {tasks,deleteELe} = useContext(AppContext)
  const completedTasks = tasks.filter((task) => task.completed);
  return (
    <div className="w-full p-6 min-h-screen bg-gradient-to-b from-red-100 to-red-200">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        ✅ Completed Tasks
      </h1>

      {completedTasks.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">No completed tasks yet.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {completedTasks.map((task) => (
            <div
              key={task._id}
              className="flex justify-between items-center bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-2xl mt-1 text-green-500" />
                <div>
                  <h2 className="text-lg font-semibold line-through text-gray-400">
                    {task.task}
                  </h2>
                  <p className="text-sm text-gray-500">
                    Completed on: {new Date(task.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 text-gray-600 text-lg">
                <FaTrashAlt  className="hover:text-red-500 cursor-pointer" onClick={()=>{deleteELe(task._id)}} title="Delete Task" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Completed;
