import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Connect your data",
    text: "Import SKUs, co-packers, and suppliers via CSV in under five minutes. Shopify and QuickBooks integrations coming soon.",
  },
  {
    n: "02",
    title: "We map your operation",
    text: "Kabifi auto-maps vendor SLAs, production timelines, compliance gates, and reorder windows around how your brand actually runs.",
  },
  {
    n: "03",
    title: "Get your daily brief",
    text: "Each morning, three to five clear actions: who to follow up with, what to approve, and when to reorder. No more triaging your inbox.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="bg-background py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary mb-4">
          ── How it works
        </p>
        <h2 className="font-display text-5xl md:text-6xl text-ink tracking-tight mb-16 max-w-3xl">
          From spreadsheet chaos to a single <em className="italic">command center.</em>
        </h2>
        <div className="grid md:grid-cols-3 gap-px bg-ink/10">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background p-8 min-h-[260px] flex flex-col"
            >
              <span className="font-mono text-xs text-primary tracking-[0.2em] mb-6">{s.n}</span>
              <h3 className="font-display text-3xl text-ink mb-3">{s.title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
