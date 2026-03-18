import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Connect your data",
    text: "POS, ecommerce, inventory, and suppliers—no new systems to learn.",
  },
  {
    number: "02",
    title: "We understand your operation",
    text: "Kafibi tracks inventory, sales velocity, and upcoming commitments across every SKU and location.",
  },
  {
    number: "03",
    title: "You get a daily action list",
    text: "Each morning you receive 3–5 prioritized recommendations: rush these POs, move stock here, slow ordering there, adjust this promo.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-32 px-6 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-kafibi-slate mb-3">
          Process
        </p>
        <h2 className="font-display text-4xl md:text-5xl italic tracking-tight text-foreground mb-20">
          How it works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
              className="p-8 md:p-12 first:pl-0 last:pr-0"
            >
              <span className="font-mono text-xs text-kafibi-slate tracking-widest">{step.number}</span>
              <h3 className="font-display text-2xl italic text-foreground mt-4 mb-4">{step.title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
