

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLightbulb, FaChartPie, FaHandPointer, FaSearch, FaBriefcase } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { TbTargetArrow, TbHeartHandshake } from "react-icons/tb";


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

      <div className=" min-h-screen flex flex-col justify-center items-center px-4 py-12 pt-40 md:pt-20 bg-gray-100 font-[Roboto_Condensed]">
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
                Take the Test
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
      <div className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 px-4 sm:px-6 lg:px-12 font-[Roboto_Condensed]">
        <div className="max-w-8xl mx-auto flex flex-col gap-20 backdrop-blur-lg bg-white/50 rounded-3xl shadow-2xl p-6 sm:p-5">

          {/* Hero Section */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-5">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/about.png"
                alt="Students studying"
                className="w-full max-w-sm md:max-w-md rounded-2xl object-contain"
              />
            </div>

            {/* Text Content Section */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl sm:text-4xl  font-extrabold text-yellow-500 leading-tight mb-6">
                Your Test. Your Opportunity.
              </h2>
              <p className="text-gray-700 leading-relaxed font-medium mb-3">
                Every year, thousands of talented students graduate across India but struggle to secure interviews or attract recruiters' attention.
              </p>
              <p className="text-gray-700 leading-relaxed font-medium mb-3">
                We started <span className="font-semibold text-yellow-600">Galo Score</span> to solve that problem.
              </p>

              <div className="mt-4 text-gray-700 font-medium space-y-2">
                <p className="font-semibold">It includes:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Comprehensive general aptitude test</li>
                  <li>Role-specific domain skills test</li>
                </ul>
              </div>

              <p className="mt-6 text-gray-700 font-medium">
                By focusing on Core Engineering Branches (Civil, Chemical, Electrical, Production),
                aptitude, and logical reasoning, we give graduates a fair chance to showcase their employability.
              </p>
            </div>
          </div>

          {/* Problem Section */}
          <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Why Galo Score Matters
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Every year, lakhs of students take competitive exams like JEE. Only a handful make it to IITs,
              while the rest — despite having skills and talent — miss out on the “branded” college name.
              Many of them struggle to get noticed by recruiters and remain unemployed.
              <br /><br />
              Galo Score bridges this gap for B.Tech, B.Com, and B.Sc graduates from Tier 2 & 3 colleges,
              helping them prove their skills and add real value to their resumes.
            </p>

            <div className="text-gray-700 leading-relaxed mb-6">
              <strong className="block text-lg text-gray-800 mb-2">More Than a Test — A Mark of Readiness</strong>
              <p>Galo Score is a professional credential:</p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>Apply with confidence using objective performance metrics</li>
                <li>Highlight skills beyond academic transcripts</li>
                <li>Stand out with verified proof of job readiness</li>
              </ul>
            </div>

            <p className="text-gray-700">
              For students from Tier 2 & 3 colleges, Galo Score offers an equitable, free platform to gain recognition.
              For employers, it provides a trusted, data-driven hiring tool—available at no charge during our launch phase.
            </p>
          </div>

          {/* Vision/Mission/Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-black p-5 rounded-2xl shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300">
              <FiEye className="text-4xl mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-3 text-center">Our Vision</h4>
              <p className="text-sm sm:text-base">A world where skills are valued over labels, and every capable graduate has
                access to meaningful career opportunities.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-5 rounded-2xl shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300">
              <TbTargetArrow className="text-4xl mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-3 text-center">Our Mission</h4>
              <p className="text-sm sm:text-base">At Galo Score, we believe everyone deserves the opportunity to showcase their potential—regardless of their background.</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-black p-5 rounded-2xl shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300">
              <TbHeartHandshake className="text-4xl mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-3 text-center">Our Values</h4>
              <p className="text-sm sm:text-base">We empower freshers to showcase their potential and get noticed through a simple, trusted test score.</p>
            </div>
          </div>

        </div>
      </div>

      <div className="min-h-screen bg-gray-300 px-4 sm:px-6 lg:px-12 py-10 font-[Roboto_Condensed]">
        <div className="max-w-8xl  mx-auto flex flex-col gap-16 backdrop-blur-sm bg-white/50 rounded-2xl p-4">

          {/* Hero Section */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 w-full">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/interview.png"
                alt="Industry Ready"
                className="w-full max-w-sm md:max-w-md rounded-2xl object-contain"
              />
            </div>

            <div className="w-full md:w-1/2 px-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-500 leading-tight mb-6">Unlock Your Career Potential with Galo Score</h2>
              <p className="mt-4 text-gray-700 leading-relaxed font-medium">
                Galo Score isn’t just another test, it’s your proof of real-world ability. Show recruiters you’ve got the technical skills to hit the ground running, even as a fresh graduate. Get your verified score, share it on your resume and LinkedIn, and step confidently into the jobs you’ve always wanted.
              </p>
            </div>
          </div>

          {/* Challenges vs Benefits */}
          <div className="bg-white  p-8 rounded-xl shadow-md">

            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">Your Challenge as a Fresher</h4>
                <ul className="list-disc  space-y-2">
                  {[
                    "Hard to get noticed by recruiters",
                    "Skill gap between college and industry",
                    "Resume looks like everyone else’s",
                    "No clarity on strengths or weaknesses",
                    "Difficult to find relevant job openings",
                    "Lack of trust from companies"
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 hover:bg-gradient-to-l from-yellow-400 to-yellow-500 transition-all rounded-2xl p-3 shadow-md backdrop-blur-sm cursor-pointer"
                    >
                      <span className="size-2 bg-yellow-600 rounded-full"></span>
                      <span className="text-gray-800 font-medium">{item}</span>
                    </li>
                  ))}

                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">How Galo Score Helps</h4>
                <ul className="list-disc  space-y-2">
                  {[
                    "Recognized by top companies",
                    "Tests on current job-relevant skills",
                    "Verified badge and digital GALO Score card",
                    "Instant section-wise feedback",
                    "Smart job/internship alerts",
                    "Instant online verification"
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 hover:bg-gradient-to-l from-yellow-400 to-yellow-500 transition-all rounded-2xl p-3 shadow-md backdrop-blur-sm cursor-pointer"
                    >
                      <span className="size-2 bg-yellow-600 rounded-full"></span>
                      <span className="text-gray-800 font-medium">{item}</span>
                    </li>
                  ))}

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* galo journey  */}
      <section className="w-full bg-gray-300 py-10 px-6 md:px-12 font-[Roboto_Condensed]">
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

