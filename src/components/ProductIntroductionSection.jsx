import React from "react";

const ProductIntroductionSection = () => {
  return (
    <section>
      <div>
        <h2>PRODUCT INTRODUCTION</h2>
        <p>
          To enable ‘self-development’ at scale so as to break the poverty
          cycle, Future Earth found its solution in the iRise HomesTM & Gardens
          initiative.
        </p>
        <p>
          Future Earth builds affordable houses and delivers them with a variety
          of facilities that provide families the basic requirements and the
          tools for self-development.
        </p>
        <div
          style={{
            backgroundImage: "url('/images/solar_plant.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-[30rem] w-full text-white grid grid-cols-[auto_1fr] items-center justify-center"
        >
          <div>
            <div>
              <img src="/icons/solar_icon.svg" alt="solar icon" />
            </div>
            <h3 className="uppercase">Solar Power</h3>

            <p>
              Basic access to electricity improves safety, security, and
              productivity while reducing household expenses for lighting
              sources.
            </p>
            <ul className="flex gap-2">
              <li className="h-2 w-2 bg-white rounded-full"></li>
              <li className="h-2 w-2 bg-white rounded-full"></li>
              <li className="h-2 w-2 bg-white rounded-full"></li>
              <li className="h-2 w-2 bg-white rounded-full"></li>
              <li className="h-2 w-2 bg-white rounded-full"></li>
            </ul>
          </div>
          <div className="place-self-end self-start">
            <button>
              <img src="/icons/left_arrow.svg" alt="left Arrow icon" />
            </button>
            <button>
              <img src="/icons/right_arrow.svg" alt="right Arrow icon" />
            </button>
          </div>
        </div>

        <ul className="grid grid-cols-6 bg-green-900">
          <li>
            <div>
              <img src="/icons/solar_icon.svg" alt="solar icon" />
              <p>Solar Panel</p>
            </div>
          </li>
          <li>
            <div>
              <img src="/icons/toilet_icon.svg" alt="toilet icon" />
              <p>Waterless Toilet</p>
            </div>
          </li>
          <li>
            <div>
              <img src="/icons/house_icon.svg" alt="house icon" />
              <p>Low-cost mortage</p>
            </div>
          </li>
          <li>
            <div>
              <img src="/icons/tree_icon.svg" alt="tree icon" />
              <p>Garden to plan trees</p>
            </div>
          </li>
          <li>
            <div>
              <img src="/icons/fire_icon.svg" alt="fire icon" />
              <p>Clean, efficient cook-stove</p>
            </div>
          </li>
          <li>
            <div>
              <img src="/icons/internet_icon.svg" alt="internet icon" />
              <p>Internet Access Device</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProductIntroductionSection;
