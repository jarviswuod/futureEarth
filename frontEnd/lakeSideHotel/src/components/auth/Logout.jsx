import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Logout = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const isLoggedIn = localStorage.getItem("userId");

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userRole");
    localStorage.removeItem("token");

    setSuccessMessage("You have been looged out successfully!");
    setErrorMessage("");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    isLoggedIn && (
      <>
        <p>Are you sure you want to log out</p>
        <div>
          <Link className="dropdown-item" to={"/"}>
            No
          </Link>
        </div>
        <button className="dropdown-item" onClick={handleLogout}>
          Yes
        </button>
      </>
    )
  );
};

export default Logout;
