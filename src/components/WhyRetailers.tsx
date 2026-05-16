import { motion } from "framer-motion";

const reasons = [
  {
    tag: "Vendor SLAs",
    title: "Co-packer Black Hole, solved.",
    text: "Auto-track every supplier response. At 24 hours we flag amber and draft the follow-up. At 48 we escalate. No more passive-aggressive 'just checking in' emails.",
  },
  {
    tag: "Compliance",
    title: "Audit-ready, shelf-ready.",
    text: "Four mandatory review gates (Nutrition, Allergens, Claims, Traceability) sign off before a 'Ready for Print' badge unlocks. No more orphaned PDFs in Google Drive.",
  },
  {
    tag: "Buyer Pipeline",
    title: "Samples into purchase orders.",
    text: "Track who got which sample, automate the seven-day follow-up, and when a buyer replies positive, auto-create the chain: quote, PO, production order.",
  },
  {
    tag: "Inventory",
    title: "Never stock out again.",
    text: "We calculate your reorder point from daily velocity and your specific co-packer lead time. Alert fires the moment you should cut the next work order.",
  },
];

const WhyRetailers = () => {
  return (
    <section id="features" className="bg-background py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary mb-4">
          ── Why founders use Kabifi
        </p>
        <h2 className="font-display text-5xl md:text-6xl text-ink tracking-tight mb-16 max-w-3xl">
          Built for the brand with <em className="italic">one to three people</em> wearing every hat.
        </h2>
        <div className="grid md:grid-cols-2 gap-px bg-ink/10">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-background p-10"
            >
              <span className="inline-block text-[10px] font-mono uppercase tracking-[0.2em] text-primary border border-primary/40 px-2 py-1 mb-5">
                {r.tag}
              </span>
              <h3 className="font-display text-3xl text-ink mb-3 leading-tight">{r.title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed max-w-md">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRetailers;
