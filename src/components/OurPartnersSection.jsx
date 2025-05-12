import React from "react";

const OurPartnersSection = () => {
  return (
    <section>
      <div>
        <h2>OUR PARTNERS</h2>
        <p>
          We have formed solid partnerships with these organizations, on the
          basis of our shared vision.
        </p>
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          <button>
            <img src="icons/left_arrow.svg" alt="left arrow icon" />
          </button>
          <ul className="grid grid-cols-4 gap-4">
            <li>
              <img src="/images/patner_one.png" alt="patner_one logo" />
            </li>
            <li>
              <img src="/images/loowatt.png" alt="loowatt logo" />
            </li>
            <li>
              <img src="/images/envirofit.png" alt="envirofit logo" />
            </li>
            <li>
              <img src="/images/agricane.png" alt="agricane logo" />
            </li>
          </ul>
          <button>
            <img src="icons/right_arrow_.svg" alt="right arrow icon" />
          </button>
        </div>
        <button className="bg-green-800 text-white">
          <p>Learn More</p>
          <img src="icons/rght_arrow.svg" alt="rght arrow icon" />
        </button>
      </div>
    </section>
  );
};

export default OurPartnersSection;
