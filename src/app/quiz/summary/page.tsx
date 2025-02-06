'use client';
import React from 'react';
import {
  Box,
  Text,
  CircularProgress,
  VStack,
  HStack,
  Tag,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import { questions } from '@/lib/questions';
import { BsCheck2Circle } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';
import { useAppSelector } from '@/redux/store';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';
import Footer from '@/components/Footer';

const Summary = () => {
  const { question } = useAppSelector((state) => state.question);

  const myQuestions = question[question.length - 1];

  const correctAnswers: number =
    myQuestions.answers.reduce((acc, curr) => (curr ? acc + 1 : acc), 0) || 0;

  const scorePercentage = (correctAnswers / questions.length) * 100;
  const isPassing = scorePercentage >= 70;

  const [filter, setFilter] = React.useState('all');

  const filteredQuestions = () => {
    if (filter === 'correct') {
      return questions.filter((_, index) => myQuestions.answers[index]);
    } else if (filter === 'incorrect') {
      return questions.filter(
        (_, index) => myQuestions.answers[index] === false
      );
    }
    return questions;
  };

  return (
    <>
      <Breadcrumb
        spacing="8px"
        m="10vh"
        separator={<FaChevronRight color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/quiz">Quiz</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Summary</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box mt="8vh">
        <VStack
          spacing={8}
          align="stretch"
          p="8"
          margin="0 auto"
          width={{ base: '100%', md: '80%', lg: '60%' }}
        >
          <CircularProgress
            value={scorePercentage}
            color={isPassing ? 'green.400' : 'red.400'}
            size="20"
            margin="0 auto"
          />
          <Text margin="0 auto" mt="-20">
            {scorePercentage + '%'}
          </Text>
          <Text fontWeight="bold" margin="0 auto">
            {correctAnswers} of {questions.length} is correct
          </Text>
          <Text fontSize="2xl" fontWeight="bold" margin="0 auto">
            {isPassing ? 'Congratulations! 🎉' : 'Keep practicing! 💪'}
          </Text>
          <Text fontSize="lg" margin="0 auto">
            {isPassing
              ? "You've demonstrated strong knowledge in this quiz. Review your answers below for additional learning."
              : "Don't worry, practice makes perfect. Review the explanations below to strengthen your understanding."}
          </Text>

          <Box>
            <HStack justify="space-between" my="8">
              <Text fontWeight="bold">Detailed Question Review</Text>
              <Text fontWeight="bold">
                <ButtonGroup>
                  <Button onClick={() => setFilter('all')}>All</Button>
                  <Button onClick={() => setFilter('correct')}>Correct</Button>
                  <Button onClick={() => setFilter('incorrect')}>
                    Incorrect
                  </Button>
                </ButtonGroup>
              </Text>
            </HStack>

            {filteredQuestions().map((question, index) => (
              <Box
                key={index}
                border="1px solid #e5e7eb"
                p="4"
                rounded="md"
                mb={4}
              >
                <HStack justify="space-between">
                  <Tag mb="2">Question {question.metaData.questionNumber}</Tag>
                  <Tag
                    mb="2"
                    colorScheme={
                      question.metaData.difficulty === 'Hard' ? 'red' : 'green'
                    }
                  >
                    {question.metaData.difficulty}
                  </Tag>
                </HStack>
                <Text>{question.question}</Text>
                <HStack>
                  {myQuestions.answers[question.metaData.questionNumber - 1] ==
                  true ? (
                    <BsCheck2Circle color="green" />
                  ) : (
                    <ImCancelCircle color="red" />
                  )}
                  <Text color="black"> Your Answer:</Text>
                  <Text
                    color={
                      myQuestions.answers[question.metaData.questionNumber - 1]
                        ? 'green'
                        : 'red'
                    }
                  >
                    {question.options
                      .filter(
                        (option) =>
                          option.value ===
                          myQuestions.selectedOptions[
                            question.metaData.questionNumber - 1
                          ]
                      )
                      .map((option) => option.label)
                      .join(', ')}
                  </Text>
                </HStack>
                <HStack>
                  <Text color="black"> Correct Answer </Text>
                  <Text color="green">
                    {': '}
                    {question.options
                      .filter((option) => option.isCorrect)
                      .map((option) => option.label)
                      .join(', ')}
                  </Text>{' '}
                </HStack>
              </Box>
            ))}
          </Box>
        </VStack>
      </Box>
      <Footer />
    </>
  );
};

export default Summary;
