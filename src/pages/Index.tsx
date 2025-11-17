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

  const greenFlags = [
    {
      icon: <Target className="w-8 h-8 text-secondary" />,
      title: "Organización Total",
      description: "Nos organizamos de tal manera que solo te preocupes por atender al cliente"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-secondary" />,
      title: "Asesoría Integral",
      description: "Nos metemos hasta la cocina de tu negocio para asesorarte y darte las recomendaciones que necesitas"
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Análisis Profundo",
      description: "Analizamos a tu cliente para determinar lo que le funciona"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-secondary" />,
      title: "Pasión por el Éxito",
      description: "Amamos lo que hacemos y se nota!!"
    }
  ];

  const testimonials = [
    {
      company: "XGOAT",
      text: "La verdad hemos estado trabajando bien a gusto todos y si nos ha gustado mucho el crecimiento de la publicidad contigo, entonces lo que tú digas que está mejor vamos a darle por ahí. Yo la verdad ahorita tengo toda mi confianza ahí contigo",
    },
    {
      company: "HOTELES SANTA CRUZ",
      text: "Gracias Caro por todo el apoyo, has sido de muchísima ayuda en verdad",
    },
    {
      company: "THE HAPPY DOCTOR",
      text: "Yo ya confío plenamente en ti, ya vi como trabajas, ya vi como te gusta manejarte, ya vi que no haces todo al ahí se va, entonces dínos como aterrizarlo en una juntita",
    },
    {
      company: "CLÍNICA CONTORNO",
      text: "Solo quería compartirte que este mes ha sido el mejor mes en cuanto a ventas en cuanto abrimos la clínica",
    }
  ];

  const services = [
    { name: "Branding", path: "/servicios/branding" },
    { name: "Creación de contenido UGC", path: "/servicios/contenido-ugc" },
    { name: "Redes Sociales", path: "/servicios/redes-sociales" },
    { name: "Fotografía", path: "/servicios/fotografia" },
    { name: "Videos UGC", path: "/servicios/contenido-ugc" },
    { name: "Asesorías 1:1", path: "/cursos" },
    { name: "Sitios Web", path: "/servicios/sitios-web" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-container pt-32" style={{ background: 'var(--gradient-hero)' }}>
        <div className={`container mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-gothic font-black mb-6 gradient-text animate-fade-in-up">
            PONTE CLEVER!!
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-12 animate-fade-in">
            Con 7 años en el mercado, Clever Media ha ayudado a muchos emprendedores y empresas a aumentar sus ventas y exposición a nivel local, estatal y nacional
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-all hover-lift"
              >
                {service.name}
              </Link>
            ))}
          </div>
          <Link to="/servicios">
            <Button size="lg" className="bg-primary hover:bg-primary-variant text-lg px-8 py-6 animate-fade-in">
              CONOCE NUESTROS SERVICIOS
            </Button>
          </Link>
        </div>
      </section>

      {/* Green Flags Section */}
      <section className="section-container bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-gothic font-bold text-center mb-16 animate-fade-in-up">
            ¿POR QUÉ SOMOS UNA <span className="text-secondary">GREEN FLAG?</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {greenFlags.map((flag, index) => (
              <Card
                key={index}
                className="p-6 hover-lift border-2 hover:border-secondary transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">{flag.icon}</div>
                <h3 className="font-gothic font-bold text-xl mb-3">{flag.title}</h3>
                <p className="text-sm text-muted-foreground">{flag.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-container bg-card">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-gothic font-bold text-center mb-16 animate-fade-in-up">
            LO QUE DICEN NUESTROS <span className="text-primary">CLIENTES</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-2 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-gothic font-bold text-lg mb-2">{testimonial.company}</h3>
                    <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-container bg-background">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-gothic font-bold mb-12 animate-fade-in-up">
            NUESTROS <span className="gradient-text">CLIENTES</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Trabajamos con más de 17 marcas que confían en nosotros
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
            {[...Array(12)].map((_, index) => (
              <div
                key={index}
                className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center hover:opacity-100 transition-opacity"
              >
                <span className="text-xs text-muted-foreground">Logo {index + 1}</span>
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
