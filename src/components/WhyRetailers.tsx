import { motion } from "framer-motion";

const reasons = [
  {
    borderColor: "border-l-primary",
    title: "Contextual Operations Hire",
    text: "A dedicated operations arm without a new hire so you can focus on what matters: product, customers, and brand.",
  },
  {
    borderColor: "border-l-secondary",
    title: "Data into clear priorities",
    text: "One short list of what actually needs attention each day.",
  },
  {
    borderColor: "border-l-accent",
    title: "Replaces reports with actions",
    text: "Connects stock levels, sales, and external signals (like weather, ads, and local demand) into concrete actions, not more reports.",
  },
  {
    borderColor: "border-l-secondary",
    title: "You run the day with confidence",
    text: 'Fewer "did we miss something?" moments. No more second guessing.',
  },
];

const WhyRetailers = () => {
  return (
    <section className="py-8 px-6">
      <div className="max-w-5xl mx-auto">
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
