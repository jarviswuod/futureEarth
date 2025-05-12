import React from "react";

import Header from "../common/Header";
import Footer from "../common/Footer";
import SustainableLivingHeroSection from "../components/SustainableLivingHeroSection";
import ProductIntroductionSection from "../components/ProductIntroductionSection";
import OurPartnersSection from "../components/OurPartnersSection";

const SustainableLivingPage = () => {
  return (
    <>
      <Header />
      <SustainableLivingHeroSection />
      <ProductIntroductionSection />
      <OurPartnersSection />
      <Footer />
    </>
  );
};

export default SustainableLivingPage;
