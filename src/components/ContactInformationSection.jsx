import React from "react";

const ContactInformationSection = () => {
  return (
    <section className="my-24 px-8">
      <div className="max-w-[1320px] bg-[#FBEADC] mx-auto grid grid-cols-[1fr_2fr]">
        <div className="bg-[#165620] text-white text-base font-light py-12">
          <div className="max-w-xs mx-auto">
            <h2 className="text-2xl font-bold mb-4">Regional Contacts</h2>
            <ul className="space-y-6">
              <li className="grid grid-cols-[auto_1fr] gap-4">
                <div>
                  <img src="/icons/location_icon.svg" alt="location icon" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold">America</h3>
                  <p>Future Earth, Suite 380</p>
                  <p>1839 S Alma School Rd</p>
                  <p>Mesa, AZ 85210 USA</p>
                  <p>480 649 4127</p>
                </div>
              </li>

              <li className="grid grid-cols-[auto_1fr] gap-4">
                <div>
                  <img src="/icons/location_icon.svg" alt="location icon" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold">Mexico, South America</h3>
                  <p>Place: Gracious Rd, T Buiding, 3rd Floor</p>
                  <p>Email: jambo@futureearth1.com</p>
                  <p>Phone: +33 345 678 123</p>
                </div>
              </li>

              <li className="grid grid-cols-[auto_1fr] gap-4">
                <div>
                  <img src="/icons/location_icon.svg" alt="location icon" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold">Malawi, Africa</h3>
                  <p>Place: Gracious Rd, T Buiding, 3rd Floor</p>
                  <p>Email: jambo@futureearth1.com</p>
                  <p>Phone: +33 345 678 123</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <form
          action=""
          method="post"
          className="flex flex-col gap-4 max-w-2xl mx-auto py-12 text-base"
        >
          <h2 className="text-2xl font-bold mb-4">Talk to Us</h2>
          <label htmlFor="full_name">
            <input
              className="p-2 px-4 bg-transparent border border-[#165620] text-[#165620] placeholder:text-[#444] placeholder:opacity-75 focus:outline-none focus:border-black focus:ring-0 w-full"
              type="text"
              name="full_name"
              id="full_name"
              placeholder="Full name"
            />
          </label>
          <label htmlFor="email">
            <input
              className="p-2 px-4 bg-transparent border border-[#165620] text-[#165620] placeholder:text-[#444] placeholder:opacity-75 focus:outline-none focus:border-black focus:ring-0 w-full"
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
            />
          </label>
          <label htmlFor="subject">
            <input
              className="p-2 px-4 bg-transparent border border-[#165620] text-[#165620] placeholder:text-[#444] placeholder:opacity-75 focus:outline-none focus:border-black focus:ring-0 w-full"
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
            />
          </label>
          <label htmlFor="message">
            <textarea
              className="p-2 px-4 bg-transparent border border-[#165620] text-[#165620] placeholder:text-[#444] placeholder:opacity-75 focus:outline-none focus:border-black focus:ring-0 w-full"
              name="message"
              id="message"
              cols="30"
              rows="4"
              placeholder="Message"
            ></textarea>
          </label>

          <div className="border border-[#165620] placeholder:text-[#444]">
            <h3 className="bg-[#165620] text-white p-2 px-4">CAPTCHA</h3>

            <div className="p-4">
              <p className="flex flex-col gap-4 py-2 opacity-75">
                <span>
                  This question is for testing whether or not you are a human
                  visitor and to prevent automated spam submissions.
                </span>
                <span className="font-bold">Math question *</span>
                <span>6 + 11 =</span>
              </p>
              <label htmlFor="captcha">
                <input
                  className="p-2 px-4 bg-transparent border border-[#165620] text-[#165620] placeholder:text-[#444] placeholder:opacity-75 focus:outline-none focus:border-black focus:ring-0 w-full"
                  type="text"
                  name="captcha"
                  id="captcha"
                />
              </label>
            </div>
          </div>

          <button className="max-w-48 self-end bg-[#165620] uppercase text-white flex gap-2 items-center justify-center py-4 px-8">
            <p>Send</p>
            <img src="icons/rght_arrow.svg" alt="rght arrow icon" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactInformationSection;
