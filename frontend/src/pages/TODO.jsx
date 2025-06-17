import React from "react";
import { Slide } from "react-toastify";

import Sidebar from "../components/Sidear";
import RigthSideBar from "../components/RigthSideBar";

const TODO = () => {
  return (
    <div className="flex flex-col lg:flex-row h-[700px] bg-gray-100 p-4 gap-4">
      <Sidebar />
      <RigthSideBar />
    </div>
  );
};

export default TODO;
