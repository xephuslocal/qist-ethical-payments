import { Button } from "@/components/ui/button";
import qistLogo from "@/assets/qist-logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <img src={qistLogo} alt="Qist" className="h-8 w-auto" />
      </div>
    </nav>
  );
};

export default Navbar;
