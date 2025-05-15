import React from "react";

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
