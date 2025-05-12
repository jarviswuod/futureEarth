import React from "react";

const SustainableLivingHeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/images/soil_carried_by_hands.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-[30rem] w-full text-white grid items-center justify-center"
    >
      <div class="grid grid-cols-2">
        <div>
          <h1 className="text-3xl text-bold">SUSTAINABLE LIVING</h1>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default SustainableLivingHeroSection;
