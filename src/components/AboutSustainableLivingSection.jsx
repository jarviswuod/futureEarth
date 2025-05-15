import React from "react";

const AboutSustainableLivingSection = () => {
  return (
    <section className="my-0 sm:my-20 md:my-24 lg:px-8">
      <div class="max-w-[1320px] bg-[#FBEADC] p-4 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="lg:p-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 lg:mb-8 text-[#165620] font-medium leading-tight uppercase">
            About Sustainable Living
          </h2>

          <p className="text-lg font-extralight mb-8 max-w-xl">
            Aid that isn't accompanied by a strategy for long-term
            sustainability is certain to fail. Driven by the desire to create
            lasting change from self-sustainable economies on the ground, we
            invented the iRise Homes building system and a corresponding
            economic development model. Each home comes plugged with amenities
            that allow for a pragmatic and dignified lifestyle, as well as a
            fruit garden to be tended for income generation.
          </p>

          <p className="text-lg font-extralight mb-8 max-w-xl">
            Beyond providing people with the fundamental elements to achieve a
            basic living standard, that is food, shelter, energy and basic
            income, Future Earth is leveraging on technology to provide them
            with tools for ongoing development and as a result, financial
            sustainability. We provide a technology platform that enables
            mortgage provisions and monthly pay-as-you-go payments on mobile. An
            internet device is also plugged into the home, allowing its
            occupants to engage in the global knowledge and ‘gig’ economy.
          </p>
        </div>

        <div className="max-lg:row-start-1">
          <figure>
            <img
              className="hidden lg:block"
              src="/images/illustration_of_women_in_a_market.png"
              alt="illustration of women in a market"
            />
          </figure>
          <figure>
            <img
              src="/images/illustration_of_a_community.png"
              alt="illustration of a community"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default AboutSustainableLivingSection;
