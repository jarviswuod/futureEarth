import React from "react";

const HomeBenefitsSection = () => {
  return (
    <section className="bg-black text-white">
      <div className="max-w-[1320px] mx-auto py-12 px-4 flex flex-col items-center justify-center">
        <h2 className="text-6xl text-[#FBEADC] font-extrabold leading-tight uppercase mb-8">
          Benefits
        </h2>
        <p className="text-2xl font-extralight mb-20 text-center max-w-6xl">
          The iRise houses are affordable, simple-to-build with sustainable wood
          and powered by renewable solar energy. In addition, they come with the
          following benefits:
        </p>

        <ul className="grid grid-cols-3 gap-12 max-w-5xl mb-12">
          <li className="border border-[#FBEADC] rounded-base p-8 relative">
            <h3 className="text-4xl text-[#FBEADC] font-bold p-2 absolute -top-5 -left-5 bg-black">
              01
            </h3>
            <p className="text-xl font-light">
              The iRise housing structure can be mass-manufactured affordably.
            </p>
          </li>

          <li className="border border-[#FBEADC] rounded-base p-8 relative">
            <h3 className="text-4xl text-[#FBEADC] font-bold p-2 absolute -top-5 -left-5 bg-black">
              02
            </h3>
            <p className="text-xl font-light">
              The house is portable to maintain resale value and make the house
              financially viable.
            </p>
          </li>

          <li className="border border-[#FBEADC] rounded-base p-8 relative">
            <h3 className="text-4xl text-[#FBEADC] font-bold p-2 absolute -top-5 -left-5 bg-black">
              03
            </h3>
            <p className="text-xl font-light">
              The houses can be easily and quickly assembled on-site by
              inexperienced women and youth.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomeBenefitsSection;
