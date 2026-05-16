import PageShell from "@/components/PageShell";
import RequestAccessDialog from "@/components/RequestAccessDialog";

const values = [
  {
    n: "01",
    name: "Curiosity",
    body: "Ask questions because you are a true scientist in your own realm of discovery.",
  },
  {
    n: "02",
    name: "Agency",
    body: "Take ownership of the wins and the opportunities.",
  },
  {
    n: "03",
    name: "Joy",
    body: "Who wants to work with someone who doesn't love what they do?",
  },
  {
    n: "04",
    name: "Resolve",
    body: "The resolve to solve real problems for real people in real time.",
  },
];

const Careers = () => {
  return (
    <PageShell>
      {/* Hero */}
      <section id="join" className="bg-ink text-secondary-foreground pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-6">
            Careers / Join Us
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] tracking-tight">
            What we build here <em className="italic">isn't</em> for everyone. And that is <em className="italic">by design</em>.
          </h1>
          <p className="mt-8 max-w-[60ch] text-lg text-secondary-foreground/70 leading-relaxed">
            We build tools for the people who make physical things. The CPG founders who carry the weight of the supply chain on their backs.
          </p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="bg-cream text-foreground py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-7 text-lg leading-[1.75] text-foreground/90">
            <p>
              The ones who don't get to tap out when a co-packer ghosts them or a compliance doc goes missing.
            </p>
            <p>
              Most tech companies build for clicks, views, and digital vanity. We build for the production floor. For the warehouse. For the unglamorous, razor-thin-margin reality of getting a physical product onto a shelf.
            </p>
            <p className="font-display text-2xl md:text-3xl leading-snug italic text-foreground">
              Silicon Valley doesn't understand this world. We do. Because we've lived it.
            </p>
            <p>
              They build bloated ERPs for corporations, or fluffy dashboards that look pretty but don't solve the operational chokehold.
            </p>
            <p>
              Working here takes real work. Real observation. Real pressure testing. And yes, sometimes it looks obsessive. Because it is. We study what breaks supply chains. We study what kills margins. Not in theory, but in the field. In real teams pushing real purchase orders.
            </p>
          </div>

          {/* Divider */}
          <div className="my-16 flex items-center gap-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent">Don't Apply If</span>
            <div className="flex-1 h-px bg-ink/15" />
          </div>

          <div className="space-y-7 text-lg leading-[1.75] text-foreground/90">
            <p>
              If you want to build features that nobody really needs, there are plenty of <em className="italic">other</em> companies for that. If you're looking for a quiet, low-stakes environment where you can hide in the backlog, don't apply here.
            </p>
          </div>
        </div>
      </section>

      {/* Do apply / call */}
      <section className="bg-ink text-secondary-foreground py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-px bg-white/10">
          <div className="md:col-span-4 bg-ink p-8">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent">Chapter 02</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
              But if you want to <em className="italic">build</em>...
            </h2>
          </div>
          <div className="md:col-span-8 bg-ink p-8 space-y-6 text-secondary-foreground/80 leading-relaxed">
            <p>
              If you want to build software that actually saves a business from stocking out.
            </p>
            <p>
              If you want to engineer systems that force accountability from vendors who are used to ignoring founders.
            </p>
            <p>
              If you want to work alongside people who expect something of you, and won't tolerate half-measures.
            </p>
            <p>
              If you refuse to build another useless tech toy, and instead want to build the operational advantage for the world's next great consumer brands...
            </p>
            <p className="font-display text-2xl md:text-3xl italic text-secondary-foreground">
              You're in the right place.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream text-foreground py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-6">
                Our Values
              </p>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-[18ch]">
                Four <em className="italic">non-negotiables</em>.
              </h2>
            </div>
            <p className="max-w-[36ch] text-foreground/70">
              We built Kabifi for the builders who want to operate at a high standard without burning themselves out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-ink/10">
            {values.map((v) => (
              <div key={v.n} className="bg-cream p-8 md:p-10">
                <div className="flex items-baseline gap-4">
                  <span className="text-xs font-mono tracking-[0.2em] text-accent">{v.n}</span>
                  <h3 className="font-display text-3xl md:text-4xl text-foreground">{v.name}</h3>
                </div>
                <p className="mt-4 text-foreground/80 leading-relaxed max-w-[42ch]">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="bg-cream text-foreground pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-display text-3xl md:text-4xl leading-[1.2] text-foreground">
            We're obsessed with one outcome: keeping early-stage CPG brands <em className="italic">audit-ready</em>, <em className="italic">shelf-ready</em>, and <em className="italic">profitable</em>.
          </p>
          <p className="mt-8 text-lg leading-[1.75] text-foreground/90">
            For the intensely capable who want an arena to push each other. For the teams who want to win clean, not collapse messy.
          </p>
          <p className="mt-8 font-display text-2xl md:text-3xl italic text-foreground">
            If this sounds like the fight you want to be in. Welcome.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-secondary-foreground py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-3xl md:text-4xl leading-tight">
              Think you're in the <em className="italic">right place</em>?
            </h3>
            <p className="mt-3 text-secondary-foreground/70 max-w-[50ch]">
              We're not running open reqs right now. Send us a note and tell us why you'd fit the fight.
            </p>
          </div>
          <RequestAccessDialog
            trigger={
              <button
                type="button"
                className="bg-primary text-primary-foreground text-xs font-mono uppercase tracking-[0.15em] px-6 py-3 hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                Get in touch ›
              </button>
            }
          />
        </div>
      </section>
    </PageShell>
  );
};

export default Careers;
