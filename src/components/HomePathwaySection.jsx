import React from "react";

const HomePathwaySection = () => {
  return (
    <section className="my-16 sm:my-20 md:my-24 lg:px-8">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[7fr_5fr] items-center">
        <div className="bg-[#FBEADC] px-4 max-[565px]:pt-44 pt-52 sm:pt-64 md:pt-72 lg:pl-16 lg:pr-56 lg:py-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 lg:mb-8  text-[#165620] font-medium leading-tight uppercase">
            Pathway
          </h2>
          <p className="text-lg font-extralight mb-8 lg:max-w-xl">
            Future Earth’s blueprint is based on a model that was designed by
            one of our founders, Maya Minkova, 25 years ago while still a
            student, for a safe and sustainable homes project in South African
            townships. We have adapted the PATHWAY (power, agriculture,
            technology, housing, women and youth) model as the framework that
            outlines our projects.
          </p>
          <p className="text-lg font-extralight mb-8 lg:max-w-xl">
            We believe that women and the youth, who make up more than half of
            the society, are critical in unlocking self-development. The project
            will target women as homeowners, giving them assets and credit and
            therefore power to self-develop. We also emphasize support for SMEs
            owned by women and young people to provide services within the
            community.
          </p>
        </div>
        <div className="max-lg:row-start-1 max-[450px]:-mt-52 -mt-60 sm:-mt-72 md:-mt-80 lg:mt-0">
          <img
            className="w-full scale-95 lg:scale-125 max-lg:translate-y-1/2 translate-x-0 lg:-translate-x-12"
            src="/images/trees_forming_a_canopy.png"
            alt="trees forming a canopy"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePathwaySection;
