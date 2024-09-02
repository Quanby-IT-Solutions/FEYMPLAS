import type { FC } from "react";
import MaterialMattersContent from "./stories-material-matters-content";

export type CombinedStoriesComponentProps = {
  className?: string;
  layout?: "grid" | "flex";
  items?: Array<{
    image: string;
    title: string;
    subtitle: string;
    maskImage: string;
    arrowImage: string;
  }>;
};

const defaultItems = [
  {
    image: "/assets/stories-touchpoint/category/design.png",
    title: "Behind the",
    subtitle: "Brand",
    maskImage: "/assets/stories-touchpoint/mask.png",
    arrowImage: "/assets/stories-touchpoint/stories-svg/arrow.svg",
  },
  {
    image: "https://picsum.photos/400/301",
    title: "Behind the",
    subtitle: "Brand",
    maskImage: "/assets/stories-touchpoint/mask.png",
    arrowImage: "/assets/stories-touchpoint/stories-svg/arrow.svg",
  },
  {
    image: "https://picsum.photos/400/302",
    title: "Behind the",
    subtitle: "Brand",
    maskImage: "/assets/stories-touchpoint/mask.png",
    arrowImage: "/assets/stories-touchpoint/stories-svg/arrow.svg",
  },
  {
    image: "https://picsum.photos/400/303",
    title: "Material",
    subtitle: "Matters",
    maskImage: "/assets/stories-touchpoint/mask.png",
    arrowImage: "/assets/stories-touchpoint/stories-svg/arrow.svg",
  },
  {
    image: "https://picsum.photos/400/304",
    title: "Material",
    subtitle: "Matters",
    maskImage: "/assets/stories-touchpoint/mask.png",
    arrowImage: "/assets/stories-touchpoint/stories-svg/arrow.svg",
  },
  {
    image: "https://picsum.photos/400/305",
    title: "Material",
    subtitle: "Matters",
    maskImage: "/assets/stories-touchpoint/mask.png",
    arrowImage: "/assets/stories-touchpoint/stories-svg/arrow.svg",
  },
];

const StoriesCategoryComponent: FC<CombinedStoriesComponentProps> = ({ 
  className = "", 
  layout = "grid", 
  items = defaultItems
}) => {
  const containerClassName = layout === "grid"
    ? `self-stretch grid flex-row items-start justify-start gap-[28.5px] max-w-full grid-cols-[repeat(3,_minmax(262px,_1fr))] text-center text-13xl text-color-white font-urbanist mq750:grid-cols-[minmax(262px,_1fr)] mq1025:justify-center mq1025:grid-cols-[repeat(2,_minmax(262px,_455px))] ${className}`
    : `self-stretch flex flex-row items-start justify-start gap-[28.5px] mb-14 max-w-full text-center text-13xl text-color-white font-urbanist mq1025:flex-wrap ${className}`;

  return (
    <div className={containerClassName}>
      {items.map((item, index) => (
        <MaterialMattersContent
          key={index}
          space1={item.image}
          design={item.title}
          focus1={item.subtitle}
          maskGroup={item.maskImage}
          chevronDown={item.arrowImage}
          propHeight={layout === "grid" ? "236px" : "200px"}
          propFlex={layout === "grid" ? "unset" : "1"}
          propMinWidth={layout === "grid" ? "unset" : "262px"}
          propHeight1="230px"
          propTop="12.3px"
          propPadding="59px 10px"
          propTop1="11.3px"
          propTop2="181px"
        />
      ))}
    </div>
  );
};

export default StoriesCategoryComponent;