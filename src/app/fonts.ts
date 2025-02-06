import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '400', '500', '600'],
  variable: '--font-poppins',
});

export const fonts = {
  poppins,
};
