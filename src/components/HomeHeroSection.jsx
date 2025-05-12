import React from "react";

const HomeHeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/images/green_forest_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      class="h-full w-full text-white"
    >
      <div class="grid grid-cols-2">
        <div>
          <h1>OUR VISION & PROMISE</h1>
          <p>
            Our vision is to create self-sustaining, thriving communities in
            rural Africa and other marginalized parts of the world by
            introducing a model that allows for mass-scale “self-development”.
          </p>
        </div>

        <div>
          <img
            src="/images/structure_made_off_wood.png"
            alt="structure made off wood"
          />
        </div>
        <ul class="grid grid-cols-3 col-span-2">
          <li>
            On Going Projects
            <img src="/icons/right_arrow.svg" alt="right arrow" />
          </li>

          <li>
            Scroll to Explore
            <img src="/icons/bottom_arrow.svg" alt="bottom arrow" />
          </li>
          <li>
            Our Partners <img src="/icons/right_arrow.svg" alt="right arrow" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomeHeroSection;
