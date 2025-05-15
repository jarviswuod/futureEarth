import React from "react";

const BenefitsSection = () => {
  const benefit = [
    {
      number: 1,
      description:
        "The iRise housing structure can be mass-manufactured affordably.",
    },
    {
      number: 2,
      description:
        "The house is portable to maintain resale value and make the house financially viable.",
    },
    {
      number: 3,
      description:
        "The houses can be easily and quickly assembled on-site by inexperienced women and youth.",
    },
  ];

  return (
    <section
      aria-labelledby="benefits-heading"
      className="my-16 sm:my-20 md:my-24 lg:px-8"
    >
      <div className="max-w-[1320px] py-16 px-4 sm:px-8 bg-black text-white mx-auto flex flex-col md:items-center items-start justify-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 lg:mb-8 text-[#FBEADC] font-medium leading-tight uppercase">
          Benefits
        </h2>
        <p className="text-2xl font-extralight mb-12 sm:mb-16 md:mb-20 text-start md:text-center max-w-6xl">
          The iRise houses are affordable, simple-to-build with sustainable wood
          and powered by renewable solar energy. In addition, they come with the
          following benefits:
        </p>

        <ul className="max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-xl font-extralight mb-12">
          {benefit.map((item, index) => (
            <li className="border border-[#fbeadc8a] rounded-base max-sm:px-2 p-4 sm:p-6 relative max-md:flex items-center gap-4 max-md:divide-x-2 divide-[#fbeadc8a]">
              <h3 className="text-4xl text-[#FBEADC] font-bold p-2 md:absolute -top-8 -left-4 bg-black">
                {item.number}
              </h3>
              <p className="max-sm:pl-4 max-md:pl-8">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BenefitsSection;
