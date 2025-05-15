import React, { useState, useEffect } from "react";
import NavigationMenu from "./NavigationMenu";
import HeaderActions from "./HeaderActions";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        !event.target.closest("header") &&
        !event.target.closest("nav#main-navigation")
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full bg-[#16562078]
         text-white px-4 z-50"
        role="banner"
      >
        <div className="max-w-[1320px] mx-auto flex items-center justify-between uppercase py-4">
          <a
            className="flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold gap-2"
            href="/"
            aria-label="Future Earth Home"
          >
            <figure className="max-w-8 md:max-w-12">
              <img
                src="/images/future_earth_logo.png"
                alt="Future Earth logo"
              />
            </figure>
            <figcaption className="hidden sm:block">Future Earth</figcaption>
          </a>

          <HeaderActions menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </div>
      </header>

      <NavigationMenu isOpen={menuOpen} closeMenu={closeMenu} />

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 -mt-20"
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;
