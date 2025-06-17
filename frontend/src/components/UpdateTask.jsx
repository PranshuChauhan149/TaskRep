import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAppContext } from '../contexts/AppContext';

const UpdateTask = () => {
  const { serverUrl } = useAppContext();
  const { id } = useParams(); // task ID from URL
  const navigate = useNavigate();

  const [task, setTask] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  // Fetch task details on load
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await axios.get(`${serverUrl}/api/task/update/${id}`, {
          withCredentials: true,
        });

        setTask(res.data.updated.task);
        setTime(res.data.updated.time);
        setDate(res.data.updated.date);
      } catch (error) {
        toast.error("Failed to load task");
      }
    };

    fetchTask();
  }, [id, serverUrl]);

  // Submit update
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `${serverUrl}/api/task/update/${id}`,
        { task, time, date },
        { withCredentials: true }
      );

      if (res.data.success) {
        toast.success("Task updated successfully!");
        navigate("/to-do-list/all");
      } else {
        toast.error(res.data.message || "Update failed");
      }
    } catch (error) {
      toast.error("Failed to update task");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">✏️ Update Task</h2>

      <form onSubmit={handleUpdate} className="bg-white p-6 rounded-lg shadow space-y-4">
        <div>
          <label className="block mb-1 text-sm text-gray-600">Task</label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-600">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-600">Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
        >
          Update Task
        </button>
      </form>
    </div>
  );
};

export default UpdateTask;
