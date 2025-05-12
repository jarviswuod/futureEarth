import React from "react";

const HomeBenefitsSection = () => {
  return (
    <section className="bg-black text-white flex flex-col items-center justify-center">
      <div>
        <h2>Benefits </h2>
        <p>
          The iRise houses are affordable, simple-to-build with sustainable wood
          and powered by renewable solar energy. In addition, they come with the
          following benefits:
        </p>
        <ul className="grid grid-cols-3">
          <li>
            <h3>01</h3>
            <p>
              The iRise housing structure can be mass-manufactured affordably.
            </p>
          </li>

          <li>
            <h3>02</h3>
            <p>
              The house is portable to maintain resale value and make the house
              financially viable.
            </p>
          </li>

          <li>
            <h3>03</h3>
            <p>
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
