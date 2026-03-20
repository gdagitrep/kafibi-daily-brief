import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Connect your data",
    text: "POS, ecommerce, inventory, and suppliers. No new systems to learn.",
    borderColor: "border-t-primary",
  },
  {
    number: "02",
    title: "We understand your operation",
    text: "Kabifi tracks inventory, sales velocity, and upcoming commitments across every SKU and location.",
    borderColor: "border-t-secondary",
  },
  {
    number: "03",
    title: "You get a daily action list",
    text: "Each morning you receive 3–5 prioritized recommendations: rush these POs, move stock here, slow ordering there, adjust this promo.",
    borderColor: "border-t-accent",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 px-6 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3">
          Process
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-10">
          How it works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
              className={`border border-border ${step.borderColor} border-t-[3px] p-8`}
            >
              <span className="font-mono text-xs text-accent tracking-widest">{step.number}</span>
              <h3 className="font-display text-xl font-semibold text-foreground mt-4 mb-3">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;