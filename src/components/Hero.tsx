'use client';

import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Flex,
  Container,
} from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box
      width="100%"
      height="60vh"
      bgGradient={'linear(to-r, #eff6ff, #faf5ff)'}
      border="1px solid red"
      alignContent={'center'}
    >
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 6 }}
        py={{ base: 20, md: 36 }}
        px={{ base: 20, md: 36, lg: 'lg' }}
        border="1px solid yellow"
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'100%'}
          color={'blue.950'}
        >
          Master Medical Knowledge with <br />
          <Text
            as={'span'}
            color={'blue.600'}
            fontWeight="bold"
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          >
            Confidence
          </Text>
        </Heading>
        <Text color={'gray.500'} fontSize={{ base: 'sm', md: 'md', lg: 'xl' }}>
          Comprehensive exam preparation combining AI-powered quizzes, realistic
          clinical cases, and intelligent study tools.
        </Text>
        <Stack
          direction={'row'}
          spacing={{ base: 3, lg: 6 }}
          align={'center'}
          alignSelf={'center'}
          position={'relative'}
        >
          <Button
            colorScheme={'blue'}
            bg={'blue.400'}
            rounded={'md'}
            px={6}
            _hover={{
              bg: 'blue.300',
            }}
          >
            Practice quiz
          </Button>
          <Button variant={'outline'} bg={'white'} rounded={'md'} px={6}>
            Clinical Case
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Hero;
