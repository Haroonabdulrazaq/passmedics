'use client';
import React, { useState } from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: 1, // Index of correct answer (4)
    },
    {
      question: 'Which planet is closest to the Sun?',
      options: ['Venus', 'Mars', 'Mercury', 'Earth'],
      correctAnswer: 2, // Index of correct answer (Mercury)
    },
  ];

  const handleAnswer = (selectedOption: number) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Quiz</h1>

      {currentQuestion < questions.length ? (
        <div>
          <h2 className="text-xl mb-4">
            {questions[currentQuestion].question}
          </h2>
          <div className="space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full p-2 text-left border rounded hover:bg-gray-100"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-xl mb-4">Quiz Complete!</h2>
          <p>
            Your score: {score} out of {questions.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
