import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#165620] text-[#DBDBDB]">
      <div className="max-w-[1320px] mx-auto pt-8 sm:pt-12 md:pt-16 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6 mb-12 text-sm sm:text-base font-extralight">
          <ul className="flex flex-col gap-1 sm:gap-2 md:gap-4 list-disc">
            <li className="list-none text-xl sm:text-2xl font-bold mb-4 -translate-x-6">
              <h2>HOME</h2>
            </li>
            <li>OUR VISION / PROMISE</li>
            <li>BENEFITS</li>
            <li>PATHWAY</li>
            <li>ONGOING PROJECTS</li>
            <li>PARTNERS</li>
          </ul>

          <ul className="flex flex-col gap-1 sm:gap-2 md:gap-4 list-disc">
            <li className="list-none text-xl sm:text-2xl font-bold mb-4 -translate-x-6">
              <h2>SUSTAINABLE LIVING</h2>
            </li>
            <li>ABOUT SUSTAINABLE LIVING</li>
            <li>PRODUCT INTRODUCTION</li>
          </ul>

          <ul className="flex flex-col gap-1 sm:gap-2 md:gap-4 list-disc">
            <li className="list-none text-xl sm:text-2xl font-bold mb-4 -translate-x-6">
              <h2>OUR STORY</h2>
            </li>
            <li>WHAT WE DO</li>
            <li>WHO WE ARE</li>
            <li>OUR PARTNERS</li>
            <li>NEWS UPDATES</li>
          </ul>

          <ul className="flex flex-col gap-1 sm:gap-2 md:gap-4 list-disc">
            <li className="list-none text-xl sm:text-2xl font-bold mb-4 -translate-x-6">
              <h2>CONTACT US</h2>
            </li>
            <li>REGIONAL CONTACT US</li>
            <li>CONTACT US FORM</li>
            <li className="mt-8 list-none col-start-4 col-end-5 grid grid-cols-[auto_1fr] gap-2 border border-[#fbeadc5b] p-12">
              <div>
                <img src="/icons/location_icon.svg" alt="Location icon" />
              </div>
              <p>
                Future Earth, Suite 380 1839 S Alma School Rd Mesa, AZ 85210 USA
                480 649 4127
              </p>
            </li>
          </ul>
        </div>

        <div className="flex max-sm:flex-col items-stretch sm:items-center justify-between gap-4 py-6 border-none sm:border-t border-[#fbeadc25] font-extralight w-full divide-y-2 divide-[#fbeadc85]">
          <ul className="flex items-center gap-3">
            <li className="mr-3">
              <p className="max-sm:uppercase max-sm:text-lg max-sm:font-bold">
                Get In Touch
              </p>
            </li>
            <li>
              <a href="#">
                <img src="/icons/linkedin_logo.svg" alt="linkedin logo" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/icons/whatsapp_logo.svg" alt="whatsapp logo" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/icons/facebook_logo.svg" alt="facebook logo" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/icons/twitter_logo.svg" alt="twitter logo" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/icons/youtube_logo.svg" alt="youtube logo" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/icons/instgram_logo.svg" alt="instgram logo" />
              </a>
            </li>
          </ul>
          <p className="text-sm max-sm:pt-2">
            @ 2021 Future Earth Sustainalbe Living
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
