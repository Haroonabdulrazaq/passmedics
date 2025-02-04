'use client';
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      height="8vh"
      bg="white"
      borderBottom="1px"
      borderColor="gray.100"
      backdropFilter="blur(10px)"
      backgroundColor="rgba(255, 255, 255, 0.9)"
      zIndex={10}
    >
      <Flex
        height="100%"
        alignItems="center"
        maxW="1440px"
        mx="auto"
        px={{ base: 4, sm: 6, lg: 8, xl: 60 }}
      >
        <Heading
          as="h6"
          fontWeight={600}
          color="#3B82F6"
          fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
        >
          <Link href="/">
            <Text>PassMedics</Text>
          </Link>
        </Heading>
      </Flex>
    </Box>
  );
};

export default Header;
