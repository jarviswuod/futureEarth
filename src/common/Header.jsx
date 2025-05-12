import React from "react";

const Header = () => {
  return (
    <header class="bg-[#16562078]">
      <div class="flex items-center justify-between p-4">
        <h1 class="uppercase flex items-center text-2xl font-bold ">
          <img src="/images/future_earth_logo.png" alt="future earth logo" />
          <span>Future Earth</span>
        </h1>

        <nav class="flex space-x-4">
          <ul class="flex ">
            <li>
              <a href="#">Get an irise home</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
          <p>
            <img src="/icons/menu_icon.svg" alt="menu icon" />
          </p>
        </nav>
      </div>
    </header>
  );
};

export default Header;
