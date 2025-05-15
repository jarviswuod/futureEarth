import React from "react";
import newsData from "./newsData.json";

const NewsUpdateSection = () => {
  return (
    <section
      aria-labelledby="news-update-heading"
      className="my-16 sm:my-20 md:my-24 xl:px-8"
    >
      <div className="max-w-[1320px] mx-auto bg-[#165620] text-[#FBEADC] py-12 px-4 grid grid-cols-1 lg:grid-cols-[auto_1fr] items-center">
        <div className="lg:max-w-md lg:px-12 xl:px-20 lg:py-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 lg:mb-8 font-extrabold leading-tight uppercase">
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

        <div className="xl:pr-16">
          <div className="hidden lg:block place-self-end self-start space-x-4 py-8">
            <button>
              <img src="/icons/left_arrow_icon.svg" alt="left Arrow icon" />
            </button>
            <button>
              <img src="/icons/right_arrow_icon.svg" alt="right Arrow icon" />
            </button>
          </div>
          <ul className="grid grid-cols-3 gap-2 sm:gap-4">
            {newsData.map((news, index) => (
              <li
                key={index}
                className="bg-[#FBEADC] text-[#165620] p-1 sm:p-2"
              >
                <article>
                  <div
                    style={{
                      backgroundImage: `linear-gradient(to bottom, rgba(22, 86, 32, 0), rgba(22, 86, 32, 0.6)), url(${news.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="h-40 w-full flex items-end justify-start mb-4"
                  ></div>
                  <div className="max-w-48 mx-auto">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6 md:mb-8">
                      {news.title}
                    </h3>
                    <a
                      href="#"
                      className="bg-[#165620] text-white text-xs border border-[#FFF6EE] uppercase flex items-center justify-center py-3 px-8 mb-4"
                      aria-label={`Learn more about ${news.title}`}
                    >
                      Learn More
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NewsUpdateSection;
