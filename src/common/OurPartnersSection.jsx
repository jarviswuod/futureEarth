import React from "react";

const OurPartnersSection = () => {
  const partners = [
    { id: 1, name: "Partner One", image: "/images/patner_one.png" },
    { id: 2, name: "Loowatt", image: "/images/loowatt.png" },
    { id: 3, name: "Envirofit", image: "/images/envirofit.png" },
    { id: 4, name: "Agricane", image: "/images/agricane.png" },
  ];

  return (
    <section
      className="my-16 sm:my-20 md:my-24 lg:px-8"
      aria-labelledby="partners-heading"
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="bg-[#FBEADC] py-8 sm:py-12 md:py-16 px-4">
          <h2
            id="partners-heading"
            className="text-4xl sm:text-5xl lg:text-6xl mb-6 lg:mb-8 text-[#165620] text-center font-medium leading-tight uppercase"
          >
            OUR PARTNERS
          </h2>

          <p className="text-xl font-extralight mb-4 sm:mb-8 lg:mb-12 text-center max-w-6xl mx-auto">
            We have formed solid partnerships with these organizations, on the
            basis of our shared vision.
          </p>

          <div
            className="grid grid-cols-[auto_1fr_auto] gap-4 md:gap-8 lg:gap-12 items-center max-w-6xl mx-auto mb-12"
            role="region"
            aria-label="Partner organizations carousel"
          >
            <button className="max-md:w-8" aria-label="View previous partners">
              <img src="icons/left_arrow.svg" alt="" aria-hidden="true" />
            </button>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-8">
              <li className="border border-[#16562079] flex items-center justify-center p-4">
                <img
                  src={partners[0].image}
                  alt={`${partners[0].name} logo`}
                  loading="lazy"
                />
              </li>
              <li className="border border-[#16562079] hidden sm:flex items-center justify-center p-4">
                <img
                  src={partners[1].image}
                  alt={`${partners[1].name} logo`}
                  loading="lazy"
                />
              </li>
              <li className="border border-[#16562079] hidden md:flex items-center justify-center p-4">
                <img
                  src={partners[2].image}
                  alt={`${partners[2].name} logo`}
                  loading="lazy"
                />
              </li>
              <li className="border border-[#16562079] hidden lg:flex items-center justify-center p-4">
                <img
                  src={partners[3].image}
                  alt={`${partners[3].name} logo`}
                  loading="lazy"
                />
              </li>
            </ul>

            <button className="max-md:w-8" aria-label="View next partners">
              <img src="icons/right_arrow_.svg" alt="" aria-hidden="true" />
            </button>
          </div>

          <a
            href="/partners"
            className="bg-[#165620] max-w-64 max-sm:text-xs mx-auto place-self-center uppercase text-white flex gap-2 items-center justify-center py-4 px-8"
            aria-label="Learn more about our partners"
          >
            <span>Learn More</span>
            <img src="icons/rght_arrow.svg" alt="" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurPartnersSection;
