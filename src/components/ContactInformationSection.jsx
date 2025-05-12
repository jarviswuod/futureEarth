import React from "react";

const ContactInformationSection = () => {
  return (
    <section>
      <div className="grid grid-cols-[1fr_2fr] gap-4">
        <div className="bg-green-900 text-white">
          <h2>Regional Contacts </h2>
          <ul>
            <li className="grid grid-cols-[1fr_auto] gap-4">
              <div>
                <img src="/icons/location_icon.svg" alt="location icon" />
              </div>
              <div className="flex flex-col gap-2">
                <h3>America</h3>
                <p>Future Earth, Suite 3801839 S Alma School Rd</p>
                <p>Mesa, AZ 85210 USA</p>
                <p>480 649 4127</p>
              </div>
            </li>

            <li className="grid grid-cols-[1fr_auto] gap-4">
              <div>
                <img src="/icons/location_icon.svg" alt="location icon" />
              </div>
              <div className="flex flex-col gap-2">
                <h3>Mexico, South America</h3>
                <p>Place: Gracious Rd, T Buiding, 3rd Floor</p>
                <p>Email: jambo@futureearth1.com</p>
                <p>Phone: +33 345 678 123</p>
              </div>
            </li>

            <li className="grid grid-cols-[1fr_auto] gap-4">
              <div>
                <img src="/icons/location_icon.svg" alt="location icon" />
              </div>
              <div className="flex flex-col gap-2">
                <h3>Malawi, Africa</h3>
                <p>Place: Gracious Rd, T Buiding, 3rd Floor</p>
                <p>Email: jambo@futureearth1.com</p>
                <p>Phone: +33 345 678 123</p>
              </div>
            </li>
          </ul>
        </div>

        <form action="" method="post" className="flex flex-col gap-4 w-full">
          <h2>Talk to Us</h2>
          <label htmlFor="full_name">
            <input
              type="text"
              name="full_name"
              id="full_name"
              placeholder="Full name"
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
            />
          </label>
          <label htmlFor="subject">
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
            />
          </label>
          <label htmlFor="message">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
          </label>

          <label htmlFor="captcha">
            <h3>CAPTCHA</h3>

            <p className="flex flex-col gap-4">
              <span>
                This question is for testing whether or not you are a human
                visitor and to prevent automated spam submissions.
              </span>
              <span>Math question *</span>
              <span>6 + 11 =</span>
            </p>
            <input type="text" name="captcha" id="captcha" />
          </label>
        </form>
      </div>
    </section>
  );
};

export default ContactInformationSection;
