import React from "react";

const OurPartnersMainSection = () => {
  return (
    <section className="my-16">
      <div className="max-w-[1320px] mx-auto bg-[#FBEADC] py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col">
          <h2 className="text-6xl text-[#165620] font-extrabold leading-tight uppercase mb-8">
            Our Partners
          </h2>
          <p className="text-2xl font-extralight mb-12">
            Instead of implementing a single component of a solution across
            multiple communities, as has been done in the past, we focus on
            delivering an integrated economic system to a community to help lift
            it to a sustainable minimum standard of living from which it can
            grow and progress independently. We have therefore identified and
            made collaborative efforts with organizations that share our vision
            and help steer it forward.
          </p>

          <ul className="divide-y-2 divide-[#165620] mb-16 text-2xl font-extralight">
            <li className="grid grid-cols-[1fr_4fr] items-center justify-center divide-x-2 divide-[#165620]">
              <div className="px-8 flex items-center justify-center">
                <img src="/images/patner_one.png" alt="patner_one logo" />
              </div>

              <div className="p-12">
                <h3 className="mb-2 text-[#165620] font-bold">
                  The Government of Malawi & CDI
                </h3>
                <p>
                  This is chaired by H.E. Joyce Banda, who has dedicated her
                  life to works that establish rural transformation in Africa.
                </p>
              </div>
            </li>

            <li className="grid grid-cols-[1fr_4fr] items-center justify-center divide-x-2 divide-[#165620]">
              <div className="px-8 flex items-center justify-center">
                <img src="/images/loowatt.png" alt="loowatt logo" />
              </div>

              <div className="p-12">
                <h3 className="mb-2 text-[#165620] font-bold">Loowatt</h3>
                <p>
                  Because water access is a common issue faced in the areas we
                  work in, we partnered with a company that offers waterless
                  home sanitation solutions meeting WHO health guidelines.
                </p>
              </div>
            </li>

            <li className="grid grid-cols-[1fr_4fr] items-center justify-center divide-x-2 divide-[#165620]">
              <div className="px-8 flex items-center justify-center">
                <img src="/images/envirofit.png" alt="envirofit logo" />
              </div>

              <div className="p-12">
                <h3 className="mb-2 text-[#165620] font-bold">Envirofit</h3>
                <p>
                  This is a non-profit organization. Envirofit is the world’s
                  leading manufacturer of clean, efficient cookstoves that save
                  on money and fuel.
                </p>
              </div>
            </li>

            <li className="grid grid-cols-[1fr_4fr] items-center justify-center divide-x-2 divide-[#165620]">
              <div className="px-8 flex items-center justify-center">
                <img src="/images/agricane.png" alt="agricane logo" />
              </div>

              <div className="p-12">
                <h3 className="mb-2 text-[#165620] font-bold">Agricane</h3>
                <p>
                  We partnered with the leading pan-African agriculture
                  management company to ensure the productivity of the fruit
                  tree gardens with access to their international markets.
                </p>
              </div>
            </li>

            <li className="grid grid-cols-[1fr_4fr] items-center justify-center divide-x-2 divide-[#165620]">
              <div className="px-8 flex items-center justify-center">
                <img src="/images/bboxx.png" alt="bboxx logo" />
              </div>

              <div className="p-12">
                <h3 className="mb-2 text-[#165620] font-bold">Bboxx</h3>
                <p>
                  We sought the services of the leading global supplier of PAYG
                  solar home systems for affordable energy solutions for our
                  houses.
                </p>
              </div>
            </li>
          </ul>

          <p className="text-2xl font-extralight mb-8">
            In future we hope to collaborate with delivery partners such as
            Adelphi, J&J, and Westfalia Fruit; with the financial backing of
            recognized financial institutions such as TDB, Standard Bank,
            Rockefeller Foundation, World Bank IFC, AgDevCo, and World Bank
            IBRD.
          </p>
          <p className="text-2xl font-extralight mb-12">
            Our most critical partners are the communities we hope to transform,
            and it is only by working in partnership with local leaders and our
            future residents that we will pilot, test and refine a model that
            truly works for them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurPartnersMainSection;
