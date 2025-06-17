import axios from 'axios';
import React, { useContext, useState } from 'react'
import { AppContext } from '../contexts/AppContext';
import { toast } from 'react-toastify';

const Contact = (e) => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
console.log(name);
  const { serverUrl } = useContext(AppContext);
  const handleBtn = async(e) =>{
    try{
      e.preventDefault();
      const res = await axios.post(`${serverUrl}/api/auth/contact`,{
        name,
        email,
        message
      },{
        withCredentials:true
      })
     if(res){
        setEmail("");
      setName("");
      setMessage("")
      toast.success("Message send")
     
     }
     else{
      toast.error("Message not send")
     }
     console.log(res)
    }
    catch(error){

      toast.error("something is wrong in message")
    }
  }
  return (
    <div className="min-h-[80vh] py-12 px-6 md:px-16 lg:px-32 bg-gray-50">
  <h2 className="text-3xl font-bold text-center text-red-300 mb-8">
    Contact Us
  </h2>

  <form onSubmit={handleBtn} className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-6">
    {/* Name */}
    <div>
      <label className="block mb-2 font-semibold text-gray-700">Name</label>
      <input
        type="text"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400 transition"
        placeholder="Your name" required onChange={(e)=>setName(e.target.value)} value={name}
      />
    </div>

    {/* Email */}
    <div>
      <label className="block mb-2 font-semibold text-gray-700">Email</label>
      <input
        type="email"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400 transition"
        placeholder="you@example.com" required onChange={(e)=>setEmail(e.target.value)} value={email}  
      /> 
    </div>

    {/* Message */}
    <div>
      <label className="block mb-2 font-semibold text-gray-700">Message</label>
      <textarea
        rows="5"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400 transition resize-none"
        placeholder="Write your message... " required onChange={(e)=>setMessage(e.target.value)} value={message}
      ></textarea>
    </div>

    {/* Submit */}
    <button
      type="submit"
      className="w-full bg-red-300 hover:bg-red-400 text-white font-semibold py-2 rounded-full transition"
    >
      Send Message
    </button>
  </form>
</div>

  )
}

export default Contact
