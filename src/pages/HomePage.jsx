import React from "react";

import HomeHeroSection from "../components/HomeHeroSection";
import HomeHouseDesignSection from "../components/HomeHouseDesignSection";
import HomeBenefitsSection from "../components/HomeBenefitsSection";
import HomePathwaySection from "../components/HomePathwaySection";
import OnGoingProjectsSection from "../components/OnGoingProjectsSection";
import OurPartnersSection from "../components/OurPartnersSection";

const HomePage = () => {
  return (
    <>
      <HomeHeroSection />
      <HomeHouseDesignSection />
      <HomeBenefitsSection />
      <HomePathwaySection />
      <OnGoingProjectsSection />
      <OurPartnersSection />
    </>
  );
};

export default HomePage;
