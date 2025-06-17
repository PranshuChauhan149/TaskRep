import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  const buttons = [
    { label: 'Add New', path: '/to-do-list/add' },
    { label: 'All Task', path: '/to-do-list/all' },
    { label: 'Completed', path: '/to-do-list/completed' },
  ];

  return (
    <div className="lg:w-[25%] w-full bg-gray-200 flex flex-col items-center p-6 gap-5 shadow-md rounded-lg shadow-gray-400">
      {/* Greeting */}
      <h1 className="text-black text-2xl font-bold font-serif">
        Hello {user?.username || 'Demo Username'}
      </h1>

      <p className="font-semibold font-serif text-gray-600">You have work today</p>

      {/* Navigation Buttons */}
      <div className="flex lg:flex-col flex-row gap-4 w-full">
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            onClick={() => navigate(btn.path)}
            className="w-full bg-red-300 hover:bg-red-400 text-black py-3 px-6 font-semibold rounded-lg shadow transition duration-200 hover:cursor-pointer"
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
