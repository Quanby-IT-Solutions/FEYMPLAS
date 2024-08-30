import React from 'react';
import StoriesHeader from '@/components/ui/stories-section/stories-Header';
import StoriesCategoryGrid from '@/components/ui/stories-section/stories-CategoryGrid';
import StoriesRecentStories from '@/components/ui/stories-section/stories-RecentStories';
import StoriesNewsletter from '@/components/ui/stories-section/stories-Newsletter';

const Stories: React.FC = () => {
  return (
    <main className="flex flex-col items-center">
      <StoriesHeader />
      <StoriesCategoryGrid />
      <StoriesRecentStories />
      <StoriesNewsletter />
    </main>
  );
};

export default Stories;