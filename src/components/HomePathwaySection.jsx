import React from "react";

const HomePathwaySection = () => {
  return (
    <section>
      <div className="grid grid-cols-2">
        <div>
          <h2>PATHWAY</h2>

          <p>
            Future Earth’s blueprint is based on a model that was designed by
            one of our founders, Maya Minkova, 25 years ago while still a
            student, for a safe and sustainable homes project in South African
            townships. We have adapted the PATHWAY (power, agriculture,
            technology, housing, women and youth) model as the framework that
            outlines our projects.
          </p>
          <p>
            We believe that women and the youth, who make up more than half of
            the society, are critical in unlocking self-development. The project
            will target women as homeowners, giving them assets and credit and
            therefore power to self-develop. We also emphasize support for SMEs
            owned by women and young people to provide services within the
            community.
          </p>
        </div>
        <div>
          <img
            src="/images/trees_forming_a_canopy.png"
            alt="trees forming a canopy"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePathwaySection;
