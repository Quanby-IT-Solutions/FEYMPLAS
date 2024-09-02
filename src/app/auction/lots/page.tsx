import { LotsFirstSection } from "@/components/ui/auction-sections/lots-section/LotsFirstSection";
import { LotsSecondsSection } from "@/components/ui/auction-sections/lots-section/LotsSecondsSection";
import { LotsThirdSection } from "@/components/ui/auction-sections/lots-section/LotsThirdSection";

/* eslint-disable @next/next/no-img-element */
export default function Lots() {
  return (
    <section className="w-full">
      <div className="w-full">
        <LotsFirstSection />
      </div>
      <div className="w-full flex justify-center items-center">
        <LotsSecondsSection />
      </div>
      <div className="w-full flex justify-center items-center py-20 relative">
        <LotsThirdSection />
      </div>
    </section>
  );
}
