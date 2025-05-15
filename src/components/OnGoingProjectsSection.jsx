import React from "react";

const OnGoingProjectsSection = () => {
  return (
    <section className="my-16 sm:my-20 md:my-24 lg:-mb-32 lg:px-8">
      <div className="max-w-[1320px] mx-auto">
        <div className="bg-[#165620] text-[#FBEADC] lg:pb-28 py-8 md:py-12 lg:py-16 px-4 text-start lg:text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 lg:mb-8 font-medium leading-tight uppercase">
            ONGOING PROJECTS
          </h2>
          <p className="text-xl md:text-2xl font-extralight pb-4 sm:mb-8 lg:mb-20 text-start lg:text-center max-w-6xl mx-auto">
            For Future Earth to deliver the country’s rural transformation
            agenda, GoMalawi and CDI are supporting the organization by
            providing them with{" "}
            <span className="font-bold">500,000 hectares of land</span> for
            co-operative agriculture, sustainable reforestation, and the{" "}
            <span className="font-bold">delivery of 500,000 homes.</span> Here
            are the current projects were’ working on:
          </p>
        </div>
        <ul className="grid grid-cols-2 px-4 lg:-translate-y-32 max-w-6xl mx-auto max-lg:bg-[#165620] text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium gap-4 max-sm:pb-8 max-lg:pb-12">
          <li
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(22, 86, 32, 0), rgba(22, 86, 32, 0.6)), url('/images/soil_carried_by_hands.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-48 sm:h-64 md:h-72 w-full p-1 sm:p-2 md:p-4 lg:p-8 flex items-end justify-start max-sm:uppercase border-2 md:border-4 lg:border-8 border-[#FBEADC]"
          >
            Malawi Project
          </li>

          <li
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(22, 86, 32, 0), rgba(22, 86, 32, 0.6)), url('/images/tree_stump_gloves.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-48 sm:h-64 md:h-72 w-full p-1 sm:p-2 md:p-4 lg:p-8 flex items-end justify-start max-sm:uppercase border-2 md:border-4 lg:border-8 border-[#FBEADC]"
          >
            Mozambique Project
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OnGoingProjectsSection;
