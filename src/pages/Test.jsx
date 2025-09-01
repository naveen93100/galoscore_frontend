// import React, { useEffect } from "react";
// import { FaLaptopCode, FaDatabase, FaNetworkWired, FaCloud, FaShieldAlt, FaProjectDiagram } from "react-icons/fa";

// const TestPage = () => {
//     const tests = [
//         { title: "Web Development", icon: <FaLaptopCode size={40} className="text-blue-500" /> },
//         { title: "Database Management", icon: <FaDatabase size={40} className="text-green-500" /> },
//         { title: "Networking Basics", icon: <FaNetworkWired size={40} className="text-purple-500" /> },
//         { title: "Cloud Computing", icon: <FaCloud size={40} className="text-cyan-500" /> },
//         { title: "Cybersecurity", icon: <FaShieldAlt size={40} className="text-red-500" /> },
//         { title: "Project Management", icon: <FaProjectDiagram size={40} className="text-yellow-500" /> },
//     ];

//     useEffect(()=>{

//         window.scroll(0,0);

//     },[]);

//     return (
//         <div className="bg-gray-50  py-12 pt-30">
//             <div className="max-w-5xl mx-auto px-6 text-center">

//                 <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-transparent bg-clip-text">
//                     Unlock Your Potential with Tailored Assessments
//                 </h1>
//                 <p className=" text-gray-700 max-w-2xl mx-auto leading-relaxed">
//                     Discover a curated selection of domain-specific tests crafted by industry leaders to help you
//                     measure, enhance, and showcase your expertise. Take the first step towards proving your skills
//                     and standing out in your career journey.
//                 </p>


//                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-3">
//                     {tests.map((test, index) => (
//                         <div
//                             key={index}
//                             className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl 
//                          transition-transform hover:-translate-y-2 flex items-center flex-col"
//                         >
//                             {test.icon}
//                             <h3 className="mt-4 text-lg font-semibold text-gray-800">{test.title}</h3>
//                             <button className="mt-5 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
//                                 Start Test
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TestPage;


import React, { useEffect } from "react";
import {
    FaUserTie,
    FaComments,
    FaChartLine,
    FaLightbulb,
    FaBriefcase,
    FaBalanceScale
} from "react-icons/fa";

const TestPage = () => {
    const tests = [
        {
            title: "Aptitude & Reasoning",
            icon: <FaLightbulb size={30} className="text-yellow-500" />,
            description: "Evaluate your logical reasoning, problem-solving, and numerical ability.",
            duration: "15 min"
        },
        {
            title: "Communication Skills",
            icon: <FaComments size={30} className="text-black" />,
            description: "Test your verbal, written, and interpersonal communication skills.",
            duration: "10 min"
        },
        {
            title: "Analytical Thinking",
            icon: <FaChartLine size={30} className="text-yellow-500" />,
            description: "Measure your data interpretation, critical thinking, and decision-making.",
            duration: "12 min"
        },
        {
            title: "Domain Knowledge",
            icon: <FaBriefcase size={30} className="text-black" />,
            description: "Assess your expertise in your specific field or industry.",
            duration: "20 min"
        },
        {
            title: "Personality Assessment",
            icon: <FaUserTie size={30} className="text-yellow-500" />,
            description: "Understand your workplace personality and behavioral traits.",
            duration: "8 min"
        },
        {
            title: "Ethics & Workplace Behavior",
            icon: <FaBalanceScale size={30} className="text-black" />,
            description: "Evaluate your integrity, ethics, and decision-making at work.",
            duration: "10 min"
        }
    ];

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (

        <div className="bg-gray-50 py-16 font-[Roboto_Condensed] pt-30">
            <div className="max-w-6xl mx-auto px-3 text-center space-y-6">
                {/* Section Header */}
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-transparent bg-clip-text p-1">
                    Showcase Your Professional Strengths
                </h1>
                <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-lg">
                    Unlock your potential with a wide variety of assessments designed to
                    evaluate your professional skills, personality traits, and workplace readiness.
                    Boost your GaloScore and catch the attention of top recruiters.
                </p>

                {/* Tests Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {tests.map((test, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-3 flex flex-col items-center text-center"
                        >
                            <div className={`rounded-full p-4 mb-4 ${index % 2 === 0 ? 'bg-black text-white' : 'bg-yellow-500 text-black'}`}>
                                {test.icon}
                            </div>
                            <h3 className="mt-2 text-xl font-semibold text-gray-800">{test.title}</h3>
                            <p className="mt-2 text-sm text-gray-600">{test.description}</p>
                            <span className="mt-4 text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                {test.duration}
                            </span>
                            <button className="mt-5 w-full py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition-colors">
                                Start Test
                            </button>
                        </div>
                    ))}
                </div>

                {/* See More Button */}
                <button className="mt-12 px-6 py-3 bg-black text-yellow-500 font-semibold rounded-full hover:bg-gray-900 transition-colors">
                    See More Tests
                </button>
            </div>
        </div>


    );
};

export default TestPage;
