import { useState } from "react";

import Header from "../common/Header";
import Footer from "../common/Footer";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
