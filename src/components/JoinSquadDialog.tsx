import { ReactNode, useState } from "react";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  advantage: z.string().trim().min(1, "Required").max(1000),
  why: z.string().trim().min(1, "Required").max(1000),
  friction: z.string().trim().min(1, "Required").max(1000),
  mastery: z.string().trim().min(1, "Required").max(1000),
  proof1: z.string().trim().min(1, "Required").max(500),
  proof2: z.string().trim().min(1, "Required").max(500),
  proof3: z.string().trim().min(1, "Required").max(500),
});

type FormState = z.infer<typeof schema>;
type Props = { trigger: ReactNode };

const inputClass =
  "w-full border-2 border-primary/20 bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none";
const labelClass =
  "text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground";
const hintClass = "text-xs text-muted-foreground italic leading-relaxed";

const RECIPIENT = "service@kabifi.com";

const JoinSquadDialog = ({ trigger }: Props) => {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [lastMailto, setLastMailto] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState<FormState>({
    name: "",
    advantage: "",
    why: "",
    friction: "",
    mastery: "",
    proof1: "",
    proof2: "",
    proof3: "",
  });

  const update = (field: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fe: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        const k = i.path[0];
        if (typeof k === "string") fe[k] = i.message;
      });
      setErrors(fe);
      return;
    }
    setErrors({});
    const d = result.data;
    const subject = `JOIN THE OPS SQUAD — ${d.name}`;
    const body = [
      `Name: ${d.name}`,
      ``,
      `Unfair Advantage:`,
      d.advantage,
      ``,
      `Why Kabifi:`,
      d.why,
      ``,
      `Friction you love destroying:`,
      d.friction,
      ``,
      `Obsessively becoming the best at:`,
      d.mastery,
      ``,
      `3 Bullets of Proof:`,
      `- ${d.proof1}`,
      `- ${d.proof2}`,
      `- ${d.proof3}`,
    ].join("\n");
    const mailto = `mailto:${RECIPIENT}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setLastMailto(mailto);
    window.location.href = mailto;
    setSent(true);
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) {
      // reset after close animation
      setTimeout(() => {
        setSent(false);
        setErrors({});
      }, 200);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" onOverlayClick={() => handleOpenChange(false)}>
        {sent ? (
          <div className="py-6 space-y-6">
            <DialogHeader>
              <DialogTitle className="font-display text-3xl">Application <em className="italic">on its way</em>.</DialogTitle>
              <DialogDescription className="text-sm leading-relaxed">
                Your email app should have just opened with the application pre-filled. Hit send there to deliver it to our team.
              </DialogDescription>
            </DialogHeader>

            <div className="border-2 border-primary/20 bg-muted/40 p-5 space-y-3">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Sending to</p>
              <p className="font-mono text-base text-foreground break-all">{RECIPIENT}</p>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              No email client opened? <a href={lastMailto} className="underline text-foreground hover:text-primary">Click here to try again</a>, or email us directly at{" "}
              <a href={`mailto:${RECIPIENT}`} className="underline text-foreground hover:text-primary">{RECIPIENT}</a>.
            </p>

            <button
              type="button"
              onClick={() => handleOpenChange(false)}
              className="w-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Done
            </button>
          </div>
        ) : (
          <>
        <DialogHeader>
          <DialogTitle className="font-display text-3xl">JOIN THE OPS SQUAD</DialogTitle>
          <DialogDescription className="text-sm leading-relaxed">
            We don't do corporate ladder climbing. We do deep, obsessive, ugly-problem solving. If you're ready to build the system that saves CPG brands from themselves, prove it below.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label htmlFor="js-name" className={labelClass}>1. Name</label>
            <p className={hintClass}>What should we call you?</p>
            <input id="js-name" className={inputClass} value={form.name} onChange={(e) => update("name", e.target.value)} maxLength={100} required />
            {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="js-advantage" className={labelClass}>2. Your Unfair Advantage</label>
            <p className={hintClass}>Don't give us "hard worker" or "team player." If the building is on fire, what is the specific, undeniable thing we are relying on you to do better than anyone else in the room?</p>
            <textarea id="js-advantage" rows={3} className={inputClass} value={form.advantage} onChange={(e) => update("advantage", e.target.value)} maxLength={1000} required />
            {errors.advantage && <p className="text-xs text-destructive">{errors.advantage}</p>}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="js-why" className={labelClass}>3. Why Kabifi?</label>
            <p className={hintClass}>Our manifesto was a filter. If you passed it, why does this specific fight — saving physical brands from operational chaos — matter to you? No generic startup fluff.</p>
            <textarea id="js-why" rows={3} className={inputClass} value={form.why} onChange={(e) => update("why", e.target.value)} maxLength={1000} required />
            {errors.why && <p className="text-xs text-destructive">{errors.why}</p>}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="js-friction" className={labelClass}>4. What friction do you love destroying?</label>
            <p className={hintClass}>Most people avoid friction. Builders eat it for breakfast. What specific kind of mess, chaos, or broken system gives you a sick satisfaction to fix?</p>
            <textarea id="js-friction" rows={3} className={inputClass} value={form.friction} onChange={(e) => update("friction", e.target.value)} maxLength={1000} required />
            {errors.friction && <p className="text-xs text-destructive">{errors.friction}</p>}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="js-mastery" className={labelClass}>5. What are you obsessively trying to become the best in the world at?</label>
            <p className={hintClass}>Not your job title. Not your current skill level. Where is your trajectory pointed? What are you relentlessly pursuing mastery over?</p>
            <textarea id="js-mastery" rows={3} className={inputClass} value={form.mastery} onChange={(e) => update("mastery", e.target.value)} maxLength={1000} required />
            {errors.mastery && <p className="text-xs text-destructive">{errors.mastery}</p>}
          </div>

          <div className="space-y-3">
            <p className={labelClass}>6. 3 Bullets of Proof</p>
            <p className={hintClass}>No corporate jargon. No "managed a team of 5." Give us 3 undeniable facts about what you've actually shipped, broken, fixed, or conquered. Show us the scar tissue.</p>
            <div className="space-y-2">
              <input className={inputClass} placeholder="Bullet 1" value={form.proof1} onChange={(e) => update("proof1", e.target.value)} maxLength={500} required />
              {errors.proof1 && <p className="text-xs text-destructive">{errors.proof1}</p>}
              <input className={inputClass} placeholder="Bullet 2" value={form.proof2} onChange={(e) => update("proof2", e.target.value)} maxLength={500} required />
              {errors.proof2 && <p className="text-xs text-destructive">{errors.proof2}</p>}
              <input className={inputClass} placeholder="Bullet 3" value={form.proof3} onChange={(e) => update("proof3", e.target.value)} maxLength={500} required />
              {errors.proof3 && <p className="text-xs text-destructive">{errors.proof3}</p>}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Send Application
          </button>
          <p className="text-xs text-muted-foreground">
            This opens your email app with the application pre-filled to {RECIPIENT}.
          </p>
        </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default JoinSquadDialog;
