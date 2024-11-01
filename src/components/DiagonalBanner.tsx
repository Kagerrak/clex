const DiagonalBanner = () => {
  return (
    <div className="relative h-32 w-[50%] overflow-hidden">
      {/* Main diagonal shape (darkest) */}
      <div
        className="absolute inset-0 bg-[#051628] transform skew-x-[-20deg] origin-top-left"
        style={{
          clipPath: "polygon(0 0, 100% 0, 92% 100%, 0 100%)",
          width: "95%",
        }}
      />

      {/* Secondary diagonal shape (slightly lighter) */}
      <div
        className="absolute inset-0 bg-[#0A2240] transform skew-x-[-20deg] origin-top-left"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 8% 100%)",
          left: "75%",
          width: "35%",
        }}
      />

      {/* Yellow/gold stripes container */}
      <div
        className="absolute bottom-0 right-0 flex space-x-1 p-2"
        style={{ right: "-5px" }}
      >
        {/* Individual stripes with adjusted positioning */}
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="h-6 w-4 bg-[#C4992D] transform -skew-x-[20deg]"
            style={{
              marginBottom: index * 2 + "px", // Creates a staggered effect
              height: `${24 - index * 2}px`, // Slightly decreasing heights
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DiagonalBanner;
