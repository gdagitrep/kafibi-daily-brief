import { motion } from "framer-motion";

const industries = [
  { name: "Food", desc: "Snacks, pantry, frozen" },
  { name: "Beverage", desc: "RTD, soda, tonics" },
  { name: "Supplements", desc: "Powders, capsules, gummies" },
  { name: "Personal Care", desc: "Skincare, haircare, body" },
  { name: "Pet", desc: "Treats, food, wellness" },
  { name: "Household", desc: "Cleaning, home goods" },
];

const Industries = () => {
  return (
    <section id="industries" className="bg-cream py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary mb-4">
          ── Who we serve
        </p>
        <h2 className="font-display text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight mb-4 max-w-3xl">
          We work with CPG brands at every stage, helping them <em className="italic">simplify ops</em> and protect the shelf.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-ink/10 mt-14">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-cream p-8 aspect-square flex flex-col justify-between hover:bg-background transition-colors"
            >
              <span className="font-mono text-xs text-ink/60">0{i + 1}</span>
              <div>
                <h3 className="font-display text-3xl text-ink mb-1">{ind.name}</h3>
                <p className="text-sm text-ink/60">{ind.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
