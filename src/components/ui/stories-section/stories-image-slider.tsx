import type { FC } from "react";

export type ImageSliderProps = {
  className?: string;
};

const ImageSlider: FC<ImageSliderProps> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch mb-20 flex flex-col items-start justify-start pt-60 px-[165px] pb-52 box-border max-w-full text-left text-41xl text-color-white font-urbanist bg-cover bg-no-repeat bg-[top] ${className}`}
      style={{
        backgroundImage: "url('/assets/stories-touchpoint/image.png')",
        
      }}
    >
      <h2 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full z-[1] mq450:text-17xl mq1025:text-29xl">
        STORIES BEHIND
      </h2>
      <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-[7px] mt-[-7px]">
        <h2 className="m-0 relative text-inherit font-bold font-inherit z-[1] m`q450:text-17xl mq1025:text-29xl">
          FILIPINO DESIGN EXCELLENCE
        </h2>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-3.5 box-border max-w-full mt-[-7px] text-xl">
        <div className="w-[816px] relative tracking-[0.1em] leading-[30px] font-medium inline-block shrink-0 [text-shadow:0px_4px_30px_rgba(0,_0,_0,_0.75)] max-w-full z-[1] mq450:text-base mq450:leading-[24px]">
          {`Cover Feature Story: `}
          <span className="[text-decoration:underline]">
            Inviting Natural Home Furnishings are the Heavy Hitters to See
            from DesignPhilippines in 2023
          </span>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;