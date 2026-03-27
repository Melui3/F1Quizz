import React, { useState } from "react";
import { quizzQuestions } from "../data/quizzQuestions.js";
import { getDriverByName, getWinner } from "../data/drivers.js";

const LETTERS = ["A", "B", "C", "D"];

export default function QuizzF1() {
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState({});
    const [finished, setFinished] = useState(false);
    const [bestDriver, setBestDriver] = useState(null);

    function choose(answer) {
        const newScore = { ...score };
        for (const driverName in answer.points) {
            newScore[driverName] = (newScore[driverName] || 0) + answer.points[driverName];
        }
        setScore(newScore);

        if (index < quizzQuestions.length - 1) {
            setIndex(index + 1);
        } else {
            const winnerName = getWinner(newScore);
            setBestDriver(getDriverByName(winnerName));
            setFinished(true);
        }
    }

    function restart() {
        setIndex(0);
        setScore({});
        setFinished(false);
        setBestDriver(null);
    }

    /* ── RESULT SCREEN ── */
    if (finished && bestDriver) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4 py-8">
                <div className="text-center max-w-xl w-full animate-zoom-in">

                    <p className="font-orbitron text-xs text-gray-500 uppercase tracking-widest mb-2">
                        Résultat du quiz
                    </p>
                    <h2 className="font-orbitron text-2xl font-black uppercase tracking-widest text-white mb-4">
                        Tu es…
                    </h2>

                    {/* Driver name with dynamic color */}
                    <div
                        className="font-orbitron text-4xl md:text-5xl font-black uppercase tracking-wider mb-6"
                        style={{
                            color: bestDriver.color,
                            textShadow: `0 0 30px ${bestDriver.color}80`,
                        }}
                    >
                        {bestDriver.name}
                    </div>

                    {/* Driver image */}
                    <img
                        src={bestDriver.image}
                        alt={bestDriver.name}
                        className="w-56 md:w-64 h-auto mx-auto rounded-2xl mb-6"
                        style={{ boxShadow: `0 0 50px ${bestDriver.color}50` }}
                    />

                    {/* Description */}
                    <p className="font-inter text-gray-300 text-base md:text-lg leading-relaxed max-w-md mx-auto mb-8">
                        {bestDriver.description}
                    </p>

                    <button
                        onClick={restart}
                        className="bg-f1-red hover:bg-red-700 text-white font-orbitron font-black uppercase tracking-widest px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(225,6,0,0.5)] hover:shadow-[0_0_35px_rgba(225,6,0,0.8)] cursor-pointer"
                    >
                        🔄 Refaire le quiz
                    </button>
                </div>
            </div>
        );
    }

    /* ── QUIZ SCREEN ── */
    const q = quizzQuestions[index];
    const progress = (index / quizzQuestions.length) * 100;

    return (
        <div className="min-h-screen flex flex-col">

            {/* Fixed progress bar at top */}
            <div className="fixed top-0 left-0 w-full h-1.5 bg-gray-800 z-10">
                <div
                    className="h-full bg-f1-red transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <div className="flex-1 flex items-center justify-center px-4 pt-16 pb-8">
                <div className="w-full max-w-2xl animate-fade-in" key={index}>

                    {/* Counter + dot indicators */}
                    <div className="flex items-center justify-between mb-6">
                        <span className="font-orbitron text-f1-red text-xs uppercase tracking-widest">
                            Question {index + 1} / {quizzQuestions.length}
                        </span>
                        <div className="flex gap-1">
                            {quizzQuestions.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-1 w-3 rounded-full transition-all duration-300 ${
                                        i < index
                                            ? "bg-f1-red"
                                            : i === index
                                            ? "bg-f1-red/60 w-5"
                                            : "bg-gray-700"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Question */}
                    <h2 className="font-orbitron text-xl md:text-2xl font-bold text-white mb-8 leading-snug">
                        {q.question}
                    </h2>

                    {/* Answers — 2 columns on md+ */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {q.answers.map((a, i) => (
                            <button
                                key={i}
                                onClick={() => choose(a)}
                                className="group flex items-start gap-3 bg-[#111] hover:bg-[#1a1a1a] border border-[#222] hover:border-f1-red rounded-xl p-4 text-left transition-all duration-200 hover:translate-x-1 cursor-pointer"
                            >
                                <span className="flex-shrink-0 w-7 h-7 bg-[#222] group-hover:bg-f1-red rounded-lg flex items-center justify-center font-orbitron font-bold text-xs transition-colors duration-200">
                                    {LETTERS[i]}
                                </span>
                                <span className="font-inter text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-200 pt-0.5">
                                    {a.text}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
