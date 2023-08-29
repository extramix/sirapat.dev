import Image from 'next/image';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import HeroSection from '../components/HeroSection';
import Career from '@/components/Career';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between p-24'>
      <section className='mb-10'>
        <HeroSection />
      </section>
      <section>
        <Career />
      </section>
    </main>
  );
}
