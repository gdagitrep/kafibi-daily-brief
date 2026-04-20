import { motion } from "framer-motion";
import RequestAccessDialog from "@/components/RequestAccessDialog";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-6 border-b border-border">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        >
          <span className="inline-block border border-primary/30 text-primary text-xs font-mono uppercase tracking-[0.15em] px-4 py-1.5 mb-6">
            YOUR DAILY DECISION ENGINE FOR RETAIL OPERATIONS
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
          className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]"
        >
          Know what needs attention today, before it becomes a problem for later.
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
          className="mx-auto mt-4 h-1 w-32 origin-left"
          style={{
            background: "linear-gradient(90deg, hsl(280 24% 34%), hsl(153 14% 33%))",
          }}
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
          className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-[60ch] mx-auto"
        >
          Your operation is already generating the signals. Kabifi turns them into a system built around how your business actually runs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
          className="mt-8"
        >
          <RequestAccessDialog
            trigger={
              <button
                type="button"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-[0.1em] uppercase hover:bg-primary/90 transition-colors"
              >
                GET ACCESS
              </button>
            }
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
