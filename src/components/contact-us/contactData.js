export const regionalContacts = [
  {
    region: "America",
    address: [
      "Future Earth, Suite 380",
      "1839 S Alma School Rd",
      "Mesa, AZ 85210 USA",
    ],
    phone: "480 649 4127",
    email: null,
  },
  {
    region: "Mexico, South America",
    address: ["Place: Gracious Rd, T Buiding, 3rd Floor"],
    email: "jambo@futureearth1.com",
    phone: "+33 345 678 123",
  },
  {
    region: "Malawi, Africa",
    address: ["Place: Gracious Rd, T Buiding, 3rd Floor"],
    email: "jambo@futureearth1.com",
    phone: "+33 345 678 123",
  },
];

// CAPTCHA question configuration
export const captchaConfig = {
  question: "6 + 11 =",
  answer: "17",
  instructionText:
    "This question is for testing whether or not you are a human visitor and to prevent automated spam submissions.",
};

export const formFields = [
  {
    id: "full_name",
    type: "text",
    label: "Full name",
    placeholder: "Full name",
    required: true,
  },
  {
    id: "email",
    type: "email",
    label: "Email address",
    placeholder: "Email address",
    required: true,
  },
  {
    id: "phone",
    type: "tel",
    label: "Phone Number",
    placeholder: "Phone Number (254 728 000 000)",
    required: true,
  },
  {
    id: "subject",
    type: "text",
    label: "Subject",
    placeholder: "Subject",
    required: false,
  },
  {
    id: "message",
    type: "textarea",
    label: "Message",
    placeholder: "Message",
    required: true,
    rows: 4,
  },
];
