import { motion } from "framer-motion";
import RequestAccessDialog from "@/components/RequestAccessDialog";
import heroImg from "@/assets/hero-cpg.jpg";

const Hero = () => {
  return (
    <section className="relative pt-28 min-h-[88vh] overflow-hidden bg-ink">
      <img
        src={heroImg}
        alt="CPG packaging line"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-32">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-[11px] font-mono uppercase tracking-[0.25em] text-primary mb-8"
        >
          THE OPS HUB FOR EMERGING CPG BRANDS
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
          className="font-display text-secondary-foreground text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight max-w-4xl"
        >
          Give Your CPG Brand <em className="italic">Superpowers.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 max-w-xl text-lg text-secondary-foreground/80 leading-relaxed"
        >
          Your CPG Ops Hub, designed for sub-$5M CPG brands. Spot stock-outs, compliance gaps, and missed buyer follow-ups before they cost you the shelf.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10"
        >
          <RequestAccessDialog
            trigger={
              <button
                type="button"
                className="bg-primary text-primary-foreground px-7 py-4 text-xs font-mono uppercase tracking-[0.2em] hover:bg-primary/90 transition-colors inline-flex items-center gap-3"
              >
                GET STARTED <br /> › <br />
              </button>
            }
          />
        </motion.div>
      </div>

      {/* Floating live-feed card */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden lg:block absolute right-8 top-44 w-80 bg-ink/80 backdrop-blur border border-white/10 p-5 text-secondary-foreground"
      >
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary mb-3">
          ● Live · Ops Feed
        </p>
        <div className="space-y-3 text-xs font-mono">
          <div className="text-secondary-foreground/60">Analyzing co-packer SLAs…</div>
          <div>Vendor flagged: <span className="text-primary">Heritage Granola</span></div>
          <div className="text-secondary-foreground/60">Past 24hr response window</div>
          <div className="pt-2 border-t border-white/10">
            <div className="text-secondary-foreground/60">Compliance review:</div>
            <div>New SKU Label · Allergens</div>
          </div>
          <div className="pt-2 border-t border-white/10">
            <div className="text-secondary-foreground/60">Stock-out forecast:</div>
            <div className="text-primary text-base">18 days</div>
            <div>Core SKU 001 · 3 vendors qualified</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
