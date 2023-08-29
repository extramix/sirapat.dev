import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='p-3 flex justify-between'>
      <ul className='flex items-center'>
        <Link href={'/'} className='font-semibold text-primary-light'>
          Mix Sirapat
        </Link>
      </ul>
      <ul className='flex gap-3 items-center'>
        {/* <Link href={'/work'} className=''>
          Work
        </Link> */}
        {/* <Link href={'/translation'} className=''>
          Translation
        </Link> */}
        {/* <Link href={'/contact'} className=''>
          <button className='px-5 py-2 border border-primary-light text-black bg-white rounded-full'>
            Contact
          </button>
        </Link> */}
      </ul>
    </nav>
  );
};

export default Navbar;
