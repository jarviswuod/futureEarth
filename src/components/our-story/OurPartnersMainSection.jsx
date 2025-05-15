import React from "react";
import ourPartners from "./ourPartners.json";

const OurPartnersMainSection = () => {
  return (
    <section
      aria-labelledby="our-partners-main-heading"
      className="my-16 sm:my-20 md:my-24 lg:px-8"
    >
      <div className="max-w-[1320px] mx-auto bg-[#FBEADC] py-8 sm:py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col">
          <h2
            id="our-partners-main-heading"
            className="ext-4xl sm:text-5xl lg:text-6xl mb-6 lg:mb-8 text-[#165620] font-medium leading-tight uppercase"
          >
            Our Partners
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-extralight mb-12">
            Instead of implementing a single component of a solution across
            multiple communities, as has been done in the past, we focus on
            delivering an integrated economic system to a community to help lift
            it to a sustainable minimum standard of living from which it can
            grow and progress independently. We have therefore identified and
            made collaborative efforts with organizations that share our vision
            and help steer it forward.
          </p>

          <ul className="divide-y-2 divide-[#16562083] max-sm:space-y-4 mb-16 text-lg sm:text-xl md:text-2xl font-extralight">
            {ourPartners.map((partner, index) => (
              <li
                key={index}
                className="grid grid-cols-1 sm:grid-cols-[1fr_4fr] items-center max-sm:py-4 justify-center sm:divide-x-2 divide-[#16562083]"
              >
                <div className="mb-4 sm:px-2 lg:px-8 flex items-center justify-start sm:justify-center">
                  <img src={partner.logo} alt={partner.alt} />
                </div>

                <div className="sm:p-8 lg:p-12">
                  <h3 className="mb-1 sm:mb-2 text-[#165620] font-medium">
                    {partner.name}
                  </h3>
                  <p>{partner.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="text-lg sm:text-xl md:text-2xl font-extralight mb-8">
            In future we hope to collaborate with delivery partners such as
            Adelphi, J&J, and Westfalia Fruit; with the financial backing of
            recognized financial institutions such as TDB, Standard Bank,
            Rockefeller Foundation, World Bank IFC, AgDevCo, and World Bank
            IBRD.
          </p>

          <p className="text-lg sm:text-xl md:text-2xl font-extralight mb-12">
            Our most critical partners are the communities we hope to transform,
            and it is only by working in partnership with local leaders and our
            future residents that we will pilot, test and refine a model that
            truly works for them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurPartnersMainSection;
