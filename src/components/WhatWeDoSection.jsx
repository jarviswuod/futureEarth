import React from "react";

const WhatWeDoSection = () => {
  return (
    <section className="my-16 sm:my-20 md:my-24 lg:px-8">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr]">
        <div className="bg-[#FBEADC] max-lg:max-h-[320px] flex items-center">
          <div
            style={{
              backgroundImage: "url('/images/two_girls_playing.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="overflow-hidden h-[540px] lg:h-96 w-full scale-95 lg:scale-125 max-lg:translate-y-1/4 translate-x-0 lg:translate-x-14"
          ></div>
        </div>

        <div className="bg-[#165620] text-white px-4 lg:pl-48 lg:pr-24 py-16 max-lg:pt-64">
          <div className="text-lg font-extralight">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 lg:mb-8 text-[#FBEADC] font-medium leading-tight uppercase">
              What we do
            </h2>
            <p className="mb-4 sm:mb-8">
              Future Earth carries the dream of a world where everyone has
              access to safe housing, sustainable livelihoods, education and
              healthcare, as well as opportunities to create a legacy for future
              generations.
            </p>
            <p className="mb-4 sm:mb-8">
              Using the PATHWAY model we have created a self-sustaining
              ecosystem that will fulfill the long-term needs of people in need,
              not just at a basic level but with the potential to create wealth.
              iRise Homes are low-cost, easy-to-construct houses that we
              designed with women and youth in mind, from construction to
              functionality. They are built with sustainable timber, with each
              house embedded with amenities, including renewable solar energy
              and digital connectivity.
            </p>
            <p className="mb-4 sm:mb-8">
              More than just a place to call home, we have ensured that our
              houses are also the springboard for opportunity and a better life.
              Each house comes with a fruit garden that provides an income for
              the household and the financial means to pay the mortgage.
            </p>
            <p className="mb-4 sm:mb-8">
              To allow access to more resources, we will construct in every
              community a central borehole facility to provide access to clean
              water. Through our building technology, we will also put up
              schools and health clinics for the community’s access to quality
              education and health service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
