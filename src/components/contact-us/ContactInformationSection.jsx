import React, { useState } from "react";
import { validateContactForm } from "./formValidation";
import { regionalContacts } from "./contactData";

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

    const formErrors = validateContactForm(formData);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        captcha: "",
      });
      setSubmitSuccess(true);

      setTimeout(() => setSubmitSuccess(false), 5000);
    }
  };

  return (
    <section
      className="my-16 sm:my-20 md:my-24 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl bg-[#FBEADC] mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr]">
        {/* Regional Contacts Section */}
        <div className="bg-[#165620] text-white text-base font-light px-4 py-8 sm:py-12">
          <div className="max-w-xs mx-auto">
            <h2
              id="regional-contacts-heading"
              className="text-2xl font-bold mb-4"
            >
              Regional Contacts
            </h2>
            <ul className="space-y-6">
              {regionalContacts.map((contact, index) => (
                <li key={index} className="grid grid-cols-[auto_1fr] gap-4">
                  <div>
                    <img
                      src="/icons/location_icon.svg"
                      alt=""
                      aria-hidden="true"
                    />
                  </div>
                  <address className="flex flex-col gap-2 not-italic">
                    <h3 className="font-bold">{contact.region}</h3>
                    {contact.address.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                    {contact.email && (
                      <p>
                        <a
                          href={`mailto:${contact.email}`}
                          className="hover:underline"
                        >
                          {contact.email}
                        </a>
                      </p>
                    )}
                    {contact.phone && (
                      <p>
                        <a
                          href={`tel:${contact.phone.replace(/\s/g, "")}`}
                          className="hover:underline"
                        >
                          {contact.phone}
                        </a>
                      </p>
                    )}
                  </address>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-col gap-4 max-w-2xl mx-auto px-4 py-8 sm:py-12 text-base">
          <h2 id="contact-heading" className="text-2xl font-bold mb-4">
            Talk to Us
          </h2>

          {submitSuccess && (
            <div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4"
              role="alert"
              aria-live="polite"
            >
              <p>Thank you for your message! We'll be in touch soon.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="full_name" className="sr-only">
                  Full name
                </label>
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
                  aria-required="true"
                  aria-invalid={errors.full_name ? "true" : "false"}
                  aria-describedby={
                    errors.full_name ? "full_name-error" : undefined
                  }
                />
                {errors.full_name && (
                  <p className="text-red-500 text-sm" id="full_name-error">
                    {errors.full_name}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
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
                  aria-required="true"
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm" id="email-error">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <input
                  className={`p-2 px-4 bg-transparent border ${
                    errors.phone ? "border-red-500" : "border-[#165620]"
                  } text-[#165620] placeholder:text-[#444] placeholder:opacity-75 focus:outline-none focus:border-black focus:ring-0 w-full`}
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number (254 728 000 000)"
                  value={formData.phone}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={errors.phone ? "true" : "false"}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm" id="phone-error">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
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
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
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
                  aria-required="true"
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm" id="message-error">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="border border-[#165620] placeholder:text-[#444]">
                <h3 className="bg-[#165620] text-white p-2 px-4">CAPTCHA</h3>

                <div className="p-4">
                  <div className="flex flex-col gap-4 py-2 opacity-75">
                    <p>
                      This question is for testing whether or not you are a
                      human visitor and to prevent automated spam submissions.
                    </p>
                    <p className="font-bold">
                      Math question <span aria-hidden="true">*</span>
                    </p>
                    <p aria-label="CAPTCHA question: 6 plus 11 equals?">
                      6 + 11 =
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="captcha" className="sr-only">
                      Solution to math problem
                    </label>
                    <input
                      className={`p-2 px-4 bg-transparent border ${
                        errors.captcha ? "border-red-500" : "border-[#165620]"
                      } text-[#165620] placeholder:text-[#444] placeholder:opacity-75 focus:outline-none focus:border-black focus:ring-0 w-full`}
                      type="text"
                      name="captcha"
                      id="captcha"
                      value={formData.captcha}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={errors.captcha ? "true" : "false"}
                      aria-describedby={
                        errors.captcha ? "captcha-error" : undefined
                      }
                    />
                    {errors.captcha && (
                      <p className="text-red-500 text-sm" id="captcha-error">
                        {errors.captcha}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="max-w-48 self-end bg-[#165620] uppercase text-white flex gap-2 items-center justify-center py-4 px-8 mt-4 hover:bg-[#0d3915] transition-colors"
              >
                <span>Send</span>
                <img src="/icons/rght_arrow.svg" alt="" aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactInformationSection;
