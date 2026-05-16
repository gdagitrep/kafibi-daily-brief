const stats = [
  { value: "75+", label: "Workflows automated" },
  { value: "5K+", label: "SKUs tracked" },
  { value: "100%", label: "COAs & SDS tracked automatically" },
  { value: "3×", label: "Faster sample-to-PO conversion" },
];

const Stats = () => {
  return (
    <section className="bg-ink text-secondary-foreground py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary mb-4">
          ── By the numbers
        </p>
        <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-16 max-w-2xl">
          Built for founders, by operators who lived the chaos.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.label} className="border-t border-white/15 pt-5">
              <div className="font-display text-6xl md:text-7xl text-primary mb-3">{s.value}</div>
              <p className="text-sm text-secondary-foreground/70 max-w-[20ch]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
