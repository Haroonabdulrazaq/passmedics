'use client';
import { Box, Container, Flex, Heading, Spacer } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex>
      <Box
        as="section"
        position="sticky"
        top={0}
        height="8vh"
        width="100%"
        bg="transparent"
        zIndex={10}
        display="flex"
        alignItems="center"
        paddingX={{ sm: 4, md: 56, lg: 96 }}
      >
        <Heading
          as="h6"
          textAlign={'center'}
          fontWeight={700}
          color="#3B82F6"
          fontSize={{ sm: 'sm', md: 'md', lg: 'xl' }}
          lineHeight={'100%'}
        >
          PassMedics
        </Heading>
      </Box>
      <Spacer />
    </Flex>
  );
};

export default Header;
