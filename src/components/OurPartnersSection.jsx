import React from "react";

const OurPartnersSection = () => {
  return (
    <section className="my-16 px-8">
      <div className="max-w-[1320px] mx-auto">
        <div className="bg-[#FBEADC] py-12 px-4 flex items-center flex-col text-center">
          <h2 className="text-6xl text-[#165620] font-extrabold leading-tight uppercase mb-8">
            OUR PARTNERS
          </h2>
          <p className="text-2xl font-extralight mb-12 text-center max-w-6xl mx-auto">
            We have formed solid partnerships with these organizations, on the
            basis of our shared vision.
          </p>

          <div className="grid grid-cols-[auto_1fr_auto] gap-12 items-center max-w-6xl mx-auto mb-12">
            <button>
              <img src="icons/left_arrow.svg" alt="left arrow icon" />
            </button>
            <ul className="grid grid-cols-4 gap-8">
              <li className="border border-[#16562079] flex items-center justify-center p-4">
                <img src="/images/patner_one.png" alt="patner_one logo" />
              </li>
              <li className="border border-[#16562079] flex items-center justify-center p-4">
                <img src="/images/loowatt.png" alt="loowatt logo" />
              </li>
              <li className="border border-[#16562079] flex items-center justify-center p-4">
                <img src="/images/envirofit.png" alt="envirofit logo" />
              </li>
              <li className="border border-[#16562079] flex items-center justify-center p-4">
                <img src="/images/agricane.png" alt="agricane logo" />
              </li>
            </ul>
            <button>
              <img src="icons/right_arrow_.svg" alt="right arrow icon" />
            </button>
          </div>
          <button className="bg-[#165620] uppercase text-white flex gap-2 items-center justify-center py-4 px-8">
            <p>Learn More</p>
            <img src="icons/rght_arrow.svg" alt="rght arrow icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurPartnersSection;
