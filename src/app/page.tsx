import HeroSection from '@/components/ui/hero-section/HeroSection';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex-grow'>
      <HeroSection />
      Home
      <nav className='navbar'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <Link href='/login'>Login</Link>
          </li>
          <li className='nav-item'>
            <Link href='/register'>Register</Link>
          </li>
          <li className='nav-item'>
            <Link href='/about-us'>About Us</Link>
          </li>
          <li className='nav-item'>
            <Link href='/auction'>Auction</Link>
          </li>
          <li className='nav-item'>
            <Link href='/manila-fame'>Manila Fame</Link>
          </li>
          <li className='nav-item'>
            <Link href='/spotlight'>Spotlight</Link>
          </li>
          <li className='nav-item'>
            <Link href='/stories'>Stories</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
