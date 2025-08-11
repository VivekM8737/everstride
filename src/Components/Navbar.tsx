
// import { HiOutlineMail } from "react-icons/hi";
import everestlogo from "../assets/logo/everestridelogo.png"

import SocialIcons from "./Socialicons";

import { useState } from "react";
import {Link } from "react-router-dom";

import NavLinks from "./Navlinkes";

const Navbar = ({ onClick }: { onClick?: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/80 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" onClick={onClick} className="flex items-center space-x-2">
          <img src={everestlogo} alt="Logo" className="h-20 m-0" />
          <div className="text-xl font-semibold text-gray-800">
            {/* <x */}
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="space-x-8 text-gray-700 font-medium hidden md:flex">
          <NavLinks/>
        </div>

        {/* Social Icons */}
         <div className="hidden md:flex">
          <SocialIcons />
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 text-gray-700"
        >
          ☰
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out z-50`}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="p-4 text-gray-700 font-bold"
            >
              ✕
            </button>
            <nav className="flex flex-col space-y-4 p-4">
              <NavLinks onClick={() => setIsOpen(false)} />
            </nav>
            {/* Push social icons to bottom */}
            <div className="mt-auto p-4">
              <SocialIcons />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;