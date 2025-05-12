import React from "react";
import HomeHeroSection from "../components/HomeHeroSection";
import Header from "../common/Header";
import HomeHouseDesignSection from "../components/HomeHouseDesignSection";
import HomeBenefitsSection from "../components/HomeBenefitsSection";
import HomePathwaySection from "../components/HomePathwaySection";
import OnGoingProjectsSection from "../components/OnGoingProjectsSection";
import OurPartnersSection from "../components/OurPartnersSection";
import Footer from "../common/Footer";

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
