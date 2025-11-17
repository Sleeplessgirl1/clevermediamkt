import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Video, Film, Edit, MessageSquare } from "lucide-react";

const ContentCreation = () => {
  const features = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video en Crudo",
      description: "Contenido auténtico sin edición para máxima credibilidad"
    },
    {
      icon: <Edit className="w-8 h-8" />,
      title: "Video Editado",
      description: "Producción profesional con edición completa"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Mensaje de Marca",
      description: "Comunicamos efectivamente el mensaje de tu marca"
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Sin Compromiso",
      description: "No necesitas llevar tus redes con nosotros, solo el contenido"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="section-container pt-32 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Video className="w-20 h-20 mx-auto mb-6 text-accent animate-fade-in-up" />
            <h1 className="text-5xl md:text-7xl font-gothic font-black mb-6 gradient-text animate-fade-in-up">
              CREACIÓN DE CONTENIDO UGC
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              Videos auténticos que conectan con tu audiencia
            </p>
          </div>

          <Card className="p-8 md:p-12 max-w-4xl mx-auto mb-12 animate-fade-in">
            <p className="text-lg leading-relaxed text-foreground/90">
              Hacemos contenido de video en crudo o editado para cualquier marca que necesite 
              una imagen para comunicar un mensaje sin necesidad de llevar sus redes ni nada similar. 
              Simplemente ser vocero del mensaje de la marca.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-accent mb-4">{feature.icon}</div>
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

export default ContentCreation;
