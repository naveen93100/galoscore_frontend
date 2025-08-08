import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Corporate", to: "/corporate" },
    { name: "Student", to: "/student" },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <nav className="w-full fixed top-0 p-3 z-50">
      <div className="max-w-7xl shadow-lg mx-auto px-4 sm:px-6 py-3 flex justify-between items-center rounded-full bg-black backdrop-blur-2xl">
        {/* Left side: Logo + NavLinks */}
        <div className="flex items-center space-x-8 bg-white/20 rounded-full py-1 px-4">
          <Link to="/" className="flex items-center space-x-2 text-3xl font-bold text-yellow-500">
            <span>GALO SCORE</span>
          </Link>

          <div className="hidden md:flex items-center space-x-10  ">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `text-gray-100  text-md hover:text-yellow-500 ${isActive ? "text-yellow-500" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Right side: Auth Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/login"
            className="flex items-center space-x-1 text-gray-100 hover:text-yellow-500 font-medium text-sm"
          >
            <FaSignInAlt />
            <span>Login</span>
          </Link>
          <Link
            to="/signup"
            className="flex items-center space-x-1 bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-400 font-medium text-sm"
          >
            <FaUserPlus />
            <span>Sign up</span>
          </Link>
        </div>

        {/* Mobile menu icon */}
        <button
          className="md:hidden text-gray-300 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Dropdown */}

      {isOpen && (
        <div className="fixed top-0 inset-0  flex flex-col items-center justify-center bg-black space-y-6 px-4 text-2xl backdrop-blur-sm">

          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-white text-3xl hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>

          {/* Nav Links */}
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

          {/* Login */}
          <Link
            to="/login"
            className="flex items-center gap-2 text-white hover:text-yellow-400 font-semibold transition"
            onClick={() => setIsOpen(false)}
          >
            <FaSignInAlt />
            <span>Login</span>
          </Link>

          {/* Register */}
          <Link
            to="/signup"
            className="flex items-center justify-center gap-2 px-6 py-2 bg-yellow-500 text-black rounded-xl hover:bg-yellow-400 font-semibold shadow-md transition"
            onClick={() => setIsOpen(false)}
          >
            <FaUserPlus />
            <span>Register</span>
          </Link>
        </div>
      )}

    </nav>
  );
};

export default Navbar;



