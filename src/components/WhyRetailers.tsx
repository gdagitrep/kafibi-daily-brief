import { motion } from "framer-motion";

const reasons = [
  {
    borderColor: "border-l-primary",
    title: "A dedicated operations arm without a new hire.",
    text: "We watch the numbers so your team can focus on what matters: product, customers, and brand.",
  },
  {
    borderColor: "border-l-secondary",
    title: "Clear daily priorities instead of noise.",
    text: "One short list of what needs attention across inventory, suppliers, staffing, and promotions.",
  },
  {
    borderColor: "border-l-accent",
    title: "Inventory as a live pulse in the business.",
    text: "Kabifi turns stock levels, sales, and external signals (like weather, ads, and local demand) into concrete actions, not more reports.",
  },
  {
    borderColor: "border-l-secondary",
    title: 'Fewer "did we miss something?" moments.',
    text: "Less confusion or surprises, and more confidence that today's work is pointed in the right direction for YOUR business.",
  },
];

const WhyRetailers = () => {
  return (
    <section className="py-12 px-6 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3">
          Value
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-10">
          Why retailers use Kabifi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.19, 1, 0.22, 1] }}
              className={`border border-border border-l-4 ${reason.borderColor} bg-background p-8`}
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRetailers;