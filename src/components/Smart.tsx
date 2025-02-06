'use client';

import { Box, Heading, Text, Stack, VStack, Container } from '@chakra-ui/react';
import { LuBrain } from 'react-icons/lu';
import { IoBulbOutline } from 'react-icons/io5';
import { SlTrophy } from 'react-icons/sl';

const FeatureCard = ({
  icon,
  bgColor,
  title,
  description,
}: {
  icon: JSX.Element;
  bgColor: string;
  title: string;
  description: string;
}) => {
  return (
    <Box
      p={6}
      borderRadius="lg"
      border="1px"
      borderColor="gray.200"
      flex={1}
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: 'xl',
      }}
    >
      <VStack align="start" spacing={2}>
        <Box
          p={3}
          bg={bgColor}
          rounded="xl"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {icon}
        </Box>
        <Heading as="h3" fontSize="xl" color="blue.950">
          {title}
        </Heading>
        <Text color="gray.400" fontSize="sm">
          {description}
        </Text>
      </VStack>
    </Box>
  );
};

const Smart = () => {
  const features = [
    {
      icon: <LuBrain size={24} color="blue" />,
      bgColor: 'blue.50',
      title: 'AI-Powered Learning',
      description:
        'Questions and cases adapt to your performance level for optimal learning',
    },
    {
      icon: <IoBulbOutline size={24} color="green" />,
      bgColor: 'green.50',
      title: 'Smart Flashcards',
      description:
        'Automatically generated from your quiz answers for efficient review',
    },
    {
      icon: <SlTrophy size={24} color="purple" />,
      bgColor: 'purple.50',
      title: 'Progress Analytics',
      description: 'Track your improvement with detailed performance insights',
    },
  ];

  return (
    <Box py={12}>
      <Container maxW="container.xl">
        <VStack spacing={4} textAlign="center" mb={12}>
          <Heading as="h2" fontSize="3xl">
            Smart Learning Features
          </Heading>
          <Text color="gray.500" fontSize="lg">
            Tools designed to optimize your study efficiency
          </Text>
        </VStack>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 6, md: 8, lg: 12 }}
          align="stretch"
          justify="center"
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Smart;
