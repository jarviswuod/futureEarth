import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Logout = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.handleLogout();
    window.location.reload();
    navigate("/", {
      state: { message: "You have been looged out successfully!" },
    });
  };
  const isLoggedIn = auth.user !== null;

  return isLoggedIn ? (
    <>
      <li>
        <Link className="dropdown-item" to={profile}>
          Profile
        </Link>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <button className="dropdown-item" onClick={handleLogout}>
        Logout
      </button>
    </>
  ) : (
    <></>
  );
};

export default Logout;
