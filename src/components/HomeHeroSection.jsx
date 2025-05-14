import React from "react";

const HomeHeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/images/green_forest_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-full w-full text-white"
    >
      <div className="max-w-[1320px] mx-auto pt-12 pb-8">
        <div className="grid grid-cols-[4fr_5fr] items-center justify-items-center h-screen">
          <div>
            <h1 className="text-6xl font-medium leading-tight uppercase mb-8">
              Our Vision & Promise
            </h1>
            <p className="text-xl font-light mb-8 max-w-xl">
              Our vision is to create self-sustaining, thriving communities in
              rural Africa and other marginalized parts of the world by
              introducing a model that allows for mass-scale “self-development”.
            </p>
            <ul className="flex gap-4 mb-8 mt-16">
              <li className="h-3 w-9 rounded-full bg-yellow-300"></li>
              <li className="h-3 w-3 rounded-full bg-white"></li>
              <li className="h-3 w-3 rounded-full bg-white"></li>
              <li className="h-3 w-3 rounded-full bg-white"></li>
              <li className="h-3 w-3 rounded-full bg-white"></li>
            </ul>
          </div>

          <div>
            <img
              className="w-full"
              src="/images/structure_made_off_wood.png"
              alt="structure made off wood"
            />
          </div>
        </div>
        <ul className="grid grid-cols-3 col-span-2 items-start font-light">
          <li className="uppercase flex items-center justify-center gap-2 justify-self-start">
            <span>On Going Projects</span>
            <img src="/icons/right_arrow.svg" alt="right arrow" />
          </li>

          <li className="text-sm flex flex-col items-center justify-center gap-2">
            <span>Scroll to Explore</span>
            <img src="/icons/bottom_arrow.svg" alt="bottom arrow" />
          </li>
          <li className="uppercase flex items-center justify-center gap-2 justify-self-end">
            <span>Our Partners</span>
            <img src="/icons/right_arrow.svg" alt="right arrow" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomeHeroSection;
