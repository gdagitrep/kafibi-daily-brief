import { motion } from "framer-motion";
import food from "@/assets/ind-food.jpg";
import beverage from "@/assets/ind-beverage.jpg";
import supplements from "@/assets/ind-supplements.jpg";
import personal from "@/assets/ind-personal.jpg";
import pet from "@/assets/ind-pet.jpg";
import household from "@/assets/ind-household.jpg";

const industries = [
  { name: "Food", desc: "Snacks, pantry, frozen", img: food },
  { name: "Beverage", desc: "RTD, soda, tonics", img: beverage },
  { name: "Supplements", desc: "Powders, capsules, gummies", img: supplements },
  { name: "Personal Care", desc: "Skincare, haircare, body", img: personal },
  { name: "Pet", desc: "Treats, food, wellness", img: pet },
  { name: "Household", desc: "Cleaning, home goods", img: household },
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
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <img
                src={ind.img}
                alt={ind.name}
                width={768}
                height={768}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlays: base darken + bottom gradient + brand tint on hover */}
              <div className="absolute inset-0 bg-ink/55 group-hover:bg-ink/35 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay bg-primary/30" />

              <div className="relative h-full p-7 flex flex-col justify-between text-secondary-foreground">
                <span className="font-mono text-xs text-secondary-foreground/70 tracking-[0.15em]">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl mb-1">{ind.name}</h3>
                  <p className="text-sm text-secondary-foreground/75">{ind.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
