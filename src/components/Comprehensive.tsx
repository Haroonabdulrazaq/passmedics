'use client';

import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  Button,
  Link,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { FiTarget, FiArrowRight } from 'react-icons/fi';
import { FaStethoscope } from 'react-icons/fa';

export default function Comprehensive() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Comprehensive Learning Experience
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
          Two powerful ways to master medical knowledge
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="left"
        justify="center"
        alignItems="center"
        width={{ base: '100%', md: '90%' }}
        spacing={{ base: 4, lg: 10 }}
        py={10}
        px={4}
        margin="0 auto"
      >
        <Box
          flex={1}
          p={8}
          borderRadius="lg"
          border="2px"
          borderColor="#DBEAFE"
          height="100%"
          transition="transform 0.2s"
          _hover={{
            transform: 'translateY(-4px)',
          }}
          boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
        >
          <Box
            p={3}
            bg="blue.50"
            rounded={'lg'}
            display="inline-block"
            borderRadius="md"
          >
            <FiTarget size={24} color="var(--chakra-colors-blue-600)" />
          </Box>
          <Heading as="h3" fontSize="2xl" color={'blue.950'} mt={4} mb={3}>
            Adaptive Quizes
          </Heading>
          <Text color={'gray.500'} mb={6}>
            AI-powered questions that adapt to your knowledge level. Each
            completed quiz automatically generates flashcards for efficient
            review.
          </Text>
          <VStack align="start" spacing={3} mb={8}>
            <HStack>
              <FaCheckCircle color="var(--chakra-colors-green-400)" />
              <Text>Personalized question selection</Text>
            </HStack>
            <HStack>
              <FaCheckCircle color="var(--chakra-colors-green-400)" />
              <Text>Detailed explanations</Text>
            </HStack>
            <HStack>
              <FaCheckCircle color="var(--chakra-colors-green-400)" />
              <Text>Auto-generated flashcards</Text>
            </HStack>
          </VStack>
          <Link href="quiz">
            <Button
              rightIcon={<FiArrowRight />}
              variant="solid"
              width="100%"
              rounded={'md'}
              fontWeight="400"
              px={5}
              py={3}
              bg="#1A365D"
              color="white"
              _hover={{
                bg: '#1A366E',
              }}
            >
              Start Practice Quiz
            </Button>
          </Link>
        </Box>
        <Box
          flex={1}
          p={8}
          borderRadius="lg"
          border="2px"
          borderColor="#DBEAFE"
          height="100%"
          transition="transform 0.2s"
          _hover={{
            transform: 'translateY(-4px)',
          }}
          boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
        >
          <Box
            p={3}
            bg="blue.50"
            display="inline-block"
            rounded={'lg'}
            borderRadius="md"
          >
            <FaStethoscope size={24} color="var(--chakra-colors-blue-600)" />
          </Box>
          <Heading as="h3" fontSize="2xl" color={'blue.950'} mt={4} mb={3}>
            Clinical Cases
          </Heading>
          <Text color={'gray.500'} mb={6}>
            Practice with realistic patient scenarios that develop your clinical
            reasoning skills and decision-making abilities, from real-world
            scenarios.
          </Text>
          <VStack align="start" spacing={3} mb={8}>
            <HStack>
              <FaCheckCircle color="var(--chakra-colors-green-400)" />
              <Text>Real-world scenarios</Text>
            </HStack>
            <HStack>
              <FaCheckCircle color="var(--chakra-colors-green-400)" />
              <Text>Step-by-step approach</Text>
            </HStack>
            <HStack>
              <FaCheckCircle color="var(--chakra-colors-green-400)" />
              <Text>Expert feedback</Text>
            </HStack>
          </VStack>
          <Link href="clinical-cases">
            <Button
              bg={'white'}
              width="100%"
              rounded={'md'}
              fontWeight="400"
              border="0.5px solid #90CDF4"
              px={5}
              py={3}
              _hover={{
                bg: '#EBF8FF',
              }}
              rightIcon={<FiArrowRight />}
            >
              Try Clinical Cases
            </Button>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
}
