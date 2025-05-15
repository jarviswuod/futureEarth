import React from "react";

import HeroSection from "../components/home/HeroSection";
import HouseDesignSection from "../components/home/HouseDesignSection";
import BenefitsSection from "../components/home/BenefitsSection";
import PathwaySection from "../components/home/PathwaySection";
import OnGoingProjectsSection from "../components/home/OngoingProjectsSection";
import OurPartnersSection from "../common/OurPartnersSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <HouseDesignSection />
      <BenefitsSection />
      <PathwaySection />
      <OnGoingProjectsSection />
      <OurPartnersSection />
    </>
  );
};

export default HomePage;
