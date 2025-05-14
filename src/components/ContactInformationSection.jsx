import React, { useState } from "react";

const ContactInformationSection = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    captcha: "",
  });

  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.full_name.trim()) {
      newErrors.full_name = "Name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation (Kenyan format: 254 728 000 000)
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^254\s\d{3}\s\d{3}\s\d{3}$/.test(formData.phone)) {
      newErrors.phone =
        "Please enter a valid Kenyan phone number (254 728 000 000)";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    // CAPTCHA validation
    if (!formData.captcha.trim()) {
      newErrors.captcha = "Please solve the CAPTCHA";
    } else if (formData.captcha !== "17") {
      newErrors.captcha = "Incorrect answer";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        captcha: "",
      });
      setSubmitSuccess(true);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }
  };

  return (
    <section className="my-24 px-8">
      <div className="max-w-[1320px] bg-[#FBEADC] mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr]">
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

        <div className="flex flex-col gap-4 max-w-2xl mx-auto py-12 text-base">
          <h2 className="text-2xl font-bold mb-4">Talk to Us</h2>

          {submitSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              <p>Thank you for your message! We'll be in touch soon.</p>
            </div>
          )}

          <div className="flex flex-col gap-1">
            <input
              className={`p-2 px-4 bg-transparent border ${
                errors.full_name ? "border-red-500" : "border-[#165620]"
              } text-[#165620] placeholder:text-[#444] placeholder:opacity-75 focus:outline-none focus:border-black focus:ring-0 w-full`}
              type="text"
              name="full_name"
              id="full_name"
              placeholder="Full name"
              value={formData.full_name}
              onChange={handleChange}
            />
            {errors.full_name && (
              <p className="text-red-500 text-sm">{errors.full_name}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              className={`p-2 px-4 bg-transparent border ${
                errors.email ? "border-red-500" : "border-[#165620]"
              } text-[#165620] placeholder:text-[#444] placeholder:opacity-75 focus:outline-none focus:border-black focus:ring-0 w-full`}
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              className={`p-2 px-4 bg-transparent border ${
                errors.phone ? "border-red-500" : "border-[#165620]"
              } text-[#165620] placeholder:text-[#444] placeholder:opacity-75 focus:outline-none focus:border-black focus:ring-0 w-full`}
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone Number (254 728 000 000)"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              className="p-2 px-4 bg-transparent border border-[#165620] text-[#165620] placeholder:text-[#444] placeholder:opacity-75 focus:outline-none focus:border-black focus:ring-0 w-full"
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <textarea
              className={`p-2 px-4 bg-transparent border ${
                errors.message ? "border-red-500" : "border-[#165620]"
              } text-[#165620] placeholder:text-[#444] placeholder:opacity-75 focus:outline-none focus:border-black focus:ring-0 w-full`}
              name="message"
              id="message"
              cols="30"
              rows="4"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

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
              <div className="flex flex-col gap-1">
                <input
                  className={`p-2 px-4 bg-transparent border ${
                    errors.captcha ? "border-red-500" : "border-[#165620]"
                  } text-[#165620] placeholder:text-[#444] placeholder:opacity-75 focus:outline-none focus:border-black focus:ring-0 w-full`}
                  type="text"
                  name="captcha"
                  id="captcha"
                  value={formData.captcha}
                  onChange={handleChange}
                />
                {errors.captcha && (
                  <p className="text-red-500 text-sm">{errors.captcha}</p>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="max-w-48 self-end bg-[#165620] uppercase text-white flex gap-2 items-center justify-center py-4 px-8"
          >
            <p>Send</p>
            <img src="/icons/rght_arrow.svg" alt="right arrow icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactInformationSection;
