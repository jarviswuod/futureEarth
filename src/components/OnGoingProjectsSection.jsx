import React from "react";

const OnGoingProjectsSection = () => {
  return (
    <section className="my-16 -mb-32 px-8">
      <div className="max-w-[1320px] mx-auto">
        <div className="bg-[#165620] text-[#FBEADC] pb-28 py-16 px-4 text-center">
          <h2 className="text-6xl font-medium leading-tight uppercase mb-8">
            ONGOING PROJECTS
          </h2>
          <p className="text-2xl font-extralight mb-20 text-center max-w-6xl mx-auto">
            For Future Earth to deliver the country’s rural transformation
            agenda, GoMalawi and CDI are supporting the organization by
            providing them with{" "}
            <span className="font-bold">500,000 hectares of land</span> for
            co-operative agriculture, sustainable reforestation, and the{" "}
            <span className="font-bold">delivery of 500,000 homes.</span> Here
            are the current projects were’ working on:
          </p>
        </div>
        <ul className="grid grid-cols-2 -translate-y-32 max-w-6xl mx-auto text-white text-4xl font-extrabold gap-4">
          <li
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(22, 86, 32, 0), rgba(22, 86, 32, 0.6)), url('/images/soil_carried_by_hands.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-72 w-full p-8 flex items-end justify-start border-8 border-[#FBEADC]"
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
            className="h-72 w-full p-8 flex items-end justify-start border-8 border-[#FBEADC]"
          >
            Mozambique Project
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OnGoingProjectsSection;
