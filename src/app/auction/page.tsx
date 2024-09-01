import { AuctionFirstSection } from "@/components/ui/auction-sections/AuctionFirstSection";
import { AuctionSecondSection } from "@/components/ui/auction-sections/AuctionSecondSection";
import { Buttons } from "@/components/ui/auction-sections/Buttons";

export default function Auction() {
  return (
    <div className="w-full flex flex-col justify-center items-center tracking-wide text-lg">
      <div className="w-full py-6 text-timeless-black relative flex justify-center items-center">
        <h1 className="text-[70px] font-bold mx-auto">
          AUCTI<span className="italic font-serif font-medium">O</span>N +
        </h1>
        <div>
          <button className="p-4 w-32 bg-secondary-1 text-timeless-white font-medium fixed right-0 z-20">
            FaQ&apos;s
          </button>
        </div>
      </div>
      <AuctionFirstSection />
      <div className="w-full flex flex-row gap-4 justify-center items-center py-16 mt-4">
        <Buttons />
      </div>
      <div className="w-full relative text-primary-2 flex flex-col justify-center items-center border border-black">
        <div className=" absolute top-[5%] left-[55%] -translate-x-1/2 z-20 border border-black">
          <a href="#" className="text-lg font-[300] uppercase text-secondary-5">View all</a>
          <h1 className="text-17xl uppercase font-semibold"><span className="font-serif">U</span>pcoming aucti<span className="font-serif">o</span>ns</h1>
        </div>
        <AuctionSecondSection />
      </div>
    </div>
  );
}
