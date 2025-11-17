import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Smartphone, ShoppingCart, Zap } from "lucide-react";

const WebSites = () => {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Diseño Responsivo",
      description: "Sitios que se adaptan perfectamente a todos los dispositivos"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Sitios Informativos",
      description: "Páginas web profesionales para presentar tu negocio"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Tiendas en Línea",
      description: "E-commerce completo para vender tus productos online"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rápido y Seguro",
      description: "Sitios optimizados para velocidad y seguridad"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="section-container pt-32 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Globe className="w-20 h-20 mx-auto mb-6 text-secondary animate-fade-in-up" />
            <h1 className="text-5xl md:text-7xl font-gothic font-black mb-6 gradient-text animate-fade-in-up">
              SITIOS WEB
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              Tu presencia digital profesional
            </p>
          </div>

          <Card className="p-8 md:p-12 max-w-4xl mx-auto mb-12 animate-fade-in">
            <p className="text-lg leading-relaxed text-foreground/90">
              Creación de sitios web responsivos de carácter informativo o tienda en línea 
              según las necesidades del negocio. Diseñamos experiencias digitales que convierten 
              visitantes en clientes.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-secondary mb-4">{feature.icon}</div>
                <h3 className="font-gothic font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
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

export default WebSites;
