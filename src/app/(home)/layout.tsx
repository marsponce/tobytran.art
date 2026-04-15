import { Footer, Nav, Socials } from '@/components/layout';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main>
        <Nav />
      </main>
      {children}
      <Footer>
        <Socials />
      </Footer>
    </>
  );
}
