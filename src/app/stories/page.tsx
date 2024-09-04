import type { NextPage } from "next";
import Image from "next/image";
import { ImageSlider } from "@/components/ui/stories-touchpoint-section/stories-image-slider";
import YourEmail from "@/components/ui/stories-touchpoint-section/stories-your-email";
import SubscriptionServiceComponent from "@/components/ui/subscription/SubscriptionServiceComponent";
import StoriesCategoryComponentv2 from "@/components/ui/stories-touchpoint-section/stories-categoriesv2";

const Root: NextPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <section className="w-full py-6 text-timeless-black flex justify-center items-center relative">
        <Image
          className="object-cover"
          alt="Titlepoint"
          src="/assets/stories-touchpoint/pointtitle.png"
          width={500}
          height={300}
          quality={75}
        />
        <button className="p-4 w-32 bg-secondary-1 text-timeless-white font-medium fixed right-0 z-20">
          FaQ&apos;s
        </button>
      </section>
      <ImageSlider />
      <section className="w-full flex gap-4 justify-center items-center py-32">
        <StoriesCategoryComponentv2 />
      </section>
      <YourEmail />
      <SubscriptionServiceComponent />
    </div>
  );
};

export default Root;
