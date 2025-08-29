import { useEffect } from "react";

const Student = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-b from-white via-gray-200 to-gray-100 text-gray-800 pt-30 px-6 pb-28 space-y-10 font-[Roboto_Condensed]">

      {/* Hero Section */}
      <section className="text-center max-w-6xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-transparent bg-clip-text">
          Transform Your Skills Into Career-Ready Proof
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Break through the noise. Galo Score helps you showcase your real
          potential — beyond college names and buzzwords.
        </p>
        
      </section>

      {/*  Story Section */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center bg-white p-4 rounded-2xl">
        <div className="space-y-6">
          <h2 className="capitalize text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
            The job search shouldn't be about luck — it should be about <span className="text-yellow-600">merit</span>.
          </h2>
          <p className="text-gray-700 leading-relaxed font-semibold">
            Remember the all-nights, the endless revision, the moments you questioned if it was worth it?
            You earned your skills through dedication and hard work — but the market isn’t always fair.
             You're more than just a resume—you're a proven talent with real-world potential.

          </p>
          <p className="text-gray-700 leading-relaxed font-semibold">
            Galo Score gives your hard work a voice. Take specialized tests, get a verified scorecard,
            and connect directly with recruiters who want <span className="font-semibold text-yellow-600">real talent</span>.
          </p>
          <p className="text-gray-800 font-semibold">
            Stop feeling invisible. Start being noticed. Your future deserves to be seen.
          </p>
        </div>
        <div className="relative flex justify-center border-1 border-t-0 border-l-0 border-yellow-500 rounded-2xl shadow-md">
          <img
            src="/done.png" 
            alt="Student Success"
            className="w-80 md:w-[26rem] "
          />
        </div>
      </section>

      {/* Key Features */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Why Choose Galo Score?
        </h2> 
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              img: "/file-search.png",
              title: "Domain-Specific Tests",
              desc: "Take assessments tailored to your chosen technical or professional field."
            },
            {
              img: "/verified.png",
              title: "Verified & Shareable Scorecard",
              desc: "Showcase your verified performance with confidence and credibility."
            },
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
              title: "Take the Test",
              desc: "Complete a free, comprehensive assessment designed to evaluate your core skills."
            },
            {
              step: "2",
              title: "Get Verified Insights",
              desc: "Receive detailed feedback and verified scores you can proudly showcase."
            },
            {
              step: "3",
              title: "Boost Your CV",
              desc: "Add Galo Score to your resume and impress recruiters instantly."
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

export default Student;


