const FeatureCategory = ({ icon, title, bgColor, isActive, onClick }) => (
  <li
    className={`${bgColor} p-2 sm:p-4 py-8 cursor-pointer transition-all ${
      isActive ? "ring-2 ring-yellow-300" : ""
    }`}
    onClick={onClick}
  >
    <figure className="flex flex-col gap-2 items-center text-center">
      <img src={icon} alt="" aria-hidden="true" width="40" height="40" />
      <figcaption>{title}</figcaption>
    </figure>
  </li>
);

export default FeatureCategory;
