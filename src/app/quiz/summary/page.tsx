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

const Summary = () => {
  let correctAnswers: number = 8;
  const scorePercentage = (correctAnswers / questions.length) * 100;
  const isPassing = scorePercentage >= 70;

  return (
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

        <HStack justify="space-around">
          <Box>
            <Text fontWeight="bold">Topic Analysis</Text>
            {/* Add logic to display strongest topics */}
          </Box>
          <Box>
            <Text fontWeight="bold">Topic Performance</Text>
            {/* Add logic to display performance */}
          </Box>
        </HStack>

        <Box>
          <HStack justify="space-between" my="8">
            <Text fontWeight="bold">Detailed Question Review</Text>
            <Text fontWeight="bold">
              <ButtonGroup>
                <Button>All</Button>
                <Button>Correct</Button>
                <Button>Incorrect</Button>
              </ButtonGroup>
            </Text>
          </HStack>

          {questions.map((question, index) => (
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
              <Text color="green.400">
                <BsCheck2Circle color="green" /> Your Answer:{' '}
                {question.options
                  .filter((option) => option.isCorrect)
                  .map((option) => option.label)
                  .join(', ')}
              </Text>
            </Box>
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default Summary;
