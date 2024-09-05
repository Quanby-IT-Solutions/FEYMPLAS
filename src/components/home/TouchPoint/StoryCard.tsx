// src/components/home/TouchPoint/StoryCard.tsx
import Image from 'next/image';

interface Story {
  imageSrc: string;
  title: string;
}

interface StoryCardProps {
  story: Story;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <article className="flex flex-col mb-8 p-4">
      {/* Image Container with Button Overlay */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          loading="lazy"
          src={story.imageSrc}
          alt={story.title || 'Story image'}
          layout="fill"
          objectFit="cover"
        />
        {/* Overlay Button */}
        <button className="absolute bottom-4 left-4 bg-green-800 text-white p-2 flex items-center justify-center hover:bg-green-700 transition duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8m-4-4v8" />
          </svg>
        </button>
      </div>
      {/* Card Content: Title */}
      {story.title && (
        <h2 className="text-center text-lg md:text-xl font-bold text-stone-800 mt-4">
          {story.title}
        </h2>
      )}
    </article>
  );
};

export default StoryCard;
