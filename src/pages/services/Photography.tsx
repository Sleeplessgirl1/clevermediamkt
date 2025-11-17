import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Camera, UtensilsCrossed, Package, User } from "lucide-react";

const Photography = () => {
  const services = [
    {
      icon: <UtensilsCrossed className="w-8 h-8" />,
      title: "Fotografía de Alimentos",
      description: "Imágenes apetitosas que hacen que tus productos destaquen"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Fotografía de Producto",
      description: "Resalta las características únicas de tus productos"
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Retrato Profesional",
      description: "Fotografías para tu marca personal o equipo"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Sesiones Personalizadas",
      description: "Adaptamos cada sesión a las necesidades de tu marca"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="section-container pt-32 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Camera className="w-20 h-20 mx-auto mb-6 text-primary animate-fade-in-up" />
            <h1 className="text-5xl md:text-7xl font-gothic font-black mb-6 gradient-text animate-fade-in-up">
              FOTOGRAFÍA
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              Capturamos la esencia de tu marca
            </p>
          </div>

          <Card className="p-8 md:p-12 max-w-4xl mx-auto mb-12 animate-fade-in">
            <p className="text-lg leading-relaxed text-foreground/90">
              Servicio de fotografía de alimentos, producto o retrato para tu marca personal. 
              Creamos imágenes de alta calidad que comunican profesionalismo y atraen a tu audiencia.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4">{service.icon}</div>
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

export default Photography;
