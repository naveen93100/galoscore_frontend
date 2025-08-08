import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

  }, []);
  return (
    <>

      <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12 sm:pt-30 pt-40 bg-gray-100">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
              Galo Score : A platform that lets you prove your skills even as a fresher from a
              t
              ier 3 or tier 4 college.
            </h1>
            <p className="text-gray-700 text-lg">
              Galoscore is a national-level aptitude testing platform built for fresh graduates
              especially capable B. Tech, B.Com, or B.Sc  students from Tier 3 and Tier 4 colleges
              who struggle to get noticed by recruiters due to of experience or brand-name
              institutions.
            </p>
            <div className="space-x-4">
              <Link
                to="/"
                className="px-6 py-3 bg-yellow-500 text-black font-medium rounded-lg shadow-md hover:bg-yellow-400 hover:shadow-sm active:translate-y-0.5 active:shadow-inner transition-all duration-150"
              >
                Take the Free Test
              </Link>
              <Link
                to="/"
                className="px-6 py-3 bg-black  text-white font-medium rounded-lg shadow-md hover:bg-black/80 hover:shadow-lg active:translate-y-0.5 active:shadow-inner transition-all duration-150"
              >
                Access Talent
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full flex justify-center">
            <img
              // src="https://i.pinimg.com/736x/ac/cf/0d/accf0d223c42e05eab4a54d3ade45dec.jpg"
              src="/undraw.png"
              alt="Minimal test illustration"
              className="w-full max-w-md rounded-2xl mix-blend-darken"
            />
          </div>
        </div>
      </div>

      {/* about */}
      <div className="min-h-screen bg-gray-300 px-6 py-16">
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
              <p className="text-gray-700 leading-relaxed font-medium">
                Every year, lakhs of talented students graduate from colleges across India but
                many struggle to land interviews or get noticed by recruiters.
              </p>

              <div className="mt-4 text-gray-700 font-medium space-y-2">
                <p>It includes:</p>
                <ul className="list-disc list-inside pl-2">
                  <li>A comprehensive general aptitude test</li>
                  <li>A role-specific domain skills test</li>
                </ul>
              </div>

              <p className="mt-4 text-gray-700 font-medium">
                By focusing on aptitude, logical reasoning, communication, and problem-solving,
                we give graduates a fair and equal chance to showcase their employability.
              </p>
            </div>
          </div>


          {/* Problem Section */}

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why GaloScore Matters</h3>
            <p className="text-gray-700 mb-4">

              We built Galoscore to bridge the gap between skilled freshers especially a B.Tech,
              B.Com, or B.Sc graduate  from Tier 3 and Tier 4 colleges and the employers who
              are looking for real potential, not just big college names.
              We help you prove your skills, earn a credible score, and add value to your
              resume.
            </p>
            <div className="text-gray-700 mb-4">
              <strong>More Than a Test — A Mark of Readiness</strong><br />
              GaloScore is more than an exam; it is a professional credential.
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Apply with confidence based on objective performance metrics</li>
                <li>Highlight competencies beyond academic transcripts</li>
                <li>Differentiate yourself with verified evidence of job readiness</li>
              </ul>
            </div>
            <p className="text-gray-700">
              For students from Tier 3 & 4 colleges, GaloScore offers an equitable platform to be
              recognized—without any cost. For employers, it provides a trusted, data-driven hiring tool
              available at no charge during the current phase.
            </p>
          </div>


          {/* Vision/Mission/Values */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-yellow-500 text-black p-6 rounded-lg shadow-md hover:scale-95 transition-all ease-linear">
              <h4 className="text-xl font-bold mb-2">Our Vision</h4>
              <p>A world where skills are valued over labels, and every capable graduate has
                access to meaningful career opportunities </p>
            </div>
            <div className="bg-black/90 text-white p-6 rounded-lg shadow-md hover:scale-95 transition-all ease-linear">
              <h4 className="text-xl font-bold mb-2">Our Mission</h4>
              <p>At Galoscore, we believe everyone deserves the opportunity to showcase their
                true potential regardless of their background.</p>
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

      <div className="min-h-screen bg-gray-300 px-6 py-16">
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
              <h2 className="text-4xl font-bold text-yellow-500 mb-0">GALO Score: Your Gateway to Industry-Ready Skills</h2>
              <p className="mt-4 text-gray-700 leading-relaxed font-medium">
                GALO Score is an industry-endorsed, next-gen employability test designed to bridge the gap between what colleges teach and what companies demand. It empowers BTech freshers and engineering students to demonstrate their technical, practical, and soft skills with a shareable, verified scorecard.
              </p>
            </div>
          </div>

          {/* Challenges vs Benefits */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Why GALO Score Makes You Stand Out</h3>
            <div className="grid md:grid-cols-3 gap-8 text-gray-700">
              <div className="bg-yellow-500 text-black p-6 rounded-lg shadow-md hover:scale-95 transition-all ease-linear">
                <h4 className="text-xl font-bold mb-2">Industry recognition</h4>
                <p>Our certificates are acknowledged by leading companies actively hiring fresh
                  talent. </p>
              </div>
              <div className="bg-black text-white p-6 rounded-lg shadow-md hover:scale-95 transition-all ease-linear">
                <h4 className="text-xl font-bold mb-2">Boost Your Career</h4>
                <p>Add weight to your resume, improve interview chances, and stand out even
                  without work experience.  </p>
              </div>
               <div className="bg-yellow-500 text-black p-6 rounded-lg shadow-md hover:scale-95 transition-all ease-linear">
                <h4 className="text-xl font-bold mb-2">Skill validation</h4>
                <p>showcase what you truly know with Verified assessments from industry experts. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
