import React from "react";

const HomeHouseDesignSection = () => {
  return (
    <section>
      <div class="max-w-[1320px] mx-auto grid grid-cols-[5fr_7fr] items-center py-12">
        <div className="relative">
          <img
            className="scale-125 translate-x-12"
            src="images/house_enclosed_within_fence.png"
            alt="house enclosed within fence"
          />
          <img
            className="absolute top-[45%] left-[50%]"
            src="/icons/play_button_icon.svg"
            alt="play button icon"
          />
        </div>
        <div className="bg-[#FBEADC] pl-56 pr-32 py-24">
          <h2 className="text-6xl text-[#165620] font-extrabold leading-tight uppercase mb-8">
            House Design
          </h2>
          <p className="text-lg font-light mb-8 max-w-xl">
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
