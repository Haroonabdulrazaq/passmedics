'use client';

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa6';

interface Props {
  children: React.ReactNode;
}

const Testimonial = (props: Props) => {
  const { children } = props;

  return <Box alignContent="start">{children}</Box>;
};

const TestimonialContent = (props: Props) => {
  const { children } = props;

  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'start'}
      pos={'relative'}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = (props: Props) => {
  const { children } = props;

  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = (props: Props) => {
  const { children } = props;

  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} justify="flex-start" mt={8} direction={'row'}>
      <Avatar src={src} mb={2} mr="2" />
      <Stack spacing="-1.5" align={'start'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Trust() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Trusted by Leading Medical Institutions</Heading>
          <Text>
            Join thousands of medical students preparing for their exams with
            PassMedics
          </Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                <Flex direction="row" justify="flex-start" align="flex-start">
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                </Flex>
              </TestimonialHeading>
              <TestimonialText>
                "The adaptive quizes and clinical cases have significantly
                improved my diagnostic reasoning. The auto-generated flashcards
                are a game-changer!"
              </TestimonialText>
              <TestimonialAvatar
                src={
                  'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
                }
                name={'Dr. James Mitchell'}
                title={'Final Year Medical Student'}
              />
            </TestimonialContent>
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                <Flex>
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                </Flex>
              </TestimonialHeading>
              <TestimonialText>
                "The clinical cases are incredibly realistic and challenging.
                They've helped me develop a structured approach to patient
                management."
              </TestimonialText>
              <TestimonialAvatar
                src={
                  'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                }
                name={'Sarah Lee'}
                title={'Medical Resident'}
              />
            </TestimonialContent>
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                <Flex align="center">
                  <Flex>
                    <FaStar color="gold" />
                    <FaStar color="gold" />
                    <FaStar color="gold" />
                    <FaStar color="gold" />
                    <FaStar color="gold" />
                  </Flex>
                </Flex>
              </TestimonialHeading>
              <TestimonialText>
                "The combination of quizes and clinical cases provides a
                comprehensive learning experience. The progress tracking is
                excellent."
              </TestimonialText>
              <TestimonialAvatar
                src={
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'
                }
                name={'Dr. Rachel Patel'}
                title={'Medical Intern'}
              />
            </TestimonialContent>
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
