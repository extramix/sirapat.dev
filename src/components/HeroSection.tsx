'use client';
import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className=''>
      {/* <div>
        <Image
          src='/images/profile.jpg'
          alt='Profile Picture'
          width={200}
          height={200}
          className='rounded-full'
        />
      </div> */}
      <div className='mb-2'>
        <h1 className='font-semibold text-2xl mb-1'>
          Sirapat Jariyantakul (Mix)
        </h1>
        <h2 className='text-gray-500'>
          Software Engineer / Freelance Translator
        </h2>
      </div>
      <div className='flex text-3xl gap-2 justify-center'>
        <Link
          className='hover:text-primary'
          href={'https://www.linkedin.com/in/sirapatjr/'}
        >
          <Icon icon='mdi:linkedin' />
        </Link>
        <Link
          className='hover:text-primary'
          href={'https://www.linkedin.com/in/sirapatjr/'}
        >
          <Icon icon='mdi:github' />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
