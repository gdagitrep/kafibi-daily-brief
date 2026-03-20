import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="gradient-bar" />
      <nav className="bg-background border-b-2 border-primary/20">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Kabifi logo" className="h-6 w-auto" />
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-primary">
              Kabifi
            </span>
          </div>
          <a
            href="#early-access"
            className="text-xs font-semibold tracking-[0.1em] uppercase border border-primary text-primary px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Request Invite
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;