import React from 'react'
import Navbar from '../components/Navbar'
import bannerImage from '../assets/bannerImage.png'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
   <div className='lg:px-[150px] '>
     <div className='w-full  mt-[50px]  flex gap-[20px] justify-center bg-red-200 p-4 items-center rounded-lg '>
      <div className='lg:w-[30%]   w-[60%] h-full   '>
        <img src={bannerImage} alt="" className='w-full' />
      </div>
     <div className=" w-[40%] flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-white text-3xl md:text-5xl font-bold mb-2">
      Stay Organized, Stay Productive
    </h1>
    <p className=" hidden lg:block text-white text-lg md:text-xl">
      Create your daily tasks with our smart To-Do List
    </p>
  </div>
    </div>
    <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-red-300 mb-6">Why Use Our App?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-gray-700">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Simple Interface</h3>
            <p>Our app is clean and distraction-free. Add and manage tasks with ease.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Real-Time Sync</h3>
            <p>Access your to-do list from any device. Changes update instantly.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Reminders</h3>
            <p>Never forget a task again. Set reminders and stay on top of your goals.</p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-red-300 mb-6">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 text-gray-700">
          <div className="p-4">
            <div className="text-4xl mb-2">📝</div>
            <h4 className="font-semibold text-xl mb-1">Step 1: Create an Account</h4>
            <p>Sign up with your email to get started.</p>
          </div>
          <div className="p-4">
            <div className="text-4xl mb-2">➕</div>
            <h4 className="font-semibold text-xl mb-1">Step 2: Add Your Tasks</h4>
            <p>Create your daily, weekly, or long-term goals.</p>
          </div>
          <div className="p-4">
            <div className="text-4xl mb-2">✅</div>
            <h4 className="font-semibold text-xl mb-1">Step 3: Get Things Done</h4>
            <p>Check off tasks as you go. Stay productive!</p>
          </div>
        </div>
      </div>

      {/* Final Call to Action */}
      <div className="mt-20 bg-red-300 text-white text-center py-10 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Start Planning Your Day</h3>
        <Link to="/signup">
          <button className="bg-white text-red-300 px-6 py-2 rounded-full font-semibold hover:bg-indigo-100 transition">
            Join Free Now
          </button>
        </Link>
      </div>
   </div>

  )
}

export default Home
