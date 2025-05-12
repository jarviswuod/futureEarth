import React from "react";

import Header from "../common/Header";
import Footer from "../common/Footer";
import HeroSection from "../common/HeroSection";
import WhoWeAreSection from "../components/WhoWeAreSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import OurTeamSection from "../components/OurTeamSection";
import AdvisoryBoardSection from "../components/AdvisoryBoardSection";
import OurPartnersMainSection from "../components/OurPartnersMainSection";
import NewsUpdateSection from "../components/NewsUpdateSection";

const OurStoryPage = () => {
  return (
    <>
      <Header />
      <HeroSection
        titleName="Our Story"
        img_url="/images/women_with_watercans_on_their_heads.jpg"
      />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <OurTeamSection />
      <AdvisoryBoardSection />
      <OurPartnersMainSection />
      <NewsUpdateSection />
      <Footer />
    </>
  );
};

export default OurStoryPage;
