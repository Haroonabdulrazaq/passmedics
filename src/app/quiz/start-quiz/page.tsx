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

const StartQuiz = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [timer, setTimer] = useState(600);
  const router = useRouter();

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
    setSelectedOption('');
    setQuestionNumber((prevQuestion: number) => {
      if (prevQuestion == 9) {
        router.push('/quiz');
        return 0;
      }

      return prevQuestion + 1;
    });
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
