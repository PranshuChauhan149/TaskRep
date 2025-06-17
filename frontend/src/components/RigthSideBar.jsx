import React from "react";
import CountTask from "./CountTask";
import AllTask from "./AllTask";
import { useLocation } from "react-router-dom";
import AddNew from "../pages/AddNew";
import Completed from "./Completed";
import UpdateTask from "./UpdateTask";

const RigthSideBar = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="w-full bg-gray-200 shadow-lg rounded-lg shadow-gray-300 h-full overflow-auto">
      <CountTask />
      {path === "/to-do-list/all" ? (
        <AllTask />
      ) : path === "/to-do-list/add" ? (
        <AddNew />
      ) : path === "/to-do-list/completed" ? (
        <Completed />
      ) : (
        <AllTask />
      )}
    </div>
  );
};

export default RigthSideBar;
