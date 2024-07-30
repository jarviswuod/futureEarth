import React from "react";
import { Navigate, NavigationType, useLocation } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const user = localStorage.getItem("userId");
  const location = useLocation();

  if (!user) {
    // return <Navigate to={'/login'} state={path:location.pathname}/>
  }
  return children;
};

export default RequiredAuth;
