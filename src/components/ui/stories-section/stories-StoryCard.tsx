import React from 'react';

interface StoryCardProps {
  imageSrc: string;
  title: string;
  description?: string;
  isHighlighted?: boolean;
}

const StoriesStoryCard: React.FC<StoryCardProps> = ({ imageSrc, title, description, isHighlighted }) => {
  if (isHighlighted) {
    return (
      <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
        <div className="flex relative flex-col text-center text-white aspect-[0.754] max-md:mt-8">
          <img loading="lazy" src={imageSrc} alt="" className="object-cover absolute inset-0 size-full" />
          <div className="flex relative flex-col pt-24 pr-9 w-full border-solid bg-stone-800 bg-opacity-50 border-[3px] border-stone-600 max-md:pr-5">
            <div className="flex flex-col self-end max-w-full w-[279px]">
              <h3 className="text-3xl font-semibold">{title}</h3>
              <p className="self-center mt-2.5 text-lg font-medium leading-7">{description}</p>
            </div>
            <button className="flex z-10 gap-5 justify-between py-5 pr-5 pl-12 mt-24 max-w-full text-lg font-bold whitespace-nowrap bg-stone-600 w-[255px] max-md:pl-5 max-md:mt-10">
              <span className="my-auto">Explore</span>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e537040af67e9122070b6cd7b36e3939817e8416b604babe99695ce7b2a27b82?placeholderIfAbsent=true&apiKey=f35c25b17acb406083beeda46a28c843" alt="" className="object-contain shrink-0 w-8 aspect-square" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow mt-1 max-md:mt-9">
        <div className="flex relative flex-col items-start pt-80 w-full aspect-[0.835] max-md:pt-24 max-md:pr-5">
          <img loading="lazy" src={imageSrc} alt="" className="object-cover absolute inset-0 size-full" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4005534107c2b57c27e2f4bfc6868042170dbbd4d485d9217331e5641b5545e9?placeholderIfAbsent=true&apiKey=f35c25b17acb406083beeda46a28c843" alt="" className="object-contain aspect-square w-[72px]" />
        </div>
        <h3 className="self-center mt-6 text-xl font-bold text-center text-stone-800">{title}</h3>
      </div>
    </div>
  );
};

export default StoriesStoryCard;