import Link from 'next/link';

const FeatureHeader = () => {
  return (
    <div className='flex items-center justify-between'>
      <h2 className='text-4xl font-bold'>Plus Feature</h2>
      <Link
        href='#'
        className='tracking-tight font-normal text-secondary-5 inline-flex items-center gap-2'
      >
        See more{' '}
        <span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='size-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m8.25 4.5 7.5 7.5-7.5 7.5'
            />
          </svg>
        </span>
      </Link>
    </div>
  );
};

export default FeatureHeader;
