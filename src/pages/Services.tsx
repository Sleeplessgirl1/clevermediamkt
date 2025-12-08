import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Instagram, Palette, Video, Camera, Globe, Users } from "lucide-react";
const Services = () => {
  const services = [{
    icon: <Instagram className="w-12 h-12" />,
    title: "Manejo de Redes Sociales",
    description: "Llevar tus redes sociales es mucho más que solo subir posts. Es hacer una estrategia completa con un mensaje dirigido a un público objetivo.",
    path: "/servicios/redes-sociales",
    color: "text-primary"
  }, {
    icon: <Palette className="w-12 h-12" />,
    title: "Branding",
    description: "Construimos la identidad de tu negocio. Creamos logo e imagen corporativa para un negocio nuevo o para aquel que quiera refrescarse.",
    path: "/servicios/branding",
    color: "text-secondary"
  }, {
    icon: <Video className="w-12 h-12" />,
    title: "Creación de Contenido UGC",
    description: "Hacemos contenido de video en crudo o editado para cualquier marca que necesite una imagen para comunicar un mensaje.",
    path: "/servicios/contenido-ugc",
    color: "text-accent"
  }, {
    icon: <Camera className="w-12 h-12" />,
    title: "Fotografía",
    description: "Servicio de fotografía de alimentos, producto o retrato para tu marca personal.",
    path: "/servicios/fotografia",
    color: "text-primary"
  }, {
    icon: <Globe className="w-12 h-12" />,
    title: "Sitios Web",
    description: "Creación de sitios web responsivos de carácter informativo o tienda en línea según las necesidades del negocio.",
    path: "/servicios/sitios-web",
    color: "text-secondary"
  }, {
    icon: <Users className="w-12 h-12" />,
    title: "Asesorías 1:1",
    description: "¿Tienes un negocio o emprendimiento y sientes que no sabes qué publicar? Este servicio es completamente personalizado.",
    path: "/cursos",
    color: "text-accent"
  }];
  return <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="section-container pt-32 bg-card">
        <div className="container text-center mx-0">
          <h1 className="md:text-7xl font-gothic font-black mb-6 gradient-text animate-fade-in-up my-[30px] mx-0 px-0 py-[20px] text-4xl">
            NUESTROS SERVICIOS
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Soluciones integrales de marketing digital para impulsar tu negocio
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <Card key={index} className="p-8 hover-lift animate-fade-in group" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className={`mb-6 ${service.color} group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="font-gothic font-bold text-2xl mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <Link to={service.path}>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    Ver más detalles
                  </Button>
                </Link>
              </Card>)}
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Services;