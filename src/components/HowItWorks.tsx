import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Connect your data",
    text: "Connect your data POS, inventory, suppliers. No new systems to learn.",
    borderColor: "border-t-primary",
  },
  {
    number: "02",
    title: "We understand your operation",
    text: "Kabifi learns your operation Velocity, patterns, reorder windows, risk signals. Automatically.",
    borderColor: "border-t-secondary",
  },
  {
    number: "03",
    title: "You get a daily action list",
    text: "You get your brief every morning Three to five specific actions. What to order, what to move, what to watch. Before you open the door.",
    borderColor: "border-t-accent",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 px-6 border-b border-border">
      <div className="max-w-5xl mx-auto">
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
