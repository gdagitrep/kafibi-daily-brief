import { motion } from "framer-motion";

const traits = [
  "You're an early-stage CPG brand doing under $2M revenue.",
  "You rely on co-packers and suppliers to actually make the product.",
  "You're juggling compliance, buyers, and ops with one to three people.",
  "You're too big for spreadsheets and too small for SAP or NetSuite.",
];

const WhoItsFor = () => {
  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary mb-4">
          ── Who it's for
        </p>
        <h2 className="font-display text-5xl md:text-6xl text-ink tracking-tight mb-6 max-w-3xl">
          You didn't start a brand to become a <em className="italic">project manager</em> for your co-packer.
        </h2>
        <p className="text-lg text-ink/70 max-w-2xl mb-14">
          If this sounds like your operation, Kabifi was built for your brand.
        </p>
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-ink/15"
        >
          {traits.map((t, i) => (
            <li
              key={i}
              className="flex items-start gap-6 py-6 border-b border-ink/15"
            >
              <span className="font-mono text-xs text-primary tracking-[0.15em] mt-1.5 shrink-0">
                0{i + 1}
              </span>
              <p className="font-display text-2xl md:text-3xl text-ink leading-snug">{t}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default WhoItsFor;
