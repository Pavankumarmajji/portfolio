import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactFormRequest = await req.json();

    // Validate inputs
    if (!name || !email || !subject || !message) {
      console.error("Missing required fields:", { name, email, subject, message });
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Sending contact email from:", email);

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send email to Pavankumar
    const notificationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["pavankumarmajji12@gmail.com"],
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #8B5CF6;">New Contact Form Submission</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>From:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            <h3 style="color: #333;">Message:</h3>
            <p style="background: #fff; padding: 15px; border-left: 4px solid #8B5CF6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
        `,
        reply_to: email,
      }),
    });

    const notificationData = await notificationResponse.json();

    if (!notificationResponse.ok) {
      console.error("Resend API error (notification):", notificationData);
      return new Response(
        JSON.stringify({ error: notificationData.message || "Failed to send email" }),
        {
          status: notificationResponse.status,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Notification email sent successfully:", notificationData);

    // Send thank you confirmation email to the visitor
    const confirmationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Pavankumar Majji <onboarding@resend.dev>",
        to: [email],
        subject: "Thank you for reaching out!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #8B5CF6, #6366F1); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
              <h1 style="color: #fff; margin: 0;">Thank You, ${name}!</h1>
            </div>
            <div style="padding: 30px; background: #fff; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 12px 12px;">
              <p style="color: #333; font-size: 16px; line-height: 1.6;">
                I appreciate you taking the time to reach out through my portfolio. Your message has been received, and I'll get back to you as soon as possible.
              </p>
              <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #8B5CF6; margin-top: 0;">Your Message Summary:</h3>
                <p><strong>Subject:</strong> ${subject}</p>
                <p style="color: #666;">${message.replace(/\n/g, '<br>')}</p>
              </div>
              <p style="color: #333; font-size: 16px; line-height: 1.6;">
                In the meantime, feel free to connect with me on:
              </p>
              <div style="text-align: center; margin: 20px 0;">
                <a href="https://www.linkedin.com/in/pavankumarmajji/" style="display: inline-block; padding: 10px 20px; background: #0077B5; color: #fff; text-decoration: none; border-radius: 6px; margin: 0 5px;">LinkedIn</a>
                <a href="https://github.com/Pavankumarmajji" style="display: inline-block; padding: 10px 20px; background: #333; color: #fff; text-decoration: none; border-radius: 6px; margin: 0 5px;">GitHub</a>
              </div>
              <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 25px 0;">
              <p style="color: #666; font-size: 14px;">
                Best regards,<br>
                <strong style="color: #8B5CF6;">Pavankumar Majji</strong><br>
                Full Stack Developer
              </p>
            </div>
          </div>
        `,
      }),
    });

    const confirmationData = await confirmationResponse.json();

    if (!confirmationResponse.ok) {
      console.error("Resend API error (confirmation):", confirmationData);
      // Don't fail the request if confirmation email fails, just log it
    } else {
      console.log("Confirmation email sent successfully:", confirmationData);
    }

    return new Response(JSON.stringify({ success: true, data: notificationData }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
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
