import React from "react";

import HeroSection from "../common/HeroSection";

import AboutSustainableLivingSection from "../components/sustainable-living/AboutSustainableLivingSection";
import ProductIntroductionSection from "../components/sustainable-living/ProductIntroductionSection";
import OurPartnersSection from "../common/OurPartnersSection";

const SustainableLivingPage = () => {
  return (
    <>
      <HeroSection
        titleName="Sustainable Living"
        img_url="/images/soil_carried_by_hands.jpg"
      />
      <AboutSustainableLivingSection />
      <ProductIntroductionSection />
      <OurPartnersSection />
    </>
  );
};

export default SustainableLivingPage;
