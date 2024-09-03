import type { NextPage } from "next";

import { ImageSlider } from "@/components/ui/stories-touchpoint-section/stories-image-slider";
// import StoriesCategoryComponent from "@/components/ui/stories-touchpoint-section/stories-categories";
import YourEmail from "@/components/ui/stories-touchpoint-section/stories-your-email";
// import Subcribe from "@/components/ui/stories-section/stories-subscribe";
import Footer from "@/components/layouts/about-us-footer/about-us-footer";
import StoriesCategoryComponentv2 from "@/components/ui/stories-touchpoint-section/stories-categoriesv2";


const Root: NextPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <section className="w-full py-6 text-timeless-black relative flex justify-center items-center">
      <img
          className="w-[500px] object-cover"
          alt="Titlepoint"
          src="/assets/stories-touchpoint/pointtitle.png"
        />
          <div>
          <button className="p-4 w-32 bg-secondary-1 text-timeless-white font-medium fixed right-0 z-20">
            FaQ&apos;s
          </button>
        </div>
      </section>
      <ImageSlider />
      <section className="w-full flex flex-row gap-4 justify-center items-center py-32">
      <StoriesCategoryComponentv2 />
      </section>
      <YourEmail />
      <Footer />
    </div>
  );
};

export default Root;
