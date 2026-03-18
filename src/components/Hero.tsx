import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-40 pb-32 px-6 border-b border-border">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="font-display text-5xl md:text-7xl italic tracking-tight text-foreground leading-[1.1]"
        >
          Know exactly what to do today to run your shop better.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
          className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-[60ch] mx-auto"
        >
          Kafibi connects to the tools you already use and turns messy operations data into a short, plain‑language daily brief: what's at risk, what to reorder, and which levers to pull to protect cash and sales.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
          className="mt-10"
        >
          <a
            href="#early-access"
            className="inline-block bg-foreground text-background px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase hover:translate-y-[1px] transition-transform"
          >
            Get Early Access
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
