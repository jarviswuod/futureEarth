import React from "react";

const HomeHouseDesignSection = () => {
  return (
    <section className="my-16 sm:my-20 md:my-24 lg:px-8">
      <div class="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[5fr_7fr] items-center">
        <div className="relative -mt-36 sm:-mt-56 md:-mt-72 lg:mt-0">
          <img
            className="w-full scale-95 lg:scale-125 max-lg:translate-y-1/2 translate-x-0 lg:translate-x-12"
            src="images/house_enclosed_within_fence.png"
            alt="house enclosed within fence"
          />
          <img
            className="absolute top-[90%] lg:top-[45%] left-[45%] lg:left-[50%]"
            src="/icons/play_button_icon.svg"
            alt="play button icon"
          />
        </div>

        <div className="bg-[#FBEADC] px-4 lg:pl-56 lg:pr-32 max-[450px]:pt-32 pt-44 sm:pt-56 md:pt-72 lg:py-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 lg:mb-8 text-[#165620] font-medium leading-tight uppercase">
            House Design
          </h2>
          <p className="text-lg font-extralight mb-8 lg:max-w-xl">
            Our patent-pending design employs a strategy that reduces the
            environmental impact associated with traditional residential
            construction. This is how we envision your safe haven.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeHouseDesignSection;
