import { Link } from "react-router-dom";
import RequestAccessDialog from "@/components/RequestAccessDialog";
import logo from "@/assets/kabifi-mark.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement bar */}
      <div className="bg-primary text-primary-foreground text-center text-xs font-medium tracking-wide py-2 px-4">
        Built with CPG operators, not just for them. <span className="opacity-80">Now in private beta →</span>
      </div>
      <nav className="bg-ink text-secondary-foreground border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Kabifi logo" className="h-8 w-8 object-contain" />
            <span className="font-display text-2xl text-secondary-foreground">Kabifi</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-[0.15em] text-secondary-foreground/70">
            <a href="#features" className="hover:text-secondary-foreground transition-colors">Features</a>
            <a href="#industries" className="hover:text-secondary-foreground transition-colors">Industries</a>
            <a href="#how" className="hover:text-secondary-foreground transition-colors">How It Works</a>
            <Link to="/about" className="hover:text-secondary-foreground transition-colors">About</Link>
            <Link to="/careers" className="hover:text-secondary-foreground transition-colors">Careers</Link>
          </div>
          <RequestAccessDialog
            trigger={
              <button
                type="button"
                className="bg-primary text-primary-foreground text-xs font-mono uppercase tracking-[0.15em] px-4 py-2.5 hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                Get Started <span aria-hidden>›</span>
              </button>
            }
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
