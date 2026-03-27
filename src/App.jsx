import React, { useState } from "react";
import IntroF1 from "./components/intro.jsx";
import QuizzF1 from "./components/quizz.jsx";

function App() {
    const [started, setStarted] = useState(false);

    return (
        <div className="min-h-screen bg-dark text-white">
            {!started ? (
                <IntroF1 startQuizz={() => setStarted(true)} />
            ) : (
                <QuizzF1 />
            )}
        </div>
    );
}

export default App;
