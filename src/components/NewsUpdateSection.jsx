import React from "react";

const NewsUpdateSection = () => {
  return (
    <section className="my-24 px-8">
      <div className="max-w-[1320px] mx-auto bg-[#165620] text-[#FBEADC] py-12 px-4 grid grid-cols-[auto_1fr] items-center">
        <div className="max-w-md px-20 py-12">
          <h2 className="text-6xl font-extrabold leading-tight uppercase mb-8">
            News Updates
          </h2>
          <p className="text-lg font-extralight mb-8 max-w-xl">
            Find all the information and updates about our past, present and
            future projects here.
          </p>
          <button className="bg-[#165620] text-white text-xs border border-[#FFF6EE] uppercase self-center flex gap-2 items-center justify-center py-3 px-8 my-8">
            <p>View All</p>
            <img src="icons/rght_arrow.svg" alt="rght arrow icon" />
          </button>
        </div>

        <div className="pr-16">
          <div className="place-self-end self-start space-x-4 py-8">
            <button>
              <img src="/icons/left_arrow_icon.svg" alt="left Arrow icon" />
            </button>
            <button>
              <img src="/icons/right_arrow_icon.svg" alt="right Arrow icon" />
            </button>
          </div>
          <ul className="grid grid-cols-3 gap-4">
            <li className="bg-[#FBEADC] text-[#165620] p-2">
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(22, 86, 32, 0), rgba(22, 86, 32, 0.6)), url('/images/boards_piled_together.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="h-40 w-full flex items-end justify-start mb-4"
              ></div>
              <div className="max-w-48 mx-auto">
                <h3 className="text-2xl font-medium mb-8">
                  East African hardwoods
                </h3>
                <a
                  href="#"
                  className="bg-[#165620] text-white text-xs border border-[#FFF6EE] uppercase flex items-center justify-center py-3 px-8 mb-4"
                >
                  Learn More
                </a>
              </div>
            </li>

            <li className="bg-[#FBEADC] text-[#165620] p-2">
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(22, 86, 32, 0), rgba(22, 86, 32, 0.6)), url('/images/soil_carried_by_hands.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="h-40 w-full flex items-end justify-start mb-4"
              ></div>
              <div className="max-w-48 mx-auto">
                <h3 className="text-2xl font-medium mb-8">
                  East African hardwoods
                </h3>
                <a
                  href="#"
                  className="bg-[#165620] text-white text-xs border border-[#FFF6EE] uppercase flex items-center justify-center py-3 px-8 mb-4"
                >
                  Learn More
                </a>
              </div>
            </li>

            <li className="bg-[#FBEADC] text-[#165620] p-2">
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(22, 86, 32, 0), rgba(22, 86, 32, 0.6)), url('/images/tree_stump_gloves.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="h-40 w-full flex items-end justify-start mb-4"
              ></div>
              <div className="max-w-48 mx-auto">
                <h3 className="text-2xl font-medium mb-8">
                  East African hardwoods
                </h3>
                <a
                  href="#"
                  className="bg-[#165620] text-white text-xs border border-[#FFF6EE] uppercase flex items-center justify-center py-3 px-8 mb-4"
                >
                  Learn More
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NewsUpdateSection;
