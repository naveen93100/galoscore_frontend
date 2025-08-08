import { useEffect } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
    useEffect(()=>{
          window.scrollTo(0,0);
        },[])
    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12 sm:pt-30 pt-40 bg-gray-100">
            {/* Heading */}
            <div className="bg-white p-5 rounded-2xl">
                <div className="text-center max-w-2xl mb-12 mx-auto">
                    <h2 className="text-4xl font-bold mb-4">
                        Get In <span className="text-yellow-500">Touch</span>
                    </h2>
                    <p className="text-gray-700 font-semibold">
                        Have questions about our test portal? Need support with your certification
                        journey? We're here to help.
                    </p>
                </div>

                {/* Contact Container */}
                <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
                    {/* Left Side - Form */}
                    <div className="bg-black p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-6 text-white">
                            Send us a Message
                        </h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-yellow-500 mb-1">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your full name"
                                        className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-yellow-500 mb-1">Email</label>
                                    <input
                                        type="email"
                                        placeholder="your.email@example.com"
                                        className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-yellow-500 mb-1">Subject</label>
                                <input
                                    type="text"
                                    placeholder="What's this about?"
                                    className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                />
                            </div>
                            <div>
                                <label className="block text-yellow-500 mb-1">Message</label>
                                <textarea
                                    placeholder="Tell us more..."
                                    rows="5"
                                    className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-yellow-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-400 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right Side - Contact Info */}
                    <div className="space-y-4">
                        <div className="bg-black p-6 rounded-lg flex items-center gap-4 shadow-lg">
                            <div className="bg-yellow-500 p-3 rounded-md">
                                <FaEnvelope className="text-black text-lg" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">Email Us</h4>
                                <p className="text-gray-300">support@testportal.com</p>
                            </div>
                        </div>
                        <div className="bg-black p-6 rounded-lg flex items-center gap-4 shadow-lg">
                            <div className="bg-yellow-500 p-3 rounded-md">
                                <FaPhoneAlt className="text-black text-lg" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">Call Us</h4>
                                <p className="text-gray-300">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="bg-black p-6 rounded-lg flex items-center gap-4 shadow-lg">
                            <div className="bg-yellow-500 p-3 rounded-md">
                                <FaMapMarkerAlt className="text-black text-lg" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">Visit Us</h4>
                                <p className="text-gray-300">
                                    123 Tech Street, Silicon Valley, CA 94105
                                </p>
                            </div>
                        </div>
                        <div className="bg-black p-6 rounded-lg flex items-center gap-4 shadow-lg">
                            <div className="bg-yellow-500 p-3 rounded-md">
                                <FaClock className="text-black text-lg" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">Support Hours</h4>
                                <p className="text-gray-300">Mon - Fri, 9am - 6pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;
