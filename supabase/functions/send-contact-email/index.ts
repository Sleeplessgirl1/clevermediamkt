import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  nombre: string;
  apellido: string;
  email: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  mensaje: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { nombre, apellido, email, whatsapp, instagram, facebook, mensaje }: ContactEmailRequest = await req.json();

    console.log("Sending contact email from:", nombre, apellido, email);

    const emailResponse = await resend.emails.send({
      from: "Clever Media <onboarding@resend.dev>",
      to: ["clevermedia.mkt@gmail.com"],
      subject: `Nuevo mensaje de contacto de ${nombre} ${apellido}`,
      reply_to: email,
      html: `
        <h1>Nuevo mensaje de contacto</h1>
        <h2>Información del contacto:</h2>
        <ul>
          <li><strong>Nombre:</strong> ${nombre} ${apellido}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>WhatsApp:</strong> ${whatsapp}</li>
          <li><strong>Instagram:</strong> ${instagram || 'No proporcionado'}</li>
          <li><strong>Facebook:</strong> ${facebook || 'No proporcionado'}</li>
        </ul>
        <h2>Mensaje:</h2>
        <p>${mensaje.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
