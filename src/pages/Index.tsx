import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Sparkles, Target, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Tus imágenes reales del folder public
  const logos = [
    "/logo (1).png",
    "/logo (2).png",
    "/logo (3).png",
    "/logo (4).png",
    "/logo (5).png",
    "/logo (6).png",
    "/logo (7).png",
    "/logo (8).png",
    "/logo (9).png",
    "/logo (10).png",
    "/logo (11).png",
    "/logo (12).png",
    "/logo (13).png",
    "/logo (14).png",
    "/logo (15).png",
    "/logo (16).png",
    "/logo (17).png",
  ];

  const greenFlags = [
    {
      icon: <Target className="w-8 h-8 text-secondary" />,
      title: "Organización Total",
      description:
        "Nos organizamos de tal manera que solo te preocupes por atender al cliente",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-secondary" />,
      title: "Asesoría Integral",
      description:
        "Nos metemos hasta la cocina de tu negocio para asesorarte y darte las recomendaciones que necesitas",
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Análisis Profundo",
      description: "Analizamos a tu cliente para determinar lo que le funciona",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-secondary" />,
      title: "Pasión por el Éxito",
      description: "Amamos lo que hacemos y se nota!!",
    },
  ];

  const testimonials = [
    {
      company: "XGOAT",
      text: "La verdad hemos estado trabajando bien a gusto todos y si nos ha gustado mucho el crecimiento de la publicidad contigo...",
    },
    {
      company: "HOTELES SANTA CRUZ",
      text: "Gracias Caro por todo el apoyo, has sido de muchísima ayuda en verdad",
    },
    {
      company: "THE HAPPY DOCTOR",
      text: "Yo ya confío plenamente en ti...",
    },
    {
      company: "CLÍNICA CONTORNO",
      text: "Solo quería compartirte que este mes ha sido el mejor mes en cuanto a ventas...",
    },
  ];

  const services = [
    { name: "Branding", path: "/servicios/branding" },
    { name: "Creación de contenido UGC", path: "/servicios/contenido-ugc" },
    { name: "Redes Sociales", path: "/servicios/redes-sociales" },
    { name: "Fotografía", path: "/servicios/fotografia" },
    { name: "Videos UGC", path: "/servicios/contenido-ugc" },
    { name: "Asesorías 1:1", path: "/cursos" },
    { name: "Sitios Web", path: "/servicios/sitios-web" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navegación con posición absoluta para que flote sobre el hero */}
      <div className="relative z-20">
        <Navigation />
      </div>

      {/* HERO FULLSCREEN */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      >
        {/* Imagen de fondo */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${encodeURI("/oficina.JPG")})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#121212', // Color de fondo por si la imagen no carga
          }}
        >
          {/* Overlay oscuro para mejorar la legibilidad del texto */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Contenido del Hero */}
        <div
          className={`container mx-auto px-4 transition-all duration-1000 relative z-10 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Imagen "PONTE CLEVER!!" */}
          <div className="mb-8 animate-scale-in flex justify-center">
            <img 
              src={encodeURI("/PONTE CLEVER.png")} 
              alt="PONTE CLEVER!!" 
              className="max-w-full h-auto drop-shadow-lg"
              style={{ maxHeight: "250px" }} // Un poco más grande para el hero
            />
          </div>

          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-12 animate-fade-in leading-relaxed">
            Con 7 años en el mercado, Clever Media ha ayudado a muchos emprendedores...
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-in-left">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="px-5 py-3 bg-white/95 backdrop-blur-sm border-2 border-white/50 rounded-full text-sm font-semibold text-accent hover:bg-primary hover:text-white hover:border-primary transition-all hover-lift hover-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.name}
              </Link>
            ))}
          </div>

          <Link to="/servicios" className="inline-block animate-slide-in-right">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-variant text-white text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all hover-lift"
            >
              CONOCE NUESTROS SERVICIOS
            </Button>
          </Link>
        </div>
      </section>

      {/* GREEN FLAGS */}
      <section className="section-container bg-background overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-gothic font-bold text-center mb-20 animate-fade-in-up leading-tight">
            ¿POR QUÉ SOMOS UNA <span className="text-secondary">GREEN FLAG?</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {greenFlags.map((flag, index) => (
              <Card
                key={index}
                className="p-8 hover-lift hover-glow border-2 hover:border-secondary transition-all animate-scale-in group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {flag.icon}
                </div>
                <h3 className="font-gothic font-bold text-xl mb-4 leading-snug">
                  {flag.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {flag.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        className="section-container"
        style={{
          background: "linear-gradient(135deg, hsl(183 47% 57%), hsl(184 42% 47%))",
        }}
      >
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-gothic font-bold text-center mb-20 text-white animate-fade-in-up leading-tight">
            LO QUE DICEN NUESTROS <span className="text-white drop-shadow-lg">CLIENTES</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-10 hover-lift hover-glow bg-white/95 backdrop-blur-sm border-2 border-white/50 animate-scale-in group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-gothic font-bold text-xl mb-3 text-accent">
                      {testimonial.company}
                    </h3>
                    <p className="text-muted-foreground italic leading-relaxed text-base">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* LOGOS SECTION - MARQUESINA CONTINUA */}
      <section className="w-full py-16 bg-gradient-to-b from-background to-card overflow-hidden">
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-center text-foreground text-3xl md:text-4xl font-gothic font-bold">
            Nuestros Clientes
          </h2>
        </div>

        <div className="relative">
          {/* Gradientes laterales para efecto fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent z-10"></div>
          
          <div className="flex animate-marquee hover:pause">
            {/* Primera copia de logos */}
            {logos.map((src, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex-shrink-0 w-48 h-48 mx-4 flex items-center justify-center"
              >
                <div className="w-full h-full bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/50 hover:bg-card transition-all hover:scale-105 flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Logo ${index + 1}`}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
            {/* Segunda copia para loop infinito */}
            {logos.map((src, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex-shrink-0 w-48 h-48 mx-4 flex items-center justify-center"
              >
                <div className="w-full h-full bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/50 hover:bg-card transition-all hover:scale-105 flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Logo ${index + 1}`}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;