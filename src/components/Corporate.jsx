
import { useEffect } from 'react';

const Corporate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-b from-white via-gray-200 to-gray-100 text-gray-800 pt-28 px-6 pb-28 space-y-10 font-[Roboto_Condensed]">

      {/* Hero Section */}
      <section className="text-center max-w-5xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-transparent bg-clip-text">
          Access a Pre-Assessed Pool of Skilled Graduates
        </h1>
        <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
          Hiring fresh graduates is tough — strong resumes don’t always mean strong skills.
          With Galo Score, you don’t just hire freshers — you hire freshers with proof of skills.
        </p>
       
      </section>

      {/* Problem Statement / Value Proposition */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center bg-white p-4 rounded-2xl">
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
            Tired of Endless Applications and Costly Searches?
          </h2>
          <p className="text-gray-700 leading-relaxed font-semibold">
            Losing valuable time and money sifting through countless resumes that don’t tell you a candidate's true skills?
            <br />Galo Score is the definitive solution.
          </p>
          <p className="text-gray-700 leading-relaxed font-semibold">
            We provide a pre-vetted, skill-verified talent pool so you can stop searching and start hiring smarter.
            Our candidates have already proven their abilities with specialized tests, giving you a clear, objective scorecard.
          </p>
          <p className="text-gray-800  font-semibold">
            Instantly find the exact skills you need — without wasting resources on irrelevant applications.
          </p>
        </div>
        <div className="relative flex justify-center border-1 border-t-0 border-l-0 border-yellow-500 rounded-2xl shadow-md">
          <img
            src="/hiring.png" 
            alt="Corporate Hiring"
            className="w-80 md:w-[26rem] drop-shadow-2xl"
          />
        </div>
      </section>

      {/* Key Features */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Why Recruit with Galo Score?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              img: "/verified.png",
              title: "Verified Scores & Resumes",
              desc: " Through the standardized Galo Score, recruiters can efficiently compare aptitude levels across a wide pool of candidates, enabling faster and more objective shortlisting of top talent."
            },
            {
              img: "/filter.png",
              title: "Smart Filtering Options",
              desc: "When someone scores well in Galo Score, their profile gets noticed—removing the need to rely on long, unfair or time-consuming selection processes."
            },
            {
              img: "/hiring.png",
              title: "Faster, Higher-Quality Hiring",
              desc: "Galo Score is built to be fair, fast, and unbiased, so hiring is based purely on talent and ability."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 text-center hover:border-t-1 border-yellow-500"
            >
              <img src={item.img} alt={item.title} className="h-20 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 rounded-3xl shadow-inner max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-10 px-6">
          {[
            {
              step: "1",
              title: "Access Recruiter Dashboard",
              desc: "Log in to review verified scores, resumes, and candidate profiles."
            },
            {
              step: "2",
              title: "Verify Candidate Scores",
              desc: "Authenticate Galo Score results submitted with applications or view them directly."
            },
            {
              step: "3",
              title: "Connect & Hire",
              desc: "Engage with qualified candidates based on reliable, data-driven insights."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-yellow-500 text-white font-bold rounded-full mb-4 mx-auto">
                {item.step}
              </div>
              <h4 className="text-xl font-semibold mb-2 text-center">{item.title}</h4>
              <p className="text-gray-600 text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Corporate;
