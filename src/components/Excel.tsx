'use client';
import {
  Box,
  Heading,
  Text,
  Link,
  HStack,
  VStack,
  Icon,
} from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';
import { CiCircleCheck, CiHeart } from 'react-icons/ci';
import { GiGraduateCap } from 'react-icons/gi';

const Excel = () => {
  return (
    <Box p={12} bgGradient="linear(to-br, #2563eb, #4338ca)" color="white">
      <VStack spacing={6} align="center">
        {/* Heading Section */}
        <Heading as="h2" size="2xl" textAlign="center" fontWeight="bold" mb={4}>
          Ready to Excel in Your Medical Exams?
        </Heading>

        {/* Subtext */}
        <Text fontSize="xl" textAlign="center" mb={8}>
          Join thousands of successful medical students who trust PassMedics
        </Text>

        {/* Links Section */}
        <HStack spacing={6} mb={12}>
          <Link
            href="/quiz"
            display="flex"
            alignItems="center"
            bg="white"
            color="#2563eb"
            px={6}
            py={3}
            borderRadius="lg"
            _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
            transition="all 0.2s"
          >
            Start Practice Quiz
            <Icon as={FiArrowRight} ml={2} />
          </Link>

          <Link
            href="/clinical-cases"
            display="flex"
            alignItems="center"
            bg="whiteAlpha.200"
            px={6}
            py={3}
            borderRadius="lg"
            _hover={{ bg: 'whiteAlpha.300', transform: 'translateY(-2px)' }}
            transition="all 0.2s"
          >
            Try Clinic Case
            <Icon as={FiArrowRight} ml={2} />
          </Link>
        </HStack>

        {/* Features Section */}
        <HStack spacing={8} wrap="wrap" justify="center">
          <HStack spacing={2}>
            <Icon as={CiCircleCheck} boxSize={6} />
            <Text>No Credit Card Required</Text>
          </HStack>

          <HStack spacing={2}>
            <Icon as={CiHeart} boxSize={6} />
            <Text>14-Day Free Trial</Text>
          </HStack>

          <HStack spacing={2}>
            <Icon as={GiGraduateCap} boxSize={6} />
            <Text>Student Discount Available</Text>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Excel;
