import React, { useState } from "react";
import IntroF1 from "./components/intro.jsx";
import QuizzF1 from "./components/quizz.jsx";
import "./App.css";

function App() {
    const [started, setStarted] = useState(false);

    return (
        <div className="app-container">
            {!started ? (
                <IntroF1 startQuizz={() => setStarted(true)} />
            ) : (
                <QuizzF1 restartQuizz={() => setStarted(false)} />
            )}
        </div>
    );
}

export default App;
