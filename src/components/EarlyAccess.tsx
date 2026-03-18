import { motion } from "framer-motion";
import { useState } from "react";

const EarlyAccess = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="early-access" className="py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
        className="max-w-xl mx-auto text-center"
      >
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-kafibi-slate mb-3">
          Early Access
        </p>
        <h2 className="font-display text-4xl md:text-5xl italic tracking-tight text-foreground mb-6">
          Join the first cohort
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground mb-12">
          We're working closely with a small group of operators to shape Kafibi.
          Leave your email if you'd like to be considered.
        </p>
        {submitted ? (
          <div className="border border-kafibi-green p-8">
            <p className="text-base font-medium text-kafibi-green">
              Thank you. We'll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-0">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              className="flex-1 border border-border border-r-0 px-5 py-4 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
            />
            <button
              type="submit"
              className="bg-foreground text-background px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase hover:translate-y-[1px] transition-transform shrink-0"
            >
              Request Invite
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default EarlyAccess;
