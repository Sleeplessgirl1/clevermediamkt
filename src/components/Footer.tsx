import { Instagram, Facebook, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Logo Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-gothic font-bold gradient-text">
              CLEVER MEDIA
            </h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Agencia de marketing digital con 7 años de experiencia ayudando a empresas a crecer.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div>
              <p className="font-semibold mb-2">Carolina Mejía</p>
              <p className="text-sm text-muted-foreground">Directora General</p>
            </div>
            
            <div className="space-y-2">
              <a
                href="tel:6141543326"
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Phone size={16} />
                614 154 3326
              </a>
              <a
                href="mailto:carolinamejia@clevermediamkt.com"
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Mail size={16} />
                carolinamejia@clevermediamkt.com
              </a>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com/clevermedia.mkt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linktr.ee/clevermedia.mkt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Linktree"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.897 1.052.89h1.294v4.776c0 .486-.404.89-.89.89H6.577a.898.898 0 0 1-.889-.891v-4.774H.992c-.728 0-1.214-.729-.89-1.377l6.96-12.627a1.065 1.065 0 0 1 1.863 0l2.913 5.585-3.885 7.042zm15.055 0-6.96-12.627a1.065 1.065 0 0 0-1.862 0l-2.913 5.585 3.885 7.042c.08.163.08.324.08.486-.08.517-.528.897-1.052.89h-1.294v4.776c0 .486.404.89.89.89h2.752a.898.898 0 0 0 .889-.891v-4.774h4.695c.728 0 1.214-.729.89-1.377z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com/clevermedia.mkt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 Clever Media Marketing - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};
