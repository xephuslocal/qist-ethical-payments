import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <span className="font-display text-2xl font-bold text-primary">qist</span>
      </div>
    </nav>
  );
};

export default Navbar;
