import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [{
    name: "Inicio",
    path: "/"
  }, {
    name: "Servicios",
    path: "/servicios"
  }, {
    name: "Sobre Nosotros",
    path: "/sobre-nosotros"
  }, {
    name: "Asesorías y Cursos",
    path: "/cursos"
  }, {
    name: "Contacto",
    path: "/contacto"
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 bg-popover-foreground">
        <div className="flex items-center justify-between h-20 shadow bg-zinc-950">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/Logo W.png" // Cambia esto a "logo (1).png" si se llama así
          alt="Clever Media" className="h-14 w-auto object-contain" // MÁS GRANDE
          />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <Link key={item.path} to={item.path} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                {item.name}
              </Link>)}
            <Button size="sm" className="bg-primary hover:bg-primary-variant">
              PONTE CLEVER
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden py-4 space-y-4 animate-fade-in">
            {navItems.map(item => <Link key={item.path} to={item.path} className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>)}
            <Button size="sm" className="w-full bg-primary hover:bg-primary-variant">
              PONTE CLEVER
            </Button>
          </div>}
      </div>
    </nav>;
};