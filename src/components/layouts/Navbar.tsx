import React from 'react';

const Header: React.FC = () => {
  return (
    <header className='flex items-center justify-between bg-white w-[1440px] h-[100px] p-[28px_167px_29px_167px] gap-10 mx-auto opacity-100'>
      {/* Logo Section */}
      <div className='logo'>
        {/* <img src='logo.png' alt='Logo' className='h-12' /> */}
        <h1 className='text-black'> Logo Here</h1>
      </div>

      {/* Navigation Links */}
      <nav className='flex items-center gap-9'>
        <div className='nav-links space-x-6 text-[#2B271E]'>
          <a
            href='#'
            className='font-bold  text-md tracking-wide inline-flex items-baseline '
          >
            H<i className='pr-[2px]'>O</i>ME
          </a>
          <a href='#' className='text-[#6A704C]  tracking-tighter'>
            Manila Fame
          </a>
          <a href='#' className='text-gray-700  tracking-tighter'>
            Spotlight
          </a>
          <a href='#' className='text-gray-700  tracking-tighter'>
            Stories
          </a>
          <a href='#' className='text-gray-700  tracking-tighter'>
            Auction
          </a>
          <a href='#' className='text-gray-700  tracking-tighter'>
            Catalogue
          </a>
          <a href='#' className='text-gray-700 hover:text-blue-500'>
            About Us
          </a>
        </div>
      </nav>

      {/* Authentication Buttons */}
      <div className=''>
        <button className='text-[#6A704C] px-6 py-3'>Login</button>
        <button className='bg-primary-2 px-6 py-3 shadow-custom-shadow'>
          Register
        </button>
      </div>
    </header>
  );
};

export default Header;
