import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState('for employer');

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Fresher", to: "/fresher" },
    { name: "Recruiter", to: "/recruiter" },
    { name: "Contact", to: "/contact" },
    { name: "Blogs", to: "/blogs" },
  ];

  useEffect(() => {
    if (isOpen || loginOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen, loginOpen]);

  return (
    <nav className="w-full fixed top-0 z-50 font-[Roboto_Condensed]">
      <div className="w-full shadow-lg mx-auto px-4 sm:px-6 py-3 flex justify-between items-center  bg-black backdrop-blur-2xl">

        {/* Logo and Links */}
        <div className="flex items-center space-x-8 bg-white/20 rounded-full py-1 px-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="logo" className="w-10" />
            <span className="text-xl font-bold text-yellow-500">Galo Score</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `text-gray-100 text-md hover:text-yellow-500 ${isActive ? "text-yellow-500" : ""}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Desktop Login Dropdown */}
        <div className="relative hidden lg:flex items-center gap-1">
          {/* login */}
          <Link
            to='/login'
            className="flex items-center space-x-1 text-white px-4 py-2 rounded-full hover:text-yellow-500 font-medium text-sm"
          >
            <FaSignInAlt />
            <span>Login</span>

          </Link>
          {/* signup */}

          <Link
            to='/signup'
            className="flex items-center space-x-1 bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-400 font-medium text-sm"
          >
            <FaSignInAlt />
            <span>Signup</span>

          </Link>

          <span className="w-[1.7px] h-5 bg-gray-400 inline-block" />
          {/* dropdown */}
          <button
            onClick={() => setLoginOpen(!loginOpen)}
            className="flex items-center space-x-1 bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-400 font-medium text-sm"
          >

            <span className="capitalize">{selectedDropdown}</span>
            <svg
              className={`w-3 h-3 ml-1 transition-transform ${loginOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {loginOpen && (
            <div className="absolute right-0 top-10 mt-2 w-44 bg-white overflow-hidden rounded-lg shadow-lg z-50">

              <Link
                to="/login/recruiter"
                className="block px-4 py-2 text-gray-700 hover:bg-yellow-100"
                onClick={() => {
                  setSelectedDropdown('for recruiter')
                  setLoginOpen(false)
                }}
              >
                For Recruiter
              </Link>
              <Link
                to="/login"
                className="block px-4 py-2 text-gray-700 hover:bg-yellow-100 rounded-b-lg"
                onClick={() => {
                  setSelectedDropdown('for employer')
                  setLoginOpen(false)
                }}
              >
                For Employer
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-300 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="fixed top-0 inset-0 flex flex-col items-center justify-center bg-black space-y-6 px-4 text-2xl backdrop-blur-sm">
          <button
            className="absolute top-5 right-5 text-white text-3xl hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>

          {/* Mobile Login Dropdown */}
          <div className="flex flex-col w-full items-center space-y-1">

            <button
              onClick={() => setLoginOpen(!loginOpen)}
              className="flex items-center justify-between w-full px-4 py-2 border border-gray-300 rounded-md text-white hover:bg-gray-700 transition"
            >
              <span className="capitalize">{selectedDropdown}</span>
              <IoIosArrowUp size={20} className={`${loginOpen ? 'rotate-0' : 'rotate-180'} transition-transform ease-in-out`} />
            </button>


            {loginOpen && (
              <div className="flex flex-col w-full mt-1 space-y-1 px-2 bg-gray-500 rounded-2xl py-2">
                <Link
                  to="/login/recruiter"
                  className="w-full px-4 py-2 text-white hover:bg-gray-700 rounded-md text-center transition text-lg"
                  onClick={() => { setIsOpen(false); setLoginOpen(false);setSelectedDropdown('for recruiter') }}
                >
                  For Recruiter
                </Link>
                <Link
                  to="/login"
                  className="w-full px-4 py-2 text-white hover:bg-gray-700 rounded-md text-center transition text-lg"
                  onClick={() => { setIsOpen(false); setLoginOpen(false);setSelectedDropdown('for employer') }}
                >
                  For Fresher
                </Link>
              </div>
             )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="relative group text-white hover:text-black font-semibold transition w-full text-center py-2 px-4"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              <span className="absolute inset-0 bg-white text-black rounded-md scale-0 group-hover:scale-100 group-hover:rotate-0 transition-transform duration-300 ease-in-out z-[-1] origin-center shadow-lg clip-paper"></span>
            </Link>
          ))}


          <div className="flex gap-2">

            <Link
              to="/login"
              className="flex items-center justify-center gap-2 px-6 py-2 bg-yellow-500 text-black rounded-xl hover:bg-yellow-400 font-semibold shadow-md transition"
              onClick={() => setIsOpen(false)}
            >
              <FaUserPlus />
              <span className="text-lg">Login</span>
            </Link>
            <Link
              to="/signup"
              className="flex items-center justify-center gap-2 px-6 py-2 bg-yellow-500 text-black rounded-xl hover:bg-yellow-400 font-semibold shadow-md transition"
              onClick={() => setIsOpen(false)}
            >
              <FaUserPlus />
              <span className="text-lg">Register</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
