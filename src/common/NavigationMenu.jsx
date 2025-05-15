import React, { useState } from "react";
import navData from "../assets/navLinks.json";

const NavSection = ({ title, links, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sectionId = `section-${title.toLowerCase().replace(/\s+/g, "-")}`;

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col gap-1 sm:gap-2 md:gap-4">
      <h3 className="text-xl sm:text-2xl font-bold flex items-center justify-between gap-4 mb-4 -translate-x-6">
        <span>{title}</span>
        <button
          className="block sm:hidden"
          onClick={toggleSection}
          aria-expanded={isOpen}
          aria-controls={sectionId}
        >
          <img
            className={isOpen ? "block" : "hidden"}
            src="/icons/minus_icon.svg"
            alt={isOpen ? "Collapse section" : "Expand section"}
          />
          <img
            className={isOpen ? "hidden" : "block"}
            src="/icons/addition_icon.svg"
            alt={isOpen ? "Collapse section" : "Expand section"}
          />
        </button>
      </h3>
      <ul
        id={sectionId}
        className={`${
          isOpen ? "flex" : "hidden"
        } sm:flex flex-col gap-1 sm:gap-2 md:gap-4 list-disc`}
      >
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              className="hover:text-white transition-colors duration-200"
              onClick={closeMenu}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const NavigationMenu = ({ isOpen, closeMenu }) => {
  if (!isOpen) return null;

  return (
    <nav
      id="main-navigation"
      className="fixed top-16 left-0 w-full bg-black text-[#DBDBDB] z-40"
      aria-label="Main navigation"
    >
      <div className="max-w-[1320px] mx-auto py-8 sm:py-12 md:py-16 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 uppercase gap-4 gap-y-2 sm:gap-y-6 mb-12 text-sm sm:text-base font-extralight">
          {navData.navigation.map((section, index) => (
            <NavSection
              key={index}
              title={section.title}
              links={section.links}
              closeMenu={closeMenu}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;
