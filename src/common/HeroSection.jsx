import React from "react";

const HeroSection = ({ titleName, img_url }) => {
  return (
    <section
      style={{
        backgroundImage: `url(${img_url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-[30rem] w-full text-white grid items-center justify-center"
    >
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-3xl text-bold">{titleName}</h1>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default HeroSection;
