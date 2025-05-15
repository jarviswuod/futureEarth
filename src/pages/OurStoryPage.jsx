import React from "react";

import HeroSection from "../common/HeroSection";
import WhoWeAreSection from "../components/our-story/WhoWeAreSection";
import WhatWeDoSection from "../components/our-story/WhatWeDoSection";
import OurTeamSection from "../components/our-story/OurTeamSection";
import AdvisoryBoardSection from "../components/our-story/AdvisoryBoardSection";
import OurPartnersMainSection from "../components/our-story/OurPartnersMainSection";
import NewsUpdateSection from "../components/our-story/NewsUpdateSection";

const OurStoryPage = () => {
  return (
    <>
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
    </>
  );
};

export default OurStoryPage;
