import React from "react";

const WhoWeAreSection = () => {
  return (
    <section>
      <div className="grid grid-cols-2">
        <div>
          <h2>Who We Are</h2>

          <p>
            Future Earth was founded in 2018 by a team of people driven by a
            passion to break the poverty cycle in the developing world and
            empower people with self-sustaining wealth creation avenues that
            improve standards of living now and for future generations.
          </p>

          <p>
            From decades of experience working on sustainable forestry projects
            around the world, our founders Jason Rosamond and Maya Minkova come
            with a wealth of knowledge. They have a long-held ambition to use
            timber as one of the earth’s own natural resources, to help
            alleviate housing poverty in rural Africa.
          </p>

          <p>
            We use a blueprint based on PATHWAY (power, agriculture, technology,
            housing, women and youth), a model that was designed by one of our
            founders, Maya Minkova for a sustainable homes project in South
            African townships 25 years ago.
          </p>

          <p>
            Our team is rich in expertise, with combined backgrounds in
            forestry, finance, emerging markets, infrastructure development, and
            agriculture, and a common goal to help create better lives for
            people in need.
          </p>
        </div>
        <div>
          <div>
            <img
              src="/images/illustration_of_women_working.png"
              alt="illustration of women working"
            />
          </div>
          <div>
            <img
              src="/images/ilustration_of_market_place.png"
              alt="ilustration of market place"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
