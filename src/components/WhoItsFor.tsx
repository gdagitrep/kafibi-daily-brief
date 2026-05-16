import { motion } from "framer-motion";

const traits = [
  { label: "You are an early-stage CPG brand (under $2M revenue)", color: "border-l-primary" },
  { label: "You rely on co-packers and suppliers to make your product", color: "border-l-secondary" },
  { label: "You are juggling compliance, buyers, and ops with a team of 1-2 people", color: "border-l-accent" },
];

const WhoItsFor = () => {
  return (
    <section className="py-8 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Who it's for
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground mb-8">
          If this sounds like you - Kabifi was built for your brand.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          {traits.map((trait, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 p-5 border border-border border-l-4 ${trait.color} bg-background`}
            >
              <span className="font-mono text-xs text-accent tracking-widest w-8">
                0{i + 1}
              </span>
              <p className="text-base font-medium text-foreground">{trait.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoItsFor;
