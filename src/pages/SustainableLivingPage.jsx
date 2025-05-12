import React from "react";

import Header from "../common/Header";
import Footer from "../common/Footer";
import HeroSection from "../common/HeroSection";

import AboutSustainableLivingSection from "../components/AboutSustainableLivingSection";
import ProductIntroductionSection from "../components/ProductIntroductionSection";
import OurPartnersSection from "../components/OurPartnersSection";

const SustainableLivingPage = () => {
  return (
    <>
      <Header />
      <HeroSection
        titleName="Sustainable Living"
        img_url="/images/soil_carried_by_hands.jpg"
      />
      <AboutSustainableLivingSection />
      <ProductIntroductionSection />
      <OurPartnersSection />
      <Footer />
    </>
  );
};

export default SustainableLivingPage;
