import { Button } from "@/components/ui/button";
import qistLogo from "@/assets/qist-logo.jpeg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <img src={qistLogo} alt="Qist logo" className="h-8 w-8 rounded-md object-cover" />
          <span className="font-display text-2xl font-bold text-primary">qist</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
