// src/components/home/TouchPoint/Header.tsx

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between w-full p-4 md:px-8 lg:px-16">
      {/* Logo and Title with typography styles */}
      <div className="flex items-center gap-8">
        <h1 className="text-4xl text-stone-800 font-normal tracking-wide">
          <span className="font-light">T</span>
          <span className="font-bold">OUCHP</span>
          <span className="italic">O</span>
          <span className="font-bold">INT</span>
        </h1>
        {/* Tagline */}
        <p className="text-sm md:text-base text-stone-600">
          Stories Behind Filipino Design Excellence
        </p>
      </div>
      {/* Pagination Buttons aligned to the right */}
      <div className="flex items-center gap-4">
        <button className="flex items-center text-stone-400 hover:text-stone-600 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="flex items-center text-green-800 hover:text-green-600 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
