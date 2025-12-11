import React from "react";

export default function IntroF1({ startQuizz }) {
    return (
        <div className="intro-container">
            <h1 className="intro-title">
                Quel pilote de F1 es-tu ?
            </h1>
            <p className="intro-text">
                Réponds à quelques questions délirantes et découvre si tu es Max, Lewis, Charles,
                Lando, Oscar, Lance ou Georges… et quel style de pilote brûle en toi sur le circuit ! 🏎️💨
            </p>
            <button
                className="intro-button"
                onClick={startQuizz}
            >
                Lancer le quizz
            </button>
        </div>
    );
}
