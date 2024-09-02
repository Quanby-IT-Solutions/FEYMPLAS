import { ManilaFameFirstSection } from "@/components/ui/manilaFame-sections/ManilaFameFirstSection";
import { Buttons } from "@/components/ui/auction-sections/Buttons";

export default function ManilaFame() {
  return (
    <div className="w-full flex flex-col justify-center items-center tracking-wide text-lg">
      <div className="w-full py-6 text-timeless-black relative flex justify-center items-center">
      <div className="flex items-center space-x-6"> {/* Flexbox for side-by-side alignment */}
          <h1 className="text-[70px] font-bold font-urbanist">MANILA</h1>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/814e4b7518aaed6c098d36c60f247bea17d91cf2d64281abb67edf47d8f3b56e?placeholderIfAbsent=true&apiKey=ee08f851c2f4486d80ef80d866bed106"
            className="object-contain max-w-full aspect-[4.85] w-[250px]"
            alt="Company logo"
          />
        </div>
        <div>
          <button className="p-4 w-32 bg-secondary-1 text-timeless-white font-medium fixed right-0 z-20">
            FaQ&apos;s
          </button>
        </div>
      </div>
      <ManilaFameFirstSection />
    </div>
  );
}
