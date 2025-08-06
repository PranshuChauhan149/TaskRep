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
import { useEffect } from "react";

const App = () => {
  const { user,getcurrent } = useContext(AppContext);
  const location = useLocation();

  // Pages that should not show navbar/footer
  const hideLayoutRoutes = ["/login", "/signup"];
  const hideLayout = hideLayoutRoutes.includes(location.pathname);
useEffect(() => {
  const fetchCurrentUser = async () => {
    try {
      await getcurrent();
    } catch (error) {
      console.error("Error fetching current user:", error);
    }
  };

  fetchCurrentUser();
}, [getcurrent]);


  return (
    <div className="min-h-screen flex flex-col">
      <ToastContainer />

      {!hideLayout && <Navbar />}

      <div className="flex-grow">
       <Routes>
  {/* Public Routes */}
  <Route path="/signup" element={<SignUp />} />
  <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />

  {/* Protected Routes */}
  <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
  <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
  <Route path="/to-do-list/*" element={user ? <TODO /> : <Navigate to="/login" />} />
  <Route path="/to-do-list/update/:id" element={user ? <UpdateTask /> : <Navigate to="/login" />} />
</Routes>

      </div>

      {!hideLayout && <Footer />}
    </div>
  );
};

export default App;
