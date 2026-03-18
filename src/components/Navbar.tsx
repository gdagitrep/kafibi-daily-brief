const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-sm font-medium tracking-[0.2em] uppercase text-foreground">
          Kafibi
        </span>
        <a
          href="#early-access"
          className="text-xs font-medium tracking-[0.1em] uppercase text-kafibi-purple hover:underline underline-offset-4 transition-colors"
        >
          Request Invite
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
