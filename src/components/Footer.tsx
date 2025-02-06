import { Flex, Text, Link, Spacer } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex
      as="footer"
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      alignItems="center"
      height="5vh"
      px={{ base: 4, lg: 60 }}
      bg="white"
      borderColor="gray.100"
      backdropFilter="blur(10px)"
      backgroundColor="rgba(255, 255, 255, 0.9)"
      zIndex={10}
    >
      <Text fontSize="sm" color="#4B5563">
        &copy; 2025 PassMedics.
      </Text>
      <Spacer />
      <Link fontSize="sm" mr={4} href="/privacy" color="#4B5563">
        Privacy
      </Link>
      <Link fontSize="sm" mr={4} href="/terms" color="#4B5563">
        Terms
      </Link>
      <Link fontSize="sm" href="/contact" color="#4B5563">
        Contact
      </Link>
    </Flex>
  );
};

export default Footer;
