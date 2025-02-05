import { Providers } from '@/app/provider';
import { fonts } from './fonts';
import Header from '@/components/Header';
import ReduxProvider from '@/redux/provider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.poppins.variable}>
      <body>
        <ReduxProvider>
          <Providers>
            <Header />
            {children}
          </Providers>
        </ReduxProvider>
      </body>
    </html>
  );
}
