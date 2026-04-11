// /src/app/(site)/about/page.tsx
import type { Metadata } from 'next';
import WipPage from '@/components/pages/Wip';

export const metadata: Metadata = {
  title: 'about',
};

export default function About() {
  return <WipPage />;
}
