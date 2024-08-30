import HeroSection from '@/components/ui/hero-section/HeroSection';
import FeatureSection from '@/components/ui/plus-feature/FeatureSection';

export default function Home() {
  return (
    <div className='flex-grow'>
      <HeroSection />
      <FeatureSection />
    </div>
  );
}
