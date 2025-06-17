import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import navImage from "../assets/to-do-list3.png"; // use your logo

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-20 pt-10 pb-6 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="grid md:grid-cols-3 gap-10">
        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={navImage} alt="Logo" className="w-8" />
            <h2 className="font-bold text-xl text-red-300">To-Do-List</h2>
          </div>
          <p className="text-sm text-gray-600">
            Simplify your day and boost productivity with our clean and smart to-do solution.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-lg text-red-300 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-400 cursor-pointer">Home</li>
            <li className="hover:text-red-400 cursor-pointer">About</li>
            <li className="hover:text-red-400 cursor-pointer">To-Do List</li>
            <li className="hover:text-red-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="font-semibold text-lg text-red-300 mb-3">Contact Us</h3>
          <p className="text-sm mb-2">Email: support@todoweb.com</p>
          <div className="flex gap-4 mt-2 text-xl text-red-300">
            <a href="#"><FaGithub className="hover:red-500 transition" /></a>
            <a href="#"><FaLinkedin className="hover:text-red-400 transition" /></a>
            <a href="#"><FaEnvelope className="hover:text-red-400 transition" /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} To-Do-List. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
