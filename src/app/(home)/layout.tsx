import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Header, Footer, Nav, Socials } from '@/components/layout';
import styles from './layout.module.css';

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
      <body className={styles.wrapper}>
        <Header className={styles.main}>
          <Nav />
        </Header>
        {children}
        <Footer>
          <Socials />
        </Footer>
      </body>
    </html>
  );
}
