import type { FC } from "react";

export type YourEmailProps = {
  className?: string;
};

const YourEmail: FC<YourEmailProps> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-21xl text-gray-300 font-urbanist ${className}`}
    >
      <div className="w-[1110px] flex flex-col items-start justify-start gap-[50px] max-w-full mq750:gap-[25px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-5 mq750:flex-wrap">
          <b className="relative mq450:text-5xl mq1025:text-13xl">
            RECENT STORIES
          </b>
          <div className="w-[167.7px] flex flex-col items-start justify-start pt-[13.5px] px-0 pb-0 box-border">
            <img
              className="self-stretch h-[26.1px] relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt="Navigation"
              src="https://picsum.photos/168/26"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[30px] max-w-full text-center text-xl">
          <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[262px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[25px]">
              <div className="self-stretch h-[419px] relative bg-cover bg-no-repeat bg-[top]" style={{backgroundImage: "url('https://picsum.photos/400/419')"}}>
                <div className="absolute top-[347px] left-[0px] bg-darkolivegreen w-[72px] h-[72px] z-[1]">
                  <img
                    className="absolute top-[20px] left-[20px] w-8 h-8 overflow-hidden object-contain z-[1]"
                    alt="Chevron down"
                    src="https://picsum.photos/32/32"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[43px] pr-11 mq450:pl-5 mq450:pr-5 mq450:box-border">
                <b className="relative mq450:text-base">
                  <p className="m-0">The Future Of</p>
                  <p className="m-0">Interior Environments With AI</p>
                </b>
              </div>
            </div>
          </div>
          {/* <div className="flex-1 flex flex-col items-start justify-start gap-[57px] min-w-[262px] max-w-full text-13xl text-color-white mq450:gap-7">
            <div className="self-stretch flex flex-col items-start justify-start pt-[92px] px-0 pb-0 relative gap-24 bg-cover bg-no-repeat bg-[top] mq450:gap-12 mq750:pt-[60px] mq750:box-border" style={{backgroundImage: "url('https://picsum.photos/401/464')"}}>
              <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] left-[0px] bg-gray-600 border-darkolivegreen border-[3px] border-solid box-border z-[1]" />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[35px] pr-9">
                <div className="flex-1 flex flex-col items-start justify-start gap-[9px]">
                  <div className="self-stretch flex flex-row items-start justify-start relative">
                    <div className="relative font-semibold z-[2] mq450:text-lgi mq1025:text-7xl">
                      <p className="m-0">KATHA Origins:</p>
                      <p className="m-0">The Traveler's Palm</p>
                      <p className="m-0">Hanging Lamp</p>
                    </div>
                    <img
                      className="h-[90px] w-[90px] absolute !m-[0] top-[-76px] right-[-20px] z-[3]"
                      alt="Mask group"
                      src="https://picsum.photos/90/90"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-[13px] text-lg">
                    <div className="flex-1 relative leading-[28px] font-medium z-[2]">
                      Designer Guia Viray shares the inspiration behind the
                      KATHA award-winning piece
                    </div>
                  </div>
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-5 pl-[87px] pr-5 bg-darkolivegreen w-[255px] flex flex-row items-start justify-center box-border gap-5 z-[2] mq450:pl-5 mq450:box-border">
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <b className="relative text-lg inline-block font-urbanist text-color-white text-center min-w-[61px] z-[1]">
                    Explore
                  </b>
                </div>
                <img
                  className="h-8 w-8 relative overflow-hidden shrink-0 object-contain z-[1]"
                  alt="Chevron down"
                  src="https://picsum.photos/32/33"
                />
              </button>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-left text-lg text-gray-300 font-lato">
              <div className="w-40 flex flex-col items-start justify-start gap-[7px]">
                <div className="self-stretch h-1 relative bg-color-gray-3">
                  <div className="absolute top-[0px] left-[0px] bg-darkolivegreen w-10 h-1 z-[1]" />
                </div>
                <div className="flex flex-row items-start justify-start py-0 pl-[55px] pr-[54px]">
                  <div className="relative inline-block min-w-[51px]">
                    <span className="leading-[28px] font-medium">01</span>
                    <span className="text-xs font-roboto text-darkslategray">{` / `}</span>
                    <span className="text-base leading-[26px] text-darkgray">
                      04
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[262px] max-w-full">
            <div className="self-stretch flex flex-col items-end justify-start gap-6">
              <div className="self-stretch h-[420px] relative bg-cover bg-no-repeat bg-[top]" style={{backgroundImage: "url('https://picsum.photos/402/420')"}}>
                <div className="absolute top-[348px] left-[0px] bg-darkolivegreen w-[72px] h-[72px] z-[2]">
                  <img
                    className="absolute top-[20px] left-[20px] w-8 h-8 overflow-hidden object-contain z-[1]"
                    alt="Chevron down"
                    src="https://picsum.photos/32/34"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-12 pr-[47px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                <b className="relative mq450:text-base">
                  <p className="m-0">Mele + Marie: A Tale Of Fine</p>
                  <p className="m-0">Philippine Artistry</p>
                </b>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[262px] max-w-full">
            <div className="self-stretch flex flex-col items-end justify-start gap-6">
              <div className="self-stretch h-[420px] relative bg-cover bg-no-repeat bg-[top]" style={{backgroundImage: "url('https://picsum.photos/402/420')"}}>
                <div className="absolute top-[348px] left-[0px] bg-darkolivegreen w-[72px] h-[72px] z-[2]">
                  <img
                    className="absolute top-[20px] left-[20px] w-8 h-8 overflow-hidden object-contain z-[1]"
                    alt="Chevron down"
                    src="https://picsum.photos/32/34"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-12 pr-[47px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                <b className="relative mq450:text-base">
                  <p className="m-0">Mele + Marie: A Tale Of Fine</p>
                  <p className="m-0">Philippine Artistry</p>
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourEmail;