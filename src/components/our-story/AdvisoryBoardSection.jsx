import React, { useState } from "react";
import teamData from "./teamData.json";

const AdvisoryBoardSection = () => {
  const [showAll, setShowAll] = useState(false);

  // Default showing 6 team members, or all if showAll is true
  const visibleMembers = showAll ? teamData : teamData.slice(0, 6);

  const handleViewAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section
      aria-labelledby="advisory-board-heading"
      className="my-16 sm:my-20 md:my-24 lg:px-8"
    >
      <div className="max-w-[1320px] mx-auto bg-[#165620] text-[#FBEADC] py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 lg:mb-8 text-[#FBEADC] text-start lg:text-center font-medium leading-tight uppercase">
            Advisory Board
          </h2>
          <p className="text-xl sm:text-2xl font-extralight mb-4 sm:mb-8 md:mb-12 text-start lg:text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 w-full">
            {visibleMembers.map((member) => (
              <li
                key={member.id}
                className="bg-[#FFF6EE] text-[#165620] border border-[#cc7e6b79] p-6"
              >
                <article>
                  <figure className="w-fit rounded-full overflow-hidden mb-4 border border-[#CC7F6B]">
                    <img src={member.imageUrl} alt="profile photo" />
                  </figure>
                  <h3 className="font-medium">
                    {member.name} from {member.country}
                  </h3>
                  <p className="max-w-56 mb-6 font-extralight leading-tight">
                    {member.role}
                  </p>

                  <a
                    className="text-[#CC7F6B] text-xs uppercase flex items-center gap-2"
                    href="#"
                  >
                    <p>Read more</p>
                    <img src="/icons/left_arr.svg" alt="Left arrow icon" />
                  </a>
                </article>
              </li>
            ))}
          </ul>

          <button
            onClick={handleViewAll}
            className="bg-[#165620] text-sm uppercase border border-[#FFF6EE] text-white self-center flex gap-2 items-center justify-center py-3 px-8"
          >
            <p>{showAll ? "Show Less" : "View All"}</p>
            <img src="icons/rght_arrow.svg" alt="rght arrow icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryBoardSection;
