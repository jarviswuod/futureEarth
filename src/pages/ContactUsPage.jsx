import React from "react";
import HeroSection from "../common/HeroSection";
import Header from "../common/Header";
import Footer from "../common/Footer";
import ContactInformationSection from "../components/ContactInformationSection";

const ContactUsPage = () => {
  return (
    <>
      <Header />
      <HeroSection
        titleName="Contact Us"
        img_url="/images/sheep_grazing_next_to_house_structure.jpg"
      />
      <ContactInformationSection />
      <Footer />
    </>
  );
};

export default ContactUsPage;
