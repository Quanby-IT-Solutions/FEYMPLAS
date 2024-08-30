import React from 'react';

const StoriesHeader: React.FC = () => {
  return (
    <header className="flex flex-col self-stretch pb-8 w-full text-7xl font-bold text-center whitespace-nowrap text-zinc-800 max-md:max-w-full max-md:text-4xl">
      <div className="flex flex-wrap gap-px items-center self-center max-md:max-w-full max-md:text-4xl">
        <h1 className="self-stretch my-auto max-md:text-4xl">TOUCH</h1>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc5394fb5b67fcd5e80780997452ae53d79329562077d05a54c0764384235a86?placeholderIfAbsent=true&apiKey=f35c25b17acb406083beeda46a28c843" alt="" className="object-contain self-stretch my-auto aspect-[3.05] min-w-[240px] w-[250px]" />
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/41afd95604351ff094041e63a754e14c11ce355e9b3a22e4a11f9420235224dc?placeholderIfAbsent=true&apiKey=f35c25b17acb406083beeda46a28c843" alt="" className="object-contain mt-12 w-full aspect-[2.16] max-md:mt-10 max-md:max-w-full" />
    </header>
  );
};

export default StoriesHeader;