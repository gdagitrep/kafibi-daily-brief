const quotes = [
  {
    quote: "Lead time surprises basically disappeared. Our co-packer follow-ups happen on their own, and we cut receiving delays by over 30%.",
    name: "Operations Lead",
    co: "Granola brand, $1.8M ARR",
  },
  {
    quote: "Kabifi lets us run ops with one person instead of three. Compliance gates and buyer follow-ups just don't fall through anymore.",
    name: "Founder",
    co: "RTD beverage brand",
  },
  {
    quote: "Saved us a near-stockout going into a Whole Foods reset. The reorder math alone has paid for the platform 10×.",
    name: "Co-founder",
    co: "Pet treats brand",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary mb-4">
          ── In their words
        </p>
        <h2 className="font-display text-5xl md:text-6xl text-ink tracking-tight mb-14 max-w-2xl">
          The <em className="italic">operator</em> that never sleeps.
        </h2>
        <div className="grid md:grid-cols-3 gap-px bg-ink/10">
          {quotes.map((q) => (
            <figure key={q.name} className="bg-cream p-8 flex flex-col justify-between">
              <blockquote className="font-display text-2xl leading-[1.25] text-ink mb-8">
                "{q.quote}"
              </blockquote>
              <figcaption className="text-xs font-mono uppercase tracking-[0.15em] text-ink/60">
                {q.name} · {q.co}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
