import PageShell from "@/components/PageShell";
import RequestAccessDialog from "@/components/RequestAccessDialog";

const pullQuotes = [
  "Operational chaos shouldn't be the price of getting on the shelf.",
  "You didn't start a brand to be a full-time firefighter.",
  "The people building software for food and consumer products had never actually worked in them.",
];

const About = () => {
  return (
    <PageShell>
      {/* Hero */}
      <section className="bg-ink text-secondary-foreground pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-6">
            About / Letter from the CEO
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] tracking-tight">
            Built by an <em className="italic">operator</em>, for the founders still <em className="italic">fighting</em> for their first 5M.
          </h1>
          <p className="mt-8 max-w-[60ch] text-lg text-secondary-foreground/70 leading-relaxed">
            A note from Richard Graystone, founder and CEO of Kabifi, on why this company exists and who it's for.
          </p>
        </div>
      </section>

      {/* Letter */}
      <section className="bg-cream text-foreground py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-7 text-lg leading-[1.75] text-foreground/90">
            <p className="font-display text-3xl md:text-4xl leading-[1.2] text-foreground">
              Operational chaos shouldn't be the price of getting on the shelf. But for most early-stage CPG brands, it is.
            </p>

            <p>
              Co-packers ghosting you on a PO. Compliance docs buried in a Google Drive folder no one can access. Buyer samples sitting in purgatory because you didn't have bandwidth to follow up. That gnawing feeling that something needs your attention today but you don't know what.
            </p>

            <p>
              You didn't start a brand to be a full-time firefighter. You started it to build something. But right now, if you're here, you're probably buried in the operational churn that should run itself.
            </p>
          </div>

          {/* Divider */}
          <div className="my-16 flex items-center gap-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent">Enter Kabifi</span>
            <div className="flex-1 h-px bg-ink/15" />
          </div>

          <div className="space-y-7 text-lg leading-[1.75] text-foreground/90">
            <p>
              We give emerging CPG brands the visibility and automation they need to stop reacting to problems and start preventing them. Kabifi tracks your pipeline, flags what needs attention before it breaks, and automates the follow-ups you're currently doing manually at midnight.
            </p>

            <p className="font-display text-2xl md:text-3xl leading-snug text-foreground italic">
              You can stop guessing about reorder points and start controlling your pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* Origin */}
      <section className="bg-ink text-secondary-foreground py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-px bg-white/10">
          <div className="md:col-span-4 bg-ink p-8">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent">Chapter 02</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
              From the <em className="italic">line</em> to the <em className="italic">laptop</em>.
            </h2>
          </div>
          <div className="md:col-span-8 bg-ink p-8 space-y-6 text-secondary-foreground/80 leading-relaxed">
            <p>
              I started Kabifi because I know this pain intimately. I grew up in my parents' restaurant, where I saw the real, hard cost of operational mishaps. By 26, I had worked every position in the industry—from dishwasher to general manager. I didn’t just clock in; I learned the lessons. Scaling the original Sweetgreen locations taught me the chaos of explosive demand outpacing supply. Running kitchens for established brands like Bob Evans showed me the limitations of rigid, legacy systems. And keeping scrappy mom-and-pop shops afloat taught me what happens when you have zero margin for error and a broken supply chain. 
            </p>
            <p>
              I know what happens when the supply chain breaks down, because I've felt it on the line.
            </p>
            <p>
              Eventually, I stepped out of the kitchen. I worked as a congressional staffer, ran campaigns, and ultimately landed in tech. But looking around Silicon Valley, one thing became painfully clear: They couldn't understand the world I came from.
            </p>
            <p>
              They didn't understand the blood, sweat, and razor-thin margins that go into getting a product onto a shelf. They built software for a world they'd never actually worked in.

              They didn't understand the world I came from.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-cream text-foreground py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-6">
            The Mission
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
            Operational <em className="italic">leverage</em> of the big guys, without the enterprise price tag.
          </h2>
          <div className="mt-10 space-y-6 text-lg leading-[1.75] text-foreground/90">
            <p>
              I built Kabifi to bridge that gap. To give early-stage brands the operational leverage of the big guys, without the enterprise price tag. Because you shouldn't have to wake up wondering what's about to catch fire.
            </p>
            <p className="font-display text-2xl md:text-3xl leading-snug italic text-foreground">
              Built for the CPG founders who are still fighting for their first 5M. This is how you stop the firefighting and start building.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-16 pt-8 border-t border-ink/15">
            <p className="font-display text-3xl text-foreground">Richard Graystone</p>
            <p className="mt-1 text-xs font-mono uppercase tracking-[0.25em] text-foreground/60">
              Founder & CEO, Kabifi
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-secondary-foreground py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-3xl md:text-4xl leading-tight">
              Stop firefighting. Start <em className="italic">building</em>.
            </h3>
            <p className="mt-3 text-secondary-foreground/70 max-w-[50ch]">
              Private beta is open for sub-$5M CPG brands ready to run their ops like the big guys.
            </p>
          </div>
          <RequestAccessDialog
            trigger={
              <button
                type="button"
                className="bg-primary text-primary-foreground text-xs font-mono uppercase tracking-[0.15em] px-6 py-3 hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                GET STARTED › <br />
              </button>
            }
          />
        </div>
      </section>

      {/* Hidden pullquote refs to keep tree-shake happy if unused later */}
      <span className="sr-only">{pullQuotes.join(" ")}</span>
    </PageShell>
  );
};

export default About;
