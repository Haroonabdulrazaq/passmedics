import Comprehensive from '@/components/Comprehensive';
import Excel from '@/components/Excel';
import Footer from '@/components/Footer';
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
      <Excel />
      <Footer />
    </Box>
  );
}
