import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <p>Oops page not found</p>
      <Link to={"/"}>Back home</Link>
    </div>
  );
};

export default NotFoundPage;
