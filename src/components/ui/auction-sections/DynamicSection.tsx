/* eslint-disable @next/next/no-img-element */
"use client";

import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface Auction {
  id: number;
  image: string;
  title: string;
  estimate?: string;
  startingBid?: string;
  venue?: string;
  button?: string;
  width: number;
  height: number;
}

export const DynamicSection = ({ auctions }: { auctions: Auction[] }) => {
  const [displayedAuctions, setDisplayedAuctions] =
    useState<Auction[]>(auctions);
  const [hovered, setHovered] = useState<number | null>(null);
  const [hoverTimer, setHoverTimer] = useState<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const handleMouseEnter = (id: number) => {
    const timer = setTimeout(() => {
      setHovered(() => id);
    }, 500); // Trigger hover effect after 0.5 seconds
    setHoverTimer(timer);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimer!);
    setHovered(null); // Remove hover effect immediately when the cursor leaves
  };

  // Load more auctions when scrolling
  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current!;
    if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
      loadMoreAuctions();
    }
  };

  const loadMoreAuctions = () => {
    const newAuctions = auctions; // In a real scenario, fetch more data here
    setDisplayedAuctions((prev) => [...prev, ...newAuctions]);
  };

  useEffect(() => {
    const currentContainer = containerRef.current;
    currentContainer!.addEventListener("scroll", handleScroll);

    return () => {
      currentContainer!.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full">
      <div
        className="w-full overflow-x-auto scroll-none h-[100dvh]"
        ref={containerRef}
      >
        <div className="flex space-x-8 py-4 items-end h-full px-5 shadow-custom-sd">
          {displayedAuctions.map((auction) => (
            <div
              key={auction.id}
              className="flex-shrink-0 flex flex-col items-center pt-12"
              style={{ width: `${auction.width}px` }}
            >
              <motion.div
                className="w-full mb-2 overflow-visible"
                initial={{ height: auction.height, boxShadow: "none" }}
                animate={
                  hovered === auction.id
                    ? {
                        height: 700,
                        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                      }
                    : { height: auction.height, boxShadow: "none" }
                }
                transition={{ duration: 0.3 }}
                onMouseEnter={() => handleMouseEnter(auction.id)}
                onMouseLeave={handleMouseLeave}
              >
                <motion.img
                  className="w-full h-full object-cover"
                  src={auction.image}
                  alt={auction.title}
                  style={{ height: "100%", paddingTop: 50 }}
                />
              </motion.div>
              <div className="w-full justify-start items-start text-primary-2">
                <h3 className="font-semibold text-xl mb-1 text-primary-2">
                  {auction.title}
                </h3>
                <p className="text-lg mb-2">{auction.venue}</p>
                <p className="text-lg mb-2">{auction.estimate}</p>
                <p className="text-lg mb-2">{auction.startingBid}</p>
                {auction.button && (
                  <button className="w-40 p-4 border border-[#6a704c] text-[#6a704c] font-semibold hover:bg-[#6a704c] hover:text-white transition-colors">
                    {auction.button}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        {loading && (
          <p className="text-center py-4">Loading more auctions...</p>
        )}
      </div>
    </div>
  );
};

// Define PropTypes for validation
DynamicSection.propTypes = {
  auctions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      title: PropTypes.string,
      venue: PropTypes.string,
      button: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
      estimate: PropTypes.string,
      startingBid: PropTypes.string,
    })
  ),
};
