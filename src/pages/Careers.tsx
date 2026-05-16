import PageShell from "@/components/PageShell";
import JoinSquadDialog from "@/components/JoinSquadDialog";
import collabImg from "@/assets/careers-collab.jpg";
import whiteboardImg from "@/assets/careers-whiteboard.jpg";
import warehouseImg from "@/assets/careers-warehouse.jpg";
import debateImg from "@/assets/careers-debate.jpg";

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
      {/* Hero with photo */}
      <section className="bg-ink text-secondary-foreground pt-28 pb-0 px-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-baseline justify-between gap-6 mb-10">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-accent">
              Careers / 2026
            </p>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-secondary-foreground/40 hidden md:block">
              Join the Ops Squad
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end">
            <div className="md:col-span-7">
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
                What we build here <em className="italic">isn't</em> for everyone.
                <span className="block text-accent mt-2">By design.</span>
              </h1>
            </div>
            <div className="md:col-span-5">
              <div className="border-l border-accent pl-5">
                <p className="text-lg text-secondary-foreground/75 leading-relaxed">
                  We build tools for the people who make physical things. The CPG founders who carry the weight of the supply chain on their backs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-bleed hero image */}
        <div className="mt-16 relative">
          <img
            src={collabImg}
            alt="Kabifi team collaborating on the production floor"
            width={1280}
            height={896}
            className="w-full h-[60vh] md:h-[78vh] object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 text-secondary-foreground">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-secondary-foreground/70">
              Fig. 01 / On the floor, not the cloud
            </p>
            <a
              href="#join"
              className="text-xs font-mono uppercase tracking-[0.25em] border-b border-accent pb-1 hover:text-accent transition-colors"
            >
              Scroll to apply ↓
            </a>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="bg-cream text-foreground py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10">
          <aside className="md:col-span-4">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-accent mb-4">
              Chapter 01
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
              Silicon Valley doesn't understand this world. <em className="italic">We do.</em>
            </h2>
            <div className="mt-8">
              <img
                src={warehouseImg}
                alt="Warehouse shelves stacked with CPG product"
                width={1280}
                height={896}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover"
              />
              <p className="mt-3 text-xs font-mono uppercase tracking-[0.2em] text-foreground/50">
                Fig. 02 / The unglamorous reality
              </p>
            </div>
          </aside>

          <div className="md:col-span-8 md:pl-10 md:border-l md:border-ink/15 space-y-7 text-lg leading-[1.75] text-foreground/85">
            <p>
              The ones who don't get to tap out when a co-packer ghosts them or a compliance doc goes missing.
            </p>
            <p>
              Most tech companies build for clicks, views, and digital vanity. We build for the production floor. For the warehouse. For the unglamorous, razor-thin-margin reality of getting a physical product onto a shelf.
            </p>
            <p>
              They build bloated ERPs for corporations, or fluffy dashboards that look pretty but don't solve the operational chokehold.
            </p>
            <p>
              Working here takes real work. Real observation. Real pressure testing. And yes, sometimes it looks obsessive. Because it is. We study what breaks supply chains. We study what kills margins. Not in theory, but in the field. In real teams pushing real purchase orders.
            </p>

            <div className="pt-6 mt-6 border-t border-ink/15">
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-accent mb-3">
                Don't apply if
              </p>
              <p className="font-display text-2xl md:text-3xl leading-snug italic text-foreground">
                You want to hide in the backlog and build features nobody needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration / competition split */}
      <section className="bg-ink text-secondary-foreground">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[60vh] md:min-h-[80vh] order-2 md:order-1">
            <img
              src={debateImg}
              alt="Two team members in focused conversation"
              width={1024}
              height={1280}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-ink/20" />
            <p className="absolute bottom-5 left-5 text-xs font-mono uppercase tracking-[0.25em] text-secondary-foreground/80">
              Fig. 03 / Push each other
            </p>
          </div>
          <div className="order-1 md:order-2 p-10 md:p-16 lg:p-20 flex flex-col justify-center">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-accent mb-6">
              Chapter 02
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-tight">
              But if you want to <em className="italic">build</em>...
            </h2>
            <div className="mt-8 space-y-5 text-secondary-foreground/80 leading-relaxed max-w-[52ch]">
              <p>If you want to build software that actually saves a business from stocking out.</p>
              <p>If you want to engineer systems that force accountability from vendors who are used to ignoring founders.</p>
              <p>If you want to work alongside people who expect something of you, and won't tolerate half-measures.</p>
              <p>If you refuse to build another useless tech toy, and instead want to build the operational advantage for the world's next great consumer brands...</p>
            </div>
            <p className="mt-10 font-display text-3xl md:text-4xl italic text-accent">
              You're in the right place.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream text-foreground py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-accent mb-6">
                Our Values / Four non-negotiables
              </p>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-[18ch]">
                The rules of <em className="italic">the squad</em>.
              </h2>
            </div>
            <p className="max-w-[36ch] text-foreground/70">
              For the intensely capable who want an arena to push each other. For the teams who want to win clean, not collapse messy.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-px bg-ink/10">
            <div className="md:col-span-4 row-span-2 bg-cream relative min-h-[320px] md:min-h-0">
              <img
                src={whiteboardImg}
                alt="Hands mapping supply chain on a whiteboard"
                width={1024}
                height={1280}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 text-secondary-foreground">
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-secondary-foreground/90">
                  Fig. 04 / Map it, break it, ship it
                </p>
              </div>
            </div>
            {values.map((v) => (
              <div key={v.n} className="md:col-span-4 bg-cream p-8 md:p-10">
                <div className="flex items-baseline gap-4">
                  <span className="text-xs font-mono tracking-[0.25em] text-accent">{v.n}</span>
                  <h3 className="font-display text-3xl md:text-4xl text-foreground">{v.name}</h3>
                </div>
                <p className="mt-4 text-foreground/80 leading-relaxed max-w-[34ch]">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome quote */}
      <section className="bg-cream text-foreground pb-24 px-6">
        <div className="max-w-4xl mx-auto border-t border-ink/15 pt-16">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-accent mb-6">
            The Outcome
          </p>
          <p className="font-display text-3xl md:text-5xl leading-[1.15] text-foreground">
            We're obsessed with one outcome: keeping early-stage CPG brands <em className="italic">audit-ready</em>, <em className="italic">shelf-ready</em>, and <em className="italic">profitable</em>.
          </p>
          <p className="mt-10 font-display text-2xl md:text-3xl italic text-foreground/70">
            If this sounds like the fight you want to be in. Welcome.
          </p>
        </div>
      </section>

      {/* CTA / Apply */}
      <section id="join" className="bg-ink text-secondary-foreground py-24 px-6 border-t border-white/5 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-accent mb-6">
                Apply / Join the Ops Squad
              </p>
              <h3 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-tight">
                Think you're in the <em className="italic">right place</em>?
              </h3>
              <p className="mt-6 text-secondary-foreground/70 max-w-[52ch] leading-relaxed">
                We're not running open reqs right now. Send us a note and tell us why you'd fit the fight.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <JoinSquadDialog
                trigger={
                  <button
                    type="button"
                    className="bg-primary text-primary-foreground text-xs font-mono uppercase tracking-[0.2em] px-7 py-4 hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                  >
                    Apply ›
                  </button>
                }
              />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Careers;
