import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#16562078] text-white px-4">
      <div className="max-w-[1320px] mx-auto flex items-center justify-between uppercase py-4">
        <a
          className="flex items-center justify-center text-2xl font-bold gap-2"
          href="/"
        >
          <figure className="max-w-12">
            <img
              className=""
              src="/images/future_earth_logo.png"
              alt="future earth logo"
            />
          </figure>
          <figcaption className="">Future Earth</figcaption>
        </a>

        <nav className="flex items-center gap-12 text-xs">
          <ul className="flex gap-4">
            <li>
              <a className="bg-[#51A501] p-2" href="#">
                Get an irise home
              </a>
            </li>
            <li>
              <a className="bg-[#FFE35A] text-[#165620] p-2" href="#">
                Support
              </a>
            </li>
          </ul>
          <figure className="w-24">
            <img src="/icons/menu_icon.svg" alt="menu icon" />
          </figure>
        </nav>
      </div>
    </header>
  );
};

export default Header;
