import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Instagram, TrendingUp, Users, Target, Calendar } from "lucide-react";

const SocialMedia = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Estrategia Dirigida",
      description: "Mensaje enfocado a tu público objetivo específico"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Creadores de Contenido",
      description: "Contacto y gestión de colaboraciones estratégicas"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Anuncios Efectivos",
      description: "Campañas publicitarias que se traducen en ventas"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Seguimiento de Tendencias",
      description: "Contenido actualizado y relevante para tu audiencia"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="section-container pt-32 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Instagram className="w-20 h-20 mx-auto mb-6 text-primary animate-fade-in-up" />
            <h1 className="text-5xl md:text-7xl font-gothic font-black mb-6 gradient-text animate-fade-in-up">
              MANEJO DE REDES SOCIALES
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              Llevar tus redes sociales es mucho más que solo subir posts
            </p>
          </div>

          <Card className="p-8 md:p-12 max-w-4xl mx-auto mb-12 animate-fade-in">
            <p className="text-lg leading-relaxed text-foreground/90">
              Es hacer una estrategia completa con un mensaje dirigido a un público objetivo, 
              pensar y contactar a creadores de contenido que puedan colaborar contigo, 
              seguir tendencias y hacer anuncios efectivos para que lo veas traducido a ventas.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4">{feature.icon}</div>
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

export default SocialMedia;
