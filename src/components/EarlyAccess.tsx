import { motion } from "framer-motion";
import { useState } from "react";

const EarlyAccess = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/request-invite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Unable to submit request");
      }

      setSubmitted(true);
      setEmail("");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to submit request";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="early-access" className="scroll-mt-24 bg-primary/5 px-6 py-12">
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
          Kabifi is live with a small group of retail operators shaping us from the ground up. If you want to know what's coming before it hits your operations, leave your email and we'll reach out within 24 hours.
        </p>
        {submitted ? (
          <div className="border-2 border-secondary p-8">
            <p className="text-base font-medium text-secondary">
              Thank you. We'll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                disabled={isSubmitting}
                className="flex-1 border-2 border-primary/20 border-r-0 bg-background px-5 py-4 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none disabled:cursor-not-allowed disabled:opacity-70"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="shrink-0 bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Request Invite"}
              </button>
            </div>
            {error ? (
              <p className="text-sm text-destructive">{error}</p>
            ) : (
              <p className="text-xs text-muted-foreground">
                Submissions send an email to contact@kabifi.com.
              </p>
            )}
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default EarlyAccess;
