import React from "react";

export default function IntroF1({ startQuizz }) {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-8">
            <div className="text-center max-w-2xl w-full animate-fade-in">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 border border-f1-red/40 bg-f1-red/10 rounded-full px-5 py-2 mb-8 text-f1-red font-orbitron text-xs tracking-widest uppercase">
                    🏁 F1 Quiz 2025 🏁
                </div>

                {/* Title */}
                <h1 className="font-orbitron text-4xl md:text-6xl font-black uppercase tracking-widest text-f1-red leading-tight mb-4">
                    Quel pilote<br />de F1 es-tu ?
                </h1>

                {/* Red divider */}
                <div className="h-1 w-24 bg-f1-red mx-auto rounded-full mb-6" />

                {/* Description */}
                <p className="font-inter text-gray-300 text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-10">
                    Réponds à <span className="text-white font-semibold">12 questions délirantes</span> et découvre si tu es Max, Lewis, Charles, Lando, Oscar, Lance ou Georges 🏎️💨
                </p>

                {/* Drivers preview */}
                <div className="flex justify-center gap-3 mb-10 flex-wrap">
                    {["MAX", "LEWIS", "CHARLES", "LANDO", "OSCAR", "LANCE", "GEORGE"].map((name) => (
                        <span key={name} className="font-orbitron text-xs text-gray-500 border border-gray-800 rounded px-2 py-1 tracking-widest">
                            {name}
                        </span>
                    ))}
                </div>

                {/* CTA Button */}
                <button
                    onClick={startQuizz}
                    className="bg-f1-red hover:bg-red-700 text-white font-orbitron font-black uppercase tracking-widest px-10 py-4 rounded-xl text-base md:text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(225,6,0,0.5)] hover:shadow-[0_0_40px_rgba(225,6,0,0.9)] cursor-pointer"
                >
                    🚀 Lancer le quiz
                </button>

                {/* Hint */}
                <p className="text-gray-600 font-inter text-xs mt-6 tracking-widest">
                    7 pilotes · 12 questions · ∞ fun
                </p>
            </div>
        </div>
    );
}
