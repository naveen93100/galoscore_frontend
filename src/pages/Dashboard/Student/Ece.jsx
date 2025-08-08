// import { useState } from "react";

// const questions = [
//   {
//     question: "Which of the following is an active electronic component?",
//     options: ["Resistor", "Capacitor", "Transistor", "Inductor"],
//     correct: 2,
//   },
//   {
//     question: "Which modulation technique is used in FM radio broadcasting?",
//     options: ["Amplitude Modulation", "Frequency Modulation", "Phase Modulation", "Pulse Modulation"],
//     correct: 1,
//   },
//   {
//     question: "Which gate is known as a universal gate?",
//     options: ["AND", "OR", "NAND", "XOR"],
//     correct: 2,
//   },
//   {
//     question: "What is the function of a diode?",
//     options: [
//       "Amplify signals",
//       "Store energy",
//       "Allow current in one direction",
//       "Filter noise",
//     ],
//     correct: 2,
//   },
//   {
//     question: "Which number system is used in digital electronics?",
//     options: ["Decimal", "Binary", "Octal", "Hexadecimal"],
//     correct: 1,
//   },
//   {
//     question: "What does ADC stand for?",
//     options: [
//       "Analog to Digital Converter",
//       "Advanced Digital Controller",
//       "Automatic Data Control",
//       "Amplitude Digital Converter",
//     ],
//     correct: 0,
//   },
//   {
//     question: "Which law is used to simplify Boolean expressions?",
//     options: ["Ohm's Law", "Kirchhoff's Law", "De Morgan’s Theorem", "Faraday's Law"],
//     correct: 2,
//   },
//   {
//     question: "The unit of capacitance is:",
//     options: ["Ohm", "Farad", "Volt", "Ampere"],
//     correct: 1,
//   },
//   {
//     question: "In communication systems, noise is defined as:",
//     options: [
//       "Unwanted signal",
//       "High-frequency signal",
//       "Low voltage signal",
//       "Modulated signal",
//     ],
//     correct: 0,
//   },
//   {
//     question: "Which flip-flop is commonly used for toggling purposes?",
//     options: ["D Flip-Flop", "SR Flip-Flop", "T Flip-Flop", "JK Flip-Flop"],
//     correct: 2,
//   },
// ];



// const Ece = () => {
//     const [current, setCurrent] = useState(0);
//     const [selected, setSelected] = useState(null);
//     const [score, setScore] = useState(0);
//     const [showResult, setShowResult] = useState(false);

//     const totalQuestions = questions.length;
//     const progressPercentage = ((current + 1) / totalQuestions) * 100;

//     const handleAnswer = (i) => {
//         setSelected(i);
//     };

//     const handleNext = () => {
//         if (selected === questions[current].correct) {
//             setScore(score + 1);
//         }
//         if (current + 1 < questions.length) {
//             setCurrent(current + 1);
//             setSelected(null);
//         } else {
//             setShowResult(true);
//         }
//     };


//     return (
//         <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 rounded-2xl">
//             <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 animate-fade-in">
//                 <h2 className="text-4xl font-extrabold text-white text-center mb-8 tracking-wide">
//                     ECE Quiz <span className="text-yellow-500">Challenge</span>
//                 </h2>

//                 {showResult ? (
//                     <div className="text-center py-10">
//                         <p className="text-5xl font-extrabold text-yellow-500 mb-6 animate-pop-in">
//                             Congratulations!
//                         </p>
//                         <p className="text-3xl font-semibold text-white mb-8">
//                             You scored{" "}
//                             <span className="text-yellow-500">{score}</span> out of{" "}
//                             <span className="text-yellow-500">{totalQuestions}</span>
//                         </p>
//                         <p className="text-xl text-gray-300">
//                             Great job! Keep practicing to master your skills.
//                         </p>
//                         <button
//                             onClick={() => {
//                                 setCurrent(0);
//                                 setScore(0);
//                                 setShowResult(false);
//                                 setSelected(null);
//                             }}
//                             className="mt-10 bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50"
//                         >
//                             Take Another Quiz
//                         </button>
//                     </div>
//                 ) : (
//                     <>
//                         {/* Progress Bar */}
//                         <div className="mb-8">
//                             <div className="text-sm font-semibold text-gray-400 mb-2 flex justify-between">
//                                 <span>Question {current + 1} / {totalQuestions}</span>
//                                 <span>{Math.round(progressPercentage)}% Complete</span>
//                             </div>
//                             <div className="w-full bg-gray-700 rounded-full h-2">
//                                 <div
//                                     className="bg-yellow-500 h-2 rounded-full transition-all duration-500 ease-out"
//                                     style={{ width: `${progressPercentage}%` }}
//                                 ></div>
//                             </div>
//                         </div>

//                         <div className="mb-6">
//                             <p className="font-bold text-2xl mb-6 text-white leading-relaxed">
//                                 {questions[current].question}
//                             </p>
//                             <div className="space-y-4">
//                                 {questions[current].options.map((opt, i) => (
//                                     <button
//                                         key={i}
//                                         onClick={() => handleAnswer(i)}
//                                         className={`block w-full text-left px-6 py-4 rounded-xl border-2 transition-all duration-200 ease-in-out ${selected === i
//                                                 ? "bg-yellow-100 text-gray-900 border-yellow-500"
//                                                 : "bg-gray-900 text-white border-gray-600 hover:border-yellow-500"
//                                             }`}
//                                     >
//                                         <span className="font-medium text-lg">{opt}</span>
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="mt-8 flex justify-end">
//                             <button
//                                 disabled={selected === null}
//                                 onClick={handleNext}
//                                 className="bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50"
//                             >
//                                 {current + 1 === totalQuestions ? "Submit Quiz" : "Next Question"}
//                             </button>
//                         </div>
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Ece;


import { useState, useEffect } from "react";

const questions = [
  {
    question: "Which of the following is an active electronic component?",
    options: ["Resistor", "Capacitor", "Transistor", "Inductor"],
    correct: 2,
  },
  {
    question: "Which modulation technique is used in FM radio broadcasting?",
    options: ["Amplitude Modulation", "Frequency Modulation", "Phase Modulation", "Pulse Modulation"],
    correct: 1,
  },
  {
    question: "Which gate is known as a universal gate?",
    options: ["AND", "OR", "NAND", "XOR"],
    correct: 2,
  },
  {
    question: "What is the function of a diode?",
    options: [
      "Amplify signals",
      "Store energy",
      "Allow current in one direction",
      "Filter noise",
    ],
    correct: 2,
  },
  {
    question: "Which number system is used in digital electronics?",
    options: ["Decimal", "Binary", "Octal", "Hexadecimal"],
    correct: 1,
  },
  {
    question: "What does ADC stand for?",
    options: [
      "Analog to Digital Converter",
      "Advanced Digital Controller",
      "Automatic Data Control",
      "Amplitude Digital Converter",
    ],
    correct: 0,
  },
  {
    question: "Which law is used to simplify Boolean expressions?",
    options: ["Ohm's Law", "Kirchhoff's Law", "De Morgan’s Theorem", "Faraday's Law"],
    correct: 2,
  },
  {
    question: "The unit of capacitance is:",
    options: ["Ohm", "Farad", "Volt", "Ampere"],
    correct: 1,
  },
  {
    question: "In communication systems, noise is defined as:",
    options: [
      "Unwanted signal",
      "High-frequency signal",
      "Low voltage signal",
      "Modulated signal",
    ],
    correct: 0,
  },
  {
    question: "Which flip-flop is commonly used for toggling purposes?",
    options: ["D Flip-Flop", "SR Flip-Flop", "T Flip-Flop", "JK Flip-Flop"],
    correct: 2,
  },
];

const Ece = () => {
  const [showInstructions, setShowInstructions] = useState(true);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 min

  const totalQuestions = questions.length;
  const progressPercentage = ((current + 1) / totalQuestions) * 100;

  useEffect(() => {
    if (!showInstructions && !showResult && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !showResult) {
      handleAutoSubmit();
    }
  }, [timeLeft, showInstructions, showResult]);

  const formatTime = (secs) => {
    const min = Math.floor(secs / 60);
    const sec = secs % 60;
    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  const handleAnswer = (i) => {
    setSelected(i);
  };

  const handleNext = () => {
    if (selected === questions[current].correct) {
      setScore(score + 1);
    }
    if (current + 1 < totalQuestions) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  const handleAutoSubmit = () => {
    if (selected === questions[current]?.correct) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleStart = () => {
    setShowInstructions(false);
    setTimeLeft(10); 
  };

  const handleRetake = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
    setTimeLeft(300);
    setShowInstructions(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700">
        {showInstructions ? (
          <div className="text-white text-center space-y-6">
            <h2 className="text-4xl font-bold text-yellow-400">ECE Test Instructions</h2>
            <ul className="text-lg text-gray-300 text-left space-y-3">
              <li>🕒 Duration: 5 minutes</li>
              <li>📋 Each question carries 1 mark</li>
              <li>🚫 No negative marking</li>
              <li>🔒 No going back to previous questions</li>
              <li>🎯 Result shown immediately after completion</li>
            </ul>
            <button
              onClick={handleStart}
              className="mt-6 bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-yellow-600 transition duration-300"
            >
              Start Test
            </button>
          </div>
        ) : showResult ? (
          <div className="text-center text-white space-y-4">
            <h2 className="text-4xl font-bold text-yellow-400">Quiz Completed!</h2>
            <p className="text-2xl">You scored <span className="text-yellow-500">{score}</span> out of {totalQuestions}</p>
            <button
              onClick={handleRetake}
              className="bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-600 transition duration-300"
            >
              Retake Quiz
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6 text-sm text-gray-400">
              <span>Question {current + 1} / {totalQuestions}</span>
              <span className="text-yellow-500 font-semibold">Time: {formatTime(timeLeft)}</span>
            </div>

            <div className="mb-6">
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-yellow-500 h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            <p className="text-white font-bold text-2xl mb-4">{questions[current].question}</p>

            <div className="space-y-4 mb-6">
              {questions[current].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  className={`block w-full text-left px-6 py-4 rounded-xl border-2 transition-all duration-200 ease-in-out ${selected === i
                    ? "bg-yellow-100 text-gray-900 border-yellow-500"
                    : "bg-gray-900 text-white border-gray-600 hover:border-yellow-500"
                    }`}
                >
                  <span className="font-medium text-lg">{opt}</span>
                </button>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                disabled={selected === null}
                onClick={handleNext}
                className="bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-600 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {current + 1 === totalQuestions ? "Submit Quiz" : "Next Question"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Ece;
