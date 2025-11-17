import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartStore, ShopifyProduct } from "@/stores/cartStore";
import { ShoppingCart, Loader2 } from "lucide-react";
import { toast } from "sonner";

const SHOPIFY_STORE_PERMANENT_DOMAIN = 'lovable-project-fpta0.myshopify.com';
const SHOPIFY_API_VERSION = '2025-07';
const SHOPIFY_STOREFRONT_URL = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;
const SHOPIFY_STOREFRONT_TOKEN = 'dd54f6c04bd22e7ddd0b5db9b2aaa0a3';

const STOREFRONT_QUERY = `
  query GetProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          description
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                availableForSale
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
          options {
            name
            values
          }
        }
      }
    }
  }
`;

async function storefrontApiRequest(query: string, variables: any = {}) {
  const response = await fetch(SHOPIFY_STOREFRONT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  
  if (data.errors) {
    throw new Error(`Error calling Shopify: ${data.errors.map((e: any) => e.message).join(', ')}`);
  }

  return data;
}

const Courses = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await storefrontApiRequest(STOREFRONT_QUERY, { first: 10 });
        setProducts(data.data.products.edges);
      } catch (error) {
        console.error('Error fetching products:', error);
        toast.error("Error al cargar los productos");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product: ShopifyProduct) => {
    const variant = product.node.variants.edges[0].node;
    
    addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions
    });

    toast.success("Agregado al carrito", {
      description: product.node.title,
      position: "top-center",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="section-container pt-32 bg-card">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-gothic font-black mb-6 gradient-text animate-fade-in-up">
            ASESORÍAS Y CURSOS
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            Aprende con expertos y lleva tu negocio al siguiente nivel
          </p>
          
          <Card className="max-w-4xl mx-auto p-8 text-left animate-fade-in">
            <h2 className="font-gothic font-bold text-2xl mb-4">Asesorías 1:1 Personalizadas</h2>
            <p className="text-muted-foreground mb-6">
              ¿Tienes un negocio o emprendimiento y sientes que no sabes qué publicar o te sientes estancado(a), 
              sin estrategia y sin rumbo o ventas? Este servicio es para ti si:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <Badge className="mt-1 bg-primary">1</Badge>
                <p>Quieres cambiar el publicar sin rumbo a publicar con una intención, traducido a resultados</p>
              </li>
              <li className="flex items-start gap-3">
                <Badge className="mt-1 bg-primary">2</Badge>
                <p>No quieres contratar a una agencia con una cuota mensual pero sabes que necesitas guía profesional</p>
              </li>
              <li className="flex items-start gap-3">
                <Badge className="mt-1 bg-primary">3</Badge>
                <p>Ya tienes años en redes y buscas refrescar lo que ya haces</p>
              </li>
              <li className="flex items-start gap-3">
                <Badge className="mt-1 bg-primary">4</Badge>
                <p>Quieres motivarte y aprender más de este mundo para transmitirlo a tu equipo o a tu negocio</p>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              Es un servicio completamente personalizado donde se resuelven dudas y se traza un plan de acción.
            </p>
          </Card>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-gothic font-bold text-center mb-12">
            Productos Disponibles
          </h2>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-12 h-12 animate-spin text-primary" />
            </div>
          ) : products.length === 0 ? (
            <Card className="p-12 text-center max-w-2xl mx-auto">
              <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-gothic font-bold text-2xl mb-2">No hay productos disponibles aún</h3>
              <p className="text-muted-foreground">
                Pronto agregaremos nuestras asesorías y cursos. ¡Mantente al tanto!
              </p>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => {
                const variant = product.node.variants.edges[0]?.node;
                const image = product.node.images.edges[0]?.node;

                return (
                  <Card
                    key={product.node.id}
                    className="overflow-hidden hover-lift animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {image && (
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={image.url}
                          alt={image.altText || product.node.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="font-gothic font-bold text-xl mb-2">{product.node.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {product.node.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-2xl text-primary">
                          {variant.price.currencyCode} ${parseFloat(variant.price.amount).toFixed(2)}
                        </p>
                        <Button
                          onClick={() => handleAddToCart(product)}
                          disabled={!variant.availableForSale}
                          className="bg-primary hover:bg-primary-variant"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Agregar
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
