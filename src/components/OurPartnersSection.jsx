import React from "react";

const OurPartnersSection = () => {
  return (
    <section className="my-16 sm:my-20 md:my-24 lg:px-8">
      <div className="max-w-[1320px] mx-auto">
        <div className="bg-[#FBEADC] py-8 sm:py-12 md:py-16 px-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 lg:mb-8 text-[#165620] text-center font-medium leading-tight uppercase">
            OUR PARTNERS
          </h2>
          <p className="text-xl font-extralight mb-4 sm:mb-8 lg:mb-12 text-center max-w-6xl mx-auto">
            We have formed solid partnerships with these organizations, on the
            basis of our shared vision.
          </p>

          <div className="grid grid-cols-[auto_1fr_auto] gap-4 md:gap-8 lg:gap-12 items-center max-w-6xl mx-auto mb-12">
            <button className="max-md:w-8">
              <img src="icons/left_arrow.svg" alt="left arrow icon" />
            </button>
            <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 lg:gap-8">
              <li className="border border-[#16562079] flex items-center justify-center p-4">
                <img src="/images/patner_one.png" alt="patner_one logo" />
              </li>
              <li className="border border-[#16562079] hidden sm:flex items-center justify-center p-4">
                <img src="/images/loowatt.png" alt="loowatt logo" />
              </li>
              <li className="border border-[#16562079] hidden md:flex items-center justify-center p-4">
                <img src="/images/envirofit.png" alt="envirofit logo" />
              </li>
              <li className="border border-[#16562079] hidden md:flex items-center justify-center p-4">
                <img src="/images/agricane.png" alt="agricane logo" />
              </li>
            </ul>
            <button className="max-md:w-8">
              <img src="icons/right_arrow_.svg" alt="right arrow icon" />
            </button>
          </div>
          <button className="bg-[#165620] max-sm:text-xs mx-auto place-self-center uppercase text-white flex gap-2 items-center justify-center py-4 px-8">
            <p>Learn More</p>
            <img src="icons/rght_arrow.svg" alt="rght arrow icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurPartnersSection;
