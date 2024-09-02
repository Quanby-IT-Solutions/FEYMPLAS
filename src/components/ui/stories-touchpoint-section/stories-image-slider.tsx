import type { FC } from "react";

export type ImageSliderProps = {
  className?: string;
};

const ImageSlider: FC<ImageSliderProps> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch mb-20 flex flex-col items-start justify-start pt-60 px-[15%] pb-52 box-border max-w-full text-left bg-black text-white font-urbanist bg-cover bg-no-repeat bg-[top] ${className}`}
      style={{
        backgroundImage: "url('/assets/stories-touchpoint/image.png')",
      }}
    >
      {/* "STORIES BEHIND" moved slightly to the right */}
      <div className="w-full flex items-center justify-start pl-[10%]">
        <h2
          className="mb-3 relative font-bold z-[1] text-[3vw] leading-[1.1em] mq450:text-[8vw] mq1025:text-[6vw] text-left whitespace-nowrap"
          style={{
            color: "#ffffff",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
          }}
        >
          STORIES BEHIND
        </h2>
      </div>

      {/* "FILIPINO DESIGN EXCELLENCE" moved slightly to the right */}
      <div className="w-full flex items-center justify-start mt-[-0.5em] pl-[30%]">
        <h2
          className="mb-3 relative font-bold z-[1] text-[3vw] leading-[1.1em] mq450:text-[8vw] mq1025:text-[6vw] text-left whitespace-nowrap"
          style={{
            color: "#ffffff",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
          }}
        >
          FILIPINO DESIGN EXCELLENCE
        </h2>
      </div>

      {/* Subtitle with limited width for breaking */}
      <div className="pl-[30%] flex items-center justify-center box-border max-w-full mt-[-0.5em] text-[1vw] leading-[1.5em] mq450:text-[3vw] mq450:leading-[1.5em]">
        <div
          className="max-w-[750px] w-full tracking-[0.1em] font-medium inline-block shrink-0 z-[1]"
          style={{
            color: "#ffffff",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
          }}
        >
          {`Cover Feature Story: `}
          <span className="[text-decoration:underline]">
            Inviting Natural Home Furnishings are the Heavy Hitters to See from DesignPhilippines in 2023
          </span>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
