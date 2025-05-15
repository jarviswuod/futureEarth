const SocialLinks = () => {
  const socialMedia = [
    { name: "LinkedIn", icon: "/icons/linkedin_logo.svg" },
    { name: "WhatsApp", icon: "/icons/whatsapp_logo.svg" },
    { name: "Facebook", icon: "/icons/facebook_logo.svg" },
    { name: "Twitter", icon: "/icons/twitter_logo.svg" },
    { name: "YouTube", icon: "/icons/youtube_logo.svg" },
    { name: "Instagram", icon: "/icons/instgram_logo.svg" },
  ];

  return (
    <ul className="flex items-center gap-3">
      <li className="mr-3">
        <p className="max-sm:uppercase max-sm:text-lg max-sm:font-bold">
          Get In Touch
        </p>
      </li>
      {socialMedia.map((platform, index) => (
        <li key={index}>
          <a href="#" aria-label={`Follow us on ${platform.name}`}>
            <img src={platform.icon} alt={`${platform.name} logo`} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
