import { DynamicSection } from "../DynamicSection";

export const LotsThirdSection = () => {
  return (
    <div className="w-full">
      <div className="w-fit absolute top-[10%] left-1/2 -translate-x-1/2 z-20 text-primary-2 flex flex-col items-center gap-8">
        <h1 className="text-17xl uppercase font-bold">7 LOTS</h1>
        <div className="flex justify-between items-center w-full">
          
        </div>
      </div>

      <DynamicSection auctions={lots} />
    </div>
  );
};

const lots = [
  {
    id: 1,
    image: "/assets/auction/lot/melle.png",
    title: "Thea Minaudiere from the Harvest Collection",
    width: 400 ,
    height: 400,
    estimate: "$1,800 - $2,200 / Estimate",
    startingBid: "$1,100 / Starting Bid",
  },
  {
    id: 2,
    image: "/assets/auction/lot/gapo.png",
    title: "Thea Minaudiere from the Harvest Collection",
    width: 400 ,
    height: 400,
    estimate: "$1,800 - $2,200 / Estimate",
    startingBid: "$1,100 / Starting Bid",
  },
  {
    id: 3,
    image: "/assets/auction/lot/bag.png",
    title: "Thea Minaudiere from the Harvest Collection",
    width: 400 ,
    height: 400,
    estimate: "$1,800 - $2,200 / Estimate",
    startingBid: "$1,100 / Starting Bid",
  },
  {
    id: 4,
    image: "/assets/auction/lot/case.png",
    title: "Thea Minaudiere from the Harvest Collection",
    width: 400 ,
    height: 400,
    estimate: "$1,800 - $2,200 / Estimate",
    startingBid: "$1,100 / Starting Bid",
  },
  {
    id: 5,
    image: "/assets/auction/lot/puso.png",
    title: "Thea Minaudiere from the Harvest Collection",
    width: 400 ,
    height: 400,
    estimate: "$1,800 - $2,200 / Estimate",
    startingBid: "$1,100 / Starting Bid",
  },
];
