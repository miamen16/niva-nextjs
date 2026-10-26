"use client";

import { useState } from "react";

const questions = [
  ["Have you noticed hotter days or longer heatwaves where you live?", ["Yes, definitely", "A little", "Not sure"]],
  ["Have water shortages affected your community?", ["Yes, often", "Sometimes", "Not that I know of"]],
  ["Have you noticed changes in local plants, wildlife or seasons?", ["Yes", "Maybe", "Not sure"]],
  ["Do extreme weather events affect your daily life?", ["More than before", "Occasionally", "Rarely"]],
  ["Would you like to take practical climate action?", ["Absolutely", "I’d like to learn how", "I’m still exploring"]],
];

export default function ClimateQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [done, setDone] = useState(false);

  function restart() {
    setStep(0);
    setAnswers([]);
    setDone(false);
  }

  return (
    <section className="quiz section" id="quiz">
      <div>
        <p className="eyebrow">✳ CONNECT THE DOTS</p>
        <h2>Is your climate<br /><em>changing?</em></h2>
        <p>Reflect on how climate change may be showing up where you live.</p>
        <small>◷ 5 QUESTIONS · 30 SECONDS</small>
      </div>
      <div className="quizbox">
        {done ? (
          <>
            <p className="eyebrow">YOUR REFLECTION</p>
            <h3>Your observations matter.</h3>
            <p>Every community experiences climate change differently. Keep noticing local changes and explore practical actions you can take together.</p>
            <button className="button dark" onClick={restart}>Take the quiz again ↻</button>
          </>
        ) : (
          <>
            <div className="progress">QUESTION {step + 1} / 5 <span style={{ width: `${(step + 1) * 20}%` }} /></div>
            <h3>{questions[step][0]}</h3>
            {questions[step][1].map((answer) => (
              <button key={answer} className={`answer ${answers[step] === answer ? "chosen" : ""}`} onClick={() => setAnswers((old) => { const next = [...old]; next[step] = answer; return next; })}>
                {answer}<span>{answers[step] === answer ? "●" : "○"}</span>
              </button>
            ))}
            <div className="quiz-controls">
              <button onClick={() => setStep(Math.max(0, step - 1))} disabled={!step}>← Back</button>
              <button className="button dark" disabled={!answers[step]} onClick={() => step === 4 ? setDone(true) : setStep(step + 1)}>{step === 4 ? "See reflection" : "Next question →"}</button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
