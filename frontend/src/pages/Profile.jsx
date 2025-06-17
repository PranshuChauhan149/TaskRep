import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import profileImg from '../assets/to-do-list.png'; // your default profile image

const Profile = () => {
  const { user } = useContext(AppContext);

  const handleLogout = () => {
    // Clear user session or token logic here
    console.log('Logout logic here');
  };

  return (
    <div className="w-full h-[500px] bg-gradient-to-b from-red-100 to-red-200 flex justify-center items-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
        <div className="flex justify-center mb-4">
          <img
            src={user?.profilePic || profileImg}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-red-300 object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          {user?.username || 'Demo User'}
        </h2>
        <p className="text-gray-600 mb-6">
          {user?.email || 'demo@example.com'}
        </p>

        <div className="flex justify-center gap-4">
          <button
            className="bg-red-300 hover:bg-red-400 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Edit Profile
          </button>
          <button
            onClick={handleLogout}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
