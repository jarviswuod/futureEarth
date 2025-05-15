export const validateContactForm = (formData) => {
  const errors = {};

  if (!formData.full_name.trim()) {
    errors.full_name = "Name is required";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!formData.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^254\s\d{3}\s\d{3}\s\d{3}$/.test(formData.phone)) {
    errors.phone = "Please enter a valid Kenyan phone number (254 728 000 000)";
  }

  if (!formData.message.trim()) {
    errors.message = "Message is required";
  } else if (formData.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  if (!formData.captcha.trim()) {
    errors.captcha = "Please solve the CAPTCHA";
  } else if (formData.captcha !== "17") {
    errors.captcha = "Incorrect answer";
  }

  return errors;
};

export const formatPhoneForLink = (phone) => {
  return phone.replace(/\s+/g, "");
};

export const validateField = (name, value) => {
  switch (name) {
    case "full_name":
      return value.trim() ? "" : "Name is required";

    case "email":
      if (!value.trim()) return "Email is required";
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? ""
        : "Please enter a valid email address";

    case "phone":
      if (!value.trim()) return "Phone number is required";
      return /^254\s\d{3}\s\d{3}\s\d{3}$/.test(value)
        ? ""
        : "Please enter a valid Kenyan phone number (254 728 000 000)";

    case "message":
      if (!value.trim()) return "Message is required";
      return value.trim().length < 10
        ? "Message must be at least 10 characters"
        : "";

    case "captcha":
      if (!value.trim()) return "Please solve the CAPTCHA";
      return value !== "17" ? "Incorrect answer" : "";

    default:
      return "";
  }
};
