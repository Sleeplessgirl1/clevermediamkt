import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, Phone, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    whatsapp: "",
    instagram: "",
    facebook: "",
    mensaje: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construir mensaje de WhatsApp
    const mensaje = `Hola! Soy ${formData.nombre} ${formData.apellido}.%0A%0A` +
      `Email: ${formData.email}%0A` +
      `WhatsApp: ${formData.whatsapp}%0A` +
      `Instagram: ${formData.instagram || 'No proporcionado'}%0A` +
      `Facebook: ${formData.facebook || 'No proporcionado'}%0A%0A` +
      `Mensaje: ${formData.mensaje}`;
    
    // Abrir WhatsApp con el mensaje
    window.open(`https://wa.me/526141543326?text=${mensaje}`, '_blank');
    
    toast.success("¡Redirigiendo a WhatsApp!", {
      description: "Continúa la conversación en WhatsApp"
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <div className="min-h-screen">
      <Navigation />

      <section className="section-container pt-32 bg-card py-[130px]">
        <div className="container mx-auto border-0">
          <div className="text-center mb-16 my-[38px]">
            <h1 className="md:text-7xl font-gothic font-black mb-6 gradient-text animate-fade-in-up text-4xl">
              HABLEMOS
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in">
              Estamos listos para ayudarte a crecer
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8 animate-fade-in px-0 mx-0 py-[6px]">
              <form onSubmit={handleSubmit} className="space-y-6 px-[21px]">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre *</Label>
                    <Input id="nombre" name="nombre" required value={formData.nombre} onChange={handleChange} placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apellido">Apellido *</Label>
                    <Input id="apellido" name="apellido" required value={formData.apellido} onChange={handleChange} placeholder="Tu apellido" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="tu@email.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp *</Label>
                  <Input id="whatsapp" name="whatsapp" type="tel" required value={formData.whatsapp} onChange={handleChange} placeholder="+52 614 154 3326" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="instagram">Instagram</Label>
                    <Input id="instagram" name="instagram" value={formData.instagram} onChange={handleChange} placeholder="@tuusuario" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="facebook">Facebook</Label>
                    <Input id="facebook" name="facebook" value={formData.facebook} onChange={handleChange} placeholder="Tu perfil" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje *</Label>
                  <Textarea id="mensaje" name="mensaje" required value={formData.mensaje} onChange={handleChange} placeholder="Cuéntanos sobre tu proyecto..." rows={5} />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary-variant">
                  Enviar por WhatsApp
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <Card className="p-8 px-[24px]">
                <h3 className="font-gothic font-bold text-2xl mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <a href="tel:6141543326" className="text-muted-foreground hover:text-primary">
                        614 154 3326
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:carolinamejia@clevermediamkt.com" className="text-muted-foreground hover:text-primary">
                        carolinamejia@clevermediamkt.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Instagram className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Instagram</p>
                      <a href="https://instagram.com/clevermedia.mkt" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                        @clevermedia.mkt
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Facebook className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Facebook</p>
                      <a href="https://facebook.com/clevermedia.mkt" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                        Clever Media
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
                <h3 className="font-gothic font-bold text-xl mb-4">Carolina Mejía</h3>
                <p className="text-muted-foreground mb-4">Directora General</p>
                <p className="text-sm">
                  Con más de 7 años de experiencia en marketing digital, Carolina lidera Clever Media 
                  con pasión y dedicación para ayudar a las empresas a alcanzar sus objetivos.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contact;