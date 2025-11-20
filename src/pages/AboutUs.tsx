import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Camera, Palette, Briefcase, GraduationCap, Sparkles } from "lucide-react";

const AboutUs = () => {
  const services = [
    { icon: <Sparkles className="w-6 h-6" />, name: "Diseño digital" },
    { icon: <Palette className="w-6 h-6" />, name: "Branding" },
    { icon: <Camera className="w-6 h-6" />, name: "Fotografía" },
    { icon: <GraduationCap className="w-6 h-6" />, name: "Asesorías" },
    { icon: <Briefcase className="w-6 h-6" />, name: "Creación" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="section-container pt-40 bg-card">
        <div className="container mx-auto max-w-6xl">
          {/* TÍTULO PRINCIPAL */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-gothic font-black mb-6 gradient-text">
              Clever WHO??
            </h1>
          </div>

          {/* TARJETA DE PRESENTACIÓN - CARO */}
          <Card className="p-8 md:p-12 mb-12 animate-fade-in hover-lift">
            <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
              {/* IMAGEN */}
              <div className="w-full">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/IMG_7375.jpg"
                    alt="Caro Mejia"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* CONTENIDO */}
              <div>
                <div className="mb-6">
                  <h2 className="text-3xl font-gothic font-bold mb-4 text-primary">
                    Hola!! Soy Caro Mejia
                  </h2>
                  <p className="text-xl text-muted-foreground mb-4">
                    Mercadóloga fundadora de Clever Media Marketing
                  </p>
                </div>
                <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                  Somos una agencia creativa y organizada enfocada en facilitarte la vida para que tu 
                  preocupación sea solo atender a tu cliente y vender. Mi intención siempre será y ha 
                  sido facilitarte el trabajo y hacer un equipo contigo.
                </p>
                <p className="text-lg leading-relaxed text-foreground/90">
                  Egresada en 2015 por el Tecnológico de Monterrey de la carrera de mercadotecnia y 
                  comunicación, laboré 3 años en el mundo corporativo en diversas empresas del medio: 
                  agencias, relaciones públicas, ventas, revistas y en empresas como Brasa Desarrollos 
                  o Cementos de Chihuahua.
                </p>
              </div>
            </div>
          </Card>

          {/* GRID DE TARJETAS */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 hover-lift animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-center mb-4">
                <div className="text-6xl font-gothic font-black text-secondary mb-2">+2020</div>
              </div>
              <h3 className="text-2xl font-gothic font-bold mb-4 text-center">
                Quién es Caro?
              </h3>
              <p className="text-lg leading-relaxed text-foreground/90 mb-4">
                Me apasionan las redes sociales y las tendencias por lo que inicié como freelancer 
                en 2018 para poder iniciar formalmente mi negocio en 2020.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                Amo ver que los negocios que manejamos crecen con la correcta estrategia e inversión 
                en publicidad. Su éxito es el nuestro.
              </p>
            </Card>

            <Card className="p-8 hover-lift animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-center mb-4">
                <div className="text-6xl font-gothic font-black text-secondary mb-2">+5</div>
                <div className="text-xl font-gothic font-bold text-muted-foreground">Personas</div>
              </div>
              <h3 className="text-2xl font-gothic font-bold mb-4 text-center">
                Ahora somos un equipo trabajando contigo
              </h3>
              <p className="text-lg leading-relaxed text-foreground/90">
                Si bien siempre he amado el trato con el cliente sentía que mi lugar no pertenecía 
                ahí por mi inquietud de siempre hacer las cosas mejor, por sentirme truncada al no 
                poder expresar mis ideas, mi creatividad y mi potencial.
              </p>
            </Card>
          </div>

          {/* SERVICIOS */}
          <Card className="p-8 md:p-12 mb-12 animate-fade-in bg-gradient-to-br from-primary/10 to-secondary/10">
            <h3 className="text-2xl font-gothic font-bold mb-8 text-center">
              Nuestros Servicios
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-6 py-3 bg-background rounded-full hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-primary">{service.icon}</div>
                  <span className="font-semibold">{service.name}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center animate-fade-in">
            <h3 className="text-3xl font-gothic font-bold mb-6">Escríbenos</h3>
            <Link to="/contacto">
              <Button size="lg" className="bg-primary hover:bg-primary-variant">
                Contáctanos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
