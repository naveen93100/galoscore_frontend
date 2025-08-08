import { Link } from 'react-router-dom';
import {
    FaClipboardList, FaBullseye, FaSearch, FaBolt, FaPuzzlePiece, FaBriefcase 
} from 'react-icons/fa';
import { useSelector } from 'react-redux';

const StudentHome = () => {

    const { user: { name } } = useSelector(state => state.auth);


    return (
        <div className="min-h-screen  p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold  text-gray-300 mb-2 text-center lg:text-left">
                    Welcome, {name}!
                </h1>
                <p className="text-gray-400 text-xl mb-8 text-center lg:text-left font-light">Your pathway to a brilliant career begins here.</p>

                {/* New Top-Level Dashboard Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

                    {/* Explore Tests Card */}
                    <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center text-center transition duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
                        <FaClipboardList className="text-white text-6xl mb-5 animate-pulse" />
                        <h2 className="text-3xl font-bold mb-3">Explore Assessments</h2>
                        <p className="text-lg text-blue-100 mb-6">Discover tests tailored to your skills and career path.</p>
                        <Link className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:bg-blue-100 transition duration-300 flex items-center">
                            View All Tests <FaBolt className="ml-3 text-lg" />
                        </Link>
                    </div>

                    {/* Practice Zones Card */}
                    <div className="bg-gradient-to-br from-green-500 to-green-700 text-white rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center text-center transition duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
                        <FaBullseye className="text-white text-6xl mb-5 animate-pulse" />
                        <h2 className="text-3xl font-bold mb-3">Boost Your Skills</h2>
                        <p className="text-lg text-green-100 mb-6">Sharpen your knowledge with targeted practice modules.</p>
                        <Link className="px-8 py-3 bg-white text-green-700 font-semibold rounded-full shadow-lg hover:bg-green-100 transition duration-300 flex items-center">
                            Start Practicing <FaPuzzlePiece className="ml-3 text-lg" />
                        </Link>
                    </div>

                    {/* Job Match Card */}
                    <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center text-center transition duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
                        <FaSearch className="text-white text-6xl mb-5 animate-pulse" />
                        <h2 className="text-3xl font-bold mb-3">Find Your Dream Job</h2>
                        <p className="text-lg text-purple-100 mb-6">Get matched with top employers based on your GALOScore.</p>
                        <Link className="px-8 py-3 bg-white text-purple-700 font-semibold rounded-full shadow-lg hover:bg-purple-100 transition duration-300 flex items-center">
                            Explore Job Matches <FaBriefcase className="ml-3 text-lg" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentHome;