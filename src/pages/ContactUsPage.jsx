import React from "react";
import HeroSection from "../common/HeroSection";
import ContactInformationSection from "../components/ContactInformationSection";

const ContactUsPage = () => {
  return (
    <>
      <HeroSection
        titleName="Contact Us"
        img_url="/images/sheep_grazing_next_to_house_structure.jpg"
      />
      <ContactInformationSection />
    </>
  );
};

export default ContactUsPage;
