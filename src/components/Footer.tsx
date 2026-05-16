import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-ink text-secondary-foreground/70 py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs">K</div>
            <span className="font-display text-2xl text-secondary-foreground">Kabifi</span>
          </div>
          <p className="text-xs font-mono uppercase tracking-[0.15em]">The ops hub for early-stage CPG.</p>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-xs font-mono uppercase tracking-[0.15em]">
          <Link to="/privacy" className="hover:text-secondary-foreground transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-secondary-foreground transition-colors">Terms</Link>
          <Link to="/contact" className="hover:text-secondary-foreground transition-colors">Contact</Link>
          <span className="text-secondary-foreground/40">© 2026 Kabifi</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
