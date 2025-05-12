import React from "react";

const Footer = () => {
  return (
    <footer class="bg-green-800 text-white">
      <div className="grid grid-cols-4">
        <ul className="flex flex-col gap-2">
          <li>
            <h2>HOME</h2>
          </li>
          <li>OUR VISION / PROMISE</li>
          <li>BENEFITS</li>
          <li>PATHWAY</li>
          <li>ONGOING PROJECTS</li>
          <li>PARTNERS</li>
        </ul>

        <ul className="flex flex-col gap-2">
          <li>
            <h2>SUSTAINABLE LIVING</h2>
          </li>
          <li>ABOUT SUSTAINABLE LIVING</li>
          <li>PRODUCT INTRODUCTION</li>
        </ul>

        <ul className="flex flex-col gap-2">
          <li>
            <h2>OUR STORY</h2>
          </li>
          <li>WHAT WE DO</li>
          <li>WHO WE ARE</li>
          <li>OUR PARTNERS</li>
          <li>NEWS UPDATES</li>
        </ul>

        <ul className="flex flex-col gap-2">
          <li>
            <h2>CONTACT US</h2>
          </li>
          <li>REGIONAL CONTACT US</li>
          <li>CONTACT US FORM</li>
        </ul>
      </div>
      <hr />

      <div></div>
    </footer>
  );
};

export default Footer;
