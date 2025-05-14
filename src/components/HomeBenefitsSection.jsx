import React from "react";

const HomeBenefitsSection = () => {
  return (
    <section className="my-16 px-8">
      <div className="max-w-[1320px] py-16 px-4 bg-black text-white mx-auto flex flex-col items-center justify-center">
        <h2 className="text-6xl text-[#FBEADC] font-medium leading-tight uppercase mb-8">
          Benefits
        </h2>
        <p className="text-2xl font-extralight mb-20 text-center max-w-6xl">
          The iRise houses are affordable, simple-to-build with sustainable wood
          and powered by renewable solar energy. In addition, they come with the
          following benefits:
        </p>

        <ul className="max-w-5xl grid grid-cols-3 gap-12 text-xl font-extralight mb-12">
          <li className="border border-[#fbeadc8a] rounded-base p-6 relative">
            <h3 className="text-4xl text-[#FBEADC] font-bold p-2 absolute -top-8 -left-4 bg-black">
              01
            </h3>
            <p className="">
              The iRise housing structure can be mass-manufactured affordably.
            </p>
          </li>

          <li className="border border-[#fbeadc8a] rounded-base p-6 relative">
            <h3 className="text-4xl text-[#FBEADC] font-bold p-2 absolute -top-8 -left-4 bg-black">
              02
            </h3>
            <p className="">
              The house is portable to maintain resale value and make the house
              financially viable.
            </p>
          </li>

          <li className="border border-[#fbeadc8a] rounded-base p-6 relative">
            <h3 className="text-4xl text-[#FBEADC] font-bold p-2 absolute -top-8 -left-4 bg-black">
              03
            </h3>
            <p className="">
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
