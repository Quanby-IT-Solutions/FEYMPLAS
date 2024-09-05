"use client";

import PropTypes from "prop-types";
import Image from "next/image";
import { useRef } from "react";

interface Auction {
  id: number;
  image: string;
  title: string;
  estimate?: string;
  startingBid?: string;
  venue?: string;
  button?: string;
  inlineSize: number;
  blockSize: number;
}

export const DynamicSection = ({ auctions }: { auctions: Auction[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full">
      <div className="w-full overflow-x-auto scroll-none h-[100dvh] p-4" ref={containerRef}>
        <div className="flex space-x-8 items-end h-full">
          {auctions.map((auction, index) => (
            <div
              key={auction.id}
              className="flex-shrink-0 flex flex-col items-center pt-12"
              style={{ inlineSize: `${auction.inlineSize}px` }}
            >
              <div
                className={`w-full mb-4 overflow-hidden shadow-md ${index === 1 ? "max-inline-size-[640px] h-[600px]" : `max-inline-size-[640px] h-[${auction.blockSize}px]`
                  }`}
              >
                <Image
                  src={auction.image}
                  alt={auction.title}
                  layout="responsive"
                  width={auction.inlineSize}
                  height={auction.blockSize}
                  className="object-cover"
                  style={{ maxInlineSize: "100%", blockSize: "100%", paddingBlockStart: "50px" }}
                />
              </div>
              <div className="w-full text-primary-2 flex flex-col items-start">
                <h3 className="font-semibold text-xl mb-1 text-primary-2">{auction.title}</h3>
                <p className="text-lg mb-2">{auction.venue}</p>
                <p className="text-lg mb-2">{auction.estimate}</p>
                <p className="text-lg mb-2">{auction.startingBid}</p>
                {auction.button && (
                  <button className="w-40 p-4 border border-[#6a704c] text-[#6a704c] font-semibold hover:bg-[#6a704c] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6a704c]">
                    {auction.button}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

DynamicSection.propTypes = {
  auctions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      venue: PropTypes.string,
      button: PropTypes.string,
      inlineSize: PropTypes.number.isRequired,
      blockSize: PropTypes.number.isRequired,
      estimate: PropTypes.string,
      startingBid: PropTypes.string,
    })
  ).isRequired,
};
