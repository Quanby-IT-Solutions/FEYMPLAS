/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export const AuctionSecondSection = () => {
  const upcomingAuctions = [
    {
      id: 1,
      image: "/assets/auction/earings.png",
      title: "Earings 4",
      venue: "MJORIAN",
      button: "BID",
      width: 400, // Add width
      height: 400, // Add height
    },
    {
      id: 2,
      image: "/assets/auction/painting.png",
      title: "ZZ Runner",
      venue: "Weave Manila Inc.",
      button: "BID",
      width: 400,
      height: 400,
    },
    {
      id: 3,
      image: "/assets/auction/1.png",
      title: "MELE + MARIE",
      venue: "2-3 SEPTEMBER 2024 | CEBU",
      button: "View Auction",
      width: 450,
      height: 700,
    },
    {
      id: 4,
      image: "/assets/auction/2.png",
      title: "Agsam Fashion Fern",
      venue: "15-22 OCTOBER 2024 | TAGUIG",
      button: "View Auction",
      width: 400,
      height: 400,
    },
    {
      id: 5,
      image: "/assets/auction/fashion.png",
      title: "Aishe Fashion",
      venue: "23 DECEMBER 2024 | MAKATI",
      button: "View Auction",
      width: 400,
      height: 400,
    },
    {
      id: 6,
      image: "/assets/auction/candles.png",
      title: "Scented Candles",
      venue: "Alice Blue",
      button: "View Auction",
      width: 400,
      height: 400,
    },
    {
      id: 7,
      image: "/assets/auction/alda.png",
      title: "The Alda Top in Stratus",
      venue: "A Las Siesta",
      button: "BID",
      width: 400,
      height: 400,
    },
  ];

  return (
    <div className="w-full p-4 bg-white">
      <div className="w-full overflow-x-auto scroll-none">
        <div className="flex space-x-8 pb-4 items-end">
          {upcomingAuctions.map((auction) => (
            <div
              key={auction.id}
              className="flex-shrink-0 flex flex-col items-center"
              style={{ width: `${auction.width}px` }}
            >
              <div
                className="w-full mb-2 overflow-hidden"
                style={{ height: `${auction.height}px` }}
              >
                <img
                  className="w-full h-full object-cover"
                  src={auction.image}
                  alt={auction.title}
                />
              </div>
              <div className="w-full justify-start items-start ">
                <h3 className="font-semibold text-xl mb-1 text-primary-2">
                  {auction.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {auction.venue}
                </p>
                <button className="w-40 p-4 border border-[#6a704c] text-[#6a704c] font-semibold hover:bg-[#6a704c] hover:text-white transition-colors">
                  {auction.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
