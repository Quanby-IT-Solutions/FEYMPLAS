import type { NextPage } from "next";
import ImageSlider from "@/components/ui/stories-section/stories-image-slider";
import FrameComponent from "@/components/ui/stories-section/stories-frame-component";
import KathaOriginsTitle from "@/components/ui/stories-section/stories-katha-origins-title";
import YourEmail from "@/components/ui/stories-section/stories-your-email";
import Subcribe from "@/components/ui/stories-section/stories-subscribe";

const Root: NextPage = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start pt-10 box-border gap-16 leading-[normal] tracking-[normal] text-center text-[74px] text-gray-200 font-urbanist">
      {/* Centered Titlepoint Image */}
      <div className="w-full flex justify-center items-center"> {/* Adjust mb to fine-tune position */}
        <img
          className="h-full object-cover"
          alt="Titlepoint"
          src="/assets/stories-touchpoint/titlepoint.png"
        />
      </div>

      {/* Image Slider Component */}
      <ImageSlider />


      {/* Content Section */}
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[4.7px] box-border max-w-full">
        <div className="w-[1107px] flex flex-col items-start justify-start gap-[21px] max-w-full">
          <FrameComponent />
          <KathaOriginsTitle />
        </div>
      </section>

      {/* Email Subscription Components */}
      <YourEmail />
      <Subcribe />
    </div>
  );
};

export default Root;
