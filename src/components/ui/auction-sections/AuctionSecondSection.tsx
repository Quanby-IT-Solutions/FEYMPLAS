/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { DynamicSection } from "./DynamicSection";

export const AuctionSecondSection = () => {
  return (
    <>
      <DynamicSection auctions={upcomingAuctions} />
    </>
  );
};


const upcomingAuctions = [
  {
    id: 1,
    image: "/assets/auction/earings.png",
    title: "Earings 4",
    venue: "MJORIAN",
    button: "BID",
    width: 350,
    height: 350,
  },
  {
    id: 2,
    image: "/assets/auction/painting.png",
    title: "ZZ Runner",
    venue: "Weave Manila Inc.",
    button: "BID",
    width: 350,
    height: 350,
  },
  {
    id: 3,
    image: "/assets/auction/1.png",
    title: "MELE + MARIE",
    venue: "2-3 SEPTEMBER 2024 | CEBU",
    button: "View Auction",
    width: 350,
    height: 350,
    estimate: "",
  startingBid: "",
  },
  {
    id: 4,
    image: "/assets/auction/2.png",
    title: "Agsam Fashion Fern",
    venue: "15-22 OCTOBER 2024 | TAGUIG",
    button: "View Auction",
    width: 350,
    height: 350,
    estimate: "",
  startingBid: "",
  },
  {
    id: 5,
    image: "/assets/auction/fashion.png",
    title: "Aishe Fashion",
    venue: "23 DECEMBER 2024 | MAKATI",
    button: "View Auction",
    width: 350,
    height: 350,
    estimate: "",
  startingBid: "",
  },
  {
    id: 6,
    image: "/assets/auction/candles.png",
    title: "Scented Candles",
    venue: "Alice Blue",
    button: "View Auction",
    width: 350,
    height: 350,
    estimate: "",
  startingBid: "",
  },
  {
    id: 7,
    image: "/assets/auction/alda.png",
    title: "The Alda Top in Stratus",
    venue: "A Las Siesta",
    button: "BID",
    width: 350,
    height: 350,
    estimate: "",
  startingBid: "",
  },
];
