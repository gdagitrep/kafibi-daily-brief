import { motion } from "framer-motion";

const reasons = [
  {
    color: "bg-kafibi-purple",
    title: "A dedicated operations arm without a new hire.",
    text: "We watch the numbers so your team can focus on what matters: product, customers, and brand.",
  },
  {
    color: "bg-kafibi-green",
    title: "Clear daily priorities instead of noise.",
    text: "One short list of what needs attention across inventory, suppliers, staffing, and promotions.",
  },
  {
    color: "bg-kafibi-slate",
    title: "Inventory as a live pulse in the business.",
    text: "Kafibi turns stock levels, sales, and external signals (like weather, ads, and local demand) into concrete actions, not more reports.",
  },
  {
    color: "bg-kafibi-green",
    title: 'Fewer "did we miss something?" moments.',
    text: "Less confusion or surprises, and more confidence that today's work is pointed in the right direction for YOUR business.",
  },
];

const WhyRetailers = () => {
  return (
    <section className="py-16 px-6 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-kafibi-slate mb-3">
          Value
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-12">
          Why retailers use Kafibi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.19, 1, 0.22, 1] }}
              className="bg-background p-10 md:p-12"
            >
              <div className={`w-2 h-2 rounded-full ${reason.color} mb-6`} />
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{reason.title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground">{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRetailers;
