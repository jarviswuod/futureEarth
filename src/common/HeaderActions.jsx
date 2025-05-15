import React from "react";

const HeaderActions = ({ menuOpen, toggleMenu }) => {
  return (
    <div>
      {menuOpen ? (
        <button
          className="flex items-center justify-center gap-2 transition-all hover:text-[#FFE35A]"
          onClick={toggleMenu}
          aria-expanded="true"
          aria-controls="main-navigation"
        >
          <span>Exit Menu</span>
          <img
            className="max-w-8"
            src="/icons/right_arrow_icon.svg"
            alt="Close menu"
          />
        </button>
      ) : (
        <nav
          className="flex items-center gap-4 sm:gap-8 md:gap-12 text-xs"
          aria-label="Quick actions"
        >
          <ul className="flex gap-2 sm:gap-4">
            <li>
              <a className="bg-[#51A501] max-sm:px-1 p-2" href="#">
                Get an irise home
              </a>
            </li>
            <li>
              <a
                className="bg-[#FFE35A] text-[#165620] max-sm:px-1 p-2"
                href="#"
              >
                Support
              </a>
            </li>
          </ul>
          <button
            className="w-12 sm:w-16 md:w-24 cursor-pointer"
            onClick={toggleMenu}
            aria-expanded="false"
            aria-controls="main-navigation"
            aria-label="Open menu"
          >
            <img src="/icons/menu_icon.svg" alt="Menu" />
          </button>
        </nav>
      )}
    </div>
  );
};

export default HeaderActions;
