import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>NavBar</li>
        <li>NavBar</li>
        <li>NavBar</li>
        <p>
          <Link to="/existing-rooms">Add room</Link>
        </p>
        <p>
          <Link to="/existing-rooms">Rooms</Link>
        </p>
      </ul>
    </div>
  );
};

export default NavBar;
