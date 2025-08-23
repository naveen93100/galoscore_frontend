

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLightbulb, FaChartPie, FaHandPointer, FaSearch, FaBriefcase } from "react-icons/fa";

const Home = () => {
  const steps = [
    { icon: <FaLightbulb className="text-yellow-500" />, label: "Take GALO Test" },
    { icon: <FaChartPie className="text-yellow-500" />, label: "Get a Score" },
    { icon: <FaHandPointer className="text-yellow-500" />, label: "Start Applying" },
    { icon: <FaSearch className="text-yellow-500" />, label: "Get Shortlisted" },
    { icon: <FaBriefcase className="text-yellow-500" />, label: "Get Hired" },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);

  }, []);
  return (
    <>

      <div className=" min-h-screen flex flex-col justify-center items-center px-4 py-12 sm:pt-30 pt-40 bg-gray-100">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}

          <div className="space-y-6 lg:space-y-9 ">
            <h1 className="capitalize text-3xl md:text-4xl lg:text-6xl font-bold flex flex-col ">
              Unlock your {''}
               <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">
                dream career
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 ">
              Galo Score : A platform that lets you prove your skills even as a fresher from a lesser-known college
            </h2>
            <p className="text-gray-700 text-lg font-medium ">
              You’ve worked hard, learned the skills, and dream of building a great career, but without a famous college name or experience on your resume, it’s easy to feel invisible. Galo Score gives you a fair chance to prove your abilities, get noticed by employers, and open doors to better career opportunities.
            </p>
            <div className="flex gap-2 flex-wrap">
              <Link
                to="/"
                className="text-sm  px-3 py-3 bg-yellow-500 text-black font-medium rounded-lg shadow-md hover:bg-yellow-400 hover:shadow-sm active:translate-y-0.5 active:shadow-inner transition-all duration-150"
              >
                Take the Free Test
              </Link>
              <Link
                to="/"
                className="text-sm  px-3 py-3 bg-black  text-white font-medium rounded-lg shadow-md hover:bg-black/80 hover:shadow-lg active:translate-y-0.5 active:shadow-inner transition-all duration-150"
              >
                Access Talent
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full flex justify-center">
            <img
              src="/undraw.png"
              alt="Minimal test illustration"
              className="w-full max-w-md rounded-2xl mix-blend-darken"
            />
          </div>
        </div>
      </div>

      {/* about */}
      <div className="min-h-screen bg-gray-300 px-6 py-16  ">
        <div className="max-w-6xl mx-auto flex flex-col gap-16 backdrop-blur-sm bg-white/50 rounded-2xl p-2">

          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 w-full">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img
                src="/about.png"
                alt="Students studying"
                className="w-full"
              />
            </div>

            {/* Text Content Section */}
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold text-yellow-500 mb-4">Your test. Your opportunity.</h2>
              <p className="text-gray-700 leading-relaxed font-medium  ">
                Every year, thousands of talented students graduate from colleges across India, but many struggle to secure interviews or gain the attention of recruiters.
              </p>

              <p className="text-gray-700 leading-relaxed font-medium mt-1">We started Galo Score to solve that problem. </p>

              <div className="mt-4 text-gray-700 font-medium space-y-2">
                <p>It includes:</p>
                <ul className="list-disc list-inside pl-2">
                  <li>A comprehensive general aptitude test</li>
                  <li>A role-specific domain skills test</li>
                </ul>
              </div>

              <p className="mt-4 text-gray-700 font-medium">
                By focusing on Core Branches of Engineering (Civil, Chemical, Electrical), aptitude, and logical reasoning, we give graduates a fair and equal chance to showcase their employability.
              </p>
            </div>
          </div>


          {/* Problem Section */}

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Galo Score Matters</h3>
            <p className="text-gray-700 mb-4">

              We built Galo Score to bridge the gap between skilled freshers, especially B.Tech, B.Com, or B.Sc graduates from Tier 2 and Tier 3 colleges and the employers who are looking for real potential, not just big college names. We help you prove your skills, earn a credible score, and add value to your resume.
            </p>
            <div className="text-gray-700 mb-4 ">
              <strong>More Than a Test — A Mark of Readiness</strong><br />
              Galo Score is more than an exam; it is a professional credential.
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Apply with confidence based on objective performance metrics</li>
                <li>Highlight competencies beyond academic transcripts</li>
                <li>Differentiate yourself with verified evidence of job readiness</li>
              </ul>
            </div>
            <p className="text-gray-700">
              For students from Tier 2 & 3 colleges, Galo Score offers an equitable platform to be recognized—without any cost. For employers, it provides a trusted, data-driven hiring tool available at no charge during the current phase.
            </p>
          </div>


          {/* Vision/Mission/Values */}
          <div className="grid md:grid-cols-3 gap-6 text-center ">
            <div className="bg-yellow-500 text-black p-6 rounded-lg shadow-md hover:scale-95 transition-all ease-linear">
              <h4 className="text-xl font-bold mb-2">Our Vision</h4>
              <p>A world where skills are valued over labels, and every capable graduate has
                access to meaningful career opportunities </p>
            </div>
            <div className="bg-black/90 text-white p-6 rounded-lg shadow-md hover:scale-95 transition-all ease-linear">
              <h4 className="text-xl font-bold mb-2">Our Mission</h4>
              <p>At Galo Score, we believe everyone deserves the opportunity to showcase their true potential regardless of their background.</p>
            </div>
            <div className="bg-yellow-500 text-black p-6 rounded-lg shadow-md hover:scale-95 transition-all ease-linear">
              <h4 className="text-xl font-bold mb-2">Our Values</h4>
              <p>We help fresher’s show their true potential and get noticed by employers through
                a simple, trusted test score </p>
            </div>
          </div>

          {/* Backed by Legacy */}

        </div>
      </div>

      <div className="min-h-screen bg-gray-300 px-6 py-16 ">
        <div className="max-w-6xl mx-auto flex flex-col gap-16 backdrop-blur-sm bg-white/50 rounded-2xl p-4">

          {/* Hero Section */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 w-full">
            <div className="w-full md:w-1/2">
              <img
                src="/interview.png"
                alt="Industry Ready"
                className="w-full"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold text-yellow-500 mb-0">Unlock Your Career Potential with Galo Score</h2>
              <p className="mt-4 text-gray-700 leading-relaxed font-medium">
                Galo Score isn’t just another test, it’s your proof of real-world ability. Show recruiters you’ve got the technical skills to hit the ground running, even as a fresh graduate. Get your verified score, share it on your resume and LinkedIn, and step confidently into the jobs you’ve always wanted.
              </p>
            </div>
          </div>

          {/* Challenges vs Benefits */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            {/* <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Why GALO Score Makes You Stand Out</h3> */}
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">Your Challenge as a Fresher</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Hard to get noticed by recruiters</li>
                  <li>Skill gap between college and industry</li>
                  <li>Resume looks like everyone else’s</li>
                  <li>No clarity on strengths or weaknesses</li>
                  <li>Difficult to find relevant job openings</li>
                  <li>Lack of trust from companies</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">How Galo Score Helps</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Recognized by top companies</li>
                  <li>Tests on current job-relevant skills</li>
                  <li>Verified badge and digital certificate</li>
                  <li>Instant section-wise feedback</li>
                  <li>Smart job/internship alerts</li>
                  <li>Instant online verification</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* galo journey  */}
      <section className="w-full bg-gray-300 py-10 px-6 md:px-12 ">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
            The Galo Score Journey
          </h2>
          <p className="text-center text-gray-700 font-medium mb-8">
            Where your skills meet the right opportunities
          </p>

          {/* Steps */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-8 bg-gray-300 rounded-2xl p-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center w-24 md:w-28"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white border border-black rounded-full shadow-md mb-3 text-2xl">
                  {step.icon}
                </div>
                <span className="text-sm md:text-base text-gray-800 font-medium">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

