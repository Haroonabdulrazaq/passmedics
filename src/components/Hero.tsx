'use client';

import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Spacer,
  Link,
} from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';
import { FiUsers, FiStar, FiTarget } from 'react-icons/fi';
import {} from 'react-icons/fi';

const Hero = () => {
  return (
    <Box
      width="100%"
      minHeight="60vh"
      bgGradient={'linear(to-r, #eff6ff, #faf5ff)'}
      alignContent={'center'}
    >
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 6 }}
        py={{ base: 20, lg: 'lg' }}
        px={{ base: 20, lg: 'lg' }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' }}
          lineHeight={'100%'}
          color={'blue.950'}
          mb={2}
        >
          Master Medical Knowledge with <br />
          <Text
            as={'span'}
            color="#2563EB"
            lineHeight="110%"
            fontWeight="bold"
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          >
            Confidence
          </Text>
        </Heading>
        <Text color={'gray.500'} fontSize={{ base: 'sm', md: 'md', lg: 'xl' }}>
          Comprehensive exam preparation combining AI-powered quizzes, realistic
          clinical cases, and <br /> intelligent study tools.
        </Text>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 3, lg: 6 }}
          align={'center'}
          alignSelf={'center'}
          position={'relative'}
        >
          <Link href="/quiz">
            <Button
              variant="ghost"
              bg="#2563EB"
              width="100%"
              color="white"
              fontWeight="400"
              rounded={'md'}
              px={5}
              py={3}
              _hover={{
                bg: '#2563FC',
              }}
              rightIcon={<FiArrowRight />}
            >
              Practice quiz
            </Button>
          </Link>
          <Link href="/clinical-cases">
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
              Clinical Case
            </Button>
          </Link>
        </Stack>
        <Stack
          direction={'row'}
          spacing={{ base: 3, lg: 6 }}
          textAlign={'center'}
          alignSelf={'center'}
        >
          <Stack direction={'row'} alignContent={'center'}>
            <FiUsers color={'gray'} />
            <Text color={'gray.500'}>10K+ Users</Text>
          </Stack>
          <Stack direction={'row'} alignContent={'center'}>
            <FiTarget color={'gray'} />
            <Text color={'gray.500'}>50K+ Questions</Text>
          </Stack>
          <Stack direction={'row'} alignContent={'center'}>
            <FiStar color={'gray'} />
            <Text color={'gray.500'}>4.9/5 Rating</Text>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Hero;
