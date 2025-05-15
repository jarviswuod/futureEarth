import React from "react";

import footerNavData from "../assets/footerNavData.json";
import SocialLinks from "./SocialLinks";

const NavigationSection = ({ title, links }) => (
  <nav className="flex flex-col gap-4 md:gap-6 text-lg font-extralight">
    <h2 className="text-xl sm:text-2xl font-bold mb-4 -translate-x-6">
      {title}
    </h2>
    <ul className="list-disc flex gap-2 md:gap-4 flex-col">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url} className="hover:text-white transition-colors">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

const Footer = () => {
  return (
    <footer className="bg-[#165620] text-[#DBDBDB]" aria-label="Site footer">
      <div className="max-w-[1320px] mx-auto pt-8 sm:pt-12 md:pt-16 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6 mb-12 text-sm sm:text-base font-extralight">
          {footerNavData.slice(0, 3).map((section, index) => (
            <NavigationSection
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}

          {/* Special handling for contact section with address */}
          <div className="flex flex-col gap-4 md:gap-6 text-lg font-extralight">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 -translate-x-6">
              {footerNavData[3].title}
            </h2>
            <ul className="list-disc flex gap-2 md:gap-4 flex-col">
              {footerNavData[3].links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
              <li className="mt-8 list-none grid grid-cols-[auto_1fr] gap-2 border border-[#fbeadc5b] p-12">
                <div>
                  <img src="/icons/location_icon.svg" alt="Location icon" />
                </div>
                <address className="not-italic">
                  Future Earth, Suite 380 1839 S Alma School Rd Mesa, AZ 85210
                  USA
                  <br />
                  <a
                    href="tel:+14806494127"
                    className="hover:text-white transition-colors"
                  >
                    480 649 4127
                  </a>
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex max-sm:flex-col items-stretch sm:items-center justify-between gap-4 py-6 border-none sm:border-t border-[#fbeadc25] font-extralight w-full max-sm:divide-y-2 divide-[#fbeadc85]">
          <SocialLinks />
          <p className="text-sm max-sm:pt-2">
            &copy; {new Date().getFullYear()} Future Earth Sustainable Living
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
