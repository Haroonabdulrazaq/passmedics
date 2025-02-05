'use client';
import { questions } from '@/lib/questions';
import {
  Box,
  Flex,
  Progress,
  HStack,
  Tag,
  RadioGroup,
  VStack,
  Radio,
  Divider,
  Button,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

type QuestionProps = {
  selectedOption: string;
  setSelectedOption: (value: string) => void;
  handleNextQuestion: () => void;
  timer: number;
  onOpen: () => void;
  questionNumber: number;
};

const Question = ({
  selectedOption,
  setSelectedOption,
  handleNextQuestion,
  timer,
  onOpen,
  questionNumber,
}: QuestionProps) => {
  return (
    <Box border="1px solid #e5e7eb" p="8" rounded="md">
      <Flex justify="space-between" align="center" mb={4}>
        <Text fontWeight="bold">
          Question {questions[questionNumber].metaData.questionNumber} of{' '}
          {questions.length}
        </Text>
        <Progress
          value={
            (questions[questionNumber].metaData.questionNumber /
              questions.length) *
            100
          }
          size="sm"
          width="50%"
          rounded="md"
          colorScheme="blue"
        />
        <Text fontWeight="bold">
          {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
        </Text>
      </Flex>

      <HStack spacing={2} mb={4}>
        <Tag colorScheme="blue">Multiple Choice</Tag>
        <Tag
          colorScheme={
            questions[questionNumber].metaData.difficulty == 'Hard'
              ? 'red'
              : 'green'
          }
        >
          {questions[questionNumber].metaData.difficulty}
        </Tag>
      </HStack>

      <Box mb={6}>
        <Text fontSize="lg" fontWeight="medium">
          {questions[questionNumber].question}
        </Text>
      </Box>

      <RadioGroup onChange={setSelectedOption} value={selectedOption}>
        <VStack spacing={4} align="stretch">
          {questions[questionNumber].options.map((option) => (
            <Box
              key={option.value}
              sx={{
                rounded: 'md',
                border: `2px solid ${
                  selectedOption === option.value ? '#2563EB' : '#e5e7eb'
                }`,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              _hover={{
                bg: '#EBF8FF',
              }}
            >
              <Radio
                value={option.value}
                borderWidth={1}
                borderColor="gray.200"
                p={4}
                borderRadius="md"
                _hover={{ borderColor: 'gray.300' }}
              >
                <Text>
                  {option.value}. {option.label}
                </Text>
              </Radio>
            </Box>
          ))}
        </VStack>
      </RadioGroup>

      <Divider my={6} />

      <Flex justify="space-between">
        <Button
          colorScheme="red"
          variant="outline"
          onClick={onOpen}
          leftIcon={<FiArrowLeft />}
        >
          Exit Quiz
        </Button>
        <Button
          bg="#2563EB"
          fontWeight="400"
          variant="solid"
          color="white"
          _hover={{
            bg: '#2563FC',
          }}
          isDisabled={!selectedOption}
          onClick={handleNextQuestion}
        >
          Next Question
        </Button>
      </Flex>
    </Box>
  );
};

export default Question;
