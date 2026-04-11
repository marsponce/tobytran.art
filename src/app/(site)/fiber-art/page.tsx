// /src/app/(site)fiber-art/page.tsx
import WipPage from '@/components/pages/Wip';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'fiber art',
};

export default function FiberArt() {
  return <WipPage />;
}
