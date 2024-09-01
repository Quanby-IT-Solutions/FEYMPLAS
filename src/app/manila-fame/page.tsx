import { ManilaFameFirstSection } from "@/components/ui/manilaFame-sections/ManilaFameFirstSection";
import { Buttons } from "@/components/ui/auction-sections/Buttons";

export default function ManilaFame() {
  return (
    <div className="w-full flex flex-col justify-center items-center tracking-wide text-lg">
      <div className="w-full py-6 text-timeless-black relative flex justify-center items-center">
        <h1 className="text-[70px] font-bold mx-auto">
          MANILA<span className="italic font-serif font-medium"> FA</span>ME
        </h1>
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
