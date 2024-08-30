import React from 'react';

interface CategoryCardProps {
  title: string;
  imageSrc: string;
  iconSrc: string;
}

const StoriesCategoryCard: React.FC<CategoryCardProps> = ({ title, imageSrc, iconSrc }) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex relative flex-col grow pt-2 pr-5 text-3xl font-semibold text-center text-white whitespace-nowrap aspect-[1.515] max-md:mt-7">
        <img loading="lazy" src={imageSrc} alt="" className="object-cover absolute inset-0 size-full" />
        <img loading="lazy" src={iconSrc} alt="" className="object-contain self-end aspect-[2.04] w-[90px]" />
        <div className="relative self-center mt-4 max-w-full h-[66px] w-[279px]">{title}</div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7065273bfb717f23a01d7f957e03b6f0f0a26b1ef509e19a469974589322bf6f?placeholderIfAbsent=true&apiKey=f35c25b17acb406083beeda46a28c843" alt="" className="object-contain z-10 mt-11 aspect-square w-[59px] max-md:mt-10" />
      </div>
    </div>
  );
};

export default StoriesCategoryCard;