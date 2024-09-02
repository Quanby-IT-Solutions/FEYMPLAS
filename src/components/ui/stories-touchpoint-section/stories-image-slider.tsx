export const ImageSlider = () => {
  return (
    <div className="w-full h-[calc(100vh-20vh)] relative tracking-wide">
      {/* Image background */}
      <div className="w-full h-full absolute inset-0 z-0">
        <img 
          src="/assets/stories-touchpoint/image.png" 
          alt="Background" 
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center text-timeless-white bg-black bg-opacity-40">
        <div className="flex flex-col justify-center items-start leading-none">
          <h1 className="-ml-[5%] text-21xl md:text-29xl drop-shadow-md font-bold mb-4">
            STORIES BEHIND
          </h1>
          <div className="ml-[28%] w-full">
            <h1 className="text-21xl md:text-29xl drop-shadow-md font-bold mb-4">
              FILIPINO DESIGN EXCELLENCE
            </h1>
            <p className="text-lg md:text-xl font-[300] max-w-[700px]  text-left">
              Cover Feature Story: Inviting Natural Home Furnishings are the Heavy Hitters to See from DesignPhilippines in 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};