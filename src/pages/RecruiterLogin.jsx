import { useForm } from "react-hook-form";
import { GoogleLogin } from '@react-oauth/google';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CompleteProfileModal from "../components/CompleteProfileModal";
import { useDispatch } from 'react-redux';
import { setLoginUserData, setToken } from "../slices/authSlice";
import toast from "react-hot-toast";

const RecruiterLogin = () => {
  const [userSignupinfo, setUserSignupinfo] = useState(null);
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
   
  };

  const handleGoogleLogin = async (data) => {
    
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 pt-20 px-4">

        {/* Left Section */}
        <div className="hidden md:flex w-full md:w-1/2 items-center justify-center p-10">
          <div className="text-center">
            <img
              src="/studying.svg"
              alt="Recruiter Visual"
              className="w-3/4 mx-auto mt-6"
            />
            <h1 className="text-3xl font-bold text-yellow-500 mb-4">Recruiter Portal</h1>
            <p className="text-gray-700 text-lg">
              Manage job postings, review candidate assessments, and hire top talent efficiently.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 bg-black/90 shadow-md rounded-lg max-w-md mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-200 underline">Recruiter Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            {/* Company Name */}
            <div>
              <label className="block text-gray-200 mb-1">Company Name</label>
              <input
                type="text"
                {...register("companyName", { required: "Company Name is required" })}
                placeholder="Your Company"
                className="w-full px-4 py-2 border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              {errors.companyName && (
                <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-200 mb-1">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Email"
                className="w-full px-4 py-2 border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-200 mb-1">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                })}
                placeholder="Password"
                className="w-full px-4 py-2 border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              Login
            </button>
          </form>

          <div className="mt-4 z-10">
            <GoogleLogin onSuccess={handleGoogleLogin} onError={handleGoogleLogin} />
          </div>

          <p className="mt-4 text-sm text-gray-500 text-center">
            Don't have an account? <Link to='#' className="text-yellow-500 font-medium cursor-pointer">Sign up</Link>
          </p>
        </div>
      </div>

      {open && (
        <CompleteProfileModal setOpen={setOpen} userSignupinfo={userSignupinfo} setUserSignupinfo={setUserSignupinfo} />
      )}
    </>
  );
};

export default RecruiterLogin;
