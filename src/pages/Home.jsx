import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

  }, []);
  return (
    <>

      <div className="min-h-screen flex flex-col justify-center items-center  px-4 py-12 sm:pt-30 pt-40 bg-gray-100">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
              GaloScore: Effortlessly Connecting India’s Emerging Engineering Talent with Employers —
              Verified, Accessible, and Completely Free
            </h1>
            <p className="text-gray-700 text-lg">
              A dual-section employability test designed to spotlight skilled students from Tier 3 & 4
              colleges—trusted by recruiters and proven to facilitate successful hires.
              The test is entirely free for students and currently available at no cost to employers.
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


          {/* Story Section */}
          {/* <div className=" flex flex-col-reverse md:flex-row justify-between items-center gap-10 w-full">

            <div className="w-full md:w-1/2">
              <img
                src="/about.png"
                alt="Students studying"
                className="w-full "
              />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold text-yellow-500 mb-0">'One Test. Real Opportunity'</h2>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">What is GaloScore?</h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                GaloScore is a complimentary dual-section recruitment assessment that connects capable
                engineering students with employers who prioritize verified skills and job readiness.
              </p>
              <p className="mt-4 text-gray-700 font-medium">
                By providing a neutral, merit-driven hiring metric, GaloScore empowers capable students who may be overlooked due to college brand bias.
              </p>
            </div>
          </div> */}

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
              <h2 className="text-4xl font-bold text-yellow-500 mb-4">One Test. Real Opportunity.</h2>
              <p className="text-gray-700 leading-relaxed font-medium">
                GaloScore is a complimentary dual-section recruitment assessment that connects capable
                engineering students with employers who prioritize verified skills and job readiness.
              </p>

              <div className="mt-4 text-gray-700 font-medium space-y-2">
                <p>It includes:</p>
                <ul className="list-disc list-inside pl-2">
                  <li>A comprehensive general aptitude test</li>
                  <li>A role-specific domain skills test</li>
                </ul>
              </div>

              <p className="mt-4 text-gray-700 font-medium">
                Thousands of students have utilized GaloScore to validate their capabilities and advance
                their careers—all at no cost to them. Employers currently benefit from free access to identify
                and engage top talent efficiently.
              </p>
            </div>
          </div>


          {/* Problem Section */}

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why GaloScore Matters</h3>
            <p className="text-gray-700 mb-4">
              <strong>Trusted by Recruiters Nationwide</strong><br />
              GaloScore is becoming the preferred platform for organizations committed to merit-based
              hiring, delivering verified talent at no cost to employers or students.
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
              <p>To become India’s benchmark for identifying real engineering talent — beyond college names.</p>
            </div>
            <div className="bg-black/90 text-white p-6 rounded-lg shadow-md hover:scale-95 transition-all ease-linear">
              <h4 className="text-xl font-bold mb-2">Our Mission</h4>
              <p>To level the playing field through accessible, skill-based hiring tests — free for students.</p>
            </div>
            <div className="bg-yellow-500 text-black p-6 rounded-lg shadow-md hover:scale-95 transition-all ease-linear">
              <h4 className="text-xl font-bold mb-2">Our Values</h4>
              <p>Merit. Credibility. Inclusion. Transparency.</p>
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
                <h4 className="font-semibold mb-2">How GALO Score Helps</h4>
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
    </>
  );
};

export default Home;
