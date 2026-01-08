import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  projectType: z.string().min(1),
  budget: z.string().min(1),
  message: z.string().optional(),
  consent: z.boolean(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const validatedData = contactSchema.parse(body);

    // Here you would typically:
    // 1. Send an email notification
    // 2. Save to a database
    // 3. Send to a CRM or webhook

    // Example: Send to webhook (n8n, Zapier, etc.)
    const webhookUrl = process.env.WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...validatedData,
          source: "Le Cuisiniste Dunkerque - Landing Page",
          timestamp: new Date().toISOString(),
        }),
      });
    }

    // Log for development
    console.log("New contact form submission:", validatedData);

    return NextResponse.json(
      { success: true, message: "Demande envoyée avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Données invalides", details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Erreur lors de l'envoi de la demande" },
      { status: 500 }
    );
  }
}
