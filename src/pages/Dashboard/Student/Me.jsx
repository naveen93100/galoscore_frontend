import { useState } from "react";

const questions = [
  {
    question: "Which law states that pressure applied to a confined fluid is transmitted equally in all directions?",
    options: ["Pascal’s Law", "Boyle’s Law", "Charles’ Law", "Newton’s Law"],
    correct: 0,
  },
  {
    question: "Which cycle is used in most car engines?",
    options: ["Otto Cycle", "Diesel Cycle", "Brayton Cycle", "Rankine Cycle"],
    correct: 0,
  },
  {
    question: "Which instrument is used to measure temperature?",
    options: ["Manometer", "Barometer", "Thermometer", "Anemometer"],
    correct: 2,
  },
  {
    question: "Which of the following is not a part of a four-stroke engine?",
    options: ["Intake", "Combustion", "Compression", "Ignition"],
    correct: 3,
  },
  {
    question: "Which material has the highest thermal conductivity?",
    options: ["Copper", "Aluminum", "Steel", "Brass"],
    correct: 0,
  },
  {
    question: "Which property measures resistance to deformation?",
    options: ["Elasticity", "Plasticity", "Hardness", "Toughness"],
    correct: 2,
  },
  {
    question: "In gears, the point where two teeth come in contact is called:",
    options: ["Pitch point", "Contact ratio", "Base circle", "Addendum"],
    correct: 0,
  },
  {
    question: "Which of the following is a non-renewable energy source?",
    options: ["Wind", "Solar", "Hydro", "Coal"],
    correct: 3,
  },
  {
    question: "Bernoulli's equation is applicable to:",
    options: ["Compressible flow", "Incompressible flow", "Viscous flow", "Turbulent flow"],
    correct: 1,
  },
  {
    question: "The unit of force in the SI system is:",
    options: ["Kilogram", "Newton", "Pascal", "Joule"],
    correct: 1,
  },
];



const Me = () => {
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const totalQuestions = questions.length;
    const progressPercentage = ((current + 1) / totalQuestions) * 100;

    const handleAnswer = (i) => {
        setSelected(i);
    };

    const handleNext = () => {
        if (selected === questions[current].correct) {
            setScore(score + 1);
        }
        if (current + 1 < questions.length) {
            setCurrent(current + 1);
            setSelected(null);
        } else {
            setShowResult(true);
        }
    };


    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 rounded-2xl">
            <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 animate-fade-in">
                <h2 className="text-4xl font-extrabold text-white text-center mb-8 tracking-wide">
                    ME Quiz <span className="text-yellow-500">Challenge</span>
                </h2>

                {showResult ? (
                    <div className="text-center py-10">
                        <p className="text-5xl font-extrabold text-yellow-500 mb-6 animate-pop-in">
                            Congratulations!
                        </p>
                        <p className="text-3xl font-semibold text-white mb-8">
                            You scored{" "}
                            <span className="text-yellow-500">{score}</span> out of{" "}
                            <span className="text-yellow-500">{totalQuestions}</span>
                        </p>
                        <p className="text-xl text-gray-300">
                            Great job! Keep practicing to master your skills.
                        </p>
                        <button
                            onClick={() => {
                                setCurrent(0);
                                setScore(0);
                                setShowResult(false);
                                setSelected(null);
                            }}
                            className="mt-10 bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50"
                        >
                            Take Another Quiz
                        </button>
                    </div>
                ) : (
                    <>
                        {/* Progress Bar */}
                        <div className="mb-8">
                            <div className="text-sm font-semibold text-gray-400 mb-2 flex justify-between">
                                <span>Question {current + 1} / {totalQuestions}</span>
                                <span>{Math.round(progressPercentage)}% Complete</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div
                                    className="bg-yellow-500 h-2 rounded-full transition-all duration-500 ease-out"
                                    style={{ width: `${progressPercentage}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <p className="font-bold text-2xl mb-6 text-white leading-relaxed">
                                {questions[current].question}
                            </p>
                            <div className="space-y-4">
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
                        </div>
                        <div className="mt-8 flex justify-end">
                            <button
                                disabled={selected === null}
                                onClick={handleNext}
                                className="bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50"
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

export default Me;
