import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Connect your data",
    text: "Plug in your POS, inventory,  and suppliers. No new systems to learn.",
    borderColor: "border-t-primary",
  },
  {
    number: "02",
    title: "We learn your operation",
    text: "Kabifi maps your operation velocity, patterns, reorder windows and risk signals. Automatically.",
    borderColor: "border-t-secondary",
  },
  {
    number: "03",
    title: "Get your daily action list",
    text: "Each morning get 3-5 clear actions. Covering what to order, what to move, what to watch and ultimately what to do. ",
    borderColor: "border-t-accent",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 px-6">
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
