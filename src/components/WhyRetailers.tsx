import { motion } from "framer-motion";

const reasons = [
  {
    borderColor: "border-l-primary",
    title: "Audit-Ready & Shelf-Ready",
    text: "A checklist-driven workflow guarantees Nutrition, Allergen, and FDA compliance sign-offs happen before print. No more orphaned docs in Google Drive.",
  },
  {
    borderColor: "border-l-secondary",
    title: "Vendor & Co-Packer Control",
    text: "Auto-track SLA response times. If a co-packer goes quiet at 24 hours, we draft the follow-up. At 48 hours, we escalate. No more slipping through the cracks.",
  },
  {
    borderColor: "border-l-accent",
    title: "Samples to Purchase Orders",
    text: "Track which buyers have what sample, and auto-trigger follow-ups. When the response is positive, seamlessly convert to a Quote and Production Order.",
  },
  {
    borderColor: "border-l-secondary",
    title: "Data into clear priorities",
    text: "One short list of what actually needs attention each day. Replaces scattered spreadsheets and email threads with concrete actions.",
  },
];

const WhyRetailers = () => {
  return (
    <section className="py-8 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-10">
          Why CPG founders use Kabifi
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
