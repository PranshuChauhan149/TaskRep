import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import axios from 'axios';
import profileImg from "../assets/to-do-list.png";
import { toast } from 'react-toastify';
import navImage from "../assets/to-do-list3.png";
import { Link, useNavigate } from 'react-router-dom';
import { VscThreeBars } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = () => {
    setShowMobileMenu(prev => !prev);
  };

  const handleLinkClick = () => {
    setShowMobileMenu(false); // Close menu after click
  };
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const { setUser, user, serverUrl } = useContext(AppContext);

  useEffect(() => {
    const FetchUser = async () => {
      try {
        const res = await axios.get(`${serverUrl}/api/auth/current`, {
          withCredentials: true,
        });

        if (res.data?.success) {
          setUser(res.data.message);
        } else {
          toast.error("User not logged in");
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    FetchUser();
  }, []);

  const handleLogout = async (e) => {
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
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white shadow-sm relative">
      {/* Mobile Nav Menu */}
       {showMobileMenu && (
        <div className="bg-white w-full h-[200px] top-full left-0 absolute flex flex-col justify-center items-center gap-4 z-20 shadow-lg">
          <Link to="/"><p onClick={handleLinkClick} className="hover:text-red-300 transition cursor-pointer">Home</p></Link>
          <Link to="/to-do-list"> <p onClick={handleLinkClick} className="hover:text-red-300 transition cursor-pointer">To-Do-List</p></Link>
          <Link to="about"><p onClick={handleLinkClick} className="hover:text-red-300 transition cursor-pointer">About</p></Link>
          <Link to="contact"><p onClick={handleLinkClick} className="hover:text-red-300 transition cursor-pointer">Contact</p></Link>
        </div>
      )}

      {/* Logo Section */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
        <img src={navImage} alt="logo" className="w-8 lg:w-10" />
        <p className="font-bold text-xl">To-Do-List</p>
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-6 font-medium text-gray-700">
        <Link to="/"><li className="hover:text-red-300 transition cursor-pointer" >Home</li></Link>
       <Link to="/to-do-list"> <li className="hover:text-red-300 transition cursor-pointer">To-Do-List</li></Link>
        <Link to="/about"><li className="hover:text-red-300 transition cursor-pointer">About</li></Link>
        <Link to="/contact"><li className="hover:text-red-300 transition cursor-pointer">Contact</li></Link>
      </ul>

      {/* Auth Buttons + Hamburger/Cross */}
      <div className="flex items-center gap-4">
        {/* Auth Section */}
        <div>
          {user ? (
            <div className="relative">
              {/* Profile Circle */}
              <div
                onClick={() => setOpen((prev) => !prev)}
                className="w-[40px] h-[40px] rounded-full bg-red-300 text-white flex items-center justify-center cursor-pointer hover:bg-red-400 transition"
              >
               <img src={user?.image || profileImg} alt="" className='rounded-full  w-full h-full object-cover' />
              </div>

              {/* Dropdown Menu */}
              {open && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                  <button
                    onClick={() => {
                      navigate("/profile");
                      setOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white transition"
            >
              Login
            </button>
          )}
        </div>

        {/* Hamburger / Cross Menu (Mobile Only) */}
        <button
          onClick={() => setShowMobileMenu((prev) => !prev)}
          className="md:hidden"
        >
          {showMobileMenu ? (
            <RxCross2 className="text-3xl text-black" />
          ) : (
            <VscThreeBars className="text-3xl text-black" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
