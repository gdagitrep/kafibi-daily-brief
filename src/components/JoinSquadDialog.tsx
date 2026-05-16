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
  name: z.string().trim().min(1, "Name is required").max(100),
  advantage: z.string().trim().min(1, "Required").max(1000),
  why: z.string().trim().min(1, "Required").max(1000),
  friction: z.string().trim().min(1, "Required").max(1000),
  mastery: z.string().trim().min(1, "Required").max(1000),
  proof1: z.string().trim().min(1, "Required").max(500),
  proof2: z.string().trim().min(1, "Required").max(500),
  proof3: z.string().trim().min(1, "Required").max(500),
});

type Props = { trigger: ReactNode };

const JoinSquadDialog = ({ trigger }: Props) => {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    advantage: "",
    why: "",
    friction: "",
    mastery: "",
    proof1: "",
    proof2: "",
    proof3: "",
  });

  const update = (field: keyof typeof form, value: string) =>
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
    window.location.href = `mailto:service@kabifi.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setOpen(false);
  };

  const inputClass =
    "w-full border-2 border-primary/20 bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none";
  const labelClass =
    "text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground";

  const Field = ({
    id,
    label,
    hint,
    field,
    textarea,
    rows = 3,
  }: {
    id: string;
    label: string;
    hint?: string;
    field: keyof typeof form;
    textarea?: boolean;
    rows?: number;
  }) => (
    <div className="space-y-1.5">
      <label htmlFor={id} className={labelClass}>{label}</label>
      {hint && <p className="text-xs text-muted-foreground italic">{hint}</p>}
      {textarea ? (
        <textarea
          id={id}
          rows={rows}
          className={inputClass}
          value={form[field]}
          onChange={(e) => update(field, e.target.value)}
          maxLength={1000}
          required
        />
      ) : (
        <input
          id={id}
          className={inputClass}
          value={form[field]}
          onChange={(e) => update(field, e.target.value)}
          maxLength={500}
          required
        />
      )}
      {errors[field] && <p className="text-xs text-destructive">{errors[field]}</p>}
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-3xl">JOIN THE OPS SQUAD</DialogTitle>
          <DialogDescription className="text-sm leading-relaxed">
            We don't do corporate ladder climbing. We do deep, obsessive, ugly-problem solving. If you're ready to build the system that saves CPG brands from themselves, prove it below.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5">
          <Field id="js-name" label="1. Name" hint="What should we call you?" field="name" />
          <Field
            id="js-advantage"
            label="2. Your Unfair Advantage"
            hint={`Don't give us "hard worker" or "team player." If the building is on fire, what is the specific, undeniable thing we are relying on you to do better than anyone else in the room?`}
            field="advantage"
            textarea
          />
          <Field
            id="js-why"
            label="3. Why Kabifi?"
            hint="Our manifesto was a filter. If you passed it, why does this specific fight — saving physical brands from operational chaos — matter to you? No generic startup fluff."
            field="why"
            textarea
          />
          <Field
            id="js-friction"
            label="4. What friction do you love destroying?"
            hint="Most people avoid friction. Builders eat it for breakfast. What specific kind of mess, chaos, or broken system gives you a sick satisfaction to fix?"
            field="friction"
            textarea
          />
          <Field
            id="js-mastery"
            label="5. What are you obsessively trying to become the best in the world at?"
            hint="Not your job title. Not your current skill level. Where is your trajectory pointed? What are you relentlessly pursuing mastery over?"
            field="mastery"
            textarea
          />
          <div className="space-y-2">
            <p className={labelClass}>6. 3 Bullets of Proof</p>
            <p className="text-xs text-muted-foreground italic">
              No corporate jargon. No "managed a team of 5." Give us 3 undeniable facts about what you've actually shipped, broken, fixed, or conquered. Show us the scar tissue.
            </p>
            <Field id="js-p1" label="Bullet 1" field="proof1" />
            <Field id="js-p2" label="Bullet 2" field="proof2" />
            <Field id="js-p3" label="Bullet 3" field="proof3" />
          </div>
          <button
            type="submit"
            className="w-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Send Application
          </button>
          <p className="text-xs text-muted-foreground">
            This opens your email app with the application pre-filled to service@kabifi.com.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default JoinSquadDialog;
