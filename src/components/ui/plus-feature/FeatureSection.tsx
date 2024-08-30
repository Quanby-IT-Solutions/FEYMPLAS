import FeatureHeader from './FeatureHeader';
import NewsContent from './NewsContent';

const FeatureSection = () => {
  return (
    <section className='text-black mx-auto container-sm px-32  border border-black'>
      <FeatureHeader />
      <NewsContent />
    </section>
  );
};

export default FeatureSection;
