// src/components/home/TouchPoint/TouchPoint.tsx
import Header from "./Header";
import StoryCard from "./StoryCard";
import Pagination from "./Pagination";
import MoreStoriesButton from "./MoreStoriesButton";

interface Story {
  imageSrc: string;
  title: string;
}

const stories: Story[] = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b643d3863b7928756e9360c07c16ae6328db2d3b08ab3c237995a3c0b17b9514?placeholderIfAbsent=true&apiKey=2e31fa6b2d0c458aaebf11d5898097ea",
    title: "The Future Of Interior Environments With AI",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1915df26bd482ade1450024a81f77443eef893b582a0a9608b6b6d285fc13623?placeholderIfAbsent=true&apiKey=2e31fa6b2d0c458aaebf11d5898097ea",
    title: "KATHA Origins: The Traveler's Palm Hanging Lamp",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/50c490f78b5956eef98c623f6effd0e4ada59653adc5ae98c48f77ff7c9cd724?placeholderIfAbsent=true&apiKey=2e31fa6b2d0c458aaebf11d5898097ea",
    title: "Mele + Marie: A Tale Of Fine Philippine Artistry",
  },
];

const TouchPoint: React.FC = () => {
  return (
    <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
      <Header />
      {/* Updated section to use a grid layout */}
      <section className="mt-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <StoryCard key={index} story={story} />
          ))}
        </div>
      </section>
      {/* Pagination and Navigation */}
      <Pagination currentPage={1} totalPages={4} />
      {/* More Stories Button */}
      <div className="mt-4">
        <MoreStoriesButton />
      </div>
    </main>
  );
};

export default TouchPoint;
