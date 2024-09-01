'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

const Header: React.FC = () => {
  const pathname = usePathname();

  // Helper function to check if the link is active
  const isActive = (path: string) => pathname === path;

  return (
    <header className='flex items-center justify-between bg-white h-[100px] p-[28px_167px_29px_167px] gap-10 mx-auto opacity-100 top-0 z-50'>
      {/* Logo Section */}
      <div className='logo'>
        <Image
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/f7d065330f1400e12c4b32bd546f775c58fe261fc955eed326a636d1fc72a7e5?placeholderIfAbsent=true&apiKey=ee08f851c2f4486d80ef80d866bed106'
          alt='Company logo'
          width={73}
          height={73}
          className='object-contain shrink-0 self-stretch my-auto aspect-[4.88] w-[73px]'
          loading='lazy'
        />
      </div>

      {/* Navigation Links */}
      <nav className='text-[#2B271E] flex items-center xl:gap-6 2xl:gap-9 2xl:text-lg xl:text-sm'>
        {/* Home Link with Custom Design When Active */}
        <Link href='/' className={`tracking-tighter ${isActive('/') ? 'font-bold text-black' : 'text-gray-700'}`}>
          {isActive('/') ? (
            <>
              H<i className='pr-[2px]'>O</i>ME
            </>
          ) : (
            'Home'
          )}
        </Link>

        {/* Manila Fame Link with Custom Design When Active */}
        <Link
          href='/manila-fame'
          className={`tracking-tighter ${isActive('/manila-fame') ? 'font-bold text-black' : 'text-gray-700'}`}
        >
          {isActive('/manila-fame') ? (
            <>
              M<i className='pr-[2px]'>A</i>NILA FAME
            </>
          ) : (
            'Manila Fame'
          )}
        </Link>

        {/* Spotlight Link with Custom Design When Active */}
        <Link
          href='/spotlight'
          className={`tracking-tighter ${isActive('/spotlight') ? 'font-bold text-black' : 'text-gray-700'}`}
        >
          {isActive('/spotlight') ? (
            <>
              S<i className='pr-[2px]'>P</i>OTLIGHT
            </>
          ) : (
            'Spotlight'
          )}
        </Link>

        {/* Stories Link with Custom Design When Active */}
        <Link
          href='/stories'
          className={`tracking-tighter ${isActive('/stories') ? 'font-bold text-black' : 'text-gray-700'}`}
        >
          {isActive('/stories') ? (
            <>
              S<i className='pr-[2px]'>T</i>ORIES
            </>
          ) : (
            'Stories'
          )}
        </Link>

        {/* Auction Link with Custom Design When Active */}
        <Link
          href='/auction'
          className={`tracking-tighter ${isActive('/auction') ? 'font-bold text-black' : 'text-gray-700'}`}
        >
          {isActive('/auction') ? (
            <>
              A<i className='pr-[2px]'>U</i>CTION
            </>
          ) : (
            'Auction'
          )}
        </Link>

        {/* Catalogue Link with Custom Design When Active */}
        <Link
          href='/catalogue'
          className={`tracking-tighter ${isActive('/catalogue') ? 'font-bold text-black' : 'text-gray-700'}`}
        >
          {isActive('/catalogue') ? (
            <>
              C<i className='pr-[2px]'>A</i>TALOGUE
            </>
          ) : (
            'Catalogue'
          )}
        </Link>

        {/* About Us Link with Custom Design When Active */}
        <Link
          href='/about-us'
          className={`tracking-tighter ${isActive('/about-us') ? 'font-bold text-black' : 'text-gray-700'}`}
        >
          {isActive('/about-us') ? (
            <>
              A<i className='pr-[2px]'>B</i>OUT US
            </>
          ) : (
            'About Us'
          )}
        </Link>
      </nav>

      {/* Authentication Buttons */}
      <div className='xl:text-sm 2xl:text-lg'>
        <Link href='/login' className='text-[#6A704C] 2xl:px-6 2xl:py-3 xl:py-2 xl:px-4 text-bold'>
          Login
        </Link>
        <Link href='/register' className='bg-primary-2 text-white px-6 py-3 text-bold xl:py-2 xl:px-4 shadow-custom-shadow'>
          Register
        </Link>
      </div>
    </header>
  );
};

export default Header;
