import React from "react";
import { FaAward, FaExternalLinkAlt, FaShieldAlt, FaChartLine, FaUserCheck, FaGlobe } from "react-icons/fa";

const Certificates = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12 sm:pt-30 pt-40 bg-gray-100">
            <div className="bg-white p-10 rounded-2xl">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <div className="flex justify-center mb-4">
                        <FaAward className="text-yellow-500 text-4xl" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold">
                        Earn <span className="text-yellow-500">Industry-Recognized</span> Certificates
                    </h1>
                    <p className="mt-4 text-gray-700">
                        Validate your skills with certificates from leading industry partners. Boost your career prospects and stand out to employers.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                        <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md flex items-center justify-center gap-2">
                            <FaAward /> View My Certificates
                        </button>
                        <button className="border border-yellow-500 text-black font-semibold px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-yellow-400 hover:text-black">
                            <FaExternalLinkAlt /> Explore Programs
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mt-12">
                    <div>
                        <h2 className="text-2xl font-bold text-yellow-500">25K+</h2>
                        <p className="text-gray-700">Certificates Issued</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-yellow-500">500+</h2>
                        <p className="text-gray-700">Partner Companies</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-yellow-500">15+</h2>
                        <p className="text-gray-700">Certification Programs</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-yellow-500">95%</h2>
                        <p className="text-gray-700">Employer Recognition</p>
                    </div>
                </div>
            </div>

            {/* Why Certificates Matter */}
            <div className="mt-16">
                <h2 className="text-center text-2xl font-bold mb-10">Why Our Certificates Matter</h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="bg-black text-white rounded-lg shadow-md p-6 text-center transition-all ease-in-out hover:scale-105">
                        <FaShieldAlt className="text-yellow-500 text-3xl mx-auto mb-4" />
                        <h3 className="font-semibold mb-2">Industry Recognition</h3>
                        <p className="text-sm text-gray-400">
                            Our certificates are recognized by top companies and hiring managers worldwide.
                        </p>
                    </div>
                    <div className="bg-yellow-500 text-white rounded-lg shadow-md p-6 text-center transition-all ease-in-out hover:scale-105">
                        <FaChartLine className="text-black text-3xl mx-auto mb-4" />
                        <h3 className="font-semibold mb-2 text-black">Career Advancement</h3>
                        <p className="text-sm text-gray-800">
                            Boost your resume and increase your chances of landing your dream job.
                        </p>
                    </div>
                    <div className="bg-black text-white rounded-lg shadow-md p-6 text-center transition-all ease-in-out hover:scale-105">
                        <FaUserCheck className="text-yellow-500 text-3xl mx-auto mb-4" />
                        <h3 className="font-semibold mb-2">Skill Validation</h3>
                        <p className="text-sm text-gray-400">
                            Demonstrate your expertise with verified assessments from industry experts.
                        </p>
                    </div>
                    <div className="bg-yellow-500 text-white rounded-lg shadow-md p-6 text-center transition-all ease-in-out hover:scale-105">
                        <FaGlobe className="text-black text-3xl mx-auto mb-4" />
                        <h3 className="font-semibold mb-2 text-black">Global Standards</h3>
                        <p className="text-sm text-gray-800">
                            Certificates based on international standards and best practices.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certificates;
