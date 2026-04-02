import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Header, Footer, Nav } from '@/components/layout';

export const metadata: Metadata = {
  title: 'tobytran.art',
  description: "Toby Tran's artist site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header>
          <Nav />
        </Header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
