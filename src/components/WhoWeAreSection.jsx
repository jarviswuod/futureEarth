import React from "react";

const WhoWeAreSection = () => {
  return (
    <section className="my-12">
      <div className="max-w-[1320px] bg-[#FBEADC] mx-auto grid grid-cols-2 items-center">
        <div className="p-16">
          <h2 className="text-6xl text-[#165620] font-extrabold leading-tight uppercase mb-8">
            Who We Are
          </h2>
          <p className="text-lg font-light mb-8 max-w-xl">
            Future Earth was founded in 2018 by a team of people driven by a
            passion to break the poverty cycle in the developing world and
            empower people with self-sustaining wealth creation avenues that
            improve standards of living now and for future generations.
          </p>
          <p className="text-lg font-light mb-8 max-w-xl">
            From decades of experience working on sustainable forestry projects
            around the world, our founders Jason Rosamond and Maya Minkova come
            with a wealth of knowledge. They have a long-held ambition to use
            timber as one of the earth’s own natural resources, to help
            alleviate housing poverty in rural Africa.
          </p>
          <p className="text-lg font-light mb-8 max-w-xl">
            We use a blueprint based on PATHWAY (power, agriculture, technology,
            housing, women and youth), a model that was designed by one of our
            founders, Maya Minkova for a sustainable homes project in South
            African townships 25 years ago.
          </p>
          <p className="text-lg font-light mb-8 max-w-xl">
            Our team is rich in expertise, with combined backgrounds in
            forestry, finance, emerging markets, infrastructure development, and
            agriculture, and a common goal to help create better lives for
            people in need.
          </p>
        </div>

        <div>
          <figure>
            <img
              src="/images/illustration_of_women_working.png"
              alt="illustration of women working"
            />
          </figure>
          <figure>
            <img
              src="/images/ilustration_of_market_place.png"
              alt="ilustration of market place"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
