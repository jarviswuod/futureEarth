import React, { useState } from "react";

import productFeatures from "./productFeatures.json";
import SliderIndicator from "./SliderIndicator";
import FeatureCategory from "./FeatureCategory";

const ProductIntroductionSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const handlePrevious = () => {
    setActiveFeature((prev) =>
      prev > 0 ? prev - 1 : productFeatures.length - 1
    );
  };

  const handleNext = () => {
    setActiveFeature((prev) =>
      prev < productFeatures.length - 1 ? prev + 1 : 0
    );
  };

  const currentFeature = productFeatures[activeFeature];

  return (
    <section
      className="my-16 sm:my-20 md:my-24 lg:px-8"
      aria-labelledby="product-introduction-heading"
    >
      <div className="max-w-[1320px] mx-auto">
        <h2
          id="product-introduction-heading"
          className="text-4xl sm:text-5xl lg:text-6xl mb-6 lg:mb-8 text-[#165620] text-start lg:text-center font-medium leading-tight uppercase px-4"
        >
          Product Introduction
        </h2>
        <div className="px-4">
          <p className="text-lg font-extralight mb-4 max-w-4xl mx-auto text-start lg:text-center">
            To enable 'self-development' at scale so as to break the poverty
            cycle, Future Earth found its solution in the iRise HomesTM &
            Gardens initiative.
          </p>
          <p className="text-lg font-extralight mb-4 sm:mb-8 lg:mb-12 max-w-4xl mx-auto text-start lg:text-center">
            Future Earth builds affordable houses and delivers them with a
            variety of facilities that provide families the basic requirements
            and the tools for self-development.
          </p>
        </div>

        <div
          style={{
            backgroundImage: `linear-gradient(to right, rgba(22, 86, 32, 0.8), rgba(22, 86, 32, 0)), ${currentFeature.backgroundImage}`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-[32rem] w-full text-white grid grid-cols-[1fr_auto] items-center justify-center"
          role="region"
          aria-roledescription="feature spotlight"
          aria-label={`Spotlight on ${currentFeature.title}`}
        >
          <article className="max-w-xl px-4 sm:px-12 md:px-16 lg:px-20 py-12">
            <div className="w-16 sm:w-20 md:w-24 lg:w-28 mb-4">
              <img
                className="w-full"
                src={currentFeature.icon}
                alt=""
                aria-hidden="true"
                width="100"
                height="100"
              />
            </div>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight uppercase mb-4">
              {currentFeature.title}
            </h3>
            <p className="text-lg font-extralight mb-8 max-w-xl">
              {currentFeature.description}
            </p>

            <SliderIndicator
              total={productFeatures.length}
              active={activeFeature}
              onChange={setActiveFeature}
            />
          </article>

          <div className="place-self-end self-start space-x-4 p-4 sm:p-8">
            <button
              onClick={handlePrevious}
              aria-label="Previous feature"
              className="focus:ring-2 focus:ring-white p-1"
            >
              <img
                src="/icons/left_arrow_icon.svg"
                alt=""
                aria-hidden="true"
                width="24"
                height="24"
              />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next feature"
              className="focus:ring-2 focus:ring-white p-1"
            >
              <img
                src="/icons/right_arrow_icon.svg"
                alt=""
                aria-hidden="true"
                width="24"
                height="24"
              />
            </button>
          </div>
        </div>

        <ul className="grid grid-cols-3 md:grid-cols-6 text-xs uppercase text-white">
          {productFeatures.map((feature, index) => (
            <FeatureCategory
              key={feature.id}
              icon={feature.icon}
              title={feature.categoryTitle}
              bgColor={feature.categoryBgColor}
              isActive={index === activeFeature}
              onClick={() => setActiveFeature(index)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductIntroductionSection;
