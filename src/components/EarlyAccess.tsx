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
    <section id="early-access" className="py-12 px-6 bg-primary/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
        className="max-w-xl mx-auto text-center"
      >
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3">
          Early Access
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Built with operators, not just for them.
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground mb-8">
          Kabifi is live with a small group of retail operators shaping us from the ground up. If you want to know what's coming before it hits your operations, leave your email and we'll be in touch!
        </p>
        {submitted ? (
          <div className="border-2 border-secondary p-8">
            <p className="text-base font-medium text-secondary">
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
              className="flex-1 border-2 border-primary/20 border-r-0 px-5 py-4 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-[0.1em] uppercase hover:bg-primary/90 transition-colors shrink-0"
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