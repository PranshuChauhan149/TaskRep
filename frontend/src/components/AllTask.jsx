import React, { useContext } from 'react';
import { FaCheckCircle, FaTrashAlt, FaEdit } from 'react-icons/fa';
import { AppContext } from '../contexts/AppContext';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate

const AllTask = () => {
  const { user, tasks,updateComp,deleteELe } = useContext(AppContext);
  const navigate = useNavigate(); // ✅ Initialize navigate

  return (
    <div className="w-full p-6 min-h-screen bg-gradient-to-b from-red-100 to-red-200">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        📝 All Tasks
      </h1>

      {!tasks || tasks.length === 0 ? (
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
                  className={`text-2xl mt-1 hover:cursor-pointer ${
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
                <FaEdit
                  className="hover:text-blue-500 cursor-pointer"
                  onClick={() => navigate(`/to-do-list/update/${task._id}`)}
                />
                <FaTrashAlt className="hover:text-red-500 cursor-pointer" onClick={()=>deleteELe(task._id)} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllTask;
