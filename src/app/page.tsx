import TouchPoint from '@/components/home/TouchPoint/TouchPoint';
import HeroSection from '@/components/ui/hero-section/HeroSection';
import FeatureSection from '@/components/ui/plus-feature/FeatureSection';
import SubscriptionServiceComponent from '@/components/ui/subscription/SubscriptionServiceComponent';

export default function Home() {
  return (
    <div className='flex-grow w-full'>
      <HeroSection />
      <TouchPoint />
      <SubscriptionServiceComponent />
      <FeatureSection />
    </div>
  );
}
