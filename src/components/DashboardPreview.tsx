import { motion } from "framer-motion";

const actions = [
  {
    label: "SLA ALERT",
    labelColor: "text-destructive",
    dotColor: "bg-destructive",
    text: "Co-packer past 24hr response on Heritage Granola PO. Auto-drafted follow-up email ready.",
    action: "Send Follow-Up",
    actionFilled: true,
  },
  {
    label: "COMPLIANCE HOLD",
    labelColor: "text-[hsl(35,70%,45%)]",
    dotColor: "bg-[hsl(35,70%,45%)]",
    text: "Allergen review pending for New SKU Label. Requires sign-off before print run on Tuesday.",
    action: "Review Label",
    actionFilled: false,
  },
  {
    label: "BUYER FOLLOW-UP",
    labelColor: "text-[hsl(35,70%,45%)]",
    dotColor: "bg-[hsl(35,70%,45%)]",
    text: "7-day check-in due for Whole Foods buyer who received Coastal Mix sample.",
    action: "Draft Email",
    actionFilled: false,
  },
  {
    label: "INVENTORY TRIGGER",
    labelColor: "text-secondary",
    dotColor: "bg-secondary",
    text: "Reorder point hit for Core SKU 001. Co-packer lead time is 14 days. Stock-out predicted in 18 days.",
    action: "Create Work Order",
    actionFilled: false,
  },
];

const stats = [
  { label: "SLA ALERT", value: "1", sub: "Vendor past 24hr response time", borderColor: "border-t-destructive" },
  { label: "COMPLIANCE", value: "1", sub: "Label gate awaiting sign-off", borderColor: "border-t-[hsl(35,70%,45%)]" },
  { label: "ON TRACK", value: "2", sub: "Production runs on schedule", borderColor: "border-t-secondary" },
];

const sidebarItems = [
  { icon: "◆", label: "Ops Brief", active: true },
  { icon: "▦", label: "Production", active: false },
  { icon: "◎", label: "Compliance", active: false },
  { icon: "⊕", label: "Buyers", active: false },
  { icon: "◇", label: "Vendors", active: false },
];

const DashboardPreview = () => {
  return (
    <section className="py-8 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
          {"\n"}
        </p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="border border-border bg-[hsl(30,20%,97%)] shadow-2xl shadow-primary/5 overflow-hidden"
        >
          {/* Browser chrome */}
          <div className="bg-[hsl(30,15%,94%)] border-b border-border px-4 py-3 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[hsl(0,60%,65%)]" />
              <div className="w-3 h-3 rounded-full bg-[hsl(40,70%,65%)]" />
              <div className="w-3 h-3 rounded-full bg-[hsl(140,50%,55%)]" />
            </div>
            <div className="flex-1 text-center text-xs text-muted-foreground font-mono">
              kabifi.com - Ops Hub
            </div>
          </div>

          <div className="flex min-h-[480px]">
            {/* Sidebar */}
            <div className="w-48 border-r border-border bg-[hsl(30,15%,96%)] p-4 hidden md:flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold rounded-sm">K</div>
                  <span className="text-sm font-bold text-foreground">Kabifi</span>
                </div>
                <div className="space-y-1">
                  {sidebarItems.map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2.5 px-3 py-2 text-sm ${
                        item.active
                          ? "font-semibold text-foreground bg-background"
                          : "text-muted-foreground"
                      }`}
                    >
                      <span className="text-xs">{item.icon}</span>
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <div>
                  <p className="font-medium text-foreground">Last synced</p>
                  <p>4 minutes ago</p>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 p-6 md:p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-1">
                    Your Ops Brief - March 18, 2026
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Today's <em className="font-serif italic">priorities.</em>
                  </h3>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 border border-destructive/30 text-destructive text-[10px] font-mono uppercase tracking-wider px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive" />
                  3 Actions Needed
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {stats.map((stat) => (
                  <div key={stat.label} className={`border border-border ${stat.borderColor} border-t-[3px] bg-background p-3`}>
                    <p className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-xl font-bold text-secondary">{stat.value}</p>
                    <p className="text-[10px] text-muted-foreground">{stat.sub}</p>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Today's Actions
              </p>
              <div className="space-y-3">
                {actions.map((action) => (
                  <div key={action.label} className="border border-border bg-background p-4 flex items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <p className={`text-[10px] font-mono uppercase tracking-[0.15em] ${action.labelColor} mb-1.5`}>
                        {action.label}
                      </p>
                      <div className="flex items-start gap-2.5">
                        <div className={`w-2.5 h-2.5 rounded-full ${action.dotColor} mt-1.5 shrink-0`} />
                        <p className="text-sm font-medium text-foreground">{action.text}</p>
                      </div>
                    </div>
                    <button
                      className={`text-xs font-semibold px-4 py-2 shrink-0 transition-colors ${
                        action.actionFilled
                          ? "bg-foreground text-background"
                          : "border border-border text-foreground hover:bg-muted"
                      }`}
                    >
                      {action.action}
                    </button>
                  </div>
                ))}
              </div>

              {/* Footer stats */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-[10px] text-muted-foreground font-mono">
                <span>Predicted stockouts this week: <strong className="text-foreground">1</strong></span>
                <span>Avoided last week: <strong className="text-foreground">3</strong></span>
                <span className="ml-auto">12 SKUs tracked · Kabifi Ops Hub</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;