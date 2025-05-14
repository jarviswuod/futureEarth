import React from "react";

const OurTeamSection = () => {
  return (
    <section className="my-16">
      <div className="max-w-[1320px] mx-auto bg-[#FBEADC] py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col">
          <h2 className="text-6xl text-[#165620] text-center font-extrabold leading-tight uppercase mb-8">
            Our Team
          </h2>
          <p className="text-2xl font-extralight mb-12 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>

          <ul className="grid grid-cols-3 gap-8 mb-16 w-full">
            <li className="bg-[#FFF6EE] text-[#165620] border border-[#CC7F6B] p-6">
              <div className="w-fit rounded-full overflow-hidden mb-4 border border-[#CC7F6B]">
                <img src="/images/profile_photo.jpg" alt="profile photo" />
              </div>
              <h3 className="font-bold">Niccolò Miranda from Italy</h3>
              <p className="max-w-56 mb-6 font-light">
                Creative Director / Interactive Designer & Developer
              </p>

              <a className="text-[#CC7F6B] flex items-center gap-2" href="#">
                <p>Read more</p>
                <img src="/icons/left_arr.svg" alt="Left arrow icon" />
              </a>
            </li>

            <li className="bg-[#FFF6EE] text-[#165620] border border-[#CC7F6B] p-6">
              <div className="w-fit rounded-full overflow-hidden mb-4 border border-[#CC7F6B]">
                <img src="/images/profile_photo.jpg" alt="profile photo" />
              </div>
              <h3 className="font-bold">Niccolò Miranda from Italy</h3>
              <p className="max-w-56 mb-6 font-light">
                Creative Director / Interactive Designer & Developer
              </p>

              <a className="text-[#CC7F6B] flex items-center gap-2" href="#">
                <p>Read more</p>
                <img src="/icons/left_arr.svg" alt="Left arrow icon" />
              </a>
            </li>
            <li className="bg-[#FFF6EE] text-[#165620] border border-[#CC7F6B] p-6">
              <div className="w-fit rounded-full overflow-hidden mb-4 border border-[#CC7F6B]">
                <img src="/images/profile_photo.jpg" alt="profile photo" />
              </div>
              <h3 className="font-bold">Niccolò Miranda from Italy</h3>
              <p className="max-w-56 mb-6 font-light">
                Creative Director / Interactive Designer & Developer
              </p>

              <a className="text-[#CC7F6B] flex items-center gap-2" href="#">
                <p>Read more</p>
                <img src="/icons/left_arr.svg" alt="Left arrow icon" />
              </a>
            </li>

            <li className="bg-[#FFF6EE] text-[#165620] border border-[#CC7F6B] p-6">
              <div className="w-fit rounded-full overflow-hidden mb-4 border border-[#CC7F6B]">
                <img src="/images/profile_photo.jpg" alt="profile photo" />
              </div>
              <h3 className="font-bold">Niccolò Miranda from Italy</h3>
              <p className="max-w-56 mb-6 font-light">
                Creative Director / Interactive Designer & Developer
              </p>

              <a className="text-[#CC7F6B] flex items-center gap-2" href="#">
                <p>Read more</p>
                <img src="/icons/left_arr.svg" alt="Left arrow icon" />
              </a>
            </li>

            <li className="bg-[#FFF6EE] text-[#165620] border border-[#CC7F6B] p-6">
              <div className="w-fit rounded-full overflow-hidden mb-4 border border-[#CC7F6B]">
                <img src="/images/profile_photo.jpg" alt="profile photo" />
              </div>
              <h3 className="font-bold">Niccolò Miranda from Italy</h3>
              <p className="max-w-56 mb-6 font-light">
                Creative Director / Interactive Designer & Developer
              </p>

              <a className="text-[#CC7F6B] flex items-center gap-2" href="#">
                <p>Read more</p>
                <img src="/icons/left_arr.svg" alt="Left arrow icon" />
              </a>
            </li>

            <li className="bg-[#FFF6EE] text-[#165620] border border-[#CC7F6B] p-6">
              <div className="w-fit rounded-full overflow-hidden mb-4 border border-[#CC7F6B]">
                <img src="/images/profile_photo.jpg" alt="profile photo" />
              </div>
              <h3 className="font-bold">Niccolò Miranda from Italy</h3>
              <p className="max-w-56 mb-6 font-light">
                Creative Director / Interactive Designer & Developer
              </p>

              <a className="text-[#CC7F6B] flex items-center gap-2" href="#">
                <p>Read more</p>
                <img src="/icons/left_arr.svg" alt="Left arrow icon" />
              </a>
            </li>
          </ul>

          <button className="bg-[#165620] uppercase text-white self-center flex gap-2 items-center justify-center py-3 px-8">
            <p>View All</p>
            <img src="icons/rght_arrow.svg" alt="rght arrow icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
