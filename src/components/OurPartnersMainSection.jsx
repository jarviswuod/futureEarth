import React from "react";

const OurPartnersMainSection = () => {
  return (
    <section>
      <div>
        <h2>Our Partners</h2>
        <p>
          Instead of implementing a single component of a solution across
          multiple communities, as has been done in the past, we focus on
          delivering an integrated economic system to a community to help lift
          it to a sustainable minimum standard of living from which it can grow
          and progress independently. We have therefore identified and made
          collaborative efforts with organizations that share our vision and
          help steer it forward.
        </p>

        <ul className="divide-y divide-x grid grid-cols-[1fr_auto] items-center">
          <li>
            <div>
              <img src="/images/patner_one.png" alt="patner_one logo" />
            </div>
          </li>
          <li>
            <div>
              <h3>The Government of Malawi & CDI</h3>
              <p>
                This is chaired by H.E. Joyce Banda, who has dedicated her life
                to works that establish rural transformation in Africa.
              </p>
            </div>
          </li>

          <li>
            <div>
              <img src="/images/loowatt.png" alt="loowatt logo" />
            </div>
          </li>
          <li>
            <div>
              <h3>Loowatt</h3>
              <p>
                Because water access is a common issue faced in the areas we
                work in, we partnered with a company that offers waterless home
                sanitation solutions meeting WHO health guidelines.
              </p>
            </div>
          </li>
          <li>
            <div>
              <img src="/images/envirofit.png" alt="envirofit logo" />
            </div>
          </li>
          <li>
            <div>
              <h3>Envirofit</h3>
              <p>
                This is a non-profit organization. Envirofit is the world’s
                leading manufacturer of clean, efficient cookstoves that save on
                money and fuel.
              </p>
            </div>
          </li>
          <li>
            <div>
              <img src="/images/agricane.png" alt="agricane logo" />
            </div>
          </li>
          <li>
            <div>
              <h3>Agricane</h3>
              <p>
                We partnered with the leading pan-African agriculture management
                company to ensure the productivity of the fruit tree gardens
                with access to their international markets.
              </p>
            </div>
          </li>
          <li>
            <div>
              <img src="/images/bboxx.png" alt="bboxx logo" />
            </div>
          </li>
          <li>
            <div>
              <h3>Bboxx</h3>
              <p>
                We sought the services of the leading global supplier of PAYG
                solar home systems for affordable energy solutions for our
                houses.
              </p>
            </div>
          </li>
        </ul>

        <p>
          In future we hope to collaborate with delivery partners such as
          Adelphi, J&J, and Westfalia Fruit; with the financial backing of
          recognized financial institutions such as TDB, Standard Bank,
          Rockefeller Foundation, World Bank IFC, AgDevCo, and World Bank IBRD.
        </p>
        <p>
          Our most critical partners are the communities we hope to transform,
          and it is only by working in partnership with local leaders and our
          future residents that we will pilot, test and refine a model that
          truly works for them.
        </p>
      </div>
    </section>
  );
};

export default OurPartnersMainSection;
