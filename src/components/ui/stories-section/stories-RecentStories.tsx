import React from 'react';
import StoriesStoryCard from './stories-StoryCard';

interface StoryData {
  imageSrc: string;
  title: string;
  description?: string;
  isHighlighted?: boolean;
}

const stories: StoryData[] = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3c2a211f260a78585016f7dda8636b17cabb495992320a545a4358f5ef929c5c?placeholderIfAbsent=true&apiKey=f35c25b17acb406083beeda46a28c843",
    title: "The Future Of\nInterior Environments With AI",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/881361ecba010dec668db006d84ab459231a0abd2e69333bf596e6c4558fa6d7?placeholderIfAbsent=true&apiKey=f35c25b17acb406083beeda46a28c843",
    title: "KATHA Origins:\nThe Traveler's Palm\nHanging Lamp",
    description: "Designer Guia Viray shares the inspiration behind the KATHA award-winning piece",
    isHighlighted: true,
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/50c490f78b5956eef98c623f6effd0e4ada59653adc5ae98c48f77ff7c9cd724?placeholderIfAbsent=true&apiKey=f35c25b17acb406083beeda46a28c843",
    title: "Mele + Marie: A Tale Of Fine\nPhilippine Artistry",
  },
];

const StoriesRecentStories: React.FC = () => {
  return (
    <section className="flex flex-col mt-32 max-w-full w-[1110px] max-md:mt-10">
      <div className="flex flex-wrap gap-5 justify-between text-4xl font-bold text-stone-800 max-md:max-w-full">
        <h2>RECENT STORIES</h2>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/60ac083902042dfbcbcb09e71e89fa04321e0df599c8d4fe8e883f5e8ba7f133?placeholderIfAbsent=true&apiKey=f35c25b17acb406083beeda46a28c843" alt="" className="object-contain shrink-0 my-auto max-w-full rounded-none aspect-[6.21] w-[168px]" />
      </div>
      <div className="mt-12 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {stories.map((story, index) => (
            <StoriesStoryCard key={index} {...story} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start self-center mt-7 w-40 max-w-full bg-neutral-200 max-md:pr-5">
        <div className="flex shrink-0 w-10 h-1 bg-stone-600" />
      </div>
      <div className="self-center mt-2 text-xs leading-7 text-neutral-400">
        <span className="text-lg font-medium leading-7 text-stone-800">01</span>{" "}
        / <span className="text-base leading-7 text-neutral-400">04</span>
      </div>
    </section>
  );
};

export default StoriesRecentStories;