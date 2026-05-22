import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const navLinks = [{
  name: "About",
  href: "#skills"
}, {
  name: "Projects",
  href: "#projects"
}, {
  name: "Education",
  href: "#education"
}, {
  name: "Certifications",
  href: "#certifications"
}, {
  name: "Contact",
  href: "#contact"
}];
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-4" : "py-6"}`}>
      <div className="container px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-bold font-display text-gradient">
      </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => <a key={link.name} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>)}
        </div>

        {/* CTA Button */}
        <a href="/Pavankumar_Majji_Resume.pdf" download className="hidden md:inline-flex">
          <Button className="bg-gradient-primary text-primary-foreground font-medium hover:opacity-90" size="sm">
            Download Resume
          </Button>
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-border">
          <div className="container px-4 py-6 flex flex-col gap-4">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>)}
            <a href="/Pavankumar_Majji_Resume.pdf" download>
              <Button className="bg-gradient-primary text-primary-foreground font-medium mt-2 w-full">
                Download Resume
              </Button>
            </a>
          </div>
        </div>}
    </nav>;
};
export default Navbar;