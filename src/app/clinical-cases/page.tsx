'use client';
import { Box, Flex, Skeleton, Text } from '@chakra-ui/react';

const ComingSoon = () => {
  return (
    <Flex
      height="100vh"
      align="center"
      justify="center"
      direction="column"
      color="white"
      p={4}
    >
      <Box position="relative">
        <Skeleton
          startColor="gray.700"
          endColor="gray.500"
          height="100%"
          width="100%"
          position="absolute"
          top="0"
          left="0"
          borderRadius="md"
          fadeDuration={1.5}
        />
        <Text
          fontSize={{ base: '2xl', md: '4xl', lg: '6xl' }}
          fontWeight="bold"
          textAlign="center"
          position="relative"
          px={2}
        >
          Coming soon!
        </Text>
      </Box>
    </Flex>
  );
};

export default ComingSoon;
