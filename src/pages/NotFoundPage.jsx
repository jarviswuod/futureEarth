import React from "react";
import HeroSection from "../common/HeroSection";
import Header from "../common/Header";
import Footer from "../common/Footer";
import ContactInformationSection from "../components/ContactInformationSection";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <section
        aria-labelledby="not-found-page-heading"
        className="h-screen py-28 bg-[#FBEADC] text-[#165620] px-4 sm:px-8"
      >
        <div className="max-w-[1320px] mx-auto  flex flex-col items-center justify-center space-y-8 md:space-y-16">
          <figure>
            <img
              src="/images/error_page_not_found.png"
              alt="error page not found"
            />
          </figure>
          <p className="mb-4 sm:mb-8 text-lg sm:text-xl md:text-2xl font-extralight text-center">
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="bg-[#165620] max-sm:text-xs mx-auto place-self-center uppercase text-white flex gap-2 items-center justify-center py-4 px-8"
          >
            <p>Home Page</p>
            <img src="icons/rght_arrow.svg" alt="right arrow" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
