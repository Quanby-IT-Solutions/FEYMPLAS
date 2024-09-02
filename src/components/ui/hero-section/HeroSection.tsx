import { Furniture } from "./furniture";

/* eslint-disable @next/next/no-img-element */
export default function HeroSection() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full pt-10 flex flex-col justify-evenly gap-8 items-center text-lg tracking-wider">
        <img src="assets/logo_black.png" alt="" />
        <div className="w-full flex flex-row justify-center items-center gap-8 ml-[10%]">
          <div className="flex flex-col items-end font-semibold text-secondary-5 text-5xl">
            <h1><span className="font-medium font-serif">P</span>HILIPPINE D<span className="italic font-medium font-serif">E</span>SIGN</h1>
            <h1>AND BEY<span className="italic font-medium font-serif">O</span>ND</h1>
          </div>
          <p className="text-gray-500 w-full max-w-xl">
            FAME+ is the ultimate digital so  urcing and storytelling platform for
            Philippine quality home, fashion, and lifestyle products.
          </p>
        </div>
        <div className="w-full flex justify-end items-end relative">
          <img
            className="h-full w-full max-w-[90%] object-cover"
            src="assets/landing-page/1.png"
            alt=""
          />
          <Furniture />
        </div>
      </div>
    </div>
  );
}
