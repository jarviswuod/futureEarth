import React from "react";

const HomePathwaySection = () => {
  return (
    <section className="my-16 px-8">
      <div class="max-w-[1320px] mx-auto grid grid-cols-[7fr_5fr] items-center">
        <div className="bg-[#FBEADC] pl-16 pr-56 py-12">
          <h2 className="text-6xl text-[#165620] font-medium leading-tight uppercase mb-8">
            PATHWAY
          </h2>
          <p className="text-lg font-extralight mb-8 max-w-xl">
            Future Earth’s blueprint is based on a model that was designed by
            one of our founders, Maya Minkova, 25 years ago while still a
            student, for a safe and sustainable homes project in South African
            townships. We have adapted the PATHWAY (power, agriculture,
            technology, housing, women and youth) model as the framework that
            outlines our projects.
          </p>
          <p className="text-lg font-extralight mb-8 max-w-xl">
            We believe that women and the youth, who make up more than half of
            the society, are critical in unlocking self-development. The project
            will target women as homeowners, giving them assets and credit and
            therefore power to self-develop. We also emphasize support for SMEs
            owned by women and young people to provide services within the
            community.
          </p>
        </div>
        <div className="relaive">
          <img
            className="scale-125 -translate-x-12"
            src="/images/trees_forming_a_canopy.png"
            alt="trees forming a canopy"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePathwaySection;
