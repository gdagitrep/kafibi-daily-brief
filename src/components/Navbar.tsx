import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import RequestAccessDialog from "@/components/RequestAccessDialog";
import logo from "@/assets/kabifi-mark.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  const sectionHref = (id: string) => (onHome ? `#${id}` : `/#${id}`);

  const navLinkClass =
    "hover:text-secondary-foreground transition-colors";

  const close = () => setOpen(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement bar */}
      <div className="bg-primary text-primary-foreground text-center text-xs font-medium tracking-wide py-2 px-4">
        Built with CPG operators, not just for them. <span className="opacity-80">Now in private beta →</span>
      </div>
      <nav className="bg-ink text-secondary-foreground border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2" onClick={close}>
            <img src={logo} alt="Kabifi logo" className="h-8 w-8 object-contain" />
            <span className="font-display text-2xl text-secondary-foreground">Kabifi</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-[0.15em] text-secondary-foreground/70">
            <a href={sectionHref("features")} className={navLinkClass}>Features</a>
            <a href={sectionHref("industries")} className={navLinkClass}>Industries</a>
            <a href={sectionHref("how")} className={navLinkClass}>How It Works</a>
            <Link to="/about" className={navLinkClass}>About</Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
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
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden p-2 -mr-2 text-secondary-foreground"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {open && (
          <div className="md:hidden border-t border-white/10 bg-ink">
            <div className="px-6 py-6 flex flex-col gap-5 text-xs font-mono uppercase tracking-[0.15em] text-secondary-foreground/80">
              <a href={sectionHref("features")} className={navLinkClass} onClick={close}>Features</a>
              <a href={sectionHref("industries")} className={navLinkClass} onClick={close}>Industries</a>
              <a href={sectionHref("how")} className={navLinkClass} onClick={close}>How It Works</a>
              <Link to="/about" className={navLinkClass} onClick={close}>About</Link>
              <Link to="/careers" className={navLinkClass} onClick={close}>Careers</Link>
              <Link to="/contact" className={navLinkClass} onClick={close}>Contact</Link>
              <div className="pt-2">
                <RequestAccessDialog
                  trigger={
                    <button
                      type="button"
                      onClick={close}
                      className="w-full bg-primary text-primary-foreground text-xs font-mono uppercase tracking-[0.15em] px-4 py-3 hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                    >
                      Get Started <span aria-hidden>›</span>
                    </button>
                  }
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
