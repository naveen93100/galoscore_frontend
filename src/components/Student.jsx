import { useEffect } from "react";


const Student = () => {
    useEffect(()=>{
      window.scrollTo(0,0);
    },[])
  return (
    <div className="bg-gray-100 text-gray-800 pt-32 px-6 pb-16 space-y-20 ">


      {/* <section className="text-center max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 text-yellow-500">Transform Potential Into Verified Proof</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Your college affiliation should not limit your career prospects. GaloScore empowers you to
          demonstrate your competencies to employers—without any financial barriers.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Take the GALO SCORE?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white rounded-xl group shadow-md p-6 text-center hover:shadow-lg transition hover:bg-yellow-500">
            <img src="/strong.png" alt="Strengths" className="mx-auto h-32 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Know Your Strengths</h3>
            <p className="text-gray-600 text-sm group-hover:text-white">Get a deep understanding of your abilities through a detailed report.</p>
          </div>
          <div className="bg-white rounded-xl group shadow-md p-6 text-center hover:shadow-lg transition hover:bg-yellow-500">
            <img src="/career.png" alt="Career" className="mx-auto h-32 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Plan Your Career</h3>
            <p className="text-gray-600 text-sm group-hover:text-white">Visualize how your GALO score aligns with future career paths.</p>
          </div>
          <div className="bg-white rounded-xl group shadow-md p-6 text-center hover:shadow-lg transition hover:bg-yellow-500">
            <img src="/progress.png" alt="Progress" className="mx-auto h-32 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
            <p className="text-gray-600 text-sm group-hover:text-white">Keep improving with regular insights and learning recommendations.</p>
          </div>
        </div>
      </section> */}

      {/* <section className="text-center max-w-5xl mx-auto px-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 text-yellow-500">
          Transform Potential Into Verified Proof
        </h1>

        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Your college affiliation should not limit your career prospects. GaloScore empowers you to
          demonstrate your competencies to employers—without any financial barriers.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto text-left">
          <div className="bg-white shadow-md rounded-xl p-5 border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold text-gray-800">Verified, Shareable Scorecards</h3>
            <p className="text-gray-600 text-sm mt-1">
              Show your performance to employers with confidence and transparency.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-5 border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold text-gray-800">Detailed Skill-Based Feedback</h3>
            <p className="text-gray-600 text-sm mt-1">
              Understand your strengths and areas for improvement with precision.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-5 border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold text-gray-800">Domain-Specific Testing Formats</h3>
            <p className="text-gray-600 text-sm mt-1">
              Take assessments tailored to your chosen technical or professional field.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-5 border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold text-gray-800">Official GaloScore Certification</h3>
            <p className="text-gray-600 text-sm mt-1">
              Boost your resume with an official, credible credential that validates your potential.
            </p>
          </div>
        </div>
      </section> */}

      <section className="text-center max-w-5xl mx-auto px-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 text-yellow-500">
          Transform Potential Into Verified Proof
        </h1>

        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Your college affiliation should not limit your career prospects. Galo Score empowers you to
          demonstrate your competencies to employers—without any financial barriers.
        </p>

        <div className="grid gap-8 sm:grid-cols-2">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-xl p-6 text-left border-l-4 flex flex-col items-center justify-center border-yellow-500 hover:scale-105 transition-all ease-in-out duration-300">
            <img
              src="/file-search.png" // Replace with actual hosted image or SVG file
              alt="Domain Testing"
              className=" h-24 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">Domain-Specific Tests</h3>
            <p className="text-gray-600 text-sm mt-1">
              Take assessments tailored to your chosen technical or professional field.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-xl p-6 text-left flex flex-col items-center justify-center border-l-4 border-yellow-500 hover:scale-105 transition-all ease-in-out duration-300">
            <img
              src="/verified.png" // Replace with actual hosted image or SVG file
              alt="Verified Scorecards"
              className="h-24 mb-4 "
            />
            <h3 className="text-lg font-semibold text-gray-800">Verified, Shareable Scorecards</h3>
            <p className="text-gray-600 text-sm mt-1">
              Show your performance to employers with confidence and transparency.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-xl p-6 text-left border-l-4 flex flex-col items-center justify-center border-yellow-500 hover:scale-105 transition-all ease-in-out duration-300">
            <img
              src="/data-reports.png" // Replace with actual hosted image or SVG file
              alt="Skill-Based Feedback"
              className=" h-24 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">Detailed Skill-Based Feedback</h3>
            <p className="text-gray-600 text-sm mt-1">
              Understand your strengths and areas for improvement with precision.
            </p>
          </div>

          

          {/* Card 4 */}
          <div className="bg-white shadow-md rounded-xl p-6 text-left border-l-4 flex flex-col items-center justify-center border-yellow-500 hover:scale-105 transition-all ease-in-out duration-300">
            <img
              src="/certificate.png" // Replace with actual hosted image or SVG file
              alt="Certification"
              className=" h-24 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">Official Galo Score Certification</h3>
            <p className="text-gray-600 text-sm mt-1">
              Boost your resume with an official, credible credential that validates your potential.
            </p>
          </div>
        </div>
      </section>



      {/* How It Works Section */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <h4 className="text-xl font-semibold mb-2">1. Take the Free Test</h4>
            <p className="text-gray-600">Complete a comprehensive, no-cost assessment designed to measure your aptitude
              and domain knowledge. </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <h4 className="text-xl font-semibold mb-2">2. Receive Verified Feedback</h4>
            <p className="text-gray-600">Access detailed performance insights to identify strengths and areas for
              development. </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <h4 className="text-xl font-semibold mb-2">3. Add Galo Score to Your CV</h4>
            <p className="text-gray-600">Leverage an industry-recognized certification to strengthen your job applications.</p>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Student;
