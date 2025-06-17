import React, { useContext, useState } from 'react'
import pict from '../assets/to-do-list.png'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios';
import { AppContext } from '../contexts/AppContext';
const SignUp = () => {

  const {serverUrl}  = useContext(AppContext);

  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setpassword] = useState("");
  const navigate = useNavigate();

  const handleBtn = (e) =>{
    try{
      e.preventDefault();
      const res = axios.post(`${serverUrl}/api/user/signup`,{
        username,
        email,
        password
      },{
        withCredentials:true
      })

      if(res){
        navigate("/")
        toast.success("Account Created Successfully");
      }
    }catch(error){
      toast.error(error.message);
    }
  }

  return (
    <div className='w-full h-screen flex justify-center p-4 items-center '>
      
      <div className='bg-gray-100 w-[400px] h-[500px] shadow-lg shadow-gray-500 rounded-lg'>
    <div className='w-full h-[30%] rounded-b-full bg-red-200 flex justify-center items-center'>
      <img src={pict} alt="" className='w-[25%]' />
    </div>
    <form onSubmit={handleBtn} className='flex flex-col gap-[20px] mt-9 px-8'>
      
      <input type="text" className='bg-gray-200 py-2 rounded-lg shadow-lg p-2 text-[17px] outline-none' placeholder='Enter Your UserName ' onChange={(e)=>setUsername(e.target.value)}/>
      <input type="email" className='bg-gray-200 py-2 rounded-lg shadow-lg p-2 text-[17px] outline-none' placeholder='Enter Your Email'  onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" className='bg-gray-200 py-2 rounded-lg shadow-lg p-2 text-[17px] outline-none' placeholder='Enter Your Password'  onChange={(e)=>setpassword(e.target.value)}/>
      <button className='w-full bg-red-200 py-2 rounded-lg shadow-lg shadow-gray-200 font-bold text-[17px] text-gray-700 hover:cursor-pointer hover:shadow-gray-300 '>Sign Up</button>
      <p className='px-[40px] '>If you have already Acount <span className='font-bold text-red-300 text-[16px] hover:cursor-pointer' onClick={()=>navigate("/login")} >Login</span> </p>
    </form>


      </div>
      
    </div>
  )
}

export default SignUp
