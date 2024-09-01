// src/components/layouts/header/Header.tsx

'use client';

import Image from 'next/image';
import { useState } from 'react';
import NavLink from './NavLink';
import AuthButton from './AuthButton';
import HamburgerMenu from './HamburgerMenu';
import Dropdown from './Dropdown';

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false); // State for managing menu visibility

  // Example items with nested sub-items
  const spotlightItems = [
    {
      label: 'Design Commune',
    },
    {
      label: 'Market Days',
    },
    {
      label: 'Trade Fairs',
      subItems: [
        { label: 'Tokyo International Gift Show 2024' },
        { label: 'Ambiente 2024' },
        { label: 'Maison&Objet Paris 2024' },
      ],
    },
  ];

  return (
    <header className='flex items-center justify-between bg-white h-[80px] p-4 lg:p-6 xl:px-[167px] xl:py-[28px] gap-4 md:gap-10 mx-auto opacity-100 top-0 z-50 shadow-md'>
      {/* Logo Section */}
      <div className='logo'>
        <Image
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/f7d065330f1400e12c4b32bd546f775c58fe261fc955eed326a636d1fc72a7e5?placeholderIfAbsent=true&apiKey=ee08f851c2f4486d80ef80d866bed106'
          alt='Company logo'
          width={73}
          height={73}
          className='object-contain shrink-0'
          loading='lazy'
        />
      </div>

      {/* Hamburger Menu for Mobile */}
      <HamburgerMenu onClick={() => setMenuOpen(!isMenuOpen)} isOpen={isMenuOpen} />

      {/* Navigation Links */}
      <nav
        className={`fixed md:static left-0 top-0 w-full h-full md:h-auto md:w-auto md:flex items-center justify-center bg-white md:bg-transparent z-40 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full md:translate-x-0'
        }`}
      >
        <div className='flex flex-col md:flex-row items-center md:gap-6 xl:gap-8 mt-20 md:mt-0'>
          <NavLink href='/' label='Home' activeLabel={<><i className='pr-[2px]'>O</i>ME</>} />
          <NavLink href='/manila-fame' label='Manila Fame' activeLabel={<><i className='pr-[2px]'>A</i>NILA FAME</>} />
          {/* Dropdown for Spotlight */}
          <Dropdown
            label="Spotlight"
            items={spotlightItems}
          />
          <NavLink href='/stories' label='Stories' activeLabel={<><i className='pr-[2px]'>T</i>ORIES</>} />
          <NavLink href='/auction' label='Auction' activeLabel={<><i className='pr-[2px]'>U</i>CTION</>} />
          <NavLink href='/catalogue' label='Catalogue' activeLabel={<><i className='pr-[2px]'>A</i>TALOGUE</>} />
          <NavLink href='/about-us' label='About Us' activeLabel={<><i className='pr-[2px]'>B</i>OUT US</>} />
          {/* Authentication Buttons for Mobile */}
          <div className='flex flex-col items-center gap-4 mt-6 md:hidden px-8 w-full'>
            <AuthButton href='/login' label='Login' mobile /> {/* Pass mobile prop */}
            <AuthButton href='/register' label='Register' primary mobile /> {/* Pass mobile prop */}
          </div>
          {/* Close Menu Button for Mobile */}
          <button
            className='md:hidden text-black absolute top-4 right-4 focus:outline-none'
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>
      </nav>

      {/* Authentication Buttons for Desktop */}
      <div className='hidden md:flex items-center gap-4 xl:text-sm 2xl:text-lg'>
        <AuthButton href='/login' label='Login' />
        <AuthButton href='/register' label='Register' primary />
      </div>
    </header>
  );
};

export default Header;
