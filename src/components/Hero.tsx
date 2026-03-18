import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 px-6 border-b border-border">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]"
        >
          Know exactly what to do today to run your shop better.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
          className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-[60ch] mx-auto"
        >
          Kafibi connects to the tools you already use and turns messy operations data into a short, plain‑language daily brief: what's at risk, what to reorder, and which levers to pull to protect cash and sales.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
          className="mt-8"
        >
          <a
            href="#early-access"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-[0.1em] uppercase hover:bg-primary/90 transition-colors"
          >
            Get Early Access
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
