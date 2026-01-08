import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const styleDescriptions: Record<string, string> = {
  Moderne:
    "modern luxury kitchen with sleek handleless cabinets, quartz countertops, integrated high-end appliances, LED under-cabinet lighting, minimalist design",
  Classique:
    "classic elegant kitchen with shaker-style cabinets, marble countertops, brass hardware, warm wood tones, traditional crown molding details",
  Industriel:
    "industrial style kitchen with exposed elements, stainless steel surfaces, concrete countertops, metal fixtures, open shelving, pendant lights",
  Scandinave:
    "scandinavian kitchen with light oak wood cabinets, white clean surfaces, natural materials, warm minimalist atmosphere, functional elegant design",
  Minimaliste:
    "ultra minimalist kitchen with pure white surfaces, hidden storage, seamless cabinet doors, no visible hardware, zen-like simplicity",
  Contemporain:
    "contemporary kitchen with mixed materials, waterfall island, statement lighting, open plan design, sophisticated neutral palette",
};

export async function POST(request: Request) {
  try {
    // Check for API token
    if (!process.env.REPLICATE_API_TOKEN) {
      return NextResponse.json(
        {
          error:
            "Configuration manquante. Contactez-nous pour utiliser cette fonctionnalité.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { image, referenceImage, style, title } = body;

    if (!image) {
      return NextResponse.json(
        { error: "Image de votre espace requise" },
        { status: 400 }
      );
    }

    if (!referenceImage) {
      return NextResponse.json(
        { error: "Image de référence du catalogue requise" },
        { status: 400 }
      );
    }

    // Get style description based on the selected kitchen style
    const styleDescription = styleDescriptions[style] || styleDescriptions.Moderne;

    // Use ControlNet + IP-Adapter model that accepts 2 images:
    // - lineart_image: Photo de l'espace du prospect (structure à préserver)
    // - ip_adapter_image: Cuisine du catalogue (style à appliquer)
    const output = await replicate.run(
      "usamaehsan/controlnet-x-ip-adapter-realistic-vision:50ac06bb9bcf30e7b5dc66d3fe6e67262059a11ade572a35afa0ef686f55db82",
      {
        input: {
          prompt: `A ${styleDescription}, ${title} style kitchen.
Exact same kitchen design as the reference image. Copy the cabinets, countertops, appliances, colors and materials from the reference.
Remove all clutter, pans, dishes, objects. Clean empty kitchen showroom look.
High-end luxury kitchen interior, premium materials, professional interior design.
Photorealistic, cinematic lighting, 8k resolution, magazine quality photo.`,
          negative_prompt: "blur, distortion, bad architecture, deformed windows, artifacts, low quality, cartoon, illustration, text, watermark, clutter, pans, dishes, messy, dirty, objects on counter, cooking utensils",

          // IMAGE 1 : Structure de la pièce du client (ControlNet)
          lineart_image: image,
          structure_fidelity: 0.85,         // Force élevée pour garder les murs intacts

          // IMAGE 2 : Cuisine du catalogue (IP-Adapter)
          ip_adapter_image: referenceImage,
          ip_adapter_weight: 0.70,          // Force moyenne pour appliquer le style

          // Paramètres généraux
          num_inference_steps: 30,
          guidance_scale: 7.5,
        },
      }
    );

    // The output can be an array, FileOutput object, or string
    let imageUrl: string;

    if (Array.isArray(output)) {
      // If array, get first element
      const firstOutput = output[0];
      // FileOutput objects have a url() method or can be converted to string
      imageUrl = typeof firstOutput === 'string' ? firstOutput : String(firstOutput);
    } else if (typeof output === 'object' && output !== null) {
      // If it's a FileOutput object, convert to string (which gives the URL)
      imageUrl = String(output);
    } else {
      imageUrl = String(output);
    }

    console.log("Generated image URL:", imageUrl);

    return NextResponse.json({ imageUrl }, { status: 200 });
  } catch (error) {
    console.error("Kitchen generation error:", error);

    // Check for specific error types
    const errorMessage = error instanceof Error ? error.message : String(error);

    // Check for payment/billing issues
    if (errorMessage.includes("402") || errorMessage.includes("Payment Required")) {
      return NextResponse.json(
        {
          error:
            "Service IA temporairement indisponible. Contactez-nous pour un devis personnalisé.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      {
        error:
          "Erreur lors de la génération. Veuillez réessayer ou nous contacter.",
      },
      { status: 500 }
    );
  }
}
