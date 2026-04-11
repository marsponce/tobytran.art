// /src/app/(site)blog/page.tsx
import type { Metadata } from 'next';
import WipPage from '@/components/pages/Wip';
export const metadata: Metadata = {
  title: 'blog',
};

export default function Blog() {
  return <WipPage />;
}
