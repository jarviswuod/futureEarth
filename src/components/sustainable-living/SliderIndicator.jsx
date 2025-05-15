const SliderIndicator = ({ total, active, onChange }) => (
  <div
    className="flex gap-4 mb-12 mt-8"
    role="tablist"
    aria-label="Product features navigation"
  >
    {Array.from({ length: total }).map((_, index) => (
      <button
        key={index}
        className={`rounded-full ${
          index === active ? "h-3 w-9 bg-yellow-300" : "h-3 w-3 bg-white"
        }`}
        role="tab"
        aria-selected={index === active}
        aria-label={`View product feature ${index + 1}`}
        tabIndex={index === active ? 0 : -1}
        onClick={() => onChange(index)}
      />
    ))}
  </div>
);
export default SliderIndicator;
