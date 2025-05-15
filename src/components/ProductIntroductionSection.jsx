import React from "react";

const ProductIntroductionSection = () => {
  return (
    <section className="my-16 sm:my-20 md:my-24 lg:px-8">
      <div className="max-w-[1320px] mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 lg:mb-8 text-[#165620] text-start lg:text-center font-medium leading-tight uppercase px-4">
          PRODUCT INTRODUCTION
        </h2>
        <p className="text-lg font-extralight mb-4 max-w-4xl mx-auto text-start lg:text-center px-4">
          To enable ‘self-development’ at scale so as to break the poverty
          cycle, Future Earth found its solution in the iRise HomesTM & Gardens
          initiative.
        </p>
        <p className="text-lg font-extralight mb-4 sm:mb-8 lg:mb-12 max-w-4xl mx-auto text-start lg:text-center px-4">
          Future Earth builds affordable houses and delivers them with a variety
          of facilities that provide families the basic requirements and the
          tools for self-development.
        </p>

        <div
          style={{
            backgroundImage: `linear-gradient(to right, rgba(22, 86, 32, 3.2), rgba(22, 86, 32, 0)), url('/images/solar_plant.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-[32rem] w-full text-white grid grid-cols-[1fr_auto] items-center justify-center"
        >
          <div className="max-w-xl px-4 sm:px-12 md:px-16 lg:px-20 py-12">
            <div className="w-16 sm:w-20 md:w-24 lg:w-28 mb-4">
              <img
                className="w-full"
                src="/icons/solar_icon.svg"
                alt="solar icon"
              />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight uppercase mb-4">
              Solar Power
            </h2>
            <p className="text-lg font-extralight mb-8 max-w-xl">
              Basic access to electricity improves safety, security, and
              productivity while reducing household expenses for lighting
              sources.
            </p>
            <ul className="flex gap-4 mb-12 mt-8">
              <li className="h-3 w-9 rounded-full bg-yellow-300"></li>
              <li className="h-3 w-3 rounded-full bg-white"></li>
              <li className="h-3 w-3 rounded-full bg-white"></li>
              <li className="h-3 w-3 rounded-full bg-white"></li>
              <li className="h-3 w-3 rounded-full bg-white"></li>
            </ul>
          </div>

          <div className="place-self-end self-start space-x-4 p-4 sm:p-8">
            <button>
              <img src="/icons/left_arrow_icon.svg" alt="left Arrow icon" />
            </button>
            <button>
              <img src="/icons/right_arrow_icon.svg" alt="right Arrow icon" />
            </button>
          </div>
        </div>

        <ul className="grid grid-cols-3 md:grid-cols-6 text-xs uppercase text-white">
          <li className="bg-[#51A501] p-2 sm:p-4 py-8">
            <figure className="flex flex-col gap-2 items-center text-center">
              <img src="/icons/solar_icon.svg" alt="solar icon" />
              <figcaption>Solar Panel</figcaption>
            </figure>
          </li>
          <li className="bg-[#165620F2] p-2 sm:p-4 py-8">
            <figure className="flex flex-col gap-2 items-center text-center">
              <img src="/icons/toilet_icon.svg" alt="toilet icon" />
              <figcaption>Waterless Toilet</figcaption>
            </figure>
          </li>
          <li className="bg-[#165620E5] p-2 sm:p-4 py-8">
            <figure className="flex flex-col gap-2 items-center text-center">
              <img src="/icons/house_icon.svg" alt="house icon" />
              <figcaption>Low-cost mortage</figcaption>
            </figure>
          </li>
          <li className="bg-[#165620F2] p-2 sm:p-4 py-8">
            <figure className="flex flex-col gap-2 items-center text-center">
              <img src="/icons/tree_icon.svg" alt="tree icon" />
              <figcaption>Garden to plan trees</figcaption>
            </figure>
          </li>
          <li className="bg-[#225F2BF2] p-2 sm:p-4 py-8">
            <figure className="flex flex-col gap-2 items-center text-center">
              <img src="/icons/fire_icon.svg" alt="fire icon" />
              <figcaption>Clean, efficient cook-stove</figcaption>
            </figure>
          </li>
          <li className="bg-[#2D6736E5] p-2 sm:p-4 py-8">
            <figure className="flex flex-col gap-2 items-center text-center">
              <img src="/icons/internet_icon.svg" alt="internet icon" />
              <figcaption>Internet Access Device</figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProductIntroductionSection;
