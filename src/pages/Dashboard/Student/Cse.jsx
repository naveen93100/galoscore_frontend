// import { useState } from "react";

// const questions = [
//     {
//         question: "What does CPU stand for?",
//         options: [
//             "Central Process Unit",
//             "Central Processing Unit",
//             "Computer Personal Unit",
//             "Central Processor Utility",
//         ],
//         correct: 1,
//     },
//     {
//         question: "Which language is used for web apps?",
//         options: ["PHP", "Python", "Javascript", "All"],
//         correct: 3,
//     },
//     {
//         question: "Which data structure uses LIFO (Last In First Out)?",
//         options: ["Queue", "Array", "Stack", "Linked List"],
//         correct: 2,
//     },
//     {
//         question: "What is the time complexity of binary search?",
//         options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
//         correct: 1,
//     },
//     {
//         question: "Which protocol is used to send emails?",
//         options: ["HTTP", "SMTP", "FTP", "SNMP"],
//         correct: 1,
//     },
//     {
//         question: "Which of the following is a primary key characteristic?",
//         options: [
//             "Can be NULL",
//             "Can be duplicated",
//             "Uniquely identifies records",
//             "Used for sorting only",
//         ],
//         correct: 2,
//     },
//     {
//         question: "In Boolean algebra, what is the result of 1 AND 0?",
//         options: ["1", "0", "Undefined", "Error"],
//         correct: 1,
//     },
//     {
//         question: "What is the derivative of sin(x)?",
//         options: ["cos(x)", "-cos(x)", "-sin(x)", "tan(x)"],
//         correct: 0,
//     },
//     {
//         question: "Which matrix has only non-diagonal zero elements?",
//         options: ["Diagonal Matrix", "Zero Matrix", "Identity Matrix", "Sparse Matrix"],
//         correct: 0,
//     },
//     {
//         question: "Which one is a valid probability value?",
//         options: ["-1", "1.5", "0.7", "2"],
//         correct: 2,
//     },
//     {
//         question: "Which of the following is *not* a software development model?",
//         options: ["Waterfall", "Agile", "Spiral", "Carbon"],
//         correct: 3,
//     },
//     {
//         question: "Which topology has a central hub?",
//         options: ["Bus", "Star", "Ring", "Mesh"],
//         correct: 1,
//     },
// ];


// const Cse = () => {
//     const [current, setCurrent] = useState(0);
//     const [selected, setSelected] = useState(null);
//     const [score, setScore] = useState(0);
//     const [showResult, setShowResult] = useState(false);

//     const totalQuestions = questions.length;
//     const progressPercentage = ((current ) / totalQuestions) * 100;

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
//                     CSE Quiz <span className="text-yellow-500">Challenge</span>
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

// export default Cse;


import { useEffect, useState } from "react";

const questions = [
    {
        question: "What does CPU stand for?",
        options: [
            "Central Process Unit",
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Processor Utility",
        ],
        correct: 1,
    },
    {
        question: "Which language is used for web apps?",
        options: ["PHP", "Python", "Javascript", "All"],
        correct: 3,
    },
    {
        question: "Which data structure uses LIFO (Last In First Out)?",
        options: ["Queue", "Array", "Stack", "Linked List"],
        correct: 2,
    },
    {
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        correct: 1,
    },
    {
        question: "Which protocol is used to send emails?",
        options: ["HTTP", "SMTP", "FTP", "SNMP"],
        correct: 1,
    },
    {
        question: "Which of the following is a primary key characteristic?",
        options: [
            "Can be NULL",
            "Can be duplicated",
            "Uniquely identifies records",
            "Used for sorting only",
        ],
        correct: 2,
    },
    {
        question: "In Boolean algebra, what is the result of 1 AND 0?",
        options: ["1", "0", "Undefined", "Error"],
        correct: 1,
    },
    {
        question: "What is the derivative of sin(x)?",
        options: ["cos(x)", "-cos(x)", "-sin(x)", "tan(x)"],
        correct: 0,
    },
    {
        question: "Which matrix has only non-diagonal zero elements?",
        options: ["Diagonal Matrix", "Zero Matrix", "Identity Matrix", "Sparse Matrix"],
        correct: 0,
    },
    {
        question: "Which one is a valid probability value?",
        options: ["-1", "1.5", "0.7", "2"],
        correct: 2,
    },
    {
        question: "Which of the following is *not* a software development model?",
        options: ["Waterfall", "Agile", "Spiral", "Carbon"],
        correct: 3,
    },
    {
        question: "Which topology has a central hub?",
        options: ["Bus", "Star", "Ring", "Mesh"],
        correct: 1,
    },
];

const Cse = () => {
    const [showInstructions, setShowInstructions] = useState(true);
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [timeLeft, setTimeLeft] = useState(300);

    const totalQuestions = questions.length;
    const progressPercentage = (current / totalQuestions) * 100;

    // Timer logic
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
        const mins = Math.floor(secs / 60);
        const seconds = secs % 60;
        return `${mins.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
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

    const handleStartTest = () => {
        setShowInstructions(false);
        setTimeLeft(300);
    };

    const handleRetake = () => {
        setCurrent(0);
        setScore(0);
        setShowResult(false);
        setSelected(null);
        setTimeLeft(300);
        setShowInstructions(true);
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 rounded-2xl">
            <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700">
                {showInstructions ? (
                    <div className="text-white space-y-6 text-center">
                        <h2 className="text-4xl font-bold text-yellow-400">CSE Test Instructions</h2>
                        <ul className="text-lg text-gray-300 space-y-3 text-left">
                            <li>🕒 Duration: 5 minutes</li>
                            <li>📋 Each question carries 1 mark</li>
                            <li>🚫 No negative marking</li>
                            <li>🔒 No going back to previous questions</li>
                            <li>🎯 Result shown immediately after completion</li>
                        </ul>
                        <button
                            onClick={handleStartTest}
                            className="mt-6 bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50"
                        >
                            Start Test
                        </button>
                    </div>
                ) : showResult ? (
                    <div className="text-center py-10 text-white">
                        <h2 className="text-5xl font-bold text-yellow-400 mb-4">Test Completed!</h2>
                        <p className="text-3xl font-semibold mb-4">
                            You scored <span className="text-yellow-500">{score}</span> out of{" "}
                            <span className="text-yellow-500">{totalQuestions}</span>
                        </p>
                        <p className="text-lg text-gray-300">Thank you for participating!</p>
                        <button
                            onClick={handleRetake}
                            className="mt-8 bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50"
                        >
                            Retake Quiz
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="flex justify-between items-center mb-6 text-sm text-gray-400">
                            <span>Question {current + 1} / {totalQuestions}</span>
                            <span className="text-yellow-500 font-bold text-lg">Time: {formatTime(timeLeft)}</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-6">
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div
                                    className="bg-yellow-500 h-2 rounded-full transition-all duration-500 ease-out"
                                    style={{ width: `${progressPercentage}%` }}
                                ></div>
                            </div>
                        </div>

                        <p className="text-white font-bold text-2xl mb-4">
                            {questions[current].question}
                        </p>

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

export default Cse;
