import React from "react";
import HeroSection from "../common/HeroSection";
import Header from "../common/Header";
import Footer from "../common/Footer";

const OurStoryPage = () => {
  return (
    <>
      <Header />
      <HeroSection
        titleName="Our Story"
        img_url="/images/women_with_watercans_on_their_heads.jpg"
      />
      <Footer />
    </>
  );
};

export default OurStoryPage;
