import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import TODO from "./pages/TODO";
import { AppContext } from "./contexts/AppContext";
import Profile from "./pages/Profile";
import UpdateTask from "./components/UpdateTask";

const App = () => {
  const { user } = useContext(AppContext);
  const location = useLocation();

  // Pages that should not show navbar/footer
  const hideLayoutRoutes = ["/login", "/signup"];
  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <ToastContainer />

      {!hideLayout && <Navbar />}

      <div className="flex-grow">
        <Routes>
          {/* Auth pages */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />

          {/* Public pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/to-do-list/update/:id" element={<UpdateTask />} />

          {/* To-Do List */}
          <Route path="/to-do-list/*" element={<TODO />} />
        </Routes>
      </div>

      {!hideLayout && <Footer />}
    </div>
  );
};

export default App;
