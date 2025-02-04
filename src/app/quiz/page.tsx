'use client';
import {
  Box,
  SimpleGrid,
  Text,
  Flex,
  Icon,
  VStack,
  Heading,
  Button,
  HStack,
} from '@chakra-ui/react';
import { FiTarget } from 'react-icons/fi';
import { LuBrain } from 'react-icons/lu';
import { CiCircleCheck } from 'react-icons/ci';
import { IoMdTime } from 'react-icons/io';
import React from 'react';
import { FaStethoscope } from 'react-icons/fa';
import Link from 'next/link';
import Footer from '@/components/Footer';

const Quiz = () => {
  const features = [
    {
      icon: FiTarget,
      bgColor: 'blue.50',
      color: 'blue',
      title: 'Personalized Questions',
      description: 'Questions tailored to your performance and learning needs',
    },
    {
      icon: LuBrain,
      bgColor: 'green.50',
      color: 'green',
      title: 'Active Learning',
      description: 'Detailed explanations and feedback for each question',
    },
    {
      icon: CiCircleCheck,
      bgColor: 'purple.50',
      color: 'purple',
      title: 'Time Management',
      description:
        'Practice under timed conditions to improve speed and accuracy',
    },
    {
      icon: IoMdTime,
      bgColor: 'orange.50',
      color: 'orange',
      title: 'Progress Tracking',
      description:
        'Monitor your improvement with detailed performance analytics',
    },
  ];

  return (
    <>
      <Box mt="8vh" px={4}>
        <VStack spacing={3} mt={20} mb={10} textAlign="center">
          <Heading as="h1" size="xl">
            Medical Quiz
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Test your knowledge with personalized questions based on your
            performance
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={10}>
          {features.map((feature, index) => (
            <Flex
              key={index}
              p={5}
              shadow="md"
              borderWidth="1px"
              borderRadius="lg"
            >
              <Box
                bg={feature.bgColor}
                p={3}
                mr={4}
                borderRadius="lg"
                rounded="xl"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={feature.icon} boxSize={8} color={feature.color} />
              </Box>
              <Box>
                <Text fontWeight="bold" fontSize="lg">
                  {feature.title}
                </Text>
                <Text color="gray.600">{feature.description}</Text>
              </Box>
            </Flex>
          ))}
        </SimpleGrid>

        <HStack spacing={4} justify="center">
          <Link href="/quiz">
            <Button
              variant="ghost"
              bg="#2563EB"
              width="100%"
              color="white"
              fontWeight="400"
              rounded={'md'}
              px={8}
              py={5}
              _hover={{
                bg: '#2563FC',
              }}
            >
              Start Quiz
            </Button>
          </Link>
          <Button
            leftIcon={<FaStethoscope />}
            bg={'white'}
            rounded={'md'}
            fontWeight="400"
            border="0.5px solid #90CDF4"
            px={5}
            py={3}
            _hover={{
              bg: '#EBF8FF',
            }}
          >
            Try Clinic Cases
          </Button>
        </HStack>
        <Text textAlign="center" my="16">
          Want a more immersive experience? Try our clinical case simulations.
        </Text>
      </Box>
      <Footer />
    </>
  );
};

export default Quiz;
