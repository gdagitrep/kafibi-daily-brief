import { motion } from "framer-motion";
import RequestAccessDialog from "@/components/RequestAccessDialog";

const EarlyAccess = () => {
  return (
    <section id="early-access" className="scroll-mt-24 bg-ink text-secondary-foreground px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary mb-6">
          ── Get started
        </p>
        <h2 className="font-display text-5xl md:text-7xl tracking-tight mb-8">
          Get back to building the brand, <em className="italic">not managing the mess.</em>
        </h2>
        <p className="text-lg text-secondary-foreground/70 max-w-xl mx-auto mb-10">
          Five minutes to create your first brand record. Imports from the CSVs you already use. Priced for sub-$5M operators.
        </p>
        <RequestAccessDialog
          trigger={
            <button
              type="button"
              className="bg-primary text-primary-foreground px-8 py-4 text-xs font-mono uppercase tracking-[0.2em] hover:bg-primary/90 transition-colors inline-flex items-center gap-3"
            >
              Get Started For Free <span aria-hidden>››</span>
            </button>
          }
        />
      </motion.div>
    </section>
  );
};

export default EarlyAccess;
