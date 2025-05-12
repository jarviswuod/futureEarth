import React from "react";

import Header from "../common/Header";
import Footer from "../common/Footer";

import HomeHeroSection from "../components/HomeHeroSection";
import HomeHouseDesignSection from "../components/HomeHouseDesignSection";
import HomeBenefitsSection from "../components/HomeBenefitsSection";
import HomePathwaySection from "../components/HomePathwaySection";
import OnGoingProjectsSection from "../components/OnGoingProjectsSection";
import OurPartnersSection from "../components/OurPartnersSection";

const HomePage = () => {
  return (
    <>
      <Header />
      <HomeHeroSection />
      <HomeHouseDesignSection />
      <HomeBenefitsSection />
      <HomePathwaySection />
      <OnGoingProjectsSection />
      <OurPartnersSection />
      <Footer />
    </>
  );
};

export default HomePage;
