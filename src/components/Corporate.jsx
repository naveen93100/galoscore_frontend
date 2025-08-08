import { useEffect } from 'react';

const Corporate = () => {
    useEffect(()=>{
      window.scrollTo(0,0);
    },[])
  return (
    <div className="bg-gray-100 text-gray-800 pt-32 px-6 pb-16 space-y-20">

      {/* Hero Section */}
      <section className="text-center max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 text-yellow-500">Access Pre-Assessed Talent Without Cost </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Streamline your recruitment with complimentary access to a vetted pool of candidates who
          have demonstrated their skills through GaloScore.
        </p>
      </section>

      {/* Why Use GALO */}
      {/* <section>
        <h2 className="text-3xl font-bold text-center mb-12">Why Use GALO SCORE for Recruitment?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition group hover:bg-yellow-500">
            <img src="/hiring.png" alt="Smart Hiring" className="mx-auto h-32 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Objective Evaluation</h3>
            <p className="text-gray-600 text-sm group-hover:text-whitex">Assess candidates based on logic, reasoning, and analytics—not just resumes.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition group hover:bg-yellow-500">
            <img src="/team.png" alt="Team Fit" className="mx-auto h-32 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Team Fit Insights</h3>
            <p className="text-gray-600 text-sm group-hover:text-whitex">See how a candidate’s profile aligns with your team culture and roles.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition group hover:bg-yellow-500">
            <img src="/pipeline.png" alt="Hiring Pipeline" className="mx-auto h-32 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Streamlined Hiring</h3>
            <p className="text-gray-600 text-sm group-hover:text-whitex">Easily send tests, track applicants, and view ranked results in one place.</p>
          </div>
        </div>
      </section> */}

      <div className="grid gap-8 sm:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-xl p-6 text-left flex flex-col items-center justify-center border-l-4 border-yellow-500">
          <img
            src="/verified.png" // Replace with relevant unDraw-style icon or hosted SVG
            alt="Verified Scores"
            className="h-24 mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800">Verified Scores & Resumes</h3>
          <p className="text-gray-600 text-sm mt-1">
            Instantly view verified scores and detailed resumes to evaluate candidates confidently.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-xl p-6 text-left flex flex-col items-center justify-center border-l-4 border-yellow-500">
          <img
            src="/filter.png" // Replace with relevant unDraw-style icon or hosted SVG
            alt="Filter Candidates"
            className="h-24 mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800">Smart Filtering Options</h3>
          <p className="text-gray-600 text-sm mt-1">
            Apply filters by domain, skill level, or overall score to shortlist the right talent faster.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-xl p-6 text-left flex flex-col items-center justify-center border-l-4 border-yellow-500">
          <img
            src="/hiring.png" // Replace with relevant unDraw-style icon or hosted SVG
            alt="Faster Hiring"
            className="h-24 mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800">Faster, Higher-Quality Hiring</h3>
          <p className="text-gray-600 text-sm mt-1">
            Reduce hiring time and improve candidate quality with streamlined screening insights.
          </p>
        </div>
      </div>


      {/* How It Works */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <h4 className="text-xl font-semibold mb-2">1. Access Recruiter Dashboard </h4>
            <p className="text-gray-600">Log in to a centralized platform to review candidate profiles, scores, and verified
              resumes. </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <h4 className="text-xl font-semibold mb-2">2. Verify Candidate Scores </h4>
            <p className="text-gray-600">Authenticate GaloScore results submitted with candidates’ CVs or view them directly
              on the platform. </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <h4 className="text-xl font-semibold mb-2">3. Connect and Hire</h4>
            <p className="text-gray-600">Engage with qualified candidates efficiently, supported by objective data.</p>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Corporate;
