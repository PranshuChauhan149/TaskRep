import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 md:px-16 py-12">
      {/* Banner Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-300 mb-4">
          About Our To-Do List
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Simple. Smart. Stylish. We help you manage your tasks with clarity and focus.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition-all border-t-4 border-red-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">🧠 Easy to Use</h3>
          <p className="text-gray-600">
            A clean, distraction-free UI so you can get things done quickly and efficiently.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition-all border-t-4 border-indigo-400">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">⚡ Fast & Responsive</h3>
          <p className="text-gray-600">
            Lightning-fast performance and responsive design — works across all your devices.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition-all border-t-4 border-red-400">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">🔒 Safe & Private</h3>
          <p className="text-gray-600">
            Your data stays yours. We never share it, and it’s securely stored.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-red-300 mb-4">Why We Created This</h2>
        <p className="text-gray-600 text-lg">
          Managing tasks shouldn't feel like a task. Our mission is to provide a smooth and stylish space where anyone — from students to professionals — can organize their life and reduce stress with just a few clicks.
        </p>
      </div>

      {/* Team/CTA */}
      <div className="bg-indigo-50 py-10 rounded-2xl shadow-md text-center">
        <h3 className="text-2xl font-semibold text-red-300 mb-2">Join Our Community</h3>
        <p className="text-gray-600 mb-6">
          Be part of thousands who are leveling up their productivity.
        </p>
        <a
          href="/signup"
          className="inline-block px-6 py-3 bg-red-300 text-white rounded-full hover:bg-red-700 transition"
        >
          Get Started Now
        </a>
      </div>
    </div>
  );
};

export default About;
