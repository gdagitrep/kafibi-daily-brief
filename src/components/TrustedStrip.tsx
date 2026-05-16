const logos = [
  "Heritage Granola", "Coastal Mix", "Sunday Soda", "North Roast",
  "Field & Vine", "Loam Botanicals", "Bayside Bakery", "Wild Oats Co",
  "Saltwater Snacks", "Marigold Foods",
];

const TrustedStrip = () => {
  return (
    <section className="bg-ink text-secondary-foreground/60 py-10 border-t border-white/5 overflow-hidden">
      <p className="text-center text-[11px] font-mono uppercase tracking-[0.25em] mb-6">
        Trusted by emerging brands shipping into Whole Foods, Erewhon, and Sprouts
      </p>
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-14 w-max animate-marquee">
          {[...logos, ...logos].map((name, i) => (
            <span
              key={i}
              className="font-display text-2xl whitespace-nowrap text-secondary-foreground/50"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedStrip;
