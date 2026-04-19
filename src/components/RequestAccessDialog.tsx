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

const callTimes = ["Morning", "Afternoon", "Evening", "Anytime"] as const;

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().min(1, "Company is required").max(150),
  size: z.string().min(1, "Select a company size"),
  location: z.string().trim().min(1, "Location is required").max(150),
  callTime: z.enum(callTimes),
});

type RequestAccessDialogProps = {
  trigger: ReactNode;
};

const RequestAccessDialog = ({ trigger }: RequestAccessDialogProps) => {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    size: "",
    location: "",
    callTime: "Morning" as (typeof callTimes)[number],
  });

  const update = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0];
        if (typeof key === "string") fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    const { name, email, company, size, location, callTime } = result.data;
    const subject = `Kabifi access request from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Company size: ${size}`,
      `Location: ${location}`,
      `Best time to call: ${callTime}`,
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

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            Request Access
          </DialogTitle>
          <DialogDescription>
            Tell us a bit about your operation and we'll be in touch.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="ra-name" className={labelClass}>Name</label>
            <input
              id="ra-name"
              className={inputClass}
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              maxLength={100}
              required
            />
            {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
          </div>
          <div className="space-y-1.5">
            <label htmlFor="ra-email" className={labelClass}>Email</label>
            <input
              id="ra-email"
              type="email"
              className={inputClass}
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              maxLength={255}
              required
            />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>
          <div className="space-y-1.5">
            <label htmlFor="ra-company" className={labelClass}>Company</label>
            <input
              id="ra-company"
              className={inputClass}
              value={form.company}
              onChange={(e) => update("company", e.target.value)}
              maxLength={150}
              required
            />
            {errors.company && <p className="text-xs text-destructive">{errors.company}</p>}
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="ra-size" className={labelClass}>Company size</label>
              <select
                id="ra-size"
                className={inputClass}
                value={form.size}
                onChange={(e) => update("size", e.target.value)}
                required
              >
                <option value="">Select…</option>
                <option value="1-10">1–10</option>
                <option value="11-50">11–50</option>
                <option value="51-200">51–200</option>
                <option value="201-1000">201–1000</option>
                <option value="1000+">1000+</option>
              </select>
              {errors.size && <p className="text-xs text-destructive">{errors.size}</p>}
            </div>
            <div className="space-y-1.5">
              <label htmlFor="ra-location" className={labelClass}>Location</label>
              <input
                id="ra-location"
                className={inputClass}
                value={form.location}
                onChange={(e) => update("location", e.target.value)}
                placeholder="City, Country"
                maxLength={150}
                required
              />
              {errors.location && <p className="text-xs text-destructive">{errors.location}</p>}
            </div>
          </div>
          <div className="space-y-2">
            <p className={labelClass}>Best time to call</p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {callTimes.map((time) => {
                const active = form.callTime === time;
                return (
                  <button
                    key={time}
                    type="button"
                    onClick={() => update("callTime", time)}
                    className={`border-2 px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-colors ${
                      active
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-primary/20 text-foreground hover:border-primary"
                    }`}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Send Request
          </button>
          <p className="text-xs text-muted-foreground">
            This opens your email app with the request pre-filled to service@kabifi.com.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RequestAccessDialog;
