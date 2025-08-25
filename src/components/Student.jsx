import { useEffect } from "react";


const Student = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className="bg-gray-100 text-gray-800 pt-32 px-6 pb-16 space-y-20 ">

      <section className="text-center max-w-5xl mx-auto px-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 text-yellow-500">
          Transform Potential Into Verified Proof
        </h1>

        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Getting noticed as a fresher can be tough, especially without a top-tier college tag. That’s why Galo Score is here — to help you prove your true potential
        </p>


      </section>

      <div className="grid gap-8 sm:grid-cols-2">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-xl p-6 text-left flex flex-col items-center justify-center border-l-4 border-yellow-500 hover:scale-105 transition-all ease-in-out duration-300">
          <img
            src="/file-search.png" 
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
            src="/verified.png" 
            alt="Verified Scorecards"
            className="h-24 mb-4 "
          />
          <h3 className="text-lg font-semibold text-gray-800">Verified, Shareable Scorecard</h3>
          <p className="text-gray-600 text-sm mt-1">
            Show your performance to employers with confidence and transparency.
          </p>
        </div>

        {/* Card 3 */}
        {/* <div className="bg-white shadow-md rounded-xl p-6 text-left border-l-4 flex flex-col items-center justify-center border-yellow-500 hover:scale-105 transition-all ease-in-out duration-300">
            <img
              src="/data-reports.png" // Replace with actual hosted image or SVG file
              alt="Skill-Based Feedback"
              className=" h-24 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">Detailed Skill-Based Feedback</h3>
            <p className="text-gray-600 text-sm mt-1">
              Understand your strengths and areas for improvement with precision.
            </p>
          </div> */}



        {/* Card 4 */}
        {/* <div className="bg-white shadow-md rounded-xl p-6 text-left border-l-4 flex flex-col items-center justify-center border-yellow-500 hover:scale-105 transition-all ease-in-out duration-300">
          <img
            src="/certificate.png" // Replace with actual hosted image or SVG file
            alt="Certification"
            className=" h-24 mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800">Official Galo Score Certification</h3>
          <p className="text-gray-600 text-sm mt-1">
            Boost your resume with an official, credible credential that validates your potential.
          </p>
        </div> */}
      </div>



      {/* How It Works Section */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <h4 className="text-xl font-semibold mb-2">1. Take the  Test</h4>
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
