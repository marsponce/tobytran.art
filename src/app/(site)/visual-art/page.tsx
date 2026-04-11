// /src/app/(site)/visual-art/page.tsx
import type { Metadata } from 'next';
import WipPage from '@/components/pages/Wip';

export const metadata: Metadata = {
  title: 'visual art',
};

export default function VisualArt() {
  return <WipPage />;
}
