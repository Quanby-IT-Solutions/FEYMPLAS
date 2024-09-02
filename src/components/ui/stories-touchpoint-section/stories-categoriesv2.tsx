"use client";

import React from 'react';
import GridItemV2 from '../GridItemV2';

const gridItems = [
  {
    title: "Design",
    subtitle: "Focus",
    imageSrc: "/assets/stories-touchpoint/category/design.png",
    goto: "/invited-guests",
  },
  {
    title: "Behind The",
    subtitle: "Brand",
    imageSrc: "/assets/stories-touchpoint/category/behind-the-brand.png",
    goto: "/invited-guests",
},
{
    title: "Artisan",
    subtitle: "Corner",
    imageSrc: "/assets/stories-touchpoint/category/artisan-corner.png",
    goto: "/invited-guests",
  },
  {
    title: "Material",
    subtitle: "Matters",
    imageSrc: "/assets/stories-touchpoint/category/material-matters.png",
    goto: "/invited-guests",
  },
  {
    title: "Creative",
    subtitle: "Dialogues",
    imageSrc: "/assets/stories-touchpoint/category/creative-dialogues.png",
    goto: "/invited-guests",
  },
  {
    title: "Industry",
    subtitle: "News",
    imageSrc: "/assets/stories-touchpoint/category/Industry.png",
    goto: "/invited-guests",
  },
];

export default function StoriesCategoryComponentv2() {
  const itemCount = gridItems.length;

  const getGridClassName = () => {
    if (itemCount === 4) {
      return "grid-cols-2";
    } else if (itemCount % 3 === 0 || itemCount > 4) {
      return "grid-cols-3";
    } else if (itemCount === 2) {
      return "grid-cols-2";
    } else {
      return "grid-cols-1";
    }
  };

  const getItemClassName = (index: number) => {
    if (itemCount === 4) {
      return "col-span-1";
    } else if (itemCount % 3 === 0 || itemCount > 4) {
      return "col-span-1";
    } else if (itemCount === 2) {
      return "col-span-1";
    } else {
      return "col-span-full";
    }
  };

  return (
    <div className="flex flex-col items-center text-gray-900 w-full">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid ${getGridClassName()} gap-6`}>
          {gridItems.map((item, index) => (
            <div key={index} className={`w-full h-full ${getItemClassName(index)}`}>
              <GridItemV2
                title={item.title}
                subtitle={item.subtitle}
                imageSrc={item.imageSrc}
                goto={item.goto}
                titleSize="text-[2rem]"
                subtitleSize="text-[2rem]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}