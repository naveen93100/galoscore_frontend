import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaUserGraduate, FaBook, FaChartBar, FaSignOutAlt, FaBars, FaChevronDown ,FaHome } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setLoginUserData, setToken } from "../../../slices/authSlice";

const StudentDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user } = useSelector(state => state.auth);
  const [showSubMenu, setShowSubMenu] = useState(false);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setLoginUserData(null));
    dispatch(setToken(null));
    localStorage.removeItem('userData');
    localStorage.removeItem('token');
    navigate('/');

  }

  return (
    <div className="flex h-screen ">

      {/* Sidebar */}
      <div
        onMouseEnter={() => setIsSidebarOpen(true)}
        onMouseLeave={() => setIsSidebarOpen(false)}
        className={`bg-slate-900 text-white transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-16"
          } p-4 flex flex-col justify-between border-r-1 border-gray-700`}
      >

        <div className="flex items-center justify-between mb-6">
          {isSidebarOpen && (
            <h1 className="text-xl font-bold bg-yellow-500 text-black rounded-2xl p-2">
              GALO Score
            </h1>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-yellow-400"
          >
            <FaBars />
          </button>
        </div>


        {/* <nav className="space-y-4 flex-1 overflow-y-auto">
          <Link
            to="/student"
            className="flex items-center space-x-2 text-white hover:text-black rounded-2xl p-2 hover:bg-yellow-500"
          >
            <FaUserGraduate />
            {isSidebarOpen && <span>Home</span>}
          </Link>
          <Link
            to="/student/profile"
            className="flex items-center space-x-2 text-white hover:text-black rounded-2xl p-2 hover:bg-yellow-500"
          >
            <FaUserGraduate />
            {isSidebarOpen && <span>Profile</span>}
          </Link>
          <Link
            to="/student/tests"
            className="flex items-center space-x-2 text-white hover:text-black rounded-2xl p-2 hover:bg-yellow-500"
          >
            <FaBook />
            {isSidebarOpen && <span>My Tests</span>}
          </Link>
          <Link
            to="/student/score"
            className="flex items-center space-x-2 text-white hover:text-black rounded-2xl p-2 hover:bg-yellow-500"
          >
            <FaChartBar />
            {isSidebarOpen && <span>My Score</span>}
          </Link>
        </nav> */}

        <nav className="space-y-4 flex-1 overflow-y-auto">
          <Link
            to="/student"
            className="flex items-center space-x-2 text-white hover:text-black rounded-2xl p-2 hover:bg-yellow-500"
          >
            <FaHome  />
            {isSidebarOpen && <span>Home</span>}
          </Link>

          <Link
            to="/student/profile"
            className="flex items-center space-x-2 text-white hover:text-black rounded-2xl p-2 hover:bg-yellow-500"
          >
            <FaUserGraduate />
            {isSidebarOpen && <span>Profile</span>}
          </Link>

          {/* My Tests Dropdown */}
          <div className="">
            <button
              onClick={() => setShowSubMenu(!showSubMenu)}
              className="w-full flex items-center justify-between rounded-2xl p-2 hover:bg-yellow-500 hover:text-black"
            >
              <div className="flex items-center space-x-2">
                <FaBook />
                {isSidebarOpen && <span>My Tests</span>}
              </div>
              {isSidebarOpen && <FaChevronDown className={`transition-transform duration-200 ${showSubMenu ? 'rotate-180' : ''}`} />}
            </button>

            {showSubMenu && isSidebarOpen && (
              <div className="ml-8 mt-2 space-y-2">
                <Link to="/student/tests/cse" className="block text-sm hover:text-black p-2 rounded-2xl hover:bg-yellow-500">CSE</Link>
                <Link to="/student/tests/ece" className="block text-sm hover:text-black p-2 rounded-2xl hover:bg-yellow-500">ECE</Link>
                {/* <Link to="/student/tests/eee" className="block text-sm hover:text-black p-2 rounded-2xl hover:bg-yellow-500">EEE</Link> */}
                <Link to="/student/tests/me" className="block text-sm hover:text-black p-2 rounded-2xl hover:bg-yellow-500">Mechanical</Link>
                {/* <Link to="/student/tests/ce" className="block text-sm hover:text-black p-2 rounded-2xl hover:bg-yellow-500">CE</Link> */}
                {/* <Link to="/student/tests/it" className="block text-sm hover:text-black p-2 rounded-2xl hover:bg-yellow-500">IT</Link> */}
              </div>
            )}
          </div>

          <Link
            to="/student"
            className="flex items-center space-x-2 text-white hover:text-black rounded-2xl p-2 hover:bg-yellow-500"
          >
            <FaChartBar />
            {isSidebarOpen && <span>My Score</span>}
          </Link>
        </nav>


        <div className={`w-full  shadow-sm rounded-lg p-3 flex ${isSidebarOpen ? "flex-col items-start" : "flex-col items-center"} gap-3`}>

          <div className="w-10 h-10">
            <img
              src={user?.picture}
              alt={user?.name || "User Avatar"}
              className="w-full h-full object-cover rounded-full border border-gray-300"
              referrerPolicy="no-referrer"
            />
          </div>
          {isSidebarOpen && (
            <p className="text-sm font-medium text-gray-500">{user?.name}</p>
          )}


          {/* Logout button */}
          {isSidebarOpen ? (
            <button onClick={handleLogout} className="w-full px-4 py-2 bg-yellow-500 text-black font-semibold text-sm rounded-md hover:bg-yellow-600 transition">
              Logout
            </button>
          ) : (
            <button className="p-2 text-white hover:text-yellow-500">
              <FaSignOutAlt size={18} />
            </button>
          )}
        </div>

      </div>


      <div className="flex-1 bg-slate-900 overflow-auto flex flex-col">
        {/* Dashboard Top Navbar */}
        <div className="w-full border-b-1 border-gray-700 shadow-sm p-4 flex items-center justify-between">
          {/* Left - Logo or Page title (optional) */}
          <h2 className="text-xl font-semibold text-gray-300">Student Dashboard</h2>

          {/* Right - User Info */}
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-300 hidden sm:block">{user?.name || "Student"}</p>
            <img
              src={user?.picture}
              alt="User Avatar"
              className="w-10 h-10 object-cover rounded-full border border-gray-300"
              referrerPolicy="no-referrer"
            />
          
          </div>
        </div>

        {/* Outlet Content */}
        <div className="flex-1 p-6 ">
          <Outlet />
        </div>
      </div>

    </div>
  );
};

export default StudentDashboard;
