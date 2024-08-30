import React from 'react';


interface StoriesBehindProps {}

const StoriesStoriesBehind: React.FC<StoriesBehindProps> = () => {
  return (
    <main className="flex relative flex-col px-40 py-56 max-md:px-5 max-md:py-24">
 <div className="flex absolute right-0 bottom-0 z-0 flex-col h-[665px] w-[1440px] max-md:max-w-full">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3164c715cf499acbcecc4a9a7ed8a9daf3fb336ab62564a8753730baf1d68ceb?placeholderIfAbsent=true&apiKey=f35c25b17acb406083beeda46a28c843" 
        alt="Background design element" 
        className="object-contain w-full aspect-[2.16] max-md:max-w-full" 
      />
    </div>      <section className="flex z-0 flex-col max-w-full text-white w-[1110px]">
    <h1 className="text-6xl font-bold max-md:max-w-full max-md:text-4xl">
      STORIES BEHIND
    </h1>
            <div className="flex flex-col max-w-full w-[830px]">
            <h2 className="text-6xl font-bold max-md:max-w-full max-md:text-4xl">
      FILIPINO DESIGN EXCELLENCE
    </h2>
    <p className="text-xl leading-8 tracking-[2px] max-md:max-w-full">
      Cover Feature Story:{' '}
      <span className="underline">
        Inviting Natural Home Furnishings are the Heavy Hitters to See from DesignPhilippines in 2023
      </span>
    </p>        </div>
      </section>
    </main>
  );
};

export default StoriesStoriesBehind;