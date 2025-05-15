import React from "react";

const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/images/green_forest_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-full w-full text-white px-4 sm:px-8 max-lg:pt-16 py-8"
      aria-labelledby="vision-heading"
    >
      <div className="max-w-[1320px] mx-auto pt-12 lg:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_5fr] max-lg:gap-12 items-center justify-items-center lg:h-screen">
          <div className="max-lg:justify-self-start">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 lg:mb-8 font-medium leading-tight uppercase">
              Our Vision & Promise
            </h1>
            <p className="text-xl font-light mb-8 max-w-xl">
              Our vision is to create self-sustaining, thriving communities in
              rural Africa and other marginalized parts of the world by
              introducing a model that allows for mass-scale “self-development”.
            </p>
            <ul
              className="max-md:hidden flex gap-4 mb-8 mt-16"
              role="tablist"
              aria-label="Content navigation"
            >
              <li className="h-3 w-9 rounded-full bg-yellow-300"></li>
              <li className="h-3 w-3 rounded-full bg-white"></li>
              <li className="h-3 w-3 rounded-full bg-white"></li>
              <li className="h-3 w-3 rounded-full bg-white"></li>
              <li className="h-3 w-3 rounded-full bg-white"></li>
            </ul>
          </div>

          <figure className="max-lg:row-start-1 pl-0 lg:pl-8">
            <img
              className="w-full"
              src="/images/structure_made_off_wood.png"
              alt="Sustainable wooden structure in rural community"
              loading="eager"
            />
          </figure>
        </div>
        <a className="grid grid-cols-[auto_1fr_auto] gap-4 gap-y-6 col-span-2 items-start font-light">
          <a
            aria-label="Navigate to On Going Projects"
            href="/projects"
            className="max-md: uppercase flex items-center justify-center gap-2 justify-self-start"
          >
            <img
              className="w-16 md:max-w-6"
              src="/icons/left_arrow_icon.svg"
              alt="left arrow icon"
            />
            <span className="hidden md:block">On Going Projects</span>
          </a>

          <a className="max-md:row-start-2 max-md:col-span-3 text-sm flex flex-col items-center justify-center gap-2">
            <span>Scroll to Explore</span>
            <img src="/icons/bottom_arrow.svg" alt="bottom arrow icon" />
          </a>
          <a
            aria-label="Navigate to Our Partners"
            href="/partners"
            className="max-md:col-start-2 uppercase flex items-center justify-center gap-2 justify-self-start md:justify-self-end"
          >
            <span className="hidden md:block">Our Partners</span>
            <img
              className="w-16 md:max-w-6"
              src="/icons/right_arrow_icon.svg"
              alt="right Arrow icon"
            />
          </a>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
