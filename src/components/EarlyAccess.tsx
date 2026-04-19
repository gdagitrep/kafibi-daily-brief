import { motion } from "framer-motion";
import RequestAccessDialog from "@/components/RequestAccessDialog";

const EarlyAccess = () => {
  return (
    <section id="early-access" className="scroll-mt-24 bg-primary/5 px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
          Built with operators, not just for them.
        </h2>
        <RequestAccessDialog
          trigger={
            <button
              type="button"
              className="bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Request Access
            </button>
          }
        />
      </motion.div>
    </section>
  );
};

export default EarlyAccess;
