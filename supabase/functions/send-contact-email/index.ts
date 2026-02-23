import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function validateInput(data: any): { valid: boolean; error?: string } {
  const { nombre, apellido, email, whatsapp, mensaje } = data;

  if (!nombre || typeof nombre !== 'string' || nombre.length > 100) {
    return { valid: false, error: 'Invalid name' };
  }
  if (!apellido || typeof apellido !== 'string' || apellido.length > 100) {
    return { valid: false, error: 'Invalid last name' };
  }
  if (!email || typeof email !== 'string' || email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { valid: false, error: 'Invalid email' };
  }
  if (!whatsapp || typeof whatsapp !== 'string' || whatsapp.length > 30) {
    return { valid: false, error: 'Invalid phone number' };
  }
  if (!mensaje || typeof mensaje !== 'string' || mensaje.length > 5000) {
    return { valid: false, error: 'Invalid message' };
  }
  if (data.instagram && (typeof data.instagram !== 'string' || data.instagram.length > 100)) {
    return { valid: false, error: 'Invalid instagram' };
  }
  if (data.facebook && (typeof data.facebook !== 'string' || data.facebook.length > 100)) {
    return { valid: false, error: 'Invalid facebook' };
  }

  return { valid: true };
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();

    const validation = validateInput(body);
    if (!validation.valid) {
      return new Response(
        JSON.stringify({ error: validation.error }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { nombre, apellido, email, whatsapp, instagram, facebook, mensaje } = body;

    console.log("Sending contact email from:", nombre, apellido);

    const emailResponse = await resend.emails.send({
      from: "Clever Media <onboarding@resend.dev>",
      to: ["clevermedia.mkt@gmail.com"],
      subject: `Nuevo mensaje de contacto de ${escapeHtml(nombre)} ${escapeHtml(apellido)}`,
      reply_to: email,
      html: `
        <h1>Nuevo mensaje de contacto</h1>
        <h2>Información del contacto:</h2>
        <ul>
          <li><strong>Nombre:</strong> ${escapeHtml(nombre)} ${escapeHtml(apellido)}</li>
          <li><strong>Email:</strong> ${escapeHtml(email)}</li>
          <li><strong>WhatsApp:</strong> ${escapeHtml(whatsapp)}</li>
          <li><strong>Instagram:</strong> ${escapeHtml(instagram || 'No proporcionado')}</li>
          <li><strong>Facebook:</strong> ${escapeHtml(facebook || 'No proporcionado')}</li>
        </ul>
        <h2>Mensaje:</h2>
        <p>${escapeHtml(mensaje).replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log("Email sent successfully");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: "Unable to send message. Please try again later." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
