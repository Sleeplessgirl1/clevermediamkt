import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Palette, FileText, Briefcase, Sparkles } from "lucide-react";

const Branding = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Diseño de Logo",
      description: "Creamos logos únicos que representan la esencia de tu marca"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Imagen Corporativa",
      description: "Identidad visual completa y coherente para tu negocio"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Papelería",
      description: "Tarjetas de presentación y papelería corporativa profesional"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Refrescamiento de Marca",
      description: "Renovamos marcas existentes manteniendo su esencia"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="section-container pt-32 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Palette className="w-20 h-20 mx-auto mb-6 text-secondary animate-fade-in-up" />
            <h1 className="text-5xl md:text-7xl font-gothic font-black mb-6 gradient-text animate-fade-in-up">
              BRANDING
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              Construimos la identidad de tu negocio
            </p>
          </div>

          <Card className="p-8 md:p-12 max-w-4xl mx-auto mb-12 animate-fade-in">
            <p className="text-lg leading-relaxed text-foreground/90">
              Creamos logo e imagen corporativa para un negocio nuevo o para aquel que quiera refrescarse. 
              Esto incluye todo tipo de diseño: tarjetas de presentación, papelería corporativa, y más.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-secondary mb-4">{service.icon}</div>
                <h3 className="font-gothic font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contacto">
              <Button size="lg" className="bg-primary hover:bg-primary-variant">
                Solicitar Información
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Branding;
