import Comprehensive from '@/components/Comprehensive';
import Hero from '@/components/Hero';
import Smart from '@/components/Smart';
import Trust from '@/components/Trust';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box>
      <Hero />
      <Comprehensive />
      <Trust />
      <Smart />
    </Box>
  );
}
