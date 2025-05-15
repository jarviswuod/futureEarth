import React from "react";

const HeroSection = ({ titleName, img_url }) => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(to right, rgba(22, 86, 32, 0.9), rgba(22, 86, 32, 0)), url(${img_url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-[30rem] w-full text-white flex items-end justify-start"
    >
      <div className="max-w-[1320px] mx-auto w-full py-12 px-4">
        <h1 className="max-w-xl text-4xl sm:text-5xl lg:text-6xl mb-6 lg:mb-8 font-medium leading-tight uppercase">
          {titleName}
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
