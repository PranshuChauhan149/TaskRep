import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import profileImg from "../assets/to-do-list.png"; // your default profile image
import { toast } from "react-toastify";
import axios from "axios";
import { IoCameraOutline } from "react-icons/io5";
import { useRef } from "react";
import { useState } from "react";
const Profile = () => {
  const fileInputRef = useRef();
  const { user, serverUrl, setUser } = useContext(AppContext);
  const [frontendImage, setFrontendImage] = useState(user?.image || profileImg);
  const [backendImage, setBackendImage] = useState(null);

 const handleEdit = async (e) => {
  try {
    e.preventDefault();

    const formdata = new FormData();
    if (backendImage) {
      formdata.append("image", backendImage);
      const res = await axios.put(
        `${serverUrl}/api/auth/profile-edit`,
        formdata,
        { withCredentials: true }
      );

      if (res?.data?.success) {
        setUser(res.data.user); // ✅ update global user
        toast.success("Image updated successfully");
      } else {
        toast.error("Image update failed");
      }
    }
  } catch (error) {
    toast.error(error.message);
  }
};


  const handleImageUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      setBackendImage(file);
      setFrontendImage(URL.createObjectURL(file));
      console.log(file);
    }
  };

  const handleLogout = async (e) => {
    // Clear user session or token logic here
    e.preventDefault();
    try {
      const res = await axios.post(
        `${serverUrl}/api/user/logout`,
        {},
        { withCredentials: true }
      );
      if (res) {
        setUser(null);
        toast.success("User Logout");
        console.log("Logout success");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full h-[500px] bg-gradient-to-b from-red-100 to-red-200 flex justify-center items-center px-4">
      <div className=" bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
        <div className="relative flex justify-center mb-4">
          <img
            src={user?.image || frontendImage}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-red-300 object-cover"
          />
          <label
            htmlFor="profile-upload"
            className="absolute bottom-2 right-35 bg-white p-2 rounded-full cursor-pointer shadow-md hover:bg-gray-100 transition-transform group-hover:scale-110"
          >
            <IoCameraOutline className="text-blue-500 text-xl" />
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
              ref={fileInputRef}
            />
          </label>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          {user?.username || "Demo User"}
        </h2>
        <p className="text-gray-600 mb-6">
          {user?.email || "demo@example.com"}
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleEdit}
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
