import { motion } from "framer-motion";

const briefItems = [
  {
    color: "bg-kafibi-purple",
    label: "Inventory Alert",
    text: 'Rush PO for "Heritage Denim" — stock will deplete by Thursday.',
    action: "Create PO",
  },
  {
    color: "bg-kafibi-green",
    label: "Rebalance",
    text: "Move 24 units of Coastal Tee from Warehouse → Store #2. Selling 3× faster there.",
    action: "Approve Move",
  },
  {
    color: "bg-kafibi-slate",
    label: "Promo Check",
    text: "Weekend promo on Linen Pants is eroding margin. Consider ending 1 day early.",
    action: "Review",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.19, 1, 0.22, 1] as const } },
};

const DailyBrief = () => {
  return (
    <section className="py-16 px-6 border-b border-border">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-kafibi-slate mb-3">
          Your Daily Brief — March 18, 2026
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-10">
          Today's priorities
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="border border-border"
        >
          {briefItems.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex items-start gap-4 p-6 border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors"
            >
              <div className={`w-2 h-2 mt-2 rounded-full ${item.color} shrink-0`} />
              <div className="flex-1 min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-widest text-kafibi-slate mb-1">
                  {item.label}
                </p>
                <p className="text-base font-medium text-foreground">{item.text}</p>
              </div>
              <button className="text-xs underline underline-offset-4 font-semibold text-foreground shrink-0 hover:text-kafibi-purple transition-colors">
                {item.action}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DailyBrief;
