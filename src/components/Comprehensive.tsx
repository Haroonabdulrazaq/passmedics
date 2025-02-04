'use client';

import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Spacer,
  Container,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { FiTarget, FiArrowRight } from 'react-icons/fi';
import { FaStethoscope } from 'react-icons/fa';

interface Props {
  children: React.ReactNode;
}

function PriceWrapper(props: Props) {
  const { children } = props;

  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}
    >
      {children}
    </Box>
  );
}

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
        width={{ base: '100%', md: '80%', lg: '60%' }}
        spacing={{ base: 4, lg: 10 }}
        py={10}
        px={20}
        margin="0 auto"
      >
        <Box
          flex={1}
          p={8}
          borderRadius="lg"
          border="2px"
          borderColor="blue.200"
          height="100%"
          transition="transform 0.2s"
          _hover={{
            transform: 'translateY(-8px)',
          }}
          boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
        >
          <Box
            p={3}
            bg="#eff6ff"
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
          <Button
            width="100%"
            variant="solid"
            colorScheme="blue.950"
            alignSelf="center"
            // color="white"
            rightIcon={<FiArrowRight />}
          >
            Start Practice Quiz
          </Button>
        </Box>
        <Box
          flex={1}
          p={8}
          borderRadius="lg"
          border="2px"
          borderColor="blue.200"
          height="100%"
          transition="transform 0.2s"
          _hover={{
            transform: 'translateY(-8px)',
          }}
          boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
        >
          <Box
            p={3}
            bg="#eff6ff"
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
          <Button
            width="80%"
            variant="outline"
            color="white"
            colorScheme="blue.950"
            // _hover={{ bg: 'blue.800' }}
            rightIcon={<FiArrowRight />}
          >
            Explore Cases
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
