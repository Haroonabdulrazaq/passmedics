'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { fonts } from './fonts';

const theme = extendTheme({
  fonts: {
    body: fonts.poppins.style.fontFamily,
    heading: fonts.poppins.style.fontFamily,
  },
});
export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
