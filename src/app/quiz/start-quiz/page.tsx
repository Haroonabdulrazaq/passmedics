'use client';
import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import Question from '@/components/Question';
import { questions } from '@/lib/questions';
import { handleAnswers } from '@/redux/features/questionSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { v4 as uuidv4 } from 'uuid';

const StartQuiz = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedAnswers, setSelectedAnswers] = useState<boolean[]>([]);
  const [selectedQuestionsNum, setSelectedQuestionsNum] = useState<number[]>(
    []
  );

  const [timer, setTimer] = useState(600);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(countdown);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleNextQuestion = () => {
    let isCorrect = questions[questionNumber].options.find(
      (option) => option.isCorrect === true
    );

    const newSelectedAnswer = isCorrect?.value === selectedOption ?? false;
    const newSelectedQuestionNum = questionNumber;

    setSelectedAnswers((prevAnswers) => [...prevAnswers, newSelectedAnswer]);
    setSelectedQuestionsNum((prevQuestions) => [
      ...prevQuestions,
      newSelectedQuestionNum,
    ]);

    setQuestionNumber((prevQuestion: number) => {
      const nextQuestion = prevQuestion + 1;

      if (prevQuestion === 9) {
        const questionData = {
          id: uuidv4(),
          questionNumber: [...selectedQuestionsNum, newSelectedQuestionNum],
          answers: [...selectedAnswers, newSelectedAnswer],
        };

        dispatch(handleAnswers([questionData]));
        router.push('/quiz/summary');
        return 0;
      }

      return nextQuestion;
    });

    setSelectedOption('');
  };

  const handleExit = () => {
    router.push('/quiz');
    onClose();
  };

  return (
    <Box mt="8vh" maxW="800px" mx="auto" p={6}>
      <Question
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        handleNextQuestion={handleNextQuestion}
        timer={timer}
        onOpen={onOpen}
        questionNumber={questionNumber}
      />

      {/* Exit Confirmation Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Exit Quiz</ModalHeader>
          <ModalBody>
            Are you sure you want to exit the quiz? Your progress will be lost.
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={handleExit}>
              Exit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default StartQuiz;
