import React, { useContext, useState } from "react";
import pict from "../assets/to-do-list2.png";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {

  const [email, setemail] = useState("");
  const [password, setPassowrd] = useState("");
  const { serverUrl } = useContext(AppContext);
  console.log(serverUrl);

  const handleBtn = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        `${serverUrl}/api/user/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if(res){
        navigate("/")
        toast.success("Login successfully");
      }
      console.log(res);

    } catch (error) {
      toast.error(error.message);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex justify-center p-4 items-center ">
      <div className="bg-gray-100 w-[400px] h-[450px] shadow-lg shadow-gray-500 rounded-lg">
        <div className="w-full h-[30%] rounded-b-full bg-red-200 flex justify-center items-center">
          <img src={pict} alt="" className="w-[25%]" />
        </div>
        <form onSubmit={handleBtn} className="flex flex-col gap-[20px] mt-9 px-8">
          <input
            type="email"
            className="bg-gray-200 py-2 rounded-lg shadow-lg p-2 text-[17px] outline-none"
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter Your Email"
          />
          <input
            type="password"
            className="bg-gray-200 py-2 rounded-lg shadow-lg p-2 text-[17px] outline-none"
            onChange={(e) => setPassowrd(e.target.value)}
            placeholder="Enter Your Password"
          />
          <button
            className="w-full bg-red-200 py-2 rounded-lg shadow-lg shadow-gray-200 font-bold text-[17px] text-gray-700 hover:cursor-pointer hover:shadow-gray-300 "
            
          >
            Login
          </button>
          <p className="px-[50px] ">
            Create a New Acount{" "}
            <span
              className="font-bold text-red-300 text-[16px] hover:cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              SignUp
            </span>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
