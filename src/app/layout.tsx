import type { Metadata } from 'next';
import { Providers } from '@/app/provider';
import { fonts } from './fonts';
import Header from '@/components/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.poppins.variable}>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
