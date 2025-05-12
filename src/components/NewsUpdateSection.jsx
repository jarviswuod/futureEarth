import React from "react";

const NewsUpdateSection = () => {
  return (
    <section>
      <div className="grid grid-cols-[1fr_2fr]">
        <div>
          <h2>News Updates</h2>
          <p>
            Find all the information and updates about our past, present and
            future projects here.
          </p>
          <a href="#">
            <span>View All</span>
            <img src="/icons/left_arrow.svg" alt="left arrow icon" />
          </a>
        </div>
        <div>
          <div>
            <button>
              <img src="/icons/left_arrow.svg" alt="left Arrow icon" />
            </button>
            <button>
              <img src="/icons/right_arrow.svg" alt="right Arrow icon" />
            </button>
          </div>
          <ul className="grid grid-cols-3 gap-4">
            <li>
              <div>
                <img
                  src="/images/boards_piled_together.png"
                  alt="boards piled together"
                />
              </div>
              <h3>East African hardwoods</h3>
              <a href="#">Learn More</a>
            </li>

            <li>
              <div>
                <img
                  src="/images/soil_carried_by_hands.jpg"
                  alt="soil carried by hands"
                />
              </div>
              <h3>East African hardwoods</h3>
              <a href="#">Learn More</a>
            </li>

            <li>
              <div>
                <img
                  src="/images/tree_stump_gloves.jpg"
                  alt="tree stump gloves"
                />
              </div>
              <h3>East African hardwoods</h3>
              <a href="#">Learn More</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NewsUpdateSection;
