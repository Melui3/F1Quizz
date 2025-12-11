import React, { useState } from "react";
import { quizzQuestions } from "../data/quizzQuestions.js";
import { getDriverByName, getWinner } from "../data/drivers.js";

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
            finish(newScore);
        }
    }

    function finish(scoreMap) {
        const winnerName = getWinner(scoreMap);
        const winnerDriver = getDriverByName(winnerName);
        setBestDriver(winnerDriver);
        setFinished(true);
    }

    function restartQuizz() {
        setIndex(0);
        setScore({});
        setFinished(false);
        setBestDriver(null);
    }

    if (finished) {
        return (
            <div className="quizz-container">
                <h2 className="quizz-title">Tu es…</h2>
                <div className="quizz-bestdriver" style={{ color: bestDriver.color }}>
                    {bestDriver.name}
                </div>
                <img
                    src={bestDriver?.image}
                    alt={bestDriver?.name}
                    className="quizz-image"
                />
                <p className="quizz-description mb-6">{bestDriver.description}</p>
                <button
                    className="quizz-button"
                    onClick={restartQuizz}
                >
                    Refaire le quizz
                </button>
            </div>
        );
    }

    return (
        <div className="quizz-container">
            <h2 className="quizz-question-count">
                Question {index + 1} / {quizzQuestions.length}
            </h2>
            <h3 className="quizz-question">{quizzQuestions[index].question}</h3>
            <div className="quizz-answers">
                {quizzQuestions[index].answers.map((a, i) => (
                    <button
                        key={i}
                        onClick={() => choose(a)}
                        className="quizz-answer-button"
                    >
                        {a.text}
                    </button>
                ))}
            </div>
        </div>
    );
}
