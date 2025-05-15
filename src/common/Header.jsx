import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#16562078] text-white px-4">
      <div className="max-w-[1320px] mx-auto flex items-center justify-between uppercase py-4">
        <a
          className="flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold gap-2"
          href="/"
        >
          <figure className="max-w-8 md:max-w-12">
            <img
              className=""
              src="/images/future_earth_logo.png"
              alt="future earth logo"
            />
          </figure>
          <figcaption className="hidden sm:block">Future Earth</figcaption>
        </a>

        <nav className="flex items-center gap-4 sm:gap-8 md:gap-12 text-xs">
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
          <figure className="w-12 sm:w-16 md:w-24">
            <img src="/icons/menu_icon.svg" alt="menu icon" />
          </figure>
        </nav>
      </div>
    </header>
  );
};

export default Header;
