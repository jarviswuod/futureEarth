import React from "react";

const OnGoingProjectsSection = () => {
  return (
    <section>
      <div>
        <h2>ONGOING PROJECTS</h2>
        <p>
          For Future Earth to deliver the country’s rural transformation agenda,
          GoMalawi and CDI are supporting the organization by providing them
          with 500,000 hectares of land for co-operative agriculture,
          sustainable reforestation, and the delivery of 500,000 homes. Here are
          the current projects were’ working on:
        </p>
        <ul className="grid grid-cols-2">
          <li>
            <img
              src="/images/soil_carried_by_hands.jpg"
              alt="soil carried by hands"
            />
          </li>
          <li>
            <img src="/images/tree_stump_gloves.jpg" alt="tree stump gloves" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OnGoingProjectsSection;
