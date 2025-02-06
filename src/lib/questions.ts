import { IQuestion } from '@/common/interface';

const questionData = {
  questionNumber: 1,
  totalQuestions: 10,
  type: 'Multiple Choice',
  difficulty: 'Hard',
  question: 'What is the capital of France?',
  options: [
    { label: 'London', value: 'A', isCorrect: false },
    { label: 'Paris', value: 'B', isCorrect: true },
    { label: 'Berlin', value: 'C', isCorrect: false },
    { label: 'Madrid', value: 'D', isCorrect: false },
  ],
};

export const questions: IQuestion[] = [
  {
    question: 'What is the capital of France?',
    options: [
      { label: 'London', value: 'A', isCorrect: false },
      { label: 'Paris', value: 'B', isCorrect: true },
      { label: 'Berlin', value: 'C', isCorrect: false },
      { label: 'Madrid', value: 'D', isCorrect: false },
    ],
    metaData: {
      questionNumber: 1,
      difficulty: 'Easy',
    },
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: [
      { label: 'Venus', value: 'A', isCorrect: false },
      { label: 'Jupiter', value: 'B', isCorrect: false },
      { label: 'Mars', value: 'C', isCorrect: true },
      { label: 'Saturn', value: 'D', isCorrect: false },
    ],
    metaData: {
      questionNumber: 2,
      difficulty: 'Hard',
    },
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: [
      { label: 'Leonardo da Vinci', value: 'A', isCorrect: true },
      { label: 'Pablo Picasso', value: 'B', isCorrect: false },
      { label: 'Vincent van Gogh', value: 'C', isCorrect: false },
      { label: 'Michelangelo', value: 'D', isCorrect: false },
    ],
    metaData: {
      questionNumber: 3,
      difficulty: 'Hard',
    },
  },
  {
    question: 'What is the largest ocean on Earth?',
    options: [
      { label: 'Atlantic Ocean', value: 'A', isCorrect: false },
      { label: 'Indian Ocean', value: 'B', isCorrect: false },
      { label: 'Pacific Ocean', value: 'C', isCorrect: true },
      { label: 'Arctic Ocean', value: 'D', isCorrect: false },
    ],
    metaData: {
      questionNumber: 4,
      difficulty: 'Medium',
    },
  },
  {
    question: 'Which element has the chemical symbol Au?',
    options: [
      { label: 'Silver', value: 'A', isCorrect: false },
      { label: 'Gold', value: 'B', isCorrect: true },
      { label: 'Copper', value: 'C', isCorrect: false },
      { label: 'Iron', value: 'D', isCorrect: false },
    ],
    metaData: {
      questionNumber: 5,
      difficulty: 'Hard',
    },
  },
  {
    question: 'What is the capital of Japan?',
    options: [
      { label: 'Seoul', value: 'A', isCorrect: false },
      { label: 'Beijing', value: 'B', isCorrect: false },
      { label: 'Tokyo', value: 'C', isCorrect: true },
      { label: 'Bangkok', value: 'D', isCorrect: false },
    ],
    metaData: {
      questionNumber: 6,
      difficulty: 'Medium',
    },
  },
  {
    question: 'Who wrote "Romeo and Juliet"?',
    options: [
      { label: 'Charles Dickens', value: 'A', isCorrect: false },
      { label: 'William Shakespeare', value: 'B', isCorrect: true },
      { label: 'Jane Austen', value: 'C', isCorrect: false },
      { label: 'Mark Twain', value: 'D', isCorrect: false },
    ],
    metaData: {
      questionNumber: 7,
      difficulty: 'Hard',
    },
  },
  {
    question: 'What is the largest mammal in the world?',
    options: [
      { label: 'African Elephant', value: 'A', isCorrect: false },
      { label: 'Blue Whale', value: 'B', isCorrect: true },
      { label: 'Giraffe', value: 'C', isCorrect: false },
      { label: 'Polar Bear', value: 'D', isCorrect: false },
    ],
    metaData: {
      questionNumber: 8,
      difficulty: 'Medium',
    },
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: [
      { label: 'Venus', value: 'A', isCorrect: false },
      { label: 'Jupiter', value: 'B', isCorrect: false },
      { label: 'Mars', value: 'C', isCorrect: true },
      { label: 'Saturn', value: 'D', isCorrect: false },
    ],
    metaData: {
      questionNumber: 9,
      difficulty: 'Easy',
    },
  },
  {
    question: 'What is the chemical symbol for Sodium?',
    options: [
      { label: 'So', value: 'A', isCorrect: false },
      { label: 'Sd', value: 'B', isCorrect: false },
      { label: 'Na', value: 'C', isCorrect: true },
      { label: 'No', value: 'D', isCorrect: false },
    ],
    metaData: {
      questionNumber: 10,
      difficulty: 'Easy',
    },
  },
];
export default questionData;
