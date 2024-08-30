import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className='flex items-center justify-between bg-white  h-[100px] p-[28px_167px_29px_167px] gap-10 mx-auto opacity-100'>
      {/* Logo Section */}
      <div className='logo'>
        <img
          loading='lazy'
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/f7d065330f1400e12c4b32bd546f775c58fe261fc955eed326a636d1fc72a7e5?placeholderIfAbsent=true&apiKey=ee08f851c2f4486d80ef80d866bed106'
          alt='Company logo'
          className='object-contain shrink-0 self-stretch my-auto aspect-[4.88] w-[73px]'
        />
      </div>

      {/* Navigation Links */}
      <nav className='text-[#2B271E] flex items-center xl:gap-6  2xl:gap-9 2xl:text-lg xl:text-sm'>
        <Link
          href='/'
          className='font-bold tracking-wide inline-flex items-baseline'
        >
          H<i className='pr-[2px]'>O</i>ME
        </Link>
        <Link href='/manila-fame' className='text-[#6A704C] tracking-tighter'>
          Manila Fame
        </Link>
        <Link href='/spotlight' className='text-gray-700 tracking-tighter'>
          Spotlight
        </Link>
        <Link href='/stories' className='text-gray-700 tracking-tighter'>
          Stories
        </Link>
        <Link href='/auction' className='text-gray-700 tracking-tighter'>
          Auction
        </Link>
        <Link href='/catalogue' className='text-gray-700 tracking-tighter'>
          Catalogue
        </Link>
        <Link href='/about-us' className='text-gray-700 hover:text-blue-500'>
          About Us
        </Link>
      </nav>

      {/* Authentication Buttons */}
      <div className='xl:text-sm 2xl:text-lg'>
        <Link
          href='/login'
          className='text-[#6A704C] 2xl:px-6 2xl:py-3 xl:py-2 xl:px-4 text-bold '
        >
          Login
        </Link>
        <Link
          href='/register'
          className='bg-primary-2 text-white px-6 py-3  text-bold xl:py-2 xl:px-4 shadow-custom-shadow'
        >
          Register
        </Link>
      </div>
    </header>
  );
};

export default Header;
